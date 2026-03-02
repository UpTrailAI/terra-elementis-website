import { SITE_URL, buildOgUrl, breadcrumbJsonLd } from "@/lib/seo";

export default function Head() {
  const title = "Governance | Terra Elementis Inc.";
  const description = "Terra Elementis governance model emphasizes board independence, audit readiness, and public-market disclosure discipline.";
  const canonical = `${SITE_URL}/governance`;
  const ogImage = buildOgUrl("Governance");
  const breadcrumb = breadcrumbJsonLd("Governance", "/governance");
  const webpageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: canonical,
    isPartOf: SITE_URL,
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
    </>
  );
}
