"use client";

import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="MiDAS: The Evidence and Oracle Layer"
        subtitle="Terra's core technical reporting and operational control platform — integrating geophysics, evidence management, and chain-of-custody into a single defensible system."
      />

      {/* ================================================================
          SECTION 1: MiDAS OVERVIEW — 60/40 asymmetric
      ================================================================ */}
      <section className="bg-navy-deep py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="flex flex-col gap-16 lg:flex-row lg:gap-24">
            <ScrollReveal className="lg:w-3/5">
              <span className="mb-4 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
                Platform Overview
              </span>
              <h2 className="font-serif text-3xl font-bold leading-tight text-text-primary lg:text-5xl">
                Mineral Information Data Analysis System
              </h2>
              <p className="mt-8 text-lg leading-[1.7] text-text-secondary">
                MiDAS is a SaaS platform delivered by Alchemy Nexis that serves as Terra&apos;s technical reporting and operational control backbone. It integrates Alchemy EcoMiners alongside third-party geophysics, drone, satellite, and LiDAR providers into a unified data environment &mdash; converting disparate technical inputs into defensible reporting outputs and operational audit trails.
              </p>
              <p className="mt-6 text-lg leading-[1.7] text-text-secondary">
                The platform is not a generic data warehouse. It is purpose-built for the mineral resource lifecycle &mdash; from initial data ingestion through reserve classification, technical report assembly, operational telemetry, and ultimately tokenization enablement for in-ground mineral assets.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="lg:w-2/5">
              {/* Architectural diagram placeholder */}
              <div className="relative border border-gold/15 bg-surface-glass p-8 lg:mt-12">
                {/* REPLACE: Actual MiDAS architecture diagram */}
                <div className="space-y-6">
                  <div className="border-b border-gold/10 pb-4">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-gold-muted uppercase">
                      Data Sources
                    </span>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {["Geophysics", "Drone", "Satellite", "LiDAR"].map((source) => (
                        <span
                          key={source}
                          className="border border-navy-mid bg-charcoal px-3 py-1.5 font-mono text-xs text-text-secondary"
                        >
                          {source}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="h-[1px] flex-1 bg-gold/20" />
                    <span className="font-mono text-[10px] text-gold/40">Ingestion</span>
                    <div className="h-[1px] flex-1 bg-gold/20" />
                  </div>

                  <div className="border border-gold/20 bg-charcoal/60 p-4 text-center">
                    <span className="font-serif text-lg font-semibold text-gold">MiDAS</span>
                    <span className="mt-1 block font-mono text-[10px] tracking-wider text-text-secondary">
                      Evidence + Oracle Layer
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="h-[1px] flex-1 bg-gold/20" />
                    <span className="font-mono text-[10px] text-gold/40">Outputs</span>
                    <div className="h-[1px] flex-1 bg-gold/20" />
                  </div>

                  <div className="border-t border-gold/10 pt-4">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-gold-muted uppercase">
                      Reporting + Controls
                    </span>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {["NI 43-101", "S-K 1300", "Audit Trails", "Tokens"].map((output) => (
                        <span
                          key={output}
                          className="border border-navy-mid bg-charcoal px-3 py-1.5 font-mono text-xs text-text-secondary"
                        >
                          {output}
                        </span>
                      ))}
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
          SECTION 2: KEY FUNCTIONS — Numbered list, NOT a card grid
      ================================================================ */}
      <section className="bg-charcoal py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <ScrollReveal>
            <span className="mb-4 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
              Core Capabilities
            </span>
            <h2 className="max-w-3xl font-serif text-3xl font-bold leading-tight text-text-primary lg:text-5xl">
              Key MiDAS functions in the Terra program.
            </h2>
          </ScrollReveal>

          <div className="mt-20 flex flex-col gap-0">
            {[
              {
                num: "01",
                title: "Reserve and Resource Workflow Management",
                description:
                  "Data ingestion, model iteration, classification, and sign-off workflows. MiDAS manages the full lifecycle from raw technical data through to QP-certified reserve and resource classifications, ensuring every step is documented, versioned, and auditable.",
              },
              {
                num: "02",
                title: "Reporting Assembly",
                description:
                  "Creation of NI 43-101 and S-K 1300 evidence packs and annexable technical outputs. The platform assembles defensible reporting packages that meet the disclosure requirements of both Canadian and U.S. regulatory frameworks, ready for public-market filing and government diligence.",
              },
              {
                num: "03",
                title: "Operational Telemetry and Custody Events",
                description:
                  "Recording production, refining, inventory movements, custody transitions, and delivery events. Every physical movement of material through the mine-refine-supply pipeline is captured with timestamped, integrity-checked records suitable for lender and government review.",
              },
              {
                num: "04",
                title: "Tokenization Enablement",
                description:
                  "Data and oracle system for in-ground tokenized mineral assets and customer-facing allocation instruments. Implementation is staged: it occurs only after ground scanning, 3D spatial mapping, and QP certification are complete. This is not speculative — it is evidence-anchored and sequenced.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.num} delay={i * 0.08}>
                <div className="flex flex-col border-t border-gold/15 py-12 lg:flex-row lg:items-start lg:gap-20">
                  <div className="mb-4 flex items-baseline gap-5 lg:mb-0 lg:w-2/5">
                    <span className="font-mono text-5xl font-bold text-gold/25">{item.num}</span>
                    <h3 className="font-serif text-xl font-semibold text-text-primary lg:text-2xl">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-base leading-[1.7] text-text-secondary lg:w-3/5">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
            <div className="border-t border-gold/15" />
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 3: EVIDENCE MANAGEMENT — 60/40 offset
      ================================================================ */}
      <section className="bg-navy-deep py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="flex flex-col gap-16 lg:flex-row lg:gap-24">
            <ScrollReveal className="lg:w-2/5">
              <span className="mb-4 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
                Disclosure Controls
              </span>
              <h2 className="font-serif text-3xl font-bold leading-tight text-text-primary lg:text-5xl">
                Evidence management and disclosure discipline.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="lg:w-3/5">
              <div className="flex flex-col gap-0">
                {[
                  {
                    label: "Standardized Data Lineage",
                    detail:
                      "Source identification, timestamped ingestion, and integrity checks. Every data point entering MiDAS carries a verifiable provenance trail from origin through processing.",
                  },
                  {
                    label: "Document Control",
                    detail:
                      "Versioning for technical reports, exhibits, assumptions, and price decks. No overwriting, no ambiguity — every iteration is preserved and retrievable.",
                  },
                  {
                    label: "Auditability",
                    detail:
                      "Internal logs suitable for audit firm review and lender/government review. The system is designed from formation to withstand institutional-grade scrutiny.",
                  },
                  {
                    label: "Disclosure Cadence",
                    detail:
                      "Controlled release process aligned to public market obligations and supplement mechanisms. Information flows through a governed pipeline, not ad hoc distribution.",
                  },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    className={`border-t border-gold/15 py-8 ${i === 3 ? "border-b border-b-gold/15" : ""}`}
                  >
                    <h3 className="mb-3 font-serif text-lg font-semibold text-text-primary">
                      {item.label}
                    </h3>
                    <p className="text-base leading-[1.7] text-text-secondary">{item.detail}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <hr className="gold-rule mx-auto max-w-[1400px]" />

      {/* ================================================================
          SECTION 4: TOKENIZATION AND CHAIN-OF-CUSTODY
      ================================================================ */}
      <section className="bg-charcoal py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <ScrollReveal>
            <span className="mb-4 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
              Provenance Infrastructure
            </span>
            <h2 className="max-w-4xl font-serif text-3xl font-bold leading-tight text-text-primary lg:text-5xl">
              Tokenization and chain-of-custody.
            </h2>
            <p className="mt-8 max-w-3xl text-lg leading-[1.7] text-text-secondary">
              Designed as a disciplined, evidence-anchored system &mdash; not speculative technology. Tokenization supports internal controls, customer provenance, and allocation instruments. Implementation is staged: it occurs only after ground scanning, 3D spatial mapping, and QP certification are complete.
            </p>
          </ScrollReveal>

          <div className="mt-20 flex flex-col gap-16 lg:flex-row lg:gap-24">
            {/* Left: staged process visual */}
            <ScrollReveal delay={0.1} className="lg:w-2/5">
              <div className="relative border-l border-gold/20 pl-8">
                <span className="mb-8 block font-mono text-[10px] tracking-[0.3em] text-gold-muted uppercase">
                  Implementation Sequence
                </span>
                {[
                  "Ground Scanning",
                  "3D Spatial Mapping",
                  "QP Certification",
                  "Tokenization Activation",
                ].map((step, i) => (
                  <div key={step} className="relative mb-8 last:mb-0">
                    <div className="absolute -left-[calc(2rem+4.5px)] top-1.5 h-2.5 w-2.5 border border-gold/50 bg-navy-deep" />
                    <span className="font-mono text-xs text-gold/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-1 text-base font-medium text-text-primary">{step}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Right: three pillars of tokenization */}
            <ScrollReveal delay={0.2} className="lg:w-3/5">
              <div className="flex flex-col gap-0">
                <div className="border-t border-gold/15 py-8">
                  <h3 className="mb-3 font-serif text-xl font-semibold text-text-primary">
                    Internal Audit Trail
                  </h3>
                  <p className="text-base leading-[1.7] text-text-secondary">
                    Immutable record of assessments, QP certifications, production lots, refining batches, custody transitions, and delivery checkpoints. Every event in the lifecycle is captured and cannot be retroactively altered.
                  </p>
                </div>

                <div className="border-t border-gold/15 py-8">
                  <h3 className="mb-3 font-serif text-xl font-semibold text-text-primary">
                    Customer Provenance
                  </h3>
                  <p className="text-base leading-[1.7] text-text-secondary">
                    Standardized certificates and digital attestations that give downstream buyers verifiable proof of origin, processing history, and compliance status. Built for the rigorous sourcing requirements of defense and advanced manufacturing customers.
                  </p>
                </div>

                <div className="border-y border-gold/15 py-8">
                  <h3 className="mb-3 font-serif text-xl font-semibold text-text-primary">
                    Customer-Facing Allocation Instruments
                  </h3>
                  <p className="text-base leading-[1.7] text-text-secondary">
                    Assigned lots linked to MiDAS evidence and custody records. These instruments allow customers to claim specific inventory positions backed by the full data lineage &mdash; from in-ground resource through refined product and delivery.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ================================================================
          CTA — Link to governance and investors
      ================================================================ */}
      <section className="bg-navy-deep py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <ScrollReveal>
            <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <span className="mb-4 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
                  Learn More
                </span>
                <h2 className="font-serif text-3xl font-bold leading-tight text-text-primary lg:text-5xl">
                  Technology underpinning institutional-grade governance.
                </h2>
              </div>
              <Link
                href="/governance"
                className="inline-flex items-center gap-3 border border-gold bg-gold/10 px-8 py-4 font-medium text-gold transition-all duration-300 hover:bg-gold/20 hover:text-gold-light"
              >
                Governance Framework
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
