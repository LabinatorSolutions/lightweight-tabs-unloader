"use strict";

// Shared with options.js. minutes = 0 turns unloading off.
const DEFAULTS = { minutes: 30, skipPinned: true, skipAudible: true };
const ALARM = "sweep";

// One alarm, once a minute. Firefox drops alarms at shutdown, and this event
// page re-runs on every wake, so create it only when it is missing; recreating
// it on each wake would keep resetting the countdown.
browser.alarms.get(ALARM).then((alarm) => {
  if (!alarm) browser.alarms.create(ALARM, { periodInMinutes: 1 });
});

browser.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === ALARM) sweep();
});

async function sweep() {
  const { minutes, skipPinned, skipAudible } =
    await browser.storage.local.get(DEFAULTS);
  if (!(minutes > 0)) return;

  const cutoff = Date.now() - minutes * 60_000;
  // Firefox stamps lastAccessed at creation for tabs opened in the background,
  // so never-viewed tabs age from when they were opened.
  const tabs = await browser.tabs.query({ active: false, discarded: false });

  const stale = tabs.filter(
    (t) =>
      t.lastAccessed < cutoff &&
      t.autoDiscardable !== false &&
      !(skipPinned && t.pinned) &&
      !(skipAudible && t.audible) &&
      !isSharing(t),
  );

  // One by one, so a tab that cannot be discarded (closed mid-sweep,
  // privileged page) does not abort the rest.
  await Promise.allSettled(stale.map((t) => browser.tabs.discard(t.id)));
}

// A tab using the camera, microphone or screen sharing is never unloaded.
function isSharing(tab) {
  const s = tab.sharingState;
  return Boolean(s && (s.camera || s.microphone || s.screen));
}
