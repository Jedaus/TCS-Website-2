---
name: Total Cabinet Supplies
description: A two-ink trade supply catalogue for builders buying flat pack cabinetry.
colors:
  primary: "#0F5C33"
  primary-deep: "#0B4527"
  stock: "#EDEFE9"
  stock-rule: "#D5D9D0"
  press-black: "#151A17"
  press-black-tint: "#42544A"
  paper: "#FFFFFF"
typography:
  display:
    fontFamily: "'Archivo Variable', Archivo, sans-serif"
    fontSize: "clamp(3.75rem, 11.5vw, 9.5rem)"
    fontWeight: 800
    lineHeight: 0.86
    letterSpacing: "-0.03em"
  heading:
    fontFamily: "'Archivo Variable', Archivo, sans-serif"
    fontSize: "clamp(1.75rem, 3.4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  body:
    fontFamily: "'Atkinson Hyperlegible Next', 'Atkinson Hyperlegible', sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  spec:
    fontFamily: "'Atkinson Hyperlegible Next', 'Atkinson Hyperlegible', sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "0.01em"
rounded:
  none: "0px"
  sm: "2px"
spacing:
  hole: "8px"
  module: "32px"
  bay: "64px"
  run: "128px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.stock}"
    rounded: "{rounded.none}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.stock}"
  button-secondary:
    backgroundColor: "{colors.stock}"
    textColor: "{colors.press-black}"
    rounded: "{rounded.none}"
    padding: "16px 32px"
---

# Design System: Total Cabinet Supplies

## Overview

**The world: a two-ink Australian trade supply catalogue.** Before the web, a builder bought cabinetry hardware out of a printed supplier catalogue — uncoated stock, exactly two inks, ruled tables, index tabs down the fore-edge, part numbers in tabular figures, and a line drawing wherever a photograph would have lied about the spec. That object is the visual world for TCS, because it is the object this audience's trade actually came from, and because it is built to do the one thing a flat pack kit has to prove: that the list is complete and every number on it is right.

The thesis this system owns: **the kit is the argument.** A flat pack cabinet is a claim about precision — right parts, right holes, nothing missing, on the promised day. So the surface is organised as a catalogue proves things, with parts, dimensions, and quantities as the primary content, not as fine print under a photograph.

What it refuses: the arrangement this category always ships — a dark hero photograph of a finished luxury kitchen, warm timber and gold, a craftsmanship line, and a quote form. That page sells an installed kitchen. TCS does not install; it supplies the kit. The page has to look like the thing that arrives on the truck.

Four disciplines were taken from directions that lost, and each is binding:

- **Type as matter.** A part number or kit name may be set at poster scale as structural mass, not kept at polite catalogue size. Numbers are allowed to be the biggest thing on the screen.
- **Grid as law.** Every rule, column, and row snaps to one module, nothing off-grid — the way a System 32 carcass is drilled. The spacing scale below is named for that system on purpose.
- **Quantity as an object.** Dimensions and counts sit in fixed decimal positions in tabular figures, at a size you can read at arm's length. A measurement never dissolves into a sentence.
- **Face-out promotion.** From a dense list of rows, a selected item turns face-out at full scale. Products are not pre-flattened into a grid of equal cards.

## Colors

Strategy: **Committed** — one colour carries whole regions of the surface, 30–60% of it, rather than being sprinkled as an accent. Two inks and a stock, the way the catalogue was actually printed.

Light ground is not a category default here; it is forced by the scene. The primary reader is a builder outdoors in Queensland sun, holding a phone, or standing at the Woodridge counter under fluorescent light. A dark ground loses that fight.

### Primary

- `primary` **#0F5C33 — HMR Green.** The board industry dyes moisture-resistant particleboard green so anyone can identify the spec on sight; taking the brand colour from that dye makes the colour a fact about the product rather than a mood, and it is the one colour this category's luxury-timber palettes never touch. Deepened from the literal dye until it holds white text at field scale (8.08:1) and still reads as text on the stock (6.97:1).
- `primary-deep` **#0B4527** — pressed state and the second ink's own shadow. Never a gradient partner.

### Neutral

- `stock` **#EDEFE9 — Stock.** The cool grey-green of uncoated trade catalogue paper. Chosen light for the sun-and-phone reading scene, and deliberately *not* cream: warm cream ground is where both this category and machine-generated pages land, and it is off the table for that reason alone.
- `press-black` **#151A17 — Press Black.** Letterpress ink is never pure black. A near-black carrying the green ink's cast keeps the two-ink discipline honest and sits at 15.2:1 on the stock.
- `press-black-tint` **#42544A** — secondary text, tinted from the ink's own hue rather than greyed out (6.97:1 on stock).
- `stock-rule` **#D5D9D0** — hairline table rules and column dividers.
- `paper` **#FFFFFF** — reserved for text and figures sitting on a full green field.

