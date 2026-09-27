import NavBar from "../islands/Nav.tsx";
import * as s from "../islands/scroll_reveal.tsx";
import DownloadButton from "../islands/DownloadButton.tsx";
import NewsPopup from "../islands/NewsPopup.tsx";
import { DOWNLOAD_FILE_NAME, DOWNLOAD_LINK, PLUGIN_VERSION } from "../config/version.ts";
import { RELEASES } from "../config/changelog.ts";

// Add type for product info
interface GamepassProductInfo {
	PriceInRobux: number;
}

export default async function Home() {
  const GAMEPASS_LINK = "https://www.roblox.com/catalog/79884753121491/Vibe-Coder-PRO"

  // Default price fallback
  const gamepassPrice: number = 2499;

  return (
    <div class="bg-gray-950 w-full h-full overflow-y-hidden overflow-x-hidden pb-14">
		<NavBar DOWNLOAD_LINK={DOWNLOAD_LINK}/>

		<div class="flex flex-col items-center justify-center h-screen px-10 pb-6 bg-noise mb-4">
			<div class="flex flex-col md:flex-row items-center justify-center mx-auto h-full gap-8 md:gap-[7rem] max-md:pt-32 max-md:w-full">
				<div class="flex flex-col items-center justify-center flex-1 max-h-full min-w-[0] md:min-w-[32rem] w-full">
					<h1 class="text-white text-5xl md:text-8xl font-bold text-left w-full max-md:text-center">
						Vibe Coder
					</h1>
					<h2 class="text-white text-2xl md:text-4xl font-bold text-left mb-4 w-full max-md:mt-4 max-md:text-center opacity-90">
						Let AI do your scripting.
					</h2>
					<a
						href="/#changelog"
						class="group mb-4 w-full max-md:mx-auto max-md:w-fit flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors duration-200"
					>
						<span class="bg-purple-600/30 border border-purple-400/40 text-purple-100 font-bold px-2 py-[0.15rem] rounded-md">
							v{PLUGIN_VERSION}
						</span>
						<span class="group-hover:underline">
							Surgical edits, protected from overwrites — see what's new
						</span>
					</a>
					{/* <NewsPopup /> */}
					<DownloadButton
						href={DOWNLOAD_LINK}
						filename={DOWNLOAD_FILE_NAME}
						class="text-sm md:text-xl font-bold text-left break-words w-full mt-0 bg-white text-gray-950 px-4 py-2 rounded-xl shadow-lg hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center gap-3"
					>
						<img src="RobloxStudioIcon.png" alt="Roblox Studio Icon" class="h-7 w-7 mr-2 inline-block"/>
						<span>Download Vibe Coder for Roblox Studio</span>
					</DownloadButton>
					<p class="text-[0.75rem] text-gray-200 opacity-75 mt-2 text-left w-full">You will download {DOWNLOAD_FILE_NAME}. Put this file in your roblox studio plugin folder.</p>
				</div>
				<div class="flex flex-col items-center justify-center flex-1 min-w-0 max-h-full w-full mt-0 md:mt-0">
					<div class="rounded-xl shadow-lg w-full max-w-md">
						<div class="flex flex-col gap-4">
							{/* User message */}
							<div class="flex flex-row items-start gap-2">
								<div class="bg-[#5b6b7a] text-white px-4 py-2 rounded-lg font-semibold w-fit">add a stamina system to my sprint script</div>
							</div>
							{/* AI response */}
							<div class="flex flex-row items-end gap-2">
								<div class="bg-[#39343a] text-gray-100 px-4 py-2 rounded-lg w-fit">
									<p>Read SprintController and StaminaGui. I've queued a drain-and-regen loop plus the bar update — review the changes below.</p>
									<div class="flex flex-col gap-2 border-[#ffffff10] border-[1px] rounded-lg w-fit px-3 py-2 my-2">
										<div class="flex flex-row items-center gap-2">
											<i class="fa-solid fa-pen-to-square text-gray-200 text-xl"></i>
											<p class="text-sm">Edit · StarterPlayerScripts.SprintController</p>
										</div>
										<div class="flex flex-row items-center gap-2">
											<i class="fa-solid fa-pen-to-square text-gray-200 text-xl"></i>
											<p class="text-sm">Edit · StarterGui.StaminaGui.Bar</p>
										</div>
										<div class="flex flex-row items-center gap-2 mt-1">
											<p class="text-white text-sm bg-green-500 w-fit rounded-lg px-2 py-[0.1rem]">Accept all</p>
											<p class="text-white text-sm bg-red-400 w-fit rounded-lg px-2 py-[0.1rem]">Reject</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="mx-auto w-full max-w-[40rem] mt-8 max-md:px-8" id="about">
			<s.ScrollH2 class="text-5xl text-white text-center font-bold py-16">You don't have to script anymore.</s.ScrollH2>
			<s.ScrollP class="text-xl text-gray-200 text-justify mt-8">
				Yeah, really. Just say what you want — a leaderstats system, a datastore handler, a kill brick — and Vibe Coder gets to work. It explores
				your project's hierarchy, reads the scripts it needs, and edits across as many of them as the job takes. You don't have to select anything
				first, though you can point it at something with an @mention or a selection when you want to be specific.
			</s.ScrollP>
			<s.ScrollP class="text-xl text-gray-200 text-justify mt-6">
				Nothing touches your code until you say so. Every change arrives as a card you Accept or Reject, and since v{PLUGIN_VERSION} an edit is
				refused outright if you changed that script yourself in the meantime.
			</s.ScrollP>

			<s.ScrollIMG 
				class="mx-auto rounded-xl mt-8 w-full"
				src="/VibeCoderFullScreenshot.png"
			/>
		</div>

		<div class="mx-auto w-full max-w-[40rem] mt-24 max-md:px-8">
			<s.ScrollH2 class="text-5xl text-white text-center font-bold py-8">Batteries included</s.ScrollH2>
			<s.ScrollP class="text-xl text-gray-200 text-justify mt-8">
				The default <span class="font-bold text-white">Auto</span> model needs no setup and no API key — it routes your request through our gateway
				across several providers and fails over to the next one when one is rate limited or down. It's free for everyone, and it's what the agent
				runs on.
			</s.ScrollP>
			<s.ScrollP class="text-xl text-gray-200 text-justify mt-6">
				Prefer your own model? PRO unlocks the model picker, where you can bring your own API key for providers like Gemini, OpenAI and Anthropic.
				If you want another one added, just contact me.
			</s.ScrollP>

			<s.ScrollIMG  
				class="mx-auto rounded-xl mt-8 w-full"
				src="/VibeCoderFullScreenshot2.png"
			/>
		</div>

		<div class="mx-auto w-full max-w-[40rem] mt-24 max-md:px-8" id="pricing">
			<s.ScrollH2 class="text-5xl text-white text-center font-bold py-8">Pricing</s.ScrollH2>
			<div class="flex flex-col md:flex-row gap-8 justify-center items-stretch mt-12">
				{/* Free Tier */}
				<div class="flex-1 bg-[#232127] rounded-2xl shadow-lg p-8 flex flex-col items-center">
					<h3 class="text-3xl font-bold text-white mb-2">Vibe Coder FREE</h3>
					<p class="text-lg text-gray-300 mb-6 text-center">Get started with the essentials, no cost.</p>
					<ul class="text-gray-200 text-base mb-8 space-y-2 w-full">
						<li class="flex items-center gap-2"><span class="text-green-400">✓</span> 5 messages a day</li>
						<li class="flex items-center gap-2"><span class="text-green-400">✓</span> Auto model — no API key needed</li>
						<li class="flex items-center gap-2"><span class="text-green-400">✓</span> Full agent, tools and diff review</li>
						<li class="flex items-center gap-2"><span class="text-red-400">✗</span> No model picker or custom API keys</li>
						<li class="flex items-center gap-2"><span class="text-red-400">✗</span> No priority support</li>
					</ul>
					<div class="text-4xl font-extrabold text-white mb-4">Free</div>
					<DownloadButton 
						href={DOWNLOAD_LINK}
						filename={DOWNLOAD_FILE_NAME}
						class="bg-white text-[#232127] font-bold px-6 py-2 rounded-lg shadow hover:bg-gray-200 transition-colors duration-200 w-full flex items-center justify-center gap-2"
					>
						<img src="RobloxStudioIcon.png" alt="Roblox Studio Icon" class="h-6 w-6 inline-block"/>
						<span>Download Plugin</span>
					</DownloadButton>
				</div>
				{/* Pro Tier */}
				<div class="flex-1 bg-gradient-to-br from-[#6d28d9] to-[#a21caf] rounded-2xl shadow-2xl p-8 flex flex-col items-center">
					<h3 class="text-3xl font-bold text-white mb-2">Vibe Coder PRO</h3>
					<p class="text-lg text-gray-100 mb-6 text-center">Unlock all features and premium models.</p>
					<ul class="text-white text-base mb-8 space-y-2 w-full">
						<li class="flex items-center gap-2"><span class="text-green-200">✓</span> Unlimited messages</li>
						<li class="flex items-center gap-2"><span class="text-green-200">✓</span> Everything in FREE, including Auto</li>
						<li class="flex items-center gap-2"><span class="text-green-200">✓</span> Model picker (Gemini, GPT, Claude, etc.)</li>
						<li class="flex items-center gap-2"><span class="text-green-200">✓</span> Bring your own API keys</li>
						<li class="flex items-center gap-2"><span class="text-green-200">✓</span> Priority support</li>
						<li class="flex items-center gap-2"><span class="text-green-200">✓</span> Early access to new features</li>
					</ul>
					<div className="text-4xl font-extrabold text-white mb-4 flex items-center gap-2">
						{/* Price in robux */}
						{gamepassPrice !== null ? gamepassPrice : "Gamepass"}
						<img src="/robux.png" alt="Robux" className="h-10 w-10 inline-block" style={{height: "2.5rem", width: "2.5rem"}} />
					</div>
					<a 
						href={GAMEPASS_LINK}
						target="_blank"
						class="bg-white font-bold px-6 py-2 rounded-lg shadow hover:bg-gray-200 transition-colors duration-200 w-full flex items-center justify-center gap-2"
					>
						<span
							class="bg-gradient-to-r from-[#a78bfa] via-[#f472b6] to-[#818cf8] bg-clip-text text-transparent"
						>
							Buy PRO
						</span>
					</a>
				</div>
			</div>
			<p class="text-gray-200 text-sm opacity-75 text-center mt-4">PRO does not include GPT or Claude tokens — those models run on your own API keys. Auto is covered for everyone.</p>
		</div>

		<div class="mx-auto w-full max-w-[44rem] mt-24 max-md:px-8" id="changelog">
			<s.ScrollH2 class="text-5xl text-white text-center font-bold py-8">What's new</s.ScrollH2>
			<div class="flex flex-col gap-10 mt-8">
				{RELEASES.map((release, releaseIndex) => (
					<div key={release.version} class="bg-[#232127] rounded-2xl shadow-lg p-8">
						<div class="flex flex-wrap items-center gap-3 mb-4">
							<h3 class="text-3xl font-bold text-white">v{release.version}</h3>
							{releaseIndex === 0 && (
								<span class="bg-purple-600/30 border border-purple-400/40 text-purple-100 text-xs font-bold px-2 py-[0.2rem] rounded-md uppercase tracking-wide">
									Latest
								</span>
							)}
							<span class="text-gray-400 text-base ml-auto">{release.date}</span>
						</div>
						<p class="text-lg text-gray-200 mb-6">{release.summary}</p>
						<ul class="flex flex-col gap-4">
							{release.notes.map((note) => (
								<li key={note.title} class="flex gap-3">
									<i class="fa-solid fa-circle-check text-green-400 mt-[0.35rem]"></i>
									<div>
										<p class="text-white font-bold">{note.title}</p>
										<p class="text-gray-300">{note.body}</p>
									</div>
								</li>
							))}
						</ul>
						{releaseIndex === 0 && (
							<DownloadButton
								href={DOWNLOAD_LINK}
								filename={DOWNLOAD_FILE_NAME}
								class="mt-8 bg-white text-[#232127] font-bold px-6 py-2 rounded-lg shadow hover:bg-gray-200 transition-colors duration-200 w-full flex items-center justify-center gap-2"
							>
								<img src="RobloxStudioIcon.png" alt="Roblox Studio Icon" class="h-6 w-6 inline-block"/>
								<span>Update to v{release.version}</span>
							</DownloadButton>
						)}
					</div>
				))}
			</div>
			<p class="text-gray-200 text-sm opacity-75 text-center mt-6">
				Updating? Replace the old <span class="bg-black p-1 rounded">.rbxmx</span> in your Roblox Studio plugins folder with the new one, then restart Studio.
			</p>
		</div>
	
		<div class="mx-auto w-full max-w-[40rem] mt-24 max-md:px-8" id="contact">
			<s.ScrollH2 class="text-5xl text-white text-center font-bold py-8">Contact</s.ScrollH2>
			<s.ScrollP class="text-xl text-gray-200 text-justify mt-8">
				Vibe Coder was created by keewinek. You can see my website 
				<a class="text-white font-bold hover:text-blue-200 hover:underline ml-[0.25rem]" href="https://keewinek.netlify.app">here</a>.
				If you want to contact me, you can join my 
				<a class="text-white font-bold hover:text-blue-200 hover:underline ml-[0.25rem]" href="https://keewinek.netlify.app/discord">discord server</a>. 
				You can also email me: <span class="bg-black p-2 rounded-lg">keewinek@gmail.com</span>.
			</s.ScrollP>
		</div>
	</div>
  );
}
