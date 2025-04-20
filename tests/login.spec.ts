import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test.describe("Login Tests - PracticeTestAutomation", () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
  });

  test("Test Case 1: Positive Login Test", async () => {
    await loginPage.login("student", "Password123");
    await loginPage.assertLoginSuccess();
  });

  test("Test Case 2: Negative Username Test", async () => {
    await loginPage.login("incorrectUser", "Password123");
    await loginPage.assertErrorVisible("Your username is invalid!");
  });

  test("Test Case 3: Negative Password Test", async () => {
    await loginPage.login("student", "incorrectPassword");
    await loginPage.assertErrorVisible("Your password is invalid!");
  });
});
