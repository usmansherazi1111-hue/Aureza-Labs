import { chromium } from "playwright";
import { resolve, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { mkdirSync } from "node:fs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = process.argv[2] || resolve(ROOT, ".shots");
mkdirSync(OUT, { recursive: true });

const targets = [
  ["index.html", "home", 0],
  ["index.html", "home-services", 1400],
  ["index.html", "home-position", 2900],
  ["index.html", "home-work", 4300],
  ["work.html", "work", 0],
  ["work/linetrace.html", "case-hero", 0],
  ["work/linetrace.html", "case-features", 2600],
  ["services.html", "services", 300],
  ["process.html", "process", 200],
  ["contact.html", "contact", 200],
  ["about.html", "about", 0]
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 940 }, deviceScaleFactor: 1 });

for (const [file, name, scroll] of targets) {
  await page.goto(pathToFileURL(resolve(ROOT, file)).href, { waitUntil: "networkidle" });
  await page.evaluate((y) => window.scrollTo(0, y), scroll);
  await page.waitForTimeout(900);
  await page.screenshot({ path: resolve(OUT, `${name}.png`) });
  console.log("shot", name);
}

// dark theme + mobile
await page.goto(pathToFileURL(resolve(ROOT, "index.html")).href, { waitUntil: "networkidle" });
await page.evaluate(() => document.documentElement.setAttribute("data-theme", "dark"));
await page.waitForTimeout(600);
await page.screenshot({ path: resolve(OUT, "home-dark.png") });
console.log("shot home-dark");

const mob = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
await mob.goto(pathToFileURL(resolve(ROOT, "index.html")).href, { waitUntil: "networkidle" });
await mob.waitForTimeout(700);
await mob.screenshot({ path: resolve(OUT, "home-mobile.png") });
console.log("shot home-mobile");

await browser.close();
