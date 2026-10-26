import { chromium } from 'playwright-core';
const browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
console.log(await page.evaluate(() => {
  const h = getComputedStyle(document.documentElement);
  const s = getComputedStyle(document.getElementById('about'));
  return {
    scrollPaddingTop: h.scrollPaddingTop,
    scrollBehavior: h.scrollBehavior,
    scrollMarginTop: s.scrollMarginTop,
    sectionTop: document.getElementById('about').offsetTop,
    headerHeight: document.querySelector('.site-header').getBoundingClientRect().height,
    cssHasScrollPadding: [...document.styleSheets].flatMap(ss => { try { return [...ss.cssRules].map(r => r.cssText) } catch { return [] } }).filter(t => t.includes('scroll-padding')).slice(0,3)
  };
}));
await page.locator('nav[aria-label="Primary"] a[href="#about"]').click();
for (const t of [100,300,600,1000,2000,3000]) {
  await page.waitForTimeout(t);
  console.log(t, await page.evaluate(() => ({ y: Math.round(scrollY), top: Math.round(document.getElementById('about').getBoundingClientRect().top), active: document.querySelector('a[aria-current="true"]')?.textContent ?? null })));
}
await browser.close();
