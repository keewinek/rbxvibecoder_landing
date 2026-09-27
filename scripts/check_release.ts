// Fails the build if the advertised plugin download is not actually shipped.
//
// The download link is derived from config/version.ts, so bumping the version
// without dropping the matching .rbxmx into static/downloads/ would deploy a
// site whose main call to action 404s. CI runs `deno task build`, not
// `deno task check`, so the guard lives in the build task.

import { DOWNLOAD_FILE_NAME, PLUGIN_VERSION } from "../config/version.ts";

const path = `static/downloads/${DOWNLOAD_FILE_NAME}`;

try {
  const info = await Deno.stat(path);
  if (!info.isFile || info.size === 0) {
    throw new Error("not a regular non-empty file");
  }
  console.log(`✓ release check: ${path} (${info.size} bytes)`);
} catch (error) {
  const reason = error instanceof Deno.errors.NotFound
    ? "file is missing"
    : String(error);
  console.error(
    [
      "",
      `✗ Release check failed for v${PLUGIN_VERSION}: ${reason}`,
      `  Expected: ${path}`,
      "",
      "  In Roblox Studio, right-click the `Vibe Coder` folder, choose",
      `  "Save to File...", and save it as "${DOWNLOAD_FILE_NAME}" in`,
      "  static/downloads/. Or correct PLUGIN_VERSION in config/version.ts.",
      "",
    ].join("\n"),
  );
  Deno.exit(1);
}
