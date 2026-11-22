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
const expoMajor = Number(String(pkg.dependencies.expo || "").match(/\d+/)?.[0]);
if (!Number.isFinite(expoMajor) || expoMajor < 55) {
  errors.push("react-native-google-mobile-ads v17 requires the New Architecture; use Expo SDK 55 or later.");
}
if (!plugin) errors.push("react-native-google-mobile-ads config plugin is missing.");
for (const platform of ["android", "ios"]) {
  const id = plugin?.[1]?.[platform + "AppId"];
  if (typeof id !== "string" || !/^ca-app-pub-\d+~\d+$/.test(id)) {
    errors.push(`A valid ${platform}AppId is required in the Google Mobile Ads plugin.`);
  }
}
if (errors.length) {
  console.error("Expo native configuration validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}
console.log("Expo entry point, New Architecture, and Android/iOS AdMob App IDs are configured.");
