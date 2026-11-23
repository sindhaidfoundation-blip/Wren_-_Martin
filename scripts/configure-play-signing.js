const fs = require("fs");
const path = require("path");

const required = [
  "ANDROID_UPLOAD_KEYSTORE_BASE64",
  "ANDROID_UPLOAD_STORE_PASSWORD",
  "ANDROID_UPLOAD_KEY_ALIAS",
  "ANDROID_UPLOAD_KEY_PASSWORD",
];
for (const name of required) {
  if (!process.env[name]) throw new Error("Missing GitHub Actions secret: " + name);
}
const appDir = path.join(process.cwd(), "android", "app");
const gradleFile = path.join(appDir, "build.gradle");
if (!fs.existsSync(gradleFile)) throw new Error("android/app/build.gradle was not generated");
const keystore = Buffer.from(process.env.ANDROID_UPLOAD_KEYSTORE_BASE64, "base64");
if (!keystore.length) throw new Error("Upload keystore secret is not valid base64");
fs.writeFileSync(path.join(appDir, "upload-keystore.jks"), keystore, { mode: 0o600 });

let gradle = fs.readFileSync(gradleFile, "utf8");
if (!gradle.includes("signingConfigs {")) {
  const block = `
    signingConfigs {
        release {
            storeFile file("upload-keystore.jks")
            storePassword System.getenv("ANDROID_UPLOAD_STORE_PASSWORD")
            keyAlias System.getenv("ANDROID_UPLOAD_KEY_ALIAS")
            keyPassword System.getenv("ANDROID_UPLOAD_KEY_PASSWORD")
        }
    }
`;
  if (!gradle.includes("buildTypes {")) throw new Error("Could not find buildTypes block");
  gradle = gradle.replace("buildTypes {", block + "\n    buildTypes {");
}
gradle = gradle.replace(/signingConfig\\s+signingConfigs\\.debug/g, "signingConfig signingConfigs.release");
if (!/signingConfig\\s+signingConfigs\\.release/.test(gradle)) {
  gradle = gradle.replace(/release\\s*\\{/, "release {\\n            signingConfig signingConfigs.release");
}
fs.writeFileSync(gradleFile, gradle);
console.log("Configured Play upload-key signing.");
