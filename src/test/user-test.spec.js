import { test, page } from "@playwright/test";

test.describe(" User Management (Admin Module)", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(process.env.BASEURL);
    await page.locator("//input[@name='username']").fill(process.env.USERNAME);
    await page.locator("//input[@name='password']").fill(process.env.PASSWORD);
    await page.locator("//button[@type='submit']").click();
  });

  test("Verify that a new user can be added successfully", async ({ page }) => {
    await page
      .locator("(//div[@class='orangehrm-paper-container']//button[1])[1]")
      .click();
    await page.locator("(//div[@class='oxd-select-text-input'])[1]").click();
  });
});
