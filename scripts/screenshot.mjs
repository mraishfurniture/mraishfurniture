/**
 * Dev utility: captures QA screenshots of the running site (npm run preview first).
 * Usage: node scripts/screenshot.mjs
 */
import puppeteer from 'puppeteer-core'

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const URL = 'http://localhost:4173/'
const SECTIONS = ['top', 'about', 'services', 'work', 'process', 'contact']

const browser = await puppeteer.launch({ executablePath: CHROME, headless: true })
const page = await browser.newPage()
await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }])

async function preloadWholePage() {
  await page.evaluate(async () => {
    const step = window.innerHeight
    for (let y = 0; y <= document.body.scrollHeight; y += step) {
      window.scrollTo(0, y)
      await new Promise((r) => setTimeout(r, 120))
    }
    window.scrollTo(0, 0)
  })
  await new Promise((r) => setTimeout(r, 1500))
}

// Desktop: per-section viewport shots
await page.setViewport({ width: 1440, height: 1000 })
await page.goto(URL, { waitUntil: 'networkidle0', timeout: 60000 })
await preloadWholePage()
for (const id of SECTIONS) {
  await page.evaluate((sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView()
  }, id)
  await new Promise((r) => setTimeout(r, 600))
  await page.screenshot({ path: `/tmp/shot-d-${id}.png` })
}
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
await new Promise((r) => setTimeout(r, 600))
await page.screenshot({ path: '/tmp/shot-d-footer.png' })

// Mobile: full page
await page.setViewport({ width: 390, height: 844, isMobile: true, deviceScaleFactor: 1.5 })
await page.goto(URL, { waitUntil: 'networkidle0', timeout: 60000 })
await preloadWholePage()
await page.screenshot({ path: '/tmp/shot-m-full.png', fullPage: true })

await browser.close()
console.log('done')
