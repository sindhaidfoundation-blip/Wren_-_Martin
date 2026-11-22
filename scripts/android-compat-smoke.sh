#!/usr/bin/env bash
set -euo pipefail
API_LEVEL="${1:?Android API level required}"
PACKAGE="com.grammar.master.wrenmartin"
LOG="android-api-${API_LEVEL}-launch.log"
capture_log() {
  adb logcat -d -b all -t 20000 > "$LOG" 2>&1 || true
  echo "===== Recent Android logcat (API $API_LEVEL) ====="
  tail -n 250 "$LOG" || true
  echo "===== App process ====="
  adb shell pidof "$PACKAGE" || true
  echo "===== Focused activity ====="
  adb shell dumpsys activity activities | grep -E "mResumedActivity|topResumedActivity" | tail -n 5 || true
}
trap capture_log EXIT
adb wait-for-device
for attempt in $(seq 1 60); do
  if [[ "$(adb shell getprop sys.boot_completed | tr -d '\r')" == "1" ]]; then break; fi
  sleep 2
done
[[ "$(adb shell getprop sys.boot_completed | tr -d '\r')" == "1" ]]
adb install -r app/app-release.apk
adb logcat -c >/dev/null 2>&1 || true
adb shell monkey -p "$PACKAGE" 1
started=false
for attempt in $(seq 1 60); do
  if adb shell pidof "$PACKAGE" | tr -d '\r' | grep -q '[0-9]'; then started=true; break; fi
  sleep 2
done
[[ "$started" == true ]]
sleep 10
adb shell am force-stop "$PACKAGE"
sleep 2
adb shell monkey -p "$PACKAGE" 1
restarted=false
for attempt in $(seq 1 30); do
  if adb shell pidof "$PACKAGE" | tr -d '\r' | grep -q '[0-9]'; then restarted=true; break; fi
  sleep 2
done
[[ "$restarted" == true ]]
sleep 5
adb logcat -d -b all -t 20000 > "$LOG"
if grep -Eq "FATAL EXCEPTION|Fatal signal|ReactNativeJS.*(Error|Invariant Violation)|Unable to load script" "$LOG"; then
  echo "A fatal app/runtime error was detected in logcat."
  exit 1
fi
echo "PASS: app installed, cold-launched and relaunched on Android API $API_LEVEL." | tee -a "$LOG"
