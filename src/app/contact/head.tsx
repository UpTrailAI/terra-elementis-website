import { SITE_URL, buildOgUrl, breadcrumbJsonLd } from "@/lib/seo";

export default function Head() {
  const title = "Contact | Terra Elementis Inc.";
  const description = "Contact Terra Elementis for investor inquiries, strategic partnerships, and government-aligned critical minerals discussions.";
  const canonical = `${SITE_URL}/contact`;
  const ogImage = buildOgUrl("Contact");
  const breadcrumb = breadcrumbJsonLd("Contact", "/contact");
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
        name: "What can I contact Terra Elementis about?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can reach out for investor discussions, strategic partnerships, and government-aligned critical minerals engagement.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly will inquiries be reviewed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Inquiries are reviewed by the relevant team and prioritized based on strategic relevance and completeness.",
        },
      },
      {
        "@type": "Question",
        name: "Does Terra accept partnership proposals?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Terra reviews qualified proposals aligned with critical minerals, reporting, and supply-chain execution goals.",
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
