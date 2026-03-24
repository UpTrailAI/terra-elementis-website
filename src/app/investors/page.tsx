"use client";

import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
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
        title="Investor Relations"
        subtitle="For inquiries regarding Terra Elementis."
      />

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
                For accredited investors, institutional capital partners, and strategic inquiries regarding Terra Elementis.
              </p>
              <p className="mt-6 text-lg leading-[1.7] text-text-secondary">
                Terra Elementis is a critical minerals company with properties in Arizona and Nevada, focused on rare earth elements, critical minerals, gold and silver.
              </p>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 border border-gold bg-gold/10 px-8 py-4 font-medium text-gold transition-all duration-300 hover:bg-gold/20 hover:text-gold-light"
                >
                  General Inquiries
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
                    Thank you! Your information request has been submitted. We&apos;ll be in touch shortly.
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
