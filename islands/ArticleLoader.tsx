import { useState, useEffect } from "preact/hooks";

interface Paragraph {
  header?: string;
  content: string;
  project_zt_link?: string;
  project_link?: string;
  img_url?: string;
}

interface Article {
  type: string;
  title: string;
  urlid: string;
  source_id: string;
  created_at: number;
  paragraph?: string;
  img_urls?: string[];
}

interface ArticleResponse {
  success: boolean;
  article: Article;
  paragraphs: Paragraph[];
}

interface ArticleLoaderProps {
  urlid: string;
  sourceIds: string;
  downloadLink: string;
}

export default function ArticleLoader({ urlid, sourceIds, downloadLink }: ArticleLoaderProps) {
  const [articleData, setArticleData] = useState<ArticleResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchArticle() {
      try {
        const url = `https://zthype.deno.dev/api/get_article?urlid=${encodeURIComponent(urlid)}&source_ids=${encodeURIComponent(sourceIds)}`;
        const response = await fetch(url);
        const data = await response.json();
        
        // Check if API returned an error
        if ('error' in data) {
          setError("not_found");
          console.warn("API returned error:", data.error);
          document.title = "Article Not Found - Vibe Coder";
        } else if (!response.ok) {
          setError("not_found");
          console.warn("API returned non-OK status:", response.status, data);
          document.title = "Article Not Found - Vibe Coder";
        } else if (!data.success) {
          setError("not_found");
          console.warn("API returned unsuccessful response:", data);
          document.title = "Article Not Found - Vibe Coder";
        } else if (!data.article) {
          setError("not_found");
          console.warn("API response missing article:", data);
          document.title = "Article Not Found - Vibe Coder";
        } else {
          setArticleData(data);
          // Update page title and meta tags
          document.title = `${data.article.title} - Vibe Coder Blog`;
          
          // Update meta description
          const metaDescription = document.querySelector('meta[name="description"]');
          if (metaDescription) {
            metaDescription.setAttribute('content', data.article.paragraph || data.article.title);
          }
          
          // Update OG tags
          const ogTitle = document.querySelector('meta[property="og:title"]');
          if (ogTitle) {
            ogTitle.setAttribute('content', data.article.title);
          }
          
          const ogDescription = document.querySelector('meta[property="og:description"]');
          if (ogDescription) {
            ogDescription.setAttribute('content', data.article.paragraph || data.article.title);
          }
          
          if (data.article.img_urls && data.article.img_urls[0]) {
            const ogImage = document.querySelector('meta[property="og:image"]');
            if (ogImage) {
              ogImage.setAttribute('content', data.article.img_urls[0]);
            } else {
              const meta = document.createElement('meta');
              meta.setAttribute('property', 'og:image');
              meta.setAttribute('content', data.article.img_urls[0]);
              document.head.appendChild(meta);
            }
          }
        }
      } catch (err) {
        setError("not_found");
        console.error("Error fetching article:", err);
        document.title = "Article Not Found - Vibe Coder";
      } finally {
        setLoading(false);
      }
    }

    fetchArticle();
  }, [urlid, sourceIds]);

  if (loading) {
    return (
      <div class="container mx-auto px-4 py-8 pt-24 max-w-4xl">
        <div class="bg-[#232127] rounded-2xl p-8 md:p-12 shadow-2xl">
          <div class="flex items-center justify-center py-12">
            <div class="text-center">
              <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mb-4"></div>
              <p class="text-gray-300">Loading article...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error === "not_found" || !articleData) {
    return (
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
    );
  }

  const { article, paragraphs } = articleData;
  const publishDate = new Date(article.created_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  // Calculate reading time (average 200 words per minute)
  const wordCount = (article.paragraph || "").split(/\s+/).length + 
    paragraphs.reduce((acc, p) => acc + p.content.split(/\s+/).length, 0);
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <div class="container mx-auto px-4 py-8 pt-24 max-w-4xl">
      <a 
        href="/blog" 
        class="inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 font-medium mb-6 transition-colors"
      >
        ← Back to Blog
      </a>
      
      <article class="bg-[#232127] rounded-2xl p-8 md:p-12 shadow-2xl">
        <header class="mb-8">
          <h1 class="text-4xl md:text-5xl text-white font-bold mb-4 leading-tight">
            {article.title}
          </h1>
          <div class="flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <time dateTime={new Date(article.created_at).toISOString()}>
              {publishDate}
            </time>
            <span>•</span>
            <span>{readingTime} min read</span>
          </div>
        </header>
        
        {article.paragraph && (
          <div class="prose prose-invert max-w-none mb-8">
            <p class="text-lg text-gray-200 leading-relaxed whitespace-pre-line">
              {article.paragraph}
            </p>
          </div>
        )}
        
        {paragraphs.length > 0 && (
          <div class="space-y-8">
            {paragraphs.map((para, index) => (
              <section key={index} class="space-y-4">
                {para.header && (
                  <h2 class="text-2xl md:text-3xl text-white font-bold mt-8 mb-4">
                    {para.header}
                  </h2>
                )}
                
                {para.img_url && (
                  <div class="my-6 rounded-xl overflow-hidden">
                    <img
                      src={para.img_url}
                      alt={para.header || `Article image ${index + 1}`}
                      class="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                
                <div class="prose prose-invert max-w-none">
                  <p class="text-gray-200 leading-relaxed whitespace-pre-line">
                    {para.content}
                  </p>
                </div>
                
                {(para.project_link || para.project_zt_link) && (
                  <div class="flex flex-wrap gap-4 mt-6">
                    {para.project_link && (
                      <a
                        href={para.project_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center gap-2 bg-gradient-to-r from-[#6d28d9] to-[#a21caf] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#7c3aed] hover:to-[#c026d3] transition-all duration-200 shadow-lg hover:shadow-xl"
                      >
                        View Project
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    {para.project_zt_link && (
                      <a
                        href={para.project_zt_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center gap-2 bg-[#39343a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4a4550] transition-all duration-200 shadow-lg hover:shadow-xl"
                      >
                        View on Zwolnieni z Teorii
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </section>
            ))}
          </div>
        )}
      </article>
    </div>
  );
}

