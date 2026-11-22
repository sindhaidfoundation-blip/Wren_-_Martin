#!/usr/bin/env bash
set -euo pipefail
PACKAGE="com.grammar.master.wrenmartin"
DURATION_SECONDS=300
LOG="android-foreground-stability.log"
MEMORY="android-foreground-memory.log"

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
started=false
for attempt in $(seq 1 60); do
  if adb shell pidof "$PACKAGE" | tr -d '\r' | grep -q '[0-9]'; then started=true; break; fi
  sleep 2
done
[[ "$started" == true ]]
: > "$LOG"
: > "$MEMORY"
START="$(date +%s)"
while (( $(date +%s) - START < DURATION_SECONDS )); do
  ELAPSED=$(( $(date +%s) - START ))
  PID="$(adb shell pidof "$PACKAGE" | tr -d '\r' || true)"
  if [[ -z "$PID" ]]; then
    echo "FAIL: app process exited unexpectedly at ${ELAPSED}s" | tee -a "$LOG"
    adb logcat -d -b all -t 20000 >> "$LOG" || true
    exit 1
  fi
  FOCUS="$(adb shell dumpsys activity activities | grep -E 'mResumedActivity|topResumedActivity' | grep "$PACKAGE" || true)"
  if [[ -z "$FOCUS" ]]; then
    echo "FAIL: app was no longer foregrounded at ${ELAPSED}s" | tee -a "$LOG"
    adb logcat -d -b all -t 20000 >> "$LOG" || true
    exit 1
  fi
  echo "PASS checkpoint: ${ELAPSED}s pid=${PID}" | tee -a "$LOG"
  if (( ELAPSED % 60 < 10 )); then
    adb shell dumpsys meminfo "$PACKAGE" >> "$MEMORY"
    adb logcat -d -b all -t 20000 > "$LOG.tmp"
    if grep -Eq "FATAL EXCEPTION|Fatal signal|ReactNativeJS.*(Error|Invariant Violation)|Unable to load script" "$LOG.tmp"; then
      cat "$LOG.tmp" >> "$LOG"
      echo "FAIL: fatal app/runtime error detected at ${ELAPSED}s" | tee -a "$LOG"
      exit 1
    fi
    rm -f "$LOG.tmp"
  fi
  sleep 10
done
adb logcat -d -b all -t 30000 > "$LOG.final"
if grep -Eq "FATAL EXCEPTION|Fatal signal|ReactNativeJS.*(Error|Invariant Violation)|Unable to load script" "$LOG.final"; then
  cat "$LOG.final" >> "$LOG"
  echo "FAIL: fatal app/runtime error detected during foreground check." | tee -a "$LOG"
  exit 1
fi
echo "PASS: app stayed running in foreground for at least ${DURATION_SECONDS}s." | tee -a "$LOG"
