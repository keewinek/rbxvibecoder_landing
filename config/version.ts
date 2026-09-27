// Single source of truth for the shipped plugin version.
//
// This used to be duplicated in routes/index.tsx and routes/api/get_version.ts,
// which is how the site ended up advertising v0.5 while the plugin was on 1.1.0.
// Bump it here only, and drop the matching .rbxmx into static/downloads/.

export const PLUGIN_VERSION = "1.1.0";

export const PLUGIN_DISPLAY = `Vibe Coder v${PLUGIN_VERSION}`;

export const DOWNLOAD_FILE_NAME = `Vibe Coder v${PLUGIN_VERSION}.rbxmx`;

export const DOWNLOAD_LINK = `/downloads/${DOWNLOAD_FILE_NAME}`;
