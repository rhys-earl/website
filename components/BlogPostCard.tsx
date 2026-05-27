"use client";

interface BlogPostCardProps {
  title: string;
  date: string;
  excerpt: string;
  url: string;
  platform?: string;
}

export default function BlogPostCard({ title, date, excerpt, url, platform = "Substack" }: BlogPostCardProps) {
  return (
    <article
      style={{
        backgroundColor: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: 12,
        padding: "1.25rem 1.5rem",
        transition: "box-shadow 0.2s, transform 0.2s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px var(--shadow)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      <p style={{ color: "var(--text-muted)", fontSize: "0.78rem", marginBottom: "0.4rem" }}>
        {date}
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1rem",
          fontWeight: 600,
          color: "var(--text-primary)",
          display: "block",
          marginBottom: "0.5rem",
          lineHeight: 1.4,
        }}
      >
        {title}
      </a>
      <p
        style={{
          color: "var(--text-muted)",
          fontSize: "0.86rem",
          lineHeight: 1.6,
          marginBottom: "0.75rem",
        }}
      >
        {excerpt.length > 150 ? excerpt.slice(0, 150) + "…" : excerpt}
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "var(--accent)",
          fontSize: "0.82rem",
          fontWeight: 500,
        }}
      >
        Read on {platform} →
      </a>
    </article>
  );
}
