"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CountUp } from "@/components/CountUp";

export default function Home() {
  return (
    <>
      {/* ================================================================
          SECTION 1: HERO — Full viewport, dark, cinematic
      ================================================================ */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-navy-deep">
        {/* Ken Burns background — subtle zoom */}
        <motion.div
          className="absolute inset-0"
          animate={{ scale: [1, 1.05] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        >
          {/* REPLACE: Actual mine site photography */}
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-navy-deep to-navy-mid" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(197,165,90,0.06),transparent_70%)]" />
        </motion.div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="max-w-4xl pt-32 lg:pt-0">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase"
            >
              Terra Elementis Inc.
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-serif text-5xl font-bold leading-[1.1] text-text-primary md:text-6xl lg:text-[80px]"
            >
              A sovereign-grade mineral platform for America&apos;s critical supply chain.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-text-secondary"
            >
              Consolidating, certifying, and industrializing rare earth element reserves
              aligned to U.S. strategic supply needs.
            </motion.p>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-12 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] text-gold-muted uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-[1px] bg-gradient-to-b from-gold/60 to-transparent"
          />
        </motion.div>
      </section>

      {/* ================================================================
          SECTION 2: PROBLEM STATEMENT — Big stat, minimal text
      ================================================================ */}
      <section className="bg-charcoal py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <ScrollReveal>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:gap-24">
              <div className="lg:w-3/5">
                <span className="font-mono text-7xl font-bold text-gold lg:text-[120px]">
                  80%+
                </span>
              </div>
              <div className="lg:w-2/5">
                <p className="text-xl leading-relaxed text-text-secondary lg:text-2xl">
                  The United States imports over 80% of its rare earth elements from adversarial supply chains. This is a structural vulnerability at the core of defense, energy, and advanced manufacturing.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <hr className="gold-rule mx-auto max-w-[1400px]" />

      {/* ================================================================
          SECTION 3: WHAT WE'RE BUILDING — Terra thesis + Phase diagram
      ================================================================ */}
      <section className="bg-navy-deep py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <ScrollReveal>
            <span className="mb-4 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
              The Terra Thesis
            </span>
            <h2 className="max-w-3xl font-serif text-3xl font-bold leading-tight text-text-primary lg:text-5xl">
              A public-market scalable, technically defensible mineral platform.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="mt-8 max-w-3xl text-lg leading-[1.7] text-text-secondary">
              Capital markets and government stakeholders increasingly require verified reserves under recognized reporting frameworks, credible execution partners for mining and refining, and traceability from resource assessment through customer delivery. Terra is designed to meet these requirements through a disciplined two-phase strategy, supported by the MiDAS data and evidence platform as its technical reporting backbone.
            </p>
          </ScrollReveal>

          {/* Two-phase horizontal timeline */}
          <ScrollReveal delay={0.3}>
            <div className="mt-20">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute top-6 left-0 right-0 h-[1px] bg-gold/20 hidden lg:block" />

                <div className="grid gap-12 lg:grid-cols-2 lg:gap-0">
                  {/* Phase I */}
                  <div className="relative lg:pr-16">
                    <div className="mb-6 flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center border border-gold/40 bg-surface-glass">
                        <span className="font-mono text-sm font-bold text-gold">I</span>
                      </div>
                      <div>
                        <span className="font-mono text-xs tracking-wider text-gold-muted uppercase">Phase I &mdash; 0&ndash;18 Months</span>
                      </div>
                    </div>
                    <h3 className="mb-3 font-serif text-2xl font-semibold text-text-primary">
                      Acquire, Hold, and Certify
                    </h3>
                    <p className="text-base leading-[1.7] text-text-secondary">
                      Establish technical defensibility and public-market credibility. Onboard mineral assets, conduct QP-governed verification under NI 43-101 and SEC S-K 1300, integrate MiDAS evidence management, and build repeatable disclosure processes. Complete RTO, restructure, and operator partner shortlisting.
                    </p>
                  </div>

                  {/* Phase II */}
                  <div className="relative lg:pl-16 lg:border-l lg:border-gold/20">
                    <div className="mb-6 flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center border border-gold/40 bg-surface-glass">
                        <span className="font-mono text-sm font-bold text-gold">II</span>
                      </div>
                      <div>
                        <span className="font-mono text-xs tracking-wider text-gold-muted uppercase">Phase II &mdash; 18&ndash;60 Months</span>
                      </div>
                    </div>
                    <h3 className="mb-3 font-serif text-2xl font-semibold text-text-primary">
                      Mine-Refine-Supply Execution
                    </h3>
                    <p className="text-base leading-[1.7] text-text-secondary">
                      Activate DOE and project-level financing. Operator-run mining and refinery execution under contracts that preserve Terra&apos;s ownership position. Ramp to production, commission refinery, roll out tokenization and provenance, and begin revenue sweep. Supply waterfall: DOE, then DoD, then commercial buyers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================
          SECTION 4: THREE PILLARS — Staggered, NOT a 3-col card grid
      ================================================================ */}
      <section className="bg-charcoal py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <ScrollReveal>
            <span className="mb-4 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
              Foundation
            </span>
            <h2 className="max-w-2xl font-serif text-3xl font-bold leading-tight text-text-primary lg:text-5xl">
              Three pillars of institutional credibility.
            </h2>
          </ScrollReveal>

          <div className="mt-20 flex flex-col gap-0">
            {/* Pillar 1 — Full width, left-heavy */}
            <ScrollReveal delay={0.1}>
              <div className="flex flex-col border-t border-gold/15 py-14 lg:flex-row lg:items-start lg:gap-24">
                <div className="mb-4 flex items-center gap-4 lg:mb-0 lg:w-1/3">
                  <span className="font-mono text-5xl font-bold text-gold/30">01</span>
                  <h3 className="font-serif text-2xl font-semibold text-text-primary lg:text-3xl">
                    Certified Reserves
                  </h3>
                </div>
                <p className="text-lg leading-[1.7] text-text-secondary lg:w-2/3">
                  Every reserve claim is governed by a Qualified Person under NI 43-101 (Canada) and SEC Regulation S-K 1300 (United States). Technical reports are prepared and signed off by Mark Slatten, Chief Geologist of Alchemy EcoMiners, ensuring institutional-grade disclosure discipline from day one. This is not aspirational &mdash; it is the minimum bar for public-market and government credibility.
                </p>
              </div>
            </ScrollReveal>

            {/* Pillar 2 */}
            <ScrollReveal delay={0.15}>
              <div className="flex flex-col border-t border-gold/15 py-14 lg:flex-row lg:items-start lg:gap-24">
                <div className="mb-4 flex items-center gap-4 lg:mb-0 lg:w-1/3">
                  <span className="font-mono text-5xl font-bold text-gold/30">02</span>
                  <h3 className="font-serif text-2xl font-semibold text-text-primary lg:text-3xl">
                    Technology
                  </h3>
                </div>
                <p className="text-lg leading-[1.7] text-text-secondary lg:w-2/3">
                  MiDAS, provided by Alchemy Nexis, functions as Terra&apos;s mineral data and reporting backbone. It integrates geophysics, drone/satellite/LiDAR inputs, supports evidence assembly for NI 43-101 and S-K 1300 technical reporting, and provides the data/oracle layer for in-ground tokenized mineral assets and end-to-end chain-of-custody.
                </p>
              </div>
            </ScrollReveal>

            {/* Pillar 3 */}
            <ScrollReveal delay={0.2}>
              <div className="flex flex-col border-t border-gold/15 border-b border-b-gold/15 py-14 lg:flex-row lg:items-start lg:gap-24">
                <div className="mb-4 flex items-center gap-4 lg:mb-0 lg:w-1/3">
                  <span className="font-mono text-5xl font-bold text-gold/30">03</span>
                  <h3 className="font-serif text-2xl font-semibold text-text-primary lg:text-3xl">
                    Governance
                  </h3>
                </div>
                <p className="text-lg leading-[1.7] text-text-secondary lg:w-2/3">
                  A five-member Board designed for public-market credibility: three independent directors spanning defense, government, critical minerals, and manufacturing supply chains, alongside two company nominees. Independent directors are under confidential negotiation with high-profile candidates. Disciplined disclosure controls, audit readiness, and governance transparency from formation.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 5: BY THE NUMBERS — Full-width, large gold numbers
      ================================================================ */}
      <section className="bg-navy-deep py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <ScrollReveal>
            <span className="mb-12 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
              By the Numbers
            </span>
          </ScrollReveal>

          <div className="grid gap-16 sm:grid-cols-2 lg:gap-y-20">
            <ScrollReveal delay={0.1}>
              <div className="flex flex-col gap-3">
                <span className="font-mono text-5xl font-bold text-gold lg:text-6xl">
                  US$<CountUp end={100} className="font-mono" />B
                </span>
                <span className="text-base text-text-secondary">
                  Reserve framework based on identified pipeline supported by pre-purchase NI 43-101 and SEC S-K 1300 compliant reporting
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex flex-col gap-3">
                <span className="font-mono text-5xl font-bold text-gold lg:text-6xl">
                  ~US$<CountUp end={750} className="font-mono" />M
                </span>
                <span className="text-base text-text-secondary">
                  DOE integrated financing lane for mine-refine-supply program with application-ready documentation
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-col gap-3">
                <span className="font-mono text-5xl font-bold text-gold lg:text-6xl">
                  AZ + NV
                </span>
                <span className="text-base text-text-secondary">
                  Arizona and Nevada initial footprint &mdash; claims already controlled by The Aureus Company, to be vended into Terra
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-col gap-3">
                <span className="font-mono text-5xl font-bold text-gold lg:text-6xl">
                  50/50
                </span>
                <span className="text-base text-text-secondary">
                  Operator partnership model &mdash; Terra retains ownership and governance, experienced operators execute mining and refining
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <hr className="gold-rule mx-auto max-w-[1400px]" />

      {/* ================================================================
          SECTION 6: LEADERSHIP STRIP — Three names with titles
      ================================================================ */}
      <section className="bg-navy-deep py-32 lg:py-40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <ScrollReveal>
            <span className="mb-4 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
              Leadership
            </span>
            <h2 className="mb-16 max-w-2xl font-serif text-3xl font-bold text-text-primary lg:text-5xl">
              Operating leadership built for execution.
            </h2>
          </ScrollReveal>

          <div className="flex flex-col gap-0">
            {[
              {
                name: "Peter Banks",
                title: "Chief Executive Officer",
                desc: "Three decades in infrastructure investment, regulated industries, and cross-border commercial negotiation across the UK, US, Europe, and Asia.",
              },
              {
                name: "David Roland Crouch II",
                title: "Chief Investment Officer & Interim CFO",
                desc: "Finance executive, policy strategist, and government affairs advisor with cross-disciplinary experience spanning capital strategy, regulatory engagement, and institutional governance.",
              },
              {
                name: "Mark Slatten",
                title: "Chief Geologist & Qualified Person",
                desc: "150+ mineral resource and reserve reports produced, reviewed, or signed off. M.S. Geology (UCLA / UC Riverside). Chief Geologist of Alchemy EcoMiners.",
              },
            ].map((leader, i) => (
              <ScrollReveal key={leader.name} delay={i * 0.1}>
                <div className="flex flex-col border-t border-gold/15 py-10 lg:flex-row lg:items-start lg:gap-16">
                  <div className="mb-2 lg:mb-0 lg:w-1/4">
                    <h3 className="font-serif text-2xl font-semibold text-text-primary">
                      {leader.name}
                    </h3>
                    <span className="text-sm text-gold">{leader.title}</span>
                  </div>
                  <p className="text-base leading-[1.7] text-text-secondary lg:w-3/4">
                    {leader.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="mt-12">
              <Link
                href="/leadership"
                className="inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors duration-300 hover:text-gold-light"
              >
                Full leadership profiles
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================
          SECTION 7: THE AUREUS COMPANY — Parent entity context
      ================================================================ */}
      <section className="bg-charcoal py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-24">
            <ScrollReveal className="lg:w-2/5">
              <span className="mb-4 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
                Parent Entity
              </span>
              <h2 className="font-serif text-3xl font-bold leading-tight text-text-primary lg:text-5xl">
                The Aureus Company
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="lg:w-3/5">
              <p className="text-lg leading-[1.7] text-text-secondary">
                Terra Elementis is being spun out of The Aureus Company to provide a dedicated structure for ownership, production, refining, distribution and government contracts for Rare Earth Elements. The Aureus Company is a consolidated group delivering reserve-backed capital solutions and sovereign-aligned monetary infrastructure anchored in certified gold reserves and related strategic minerals. It is expected to remain the majority and controlling shareholder post-transaction, retaining approximately 75% of Terra.
              </p>
              <p className="mt-6 text-lg leading-[1.7] text-text-secondary">
                Terra leverages The Aureus Company&apos;s reserve governance discipline, technical reporting architecture, and collateralization mindset while extending the platform to a mine-refine-supply execution pathway for rare earth elements and precious metals aligned to U.S. strategic supply priorities.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 8: CTA — Investor inquiries and partnerships
      ================================================================ */}
      <section className="bg-navy-deep py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <ScrollReveal>
            <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <span className="mb-4 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
                  Get Involved
                </span>
                <h2 className="font-serif text-3xl font-bold leading-tight text-text-primary lg:text-5xl">
                  For investor inquiries and partnership opportunities.
                </h2>
              </div>
              <Link
                href="/investors"
                className="inline-flex items-center gap-3 border border-gold bg-gold/10 px-8 py-4 font-medium text-gold transition-all duration-300 hover:bg-gold/20 hover:text-gold-light"
              >
                Investor Relations
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
