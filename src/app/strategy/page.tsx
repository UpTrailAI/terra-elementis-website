"use client";

import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function StrategyPage() {
  return (
    <>
      <PageHero
        eyebrow="Strategy"
        title="A Disciplined Two-Phase Strategy"
        subtitle="Terra intentionally separates asset ownership and governance from operational execution — reducing risk, increasing lender confidence, and supporting scalable expansion."
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
                Terra retains ownership of mineral assets and provides capital, portfolio management, and disclosure discipline. Experienced operators run mining and refining under structured contracts that preserve Terra&apos;s ownership position.
              </p>
              <p className="mt-6 text-lg leading-[1.7] text-text-secondary">
                This deliberate separation reduces execution risk, increases lender confidence, and supports scalable expansion across multiple geographies and commodities without building Terra into a mining operator.
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
          PHASE I — Acquire, Hold, and Certify
      ================================================================ */}
      <section className="bg-navy-deep py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <ScrollReveal>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-16">
              <div className="flex items-center gap-6">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center border border-gold/40 bg-surface-glass">
                  <span className="font-mono text-xl font-bold text-gold">I</span>
                </div>
                <div>
                  <span className="block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
                    Phase I &mdash; 0&ndash;18 Months
                  </span>
                  <h2 className="mt-1 font-serif text-3xl font-bold leading-tight text-text-primary lg:text-5xl">
                    Acquire, Hold, and Certify
                  </h2>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mt-10 max-w-3xl text-lg leading-[1.7] text-text-secondary">
              Establish technical defensibility and public-market credibility before a single tonne is mined. Phase I builds the certified foundation that makes financing, operator partnerships, and government engagement possible.
            </p>
          </ScrollReveal>

          {/* Phase I detail items — staggered left-heavy layout */}
          <div className="mt-20 flex flex-col gap-0">
            {[
              {
                num: "01",
                label: "Portfolio Onboarding",
                text: "Transfer and vend-in of claims from The Aureus Company. Confirm chain-of-title and enforceability across the Arizona and Nevada footprint. Establish legal and regulatory clarity before any technical work begins.",
              },
              {
                num: "02",
                label: "Data Consolidation",
                text: "Ingest historical datasets, integrate new scanning and mapping, geophysics, drone, satellite, and LiDAR inputs. Build the comprehensive data foundation required for QP-governed resource estimation and MiDAS evidence management.",
              },
              {
                num: "03",
                label: "QP Review and Estimation",
                text: "Resource and reserve classification under NI 43-101 and SEC Regulation S-K 1300. Application of modifying factors, independent QP sign-off. These are the institutional-grade technical reports that unlock financing and public-market credibility.",
              },
              {
                num: "04",
                label: "Disclosure Readiness",
                text: "Build a repeatable disclosure process with internal controls. Ensure every report, every dataset, and every estimate flows through a governed pipeline ready for continuous public-market reporting obligations.",
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

          {/* Key Outputs */}
          <ScrollReveal delay={0.2}>
            <div className="mt-16 border-t border-gold/15 pt-12">
              <span className="mb-6 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
                Key Outputs
              </span>
              <div className="grid gap-x-16 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "RTO close and restructure/reverse split",
                  "MiDAS go-live",
                  "Post-vend-in NI 43-101 / S-K 1300 updates",
                  "Operator partner shortlist",
                  "DOE application pack",
                  "Repeatable disclosure controls",
                ].map((output) => (
                  <div key={output} className="flex items-start gap-3 py-2">
                    <span className="mt-1.5 block h-[6px] w-[6px] shrink-0 bg-gold/50" />
                    <span className="text-base text-text-secondary">{output}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================
          PHASE II — Mine-Refine-Supply
      ================================================================ */}
      <section className="bg-charcoal py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <ScrollReveal>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-16">
              <div className="flex items-center gap-6">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center border border-gold/40 bg-surface-glass">
                  <span className="font-mono text-xl font-bold text-gold">II</span>
                </div>
                <div>
                  <span className="block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
                    Phase II &mdash; 18&ndash;60 Months
                  </span>
                  <h2 className="mt-1 font-serif text-3xl font-bold leading-tight text-text-primary lg:text-5xl">
                    Mine-Refine-Supply
                  </h2>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mt-10 max-w-3xl text-lg leading-[1.7] text-text-secondary">
              Activated after financing (DOE and/or project-level secured notes) and feasibility confirmation. Phase II transitions from certification to production through operator-led execution under Terra&apos;s governance umbrella.
            </p>
          </ScrollReveal>

          {/* Phase II — asymmetric 60/40 layout blocks */}
          <div className="mt-20 flex flex-col gap-20">
            <ScrollReveal delay={0.1}>
              <div className="flex flex-col gap-8 lg:flex-row lg:gap-24">
                <div className="lg:w-3/5">
                  <h3 className="mb-4 font-serif text-2xl font-semibold text-text-primary lg:text-3xl">
                    Mining Execution
                  </h3>
                  <p className="text-base leading-[1.7] text-text-secondary">
                    Operator-led mine planning, permitting, and production ramp-up. The mining operator manages all aspects of site development, extraction, and HSE compliance under structured project agreements with Terra. Terra retains ownership and governance oversight without becoming an operator.
                  </p>
                </div>
                <div className="border-l border-gold/20 pl-8 lg:w-2/5">
                  <span className="mb-2 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
                    Economics
                  </span>
                  <span className="block font-mono text-4xl font-bold text-gold lg:text-5xl">50/50</span>
                  <span className="mt-2 block text-sm text-text-secondary">
                    Split with operators via structured project agreements
                  </span>
                </div>
              </div>
            </ScrollReveal>

            <hr className="gold-rule" />

            <ScrollReveal delay={0.15}>
              <div className="flex flex-col gap-8 lg:flex-row lg:gap-24">
                <div className="lg:w-3/5">
                  <h3 className="mb-4 font-serif text-2xl font-semibold text-text-primary lg:text-3xl">
                    Refinery Execution
                  </h3>
                  <p className="text-base leading-[1.7] text-text-secondary">
                    A separate, experienced refinery operator handles processing throughput and quality assurance. By splitting mining and refining across distinct operators, Terra maintains competitive tension, quality oversight, and contractual discipline across the entire mine-to-market pipeline.
                  </p>
                </div>
                <div className="border-l border-gold/20 pl-8 lg:w-2/5">
                  <span className="mb-2 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
                    Scope
                  </span>
                  <span className="block text-base text-text-secondary">
                    Processing throughput, quality assurance, commissioning, and steady-state refinery operation under contract
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Key Outputs */}
          <ScrollReveal delay={0.2}>
            <div className="mt-20 border-t border-gold/15 pt-12">
              <span className="mb-6 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
                Key Outputs
              </span>
              <div className="grid gap-x-16 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "DOE close and construction",
                  "IDC capitalization",
                  "Refinery commissioning",
                  "Tokenization and provenance roll-out",
                  "Revenue sweep begins Year 5",
                  "Supply program activation",
                ].map((output) => (
                  <div key={output} className="flex items-start gap-3 py-2">
                    <span className="mt-1.5 block h-[6px] w-[6px] shrink-0 bg-gold/50" />
                    <span className="text-base text-text-secondary">{output}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <hr className="gold-rule mx-auto max-w-[1400px]" />

      {/* ================================================================
          SUPPLY WATERFALL — DOE → DoD → Commercial
      ================================================================ */}
      <section className="bg-navy-deep py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <ScrollReveal>
            <span className="mb-4 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
              Go-to-Market
            </span>
            <h2 className="max-w-3xl font-serif text-3xl font-bold leading-tight text-text-primary lg:text-5xl">
              Supply waterfall and contracting strategy.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mt-8 max-w-3xl text-lg leading-[1.7] text-text-secondary">
              Terra&apos;s supply program prioritizes government-aligned channels before commercial distribution. This sequencing reflects both the financing structure (DOE-linked) and the strategic positioning of the platform as a sovereign supply solution.
            </p>
          </ScrollReveal>

          {/* Waterfall diagram — vertical stepped layout */}
          <div className="mt-20">
            {[
              {
                priority: "Priority 1",
                channel: "Department of Energy",
                detail: "Primary supply channel, aligned to DOE financing structure. Framework agreements for long-term supply intent with staged delivery commitments.",
              },
              {
                priority: "Priority 2",
                channel: "Department of Defense",
                detail: "Defense-grade supply with quality assurance and acceptance protocols suitable for defense procurement. Chain-of-custody deliverables integrated into contracting.",
              },
              {
                priority: "Priority 3",
                channel: "Commercial Industrial and Communications",
                detail: "Industrial and advanced manufacturing buyers. Purchase orders and delivery schedules structured for commercial counterparties after government channels are serviced.",
              },
            ].map((tier, i) => (
              <ScrollReveal key={tier.priority} delay={0.15 + i * 0.1}>
                <div
                  className="flex flex-col border-t border-gold/15 py-12 lg:flex-row lg:items-start lg:gap-20"
                  style={{ paddingLeft: `${i * 40}px` }}
                >
                  <div className="mb-3 shrink-0 lg:mb-0 lg:w-1/4">
                    <span className="block font-mono text-xs tracking-wider text-gold-muted uppercase">
                      {tier.priority}
                    </span>
                    <h3 className="mt-1 font-serif text-2xl font-semibold text-text-primary lg:text-3xl">
                      {tier.channel}
                    </h3>
                  </div>
                  <p className="text-base leading-[1.7] text-text-secondary lg:w-3/4">
                    {tier.detail}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="mt-12 border-l border-gold/20 pl-8">
              <span className="mb-2 block text-sm font-medium text-gold">
                Contracting Framework
              </span>
              <p className="max-w-2xl text-base leading-[1.7] text-text-secondary">
                All channels are supported by framework agreements for long-term supply intent, purchase orders with staged delivery commitments, quality assurance and acceptance protocols, and chain-of-custody deliverables integrated directly into contracting documentation.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================
          FINANCING AND CAPITAL STRATEGY
      ================================================================ */}
      <section className="bg-charcoal py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <ScrollReveal>
            <span className="mb-4 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
              Capital Strategy
            </span>
            <h2 className="max-w-3xl font-serif text-3xl font-bold leading-tight text-text-primary lg:text-5xl">
              Financing structured for institutional credibility.
            </h2>
          </ScrollReveal>

          <div className="mt-20 flex flex-col gap-0">
            {/* Capital Layer 1 */}
            <ScrollReveal delay={0.1}>
              <div className="flex flex-col border-t border-gold/15 py-12 lg:flex-row lg:items-start lg:gap-20">
                <div className="mb-3 lg:mb-0 lg:w-2/5">
                  <span className="block font-mono text-xs tracking-wider text-gold-muted uppercase">
                    Initial Capital
                  </span>
                  <h3 className="mt-1 font-serif text-2xl font-semibold text-text-primary">
                    Regulation D, Rule 506(c)
                  </h3>
                </div>
                <p className="text-base leading-[1.7] text-text-secondary lg:w-3/5">
                  Convertible notes issued under Regulation D, Rule 506(c) to accredited investors. This provides seed and early-stage capital for Phase I activities: RTO completion, asset onboarding, data acquisition, and QP-governed certification workstreams.
                </p>
              </div>
            </ScrollReveal>

            {/* Capital Layer 2 */}
            <ScrollReveal delay={0.15}>
              <div className="flex flex-col border-t border-gold/15 py-12 lg:flex-row lg:items-start lg:gap-20">
                <div className="mb-3 lg:mb-0 lg:w-2/5">
                  <span className="block font-mono text-xs tracking-wider text-gold-muted uppercase">
                    Development Capital
                  </span>
                  <h3 className="mt-1 font-serif text-2xl font-semibold text-text-primary">
                    DOE Financing Lane
                  </h3>
                  <span className="mt-2 block font-mono text-3xl font-bold text-gold lg:text-4xl">
                    ~US$750M
                  </span>
                </div>
                <div className="lg:w-3/5">
                  <p className="text-base leading-[1.7] text-text-secondary">
                    DOE-integrated financing and/or project-level securitized notes for mine-refine-supply infrastructure. The DOE structure contemplates IDC capitalization, cash debt service commencing from Year 5, a 10% gross revenue sweep, a 10-year term outer bound, and repayment within approximately five years of production.
                  </p>
                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    <div className="border-l border-gold/20 pl-6">
                      <span className="block font-mono text-sm text-gold-muted">IDC</span>
                      <span className="text-sm text-text-secondary">Capitalized into project structure</span>
                    </div>
                    <div className="border-l border-gold/20 pl-6">
                      <span className="block font-mono text-sm text-gold-muted">Debt Service</span>
                      <span className="text-sm text-text-secondary">Cash service from Year 5</span>
                    </div>
                    <div className="border-l border-gold/20 pl-6">
                      <span className="block font-mono text-sm text-gold-muted">Revenue Sweep</span>
                      <span className="text-sm text-text-secondary">10% of gross revenue</span>
                    </div>
                    <div className="border-l border-gold/20 pl-6">
                      <span className="block font-mono text-sm text-gold-muted">Term</span>
                      <span className="text-sm text-text-secondary">10-year outer bound, ~5-year repayment</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Capital Layer 3 */}
            <ScrollReveal delay={0.2}>
              <div className="flex flex-col border-t border-gold/15 border-b border-b-gold/15 py-12 lg:flex-row lg:items-start lg:gap-20">
                <div className="mb-3 lg:mb-0 lg:w-2/5">
                  <span className="block font-mono text-xs tracking-wider text-gold-muted uppercase">
                    Expansion Capital
                  </span>
                  <h3 className="mt-1 font-serif text-2xl font-semibold text-text-primary">
                    Public Company Equity
                  </h3>
                </div>
                <p className="text-base leading-[1.7] text-text-secondary lg:w-3/5">
                  Equity issuance for M&amp;A expansion after platform stabilization. Once the initial assets are certified, the operator model is proven, and revenue flows begin, Terra accesses public equity markets to fund geographic and commodity expansion across additional U.S. states, Canada, Australia, and selectively into other jurisdictions.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ================================================================
          CTA — Link to assets and investors
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
                  Explore the mineral assets underlying this strategy.
                </h2>
              </div>
              <Link
                href="/assets"
                className="inline-flex items-center gap-3 border border-gold bg-gold/10 px-8 py-4 font-medium text-gold transition-all duration-300 hover:bg-gold/20 hover:text-gold-light"
              >
                Strategic Assets
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
