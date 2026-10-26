import { chromium } from 'playwright-core';
const browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
const metrics = await page.evaluate(() => {
  const box = sel => { const e = document.querySelector(sel); if(!e) return null; const r=e.getBoundingClientRect(); return {x:Math.round(r.x),y:Math.round(r.y),w:Math.round(r.width),h:Math.round(r.height),font:getComputedStyle(e).fontFamily,size:getComputedStyle(e).fontSize,opacity:getComputedStyle(e).opacity}; };
  return {
    bodyFont: getComputedStyle(document.body).fontFamily,
    h1: box('.hero-title'),
    heroCopy: box('.hero-copy'),
    heroCard: box('.hero-card'),
    hero: box('.hero'),
    nav: box('.site-header'),
    container: box('.hero .container'),
    about: box('#about'),
    caseSection: box('#case-study'),
    caseBody: box('.case-body'),
    caseRail: box('.case-rail'),
    contact: box('#contact'),
    footer: box('.site-footer'),
    pageHeight: document.documentElement.scrollHeight,
    revealCount: document.querySelectorAll('[data-reveal]').length,
    supportsViewTimeline: CSS.supports('animation-timeline','view()'),
    scrollWidth: document.documentElement.scrollWidth,
  };
});
console.log('DESKTOP', JSON.stringify(metrics, null, 2));

// opacity at key scroll positions
for (const id of ['about','experience','case-study','expertise','leadership','principles','education','contact']) {
  await page.evaluate(id => document.getElementById(id).scrollIntoView({behavior:'instant', block:'start'}), id);
  await page.waitForTimeout(350);
  const vals = await page.evaluate(id => {
    const section = document.getElementById(id);
    const reveals = [...section.querySelectorAll('[data-reveal]')].slice(0,5).map(e => ({cls:e.className, opacity:getComputedStyle(e).opacity, transform:getComputedStyle(e).transform}));
    return { sectionTop: Math.round(section.getBoundingClientRect().top), active: document.querySelector('a[aria-current="true"]')?.textContent ?? null, reveals };
  }, id);
  console.log('SCROLL', id, JSON.stringify(vals));
}

// mobile metrics
await page.setViewportSize({ width: 390, height: 844 });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
const mobile = await page.evaluate(() => {
  const box = sel => { const e = document.querySelector(sel); if(!e) return null; const r=e.getBoundingClientRect(); return {x:Math.round(r.x),y:Math.round(r.y),w:Math.round(r.width),h:Math.round(r.height),size:getComputedStyle(e).fontSize}; };
  return { h1: box('.hero-title'), card: box('.hero-card'), caseTitle: box('.case-title'), contact: box('.contact-panel'), pageHeight: document.documentElement.scrollHeight, scrollWidth: document.documentElement.scrollWidth };
});
console.log('MOBILE', JSON.stringify(mobile, null, 2));

// anchor after click
await page.locator('.menu-button').click();
await page.waitForTimeout(100);
await page.locator('#mobile-navigation a[href="#case-study"]').click();
await page.waitForTimeout(1500);
console.log('MOBILE CASE ANCHOR', await page.evaluate(() => ({y:Math.round(scrollY), top:Math.round(document.getElementById('case-study').getBoundingClientRect().top), active:document.querySelector('a[aria-current="true"]')?.textContent ?? null})));
await browser.close();
