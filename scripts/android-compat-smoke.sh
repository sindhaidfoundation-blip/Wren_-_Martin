#!/usr/bin/env bash
set -Eeuo pipefail

API_LEVEL="${1:?Android API level required}"
PACKAGE="com.grammar.master.wrenmartin"
LOG="android-api-${API_LEVEL}-launch.log"
: > "$LOG"

capture_diagnostics() {
  {
    echo
    echo "===== Diagnostics for Android API $API_LEVEL ====="
    echo "Captured: $(date -Is)"
    echo "===== App process ====="
    adb shell pidof "$PACKAGE" || true
    echo "===== Resumed activity ====="
    adb shell dumpsys activity activities | grep -E 'mResumedActivity|topResumedActivity' | tail -n 8 || true
    echo "===== Recent logcat ====="
    adb logcat -d -b all -t 20000 || true
  } >> "$LOG" 2>&1
}
trap capture_diagnostics EXIT

adb wait-for-device
BOOTED=false
for attempt in $(seq 1 90); do
  if [[ "$(adb shell getprop sys.boot_completed 2>/dev/null | tr -d '\\r' || true)" == "1" ]]; then
    BOOTED=true
    break
  fi
  sleep 2
done
if [[ "$BOOTED" != true ]]; then
  echo "Emulator did not finish booting." | tee -a "$LOG"
  exit 1
fi

adb install -r app/app-release.apk
# Some older emulator images do not permit clearing all log buffers; this is
# diagnostic setup only and must not fail an otherwise valid install test.
adb logcat -c >/dev/null 2>&1 || true

wait_for_foreground() {
  local attempts="$1"
  local attempt pid resumed
  for attempt in $(seq 1 "$attempts"); do
    pid="$(adb shell pidof "$PACKAGE" 2>/dev/null | tr -d '\\r' || true)"
    resumed="$(adb shell dumpsys activity activities 2>/dev/null | grep -E 'mResumedActivity|topResumedActivity' | grep "$PACKAGE" || true)"
    if [[ -n "$pid" && -n "$resumed" ]]; then
      return 0
    fi
    sleep 2
  done
  return 1
}

adb shell monkey -p "$PACKAGE" 1
if ! wait_for_foreground 60; then
  echo "App did not reach the foreground after cold launch." | tee -a "$LOG"
  exit 1
fi

sleep 10
adb shell am force-stop "$PACKAGE"
sleep 2
adb shell monkey -p "$PACKAGE" 1
if ! wait_for_foreground 45; then
  echo "App did not return to the foreground after relaunch." | tee -a "$LOG"
  exit 1
fi

sleep 15
adb logcat -d -b all -t 20000 > "$LOG" 2>&1
if grep -Eq "FATAL EXCEPTION|Fatal signal|ReactNativeJS.*(Error|Invariant Violation)|Unable to load script" "$LOG"; then
  echo "Fatal Android or React Native error detected." | tee -a "$LOG"
  exit 1
fi

echo "PASS: installed, cold-launched, and relaunched on Android API $API_LEVEL." | tee -a "$LOG"
