import { FreshContext } from "$fresh/server.ts";
import { PLUGIN_DISPLAY, PLUGIN_VERSION } from "../../config/version.ts";

// The installed plugin checks this endpoint FIRST for update prompts and only
// falls back to the backend, so the shape must match /api/plugin-version there:
// the plugin reads `display`, then `version`.
export const handler = (_req: Request, _ctx: FreshContext): Response => {
  return new Response(
    JSON.stringify({ version: PLUGIN_VERSION, display: PLUGIN_DISPLAY }),
    {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
    },
  );
};
