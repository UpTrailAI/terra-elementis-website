"use client";

import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Terra Elementis"
        title="Building America's Critical Minerals Future"
        subtitle="A public-market scalable, technically defensible mineral platform designed to consolidate, certify, and industrialize strategically relevant rare earth and precious metal reserves."
      />

      {/* ================================================================
          COMPANY OVERVIEW
      ================================================================ */}
      <section className="bg-navy-deep py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="flex flex-col gap-16 lg:flex-row lg:gap-24">
            <ScrollReveal className="lg:w-2/5">
              <span className="mb-4 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
                Company Overview
              </span>
              <h2 className="font-serif text-3xl font-bold leading-tight text-text-primary lg:text-5xl">
                A platform built for institutional credibility.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="lg:w-3/5">
              <p className="text-lg leading-[1.7] text-text-secondary">
                Terra Elementis Inc. (&ldquo;Terra&rdquo;) is a critical minerals platform being formed as a spin-out of rare earth mineral assets and related operations from The Aureus Company. Its purpose is to create a public-market scalable, technically defensible mineral platform that can consolidate, certify, and then industrialize strategically relevant rare earth and precious metal reserves.
              </p>
              <p className="mt-6 text-lg leading-[1.7] text-text-secondary">
                The platform is anchored in disciplined governance, transparent reporting, and a mine-refine-supply pathway aligned to U.S. strategic supply needs. Terra Elementis Inc., incorporated in Delaware, serves as the contracting and surviving entity for all operations.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <hr className="gold-rule mx-auto max-w-[1400px]" />

      {/* ================================================================
          THE TERRA THESIS
      ================================================================ */}
      <section className="bg-charcoal py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <ScrollReveal>
            <span className="mb-4 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
              Differentiated Value
            </span>
            <h2 className="max-w-3xl font-serif text-3xl font-bold leading-tight text-text-primary lg:text-5xl">
              The Terra Thesis
            </h2>
          </ScrollReveal>

          <div className="mt-16 flex flex-col gap-16 lg:flex-row lg:gap-24">
            <ScrollReveal delay={0.15} className="lg:w-3/5">
              <p className="text-lg leading-[1.7] text-text-secondary">
                Capital markets and government stakeholders require three things that most early-stage mineral ventures fail to deliver: verified reserves under recognized reporting frameworks, credible execution partners for mining and refining, and traceability and chain-of-custody from resource assessment through customer delivery.
              </p>
              <p className="mt-6 text-lg leading-[1.7] text-text-secondary">
                Terra is designed from formation to meet all three requirements simultaneously. This is not a speculative exploration play. It is a structured mineral platform with institutional-grade governance, QP-governed technical reporting under NI 43-101 and SEC S-K 1300, and a technology backbone that provides evidence management and provenance from ore body to end customer.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3} className="lg:w-2/5">
              <div className="border-l border-gold/30 pl-8">
                <div className="mb-10">
                  <span className="font-mono text-sm font-bold tracking-wider text-gold uppercase">i.</span>
                  <h3 className="mt-2 font-serif text-xl font-semibold text-text-primary">
                    Verified Reserves
                  </h3>
                  <p className="mt-2 text-base leading-[1.7] text-text-secondary">
                    Recognized reporting frameworks under NI 43-101 and SEC S-K 1300 governance.
                  </p>
                </div>
                <div className="mb-10">
                  <span className="font-mono text-sm font-bold tracking-wider text-gold uppercase">ii.</span>
                  <h3 className="mt-2 font-serif text-xl font-semibold text-text-primary">
                    Credible Execution
                  </h3>
                  <p className="mt-2 text-base leading-[1.7] text-text-secondary">
                    Experienced operators for mining and refining through a 50/50 partnership model.
                  </p>
                </div>
                <div>
                  <span className="font-mono text-sm font-bold tracking-wider text-gold uppercase">iii.</span>
                  <h3 className="mt-2 font-serif text-xl font-semibold text-text-primary">
                    Chain-of-Custody
                  </h3>
                  <p className="mt-2 text-base leading-[1.7] text-text-secondary">
                    End-to-end traceability from resource assessment through customer delivery via MiDAS.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <hr className="gold-rule mx-auto max-w-[1400px]" />

      {/* ================================================================
          AUREUS RELATIONSHIP
      ================================================================ */}
      <section className="bg-navy-deep py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="flex flex-col gap-16 lg:flex-row lg:gap-24">
            <ScrollReveal className="lg:w-2/5">
              <span className="mb-4 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
                Parent Entity
              </span>
              <h2 className="font-serif text-3xl font-bold leading-tight text-text-primary lg:text-5xl">
                The Aureus Company
              </h2>
              <p className="mt-6 text-base leading-[1.7] text-text-secondary">
                Aureus Holdings (US), LLC
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="lg:w-3/5">
              <p className="text-lg leading-[1.7] text-text-secondary">
                Terra Elementis is the public-market vehicle and operating platform for the rare earth minerals and related operations spun out from The Aureus Company. The Aureus Company is the originating asset platform controlling the initial Arizona and Nevada claims, managing in-ground allocated gold reserve programs, and is expected to remain the controlling shareholder post-transaction with approximately 75% ownership.
              </p>
              <p className="mt-6 text-lg leading-[1.7] text-text-secondary">
                Terra leverages The Aureus Company&apos;s reserve governance discipline, technical reporting architecture, and collateralization mindset while extending the platform to a mine-refine-supply execution pathway for rare earth elements and precious metals aligned to U.S. strategic supply priorities.
              </p>
              <p className="mt-6 text-lg leading-[1.7] text-text-secondary">
                The spin-out structure is designed to provide a dedicated entity for ownership, production, refining, distribution, and government contracts for rare earth elements &mdash; a focused mandate that demands its own governance, disclosure discipline, and public-market identity.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <hr className="gold-rule mx-auto max-w-[1400px]" />

      {/* ================================================================
          CORPORATE STRUCTURE & PUBLIC-MARKET PATHWAY
      ================================================================ */}
      <section className="bg-charcoal py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <ScrollReveal>
            <span className="mb-4 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
              Corporate Structure
            </span>
            <h2 className="max-w-3xl font-serif text-3xl font-bold leading-tight text-text-primary lg:text-5xl">
              Public-market pathway
            </h2>
          </ScrollReveal>

          <div className="mt-20">
            <ScrollReveal delay={0.15}>
              <div className="flex flex-col gap-16 lg:flex-row lg:gap-24">
                <div className="lg:w-3/5">
                  <p className="text-lg leading-[1.7] text-text-secondary">
                    Terra Elementis Inc. (Delaware) is the contracting and surviving entity structured for public-market listing through a disciplined, staged pathway. The listing strategy begins with a Canadian Reverse Takeover (RTO), followed by a post-closing restructure and reverse split, leading to NASDAQ readiness within 12&ndash;18 months.
                  </p>
                  <p className="mt-6 text-lg leading-[1.7] text-text-secondary">
                    This phased approach is designed to ensure that the entity entering public markets has fully operational governance, audited financials, NI 43-101 and S-K 1300 compliant technical reports, and the institutional credibility necessary for sustained public-market participation.
                  </p>
                </div>

                <div className="lg:w-2/5">
                  {/* Pathway stages */}
                  <div className="relative border-l border-gold/30 pl-8">
                    <div className="mb-10">
                      <div className="absolute -left-[5px] h-[10px] w-[10px] border border-gold/60 bg-navy-deep" />
                      <span className="font-mono text-xs tracking-wider text-gold-muted uppercase">Stage 1</span>
                      <h3 className="mt-1 font-serif text-lg font-semibold text-text-primary">
                        Canadian RTO
                      </h3>
                      <p className="mt-1 text-sm leading-[1.7] text-text-secondary">
                        Initial public-market entry through reverse takeover on a Canadian exchange.
                      </p>
                    </div>
                    <div className="mb-10">
                      <div className="absolute -left-[5px] h-[10px] w-[10px] border border-gold/60 bg-navy-deep" />
                      <span className="font-mono text-xs tracking-wider text-gold-muted uppercase">Stage 2</span>
                      <h3 className="mt-1 font-serif text-lg font-semibold text-text-primary">
                        Post-Closing Restructure
                      </h3>
                      <p className="mt-1 text-sm leading-[1.7] text-text-secondary">
                        Share consolidation, governance finalization, and audit readiness.
                      </p>
                    </div>
                    <div>
                      <div className="absolute -left-[5px] h-[10px] w-[10px] border border-gold/60 bg-navy-deep" />
                      <span className="font-mono text-xs tracking-wider text-gold-muted uppercase">Stage 3</span>
                      <h3 className="mt-1 font-serif text-lg font-semibold text-text-primary">
                        NASDAQ Readiness
                      </h3>
                      <p className="mt-1 text-sm leading-[1.7] text-text-secondary">
                        Full compliance gate within 12&ndash;18 months of initial listing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <hr className="gold-rule mx-auto max-w-[1400px]" />

      {/* ================================================================
          VISION
      ================================================================ */}
      <section className="bg-navy-deep py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="flex flex-col gap-16 lg:flex-row lg:gap-24">
            <ScrollReveal className="lg:w-2/5">
              <span className="mb-4 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
                Vision
              </span>
              <h2 className="font-serif text-3xl font-bold leading-tight text-text-primary lg:text-5xl">
                Sovereign-grade infrastructure for critical minerals.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="lg:w-3/5">
              <p className="text-lg leading-[1.7] text-text-secondary">
                Terra Elementis envisions a modern, gold-anchored financial architecture providing immutable monetary infrastructure, system integrity, and transparency. The platform is designed to deliver verified, traceable, and institutionally governed mineral supply from American soil &mdash; serving the strategic requirements of the Department of Energy, Department of Defense, and commercial buyers who require provenance and compliance at every stage of the supply chain.
              </p>
              <p className="mt-6 text-lg leading-[1.7] text-text-secondary">
                This is not a speculative mineral play. Terra is a structured platform built to meet the moment: a sovereign-aligned, technically defensible, disclosure-disciplined mineral company designed for the capital markets, government agencies, and industrial partners who will define America&apos;s critical supply chain for the next generation.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ================================================================
          CTA
      ================================================================ */}
      <section className="bg-charcoal py-32 lg:py-40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <ScrollReveal>
            <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <span className="mb-4 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
                  Learn More
                </span>
                <h2 className="font-serif text-3xl font-bold leading-tight text-text-primary lg:text-5xl">
                  Explore our strategy and leadership.
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
                  href="/leadership"
                  className="inline-flex items-center gap-3 border border-gold/30 px-8 py-4 font-medium text-text-secondary transition-all duration-300 hover:border-gold/60 hover:text-text-primary"
                >
                  Leadership
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
