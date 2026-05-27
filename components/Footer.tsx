export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "1.5rem",
        textAlign: "center",
        color: "var(--text-muted)",
        fontSize: "0.82rem",
      }}
    >
      © {new Date().getFullYear()} Rhys Earl · Built with Next.js · Deployed on Vercel
    </footer>
  );
}
