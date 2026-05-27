import type { Metadata } from "next";
import PublicationCard from "@/components/PublicationCard";

export const metadata: Metadata = {
  title: "Research",
  description: "Publications and research by Rhys Earl.",
};

// TODO: Replace with real publications
const publications = [
  {
    title: "Understanding [Phenomenon Placeholder] Through [Method Placeholder]",
    authors: "Rhys Earl, A. Collaborator, B. Coauthor",
    venue: "Journal of [Field] Research",
    year: 2024,
    abstract:
      "This paper investigates [topic] using [method]. We find that [finding placeholder] with significant implications for [field]. Our results suggest that [conclusion placeholder] which opens new directions for future work.",
    tags: ["Peer-reviewed"],
    doi: "10.xxxx/placeholder",
  },
  {
    title: "A Comparative Study of [Topic A] and [Topic B]",
    authors: "C. Coauthor, Rhys Earl",
    venue: "Proceedings of [Conference Placeholder]",
    year: 2023,
    abstract:
      "We present a comparative analysis of [topic], drawing on data from [source placeholder]. Our framework reveals [insight placeholder] and proposes [contribution placeholder] that advances understanding in the field.",
    tags: ["Conference"],
  },
  {
    title: "[Preprint Title Placeholder]",
    authors: "Rhys Earl",
    venue: "arXiv preprint",
    year: 2024,
    abstract:
      "This preprint presents early findings on [topic placeholder]. We introduce a novel framework for [problem placeholder] and demonstrate its efficacy through [experiment placeholder].",
    tags: ["Preprint"],
  },
];

export default function ResearchPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "4rem 1.5rem" }}>
      {/* Header */}
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
          Research & Publications
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
          Peer-reviewed papers, conference proceedings, and preprints.
        </p>

        {/* Scholar / ORCID links */}
        {/* TODO: Replace href values with your real Google Scholar and ORCID profile URLs */}
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <a
            href="https://scholar.google.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "var(--surface)",
              border: "1px solid var(--border)",
              color: "var(--text-muted)",
              fontSize: "0.85rem",
              padding: "6px 14px",
              borderRadius: 8,
              transition: "border-color 0.2s, color 0.2s",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 10a8 8 0 0 1 7.162 3.44L24 9.5z"/>
            </svg>
            Google Scholar ↗
          </a>
          <a
            href="https://orcid.org"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "var(--surface)",
              border: "1px solid var(--border)",
              color: "var(--text-muted)",
              fontSize: "0.85rem",
              padding: "6px 14px",
              borderRadius: 8,
              transition: "border-color 0.2s, color 0.2s",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#A6CE39">
              <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z"/>
            </svg>
            ORCID ↗
          </a>
        </div>
      </div>

      {/* Publications list */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        {publications.map((pub) => (
          <PublicationCard key={pub.title} {...pub} />
        ))}
      </div>
    </div>
  );
}
