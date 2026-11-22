#!/usr/bin/env bash
set -euo pipefail
PACKAGE="com.grammar.master.wrenmartin"
LOG="android-two-hour-soak.log"
MEMORY="android-two-hour-memory.log"
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
START="$(date +%s)"
LAST_MEMORY=0
: > "$LOG"
: > "$MEMORY"
while (( $(date +%s) - START < 7200 )); do
  ELAPSED=$(( $(date +%s) - START ))
  PID="$(adb shell pidof "$PACKAGE" | tr -d '\r' || true)"
  if [[ -z "$PID" ]]; then echo "App process disappeared at ${ELAPSED}s"; exit 1; fi
  FOCUS="$(adb shell dumpsys activity activities | grep -E 'mResumedActivity|topResumedActivity' | grep "$PACKAGE" || true)"
  if [[ -z "$FOCUS" ]]; then echo "App left foreground at ${ELAPSED}s"; exit 1; fi
  if (( ELAPSED - LAST_MEMORY >= 300 )); then
    echo "===== ${ELAPSED}s =====" >> "$MEMORY"
    adb shell dumpsys meminfo "$PACKAGE" >> "$MEMORY"
    LAST_MEMORY="$ELAPSED"
    adb logcat -d -b all -t 20000 > "$LOG"
    if grep -Eq "FATAL EXCEPTION|Fatal signal|ReactNativeJS.*(Error|Invariant Violation)|Unable to load script" "$LOG"; then
      echo "Fatal app/runtime error detected at ${ELAPSED}s"; exit 1
    fi
  fi
  sleep 30
done
adb logcat -d -b all -t 30000 > "$LOG"
if grep -Eq "FATAL EXCEPTION|Fatal signal|ReactNativeJS.*(Error|Invariant Violation)|Unable to load script" "$LOG"; then
  echo "Fatal app/runtime error detected during two-hour soak."; exit 1
fi
echo "PASS: app remained foregrounded for at least 7200 seconds." | tee -a "$LOG"
