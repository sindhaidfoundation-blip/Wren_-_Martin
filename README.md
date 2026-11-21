# Wren & Martin Grammar Master

A bilingual English grammar learning app with Urdu explanations, interactive lessons, quizzes, daily practice and progress tracking.

## Run locally

1. Install Node.js (LTS) and Expo Go on your phone.
2. Run `npm install`.
3. Run `npx expo start`.
4. Scan the QR code with Expo Go (Android) or the Camera app (iPhone).

## Project status

This repository contains an original learning companion inspired by the grammar topics commonly taught alongside Wren & Martin. It does not reproduce the copyrighted book text. Lessons and examples are original starter content; additional chapters can be added in `src/data/lessons.js`.

## Platforms

- Android
- iOS

## Notes

Progress and the learner's certificate name are stored locally on the device. After passing the full-course exam (60% or higher), learners can enter their name and generate a landscape PDF certificate, then save or share it using the Android or iOS share sheet. PDF generation uses Expo Print and file sharing uses Expo Sharing. Cloud sync, user accounts and publishing to app stores are not configured yet.
