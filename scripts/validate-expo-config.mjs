import fs from "node:fs";

const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
const app = JSON.parse(fs.readFileSync("app.json", "utf8")).expo;

const errors = [];
if (!fs.existsSync("App.js")) errors.push("App.js is missing.");
if (pkg.main !== "node_modules/expo/AppEntry.js") {
  errors.push('package.json "main" must point to node_modules/expo/AppEntry.js.');
}
if (!app.android?.package) errors.push("Android package identifier is missing.");
if (!app.ios?.bundleIdentifier) errors.push("iOS bundle identifier is missing.");
if (typeof app.icon !== "string" || !fs.existsSync(app.icon)) {
  errors.push("The configured app launcher icon file is missing.");
}
if (
  typeof app.android?.adaptiveIcon?.foregroundImage !== "string" ||
  !fs.existsSync(app.android.adaptiveIcon.foregroundImage)
) {
  errors.push("The configured Android adaptive icon foreground image is missing.");
}

if (errors.length) {
  console.error("Expo native configuration validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("Expo entry point, platform identifiers, and launcher icon assets are configured.");
