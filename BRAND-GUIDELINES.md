# Terra Elementis — Brand & Digital Marketing Guidelines

Last updated: 2026-03-02

## 1) Brand Positioning

**Brand Promise**  
Terra Elementis is a sovereign-grade critical minerals platform building verified, financeable, and strategically aligned supply infrastructure.

**Core Narrative Pillars**
- Strategic supply-chain resilience
- Geological and reporting credibility
- Institutional governance and execution discipline

**Tone of Voice**
- Authoritative, precise, and calm
- Zero hype language
- Evidence-backed claims over marketing adjectives
- Confident, not aggressive

---

## 2) Visual Identity System

## Primary Palette
- Navy Deep: `#0A1628`
- Charcoal: `#141B2D`
- Navy Mid: `#1E2A3E`
- Gold: `#C5A55A`
- Gold Light: `#D4B96E`
- Gold Muted: `#8B7A3F`
- Text Primary: `#F0EDE6`
- Text Secondary: `#A0A0B0`

## Typography
- Headings (serif): **Playfair Display**
- Body (sans): **Source Sans 3**
- Data/labels (mono): **JetBrains Mono**

## Logo System (Current)
- Header symbol: `public/terra-symbol-earth.svg`
- Archived previous symbol: `public/logo-archive/`
- App/site icon: `src/app/icon.svg`
- Apple touch icon: `src/app/apple-icon.svg`

## Logo Meaning (Earth Mark)
- Circular ring: sovereign trust + continuity
- Curved strata lines: geology / earth layers
- Crystal core: mineral value and extraction focus
- Gold-on-navy execution: premium, institutional, strategic

## Logo Usage Rules
- Prefer gold logo on navy/charcoal backgrounds
- Minimum clear-space: 0.5x symbol diameter on all sides
- Do not distort, stretch, add shadows, or recolor outside approved palette
- On small UI placements (<24px), use simplified icon only

---

## 3) Messaging Framework for Marketing

## Website Hero Formula
1. Strategic problem
2. Terra solution
3. Credibility proof
4. Execution call-to-action

## Approved Message Themes
- U.S. critical mineral supply-chain resilience
- Verified reserve frameworks (NI 43-101, SEC S-K 1300)
- Institutional-grade execution and governance

## Avoid
- "Revolutionary", "disruptive", or speculative language without proof
- Unqualified reserve or financing claims
- Investor language that may be construed as guarantees

---

## 4) SEO & Content Strategy (Execution Ready)

## Primary SEO Topics
- Critical minerals platform
- Rare earth supply chain
- NI 43-101 reporting
- SEC S-K 1300 reporting
- U.S. strategic minerals investment ecosystem

## On-Page Structure
- One clear H1 per page
- Semantic H2/H3 hierarchy
- 140–160 char meta descriptions
- Internal links between About, Strategy, Governance, Investors, Contact

## Content Cadence (Recommended)
- 2 long-form articles/month
- 1 leadership or market commentary/month
- 1 technical explainer/quarter (reporting standards, reserves, compliance)

## Conversion Events to Track
- Investor inquiry submissions
- Contact form submissions
- Time-on-page (Strategy, Investors)
- Scroll depth on home + investors pages

---

## 5) Social & PR Asset Specs

## Social Image Standard
- Open Graph / Twitter: 1200×630
- Keep safe margin around logo and headline
- Use navy gradient background + gold accents

## Favicon & App Icons
- Browser icon: `src/app/icon.svg`
- Apple icon: `src/app/apple-icon.svg`

## Suggested Additional Assets (Marketing Team)
- LinkedIn banner (1584×396)
- X header (1500×500)
- Press kit folder (logo SVG + PNG dark/light variants)

---

## 6) Website Technical SEO Status

Implemented:
- Global metadata + keywords
- Canonical baseline
- OpenGraph metadata
- Twitter card metadata
- Dynamic OG image route
- Robots route (`/robots.txt`)
- Sitemap route (`/sitemap.xml`)
- Organization JSON-LD structured data
- Updated icon/apple icon

Still recommended (next pass):
- Connect Google Search Console + Bing Webmaster
- Implement GA4/GTM tracking from `MARKETING-MEASUREMENT-PLAN.md`
- Performance pass for LCP/CLS and image optimization
- Add social profile URLs in `.env` for Organization schema (`NEXT_PUBLIC_LINKEDIN_URL`, `NEXT_PUBLIC_X_URL`)

---

## 7) Hand-off Checklist for Marketing Head

- [ ] Review and approve positioning language
- [ ] Approve final symbol variant
- [ ] Confirm official domain/social links for schema `sameAs`
- [ ] Confirm legal/compliance review language for investor pages
- [ ] Align content calendar to SEO topics
- [ ] Create social kit from provided style system

---

## Notes for Engineering
- If primary domain is not `https://terraelementis.com`, update it in:
  - `src/app/layout.tsx`
  - `src/app/robots.ts`
  - `src/app/sitemap.ts`
