# CHANGES LOG — Terra Elementis Website Content Overhaul

**Date:** 2026-03-24
**Requested by:** Jay Abbott (Loom review, March 19, 2026)
**Loom:** https://www.loom.com/share/411a39475ba54109baebdd9a7a7cfe7b
**Guiding principle:** "We're a mining company focused on rare earth, critical minerals, gold and silver. Less is more."

---

## Summary

Jay reviewed the website and identified that it reads like an AI-generated investor deck exposing confidential business mechanics. The overhaul strips the site back to present Terra Elementis as a traditional mining company with properties in Arizona and Nevada.

**Banned terms removed sitewide:** Aureus, AlchemyNexis, Alchemy Nexis, Alchemy EcoMiners, Midas/MiDAS, DOE (Dept of Energy), DoD, RTO, NASDAQ, reverse split, tokenization, Decorus Imperium, aureus.co

---

## Changes by Page

### Navigation & Footer
**Files:** `src/components/Navigation.tsx`, `src/components/Footer.tsx`
- Removed "Technology" and "Partners" links from nav and footer
- Renamed "Assets" to "Projects"
- **Why:** Jay said technology page shouldn't be front and center (Loom 8:36-9:13), partners are all press releases (9:36-9:50), and assets should be called "Projects" (7:51)

### Sitemap
**File:** `src/app/sitemap.ts`
- Removed `/technology` route
- **Why:** Page removed from navigation per Jay's direction

---

### Homepage (`/`)
**File:** `src/app/page.tsx`
**Loom timestamps:** 0:06 — 1:59

| Section | Change | Loom Reference |
|---------|--------|----------------|
| Hero | **Kept** — "sovereign-grade mineral platform" is the right tone | 0:06 |
| Problem Statement (80%+) | **Kept** — clean, no banned terms | — |
| The Terra Thesis + Phase I/II | **Rewrote** → "What We Do" — simple description of acquiring/certifying mineral properties in AZ & NV. Removed two-phase timeline, MiDAS reference, RTO, DOE, tokenization | 0:06-0:42 ("I don't know if I would map out any of this stuff") |
| Three Pillars (Alchemy EcoMiners, Alchemy Nexis, MiDAS) | **Rewrote** → "Foundation" — Certified Reserves (no company names), Properties (AZ+NV), Governance (board). Removed all third-party company references | 0:42-1:04 ("AlchemyNexus I would take out, I would even take out Midas, any reference to Aureus") |
| By The Numbers (US$100B, ~US$750M, Aureus, 50/50) | **Replaced** → "At a Glance" — AZ+NV, QP-Governed, 5-Member Board. Removed all dollar figures and DOE/Aureus references | 1:52 ("these numbers need to come out") |
| Leadership Strip | **Cleaned** — Removed Alchemy EcoMiners link from Mark Slatten bio | 2:40 ("Leadership's fine") |
| The Aureus Company section | **Removed entirely** — parent entity section with aureus.co links and 75% ownership | 1:04 ("I would take out any reference to Aureus") |
| CTA | **Updated** — "For investor inquiries and project information" linking to /contact | — |

---

### Strategy (`/strategy`)
**File:** `src/app/strategy/page.tsx`
**Loom timestamps:** 3:12 — 5:56

| Section | Change | Loom Reference |
|---------|--------|----------------|
| Page title | **Changed** → "Our Approach" from "A Disciplined Two-Phase Strategy" | 3:12 |
| Business Model | **Simplified** — Kept ownership/execution separation concept. Removed "50/50" detail from the subtitle | 3:12 |
| Phase I steps | **Rewrote** — Removed "Transfer and vend-in from The Aureus Company" (step 01), removed "MiDAS evidence management" (step 02). Kept chain-of-title, data gathering, QP review, disclosure, operator pathway | 3:12-3:28 ("we don't need any of this Aureus information up here") |
| Key Outputs | **Removed entirely** — included "RTO close and restructure/reverse split", "MiDAS go-live", "DOE application pack" | 3:49 ("no rhyme or reason why anyone would think should be up here about an RTO, reverse split") |
| Phase II (Mine-Refine-Supply) | **Removed entirely** — DOE financing, 50/50 economics, refinery execution, tokenization | 4:31-5:04 ("this stuff is for the deck, not the webpage") |
| Supply Waterfall (DOE→DoD→Commercial) | **Removed entirely** | 5:04-5:19 ("we don't need to be portraying that") |
| Financing (Reg D, DOE $750M, public equity) | **Removed entirely** | 5:56 ("DOD financing, we don't need any of this up here") |
| CTA | **Updated** → "Our Projects" instead of "Strategic Assets" | — |

---

### Assets → Projects (`/assets`)
**File:** `src/app/assets/page.tsx`
**Loom timestamps:** 6:40 — 8:16

