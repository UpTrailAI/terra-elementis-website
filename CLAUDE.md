# CLAUDE.md — Terra Elementis Corporate Website

## Project Overview
Corporate website for Terra Elementis Inc. — a critical minerals platform being spun out of The Aureus Company to consolidate, certify, and industrialize rare earth element reserves aligned to US strategic supply needs.

**This is NOT a startup landing page. This is an institutional corporate site for a company targeting DOE, DoD, NASDAQ listing, and accredited investors.**

## Tech Stack
- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4** with a FULLY CUSTOM design system (see below)
- **Framer Motion** for subtle, intentional animations
- **next/font** for self-hosted premium fonts
- Deploy target: **Vercel**

## ⚠️ CRITICAL: Anti-AI-Look Design Rules

Every AI code generator produces the same boring output. This site MUST NOT look AI-generated. Follow these rules religiously:

### Typography — THE Most Important Element
- **Headings**: Use `Playfair Display` (serif) — conveys authority, heritage, institutional weight. DO NOT use Inter, DM Sans, Geist, or any default sans-serif for headings.
- **Body**: Use `Source Sans 3` — clean, readable, professional but not the default Inter/Geist.
- **Data/Stats**: Use `JetBrains Mono` — for numbers, figures, financial data, stats.
- **Type scale**: Use dramatic contrast. Hero headings at 72-96px. Section headings 40-56px. Body at 18px with 1.7 line-height. Let text breathe.

