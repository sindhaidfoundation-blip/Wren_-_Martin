# Wren & Martin Grammar Master

A bilingual English grammar learning app with Urdu explanations, interactive lessons, quizzes, daily practice and progress tracking.

## Native development and builds

This project includes `react-native-google-mobile-ads`, which contains native code and is not supported by Expo Go. Use a native development build or a release build instead.

- Install dependencies: `npm install`
- Validate Expo and native configuration: `npm run check:config && npm run check:expo`
- Generate Android native project: `npm run prebuild:android`
- Build Android release APK: `npm run build:android:release`
- Generate iOS native project on macOS: `npm run prebuild:ios`
- Build/run iOS on macOS with Xcode: `npx expo run:ios`

GitHub Actions validates both Expo bundles, builds Android APKs, runs an Android emulator launch smoke test, and compiles an iOS Simulator app. A signed iOS device IPA still requires Apple signing credentials.

## Project status

This repository contains an original learning companion inspired by the grammar topics commonly taught alongside Wren & Martin. It does not reproduce the copyrighted book text. Lessons and examples are original starter content; additional chapters can be added in `src/data/lessons.js`.

## Platforms

- Android
- iOS

## Notes

Progress and the learner's certificate name are stored locally on the device. After passing the full-course exam (60% or higher), learners can enter their name and generate a landscape PDF certificate, then save or share it using the Android or iOS share sheet. PDF generation uses Expo Print and file sharing uses Expo Sharing. Cloud sync, user accounts and publishing to app stores are not configured yet.


## Native AdMob configuration

The Expo config plugin in `app.json` must contain both `androidAppId` and `iosAppId`. The iOS value currently uses Google's sample test App ID so native iOS builds have a valid application identifier while the integration is being verified. Before an App Store/TestFlight production release, replace it with the real iOS App ID from the AdMob account. Do not use a banner ad-unit ID in place of an App ID.

Expo SDK 55 and later always use React Native's New Architecture; do not add `newArchEnabled` to `app.json` because the config schema no longer accepts that field.

Run `npm run check:config` and `npm run check:expo` to validate the native configuration and Expo package compatibility.