| Section | Change | Loom Reference |
|---------|--------|----------------|
| Page title/eyebrow | **Renamed** → "Our Projects" from "Strategic Mineral Assets" | 7:51 ("instead of assets, it should be projects") |
| Initial Footprint | **Cleaned** — Removed "Claims already controlled by The Aureus Company" and "upon transaction readiness". Present tense description of AZ/NV properties | 6:40-6:50 ("it's not an asset yet. We have to talk about the project") |
| Valuation Framework (US$100B) | **Removed entirely** — US$100B, $25B Aureus, $75B unrealized gains | 7:05 ("A hundred billion is just over the top, investors will walk away") |
| Expansion Tiers (Tier 1/2/3) | **Removed entirely** | 7:28 ("this section probably needs to get taken out") |
| Per-project placeholders | **Added** — Arizona Properties and Nevada Properties sections with TODO placeholders for geology data from Mark Slatten | 7:42 ("show what the geologist has talked about per project") |

---

### Investors (`/investors`)
**File:** `src/app/investors/page.tsx`
**Loom timestamps:** 10:08 — 10:58

| Section | Change | Loom Reference |
|---------|--------|----------------|
| Page title | **Simplified** → "Investor Relations" from "Public Markets Strategy and Investor Relations" | 10:08 |
| From RTO to NASDAQ (Canadian RTO, Post-Closing Restructure, NASDAQ Readiness) | **Removed entirely** | 10:40-10:48 ("We don't need to be talking about an RTO. No reverse takeovers.") |
| Financing Strategy (Reg D, DOE $750M, Public-Market Capital) | **Removed entirely** | 10:08 ("there's really no information you could put on your investor page") |
| Key Figures (US$100B, ~US$750M, ~US$25B, ~75%) | **Removed entirely** | 10:24 ("we don't need any of this out here") |
| NASDAQ Readiness Gate | **Removed entirely** | 10:40 |
| Contact form | **Kept** — simplified left column description | 10:08 ("this is fine for now") |

---

### About (`/about`)
**File:** `src/app/about/page.tsx`

| Section | Change | Loom Reference |
|---------|--------|----------------|
| Company Overview | **Rewrote** — Removed "spin-out of rare earth mineral assets from The Aureus Company". Now present tense: "Terra Elementis is a critical minerals company focused on rare earth elements, critical minerals, gold and silver, with properties in Arizona and Nevada." | 1:04 |
| The Terra Thesis | **Cleaned** — Removed "via MiDAS" from chain-of-custody, removed "50/50 partnership model" | — |
| Aureus Relationship | **Removed entirely** — parent entity section, aureus.co links, 75% ownership | 1:04 |
| Corporate Structure / Public-Market Pathway (RTO → NASDAQ) | **Removed entirely** | 3:49 |
| Vision | **Cleaned** — Removed "gold-anchored financial architecture", "Department of Energy, Department of Defense" references | — |

---

### Leadership (`/leadership`)
**File:** `src/app/leadership/page.tsx`
**Loom:** 2:40 ("Leadership's fine")

- Mark Slatten: Changed "Alchemy EcoMiners" to "Maverick Eco-Miners, Inc." (his actual company)
- Mark Slatten: Replaced "MiDAS mineral data and analysis platform" with "modern data management systems"
- David Crouch: Replaced "Decorus Imperium" name with generic "a private equity and advisory platform"

---

### Governance (`/governance`)
**File:** `src/app/governance/page.tsx`
**Loom:** 9:13-9:36 ("That's fine")

- QP section: Changed "Alchemy EcoMiners" to "Maverick Eco-Miners, Inc."
- QP Oversight Scope: Changed "Integration into MiDAS evidence management" to "Integration into evidence management and reporting workflows"
- Disclosure Controls: Replaced "/technology" link (MiDAS platform details) with "/strategy" link (Our approach)
- NASDAQ Readiness section: Renamed to "Compliance Readiness", removed NASDAQ/DOE references
- Audit firm: Removed "NASDAQ readiness timeline" language
- S-K 1300: Changed "Required for NASDAQ listing" to "Required for U.S. public-market listing"

---

### Contact (`/contact`)
**File:** `src/app/contact/page.tsx`

- Government & Defense: Removed "For DOE, DoD, and" — now reads "For government procurement discussions related to critical mineral supply"
- Strategic Partnerships: Removed "50/50 operator partnership model" — now reads "operator partnership opportunities"

---

### SEO & Metadata
- `src/lib/seo.ts`: Removed MiDAS from technology page description
- `src/app/strategy/head.tsx`: Updated description to remove "two-phase mine-refine-supply"
- `src/app/assets/head.tsx`: Renamed "Assets" to "Projects" in title, description, OG image, and breadcrumb
- `src/app/investors/head.tsx`: Simplified description to remove "public markets strategy"
- `src/app/technology/head.tsx`: Left as-is (page still exists but removed from nav)

---

### Pages Removed from Navigation (files kept)
- `/technology` — MiDAS/Alchemy Nexis page. Jay: "Nobody needs to really know how the sauce is made." (8:36-9:13)
- `/partners` — Alchemy Nexis, Aureus, Decorus Imperium. Jay: "We don't need any partners. They're all press releases." (9:36-9:50)

---

## Verification
- All active pages pass grep for banned terms (0 results)
- `npm run build` — clean, no TypeScript errors
- Technology and Partners pages still resolve (not deleted, just removed from nav)
