import NavBar from "../islands/Nav.tsx";
import * as s from "../islands/scroll_reveal.tsx";
import DownloadButton from "../islands/DownloadButton.tsx";
import NewsPopup from "../islands/NewsPopup.tsx";

// Add type for product info
interface GamepassProductInfo {
	PriceInRobux: number;
}

export default async function Home() {
  const DOWNLOAD_LINK = "/downloads/Vibe Coder v0.5.rbxmx";
  const DOWNLOAD_FILE_NAME = DOWNLOAD_LINK.split("/").pop() || "";
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
					<NewsPopup />
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
								<div class="bg-[#5b6b7a] text-white px-4 py-2 rounded-lg font-semibold w-fit">make this part a kill part</div>
							</div>
							{/* AI response */}
							<div class="flex flex-row items-end gap-2">
								<div class="bg-[#39343a] text-gray-100 px-4 py-2 rounded-lg w-fit">
									<p>I will now make the selected part a kill part. When a player touches it, their character will be eliminated.</p>
									<div class="flex flex-row items-center gap-2 border-[#ffffff10] border-[1px] rounded-lg w-fit px-2 my-2">
										<i class="fa-solid fa-pen-to-square text-gray-200 text-4xl"></i>
										<div class="px-2 py-[0.25rem] mt-2 rounded-lg w-fit">
											<p>Model has edited your scripts.</p>
											<p class="text-white text-sm bg-red-400 w-fit mt-[0.25rem] rounded-lg px-2 mb-[0.5rem]">Revert changes</p>
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
				Yeah, really. Just select an script in the explorer and tell Vibe Coder what it should become - an leaderstats creator, datastore handler or
				an kill brick script. Vibe Coder will look at your project's hierarhy and take scripting decisions for you. It will also edit your scripts.
			</s.ScrollP>

			<s.ScrollIMG 
				class="mx-auto rounded-xl mt-8 w-full"
				src="/VibeCoderFullScreenshot.png"
			/>
		</div>

		<div class="mx-auto w-full max-w-[40rem] mt-24 max-md:px-8">
			<s.ScrollH2 class="text-5xl text-white text-center font-bold py-8">Batteries included</s.ScrollH2>
			<s.ScrollP class="text-xl text-gray-200 text-justify mt-8">
				Vibe Coder supports all popular LLM's, including Gemini 2.5 Flash, Gemini 2.5 Pro, Gpt 4.1, Gpt 4o, Claude 4 Sonnet and Claude 3 Sonnet.
				If you want another model to be added, just contact me.
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
						<li class="flex items-center gap-2"><span class="text-green-400">✓</span> Access to Gemini 2.5 Flash</li>
						<li class="flex items-center gap-2"><span class="text-green-400">✓</span> Custom API keys</li>
						<li class="flex items-center gap-2"><span class="text-red-400">✗</span> No access to other language models</li>
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
						<li class="flex items-center gap-2"><span class="text-green-200">✓</span> Access to all LLMs (Gemini, GPT, Claude, etc.)</li>
						<li class="flex items-center gap-2"><span class="text-green-200">✓</span> Priority support</li>
						<li class="flex items-center gap-2"><span class="text-green-400">✓</span> Custom API keys</li>
						<li class="flex items-center gap-2"><span class="text-green-200">✓</span> Early access to new features</li>
						<li class="flex items-center gap-2"><span class="text-green-400">✓</span> Free Gemini tokens. (No need for API keys)</li>
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
			<p class="text-gray-200 text-sm opacity-75 text-center mt-4">No free GPT, Claude tokens for PRO tier! You need to enter your own API keys for theese models.</p>
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
