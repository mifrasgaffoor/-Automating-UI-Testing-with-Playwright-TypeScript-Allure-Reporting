import { Page, expect } from "@playwright/test";

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async gotoLoginPage() {
    await this.page.goto("/practice-test-login/");
  }

  async login(username: string, password: string) {
    await this.page.fill("#username", username);
    await this.page.fill("#password", password);
    await this.page.click("#submit");
  }

  async assertLoginSuccess() {
    await expect(this.page.locator("h1")).toContainText(
      /Logged In Successfully/
    );
    await expect(
      this.page.getByRole("link", { name: "Log out" })
    ).toBeVisible();
  }

  async assertErrorVisible(expectedText: string) {
    const error = this.page.locator("#error");
    await expect(error).toBeVisible();
    await expect(error).toHaveText(expectedText);
  }
}
