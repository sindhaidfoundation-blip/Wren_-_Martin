import fs from "node:fs";

const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
const app = JSON.parse(fs.readFileSync("app.json", "utf8")).expo;

const plugin = (app.plugins || []).find(
  (item) => Array.isArray(item) && item[0] === "react-native-google-mobile-ads"
);

const errors = [];
if (!fs.existsSync("App.js")) errors.push("App.js is missing.");
if (pkg.main !== "node_modules/expo/AppEntry.js") {
  errors.push('package.json "main" must point to node_modules/expo/AppEntry.js.');
}
if (!app.android?.package) errors.push("Android package identifier is missing.");
if (!app.ios?.bundleIdentifier) errors.push("iOS bundle identifier is missing.");
if (!Number.isInteger(app.android?.versionCode) || app.android.versionCode < 1) {
  errors.push("Android versionCode must be a positive integer.");
}
if (typeof app.icon !== "string" || !fs.existsSync(app.icon)) {
  errors.push("The configured app icon file is missing.");
}
if (
  typeof app.android?.adaptiveIcon?.foregroundImage !== "string" ||
  !fs.existsSync(app.android.adaptiveIcon.foregroundImage)
) {
  errors.push("The configured Android adaptive icon foreground image is missing.");
}
if (app.name.length > 30 || app.name.includes("&")) {
  errors.push("Use a store-safe app name of 30 characters or fewer without an ampersand.");
}
if (!plugin) errors.push("react-native-google-mobile-ads config plugin is missing.");
for (const platform of ["android", "ios"]) {
  const id = plugin?.[1]?.[platform + "AppId"];
  if (typeof id !== "string" || !/^ca-app-pub-\d+~\d+$/.test(id)) {
    errors.push(`A valid ${platform}AppId is required in the Google Mobile Ads plugin.`);
  }
}

if (errors.length) {
  console.error("Expo release configuration validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}
console.log("Expo identifiers, version code, store-safe name, launcher icons, and AdMob configuration are valid.");
