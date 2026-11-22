#!/usr/bin/env bash
set -euo pipefail

API_LEVEL="${1:?Android API level required}"
PACKAGE="com.grammar.master.wrenmartin"
LOG="android-api-${API_LEVEL}-launch.log"

# GitHub-hosted Android emulators can briefly report "offline" while adbd
# starts. Retry transient transport failures instead of failing the app test.
adb_retry() {
  local attempt
  for attempt in $(seq 1 8); do
    if timeout 20s adb "$@"; then return 0; fi
    echo "ADB command failed (attempt ${attempt}/8): adb $*" >&2
    # Reset the host daemon as well as reconnecting the emulator transport.
    # This handles the runner-side "Unable to connect to adb daemon :5037" case.
    adb kill-server >/dev/null 2>&1 || true
    sleep 1
    adb start-server >/dev/null 2>&1 || true
    adb reconnect offline >/dev/null 2>&1 || true
    sleep 3
  done
  echo "ADB command did not recover after 8 attempts: adb $*" >&2
  return 1
}

capture_log() {
  adb_retry logcat -d -b all -t 20000 > "$LOG" 2>&1 || true
  {
    echo "===== Recent Android logcat (API $API_LEVEL) ====="
    tail -n 250 "$LOG" || true
    echo "===== App process ====="
    adb_retry shell pidof "$PACKAGE" || true
    echo "===== Focused activity ====="
    adb_retry shell dumpsys activity activities | grep -E "mResumedActivity|topResumedActivity" | tail -n 5 || true
  } >> "$LOG" 2>&1
}
trap capture_log EXIT

adb_retry start-server
adb_retry wait-for-device
BOOTED=false
for attempt in $(seq 1 90); do
  if [[ "$(adb_retry shell getprop sys.boot_completed | tr -d '\\r' || true)" == "1" ]]; then
    BOOTED=true
    break
  fi
  sleep 2
done
if [[ "$BOOTED" != true ]]; then
  echo "Android emulator did not finish booting." >&2
  exit 1
fi

adb_retry install -r app/app-release.apk
adb_retry logcat -c >/dev/null 2>&1 || true
adb_retry shell monkey -p "$PACKAGE" 1

wait_for_app() {
  local attempts="$1"
  local attempt pid focus
  for attempt in $(seq 1 "$attempts"); do
    pid="$(adb_retry shell pidof "$PACKAGE" 2>/dev/null | tr -d '\\r' || true)"
    focus="$(adb_retry shell dumpsys activity activities 2>/dev/null | grep -E 'mResumedActivity|topResumedActivity' | grep "$PACKAGE" || true)"
    if [[ -n "$pid" && -n "$focus" ]]; then return 0; fi
    sleep 2
  done
  return 1
}

if ! wait_for_app 60; then
  echo "App did not reach resumed foreground state after cold launch." >&2
  exit 1
fi

sleep 10
adb_retry shell am force-stop "$PACKAGE"
sleep 2
adb_retry shell monkey -p "$PACKAGE" 1
if ! wait_for_app 30; then
  echo "App did not return to resumed foreground state after relaunch." >&2
  exit 1
fi

sleep 5
adb_retry logcat -d -b all -t 20000 > "$LOG"
if grep -Eq "FATAL EXCEPTION|Fatal signal|ReactNativeJS.*(Error|Invariant Violation)|Unable to load script" "$LOG"; then
  echo "A fatal app/runtime error was detected in logcat."
  exit 1
fi

echo "PASS: app installed, cold-launched and relaunched on Android API $API_LEVEL." | tee -a "$LOG"
