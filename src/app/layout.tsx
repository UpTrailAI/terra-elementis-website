import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

const siteUrl = "https://terraelementis.com";
const socialProfiles = [
  process.env.NEXT_PUBLIC_LINKEDIN_URL,
  process.env.NEXT_PUBLIC_X_URL,
].filter(Boolean) as string[];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Terra Elementis Inc. — Sovereign-Grade Critical Minerals Platform",
    template: "%s | Terra Elementis Inc.",
  },
  description:
    "A public-market platform for critical minerals consolidation, certification, and industrialization aligned to U.S. strategic supply needs.",
  keywords: [
    "Terra Elementis",
    "critical minerals",
    "rare earth elements",
    "mineral certification",
    "supply chain security",
    "U.S. critical supply chain",
    "NI 43-101",
    "SEC S-K 1300",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Terra Elementis Inc. — Sovereign-Grade Critical Minerals Platform",
    description:
      "A public-market platform for critical minerals consolidation, certification, and industrialization aligned to U.S. strategic supply needs.",
    siteName: "Terra Elementis Inc.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Terra Elementis Inc.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terra Elementis Inc. — Sovereign-Grade Critical Minerals Platform",
    description:
      "A public-market platform for critical minerals consolidation, certification, and industrialization aligned to U.S. strategic supply needs.",
    images: ["/twitter-image"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
  },
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Terra Elementis Inc.",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description:
      "Sovereign-grade critical minerals platform focused on consolidation, certification, and industrialization aligned to U.S. strategic supply needs.",
    sameAs: socialProfiles,
  };

  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${sourceSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