### Colour Palette — Dark, Sovereign, Gold-Accented
```
--navy-deep: #0A1628        (primary background)
--charcoal: #141B2D          (secondary background / cards)
--navy-mid: #1E2A3E          (tertiary / borders)
--gold: #C5A55A              (primary accent — CTAs, highlights, lines)
--gold-light: #D4B96E        (hover states)
--gold-muted: #8B7A3F        (subtle accents)
--text-primary: #F0EDE6      (off-white, NOT pure white)
--text-secondary: #A0A0B0    (muted text)
--steel-blue: #4A7FB5        (data visualizations, links)
--success: #4A8B6E           (positive indicators)
--surface-glass: rgba(255,255,255,0.03)  (subtle glass panels)
```
NEVER use pure black (#000) or pure white (#FFF). NEVER use default Tailwind colours (blue-500, gray-100 etc). NEVER use gradients unless they are extremely subtle (2-3% opacity shift).

### Layout — Break the AI Grid
- **Asymmetric layouts**: NOT everything centred. Use 60/40 splits, offset grids, elements that bleed to edges.
- **Generous whitespace**: Sections should have 120-200px vertical padding. Let content breathe. AI sites cram everything together.
- **Full-bleed sections**: Alternate between contained (max-w-7xl) and full-width sections.
- **No card grids**: Do NOT use the standard 3-column card grid that every AI outputs. Use staggered layouts, overlapping elements, or single-focus sections.
- **Horizontal rules**: Use thin gold lines (1px, gold with 30% opacity) as section dividers. Elegant, not decorative.

### Visual Language
- **NO stock photography placeholders**. Use solid colour blocks, abstract mineral textures, or CSS-generated patterns as placeholders. Add `{/* REPLACE: Actual mine site photography */}` comments where real images should go.
- **NO emoji in the UI**. This is institutional, not consumer.
- **NO rounded corners on containers** (cards, sections). Use sharp edges or very subtle 2px radius max. Rounded corners = startup look.
- **NO generic hero gradients**. Use a solid dark background with a subtle grain/noise texture overlay.
- **Data visualizations**: Use custom SVG charts/diagrams, not library defaults. The mine-refine-supply pipeline, the phase timeline, the stakeholder map — these should be bespoke visual elements.
- **Subtle grain texture**: Add a very light noise/grain overlay (opacity 3-5%) to dark backgrounds. This kills the flat digital look and adds depth.

### Animation — Restraint is Everything
- **Scroll reveals**: Content fades in from bottom (20px translate) with 0.6s ease. ONE animation style, used consistently.
- **NO bouncing, spinning, or playful animations**. This is not a SaaS landing page.
- **Hover states**: Subtle gold glow or 2px translate on interactive elements. No scale transforms.
- **Hero**: A slow Ken Burns effect on the background (subtle 5% zoom over 20 seconds) adds cinematic depth without screaming "animated."
- **Number counters**: Stats should count up when scrolled into view (US$100B, 14M+ acres, etc).

### Navigation
- Fixed header, transparent on hero, solid navy on scroll.
- Logo left, nav links right. No hamburger menu on desktop.
- Simple dropdowns, no mega-menus.
- Gold underline on active/hover nav items.

### Footer
- Minimal. Logo, nav links, legal text.
- "Confidential — The Aureus Company (Aureus Holdings (US), LLC) — 2026"
- No social media icons (this is pre-public, confidential).

## Site Structure

```
/                     → Home (hero + thesis + 3 pillars + leadership + CTA)
/about                → Company overview, Aureus relationship, vision/mission
/leadership           → Peter Banks, David Crouch, Mark Slatten (full bios)
/strategy             → Two-phase model, certify-first, operator partnership, supply waterfall
/assets               → Arizona & Nevada claims, expansion pipeline, reserve framework
/technology           → MiDAS platform, chain-of-custody, tokenization
/governance           → Board structure, compliance, NI 43-101 / SEC S-K 1300 reporting
/investors            → Public markets strategy (RTO → NASDAQ), financing, contact form
/contact              → Inquiry form (investor / government / partner categories)
```

## Homepage Sections (in order)

1. **Hero**: Full-viewport dark section. Large serif heading: "A sovereign-grade mineral platform for America's critical supply chain." Subtle background texture. No image (or placeholder for dramatic mine photography). Small gold "Scroll" indicator.

2. **Problem Statement**: "The United States imports 80%+ of its rare earth elements from adversarial supply chains." — Big stat, minimal text. Let the number speak.

3. **What We're Building**: The one-paragraph Terra thesis. Two-phase model as a horizontal timeline/diagram.

4. **Three Pillars** (NOT a 3-column card grid): Staggered layout.
   - Certified Reserves (NI 43-101 / SEC S-K 1300 governance)
   - Technology (MiDAS evidence management and oracle layer)
   - Governance (5-member board, operator oversight, disclosure discipline)

5. **By The Numbers**: Full-width dark section with large gold numbers.
   - US$100B reserve framework
   - ~US$750M DOE financing lane
   - Arizona + Nevada initial footprint
   - 50/50 operator partnership model

6. **Leadership Strip**: Three names with titles. Link to /leadership. No headshots unless provided.

7. **The Aureus Company**: Brief context on the parent entity. "Terra Elementis is being spun out of The Aureus Company..." One paragraph.

8. **CTA Section**: "For investor inquiries and partnership opportunities" → gold button to /investors.

## Content Source
The full business plan is at: `../TERRA ELEMENTIS BUSINESS PLAN V1.1.pdf`
All copy on the site should be derived from this document. Do NOT invent facts or figures.

## Build Instructions
1. `npx create-next-app@latest . --typescript --tailwind --app --src-dir --import-alias "@/*"`
2. Install: `framer-motion`
3. Configure fonts in `src/app/layout.tsx` using `next/font/google`
4. Build mobile-responsive from the start (but desktop is the primary experience — investors use desktop)
5. Every page must include the confidential footer line

## Quality Checklist
- [ ] Does NOT look like a typical AI-generated site
- [ ] Typography has dramatic contrast (serif headings, sans body)
- [ ] Colour palette is consistently dark + gold, no Tailwind defaults
- [ ] Layouts are asymmetric, not perfectly centred grids
- [ ] Animations are subtle and consistent
- [ ] All content is sourced from the business plan
- [ ] Grain texture on dark backgrounds
- [ ] Sharp edges, no rounded corners on containers
- [ ] Footer: "Confidential - The Aureus Company (Aureus Holdings (US), LLC) - March 2026"
- [ ] Mobile responsive
