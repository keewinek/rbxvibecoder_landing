import { PageProps } from "$fresh/server.ts";
import NavBar from "../../islands/Nav.tsx";
import ArticleLoader from "../../islands/ArticleLoader.tsx";

export default function ArticlePage(props: PageProps) {
  const DOWNLOAD_LINK = "/downloads/Vibe Coder v0.5.rbxmx";
  const urlid = props.params?.urlid;
  const sourceIds = "rbxvibecoder_projects_review,rbxvibecoder_personalized_article";
  
  if (!urlid) {
    return (
      <>
        <head>
          <title>Article Not Found - Vibe Coder</title>
        </head>
        <div class="bg-gray-950 w-full min-h-screen">
          <NavBar DOWNLOAD_LINK={DOWNLOAD_LINK} />
          <div class="container mx-auto px-4 py-8 pt-24 max-w-4xl">
            <h1 class="text-4xl text-white font-bold mb-4">Article Not Found</h1>
            <p class="text-gray-300 mb-6">The article you're looking for doesn't exist or has been removed.</p>
            <a 
              href="/blog" 
              class="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors"
            >
              ← Back to Blog
            </a>
          </div>
        </div>
      </>
    );
  }

  // Always load articles on the client side
  return (
    <>
      <head>
        <title>Loading Article - Vibe Coder</title>
        <meta name="description" content="Loading article..." />
        <meta property="og:title" content="Loading Article - Vibe Coder" />
        <meta property="og:description" content="Loading article..." />
      </head>
      <div class="bg-gray-950 w-full min-h-screen">
        <NavBar DOWNLOAD_LINK={DOWNLOAD_LINK} />
        <ArticleLoader urlid={urlid} sourceIds={sourceIds} downloadLink={DOWNLOAD_LINK} />
      </div>
    </>
  );
}

