import { mkdir } from "node:fs/promises";
import { chromium } from "playwright";

const baseUrl = process.env.BASE_URL || "http://127.0.0.1:3096";
await mkdir("artifacts", { recursive: true });
const browser = await chromium.launch({ headless: true });

try {
  for (const item of [
    { name: "desktop", width: 1440, height: 900, colorScheme: "light" },
    { name: "mobile", width: 390, height: 844, colorScheme: "light" },
    { name: "dark", width: 1440, height: 900, colorScheme: "dark" },
  ]) {
    const page = await browser.newPage({
      viewport: { width: item.width, height: item.height },
      colorScheme: item.colorScheme,
    });
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    const response = await page.goto(baseUrl, { waitUntil: "networkidle" });
    if (response?.status() !== 200) throw new Error(`${item.name}: home returned ${response?.status()}`);
    await page.locator('h1:has-text("Give every student")').waitFor();
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: `artifacts/students-${item.name}.png` });
    const tiers = await page.locator("#licenses > div").allInnerTexts();
    const expectedTiers = [
      { seats: "1–99 licenses", price: "€25" },
      { seats: "100–500 licenses", price: "€15" },
      { seats: "501+ licenses", price: "€10" },
    ];
    if (tiers.length !== expectedTiers.length || expectedTiers.some((tier, index) =>
      !tiers[index]?.toLowerCase().includes(tier.seats.toLowerCase()) || !tiers[index]?.includes(tier.price))) {
      throw new Error(`${item.name}: pricing tiers are incorrect: ${JSON.stringify(tiers)}`);
    }
    if (item.name !== "dark") {
      await page.locator("#licenses").screenshot({ path: `artifacts/students-pricing-${item.name}.png` });
    }
    if (item.name === "mobile") {
      await page.locator("#overview").screenshot({ path: "artifacts/students-overview-mobile.png" });
      await page.locator("#privacy").screenshot({ path: "artifacts/students-privacy-mobile.png" });
      await page.screenshot({ path: "artifacts/students-privacy-viewport.png" });
    }
    const width = await page.evaluate(() => document.documentElement.scrollWidth);
    if (width > item.width + 1) throw new Error(`${item.name}: horizontal overflow ${width}px`);
    if (errors.length) throw new Error(`${item.name}: ${errors.join("; ")}`);
    if (item.name === "desktop") {
      const link = page.getByRole("link", { name: /Preview cohort dashboard/i });
      await link.click();
      await page.waitForURL("**/dashboard-preview");
      await page.getByText("This is an interface concept with sample figures.", { exact: false }).waitFor();
      const activationNumber = page.locator('section[aria-labelledby="adoption-title"] strong').first();
      const activationBounds = await activationNumber.boundingBox();
      if (!activationBounds || activationBounds.y + activationBounds.height > item.height) {
        throw new Error("desktop: cohort activation figure is below the first viewport");
      }
      await page.screenshot({ path: "artifacts/students-dashboard-preview.png" });
    }
    console.log(`${item.name}: home 200, no page errors or horizontal overflow`);
    await page.close();
  }
} finally {
  await browser.close();
}
