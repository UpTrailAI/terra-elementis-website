"use client";

import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    inquiryType: "",
    message: "",
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
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit inquiry");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        organization: "",
        inquiryType: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch"
        subtitle="For investor inquiries, government discussions, and strategic partnership opportunities."
      />

      {/* ================================================================
          CONTACT FORM — Asymmetric 40/60 layout
      ================================================================ */}
      <section className="bg-navy-deep py-32 lg:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="flex flex-col gap-16 lg:flex-row lg:gap-24">
            {/* Left side — 40% — Inquiry categories */}
            <ScrollReveal className="lg:w-2/5">
              <span className="mb-4 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
                Inquiry Categories
              </span>
              <h2 className="font-serif text-3xl font-bold leading-tight text-text-primary lg:text-4xl">
                How can we help?
              </h2>

              <div className="mt-12 border-l border-gold/30 pl-8">
                <div className="mb-10">
                  <h3 className="font-serif text-xl font-semibold text-text-primary">
                    Investor Inquiries
                  </h3>
                  <p className="mt-2 text-base leading-[1.7] text-text-secondary">
                    For accredited investors and institutional capital partners interested in Terra Elementis and the public markets strategy.
                  </p>
                </div>

                <div className="mb-10">
                  <h3 className="font-serif text-xl font-semibold text-text-primary">
                    Government &amp; Defense
                  </h3>
                  <p className="mt-2 text-base leading-[1.7] text-text-secondary">
                    For DOE, DoD, and government procurement discussions related to critical mineral supply and strategic reserve programs.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-semibold text-text-primary">
                    Strategic Partnerships
                  </h3>
                  <p className="mt-2 text-base leading-[1.7] text-text-secondary">
                    For mining operators, refinery operators, and technology partners interested in the 50/50 operator partnership model.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Right side — 60% — Contact form */}
            <ScrollReveal delay={0.15} className="lg:w-3/5">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-sm text-text-secondary">
                    Full Name
                  </label>
                  <input
                    id="contact-name"
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
                  <label htmlFor="contact-email" className="mb-2 block text-sm text-text-secondary">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
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
                  <label htmlFor="contact-org" className="mb-2 block text-sm text-text-secondary">
                    Organization
                  </label>
                  <input
                    id="contact-org"
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
                  <label htmlFor="contact-type" className="mb-2 block text-sm text-text-secondary">
                    Inquiry Type
                  </label>
                  <select
                    id="contact-type"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                    disabled={status === "loading"}
                    className="w-full border border-navy-mid bg-surface-glass px-4 py-3 text-text-primary focus:border-gold focus:outline-none disabled:opacity-50"
                  >
                    <option value="" disabled>
                      Select inquiry type
                    </option>
                    <option value="investor">Investor Inquiry</option>
                    <option value="government">Government &amp; Defense</option>
                    <option value="partnership">Strategic Partnership</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="mb-2 block text-sm text-text-secondary">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={status === "loading"}
                    className="min-h-[140px] w-full border border-navy-mid bg-surface-glass px-4 py-3 text-text-primary placeholder-text-secondary/50 focus:border-gold focus:outline-none disabled:opacity-50"
                  />
                </div>

                {status === "error" && (
                  <div className="border border-red-500/50 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                    {errorMessage}
                  </div>
                )}

                {status === "success" && (
                  <div className="border border-gold/50 bg-gold/10 px-4 py-3 text-sm text-gold">
                    Thank you! Your inquiry has been submitted successfully. We'll be in touch soon.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-2 w-full border border-gold bg-gold/10 py-4 font-medium text-gold transition-all duration-300 hover:bg-gold/20 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {status === "loading" ? "Submitting..." : "Submit Inquiry"}
                </button>
              </form>

              <p className="mt-8 text-sm leading-[1.7] text-text-secondary/70">
                All inquiries are treated as confidential. Terra Elementis Inc. is a pre-public entity. Information provided is subject to confidentiality and non-circumvention provisions.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
