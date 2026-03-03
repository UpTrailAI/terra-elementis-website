"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/leadership", label: "Leadership" },
  { href: "/strategy", label: "Strategy" },
  { href: "/assets", label: "Assets" },
  { href: "/technology", label: "Technology" },
  { href: "/governance", label: "Governance" },
  { href: "/investors", label: "Investors" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-700 ease-in-out ${
        scrolled
          ? "bg-navy-deep/95 backdrop-blur-sm border-gold/10"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-3 lg:px-12">
        <Link href="/" className="group flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Terra Elementis symbol"
            className={`w-auto transition-all duration-500 ease-in-out ${
              scrolled
                ? "h-10 sm:h-11 lg:h-12"
                : "h-14 sm:h-16 lg:h-[72px]"
            }`}
          />
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-bold tracking-wide text-text-primary sm:text-xl lg:text-2xl">
              TERRA ELEMENTIS
            </span>
            <span className="text-[9px] font-mono tracking-[0.26em] text-gold-muted uppercase sm:text-[10px] lg:text-[11px] lg:tracking-[0.24em]">
              Critical Minerals Platform
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                pathname === link.href
                  ? "text-gold"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gold"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[1.5px] w-6 bg-text-primary transition-transform duration-300 ${
              mobileOpen ? "translate-y-[5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-6 bg-text-primary transition-opacity duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-6 bg-text-primary transition-transform duration-300 ${
              mobileOpen ? "-translate-y-[5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-gold/10 bg-navy-deep/98 backdrop-blur-md lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-3 text-base font-medium tracking-wide transition-colors ${
                    pathname === link.href
                      ? "text-gold"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
