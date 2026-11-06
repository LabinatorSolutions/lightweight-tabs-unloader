# Changelog

All notable changes to Lightweight Tabs Unloader are documented here.

This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - Unreleased

First release. Set the date when it is submitted to AMO.

### Added

- Unloads background tabs from memory once they have gone unused for a set time (default 30 minutes; `0` turns
  unloading off). An unloaded tab stays in the tab strip and reloads when you click it.
- Never unloads the active tab of a window, tabs using the camera, microphone or screen sharing, or tabs another
  add-on has marked `autoDiscardable: false`.
- Options to skip pinned tabs and tabs playing sound (both on by default). Options save as you type.
- Labinator icon: a browser tab with a crescent moon, on an ultramarine square.
- README notes on the `about:config` prefs that pair well with it, including the one that grays out tabs unloaded
  by an add-on.
- Requires Firefox 159 or newer, desktop only (Firefox for Android has no `tabs.discard()`).
- Permissions: `alarms` (one check per minute) and `storage` (the settings) only. No access to tab URLs or titles,
  no data collection.
