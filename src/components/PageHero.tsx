"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}

export function PageHero({ title, subtitle, eyebrow }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-deep pt-32 pb-24 lg:pt-44 lg:pb-32">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 to-transparent" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {eyebrow && (
            <span className="mb-4 block font-mono text-xs tracking-[0.3em] text-gold-muted uppercase">
              {eyebrow}
            </span>
          )}
          <h1 className="max-w-4xl font-serif text-4xl font-bold leading-tight text-text-primary lg:text-6xl lg:leading-[1.1]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary lg:text-xl">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>

      <hr className="gold-rule mx-auto mt-16 max-w-[1400px] lg:mt-24" />
    </section>
  );
}
