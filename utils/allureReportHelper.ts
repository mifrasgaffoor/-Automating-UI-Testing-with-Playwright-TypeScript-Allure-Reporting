import { execSync } from "child_process";

export function generateAndOpenAllureReport() {
  try {
    console.log("Generating Allure Report...");
    execSync("npx allure generate ./allure-results --clean", {
      stdio: "inherit",
    });

    console.log("Opening Allure Report...");
    execSync("npx allure open ./allure-report", { stdio: "inherit" });
  } catch (err) {
    console.error("Allure report generation failed:", err);
  }
}
