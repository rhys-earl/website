import Parser from "rss-parser";

export interface RSSPost {
  title: string;
  date: string;
  excerpt: string;
  url: string;
  platform: string;
}

function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString("en-AU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/&[a-z]+;/gi, " ").trim();
}

function detectPlatform(feedUrl: string): string {
  if (feedUrl.includes("substack")) return "Substack";
  if (feedUrl.includes("medium")) return "Medium";
  return "Blog";
}

export async function fetchRSSPosts(feedUrl: string, limit = 12): Promise<RSSPost[]> {
  try {
    const parser = new Parser({ timeout: 5000 });
    const feed = await parser.parseURL(feedUrl);
    const platform = detectPlatform(feedUrl);

    return (feed.items ?? []).slice(0, limit).map((item) => ({
      title: item.title ?? "Untitled",
      date: formatDate(item.pubDate ?? item.isoDate ?? ""),
      excerpt: stripHtml(item.contentSnippet ?? item.content ?? item.summary ?? ""),
      url: item.link ?? feedUrl,
      platform,
    }));
  } catch {
    return [];
  }
}
