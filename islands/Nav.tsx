import type { Signal } from "@preact/signals";
import DownloadButton from "./DownloadButton.tsx";

export default function NavBar({DOWNLOAD_LINK} : {DOWNLOAD_LINK: string}) {
  const DOWNLOAD_FILE_NAME = DOWNLOAD_LINK.split("/").pop() || "";
  return (
    <nav class="max-w-full overflow-x-hidden w-[60rem] py-3 my-4 max-md:my-0 px-4 mt-2 flex items-center justify-center rounded-3xl fixed top-0 left-1/2 -translate-x-1/2 z-10 backdrop-blur-sm">
        <div class="flex items-center justify-between w-full max-w-screen-lg mx-auto">
        {/* Left links */}
        <div class="flex items-center gap-6">
            <a href="/" class="text-white text-lg font-semibold hover:underline">Home</a>
            <a href="#about" class="text-gray-300 text-lg font-medium hover:text-white hover:underline max-md:hidden"
                onClick={() => {
                    const el = document.getElementById("about");
                    if (el) {
                        el.scrollIntoView({ behavior: "smooth" });
                    }
                }}
            >About</a>
            <a href="#pricing" class="text-gray-300 text-lg font-medium hover:text-white hover:underline"
                onClick={() => {
                    const el = document.getElementById("pricing");
                    if (el) {
                        el.scrollIntoView({ behavior: "smooth" });
                    }
                }}
            >Pricing</a>
            <a href="#contect" class="text-gray-300 text-lg font-medium hover:text-white hover:underline max-md:hidden"
                onClick={() => {
                    const el = document.getElementById("contact");
                    if (el) {
                        el.scrollIntoView({ behavior: "smooth" });
                    }
                }}
            >Contact</a>
        </div>
        {/* Right download button */}
        <DownloadButton
          href={DOWNLOAD_LINK}
          filename={DOWNLOAD_FILE_NAME}
          class="text-sm md:text-base font-bold bg-white text-gray-950 px-5 py-2 rounded-xl shadow hover:bg-gray-200 transition-colors duration-200 flex items-center gap-2"
        >
          <img src="RobloxStudioIcon.png" alt="Roblox Studio Icon" class="h-6 w-6 inline-block"/>
          <span>Download Plugin</span>
        </DownloadButton>
        </div>
    </nav>
  );
}
