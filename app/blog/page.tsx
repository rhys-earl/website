import type { Metadata } from "next";
import BlogPostCard from "@/components/BlogPostCard";
import { fetchRSSPosts } from "@/lib/fetchRSS";

export const revalidate = 3600; // Refresh RSS hourly

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing by Rhys Earl.",
};

export default async function BlogPage() {
  // TODO: Replace with your real RSS feed URL
  // Substack: https://[yourname].substack.com/feed
  // Medium:   https://medium.com/feed/@[username]
  const rssUrl = "https://feeds.feedburner.com/placeholder";
  const posts = await fetchRSSPosts(rssUrl, 12);
  const platform = rssUrl.includes("substack") ? "Substack" : rssUrl.includes("medium") ? "Medium" : "Blog";
  const platformLink = rssUrl.includes("substack")
    ? "https://substack.com"
    : rssUrl.includes("medium")
    ? "https://medium.com"
    : "#";

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "4rem 1.5rem" }}>
      <div style={{ marginBottom: "2.5rem" }}>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4vw, 2.8rem)",
            fontWeight: 700,
            color: "var(--text-primary)",
            marginBottom: "0.5rem",
            letterSpacing: "-0.01em",
          }}
        >
          Writing
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.6 }}>
          Essays, ideas, and occasional deep dives. Published on{" "}
          <a href={platformLink} target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }}>
            {platform}
          </a>
          .
        </p>
      </div>

      {posts.length > 0 ? (
        <div className="blog-grid">
          {posts.map((post) => (
            <BlogPostCard key={post.url} {...post} />
          ))}
        </div>
      ) : (
        <div
          style={{
            backgroundColor: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: 16,
            padding: "3rem",
            textAlign: "center",
            color: "var(--text-muted)",
          }}
        >
          <p style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>
            Posts are loading from {platform}.
          </p>
          <p style={{ fontSize: "0.88rem" }}>
            If this persists, visit{" "}
            <a href={platformLink} target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }}>
              {platform}
            </a>{" "}
            directly.
          </p>
        </div>
      )}

      <style>{`
        .blog-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
        @media (max-width: 900px) { .blog-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .blog-grid { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
}
