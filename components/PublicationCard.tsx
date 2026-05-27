"use client";

import { useState } from "react";

interface PublicationCardProps {
  title: string;
  authors: string;
  venue: string;
  year: number;
  abstract: string;
  tags: string[];
  doi?: string;
  url?: string;
  authorName?: string;
}

export default function PublicationCard({
  title,
  authors,
  venue,
  year,
  abstract,
  tags,
  doi,
  url,
  authorName = "Rhys Earl",
}: PublicationCardProps) {
  const [expanded, setExpanded] = useState(false);

  const formattedAuthors = authors
    .split(",")
    .map((a) => a.trim())
    .map((a) =>
      a === authorName ? <strong key={a}>{a}</strong> : <span key={a}>{a}</span>
    )
    .reduce<React.ReactNode[]>((acc, el, i, arr) => {
      acc.push(el);
      if (i < arr.length - 1) acc.push(", ");
      return acc;
    }, []);

  return (
    <article
      style={{
        backgroundColor: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: 12,
        padding: "1.5rem",
        transition: "box-shadow 0.2s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px var(--shadow)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      <div style={{ marginBottom: "0.5rem" }}>
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.05rem",
              fontWeight: 600,
              color: "var(--text-primary)",
              textDecoration: "underline",
              textDecorationColor: "var(--accent-light)",
              textUnderlineOffset: "3px",
            }}
          >
            {title}
          </a>
        ) : (
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.05rem",
              fontWeight: 600,
              color: "var(--text-primary)",
            }}
          >
            {title}
          </span>
        )}
      </div>

      <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", marginBottom: "0.4rem" }}>
        {formattedAuthors}
      </p>

      <p style={{ color: "var(--accent)", fontSize: "0.85rem", marginBottom: "0.75rem" }}>
        {venue}, {year}
        {doi && (
          <a
            href={`https://doi.org/${doi}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: "0.5rem", color: "var(--text-muted)", fontSize: "0.8rem" }}
          >
            DOI ↗
          </a>
        )}
      </p>

      <p
        style={{
          color: "var(--text-muted)",
          fontSize: "0.88rem",
          lineHeight: 1.6,
          marginBottom: "0.5rem",
        }}
      >
        {expanded ? abstract : abstract.slice(0, 160) + (abstract.length > 160 ? "…" : "")}
      </p>

      {abstract.length > 160 && (
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            background: "none",
            border: "none",
            color: "var(--accent)",
            cursor: "pointer",
            fontSize: "0.82rem",
            padding: 0,
            marginBottom: "0.75rem",
          }}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              backgroundColor: "var(--accent-light)",
              color: "var(--accent)",
              fontSize: "0.72rem",
              padding: "2px 10px",
              borderRadius: 20,
              fontWeight: 500,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