### Named Rules

- Two inks only. Green and press-black. A third hue entering the palette is a change to this file, not a local decision.
- Green owns regions, not decorations: whole bands, whole table headers, whole index tabs. A green 1px accent line on a neutral card is the wrong use of it.
- Never place green on press-black or press-black on green; the two inks meet across the stock, not on top of each other.
- **The logo is the one sanctioned exception.** The TCS QLD mark carries its own navy, red and yellow, and ships unaltered — it is a real brand asset and outranks the two-ink rule. Those three colours stay inside the mark: none of them may be sampled out for type, rules, bands, buttons or any other element.

### The logo

`public/tcs-logo.png` is the supplied mark, trimmed to its ink and sized for the web; `public/tcs-logo-original.jpg` is the untouched 1652 x 981 source at 300 dpi, kept for print and future crops.

The mark ships on a white ground, so it is placed on a light surface with `mix-blend-mode: multiply`, which drops that white into the stock without keying the edges. It must never sit on the green field, where its near-black letterforms lose contrast. This is why the masthead is stock rather than green, with a 6px green trim band above it holding the page's top edge.

## Typography

Two faces, each chosen for a different job: one comes from the world, one from the reading conditions.

- **Display / headings — Archivo Variable** (self-hosted via Fontsource, `wdth` axis 62–125% and `wght` 100–900; used at `font-stretch` 66–82% and weights 600–800). Archivo was drawn after the grotesques used in commercial print — price lists, forms, catalogues — which is exactly the object this system is built from, so the headline voice is native to the world rather than borrowed into it. Its width axis is what makes the "type as matter" rule buildable: a part number can go monumental without turning into a poster cliché.
- **Body / specification — Atkinson Hyperlegible Next.** Chosen from the scene rather than the mood board: it was designed for unambiguous reading in poor conditions, which is what a phone screen in direct sun, held by someone with dusty hands, actually is. Its disambiguated `1 / l / I` and `0 / O` matter more than usual here, because this content is part numbers and millimetre dimensions where a misread character is a wrong order.

Both are self-hosted, not linked from a font CDN. Inter, Roboto, and platform system stacks are excluded from this system.

### Hierarchy

- `display` — the one monumental element per viewport: a kit name, a part number, a count. Never more than one.
- `heading` — section and table headings, condensed, sentence case.
- `body` — running prose, measure held to 65–75 characters.
- `spec` — table cells, dimensions, part numbers, quantities. **Always tabular lining figures** (`font-variant-numeric: tabular-nums lining-nums`); columns of numbers must align on the decimal.

### Named Rules

- No eyebrow or kicker line above a heading, ever. The heading carries itself.
- Numbers never shrink below `spec` size to fit a layout. If a table does not fit, the layout changes.

## Layout

The grid is named for the System 32 cabinet drilling standard, because that is the module the product is actually built on: `hole` 8px, `module` 32px, `bay` 64px, `run` 128px. Every rule, column edge, and block boundary lands on the `hole` unit at minimum; structural columns land on `module`. More space above a heading than below it.

## Shapes

Square. `rounded.none` is the default for every surface, control, and container; `rounded.sm` (2px) exists only where a physical printed corner would soften. The form language is ruled lines and filled bands, not rounded cards — a hairline rule is the primary divider, and a filled green band is the primary emphasis.

## Do's and Don'ts

### Do:

- Lead with the parts, dimensions, and quantities. Let the catalogue's density be the credibility.
- Use line drawings and real photographs of actual TCS work; the 138 job photographs are the evidence on hand.
- Let one number or name per viewport go monumental.
- State what is not offered as plainly as what is — TCS supplies and manufactures, and does not install.

### Don't:

These three are bans for this brand, not defaults to be argued back in.

1. **No dark hero photograph of a finished luxury kitchen** — no moody timber-and-gold interior shot with a craftsmanship line over it. It is the one page every cabinet competitor ships, so it guarantees the overlap this brand is trying to avoid, and it sells an installed kitchen, which is a service TCS does not provide.
2. **No hi-vis safety graphics** — no hazard yellow and black diagonals, no chevron stripes, no warning-sign pictograms as decoration. It is the costume every trade supplier reaches for when it has nothing specific to say; it carries a *danger* message when this brand's entire promise is that nothing will go wrong; and it fights the two-ink palette for attention.
3. **No woodgrain or marble textures as decoration** — no timber-look background panels, no stone-look section fills. TCS sells the real board and the real laminate; printing a fake of its own product as wallpaper undercuts the one thing the business is actually supplying, and it is the second-most common tell in this category after the dark kitchen hero.

Also excluded by the world, not open to local override: gradients of any kind, glass and blur effects, equal-size icon-and-text cards as page structure, and emoji standing in for an icon system.
