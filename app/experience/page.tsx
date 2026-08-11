import type { Metadata } from "next";
import ExperienceItem from "@/components/ExperienceItem";

export const metadata: Metadata = {
  title: "Experience",
  description: "Work history.",
};

// TODO: Replace with real work history
const experiences = [
  {
    title: "Research Fellow",
    org: "[National University of Singapore]",
    dateRange: "2026 – Present",
    bullets: [
      "Conducting research on antibody decay modelling, dengue forecasting and influenza.  ",

    ],
    tags: ["Research"],
  },
  {
    title: "PhD Candidate",
    org: "[Imperial College London]",
    dateRange: "2022 – 2025",
    bullets: [
      'Thesis: "[Thesis title placeholder]"',
      "Awarded [Fellowship placeholder]",
      "Presented at [Conference placeholder]",
    ],
    tags: ["Research", "Teaching"],
  },
  {
    title: "Research Intern",
    org: "[Organisation Name]",
    dateRange: "Summer 2017",
    bullets: [
      "Worked on [project placeholder]",
      "Collaborated with a team of [N] researchers",
    ],
    tags: ["Industry", "Research"],
  },
];

export default function ExperiencePage() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "4rem 1.5rem" }}>
      {/* Header */}
      <div style={{ marginBottom: "3rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
          <div>
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
              Experience
            </h1>
            <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.6 }}>
              A timeline of my academic and professional journey.
            </p>
          </div>
          <a
            href="/cv.pdf"
            download
            style={{
              backgroundColor: "var(--accent)",
              color: "#fff",
              padding: "0.65rem 1.4rem",
              borderRadius: 8,
              fontSize: "0.88rem",
              fontWeight: 600,
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              textDecoration: "none",
              flexShrink: 0,
              transition: "opacity 0.2s",
            }}
          >
            {/* TODO: Drop your cv.pdf into /public/ */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download CV (PDF)
          </a>
        </div>
      </div>

      {/* Timeline */}
      <div style={{ position: "relative" }}>
        {/* Centre line */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: 2,
            backgroundColor: "var(--border)",
            transform: "translateX(-50%)",
          }}
          className="timeline-line"
        />

        {experiences.map((exp, i) => (
          <ExperienceItem key={i} {...exp} index={i} />
        ))}
      </div>

      <style>{`
        .timeline-line { display: block; }
        @media (max-width: 768px) {
          .timeline-line { left: 16px !important; transform: none !important; }
        }
      `}</style>
    </div>
  );
}
