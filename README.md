# Wren Martin Grammar Master

A bilingual English grammar learning app with Urdu explanations, interactive lessons, quizzes, daily practice and progress tracking.

## Native development and builds

This project includes `react-native-google-mobile-ads`, which contains native code and is not supported by Expo Go. Use a native development build or a release build instead.

- Install dependencies: `npm install --legacy-peer-deps` (the npm override pins Expo SDK 57's `@expo/inline-modules` to its latest published SDK 57 version, while bypassing an unpublished optional CLI peer version).
- Validate Expo and native configuration: `npm run check:config && npx expo-doctor`
- Generate Android native project: `npx expo prebuild --platform android`
- Build Android release APK: `npm run build:android:release`
- Generate iOS native project on macOS: `npm run prebuild:ios`
- Build/run iOS on macOS with Xcode: `npx expo run:ios`

## Android distribution

The app keeps one Android application ID across supported stores: `com.grammar.master.wrenmartin`. Keep the same private release keystore for every store and every update.

- Huawei-branded Android devices skip Google Mobile Ads initialization so the learning features remain available without Google Play services.
- The GitHub Actions Android compatibility workflow disables ads in its test build and tests installation, cold launch and relaunch across Android API 26, 29, 33, 35 and 36.
- The signed production APK is built separately by the Android security/release workflow using private GitHub Actions secrets. Never commit signing keys or passwords.
- Store eligibility, seller verification, regional availability and listing assets are tracked in [docs/store-publishing.md](docs/store-publishing.md).

## Privacy

The app does not require learner accounts. Learning progress is stored locally. The public privacy policy is in `public/privacy-policy.html` and is deployed with the web build.

## Content and intellectual property

This repository contains an original learning companion inspired by grammar topics commonly taught alongside Wren & Martin. It does not reproduce the copyrighted book text. Lessons and examples are original starter content; additional chapters can be added in `src/data/lessons.js`.

Before publishing, confirm that the Wren & Martin name and any associated branding are used with permission. Do not use copyrighted book passages or cover artwork without authorization.

## App features

- English grammar lessons with Urdu explanations.
- Topic-based quizzes, daily practice and progress tracking.
- Timed full-course exam.
- PDF completion certificate generated on-device and shared using the device share sheet.

Progress and the learner's certificate name are handled locally. The certificate name is kept in memory for certificate generation and is not included in the saved learning-progress record.
