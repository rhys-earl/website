"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/experience", label: "Experience" },
  { href: "/research", label: "Research" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "var(--bg)",
        borderBottom: "1px solid var(--border)",
        backdropFilter: "blur(8px)",
      }}
    >
      <nav
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 1.5rem",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.2rem",
            fontWeight: 600,
            color: "var(--text-primary)",
            letterSpacing: "-0.01em",
          }}
        >
          Rhys Earl
        </Link>

        {/* Desktop nav */}
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden-mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: "0.9rem",
                fontWeight: 400,
                color: pathname === link.href ? "var(--accent)" : "var(--text-muted)",
                borderBottom: pathname === link.href ? "1.5px solid var(--accent)" : "1.5px solid transparent",
                paddingBottom: "2px",
                transition: "color 0.2s, border-color 0.2s",
              }}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }} className="show-mobile">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--text-primary)",
              padding: "4px",
            }}
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: "var(--surface)",
            borderTop: "1px solid var(--border)",
            padding: "1rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
          className="show-mobile"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "1rem",
                color: pathname === link.href ? "var(--accent)" : "var(--text-primary)",
                fontWeight: pathname === link.href ? 600 : 400,
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        .hidden-mobile { display: flex !important; }
        .show-mobile { display: none !important; }
        @media (max-width: 640px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
