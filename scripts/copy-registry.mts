import { promises as fs } from "fs";
import path from "path";

async function buildRegistryJsonFile() {
  const cwd = process.cwd();
  const src = path.join(cwd, "registry.json");
  const destDir = path.join(cwd, "public", "r");
  const dest = path.join(destDir, "registry.json");

  try {
    // Check if source file exists
    await fs.access(src).catch(() => {
      console.warn("⚠️  registry.json not found, do not deploy!");
      return Promise.reject();
    });

    // Copy file
    await fs.copyFile(src, dest);
    console.log(`✔ Copied registry.json to public/r`);
  } catch (err: any) {
    if (err) {
      console.error("❌ Failed to copy registry.json:", err.message);
      process.exit(1);
    }
  }
}

try {
  await buildRegistryJsonFile();
  console.log("✔ Registry updated successfully.");
} catch (error) {
  console.error(error);
  process.exit(1);
}
