"use client";

interface ExperienceItemProps {
  title: string;
  org: string;
  dateRange: string;
  bullets: string[];
  tags: string[];
  index: number;
}

export default function ExperienceItem({ title, org, dateRange, bullets, tags, index }: ExperienceItemProps) {
  const isLeft = index % 2 === 0;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isLeft ? "flex-start" : "flex-end",
        position: "relative",
        marginBottom: "2.5rem",
      }}
      className="timeline-item"
    >
      {/* Timeline line dot */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "1.5rem",
          width: 14,
          height: 14,
          borderRadius: "50%",
          backgroundColor: "var(--accent)",
          border: "3px solid var(--bg)",
          transform: "translateX(-50%)",
          zIndex: 1,
        }}
        className="timeline-dot"
      />

      <div
        style={{
          width: "44%",
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: 12,
          padding: "1.5rem",
          transition: "box-shadow 0.2s",
        }}
        className="timeline-card"
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px var(--shadow)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = "none";
        }}
      >
        <p style={{ color: "var(--text-muted)", fontSize: "0.78rem", marginBottom: "0.3rem" }}>
          {dateRange}
        </p>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.05rem",
            fontWeight: 600,
            color: "var(--text-primary)",
            marginBottom: "0.25rem",
          }}
        >
          {title}
        </h3>
        <p style={{ color: "var(--accent)", fontSize: "0.9rem", marginBottom: "0.75rem" }}>
          {org}
        </p>
        <ul style={{ margin: 0, paddingLeft: "1.2rem", color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.7 }}>
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "0.75rem" }}>
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
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-item { justify-content: flex-start !important; }
          .timeline-card { width: 100% !important; }
          .timeline-dot { left: 8px !important; transform: none !important; }
        }
      `}</style>
    </div>
  );
}
