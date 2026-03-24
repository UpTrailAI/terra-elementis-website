"use client";

import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function StrategyPage() {
  return (
    <>
      <PageHero
        eyebrow="Strategy"
        title="Our Approach"
        subtitle="Terra intentionally separates asset ownership and governance from operational execution — reducing risk, increasing confidence, and supporting scalable expansion."
      />

      {/* ================================================================
          THE MODEL — Ownership vs Execution split
      ================================================================ */}
      <section className="bg-charcoal py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-24">
            <ScrollReveal className="lg:w-2/5">
              <span className="mb-4 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
                Business Model
              </span>
              <h2 className="font-serif text-3xl font-bold leading-tight text-text-primary lg:text-5xl">
                Ownership and governance, separated from execution.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="lg:w-3/5">
              <p className="text-lg leading-[1.7] text-text-secondary">
                Terra retains ownership of mineral properties and provides capital, portfolio management, and disclosure discipline. Experienced operators run mining and refining under structured contracts that preserve Terra&apos;s ownership position.
              </p>
              <p className="mt-6 text-lg leading-[1.7] text-text-secondary">
                This deliberate separation reduces execution risk and supports scalable expansion across multiple geographies and commodities without building Terra into a mining operator.
              </p>
              <div className="mt-10 flex flex-col gap-6 border-l border-gold/20 pl-8">
                <div>
                  <span className="mb-1 block text-sm font-medium text-gold">Terra retains</span>
                  <span className="text-base text-text-secondary">
                    Ownership, capital, portfolio management, disclosure discipline, governance
                  </span>
                </div>
                <div>
                  <span className="mb-1 block text-sm font-medium text-gold">Operators execute</span>
                  <span className="text-base text-text-secondary">
                    Mining, refining, HSE compliance, production ramp-up, processing throughput
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <hr className="gold-rule mx-auto max-w-[1400px]" />

      {/* ================================================================
          OUR PROCESS — Acquire, certify, prepare for production
      ================================================================ */}
      <section className="bg-navy-deep py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <ScrollReveal>
            <span className="mb-4 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
              Our Process
            </span>
            <h2 className="max-w-3xl font-serif text-3xl font-bold leading-tight text-text-primary lg:text-5xl">
              Acquire, certify, and prepare for production.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mt-10 max-w-3xl text-lg leading-[1.7] text-text-secondary">
              We establish technical defensibility and credibility before a single tonne is mined. This certified foundation makes operator partnerships and future development possible.
            </p>
          </ScrollReveal>

          {/* Process steps — staggered left-heavy layout */}
          <div className="mt-20 flex flex-col gap-0">
            {[
              {
                num: "01",
                label: "Portfolio Onboarding",
                text: "Confirm chain-of-title and enforceability across the Arizona and Nevada footprint. Establish legal and regulatory clarity before any technical work begins.",
              },
              {
                num: "02",
                label: "Data Consolidation",
                text: "Ingest historical datasets, integrate new scanning and mapping, geophysics, drone, satellite, and LiDAR inputs. Build the comprehensive data foundation required for Qualified Person-governed resource estimation.",
              },
              {
                num: "03",
                label: "QP Review and Estimation",
                text: "Resource and reserve classification under NI 43-101 and SEC Regulation S-K 1300. Application of modifying factors, independent QP sign-off. These are the institutional-grade technical reports that underpin credibility.",
              },
              {
                num: "04",
                label: "Disclosure Readiness",
                text: "Build a repeatable disclosure process with internal controls. Ensure every report, every dataset, and every estimate flows through a governed pipeline ready for continuous reporting obligations.",
              },
              {
                num: "05",
                label: "Operator Pathway Design",
                text: "Pre-qualify mining and refinery operators. Outline contract terms, performance KPIs, and partnership structures before any commitments are made. Terra selects operators from a position of strength, not urgency.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.num} delay={0.1 + i * 0.05}>
                <div className="flex flex-col border-t border-gold/15 py-12 lg:flex-row lg:items-start lg:gap-20">
                  <div className="mb-3 flex items-baseline gap-4 lg:mb-0 lg:w-1/3">
                    <span className="font-mono text-4xl font-bold text-gold/25">{item.num}</span>
                    <h3 className="font-serif text-xl font-semibold text-text-primary lg:text-2xl">
                      {item.label}
                    </h3>
                  </div>
                  <p className="text-base leading-[1.7] text-text-secondary lg:w-2/3">
                    {item.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          CTA — Link to projects and contact
      ================================================================ */}
      <section className="bg-charcoal py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <ScrollReveal>
            <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <span className="mb-4 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
                  Next
                </span>
                <h2 className="font-serif text-3xl font-bold leading-tight text-text-primary lg:text-5xl">
                  Explore our mineral projects in Arizona and Nevada.
                </h2>
              </div>
              <Link
                href="/assets"
                className="inline-flex items-center gap-3 border border-gold bg-gold/10 px-8 py-4 font-medium text-gold transition-all duration-300 hover:bg-gold/20 hover:text-gold-light"
              >
                Our Projects
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
