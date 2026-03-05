import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Strategic Partners",
  description:
    "Terra Elementis partners with leading organizations in mineral data systems, reserve management, and sovereign-grade capital infrastructure.",
};

const partners = [
  {
    name: "Alchemy Nexis",
    logo: "/ALCHEMY-Photoroom_edited.avif",
    url: "https://www.alchemynexis.com/",
    description:
      "Alchemy Nexis provides MiDAS, Terra's mineral data and reporting backbone. MiDAS integrates geophysics, drone/satellite/LiDAR inputs, supports evidence assembly for NI 43-101 and S-K 1300 technical reporting, and provides the data/oracle layer for in-ground tokenized mineral assets and end-to-end chain-of-custody.",
    role: "Technology & Data Platform",
  },
  {
    name: "The Aureus Company",
    logo: "/aureus-logo.png",
    url: "https://aureus.co/",
    description:
      "The Aureus Company is Terra's parent entity and controlling shareholder, delivering reserve-backed capital solutions and sovereign-aligned monetary infrastructure anchored in certified gold reserves and related strategic minerals. Aureus provides Terra with reserve governance discipline, technical reporting architecture, and collateralization expertise.",
    role: "Parent Company & Strategic Backer",
  },
  {
    name: "Decorus Imperium",
    logo: "/decorus-imperium-logo.png",
    url: "https://decorusimperium.com/",
    description:
      "Decorus Imperium serves as Terra's investment advisor and asset manager, providing strategic capital allocation, portfolio structuring, and institutional asset management expertise across Terra's mineral-backed investment vehicles.",
    role: "Investment Advisor & Asset Manager",
  },
];

export default function PartnersPage() {
  return (
    <div className="bg-navy-deep">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-gold/10 bg-charcoal py-32 lg:py-44">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-charcoal to-navy-mid" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08),transparent_65%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
          <ScrollReveal>
            <span className="mb-6 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
              Strategic Partners
            </span>
            <h1 className="max-w-4xl font-serif text-5xl font-bold leading-[1.1] text-text-primary md:text-6xl lg:text-7xl">
              Built on institutional-grade partnerships.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-text-secondary lg:text-xl">
              Terra collaborates with leading organizations in mineral data
              systems, reserve management, and sovereign-grade capital
              infrastructure to deliver disciplined execution and
              public-market credibility.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="space-y-24">
            {partners.map((partner, idx) => (
              <ScrollReveal key={partner.name} delay={idx * 0.1}>
                <div className="group relative overflow-hidden border border-gold/10 bg-surface-glass p-12 transition-all duration-500 hover:border-gold/30 lg:p-16">
                  {/* Background glow on hover */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute right-0 top-0 h-96 w-96 bg-[radial-gradient(circle,rgba(212,175,55,0.06),transparent_70%)]" />
                  </div>

                  <div className="relative grid gap-12 lg:grid-cols-[300px_1fr] lg:gap-16">
                    {/* Logo Section */}
                    <div className="flex flex-col gap-6">
                      <a
                        href={partner.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/logo"
                      >
                        <div className="flex h-40 items-center justify-center border border-gold/20 bg-navy-deep/50 p-8 transition-all duration-300 group-hover/logo:border-gold/40 group-hover/logo:bg-navy-deep/70">
                          <img
                            src={partner.logo}
                            alt={`${partner.name} logo`}
                            className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover/logo:scale-105"
                          />
                        </div>
                      </a>

                      <div>
                        <span className="block font-mono text-xs tracking-wider text-gold-muted uppercase">
                          {partner.role}
                        </span>
                      </div>

                      <a
                        href={partner.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors duration-300 hover:text-gold-light"
                      >
                        Visit Website
                        <span aria-hidden="true">→</span>
                      </a>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col justify-center">
                      <h2 className="mb-6 font-serif text-3xl font-bold text-text-primary lg:text-4xl">
                        <a
                          href={partner.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors duration-300 hover:text-gold"
                        >
                          {partner.name}
                        </a>
                      </h2>
                      <p className="text-lg leading-[1.7] text-text-secondary">
                        {partner.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-gold/10 bg-charcoal py-32 lg:py-40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <ScrollReveal>
            <div className="flex flex-col items-start gap-12 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <span className="mb-4 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
                  Partnership Opportunities
                </span>
                <h2 className="font-serif text-3xl font-bold leading-tight text-text-primary lg:text-4xl">
                  Interested in partnering with Terra?
                </h2>
                <p className="mt-6 text-lg leading-[1.7] text-text-secondary">
                  We collaborate with mining operators, refinery partners,
                  offtake counterparties, and institutional service providers
                  aligned to our governance and disclosure standards.
                </p>
              </div>
              <a
                href="/contact"
                className="inline-flex items-center gap-3 border border-gold bg-gold/10 px-8 py-4 font-medium text-gold transition-all duration-300 hover:bg-gold/20 hover:text-gold-light"
              >
                Contact Us
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
