#!/usr/bin/env bash
set -euo pipefail

PACKAGE="com.grammar.master.wrenmartin"
DURATION_SECONDS="${DURATION_SECONDS:-1800}"
STARTUP_TIMEOUT_SECONDS=120
LOG="android-foreground-stability.log"
MEMORY="android-foreground-memory.log"

: > "$LOG"
: > "$MEMORY"

capture_diagnostics() {
  {
    echo
    echo "===== Foreground soak diagnostics ====="
    echo "Captured at: $(date -Is)"
    echo "===== App process ====="
    adb shell pidof "$PACKAGE" || true
    echo "===== Resumed/top activity ====="
    adb shell dumpsys activity activities | grep -E 'mResumedActivity|topResumedActivity' | tail -n 12 || true
    echo "===== Window focus ====="
    adb shell dumpsys window | grep -E 'mCurrentFocus|mFocusedApp' | tail -n 8 || true
    echo "===== Recent logcat ====="
    adb logcat -d -b all -t 30000 || true
  } >> "$LOG" 2>&1
  adb shell dumpsys meminfo "$PACKAGE" >> "$MEMORY" 2>&1 || true
}
trap capture_diagnostics EXIT

adb wait-for-device
for attempt in $(seq 1 60); do
  if [[ "$(adb shell getprop sys.boot_completed | tr -d '\r')" == "1" ]]; then break; fi
  sleep 2
done
[[ "$(adb shell getprop sys.boot_completed | tr -d '\r')" == "1" ]]

adb shell settings put system screen_off_timeout 2147483647 || true
adb shell settings put global stay_on_while_plugged_in 3 || true
adb shell svc power stayon true || true
adb install -r app/app-release.apk
adb logcat -c >/dev/null 2>&1 || true
adb shell monkey -p "$PACKAGE" 1

# A process can appear before Android has completed the activity transition.
# Do not start the soak clock until the app is actually resumed in the foreground.
FOCUS=""
for attempt in $(seq 1 $((STARTUP_TIMEOUT_SECONDS / 2))); do
  PID="$(adb shell pidof "$PACKAGE" | tr -d '\r' || true)"
  FOCUS="$(adb shell dumpsys activity activities | grep -E 'mResumedActivity|topResumedActivity' | grep "$PACKAGE" || true)"
  if [[ -n "$PID" && -n "$FOCUS" ]]; then break; fi
  sleep 2
done
if [[ -z "$PID" || -z "$FOCUS" ]]; then
  echo "FAIL: app did not reach resumed foreground state within ${STARTUP_TIMEOUT_SECONDS}s." | tee -a "$LOG"
  echo "Last observed PID: ${PID:-none}" | tee -a "$LOG"
  echo "Last observed activity: ${FOCUS:-none}" | tee -a "$LOG"
  exit 1
fi

echo "PASS: app reached foreground; beginning ${DURATION_SECONDS}s (30-minute default) soak." | tee -a "$LOG"
START="$(date +%s)"
NEXT_MEMORY=60
while (( $(date +%s) - START < DURATION_SECONDS )); do
  ELAPSED=$(( $(date +%s) - START ))
  PID="$(adb shell pidof "$PACKAGE" | tr -d '\r' || true)"
  if [[ -z "$PID" ]]; then
    echo "FAIL: app process exited unexpectedly at ${ELAPSED}s" | tee -a "$LOG"
    exit 1
  fi

  FOCUS="$(adb shell dumpsys activity activities | grep -E 'mResumedActivity|topResumedActivity' | grep "$PACKAGE" || true)"
  if [[ -z "$FOCUS" ]]; then
    echo "FAIL: app left the resumed foreground state at ${ELAPSED}s" | tee -a "$LOG"
    exit 1
  fi

  echo "PASS checkpoint: ${ELAPSED}s pid=${PID}" | tee -a "$LOG"

  if (( ELAPSED >= NEXT_MEMORY )); then
    adb shell dumpsys meminfo "$PACKAGE" >> "$MEMORY" 2>&1 || true
    adb logcat -d -b all -t 8000 > "$LOG.tmp" || true
    if grep -Eq "FATAL EXCEPTION|Fatal signal|ReactNativeJS.*(Error|Invariant Violation)|Unable to load script" "$LOG.tmp"; then
      cat "$LOG.tmp" >> "$LOG"
      echo "FAIL: fatal app/runtime error detected at ${ELAPSED}s" | tee -a "$LOG"
      rm -f "$LOG.tmp"
      exit 1
    fi
    rm -f "$LOG.tmp"
    NEXT_MEMORY=$((NEXT_MEMORY + 60))
  fi
  sleep 10
done

echo "PASS: app remained resumed in the foreground for ${DURATION_SECONDS}s." | tee -a "$LOG"
