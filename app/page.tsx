import Link from "next/link";
import PublicationCard from "@/components/PublicationCard";
import BlogPostCard from "@/components/BlogPostCard";
import { fetchRSSPosts } from "@/lib/fetchRSS";

// TODO: Replace featured publications with real ones
const featuredPublications = [
  {
    title: "Understanding [Phenomenon Placeholder] Through [Method Placeholder]",
    authors: "Rhys Earl, A. Collaborator, B. Coauthor",
    venue: "Journal of [Field] Research",
    year: 2024,
    abstract:
      "This paper investigates [topic] using [method]. We find that [finding placeholder] with significant implications for [field]. Our results suggest that [conclusion placeholder].",
    tags: ["Peer-reviewed"],
    doi: "10.xxxx/placeholder",
  },
  {
    title: "A Comparative Study of [Topic A] and [Topic B]",
    authors: "C. Coauthor, Rhys Earl",
    venue: "Proceedings of [Conference Placeholder]",
    year: 2023,
    abstract:
      "We present a comparative analysis of [topic], drawing on data from [source placeholder]. Our framework reveals [insight placeholder] and proposes [contribution placeholder].",
    tags: ["Conference"],
  },
];

// TODO: Replace fact chips with real ones
const factChips = [
  { icon: "📍", label: "Singapore" },
  { icon: "🎓", label: "[University placeholder]" },
  { icon: "🔬", label: "[Field placeholder]" },
  { icon: "✏️", label: "Writing since 2020" },
];

export default async function Home() {
  // TODO: Replace with real RSS feed URL (Substack: https://[name].substack.com/feed)
  const rssUrl = "https://feeds.feedburner.com/placeholder";
  const posts = await fetchRSSPosts(rssUrl, 3);

  return (
    <div>
      {/* Hero */}
      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "5rem 1.5rem 4rem",
          display: "grid",
          gap: "4rem",
          alignItems: "center",
        }}
        className="hero-section"
      >
        <div>
          <p
            className="animate-fade-in-up animation-delay-100"
            style={{ color: "var(--accent)", fontSize: "0.9rem", fontWeight: 500, marginBottom: "0.75rem", letterSpacing: "0.05em", textTransform: "uppercase" }}
          >
            Personal Website
          </p>
          <h1
            className="animate-fade-in-up animation-delay-200"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.8rem, 5vw, 4rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "var(--text-primary)",
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
            }}
          >
            Rhys Earl
          </h1>
          <p
            className="animate-fade-in-up animation-delay-300"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.2rem",
              fontWeight: 400,
              color: "var(--text-muted)",
              marginBottom: "1.5rem",
            }}
          >
            Researcher · Writer · [Field Placeholder]
          </p>
          <p
            className="animate-fade-in-up animation-delay-400"
            style={{
              fontSize: "1rem",
              color: "var(--text-muted)",
              lineHeight: 1.8,
              marginBottom: "2rem",
              maxWidth: 480,
            }}
          >
            {/* TODO: Replace with real bio */}
            I study [topic placeholder] at [Institution placeholder]. My work sits at the intersection of [field A] and [field B]. I write about [theme] and occasionally break things in the name of science.
          </p>
          <div className="animate-fade-in-up animation-delay-500" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href="/research"
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
              View My Research
            </Link>
            <Link
              href="/blog"
              style={{
                backgroundColor: "transparent",
                color: "var(--accent)",
                padding: "0.7rem 1.5rem",
                borderRadius: 8,
                fontSize: "0.9rem",
                fontWeight: 600,
                border: "1.5px solid var(--accent)",
                display: "inline-block",
                transition: "background 0.2s",
              }}
            >
              Read the Blog
            </Link>
          </div>
        </div>

        {/* Decorative initials blob */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} className="hero-shape">
          <div
            style={{
              width: 280,
              height: 280,
              borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
              backgroundColor: "var(--accent-light)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "6rem",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              color: "var(--accent)",
              userSelect: "none",
            }}
          >
            RE
          </div>
        </div>
      </section>

      {/* About snapshot */}
      <section
        style={{
          backgroundColor: "var(--surface)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "3.5rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }} className="about-grid">
          <div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.6rem",
                fontWeight: 600,
                marginBottom: "1rem",
                color: "var(--text-primary)",
              }}
            >
              About me
            </h2>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "1.5rem" }}>
              {/* TODO: Replace with real bio */}
              I am a researcher working at the intersection of [field A] and [field B], with a particular interest in how [phenomenon] shapes [outcome]. Before my current role, I spent time at [institution], where I developed my approach to [method]. When I&apos;m not writing papers, I&apos;m probably writing essays, tinkering with data, or looking for the best coffee in Singapore.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
              {factChips.map((chip) => (
                <span
                  key={chip.label}
                  style={{
                    backgroundColor: "var(--bg)",
                    border: "1px solid var(--border)",
                    color: "var(--text-muted)",
                    fontSize: "0.82rem",
                    padding: "4px 14px",
                    borderRadius: 20,
                  }}
                >
                  {chip.icon} {chip.label}
                </span>
              ))}
            </div>
          </div>

          {/* Photo placeholder */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", paddingTop: "0.5rem" }}>
            <div
              style={{
                width: 180,
                height: 220,
                borderRadius: 16,
                backgroundColor: "var(--accent-light)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid var(--border)",
                color: "var(--accent)",
                fontFamily: "var(--font-display)",
              }}
            >
              <span style={{ fontSize: "3rem", fontWeight: 700 }}>RE</span>
              {/* TODO: Replace this div with <Image src="/photo.jpg" alt="Rhys Earl" width={180} height={220} style={{borderRadius:16}} /> */}
              <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>Add photo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Research */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "4rem 1.5rem 2rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "2rem" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 600, color: "var(--text-primary)" }}>
            Featured Research
          </h2>
          <Link href="/research" style={{ color: "var(--accent)", fontSize: "0.88rem", fontWeight: 500 }}>
            All publications →
          </Link>
        </div>
        <div className="cards-grid">
          {featuredPublications.map((pub) => (
            <PublicationCard key={pub.title} {...pub} />
          ))}
        </div>
      </section>

      {/* Featured Blog */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "2rem 1.5rem 5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "2rem" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 600, color: "var(--text-primary)" }}>
            Latest Writing
          </h2>
          <Link href="/blog" style={{ color: "var(--accent)", fontSize: "0.88rem", fontWeight: 500 }}>
            All posts →
          </Link>
        </div>

        {posts.length > 0 ? (
          <div className="blog-cards-grid">
            {posts.map((post) => (
              <BlogPostCard key={post.url} {...post} />
            ))}
          </div>
        ) : (
          <div
            style={{
              backgroundColor: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: "2rem",
              textAlign: "center",
              color: "var(--text-muted)",
              fontSize: "0.9rem",
            }}
          >
            Posts are loading from Substack. If this persists,{" "}
            <a href="https://substack.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }}>
              visit directly
            </a>
            .
          </div>
        )}
      </section>

      <style>{`
        .hero-section { grid-template-columns: 1fr 1fr; }
        .about-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 3rem; align-items: start; }
        .cards-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
        .blog-cards-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
        @media (max-width: 768px) {
          .hero-section { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .hero-shape { display: none !important; }
          .about-grid { grid-template-columns: 1fr !important; }
          .cards-grid { grid-template-columns: 1fr !important; }
          .blog-cards-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
