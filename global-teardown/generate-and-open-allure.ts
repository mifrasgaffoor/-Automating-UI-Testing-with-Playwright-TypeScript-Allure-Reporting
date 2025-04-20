import { generateAndOpenAllureReport } from "../utils/allureReportHelper";

async function globalTeardown() {
  generateAndOpenAllureReport();
}

export default globalTeardown;
