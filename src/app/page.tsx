"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

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
          <img
            src="/images/hero-mine.jpg"
            alt="Open pit mine in the American Southwest"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-deep/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
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
          SECTION 3: WHAT WE DO — Simple company positioning
      ================================================================ */}
      <section className="bg-navy-deep py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <ScrollReveal>
            <span className="mb-4 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
              What We Do
            </span>
            <h2 className="max-w-3xl font-serif text-3xl font-bold leading-tight text-text-primary lg:text-5xl">
              Acquiring, certifying, and developing critical mineral properties.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="mt-8 max-w-3xl text-lg leading-[1.7] text-text-secondary">
              Terra Elementis is a mining company focused on rare earth elements, critical minerals, gold and silver. We acquire mineral properties, certify what is in the ground through independent Qualified Person governance, and prepare those properties for production &mdash; working with experienced operators to bring resources from assessment through to supply.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="mt-6 max-w-3xl text-lg leading-[1.7] text-text-secondary">
              Our initial footprint spans properties in Arizona and Nevada &mdash; two states with significant rare earth and critical mineral potential aligned to America&apos;s strategic supply needs.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================
          SECTION 4: OUR FOCUS — Simplified pillars
      ================================================================ */}
      <section className="bg-charcoal py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <ScrollReveal>
            <span className="mb-4 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
              Foundation
            </span>
            <h2 className="max-w-2xl font-serif text-3xl font-bold leading-tight text-text-primary lg:text-5xl">
              Built on certified reserves, disciplined governance, and real properties.
            </h2>
          </ScrollReveal>

          <div className="mt-20 flex flex-col gap-0">
            {/* Pillar 1 — Certified Reserves */}
            <ScrollReveal delay={0.1}>
              <div className="flex flex-col border-t border-gold/15 py-14 lg:flex-row lg:items-start lg:gap-24">
                <div className="mb-4 flex items-center gap-4 lg:mb-0 lg:w-1/3">
                  <span className="font-mono text-5xl font-bold text-gold/30">01</span>
                  <h3 className="font-serif text-2xl font-semibold text-text-primary lg:text-3xl">
                    Certified Reserves
                  </h3>
                </div>
                <p className="text-lg leading-[1.7] text-text-secondary lg:w-2/3">
                  Every reserve claim is governed by a Qualified Person under NI 43-101 (Canada) and SEC Regulation S-K 1300 (United States). Technical reports are prepared and signed off by our Chief Geologist, ensuring institutional-grade disclosure discipline from day one. This is not aspirational &mdash; it is the minimum bar for credibility.
                </p>
              </div>
            </ScrollReveal>

            {/* Pillar 2 — Properties */}
            <ScrollReveal delay={0.15}>
              <div className="flex flex-col border-t border-gold/15 py-14 lg:flex-row lg:items-start lg:gap-24">
                <div className="mb-4 flex items-center gap-4 lg:mb-0 lg:w-1/3">
                  <span className="font-mono text-5xl font-bold text-gold/30">02</span>
                  <h3 className="font-serif text-2xl font-semibold text-text-primary lg:text-3xl">
                    Properties
                  </h3>
                </div>
                <p className="text-lg leading-[1.7] text-text-secondary lg:w-2/3">
                  Our initial footprint covers mineral claims in Arizona and Nevada &mdash; regions with identified rare earth and critical mineral deposits. We integrate historical datasets, new scanning and mapping, geophysics, drone, satellite, and LiDAR inputs to build a comprehensive data foundation for resource estimation.
                </p>
              </div>
            </ScrollReveal>

            {/* Pillar 3 — Governance */}
            <ScrollReveal delay={0.2}>
              <div className="flex flex-col border-t border-gold/15 border-b border-b-gold/15 py-14 lg:flex-row lg:items-start lg:gap-24">
                <div className="mb-4 flex items-center gap-4 lg:mb-0 lg:w-1/3">
                  <span className="font-mono text-5xl font-bold text-gold/30">03</span>
                  <h3 className="font-serif text-2xl font-semibold text-text-primary lg:text-3xl">
                    Governance
                  </h3>
                </div>
                <p className="text-lg leading-[1.7] text-text-secondary lg:w-2/3">
                  A five-member Board designed for credibility: three independent directors spanning defense, government, critical minerals, and manufacturing supply chains, alongside two company nominees. Disciplined disclosure controls, audit readiness, and governance transparency from formation.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 5: AT A GLANCE — Minimal stats
      ================================================================ */}
      <section className="bg-navy-deep py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <ScrollReveal>
            <span className="mb-12 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
              At a Glance
            </span>
          </ScrollReveal>

          <div className="grid gap-16 sm:grid-cols-3">
            <ScrollReveal delay={0.1}>
              <div className="flex flex-col gap-3">
                <span className="font-mono text-5xl font-bold text-gold lg:text-6xl">
                  AZ + NV
                </span>
                <span className="text-base text-text-secondary">
                  Properties in Arizona and Nevada &mdash; regions with significant rare earth and critical mineral potential
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex flex-col gap-3">
                <span className="font-mono text-5xl font-bold text-gold lg:text-6xl">
                  QP-Governed
                </span>
                <span className="text-base text-text-secondary">
                  All reserve claims certified under NI 43-101 and SEC S-K 1300 reporting frameworks
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-col gap-3">
                <span className="font-mono text-5xl font-bold text-gold lg:text-6xl">
                  5-Member Board
                </span>
                <span className="text-base text-text-secondary">
                  Independent governance with directors spanning defense, government, and critical minerals
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
                desc: "150+ mineral resource and reserve reports produced, reviewed, or signed off. M.S. Geology (UCLA / UC Riverside).",
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
          SECTION 7: CTA — Inquiries
      ================================================================ */}
      <section className="bg-charcoal py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <ScrollReveal>
            <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <span className="mb-4 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
                  Get in Touch
                </span>
                <h2 className="font-serif text-3xl font-bold leading-tight text-text-primary lg:text-5xl">
                  For investor inquiries and project information.
                </h2>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border border-gold bg-gold/10 px-8 py-4 font-medium text-gold transition-all duration-300 hover:bg-gold/20 hover:text-gold-light"
              >
                Contact Us
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
