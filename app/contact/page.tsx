import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Rhys Earl.",
};

export default function ContactPage() {
  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "5rem 1.5rem" }}>
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2rem, 4vw, 2.8rem)",
          fontWeight: 700,
          color: "var(--text-primary)",
          marginBottom: "0.75rem",
          letterSpacing: "-0.01em",
        }}
      >
        Get in Touch
      </h1>

      <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "2.5rem" }}>
        The best way to reach me is by email. I try to respond within a few days.
      </p>

      {/* Email */}
      <div
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: 12,
          padding: "1.5rem",
          marginBottom: "2.5rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            backgroundColor: "var(--accent-light)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        </div>
        <div>
          <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginBottom: "0.2rem" }}>Email</p>
          {/* TODO: Update email address if needed */}
          <a
            href="mailto:rhys.earl@gmail.com"
            style={{
              fontSize: "1rem",
              color: "var(--text-primary)",
              fontWeight: 500,
              textDecoration: "underline",
              textDecorationColor: "var(--accent-light)",
              textUnderlineOffset: "3px",
            }}
          >
            rhys.earl@gmail.com
          </a>
        </div>
      </div>

      <hr style={{ border: "none", borderTop: "1px solid var(--border)", marginBottom: "2.5rem" }} />

      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.1rem",
          fontWeight: 600,
          color: "var(--text-primary)",
          marginBottom: "1.25rem",
        }}
      >
        Find me online
      </h2>

      {/* TODO: Replace [placeholder] in all hrefs with real profile links */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <a href="https://github.com/[placeholder]" target="_blank" rel="noopener noreferrer" className="social-link">
          <span className="social-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </span>
          <span>GitHub</span>
          <span className="social-arrow">↗</span>
        </a>

        <a href="https://linkedin.com/in/[placeholder]" target="_blank" rel="noopener noreferrer" className="social-link">
          <span className="social-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </span>
          <span>LinkedIn</span>
          <span className="social-arrow">↗</span>
        </a>

        <a href="https://scholar.google.com/[placeholder]" target="_blank" rel="noopener noreferrer" className="social-link">
          <span className="social-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 10a8 8 0 0 1 7.162 3.44L24 9.5z"/>
            </svg>
          </span>
          <span>Google Scholar</span>
          <span className="social-arrow">↗</span>
        </a>

        <a href="https://orcid.org/[placeholder]" target="_blank" rel="noopener noreferrer" className="social-link">
          <span className="social-icon" style={{ color: "#A6CE39" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z"/>
            </svg>
          </span>
          <span>ORCID</span>
          <span className="social-arrow">↗</span>
        </a>
      </div>

      <style>{`
        .social-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          background-color: var(--surface);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 0.9rem 1.25rem;
          color: var(--text-primary);
          font-size: 0.9rem;
          font-weight: 500;
          transition: border-color 0.2s, transform 0.2s;
          text-decoration: none;
        }
        .social-link:hover {
          border-color: var(--accent);
          transform: translateX(4px);
        }
        .social-icon {
          color: var(--text-muted);
          display: flex;
        }
        .social-arrow {
          margin-left: auto;
          color: var(--text-muted);
          font-size: 0.8rem;
        }
      `}</style>
    </div>
  );
}
