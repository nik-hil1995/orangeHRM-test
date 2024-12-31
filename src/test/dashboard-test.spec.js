import { expect, test } from "@playwright/test";
require("dotenv").config();

test.describe("dashboard test", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(process.env.BASEURL);
    await page.locator("//input[@name='username']").fill(process.env.USERNAME);
    await page.locator("//input[@name='password']").fill(process.env.PASSWORD);
    await page.locator("//button[@type='submit']").click();
  });
  test("Verify that the dashboard loads correctly after login ", async ({
    page,
  }) => {
    await expect(
      page.locator("//div[@class='oxd-brand-banner']")
    ).toBeVisible(); //expect the logo is visible
  });

  test("Test navigation to other modules (Admin, PIM, Leave, etc.) from the dashboard", async ({
    page,
  }) => {
    await page
      .locator("//a[@class='oxd-main-menu-item active']//span[1]")
      .click();
    await page.locator("//span[normalize-space()='PIM']").click();
    await page.locator("//span[normalize-space()='Leave']").click();
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });
});
