"use client";

import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CountUp } from "@/components/CountUp";
import { useState } from "react";

export default function InvestorsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    category: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          inquiryType: formData.category,
          message: "Request for investor information package",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit request");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        organization: "",
        category: "",
      });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <PageHero
        eyebrow="Investors"
        title="Public Markets Strategy and Investor Relations"
        subtitle="A disciplined, staged pathway to public-market listing designed for institutional credibility and long-term capital formation."
      />

      {/* ================================================================
          PUBLIC MARKET PATHWAY
      ================================================================ */}
      <section className="bg-navy-deep py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="flex flex-col gap-16 lg:flex-row lg:gap-24">
            <ScrollReveal className="lg:w-2/5">
              <span className="mb-4 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
                Public Market Pathway
              </span>
              <h2 className="font-serif text-3xl font-bold leading-tight text-text-primary lg:text-5xl">
                From RTO to NASDAQ.
              </h2>
              <p className="mt-6 text-lg leading-[1.7] text-text-secondary">
                Terra Elementis is structured to enter public markets through a Canadian Reverse Takeover, followed by a post-closing restructure and reverse split, with NASDAQ readiness targeted within 12&ndash;18 months.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="lg:w-3/5">
              <div className="relative border-l border-gold/30 pl-8">
                <div className="mb-12">
                  <div className="absolute -left-[5px] h-[10px] w-[10px] border border-gold/60 bg-navy-deep" />
                  <span className="font-mono text-xs tracking-wider text-gold-muted uppercase">Stage 1</span>
                  <h3 className="mt-1 font-serif text-xl font-semibold text-text-primary">
                    Canadian RTO and Restructure
                  </h3>
                  <p className="mt-2 text-base leading-[1.7] text-text-secondary">
                    Enter public markets via Canadian reverse takeover. Counterparty identity, listing details, reverse split ratio, and pro forma capitalization to be disclosed via PPM Supplement upon execution of definitive agreement.
                  </p>
                </div>
                <div className="mb-12">
                  <div className="absolute -left-[5px] h-[10px] w-[10px] border border-gold/60 bg-navy-deep" />
                  <span className="font-mono text-xs tracking-wider text-gold-muted uppercase">Stage 2</span>
                  <h3 className="mt-1 font-serif text-xl font-semibold text-text-primary">
                    Post-Closing Restructure
                  </h3>
                  <p className="mt-2 text-base leading-[1.7] text-text-secondary">
                    Share consolidation through reverse split, governance finalization, and audit readiness. The Aureus Company expected to remain majority and controlling shareholder with approximately 75% ownership.
                  </p>
                </div>
                <div>
                  <div className="absolute -left-[5px] h-[10px] w-[10px] border border-gold/60 bg-navy-deep" />
                  <span className="font-mono text-xs tracking-wider text-gold-muted uppercase">Stage 3</span>
                  <h3 className="mt-1 font-serif text-xl font-semibold text-text-primary">
                    NASDAQ Readiness
                  </h3>
                  <p className="mt-2 text-base leading-[1.7] text-text-secondary">
                    Full compliance gate within 12&ndash;18 months of initial listing. Technical reporting maturity, governance maturity, operational readiness, and disclosure discipline.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <hr className="gold-rule mx-auto max-w-[1400px]" />

      {/* ================================================================
          FINANCING STRATEGY
      ================================================================ */}
      <section className="bg-charcoal py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <ScrollReveal>
            <span className="mb-4 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
              Capital Formation
            </span>
            <h2 className="max-w-3xl font-serif text-3xl font-bold leading-tight text-text-primary lg:text-5xl">
              Financing Strategy
            </h2>
          </ScrollReveal>

          <div className="mt-16 flex flex-col gap-16 lg:flex-row lg:gap-24">
            <ScrollReveal delay={0.15} className="lg:w-3/5">
              <p className="text-lg leading-[1.7] text-text-secondary">
                Initial capital formation via Regulation D, Rule 506(c) convertible notes &mdash; a 12% convertible promissory note offering detailed in a separate offering package. Beneficial ownership caps are set at 10% per holder and 25% aggregate.
              </p>
              <p className="mt-6 text-lg leading-[1.7] text-text-secondary">
                The company will transition to a DOE integrated financing lane of approximately US$750M and/or project-level securitized notes secured by minerals. The DOE structure capitalizes IDC, with cash debt service commencing from Year 5, a 10% gross revenue sweep, and a 10-year outer bound.
              </p>
              <p className="mt-6 text-lg leading-[1.7] text-text-secondary">
                The public company capital strategy targets equity issuance for M&amp;A expansion and consolidation, building a platform capable of acquiring and integrating additional mineral assets across the Western United States.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3} className="lg:w-2/5">
              <div className="border-l border-gold/30 pl-8">
                <div className="mb-10">
                  <span className="font-mono text-sm font-bold tracking-wider text-gold uppercase">i.</span>
                  <h3 className="mt-2 font-serif text-xl font-semibold text-text-primary">
                    Reg D, Rule 506(c)
                  </h3>
                  <p className="mt-2 text-base leading-[1.7] text-text-secondary">
                    12% convertible promissory notes. 10% per-holder and 25% aggregate beneficial ownership caps.
                  </p>
                </div>
                <div className="mb-10">
                  <span className="font-mono text-sm font-bold tracking-wider text-gold uppercase">ii.</span>
                  <h3 className="mt-2 font-serif text-xl font-semibold text-text-primary">
                    DOE Financing Lane
                  </h3>
                  <p className="mt-2 text-base leading-[1.7] text-text-secondary">
                    ~US$750M integrated financing for mine-refine-supply program. Cash debt service from Year 5.
                  </p>
                </div>
                <div>
                  <span className="font-mono text-sm font-bold tracking-wider text-gold uppercase">iii.</span>
                  <h3 className="mt-2 font-serif text-xl font-semibold text-text-primary">
                    Public-Market Capital
                  </h3>
                  <p className="mt-2 text-base leading-[1.7] text-text-secondary">
                    Equity issuance for M&amp;A expansion and reserve consolidation across the Western U.S.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <hr className="gold-rule mx-auto max-w-[1400px]" />

      {/* ================================================================
          KEY FIGURES
      ================================================================ */}
      <section className="bg-navy-deep py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <ScrollReveal>
            <span className="mb-12 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
              Key Figures
            </span>
          </ScrollReveal>

          <div className="grid gap-16 sm:grid-cols-2 lg:gap-y-20">
            <ScrollReveal delay={0.1}>
              <div className="flex flex-col gap-3">
                <span className="font-mono text-5xl font-bold text-gold lg:text-6xl">
                  US$<CountUp end={100} />B
                </span>
                <span className="text-base text-text-secondary">
                  Reserve framework based on identified pipeline supported by NI 43-101 and SEC S-K 1300 compliant reporting
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex flex-col gap-3">
                <span className="font-mono text-5xl font-bold text-gold lg:text-6xl">
                  ~US$<CountUp end={750} />M
                </span>
                <span className="text-base text-text-secondary">
                  DOE integrated financing lane for mine-refine-supply program with application-ready documentation
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-col gap-3">
                <span className="font-mono text-5xl font-bold text-gold lg:text-6xl">
                  ~US$<CountUp end={25} />B
                </span>
                <span className="text-base text-text-secondary">
                  Paid-in capital in shares issued to The Aureus Company as consideration for vended mineral assets
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-col gap-3">
                <span className="font-mono text-5xl font-bold text-gold lg:text-6xl">
                  ~<CountUp end={75} />%
                </span>
                <span className="text-base text-text-secondary">
                  Aureus controlling stake post-transaction &mdash; majority and controlling shareholder position retained
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <hr className="gold-rule mx-auto max-w-[1400px]" />

      {/* ================================================================
          NASDAQ READINESS GATE
      ================================================================ */}
      <section className="bg-charcoal py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <ScrollReveal>
            <span className="mb-4 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
              Compliance Milestones
            </span>
            <h2 className="max-w-3xl font-serif text-3xl font-bold leading-tight text-text-primary lg:text-5xl">
              NASDAQ Readiness Gate
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-[1.7] text-text-secondary">
              Targeted within 12&ndash;18 months of initial listing, the NASDAQ readiness gate encompasses four critical milestones.
            </p>
          </ScrollReveal>

          <div className="mt-20 flex flex-col gap-0">
            <ScrollReveal delay={0.1}>
              <div className="flex flex-col border-t border-gold/15 py-14 lg:flex-row lg:items-start lg:gap-24">
                <div className="mb-4 flex items-center gap-4 lg:mb-0 lg:w-1/3">
                  <span className="font-mono text-5xl font-bold text-gold/30">01</span>
                  <h3 className="font-serif text-2xl font-semibold text-text-primary">
                    Technical Reporting
                  </h3>
                </div>
                <p className="text-lg leading-[1.7] text-text-secondary lg:w-2/3">
                  Updated NI 43-101 and S-K 1300 annexes supporting reserve narrative. QP-governed technical reports under recognized reporting frameworks providing institutional-grade disclosure discipline.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="flex flex-col border-t border-gold/15 py-14 lg:flex-row lg:items-start lg:gap-24">
                <div className="mb-4 flex items-center gap-4 lg:mb-0 lg:w-1/3">
                  <span className="font-mono text-5xl font-bold text-gold/30">02</span>
                  <h3 className="font-serif text-2xl font-semibold text-text-primary">
                    Governance Maturity
                  </h3>
                </div>
                <p className="text-lg leading-[1.7] text-text-secondary lg:w-2/3">
                  Appointment of three independent directors with relevant sector backgrounds spanning defense, government, critical minerals, and manufacturing supply chains. Five-member board designed for public-market credibility.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex flex-col border-t border-gold/15 py-14 lg:flex-row lg:items-start lg:gap-24">
                <div className="mb-4 flex items-center gap-4 lg:mb-0 lg:w-1/3">
                  <span className="font-mono text-5xl font-bold text-gold/30">03</span>
                  <h3 className="font-serif text-2xl font-semibold text-text-primary">
                    Operational Readiness
                  </h3>
                </div>
                <p className="text-lg leading-[1.7] text-text-secondary lg:w-2/3">
                  Operator partnership agreements finalized under the 50/50 model. DOE application readiness pack assembled with integrated financing lane documentation for the mine-refine-supply program.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="flex flex-col border-t border-gold/15 border-b border-b-gold/15 py-14 lg:flex-row lg:items-start lg:gap-24">
                <div className="mb-4 flex items-center gap-4 lg:mb-0 lg:w-1/3">
                  <span className="font-mono text-5xl font-bold text-gold/30">04</span>
                  <h3 className="font-serif text-2xl font-semibold text-text-primary">
                    Disclosure Discipline
                  </h3>
                </div>
                <p className="text-lg leading-[1.7] text-text-secondary lg:w-2/3">
                  Consistent investor communications supported by OrionIQ. Audit readiness program underway with full disclosure controls, financial reporting infrastructure, and governance transparency from formation.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <hr className="gold-rule mx-auto max-w-[1400px]" />

      {/* ================================================================
          CTA + REQUEST INFORMATION FORM
      ================================================================ */}
      <section className="bg-navy-deep py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="flex flex-col gap-16 lg:flex-row lg:gap-24">
            <ScrollReveal className="lg:w-2/5">
              <span className="mb-4 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
                Get in Touch
              </span>
              <h2 className="font-serif text-3xl font-bold leading-tight text-text-primary lg:text-5xl">
                Contact Investor Relations
              </h2>
              <p className="mt-6 text-lg leading-[1.7] text-text-secondary">
                For accredited investors, institutional capital partners, and strategic inquiries regarding Terra Elementis and the public markets strategy.
              </p>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 border border-gold bg-gold/10 px-8 py-4 font-medium text-gold transition-all duration-300 hover:bg-gold/20 hover:text-gold-light"
                >
                  Contact Investor Relations
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="lg:w-3/5">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <h3 className="font-serif text-xl font-semibold text-text-primary">
                  Request Information
                </h3>

                <div>
                  <label htmlFor="inv-name" className="mb-2 block text-sm text-text-secondary">
                    Name
                  </label>
                  <input
                    id="inv-name"
                    name="name"
                    type="text"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={status === "loading"}
                    className="w-full border border-navy-mid bg-surface-glass px-4 py-3 text-text-primary placeholder-text-secondary/50 focus:border-gold focus:outline-none disabled:opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="inv-email" className="mb-2 block text-sm text-text-secondary">
                    Email
                  </label>
                  <input
                    id="inv-email"
                    name="email"
                    type="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={status === "loading"}
                    className="w-full border border-navy-mid bg-surface-glass px-4 py-3 text-text-primary placeholder-text-secondary/50 focus:border-gold focus:outline-none disabled:opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="inv-org" className="mb-2 block text-sm text-text-secondary">
                    Organization
                  </label>
                  <input
                    id="inv-org"
                    name="organization"
                    type="text"
                    placeholder="Company or institution"
                    value={formData.organization}
                    onChange={handleChange}
                    disabled={status === "loading"}
                    className="w-full border border-navy-mid bg-surface-glass px-4 py-3 text-text-primary placeholder-text-secondary/50 focus:border-gold focus:outline-none disabled:opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="inv-category" className="mb-2 block text-sm text-text-secondary">
                    Category
                  </label>
                  <select
                    id="inv-category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    disabled={status === "loading"}
                    className="w-full border border-navy-mid bg-surface-glass px-4 py-3 text-text-primary focus:border-gold focus:outline-none disabled:opacity-50"
                  >
                    <option value="" disabled>
                      Select category
                    </option>
                    <option value="accredited-investor">Accredited Investor</option>
                    <option value="government">Government</option>
                    <option value="strategic-partner">Strategic Partner</option>
                  </select>
                </div>

                {status === "error" && (
                  <div className="border border-red-500/50 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                    {errorMessage}
                  </div>
                )}

                {status === "success" && (
                  <div className="border border-gold/50 bg-gold/10 px-4 py-3 text-sm text-gold">
                    Thank you! Your information request has been submitted. We'll send the investor package shortly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-2 w-full border border-gold bg-gold/10 py-4 font-medium text-gold transition-all duration-300 hover:bg-gold/20 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {status === "loading" ? "Submitting..." : "Submit Request"}
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
