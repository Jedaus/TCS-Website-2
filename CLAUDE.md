# Total Cabinet Supplies (TCS) — Website Project Context & Guide for Claude Code

This file serves as the primary system prompt and context document for building and modifying the Total Cabinet Supplies (TCS) website using Claude Code.

---

## 1. Business Overview & Positioning

- **Company**: Total Cabinet Supplies (TCS)
- **Location**: 68 Compton Rd, Woodridge QLD, Australia
- **Phone**: 07 3299 1978 | **Email**: totalcabinetsupplies@gmail.com
- **Core Business**: Custom flat pack cabinetry & trade supplies manufacturer.
- **Operating Boundary**: **TCS supplies and manufactures; it does NOT install.**
- **Platform Partnership**: Integrated with **goCabinets** (white-labeled ordering & 3D cloud system).

---

## 2. Target Audience (Dual-Track Approach)

1. **Trade Customers (Builders, Carpenters, Cabinet Installers)**:
   - Need speed, precision, zero site recutting, and reliable local supply.
   - Benefit: Save carpentry hours, preserve margin, 24/7 online ordering via goCabinets.
2. **Homeowners & Renovators (Kitchen / Wardrobe / Vanity Renovations)**:
   - Need high-end custom cabinetry without traditional joinery markups.
   - Benefit: Millimetre-perfect fit (no awkward filler panels), Australian-made board durability, easy 3D planning.

---

## 3. Core Differentiators & Brand Narrative

### A. Why TCS Beats Big-Box (IKEA / Bunnings Kaboodle)
1. **Millimetre-Precision (No Awkward Fillers)**: Custom cut to exact ceiling/wall dimensions, not locked into 300/600/900mm modular limits.
2. **100% Australian Made Certified Boards**: High-density Australian boards with optional HMR (High Moisture Resistant) specifications for kitchens/bathrooms, paired with Blum Austrian hardware.
3. **Local Woodridge Factory Advantage**: If a site measurement changes or a panel needs adjustment, TCS provides **same-day / next-day rapid remakes** right here in Brisbane, avoiding 3–4 week delays.

### B. Competitive Contrast (vs Flatpax Cut To Size)
- **Flatpax**: Heavy, cold all-black background, 20+ cluttered submenus, factory catalog overload.
- **TCS**: **Bright, airy, photo-led, generous whitespace, clear intuitive pathways, and modern digital ease.**

---

## 4. Visual Design System & Aesthetics (Modelled on Luxo Floors)

