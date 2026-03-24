"use client";

import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function GovernancePage() {
  return (
    <>
      <PageHero
        eyebrow="Governance"
        title="Institutional-Grade Governance"
        subtitle="Disclosure discipline, audit readiness, and governance transparency designed for public-market credibility from formation."
      />

      {/* ================================================================
          SECTION 1: BOARD STRUCTURE — Custom 5-seat visual
      ================================================================ */}
      <section className="bg-navy-deep py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="flex flex-col gap-16 lg:flex-row lg:gap-24">
            <ScrollReveal className="lg:w-2/5">
              <span className="mb-4 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
                Board of Directors
              </span>
              <h2 className="font-serif text-3xl font-bold leading-tight text-text-primary lg:text-5xl">
                Five directors designed for public-market credibility.
              </h2>
              <p className="mt-8 text-lg leading-[1.7] text-text-secondary">
                Three independent directors and two company nominees. Independent directors are under confidential negotiations with high-profile candidates spanning defense, former government officials, critical minerals experts, manufacturing supply chains, and mine operations.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="lg:w-3/5">
              {/* Board seats visual layout */}
              <div className="lg:mt-8">
                {/* Company Nominees */}
                <span className="mb-4 block font-mono text-[10px] tracking-[0.3em] text-gold-muted uppercase">
                  Company Nominees
                </span>
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                  <div className="flex-1 border border-gold/30 bg-surface-glass p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center border border-gold/40 bg-charcoal">
                        <span className="font-mono text-xs font-bold text-gold">PB</span>
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-semibold text-text-primary">
                          Peter Banks
                        </h3>
                        <span className="text-xs text-gold">CEO</span>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-text-secondary">
                      Three decades in infrastructure investment, regulated industries, and cross-border commercial negotiation.
                    </p>
                  </div>

                  <div className="flex-1 border border-gold/30 bg-surface-glass p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center border border-gold/40 bg-charcoal">
                        <span className="font-mono text-xs font-bold text-gold">DC</span>
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-semibold text-text-primary">
                          David Roland Crouch II
                        </h3>
                        <span className="text-xs text-gold">CIO &amp; Interim CFO</span>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-text-secondary">
                      Finance executive, policy strategist, and government affairs advisor with cross-disciplinary institutional governance experience.
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-8 flex items-center gap-4">
                  <div className="h-[1px] flex-1 bg-gold/15" />
                  <span className="font-mono text-[10px] tracking-wider text-gold/30">+</span>
                  <div className="h-[1px] flex-1 bg-gold/15" />
                </div>

                {/* Independent Directors */}
                <span className="mb-4 block font-mono text-[10px] tracking-[0.3em] text-gold-muted uppercase">
                  Independent Directors — Three Seats
                </span>
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-4">
                  {[1, 2, 3].map((seat) => (
                    <div
                      key={seat}
                      className="flex-1 border border-dashed border-navy-mid bg-charcoal/30 p-6"
                    >
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center border border-navy-mid bg-navy-deep">
                          <span className="font-mono text-xs text-text-secondary">{seat}</span>
                        </div>
                        <span className="text-sm text-text-secondary">To Be Appointed</span>
                      </div>
                      <p className="text-xs leading-relaxed text-text-secondary/60">
                        Confidential negotiations with candidates spanning defense, government, critical minerals, and manufacturing.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <hr className="gold-rule mx-auto max-w-[1400px]" />

      {/* ================================================================
          SECTION 2: REPORTING FRAMEWORKS — Asymmetric 60/40
      ================================================================ */}
      <section className="bg-charcoal py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="flex flex-col gap-16 lg:flex-row lg:gap-24">
            <ScrollReveal className="lg:w-3/5">
              <span className="mb-4 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
                Technical Reporting
              </span>
              <h2 className="font-serif text-3xl font-bold leading-tight text-text-primary lg:text-5xl">
                Dual-framework reporting discipline.
              </h2>
              <p className="mt-8 text-lg leading-[1.7] text-text-secondary">
                Terra&apos;s technical reporting is oriented toward both Canadian and U.S. listing and disclosure requirements. All reserve and resource statements are prepared under recognized frameworks, used for public-market disclosure readiness and lender/government diligence.
              </p>

              <div className="mt-12 flex flex-col gap-0">
                <div className="flex flex-col border-t border-gold/15 py-8 lg:flex-row lg:items-start lg:gap-12">
                  <div className="mb-2 lg:mb-0 lg:w-1/3">
                    <span className="font-mono text-sm font-bold text-gold">NI 43-101</span>
                    <span className="ml-2 text-xs text-text-secondary">(Canada)</span>
                  </div>
                  <p className="text-base leading-[1.7] text-text-secondary lg:w-2/3">
                    National Instrument 43-101 &mdash; the Canadian standard for disclosure of scientific and technical information for mineral projects. Requires Qualified Person sign-off on all technical reports and public statements.
                  </p>
                </div>

                <div className="flex flex-col border-y border-gold/15 py-8 lg:flex-row lg:items-start lg:gap-12">
                  <div className="mb-2 lg:mb-0 lg:w-1/3">
                    <span className="font-mono text-sm font-bold text-gold">SEC S-K 1300</span>
                    <span className="ml-2 text-xs text-text-secondary">(United States)</span>
                  </div>
                  <p className="text-base leading-[1.7] text-text-secondary lg:w-2/3">
                    SEC Regulation S-K Subpart 1300 &mdash; the U.S. disclosure standard for mining registrants. Aligns resource and reserve classification with Committee for Mineral Reserves International Reporting Standards (CRIRSCO). Required for U.S. public-market listing.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="lg:w-2/5">
              <div className="border border-gold/15 bg-surface-glass p-8 lg:mt-16">
                <span className="mb-6 block font-mono text-[10px] tracking-[0.3em] text-gold-muted uppercase">
                  Framework Status
                </span>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 h-2.5 w-2.5 border border-success bg-success/30" />
                    <div>
                      <span className="text-sm font-medium text-text-primary">NI 43-101</span>
                      <p className="mt-0.5 text-xs text-text-secondary">Active &mdash; QP governance in place</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 h-2.5 w-2.5 border border-success bg-success/30" />
                    <div>
                      <span className="text-sm font-medium text-text-primary">SEC S-K 1300</span>
                      <p className="mt-0.5 text-xs text-text-secondary">Active &mdash; dual-framework alignment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 h-2.5 w-2.5 border border-navy-mid bg-navy-mid/30" />
                    <div>
                      <span className="text-sm font-medium text-text-secondary">JORC</span>
                      <p className="mt-0.5 text-xs text-text-secondary/60">Not committed for this program</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 3: QP GOVERNANCE
      ================================================================ */}
      <section className="bg-navy-deep py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="flex flex-col gap-16 lg:flex-row lg:gap-24">
            <ScrollReveal className="lg:w-2/5">
              <span className="mb-4 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
                Qualified Person
              </span>
              <h2 className="font-serif text-3xl font-bold leading-tight text-text-primary lg:text-5xl">
                QP governance at the center of credibility.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="lg:w-3/5">
              <div className="border-t border-gold/15 pt-8">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-12">
                  <div className="lg:w-1/3">
                    <h3 className="font-serif text-2xl font-semibold text-text-primary">
                      Mark Slatten
                    </h3>
                    <span className="text-sm text-gold">Chief Geologist &amp; QP</span>
                    <p className="mt-1 text-xs text-text-secondary">
                      Maverick Eco-Miners, Inc.
                    </p>
                  </div>
                  <div className="lg:w-2/3">
                    <p className="text-base leading-[1.7] text-text-secondary">
                      Mark Slatten serves as Qualified Person under both NI 43-101 and SEC S-K 1300 frameworks. His oversight encompasses exploration, data acquisition, mineral systems analysis, resource and reserve estimation, and sign-off of all technical reports.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <span className="mb-6 block font-mono text-[10px] tracking-[0.3em] text-gold-muted uppercase">
                  QP Oversight Scope
                </span>
                <div className="flex flex-col gap-0">
                  {[
                    "Exploration program design and data acquisition governance",
                    "Mineral systems analysis and geological interpretation",
                    "Resource and reserve estimation under recognized frameworks",
                    "Technical report sign-off under NI 43-101 and SEC S-K 1300",
                    "Integration into evidence management and reporting workflows",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-4 border-t border-gold/10 py-4 ${i === 4 ? "border-b border-b-gold/10" : ""}`}
                    >
                      <span className="mt-0.5 font-mono text-xs text-gold/30">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-base text-text-secondary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <hr className="gold-rule mx-auto max-w-[1400px]" />

      {/* ================================================================
          SECTION 4: DISCLOSURE CONTROLS
      ================================================================ */}
      <section className="bg-charcoal py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <ScrollReveal>
            <span className="mb-4 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
              Evidence Management
            </span>
            <h2 className="max-w-3xl font-serif text-3xl font-bold leading-tight text-text-primary lg:text-5xl">
              Disclosure controls and audit readiness.
            </h2>
          </ScrollReveal>

          <div className="mt-20 flex flex-col gap-16 lg:flex-row lg:gap-24">
            <ScrollReveal delay={0.1} className="lg:w-3/5">
              <div className="flex flex-col gap-0">
                {[
                  {
                    label: "Standardized Data Lineage",
                    detail:
                      "Source identification, timestamped ingestion, and integrity checks across all technical inputs. Every data point is traceable from origin through to reporting output.",
                  },
                  {
                    label: "Document Control Versioning",
                    detail:
                      "Full version control for technical reports, exhibits, assumptions, and price decks. Every document iteration is preserved, attributable, and retrievable for audit.",
                  },
                  {
                    label: "Auditability",
                    detail:
                      "Internal logs designed for audit firm review and lender/government review. The system anticipates the information requirements of institutional diligence from day one.",
                  },
                  {
                    label: "Disclosure Cadence",
                    detail:
                      "Controlled release process aligned to public market obligations and supplement mechanisms. Information moves through a governed pipeline, ensuring consistency and compliance.",
                  },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    className={`border-t border-gold/15 py-10 ${i === 3 ? "border-b border-b-gold/15" : ""}`}
                  >
                    <div className="flex items-start gap-6">
                      <span className="mt-1 font-mono text-3xl font-bold text-gold/20">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="mb-3 font-serif text-xl font-semibold text-text-primary">
                          {item.label}
                        </h3>
                        <p className="text-base leading-[1.7] text-text-secondary">{item.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="lg:w-2/5">
              <div className="border border-gold/15 bg-surface-glass p-8 lg:mt-8">
                <span className="mb-6 block font-mono text-[10px] tracking-[0.3em] text-gold-muted uppercase">
                  Governance Architecture
                </span>
                <p className="text-sm leading-[1.7] text-text-secondary">
                  Terra&apos;s disclosure controls are not bolt-on compliance measures. They are embedded into the company&apos;s operating architecture from formation &mdash; ensuring that every technical report, public statement, and investor communication passes through a governed process with QP oversight, document control, and audit trail.
                </p>
                <div className="mt-6 border-t border-gold/10 pt-6">
                  <Link
                    href="/strategy"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors duration-300 hover:text-gold-light"
                  >
                    Our approach
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 5: LEGAL AND PROFESSIONAL SERVICES
      ================================================================ */}
      <section className="bg-navy-deep py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <ScrollReveal>
            <span className="mb-4 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
              Professional Services
            </span>
            <h2 className="max-w-3xl font-serif text-3xl font-bold leading-tight text-text-primary lg:text-5xl">
              Legal, audit, and investor relations.
            </h2>
          </ScrollReveal>

          <div className="mt-20 flex flex-col gap-0">
            <ScrollReveal delay={0.1}>
              <div className="flex flex-col border-t border-gold/15 py-12 lg:flex-row lg:items-start lg:gap-20">
                <div className="mb-4 lg:mb-0 lg:w-2/5">
                  <span className="font-mono text-xs tracking-wider text-gold-muted uppercase">Legal Counsel</span>
                  <h3 className="mt-2 font-serif text-2xl font-semibold text-text-primary">
                    Husch Blackwell LLP
                  </h3>
                  <span className="mt-1 block text-sm text-gold">Partner: Brian H. Potts</span>
                </div>
                <p className="text-base leading-[1.7] text-text-secondary lg:w-3/5">
                  Transactional, regulatory, and operational risk management. Husch Blackwell provides counsel across the full spectrum of Terra&apos;s legal requirements &mdash; from entity structuring and regulatory compliance to operator contracts and government engagement.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="flex flex-col border-t border-gold/15 py-12 lg:flex-row lg:items-start lg:gap-20">
                <div className="mb-4 lg:mb-0 lg:w-2/5">
                  <span className="font-mono text-xs tracking-wider text-gold-muted uppercase">Audit Firm</span>
                  <h3 className="mt-2 font-serif text-2xl font-semibold text-text-primary">
                    To Be Appointed
                  </h3>
                </div>
                <p className="text-base leading-[1.7] text-text-secondary lg:w-3/5">
                  Multiple major audit firms under review. The appointment of a recognized audit firm is a critical governance milestone, ensuring financial reporting meets institutional standards.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex flex-col border-y border-gold/15 py-12 lg:flex-row lg:items-start lg:gap-20">
                <div className="mb-4 lg:mb-0 lg:w-2/5">
                  <span className="font-mono text-xs tracking-wider text-gold-muted uppercase">IR / PR</span>
                  <h3 className="mt-2 font-serif text-2xl font-semibold text-text-primary">
                    OrionIQ International Limited
                  </h3>
                </div>
                <p className="text-base leading-[1.7] text-text-secondary lg:w-3/5">
                  Investor communications and public-market readiness messaging. OrionIQ supports Terra&apos;s consistent investor communications cadence and positioning across institutional, government, and public-market audiences.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <hr className="gold-rule mx-auto max-w-[1400px]" />

      {/* ================================================================
          SECTION 6: COMPLIANCE READINESS — Timeline-style
      ================================================================ */}
      <section className="bg-charcoal py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="flex flex-col gap-16 lg:flex-row lg:gap-24">
            <ScrollReveal className="lg:w-2/5">
              <span className="mb-4 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
                Public-Market Pathway
              </span>
              <h2 className="font-serif text-3xl font-bold leading-tight text-text-primary lg:text-5xl">
                Compliance readiness milestones.
              </h2>
              <p className="mt-8 text-lg leading-[1.7] text-text-secondary">
                A structured pathway to compliance readiness, with defined milestones across technical reporting, governance, operations, and disclosure.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="lg:w-3/5">
              <div className="relative border-l border-gold/20 pl-8">
                <span className="mb-8 block font-mono text-[10px] tracking-[0.3em] text-gold-muted uppercase">
                  12&ndash;18 Month Milestones
                </span>
                {[
                  {
                    title: "Technical Reporting Maturity",
                    detail:
                      "NI 43-101 and S-K 1300 technical reports completed, QP-signed, and integrated into evidence management workflows. Disclosure-ready documentation for all mineral properties.",
                  },
                  {
                    title: "Governance Maturity",
                    detail:
                      "Appointment of three independent directors. Full five-member Board operational with audit committee, compensation committee, and governance committee established.",
                  },
                  {
                    title: "Operational Readiness",
                    detail:
                      "Operator partnerships contracted. Supporting technical documentation and project finance structure assembled for financing applications.",
                  },
                  {
                    title: "Disclosure Discipline",
                    detail:
                      "Consistent investor communications cadence supported by OrionIQ. Regulated disclosure controls active, supplement mechanisms in place, and public-market reporting infrastructure tested.",
                  },
                ].map((milestone, i) => (
                  <div key={milestone.title} className="relative mb-10 last:mb-0">
                    <div className="absolute -left-[calc(2rem+4.5px)] top-1.5 h-2.5 w-2.5 border border-gold/50 bg-navy-deep" />
                    <span className="font-mono text-xs text-gold/40">
                      Gate {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 font-serif text-lg font-semibold text-text-primary">
                      {milestone.title}
                    </h3>
                    <p className="mt-2 text-sm leading-[1.7] text-text-secondary">
                      {milestone.detail}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ================================================================
          CTA — Investor relations
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
