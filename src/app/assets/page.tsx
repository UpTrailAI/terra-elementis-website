"use client";

import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function AssetsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Our Projects"
        subtitle="Rare earth and critical mineral properties in the American West, governed by institutional-grade certification and reporting frameworks."
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
                Terra&apos;s initial projects are located in Arizona and Nevada &mdash; two states with significant rare earth and critical mineral potential. These positions provide the foundation for a certified reserve platform across the American West.
              </p>
              <p className="mt-6 text-lg leading-[1.7] text-text-secondary">
                Data acquisition and Qualified Person governance workstreams are underway. The emphasis from day one is reserve defensibility and disclosure discipline &mdash; not promotional claims, but verified, QP-signed technical reports under NI 43-101 and SEC Regulation S-K 1300.
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
                    text: "Repeatable disclosure process with internal controls, ready for continuous reporting.",
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
          INDIVIDUAL PROJECTS — Per-property geology data
      ================================================================ */}
      <section className="bg-navy-deep py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <ScrollReveal>
            <span className="mb-4 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
              Property Details
            </span>
            <h2 className="max-w-3xl font-serif text-3xl font-bold leading-tight text-text-primary lg:text-5xl">
              What our geologists have found.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-[1.7] text-text-secondary">
              Each project is evaluated independently under institutional reporting frameworks. Below is a summary of our properties and the geological work completed to date.
            </p>
          </ScrollReveal>

          <div className="mt-20 flex flex-col gap-0">
            {/* Arizona Project */}
            <ScrollReveal delay={0.1}>
              <div className="flex flex-col border-t border-gold/15 py-14 lg:flex-row lg:items-start lg:gap-24">
                <div className="mb-4 lg:mb-0 lg:w-1/3">
                  <span className="block font-mono text-5xl font-bold text-gold/30">AZ</span>
                  <h3 className="mt-2 font-serif text-2xl font-semibold text-text-primary lg:text-3xl">
                    Arizona Properties
                  </h3>
                </div>
                <div className="lg:w-2/3">
                  <p className="text-lg leading-[1.7] text-text-secondary">
                    Mineral claims in Arizona with identified rare earth and critical mineral deposits. Geological assessment, scanning, and data acquisition programs are underway to support QP-governed resource estimation under NI 43-101 and SEC S-K 1300.
                  </p>
                  {/* TODO: Add specific property details with geology data from Mark Slatten — claim names, locations, minerals identified, assessment status */}
                </div>
              </div>
            </ScrollReveal>

            {/* Nevada Project */}
            <ScrollReveal delay={0.15}>
              <div className="flex flex-col border-t border-gold/15 border-b border-b-gold/15 py-14 lg:flex-row lg:items-start lg:gap-24">
                <div className="mb-4 lg:mb-0 lg:w-1/3">
                  <span className="block font-mono text-5xl font-bold text-gold/30">NV</span>
                  <h3 className="mt-2 font-serif text-2xl font-semibold text-text-primary lg:text-3xl">
                    Nevada Properties
                  </h3>
                </div>
                <div className="lg:w-2/3">
                  <p className="text-lg leading-[1.7] text-text-secondary">
                    Mineral claims in Nevada targeting rare earth elements, critical minerals, gold and silver. Historical datasets and new scanning programs form the data foundation for Qualified Person review and classification.
                  </p>
                  {/* TODO: Add specific property details with geology data from Mark Slatten — claim names, locations, minerals identified, assessment status */}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ================================================================
          CTA — Link to strategy and contact
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
                  Learn about our approach to developing these projects.
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
                  href="/contact"
                  className="inline-flex items-center gap-3 border border-gold/30 px-8 py-4 font-medium text-text-secondary transition-all duration-300 hover:border-gold/60 hover:text-text-primary"
                >
                  Contact Us
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
