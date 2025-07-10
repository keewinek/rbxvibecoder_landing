import NavBar from "../islands/Nav.tsx";
import * as s from "../islands/scroll_reveal.tsx";

export default function Home() {
  const DOWNLOAD_LINK = "/downloads/Vibe Coder_v0.3.rbxmx";
  const DOWNLOAD_FILE_NAME = DOWNLOAD_LINK.split("/").pop() || "";
  return (
    <div class="bg-gray-950 w-full h-full min-h-screen overflow-y-hidden overflow-x-hidden">
		<NavBar DOWNLOAD_LINK={DOWNLOAD_LINK}/>

		<div class="mx-auto w-full max-w-[40rem] mt-24 max-md:px-8" id="contact">
			<s.ScrollH1 class="text-8xl text-white text-center font-bold pt-16">Thank You</s.ScrollH1>
			<s.ScrollH2 class="text-xl text-gray-400 text-center font-bold pt-4 pb-16">For downlading Vibe Coder.</s.ScrollH2>
			<s.ScrollP class="text-xl text-gray-400 text-left font-bold pt-4 pb-0">Here is installation guide:</s.ScrollP>
		<video
			class="w-full rounded-xl shadow-lg mt-4"
			controls
			poster="/VibeCoderTutorialPoster.png"
		>
			<source src="/VibeCoderTutorial.mp4" type="video/mp4" />
			Your browser does not support the video tag.
		</video>
		</div>

	</div>
  );
}
