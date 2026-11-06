// Keeps repository files out of the AMO package: only the manifest, icon, scripts, options page and LICENSE ship.
export default {
  ignoreFiles: [
    // AMO listing assets (icon, screenshots, store text) are uploaded separately.
    'amo',
    'amo/**',
    '*.md',
    'web-ext-config.mjs',
  ],
};
