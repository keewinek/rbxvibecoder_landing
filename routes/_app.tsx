import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vibe Coder - Let AI do your roblox scripting.</title>
        <meta name="description" content="Vibe Coder is an AI-powered Roblox Studio plugin that automates scripting, supports all major LLMs, and helps you create, edit, and manage scripts effortlessly." />
        <meta name="keywords" content="Roblox, AI, scripting, plugin, Vibe Coder, Roblox Studio, automation, GPT, Gemini, Claude, game development, code assistant" />
        <meta name="author" content="keewinek" />
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Vibe Coder - Let AI do your roblox scripting." />
        <meta property="og:description" content="Yeah you dont have to script anymore." />
        <meta property="og:image" content="/VibeCoderLogo_transparent.png" />
        <meta property="og:url" content="https://rbxvibecoder.com" />
        <meta property="og:type" content="website" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vibe Coder - Let AI do your roblox scripting." />
        <meta name="twitter:description" content="Yeah you dont have to script anymore." />
        <meta name="twitter:image" content="/VibeCoderLogo_transparent.png" />
        <link rel="stylesheet" href="/styles.css" />

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet"></link>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet"/>
        <link rel="icon" type="image/png" href="/VibeCoderLogo_transparent.png" />

        <script src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js" defer></script>
        <script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
