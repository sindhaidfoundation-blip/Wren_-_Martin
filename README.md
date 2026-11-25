# Wren & Martin Grammar Master

A bilingual English grammar learning app with Urdu explanations, interactive lessons, quizzes, daily practice and progress tracking.

## Native development and builds

This project includes `react-native-google-mobile-ads`, which contains native code and is not supported by Expo Go. Use a native development build or a release build instead.

- Install dependencies: `npm install`
- Run unit tests: `npm test`
- Validate Expo and native configuration: `npm run check:config && npm run check:expo`
- Generate Android native project: `npm run prebuild:android`
- Build Android release APK: `npm run build:android:release`
- Generate iOS native project on macOS: `npm run prebuild:ios`
- Build/run iOS on macOS with Xcode: `npx expo run:ios`

GitHub Actions validates Android, iOS and web bundles, builds Android APKs, runs Android emulator launch checks, and compiles an iOS Simulator app. A signed iOS device IPA still requires Apple signing credentials.

## Project status

This repository contains an original learning companion inspired by the grammar topics commonly taught alongside Wren & Martin. It does not reproduce the copyrighted book text. Lessons and examples are original starter content; additional chapters can be added in `src/data/lessons.js`.

## Platforms

- Android
- iOS

## Notes

Completed lessons, quiz history, daily-practice dates and unfinished quizzes are stored locally on the device. If the app closes during a lesson quiz, topic practice, daily practice, mistake review or timed full-course exam, the learner can resume the saved questions and answer selections after reopening. Existing timed-exam saves are migrated automatically. The certificate name is entered when generating a certificate and is not saved with learning progress. Cloud sync, user accounts and publishing to app stores are not configured yet.

## Native AdMob configuration

The Expo config plugin in `app.json` must contain both `androidAppId` and `iosAppId`. Android uses the registered Android App ID and the active banner unit from the AdMob account. iOS intentionally uses Google's sample test App ID and sample test banner unit until a real iOS AdMob app and banner unit are configured; replace both iOS sample IDs before a production App Store/TestFlight release. The web build omits ads because the Google Mobile Ads SDK is native-only. Do not use a banner ad-unit ID in place of an App ID.

Expo SDK 55 and later always use React Native's New Architecture; do not add `newArchEnabled` to `app.json` because the config schema no longer accepts that field.

Run `npm run check:config` and `npm run check:expo` to validate the native configuration and Expo package compatibility.
