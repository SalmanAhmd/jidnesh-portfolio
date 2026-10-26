import { chromium } from 'playwright-core';
const browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:3007', { waitUntil: 'networkidle' });
const info = await page.evaluate(() => {
  const nav = [...document.querySelectorAll('nav[aria-label="Primary"] a')];
  return {
    links: nav.map(a => ({ text: a.textContent, current: a.getAttribute('aria-current'), href: a.getAttribute('href') })),
    sections: ['about','experience','case-study','expertise','leadership','contact'].map(id => {
      const el = document.getElementById(id);
      return { id, top: Math.round(el.getBoundingClientRect().top + window.scrollY) };
    }),
    scrollY: window.scrollY,
  };
});
console.log('INITIAL', JSON.stringify(info, null, 2));
await page.locator('nav[aria-label="Primary"] a[href="#about"]').click();
await page.waitForTimeout(2500);
const after = await page.evaluate(() => ({
  scrollY: Math.round(window.scrollY),
  active: [...document.querySelectorAll('nav[aria-label="Primary"] a')].map(a => ({text:a.textContent, current:a.getAttribute('aria-current')})),
  aboutTop: Math.round(document.getElementById('about').getBoundingClientRect().top),
  aboutAbs: Math.round(document.getElementById('about').getBoundingClientRect().top + window.scrollY),
  marker: Math.round(window.scrollY + 150),
}));
console.log('AFTER CLICK', JSON.stringify(after, null, 2));
for (const y of [0, 500, 900, 1500, 2500, 4000, 6000, 8000, 10000, 12000, 14000]) {
  await page.evaluate(y => window.scrollTo(0, y), y);
  await page.waitForTimeout(120);
  const state = await page.evaluate(() => ({ scrollY: Math.round(window.scrollY), active: document.querySelector('nav[aria-label="Primary"] a[aria-current="true"]')?.textContent ?? null }));
  console.log(state);
}
await browser.close();
