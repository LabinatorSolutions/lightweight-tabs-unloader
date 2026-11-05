"use strict";

const DEFAULTS = { minutes: 30, skipPinned: true, skipAudible: true };
const $ = (id) => document.getElementById(id);

browser.storage.local.get(DEFAULTS).then((s) => {
  $("minutes").value = s.minutes;
  $("skipPinned").checked = s.skipPinned;
  $("skipAudible").checked = s.skipAudible;
});

document.addEventListener("change", async () => {
  const minutes = Math.min(10080, Math.max(0, Math.round(Number($("minutes").value) || 0)));
  $("minutes").value = minutes;
  await browser.storage.local.set({
    minutes,
    skipPinned: $("skipPinned").checked,
    skipAudible: $("skipAudible").checked,
  });
  $("saved").textContent = minutes ? `Saved. Tabs unload after ${minutes} min.` : "Saved. Unloading is off.";
});
