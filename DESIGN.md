---
name: Total Cabinet Supplies
description: Warm, editorial one-page site for custom flat pack cabinetry.
colors:
  canvas: "#FAF8F5"
  canvas-2: "#F5F2EC"
  white: "#FFFFFF"
  sand: "#EFECE5"
  sand-2: "#E8E3DA"
  espresso: "#1A1917"
  espresso-2: "#22201D"
  muted: "#5C5750"
  muted-dark: "#B9B2A6"
  sage: "#4E6B5B"
  sage-deep: "#3F5849"
  rule: "#E5E0D8"
typography:
  display:
    fontFamily: "'Archivo Variable', sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 4rem)"
    fontWeight: 300
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  body:
    fontFamily: "'Archivo Variable', sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  card: "16px"
  pill: "4px 22px 22px 22px"
  footer: "32px"
components:
  button-primary:
    backgroundColor: "{colors.espresso}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.pill}"
    padding: "16px 26px"
  button-accent:
    backgroundColor: "{colors.sage}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "16px 26px"
---

# Design System: Total Cabinet Supplies

Supersedes the earlier two-ink trade catalogue system. Direction is client-pinned in `CLAUDE.md` §4 (Warm Stone & Sand, inspired by luxofloors.com.au).

## Overview

Warm alabaster canvas, generous whitespace, editorial dual-weight headlines, and real job photography in a few curated places rather than dense grids. A deliberate contrast to Flatpax's dark, cluttered catalogue.

## Colors

Canvas and sand carry the page; espresso carries text, the trade section and the footer; sage is the single accent for primary actions and small markers. All text pairs meet WCAG AA (lowest measured 4.97:1).

## Typography

Archivo Variable only, self-hosted. Headlines pair a 300 weight line with a 700 weight line in the same heading (`.dual` with `<b>`). Tabular lining figures site-wide for dimensions.

## Layout

Sections breathe at `clamp(88px, 11vw, 140px)`. Split layouts (copy + visual) collapse to one column under 900px. Max content width 1280px.

## Shapes

Cards 16px radius. Buttons use the asymmetric pill `4px 22px 22px 22px`. Footer has a 32px arched top. The hero photo takes a large 120px lower-left curve.

## Components

Floating glass pill header (sticky, blur, soft shadow, no border). Showcase tabs as a segmented control. Tutorial video in a native `<dialog>`. FAQ with native `<details>`.

## Do's and Don'ts

- Do keep photography sparse: one hero image, three cards per showcase tab.
- Do keep the logo on light grounds only, with `mix-blend-mode: multiply`.
- Don't use Inter, Roboto or system fonts; gradient backgrounds; cards inside cards; grey body text on coloured grounds; bouncing motion.
- Don't show supplier logos until permission is confirmed.