**Reference**: [LUXO Floors (luxofloors.com.au)](https://luxofloors.com.au/) — bright, airy, photo-led; the deliberate opposite of Flatpax's black-and-red catalogue.

### A. Color Palette — White & Slate Teal
- **Base (Background)**: `#FFFFFF`
- **Pale Band (Alternating sections)**: `#EEF4F3`, tint `#E3ECEA`
- **Ink (Text & Headings)**: `#182629`; muted text `#51615F`
- **Dark Slate (Trade section fallback & Footer)**: `#1C2A2D`
- **Slate Teal Accent (Buttons, header tab)**: `#3B7383` (deep `#2F5E6B`). Drawn from the TCS logo navy; Luxo's own `#5A97A5` fails AA with white text (3.28:1), this passes (5.30:1).
- **Border Rules**: `#DCE5E3`

### B. Typography & Hierarchy
- **Font**: Work Sans (self-hosted variable). No Inter, Roboto or system fonts.
- **Editorial Dual-Weight Headlines**: a 300 weight line and a 600 weight line in the same heading.
- **Manifesto**: one large medium-weight statement paragraph, no image.
- Tabular lining figures for dimensions.

### C. Imagery, Spacing & Shapes
- **Few photos, shown big**: full-viewport hero photo with the headline over it; three full-height photo columns; one full-bleed trade photo. No dense grids.
- White text over photos sits on a neutral near-black scrim (never a coloured gradient), with a dark background fallback behind every photo.
- Use archive photos at native resolution only; never upscale (most originals are 960×540).
- **Section padding**: `88px – 144px`.
- **Buttons**: small full pills with a trailing dot (`Request a Quote •`), white / teal / outline.
- **Header**: white logo tab top-left over the hero; fixed teal tab top-right with Trade Login and a menu.
- **Cards**: 16px radius. **Footer**: dark slate with a 32px arched top.

---

## 5. Website Architecture: One-Page Seamless Experience

The site is built as a cohesive, high-converting one-page experience with smooth anchor transitions:

```
[Sticky Floating Pill Header]
      ↓
[1. Hero Section] — Full-viewport photo, dual-weight headline over it, primary CTAs
      ↓
[1b. Manifesto] — One large statement paragraph
      ↓
[2. Visual Portfolio Showcase] — Three full-height photo columns (Kitchens, Wardrobes, Vanities)
      ↓
[3. Interactive 3D Planning] — goCabinets 3D launch button + YouTube Video Tutorial Modal
      ↓
[4. Why Custom Flat Pack Beats Big-Box] — 3 ruled columns (Precision, Aussie Boards, Local Speed)
      ↓
[5. The Builder's Advantage (For Trade)] — Rapid local remake backup + 24/7 goCabinets ordering
      ↓
[6. Premium Materials & Brands] — Polytec, Laminex, Blum, Australian Made certified
      ↓
[7. Quick Project Quote / Plan Submission] — Streamlined inquiry form for sketches/drawings
      ↓
[8. Woodridge Workshop & Dark Espresso Footer] — Address, map link, direct phone, Trade Login
```

---

## 6. Key Interactive Features & CTAs

1. **`[Trade Login ↗]` Button**: Prominent in the header and trade section. Links directly to the white-labeled goCabinets ordering portal with TCS branding.
2. **`[Watch 3D Tutorial Video ▶]`**: Opens a sleek modal popup with a YouTube guide explaining how easy it is to use the 3D cabinet planner.
3. **`[Launch 3D Planner ↗]`**: Direct entry point for homeowners and builders to start 3D room planning.
4. **`[Request a Quote •]`**: Direct jump to the quick plan upload / inquiry section.

---

## 7. Technical Architecture (Astro + Vanilla CSS)

- **Framework**: Astro (Zero JS by default, instant loading, first-class SEO).
- **Styling**: Vanilla CSS with comprehensive CSS custom properties (`/src/styles/tokens.css`).
- **Components Structure**:
  - `Header.astro` (Logo tab + fixed teal tab with Trade Login and popover menu)
  - `Hero.astro` (Full-viewport photo hero)
  - `Manifesto.astro` (Large statement paragraph)
  - `Showcase.astro` (Three full-height photo columns)
  - `Planner3D.astro` (goCabinets integration & YouTube video modal)
  - `Comparison.astro` (TCS vs Big-Box 3-column layout)
  - `TradeAdvantage.astro` (Builder-centric speed and portal benefits)
  - `QuoteForm.astro` (Clean responsive inquiry form)
  - `Materials.astro`, `FAQ.astro`
  - `Footer.astro` (32px arched dark slate footer)
## 8. Operational Policies & Practical Guidelines

### A. Installation Policy (Supply Only + Trade Network Referral)
- **TCS manufactures and supplies only; it does not install.**
- **Safe Handling**: To avoid liability while assisting homeowners, the site states:
  > *"TCS is a supply-and-manufacture specialist. For customers requiring professional installation, we connect you with our network of vetted, trusted Brisbane local trade carpenters and cabinet installers."*

### B. Pickup & Delivery Specifications
- **Factory Pickup (Woodridge)**:
  - Small individual modules can fit in large SUVs.
  - Standard flat pack kits contain panels up to **2,400mm in length**.
  - **Required/Recommended Vehicle**: UTE, van, or trailer with a minimum flat cargo length of **2,400mm (2.4m)**.
- **Site Delivery**:
  - Available across Greater Brisbane, Logan, Gold Coast, and surrounding SE Queensland via dedicated logistics transport partners.
  - Delivery fee is calculated transparently based on distance from the Woodridge factory and total pack volume.

### C. Woodridge Selection Centre (Showroom & Samples)
- Real display counters and material samples (Polytec, Laminex finish chips, Blum hardware mechanics) are available on site.
- Callout: **`Visit Our Woodridge Selection Centre — Walk-ins Welcome`** (68 Compton Rd, Woodridge QLD).

---

## 9. Top 10 High-Conversion FAQs for Flat Pack Cabinetry

1. **Can I get a quote with hand-drawn sketches instead of architectural drawings?**  
   *Yes. Send your rough dimensions or bring them to our Woodridge counter. We convert them into exact 3D models and quotes via goCabinets.*
2. **What is the typical turnaround (lead time) for an order?**  
   *Typically 5–10 business days from specification confirmation. Urgent site jobs can be expedited thanks to our local manufacturing.*
3. **How does TCS flat pack differ from modular big-box stores (IKEA / Kaboodle)?**  
   *Big-box stores use fixed 300/600/900mm modules that require filler strips. TCS offers 100% millimetre-exact custom sizing with premium Australian boards and Blum hardware.*
4. **Do you provide cabinet installation?**  
   *We are supply-only specialists. We gladly refer trusted, verified local carpenters and installers across Brisbane for professional installation.*
5. **Is HMR (High Moisture Resistant) board standard for all cabinets?**  
   *HMR is an available premium specification option tailored to kitchens, laundries, and wet areas. Customers can choose standard or HMR depending on project requirements.*
6. **Can I order doors, benchtops, and hardware together?**  
   *Yes. We supply Polytec & Laminex doors, laminate benchtops, Blum hinges/runners, and consumables (silicone, screws) all from one counter.*
7. **Can homeowners use the goCabinets 3D planner easily?**  
   *Yes. It offers an intuitive 3D drag-and-drop interface, accompanied by our step-by-step 3-minute video tutorial guide.*
8. **What vehicle is required for factory pickup?**  
   *For standard flat packs, a UTE, enclosed van, or trailer with at least 2,400mm (2.4m) cargo bed length is recommended.*
9. **Do you deliver to job sites, and how are shipping fees calculated?**  
   *Yes, via trusted logistics partners across SE Queensland. Rates are calculated based on travel distance from Woodridge and cargo volume.*
10. **What happens if site measurements change or a panel needs remaking?**  
    *Our key local advantage: instead of waiting 3–4 weeks for interstate or overseas shipments, we provide same-day or next-day rapid remakes at our Woodridge workshop.*

