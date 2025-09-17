import { FreshContext } from "$fresh/server.ts";

const CURRENT_VERSION = "Vibe Coder BETA v0.4";

export const handler = (_req: Request, _ctx: FreshContext): Response => {
  return new Response(JSON.stringify({ version: CURRENT_VERSION }), {
    headers: { "Content-Type": "application/json" },
  });
};
