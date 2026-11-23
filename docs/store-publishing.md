# Android multi-store release guide

## Release identity

- Store display name: **Wren Martin Grammar Master** (without an ampersand to satisfy Huawei's published app-name rules).
- Android application ID: `com.grammar.master.wrenmartin` — keep this unchanged across stores and updates.
- Current app version: `1.0.0`; initial Android version code: `1`.
- Category: Education.
- Price: Free.
- Support: `sindhaidfoundation@gmail.com`.
- Privacy policy: `https://sindhaidfoundation-blip.github.io/Wren_-_Martin/privacy-policy.html`.
- Android package format: APK for stores that request it; AAB only where the store accepts/requires it.
- Signing: use the same securely backed-up Android release keystore for every store and every update. Never commit the keystore or passwords.

## Suggested store listing copy

### Short description

Learn English grammar with Urdu explanations, lessons, quizzes and progress tracking.

### Full description

Build your English grammar skills with clear lessons, Urdu explanations and interactive practice.

Wren Martin Grammar Master includes:
- Grammar topics explained in accessible English and Urdu.
- Original examples and topic breakdowns.
- Topic-based quizzes and multiple-choice practice.
- Daily practice and learning progress saved on your device.
- A timed course exam and a downloadable/shareable completion certificate.

The app does not require an account. Learning progress is stored locally on your device. Some Android devices may display banner advertisements; advertising is disabled on Huawei-branded devices where Google Play services may not be available.

This is an independent learning app. Do not describe it as an official Wren & Martin product or use book cover artwork or copied passages unless you have permission.

## Store submission checklist

Before each submission:
1. Confirm the developer account is approved for the selected country and seller type.
2. Upload the same package ID and a properly signed production APK.
3. Provide the app icon and genuine screenshots from the current app build (home, lesson, quiz, progress and certificate screens).
4. Provide the privacy-policy URL, support email, category, age/content-rating answers and accurate data-safety disclosures.
5. Declare advertising accurately for stores/devices where the Google Mobile Ads SDK can run.
6. Select only countries where the store confirms distribution is available.
7. Keep the release keystore safe; all updates must use the same signing identity.

## Store-specific eligibility notes (checked November 23, 2026)

- **Huawei AppGallery:** individual developer identity verification is required. Submit the signed APK through AppGallery Connect. Huawei devices skip Google Mobile Ads initialization in the app.
- **Xiaomi GetApps:** its global developer documentation describes individual app submission and an ownership-verification step. Complete the console's current account and regional checks.
- **OPPO App Market:** create an individual developer account and confirm country/region distribution eligibility in OPPO's portal before submission. Availability can vary by market.
- **Samsung Galaxy Store:** a Seller Portal account is not enough; Samsung requires commercial seller status to distribute free or paid Android apps. Private/individual sellers can apply, and financial verification may be required.
- **Direct APK:** a signed APK can also be distributed through a public GitHub Release or the app website. Explain Android's “install unknown apps” permission clearly and publish a checksum.
- **Google Play:** excluded from the zero-fee route because full public distribution requires the paid developer registration.
- **Amazon Appstore:** not a route for new Android mobile app submissions; consider only Fire TV/Fire Tablet if that audience is relevant.
- **vivo V-Appstore:** current developer guidance says individual developer registration is not supported; an enterprise account is required.
- **F-Droid and other third-party catalogs:** do not assume eligibility. Review each catalog's open-source, SDK, signing, content and regional rules before preparing a separate build.

## Build and verification

- `npm run check:config`
- `npx expo-doctor`
- `npx expo prebuild --clean --platform android`
- `cd android && ./gradlew assembleRelease`

The GitHub Actions compatibility workflow builds a test APK with ads disabled and checks install, cold launch, relaunch and fatal logs on Android API 26, 29, 33, 35 and 36. This is emulator coverage, not a substitute for testing on physical Huawei, OPPO, Samsung and Xiaomi devices.
