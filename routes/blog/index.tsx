import { PageProps } from "$fresh/server.ts";
import NavBar from "../../islands/Nav.tsx";

interface Article {
  type: string;
  title: string;
  urlid: string;
  source_id: string;
  created_at: number;
  img_urls?: string[];
  paragraph?: string;
}

interface ArticlesResponse {
  success: boolean;
  articles: Article[];
}

export default async function BlogIndex(_props: PageProps) {
  const DOWNLOAD_LINK = "/downloads/Vibe Coder v0.5.rbxmx";
  const sourceIds = "rbxvibecoder_projects_review,rbxvibecoder_personalized_article";
  
  let articles: Article[] = [];
  let error: string | null = null;

  try {
    const url = `https://zthype.deno.dev/api/get_articles_form_source_ids?source_ids=${encodeURIComponent(sourceIds)}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`API returned ${response.status}: ${response.statusText}`);
    }
    
    const data: ArticlesResponse = await response.json();
    
    if (!data.success) {
      throw new Error("API returned unsuccessful response");
    }
    
    if (!data.articles) {
      console.warn("API response missing articles array");
      articles = [];
    } else {
      articles = data.articles;
    }
    
    // Sort articles by created_at (newest first)
    articles.sort((a, b) => b.created_at - a.created_at);
  } catch (err) {
    error = err instanceof Error ? err.message : "Failed to load articles";
    console.error("Error fetching articles:", err);
  }

  return (
    <>
      <head>
        <title>Blog - Vibe Coder</title>
        <meta name="description" content="Read articles about Roblox development, AI-powered scripting, and game development projects." />
      </head>
      <div class="bg-gray-950 w-full min-h-screen">
        <NavBar DOWNLOAD_LINK={DOWNLOAD_LINK} />
        
        <div class="container mx-auto px-4 py-8 pt-24 max-w-6xl">
          <h1 class="text-5xl md:text-6xl text-white font-bold mb-4 text-center">Blog</h1>
          <p class="text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Discover articles about Roblox development, AI tools, and innovative game development projects.
          </p>
          
          {error && (
            <div class="bg-red-900/20 border border-red-500/50 rounded-xl p-6 mb-8">
              <p class="text-red-200">Error loading articles: {error}</p>
              <p class="text-red-300 text-sm mt-2">Please try again later.</p>
            </div>
          )}
          
          {!error && articles.length === 0 && (
            <div class="text-center py-16">
              <p class="text-gray-400 text-xl mb-4">No articles found yet.</p>
              <p class="text-gray-500">Check back soon for new content!</p>
            </div>
          )}
          
          {!error && articles.length > 0 && (
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => {
                const featuredImage = article.img_urls && article.img_urls.length > 0 && article.img_urls[0] 
                  ? article.img_urls[0] 
                  : null;
                const excerpt = article.paragraph 
                  ? (article.paragraph.length > 150 ? article.paragraph.substring(0, 150) + "..." : article.paragraph)
                  : "";
                const publishDate = new Date(article.created_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                });

                return (
                  <a
                    href={`/blog/${article.urlid}`}
                    class="block bg-[#232127] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group"
                  >
                    {featuredImage && (
                      <div class="w-full h-48 overflow-hidden">
                        <img
                          src={featuredImage}
                          alt={article.title}
                          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div class="p-6">
                      <h2 class="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors line-clamp-2">
                        {article.title}
                      </h2>
                      <p class="text-sm text-gray-400 mb-3">
                        {publishDate}
                      </p>
                      {excerpt && (
                        <p class="text-gray-300 line-clamp-3 text-sm">
                          {excerpt}
                        </p>
                      )}
                      <div class="mt-4 flex items-center text-purple-400 text-sm font-medium group-hover:text-purple-300">
                        Read more →
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

