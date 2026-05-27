import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        maxWidth: 560,
        margin: "0 auto",
        padding: "8rem 1.5rem",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "5rem",
          fontWeight: 700,
          color: "var(--accent-light)",
          marginBottom: "0",
          lineHeight: 1,
        }}
      >
        404
      </p>
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.8rem",
          fontWeight: 600,
          color: "var(--text-primary)",
          marginBottom: "1rem",
          marginTop: "0.5rem",
        }}
      >
        Page not found
      </h1>
      <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
        Looks like this page doesn&apos;t exist. Maybe it&apos;s still being written.
      </p>
      <Link
        href="/"
        style={{
          backgroundColor: "var(--accent)",
          color: "#fff",
          padding: "0.7rem 1.5rem",
          borderRadius: 8,
          fontSize: "0.9rem",
          fontWeight: 600,
          display: "inline-block",
          transition: "opacity 0.2s",
        }}
      >
        Back to home
      </Link>
    </div>
  );
}
