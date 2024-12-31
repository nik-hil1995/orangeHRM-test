import { expect, test } from "@playwright/test";

test.describe("login functionality test ", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(process.env.BASEURL);
  });
  test("Test login with valid credentials.", async ({ page }) => {
    await page.locator("//input[@name='username']").fill(process.env.USERNAME);
    await page.locator("//input[@name='password']").fill(process.env.PASSWORD);
    await page.locator("//button[@type='submit']").click();
  });

  test("Test login with in-valid credentials.", async ({ page }) => {
    await page.locator("//input[@name='username']").fill("wrong");
    await page.locator("//input[@name='password']").fill(process.env.PASSWORD);
    await page.locator("//button[@type='submit']").click();
    await expect(page.getByText("Invalid credentials")).toBeVisible();
  });

  test("Test login with empty username and password fields.", async ({
    page,
  }) => {
    await page.locator("//input[@name='username']").fill(" ");
    await page.locator("//input[@name='password']").fill(" ");
    await page.locator("//button[@type='submit']").click();
    await expect(
      page.locator(
        "//div[@class='orangehrm-login-slot-wrapper']//div[1]//div[1]//span[1]"
      )
    ).toBeVisible();
  });
  test("Test login when only the username or password is entered", async ({
    page,
  }) => {
    await page.locator("//input[@name='username']").fill(" ");
    await page.locator("//button[@type='submit']").click();
    await expect(
      page.locator(
        "//div[@class='orangehrm-login-slot-wrapper']//div[1]//div[1]//span[1]"
      )
    ).toBeVisible();
  });
});
