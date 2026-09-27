// Release notes shown in the "What's new" section on the home page.
// Newest first — the first entry is rendered as the current release.

export interface ReleaseNote {
  title: string;
  body: string;
}

export interface Release {
  version: string;
  date: string;
  summary: string;
  notes: ReleaseNote[];
}

export const RELEASES: Release[] = [
  {
    version: "1.1.0",
    date: "September 2026",
    summary:
      "A big reliability pass on the agent. It now edits code surgically instead of rewriting whole files, it can see the changes it already queued, and it will never overwrite something you typed yourself.",
    notes: [
      {
        title: "Surgical edits",
        body:
          "Vibe Coder used to rewrite an entire script to change a single line, which got slow and unreliable on long files. It now applies targeted find-and-replace edits, so changes to big scripts land far more consistently.",
      },
      {
        title: "The agent sees its own work",
        body:
          "Queued edits are not applied until you Accept them, and the agent used to re-read the old version of a script it had just changed — quietly losing its earlier edit. It now reads your project including its own pending changes, so it can build a change up across several steps.",
      },
      {
        title: "Your own edits are protected",
        body:
          "If a script changed after Vibe Coder proposed an edit, Accept now refuses instead of overwriting you, and tells you why. No silent script destruction, for real this time.",
      },
      {
        title: "Fixed: requests failing for some models",
        body:
          "One tool was sending a malformed schema that stricter providers rejected outright, which could make a request fail no matter which model handled it. Fixed, with a guard so it cannot come back.",
      },
      {
        title: "Fewer dead ends",
        body:
          "Auto now retries a hiccuping provider with backoff instead of giving up on your message, error messages are written for you rather than for the developer, and long runs end with a summary of what was queued instead of a bare 'max steps' error.",
      },
      {
        title: "Better reading of your project",
        body:
          "Scripts are read with line numbers and can be read in ranges, so the agent can work through a long file instead of getting a silently truncated copy of it.",
      },
      {
        title: "Undo works",
        body:
          "Accepting a newly created script is now a single Ctrl+Z in Studio.",
      },
    ],
  },
  {
    version: "1.0.0",
    date: "July 2026",
    summary:
      "Vibe Coder became a real agent: chat-first, multi-file, with a diff review step before anything touches your code.",
    notes: [
      {
        title: "Chat-first agent",
        body:
          "No more selecting a script before every message. Describe what you want and the agent explores your project, reads what it needs and works across as many scripts as the job takes.",
      },
      {
        title: "Diff review",
        body:
          "Every change is queued as a card you Accept or Reject, one by one or all at once.",
      },
      {
        title: "Auto model, free",
        body:
          "The default Auto model runs through our gateway across several providers with failover, so you do not need to paste an API key to get started.",
      },
      {
        title: "Stop button",
        body: "Cancel a run mid-flight.",
      },
    ],
  },
];

export const LATEST_RELEASE = RELEASES[0];
