A lightweight Firefox extension that unloads background tabs from memory once they have gone unused for a set time (**30 minutes** by default). An unloaded tab stays in your tab strip and reloads when you click it.
That is the whole feature: about 70 lines of JavaScript, no access to your tabs' addresses or titles, and no access to any website.

💯 **Free & open-source**
🔓 Publicly available on GitHub:
👉 [https://github.com/LabinatorSolutions/lightweight-tabs-unloader](https://github.com/LabinatorSolutions/lightweight-tabs-unloader)
Contributions, issues, and pull requests are always welcome!

**🎯 Why This Exists**

Dozens of open tabs keep using memory long after you stopped looking at them. Firefox unloads tabs on its own only when memory is already running low. This add-on unloads them on a schedule you choose, and does nothing else.

**✨ Key Features**

- 💤 **Unloads Idle Tabs** — Background tabs unused for your chosen time are unloaded by a check that runs once a minute.
- ⏱️ **Your Timer** — Set the minutes in the options; `0` turns unloading off.
- 📌 **Keeps What Matters Loaded** — Pinned tabs and tabs playing sound stay loaded (each can be switched off).
- 🪶 **Tiny & Transparent** — No content scripts, no host permissions, no tab URLs or titles read.

**🛡️ Never Unloaded**

- 👀 The active tab of each window
- 📌 Pinned tabs (unless you switch it off)
- 🔊 Tabs playing sound (unless you switch it off)
- 🎥 Tabs using your camera, microphone or screen sharing
- 🧩 Tabs another add-on has marked as not to be unloaded

**🎮 How to Use**

1. **Install the extension** — it works right away with a 30-minute timer
2. **Change the timer** in `about:addons` → Lightweight Tabs Unloader → Options
3. **Click an unloaded tab** to load it again

**🦊 Recommended Firefox Settings**

Extensions cannot change `about:config`, so set these yourself if you want them:

- `browser.tabs.unloadOnLowMemory` = `true` — also unload early when memory runs low
- `browser.sessionstore.restore_pinned_tabs_on_demand` = `true` — pinned tabs load only when clicked after a restart
- `browser.tabs.fadeOutUnloadedTabs` = `true` — gray out tabs this add-on unloads

**🔐 Privacy Policy (Short & Clear)**

- ✅ No data collection or transmission
- ✅ No tracking, analytics, or telemetry
- ✅ No external network requests
- ✅ All processing happens locally

Permissions requested:

- `alarms` — One check per minute
- `storage` — Your three settings

That's it.
🚫 No access to your tabs' addresses or titles
🚫 No access to the websites you visit

**🧾 Requirements**

- 🦊 **Firefox 159 or newer** (desktop). Older Firefox releases carry known, unpatched security vulnerabilities.

**👨🏻‍🔬 Credits**

Developed by the team behind **[Labinator](https://labinator.com/)**.

**📞 Support & Issues**

- 🐞 Bug reports & feature requests: 👉 [https://github.com/LabinatorSolutions/lightweight-tabs-unloader/issues](https://github.com/LabinatorSolutions/lightweight-tabs-unloader/issues)

**📜 Disclaimer**

This extension is **not affiliated with, endorsed by, or connected to** Mozilla.
