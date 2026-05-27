import type { Metadata } from "next";
import { Playfair_Display, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const body = Source_Serif_4({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Rhys Earl",
    template: "%s | Rhys Earl",
  },
  description:
    "Researcher, writer, and thinker. Personal academic website of Rhys Earl.",
  openGraph: {
    title: "Rhys Earl",
    description: "Researcher, writer, and thinker.",
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable}`}
    >
      <body>
        <Providers>
          <Navbar />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
