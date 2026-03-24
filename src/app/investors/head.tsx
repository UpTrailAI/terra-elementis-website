import { SITE_URL, buildOgUrl, breadcrumbJsonLd } from "@/lib/seo";

export default function Head() {
  const title = "Investors | Terra Elementis Inc.";
  const description = "Investor relations for Terra Elementis — inquiries regarding the critical minerals platform.";
  const canonical = `${SITE_URL}/investors`;
  const ogImage = buildOgUrl("Investors");
  const breadcrumb = breadcrumbJsonLd("Investors", "/investors");
  const webpageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: canonical,
    isPartOf: SITE_URL,
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What stage is Terra Elementis at?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Terra Elementis is in a staged formation and readiness process focused on reserve certification, governance, and industrial execution planning.",
        },
      },
      {
        "@type": "Question",
        name: "How can investors get in touch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use the investor inquiry form on the Investors page to request an information package and follow-up.",
        },
      },
      {
        "@type": "Question",
        name: "What reporting standards are referenced?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Terra references recognized frameworks including NI 43-101 and SEC Regulation S-K 1300 for technical reporting governance.",
        },
      }
    ],
  };


  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
