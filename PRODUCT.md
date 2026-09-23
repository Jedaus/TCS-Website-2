# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: Astro, with React islands available where interactivity is genuinely needed.

Chosen because the confirmed scope is a content-and-evidence site (products, materials, brands, 138 real installation photos, how to order, contact) with no live transactional features today. Astro ships zero JavaScript by default, which matters because the primary user is a builder opening the site on a phone, often on site; it has first-class image optimization, which the 138-photo library needs; and it can absorb React components later without a rewrite when trade login and online ordering are built. A React SPA would carry a heavier runtime and weaker image and indexing behavior for what is presently a mostly-static site.

## Users

Primary: **builders and cabinet installers (trade customers).** They order to a job's drawings and quantities, repeatedly, and they compare on specification, availability, lead time, and price rather than on presentation. They frequently look things up mid-job, on a phone.

Secondary, and confirmed to exist but not the design priority: retail walk-in customers renovating a kitchen, who arrive by phone, email, or by visiting the counter.

## Product Purpose

Total Cabinet Supplies (TCS) supplies cabinetry and cabinetmaking materials from its Woodridge, QLD premises: cabinets made to order, boards and panels, doors, benchtops, and hardware. The website's job is to let a trade customer establish what TCS can supply, to what specification, and then reach TCS to get a quote or place an order.

Success is a trade customer arriving with enough confidence and enough specification detail that the phone call, email, or counter visit starts further along.

## Positioning

TCS both stocks the materials and makes the cabinets to order from the same premises, supplying trade and retail from one counter, with pickup or site delivery in the Brisbane area. **TCS supplies and manufactures; it does not install.** That boundary is a real operating fact and must never be blurred by the site.

**Strategic focus: flat pack.** TCS is concentrating its future on flat pack supply — cabinetry delivered as a pre-cut, pre-drilled, labelled kit that a builder or tradesperson assembles on site. This is the offer the site leads with, and it is why the trade audience is the primary one: the kit exists so a builder does not need a cabinetmaker. What the kit must prove is completeness and precision — right parts, right holes, nothing missing, on the promised day.

## Operating Context

- Physical counter/showroom and workshop at 68 Compton Rd, Woodridge QLD.
- Orders arrive four ways: walk-in at the counter, phone, email, and web enquiry.
- Cin7 runs stock, POS, purchase orders, sales orders, and stocktake. It is the internal system of record; the website is not currently connected to it.
- Fulfilment is factory pickup or site delivery; deliveries in the Brisbane area are run through third-party movers.
- Customers pay before collecting cabinets or goods from the counter.
- Internal order handling uses a separate orders mailbox; the public-facing address is the one under Evidence on Hand.

## Capabilities and Constraints

**Real today**
- Made-to-order cabinets, including flat pack.
- Supply of boards and panels, doors, benchtops, cabinet hardware (hinges, drawer kits), silicone, and waste bins.
- Quoting by phone, email, or counter visit.
- Factory pickup and site delivery.

**Explicitly not real today — the site must not imply otherwise**
- Trade account login on the website.
- Online ordering or checkout.
- Automated quote or cabinet-cost calculators.

These three are planned for the future. The site may be structured so they have a place to land later, but no current page may promise, imply, or simulate them.

**Hard constraint**
- No installation service. Enquiries needing installation are supply-only from TCS's side.

## Brand Commitments

- Name: Total Cabinet Supplies, abbreviated TCS.
- Supplier and product brands associated with the business, recorded from the previous site's assets and internal records: Polytec, Laminex, Blum, Nikpol, Nightingale, Flexi Panel. Permission to display these brands' logos is **not confirmed** and must be checked before any logo is published.
- No other voice, logo, colour, or identity commitment has been established. Visual identity is deliberately open and belongs to later design work, not to this record.

## Evidence on Hand

**Real and cleared for public use**
- 138 installation photographs of completed TCS work, at `~/Desktop/TCS-Website-1.0.0/Total Cabinet supplies 시공 사진 모음`. The user has confirmed all 138 may be published.
- Contact facts, confirmed correct: phone **07 3299 1978**, email **totalcabinetsupplies@gmail.com**, address **68 Compton Rd, Woodridge QLD**.
- A previous website exists at `~/Desktop/TCS-Website-1.0.0` (Vite + React + Tailwind, named "tcs-partner-portal"). It is superseded. Treat it as evidence of prior intent, not as approved content.

**Absent — must not be invented**
- No ABN has been provided. Do not publish one. The previous site contained the placeholder `ABN: 12 345 678 901`, which is fabricated.
- The previous site also contained fabricated contact placeholders `accounts@trade.com.au` and `contractor@trade.com.au`. Neither is real.
- No testimonials, customer names, case studies, press coverage, review scores, customer counts, years-in-business figures, delivery-time guarantees, certifications, or published price lists have been confirmed. None may be created.

## Product Principles

1. **Trade first.** Every page earns its place by answering a builder's question: what can I get, to what spec, when can I have it, and how do I ask for it.
2. **Never fabricate.** Only confirmed facts ship. Where a fact is missing, the site says less rather than inventing more — the previous site's placeholder ABN is the failure to avoid.
3. **Supply and manufacture, not installation.** Nothing on the site may suggest TCS installs.
4. **Show real work.** The 138 photographs of actual TCS jobs, and real supplier brands, carry the credibility. No stock imagery standing in for work TCS did.
5. **Don't promise what doesn't exist yet.** Login, online ordering, and quote calculators are future. Today the site routes to phone, email, or the counter, without dressing that up as something more automated.
