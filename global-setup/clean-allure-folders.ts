import fs from "fs";
import path from "path";

const deleteFolderIfExists = (folderPath: string) => {
  if (fs.existsSync(folderPath)) {
    fs.rmSync(folderPath, { recursive: true, force: true });
    console.log(`Deleted old ${folderPath}`);
  }
};

async function globalSetup() {
  const resultsPath = path.join(__dirname, "..", "allure-results");
  const reportPath = path.join(__dirname, "..", "allure-report");

  deleteFolderIfExists(resultsPath);
  deleteFolderIfExists(reportPath);
}

export default globalSetup;
