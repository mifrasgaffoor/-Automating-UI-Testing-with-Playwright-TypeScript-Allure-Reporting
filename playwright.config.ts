import { defineConfig } from "@playwright/test";

export default defineConfig({
  use: {
    baseURL: "https://practicetestautomation.com",
    headless: true,
  },
  reporter: [["allure-playwright"]],
  globalSetup: "./global-setup/clean-allure-folders.ts",
  globalTeardown: "./global-teardown/generate-and-open-allure.ts",
});
