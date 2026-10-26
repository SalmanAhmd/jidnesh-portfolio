import { chromium } from 'playwright-core';
import AxeBuilder from '@axe-core/playwright';

const browser = await chromium.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true,
});
const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
const page = await context.newPage();
const consoleErrors = [];
const pageErrors = [];
page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
page.on('pageerror', err => pageErrors.push(err.message));

await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);

const report = {};
report.title = await page.title();
report.description = await page.locator('meta[name="description"]').getAttribute('content');
report.canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
report.ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
report.ogImage = await page.locator('meta[property="og:image"]').getAttribute('content');
report.h1Count = await page.locator('h1').count();
report.h1 = await page.locator('h1').innerText();
report.sections = await page.locator('main section[id]').evaluateAll(els => els.map(e => e.id));
report.headings = await page.locator('h1,h2,h3,h4').evaluateAll(els => els.map(e => `${e.tagName}:${e.textContent.trim().slice(0,60)}`));
report.emptyHrefs = await page.locator('a').evaluateAll(els => els.filter(e => !e.getAttribute('href') || e.getAttribute('href') === '#').map(e => e.textContent.trim()));
report.externalLinks = await page.locator('a[target="_blank"]').evaluateAll(els => els.map(e => e.href));
report.resumeHref = await page.locator('a[download]').first().getAttribute('href');
report.resumeDownload = await page.locator('a[download]').first().getAttribute('download');

const resumeResponse = await page.request.get('http://localhost:3000' + report.resumeHref);
report.resumeStatus = resumeResponse.status();
report.resumeType = resumeResponse.headers()['content-type'];
report.resumeBytes = (await resumeResponse.body()).length;

// desktop link / anchor behavior
await page.locator('a[href="#about"]').first().click();
await page.waitForTimeout(1200);
report.aboutScrollY = await page.evaluate(() => Math.round(window.scrollY));
report.activeNav = await page.locator('nav[aria-label="Primary"] a[aria-current="true"]').innerText().catch(() => null);

// keyboard focus
await page.keyboard.press('Tab');
report.focusTag = await page.evaluate(() => document.activeElement?.tagName);
report.focusOutline = await page.evaluate(() => getComputedStyle(document.activeElement).outlineStyle);

// theme toggle
const themeBefore = await page.evaluate(() => document.documentElement.dataset.theme);
await page.locator('.theme-toggle').click();
const themeAfter = await page.evaluate(() => document.documentElement.dataset.theme);
const storedTheme = await page.evaluate(() => localStorage.getItem('jidnesh-theme'));
await page.reload({ waitUntil: 'networkidle' });
const themeReloaded = await page.evaluate(() => document.documentElement.dataset.theme);
report.theme = { themeBefore, themeAfter, storedTheme, themeReloaded };
await page.locator('.theme-toggle').click();
await page.waitForTimeout(200);

// light theme axe
const axeDark = await new AxeBuilder({ page }).analyze();
report.axeDarkViolations = axeDark.violations.map(v => ({ id: v.id, impact: v.impact, nodes: v.nodes.length, help: v.help }));
await page.locator('.theme-toggle').click();
await page.waitForTimeout(250);
const axeLight = await new AxeBuilder({ page }).analyze();
report.axeLightViolations = axeLight.violations.map(v => ({ id: v.id, impact: v.impact, nodes: v.nodes.length, help: v.help }));
await page.locator('.theme-toggle').click();
await page.waitForTimeout(200);

// overflow checks across widths
report.overflow = {};
for (const width of [1440, 1280, 1024, 980, 900, 768, 640, 560, 480, 390, 360, 320]) {
  await page.setViewportSize({ width, height: 900 });
  await page.waitForTimeout(150);
  report.overflow[width] = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
    bodyScrollWidth: document.body.scrollWidth,
  }));
}

// mobile menu
await page.setViewportSize({ width: 390, height: 844 });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
const menuButton = page.locator('.menu-button');
report.menuVisible = await menuButton.isVisible();
await menuButton.click();
await page.waitForTimeout(100);
report.menuExpanded = await menuButton.getAttribute('aria-expanded');
report.menuPanelVisible = await page.locator('#mobile-navigation').isVisible();
report.menuFocus = await page.evaluate(() => ({ tag: document.activeElement?.tagName, text: document.activeElement?.textContent?.trim().slice(0, 40) }));
await page.locator('#mobile-navigation a[href="#case-study"]').click();
await page.waitForTimeout(1200);
report.menuClosedAfterClick = (await page.locator('#mobile-navigation').count()) === 0;
report.caseStudyTop = await page.evaluate(() => Math.round(document.getElementById('case-study').getBoundingClientRect().top));

// reopen and escape
await page.locator('.menu-button').click();
await page.waitForTimeout(100);
await page.keyboard.press('Escape');
await page.waitForTimeout(100);
report.menuClosedAfterEscape = (await page.locator('#mobile-navigation').count()) === 0;
report.menuFocusAfterEscape = await page.evaluate(() => document.activeElement?.className);

// mobile axe
const axeMobile = await new AxeBuilder({ page }).analyze();
report.axeMobileViolations = axeMobile.violations.map(v => ({ id: v.id, impact: v.impact, nodes: v.nodes.length, help: v.help }));

// 404
const notFound = await page.request.get('http://localhost:3000/this-page-does-not-exist');
report.notFoundStatus = notFound.status();
report.notFoundHasTitle = (await notFound.text()).includes("This page didn't pass validation");

// screenshots
await page.setViewportSize({ width: 1440, height: 1000 });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
await page.screenshot({ path: '/tmp/jidnesh-desktop.png', fullPage: true });
await page.setViewportSize({ width: 390, height: 844 });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
await page.screenshot({ path: '/tmp/jidnesh-mobile.png', fullPage: true });

// reduced motion
const rmContext = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
const rmPage = await rmContext.newPage();
await rmPage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
report.reducedMotionScrollBehavior = await rmPage.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior);
report.reducedMotionAnimation = await rmPage.evaluate(() => getComputedStyle(document.querySelector('.hero-title')).animationDuration);
await rmContext.close();

report.consoleErrors = consoleErrors;
report.pageErrors = pageErrors;
console.log(JSON.stringify(report, null, 2));
await browser.close();
