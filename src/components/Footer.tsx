import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/leadership", label: "Leadership" },
  { href: "/strategy", label: "Strategy" },
  { href: "/assets", label: "Assets" },
  { href: "/technology", label: "Technology" },
  { href: "/governance", label: "Governance" },
  { href: "/investors", label: "Investors" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-gold/10 bg-navy-deep">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col gap-4">
            <span className="font-serif text-xl font-bold tracking-wide text-text-primary">
              TERRA ELEMENTIS
            </span>
            <span className="text-[10px] font-mono tracking-[0.3em] text-gold-muted uppercase">
              Critical Minerals Platform
            </span>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary transition-colors duration-300 hover:text-text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <hr className="gold-rule my-12" />

        <div className="flex flex-col gap-4 text-xs text-text-secondary lg:flex-row lg:items-center lg:justify-between">
          <p>
            Confidential &mdash; The Aureus Company (Aureus Holdings (US), LLC)
            &mdash; 2026
          </p>
          <p>Terra Elementis Inc. (Delaware)</p>
        </div>
      </div>
    </footer>
  );
}
