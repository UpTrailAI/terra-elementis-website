export const SITE_URL = "https://terraelementis.com";

export type PageSeo = {
  title: string;
  description: string;
  path: string;
};

export const pageSeo: Record<string, PageSeo> = {
  about: {
    title: "About Terra Elementis",
    description:
      "Learn how Terra Elementis is building a public-market scalable critical minerals platform with institutional governance and defensible reporting.",
    path: "/about",
  },
  leadership: {
    title: "Leadership",
    description:
      "Meet Terra Elementis leadership across mining, finance, policy, and geology with operational focus on strategic mineral execution.",
    path: "/leadership",
  },
  strategy: {
    title: "Strategy",
    description:
      "Explore Terra Elementis' disciplined two-phase mine-refine-supply strategy for critical minerals and rare earth execution.",
    path: "/strategy",
  },
  assets: {
    title: "Assets",
    description:
      "View Terra Elementis strategic mineral footprint in Arizona and Nevada, designed for certified reserves and disclosure discipline.",
    path: "/assets",
  },
  technology: {
    title: "Technology",
    description:
      "MiDAS is Terra Elementis' evidence and oracle layer powering technical reporting, chain-of-custody, and operational controls.",
    path: "/technology",
  },
  governance: {
    title: "Governance",
    description:
      "Terra Elementis governance model emphasizes board independence, audit readiness, and public-market disclosure discipline.",
    path: "/governance",
  },
  investors: {
    title: "Investors",
    description:
      "Investor relations and public markets strategy for Terra Elementis, including phased capital formation and institutional readiness.",
    path: "/investors",
  },
  contact: {
    title: "Contact",
    description:
      "Contact Terra Elementis for investor inquiries, strategic partnerships, and government-aligned critical minerals discussions.",
    path: "/contact",
  },
};

export function buildOgUrl(title: string) {
  return `${SITE_URL}/api/og?title=${encodeURIComponent(title)}`;
}

export function breadcrumbJsonLd(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name,
        item: `${SITE_URL}${path}`,
      },
    ],
  };
}
