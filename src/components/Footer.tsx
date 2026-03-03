import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/leadership", label: "Leadership" },
  { href: "/strategy", label: "Strategy" },
  { href: "/assets", label: "Assets" },
  { href: "/technology", label: "Technology" },
  { href: "/governance", label: "Governance" },
  { href: "/partners", label: "Partners" },
  { href: "/investors", label: "Investors" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-gold/10 bg-navy-deep">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Terra Elementis symbol"
              className="h-14 w-auto"
            />
            <div className="flex flex-col gap-1">
              <span className="font-serif text-xl font-bold tracking-wide text-text-primary">
                TERRA ELEMENTIS
              </span>
              <span className="text-[10px] font-mono tracking-[0.3em] text-gold-muted uppercase">
                Critical Minerals Platform
              </span>
            </div>
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

        <div className="flex flex-col gap-6 text-xs text-text-secondary lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col gap-2">
            <p className="font-medium text-text-primary">Terra Elementis, Inc.</p>
            <address className="not-italic leading-relaxed">
              300 Delaware Ave. Suite 210 #493<br />
              Wilmington, DE 19801<br />
              United States
            </address>
          </div>
          
          <div className="flex flex-col gap-2 lg:items-end lg:text-right">
            <p>
              Confidential &mdash; Terra Elementis, Inc. &mdash; 2026
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
