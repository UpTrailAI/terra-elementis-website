"use client";

import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Operating Leadership Built for Execution"
        subtitle="Senior executives with deep experience across mining, infrastructure investment, regulated industries, government affairs, and geological science."
      />

      {/* ================================================================
          PETER BANKS — CEO
      ================================================================ */}
      <section className="bg-navy-deep py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="flex flex-col gap-16 lg:flex-row lg:gap-24">
            <ScrollReveal className="lg:w-2/5">
              <span className="mb-3 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
                Chief Executive Officer
              </span>
              <h2 className="font-serif text-4xl font-bold leading-tight text-text-primary lg:text-5xl">
                Peter Banks
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="lg:w-3/5">
              <p className="text-lg leading-[1.7] text-text-secondary">
                Peter Banks is a senior executive with more than 30 years of experience in large-scale infrastructure investment, regulated industries, and cross-border commercial negotiation. His career spans senior leadership and advisory roles across the United Kingdom, the United States, Europe, and Asia, with deep sector experience in mining, natural resources, manufacturing, transportation, and strategic infrastructure development.
              </p>
              <p className="mt-6 text-lg leading-[1.7] text-text-secondary">
                Banks co-led negotiations concluding the Karen Nation conflict in Myanmar, facilitating cement production, rare earth mining, and gem exploration in the region. He led negotiations in Laos for investment in the Sepon region, home to some of the world&apos;s largest gold deposits.
              </p>
              <p className="mt-6 text-lg leading-[1.7] text-text-secondary">
                His commercial leadership includes business development for Monster Cable across EMEA, and work with THX and Beats &mdash; the latter subsequently acquired by Apple. He served as a consultant to British Airways, redesigning customer engagement strategy, and founded Bpan Muue, a venture that achieved a successful exit prior to COVID.
              </p>
              <p className="mt-6 text-lg leading-[1.7] text-text-secondary">
                Banks serves as a Non-Executive Director of Explore My Store (EMS), a company that received a multi-million-dollar investment from Microsoft.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <hr className="gold-rule mx-auto max-w-[1400px]" />

      {/* ================================================================
          DAVID ROLAND CROUCH II — CIO & INTERIM CFO
      ================================================================ */}
      <section className="bg-charcoal py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="flex flex-col gap-16 lg:flex-row lg:gap-24">
            <ScrollReveal className="lg:w-2/5">
              <span className="mb-3 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
                Chief Investment Officer &amp; Interim CFO
              </span>
              <h2 className="font-serif text-4xl font-bold leading-tight text-text-primary lg:text-5xl">
                David Roland Crouch&nbsp;II
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="lg:w-3/5">
              <p className="text-lg leading-[1.7] text-text-secondary">
                David Roland Crouch II is a finance executive, policy strategist, and government affairs advisor with cross-disciplinary experience spanning financial strategy, regulatory engagement, digital systems, and institutional governance. His exposure extends across North America, Eastern Europe, the Balkans, Southern Europe, Africa, and the Pacific.
              </p>
              <p className="mt-6 text-lg leading-[1.7] text-text-secondary">
                In his dual role at Terra Elementis, Crouch serves as Interim CFO &mdash; establishing financial reporting frameworks, budgeting discipline, and capital controls &mdash; and as Chief Investment Officer, overseeing investment strategy and capital allocation across both the certify-first and industrialization phases of the platform.
              </p>
              <p className="mt-6 text-lg leading-[1.7] text-text-secondary">
                Crouch also serves as Director of Government Affairs &mdash; Americas for The Aureus Company and Alchemy Nexis, where he advises U.S. congressional, executive branch, and defense stakeholders on supply chain resilience, tax policy, and strategic resource governance.
              </p>
              <p className="mt-6 text-lg leading-[1.7] text-text-secondary">
                Prior to his current roles, Crouch founded and serves as CEO and CIO of Decorus Imperium, a global financial literacy organization operating in 36 countries.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <hr className="gold-rule mx-auto max-w-[1400px]" />

      {/* ================================================================
          MARK SLATTEN — CHIEF GEOLOGIST & QP
      ================================================================ */}
      <section className="bg-navy-deep py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="flex flex-col gap-16 lg:flex-row lg:gap-24">
            <ScrollReveal className="lg:w-2/5">
              <span className="mb-3 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
                Chief Geologist &amp; Qualified Person
              </span>
              <h2 className="font-serif text-4xl font-bold leading-tight text-text-primary lg:text-5xl">
                Mark Slatten
              </h2>
              <p className="mt-4 text-base leading-[1.7] text-text-secondary">
                Alchemy EcoMiners
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="lg:w-3/5">
              <p className="text-lg leading-[1.7] text-text-secondary">
                Mark Slatten provides oversight of geological exploration, data acquisition, and mineral systems analysis for Terra Elementis. His responsibilities include the supervision of Mineral Resource and Mineral Reserve estimation activities, and the review, validation, and sign-off of technical reports under NI 43-101 and SEC S-K 1300 reporting frameworks.
              </p>
              <p className="mt-6 text-lg leading-[1.7] text-text-secondary">
                Slatten integrates traditional geological workflows with the MiDAS mineral data and analysis platform, ensuring that technical reporting is supported by a robust evidence management and chain-of-custody infrastructure from exploration through certification.
              </p>
              <p className="mt-6 text-lg leading-[1.7] text-text-secondary">
                He also serves as CEO and Qualified Person of Maverick Eco-Miners, Inc. Over the course of his career, Slatten has produced, reviewed, or signed off on more than 150 mineral resource and reserve reports, and has read and interpreted thousands of resource and reserve estimates contributing to over US$30 billion in investment funding decisions.
              </p>

              {/* Credentials block */}
              <div className="mt-10 border-l border-gold/30 pl-8">
                <div className="mb-6">
                  <span className="font-mono text-xs tracking-wider text-gold-muted uppercase">Education</span>
                  <p className="mt-1 text-base leading-[1.7] text-text-secondary">
                    M.S. in Geology (minor in Geophysics) &mdash; UCLA / UC Riverside
                  </p>
                  <p className="mt-1 text-base leading-[1.7] text-text-secondary">
                    PhD studies in risk assessment of open pit mining (pending)
                  </p>
                </div>
                <div className="mb-6">
                  <span className="font-mono text-xs tracking-wider text-gold-muted uppercase">Track Record</span>
                  <p className="mt-1 text-base leading-[1.7] text-text-secondary">
                    150+ mineral resource and reserve reports produced, reviewed, or signed off
                  </p>
                </div>
                <div>
                  <span className="font-mono text-xs tracking-wider text-gold-muted uppercase">Impact</span>
                  <p className="mt-1 text-base leading-[1.7] text-text-secondary">
                    Resource and reserve estimates contributing to US$30B+ in investment funding decisions
                  </p>
                </div>
              </div>
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
                  Work With Us
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
