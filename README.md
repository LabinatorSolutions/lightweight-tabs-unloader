# Lightweight Tabs Unloader

A Firefox desktop add-on (159+) that unloads background tabs from memory once they have gone unused for a
set time (default 30 minutes). An unloaded tab stays in the tab strip and reloads when you click it.

That is the whole feature. About 70 lines of JavaScript, no content scripts, no host permissions,
no access to tab URLs or titles.

Desktop only: Firefox for Android has no `tabs.discard()`, so the add-on could not unload anything there, and Android
already reclaims memory from background tabs on its own.

## Never unloaded

- The active tab of each window
- Pinned tabs and tabs playing sound (each can be switched off in the options)
- Tabs using the camera, microphone or screen sharing
- Tabs another add-on has marked `autoDiscardable: false`

## Permissions

| Permission | Why |
|---|---|
| `alarms` | One check per minute |
| `storage` | The three settings |

## Recommended Firefox settings

Extensions cannot read or set `about:config` prefs, so set these yourself:

```js
user_pref("browser.tabs.unloadOnLowMemory", true);
user_pref("browser.sessionstore.restore_pinned_tabs_on_demand", true);
```

Firefox grays out only tabs unloaded by hand (right-click → Unload Tab). Tabs unloaded by an add-on
stay full color unless you also set:

```js
user_pref("browser.tabs.fadeOutUnloadedTabs", true);
```

This also grays out tabs not yet loaded after a restart.

## Develop

```bash
bunx web-ext lint
bunx web-ext run
bunx web-ext build
```

## License

AGPL-3.0. See [LICENSE](LICENSE).
