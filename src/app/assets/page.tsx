"use client";

import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function AssetsPage() {
  return (
    <>
      <PageHero
        eyebrow="Assets"
        title="Strategic Mineral Assets"
        subtitle="Consolidating rare earth element reserves across the American West, governed by institutional-grade certification and reporting frameworks."
      />

      {/* ================================================================
          INITIAL FOOTPRINT — Arizona and Nevada
      ================================================================ */}
      <section className="bg-charcoal py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-24">
            <ScrollReveal className="lg:w-2/5">
              <span className="mb-4 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
                Initial Footprint
              </span>
              <h2 className="font-serif text-3xl font-bold leading-tight text-text-primary lg:text-5xl">
                Arizona and Nevada.
              </h2>
              <div className="mt-10 flex gap-8">
                <div>
                  <span className="block font-mono text-5xl font-bold text-gold lg:text-6xl">AZ</span>
                  <span className="mt-1 block text-sm text-text-secondary">Arizona</span>
                </div>
                <div className="h-auto w-[1px] bg-gold/20" />
                <div>
                  <span className="block font-mono text-5xl font-bold text-gold lg:text-6xl">NV</span>
                  <span className="mt-1 block text-sm text-text-secondary">Nevada</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="lg:w-3/5">
              <p className="text-lg leading-[1.7] text-text-secondary">
                Claims already controlled by The Aureus Company, expected to be vended into Terra upon transaction readiness. These initial positions provide the foundation for Terra&apos;s certified reserve platform across the American West.
              </p>
              <p className="mt-6 text-lg leading-[1.7] text-text-secondary">
                Upon transaction close, Terra will immediately initiate data acquisition and Qualified Person governance workstreams. The emphasis from day one is reserve defensibility and disclosure discipline &mdash; not promotional claims, but verified, QP-signed technical reports under NI 43-101 and SEC Regulation S-K 1300.
              </p>

              <div className="mt-10 flex flex-col gap-6">
                {[
                  {
                    label: "Chain-of-Title",
                    text: "Confirm enforceability and legal clarity of all mineral claims prior to technical work.",
                  },
                  {
                    label: "Data Acquisition",
                    text: "Historical datasets, new scanning and mapping, geophysics, drone, satellite, and LiDAR integration.",
                  },
                  {
                    label: "QP Governance",
                    text: "Resource and reserve classification under institutional reporting frameworks. Independent QP review and sign-off.",
                  },
                  {
                    label: "Disclosure Discipline",
                    text: "Repeatable disclosure process with internal controls, ready for continuous public-market reporting.",
                  },
                ].map((item, i) => (
                  <ScrollReveal key={item.label} delay={0.2 + i * 0.05}>
                    <div className="border-l border-gold/20 pl-6">
                      <span className="mb-1 block text-sm font-medium text-gold">{item.label}</span>
                      <span className="text-base text-text-secondary">{item.text}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <hr className="gold-rule mx-auto max-w-[1400px]" />

      {/* ================================================================
          RESERVE FRAMEWORK — US$100B figure
      ================================================================ */}
      <section className="bg-navy-deep py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          {/* Big number + context, asymmetric */}
          <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-24">
            <ScrollReveal className="lg:w-2/5">
              <span className="mb-4 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
                Valuation Framework
              </span>
              <span className="block font-mono text-6xl font-bold text-gold lg:text-[88px] lg:leading-[0.9]">
                US$100B
              </span>
              <span className="mt-4 block text-base text-text-secondary">
                Reserve framework based on identified pipeline
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="lg:w-3/5">
              <p className="text-lg leading-[1.7] text-text-secondary">
                The US$100B reserve framework is supported by pre-purchase NI 43-101 and SEC S-K 1300 compliant reporting. Post-vend-in, updated technical reports will reflect ownership changes and refreshed commodity pricing to ensure ongoing accuracy and defensibility.
              </p>

              <div className="mt-12 flex flex-col gap-0">
                <div className="flex flex-col border-t border-gold/15 py-8 lg:flex-row lg:items-start lg:gap-16">
                  <div className="mb-2 lg:mb-0 lg:w-2/5">
                    <span className="text-sm font-medium text-gold">Aureus Capital Position</span>
                  </div>
                  <p className="text-base leading-[1.7] text-text-secondary lg:w-3/5">
                    The Aureus Company is expected to receive shares representing approximately US$25B of paid-in capital, reflecting its contribution of the mineral claims and governance infrastructure to Terra.
                  </p>
                </div>

                <div className="flex flex-col border-t border-gold/15 py-8 lg:flex-row lg:items-start lg:gap-16">
                  <div className="mb-2 lg:mb-0 lg:w-2/5">
                    <span className="text-sm font-medium text-gold">Unrealized Gains</span>
                  </div>
                  <p className="text-base leading-[1.7] text-text-secondary lg:w-3/5">
                    The remaining approximately US$75B represents unrealized gains attributable to mineral reserves, subject to adjustment based on actual outcomes of certification, production, and market conditions.
                  </p>
                </div>

                <div className="flex flex-col border-t border-gold/15 border-b border-b-gold/15 py-8 lg:flex-row lg:items-start lg:gap-16">
                  <div className="mb-2 lg:mb-0 lg:w-2/5">
                    <span className="text-sm font-medium text-gold">Framework Basis</span>
                  </div>
                  <p className="text-base leading-[1.7] text-text-secondary lg:w-3/5">
                    This framework is directional, not a guaranteed realizable value. It reflects the scale of the identified mineral pipeline and is subject to ongoing QP review, certification outcomes, and commodity price dynamics.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Supporting metrics */}
          <ScrollReveal delay={0.25}>
            <div className="mt-20 grid gap-12 sm:grid-cols-3">
              <div>
                <span className="block font-mono text-3xl font-bold text-gold lg:text-4xl">~US$25B</span>
                <span className="mt-2 block text-sm text-text-secondary">
                  Paid-in capital represented by Aureus share position
                </span>
              </div>
              <div>
                <span className="block font-mono text-3xl font-bold text-gold lg:text-4xl">~US$75B</span>
                <span className="mt-2 block text-sm text-text-secondary">
                  Unrealized gains attributable to mineral reserves, subject to adjustment
                </span>
              </div>
              <div>
                <span className="block font-mono text-3xl font-bold text-gold lg:text-4xl">NI 43-101</span>
                <span className="mt-2 block text-sm text-text-secondary">
                  Pre-purchase reporting compliant with NI 43-101 and SEC S-K 1300
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================
          EXPANSION PROGRAM
      ================================================================ */}
      <section className="bg-charcoal py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <ScrollReveal>
            <span className="mb-4 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
              Growth Pipeline
            </span>
            <h2 className="max-w-3xl font-serif text-3xl font-bold leading-tight text-text-primary lg:text-5xl">
              Expansion gated by discipline, not ambition.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mt-8 max-w-3xl text-lg leading-[1.7] text-text-secondary">
              After stabilizing the public platform and completing initial certification workstreams on the Arizona and Nevada footprint, Terra will expand into additional jurisdictions. Every expansion decision is gated by strict criteria &mdash; not growth targets.
            </p>
          </ScrollReveal>

          {/* Expansion tiers — staggered horizontal layout */}
          <div className="mt-20 flex flex-col gap-0">
            <ScrollReveal delay={0.15}>
              <div className="flex flex-col border-t border-gold/15 py-12 lg:flex-row lg:items-start lg:gap-20">
                <div className="mb-4 lg:mb-0 lg:w-1/3">
                  <span className="block font-mono text-xs tracking-wider text-gold-muted uppercase">
                    Tier 1
                  </span>
                  <h3 className="mt-1 font-serif text-2xl font-semibold text-text-primary">
                    Additional U.S. States
                  </h3>
                </div>
                <p className="text-base leading-[1.7] text-text-secondary lg:w-2/3">
                  Domestic expansion across additional states with identified rare earth and critical mineral deposits. Leveraging the governance, reporting, and operator frameworks already proven on the Arizona and Nevada footprint for rapid onboarding of new claims.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex flex-col border-t border-gold/15 py-12 lg:flex-row lg:items-start lg:gap-20">
                <div className="mb-4 lg:mb-0 lg:w-1/3">
                  <span className="block font-mono text-xs tracking-wider text-gold-muted uppercase">
                    Tier 2
                  </span>
                  <h3 className="mt-1 font-serif text-2xl font-semibold text-text-primary">
                    Canada and Australia
                  </h3>
                </div>
                <p className="text-base leading-[1.7] text-text-secondary lg:w-2/3">
                  Allied jurisdictions with established mining regulatory frameworks, enforceable mineral rights, and compatible reporting standards. These represent natural extensions of the platform into geopolitically aligned territories.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="flex flex-col border-t border-gold/15 border-b border-b-gold/15 py-12 lg:flex-row lg:items-start lg:gap-20">
                <div className="mb-4 lg:mb-0 lg:w-1/3">
                  <span className="block font-mono text-xs tracking-wider text-gold-muted uppercase">
                    Tier 3
                  </span>
                  <h3 className="mt-1 font-serif text-2xl font-semibold text-text-primary">
                    Africa, Asia, Americas, Europe
                  </h3>
                </div>
                <p className="text-base leading-[1.7] text-text-secondary lg:w-2/3">
                  Selective international expansion, evaluated on a case-by-case basis. Each jurisdiction must demonstrate defensible data, enforceable mineral rights, acceptable regulatory and geopolitical risk profiles, and the ability to integrate into Terra&apos;s evidence and reporting system.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Expansion gates */}
          <ScrollReveal delay={0.3}>
            <div className="mt-16">
              <span className="mb-6 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
                Expansion Gates
              </span>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    gate: "Defensible Data",
                    desc: "Sufficient geological and technical data to support QP-governed resource estimation",
                  },
                  {
                    gate: "Enforceable Rights",
                    desc: "Clear legal title and enforceable mineral rights under local jurisdiction",
                  },
                  {
                    gate: "Regulatory Risk",
                    desc: "Acceptable regulatory and geopolitical risk profile for institutional investors",
                  },
                  {
                    gate: "System Integration",
                    desc: "Ability to integrate into Terra's MiDAS evidence and reporting system",
                  },
                ].map((item, i) => (
                  <ScrollReveal key={item.gate} delay={0.35 + i * 0.05}>
                    <div className="border-t border-gold/15 pt-6">
                      <span className="mb-2 block text-sm font-medium text-gold">{item.gate}</span>
                      <span className="text-sm leading-relaxed text-text-secondary">{item.desc}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================
          CTA — Link to strategy and investors
      ================================================================ */}
      <section className="bg-navy-deep py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <ScrollReveal>
            <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <span className="mb-4 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
                  Next
                </span>
                <h2 className="font-serif text-3xl font-bold leading-tight text-text-primary lg:text-5xl">
                  Understand how these assets move from certification to production.
                </h2>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                <Link
                  href="/strategy"
                  className="inline-flex items-center gap-3 border border-gold bg-gold/10 px-8 py-4 font-medium text-gold transition-all duration-300 hover:bg-gold/20 hover:text-gold-light"
                >
                  Strategy
                  <span aria-hidden="true">&rarr;</span>
                </Link>
                <Link
                  href="/investors"
                  className="inline-flex items-center gap-3 border border-gold/30 px-8 py-4 font-medium text-text-secondary transition-all duration-300 hover:border-gold/60 hover:text-text-primary"
                >
                  Investor Relations
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
