"use strict";

const DEFAULTS = { minutes: 30, skipPinned: true, skipAudible: true };
const $ = (id) => document.getElementById(id);

browser.storage.local.get(DEFAULTS).then((s) => {
  $("minutes").value = s.minutes;
  $("skipPinned").checked = s.skipPinned;
  $("skipAudible").checked = s.skipAudible;
});

// Save while typing, not only on "change": a number field fires "change" on
// Enter or blur, and switching tabs or closing the panel fires neither, so the
// value was silently never saved. The short delay keeps half-typed values
// ("1" on the way to "120") from being stored.
let timer;
document.addEventListener("input", () => {
  clearTimeout(timer);
  timer = setTimeout(save, 600);
});
document.addEventListener("change", () => {
  clearTimeout(timer);
  save();
});

async function save() {
  const raw = $("minutes").value;
  if (raw === "" || !Number.isFinite(Number(raw))) return;
  const minutes = Math.min(10080, Math.max(0, Math.round(Number(raw))));
  if (document.activeElement !== $("minutes")) $("minutes").value = minutes;
  await browser.storage.local.set({
    minutes,
    skipPinned: $("skipPinned").checked,
    skipAudible: $("skipAudible").checked,
  });
  $("saved").textContent = minutes ? `Saved. Tabs unload after ${minutes} min unused.` : "Saved. Unloading is off.";
}
