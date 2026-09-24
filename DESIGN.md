---
name: Total Cabinet Supplies
description: Bright, photo-led one-page site for custom flat pack cabinetry, modelled on luxofloors.com.au.
colors:
  bg: "#FFFFFF"
  band: "#EEF4F3"
  tint: "#E3ECEA"
  ink: "#182629"
  muted: "#51615F"
  dark: "#1C2A2D"
  muted-dark: "#A9B8B6"
  accent: "#3B7383"
  accent-deep: "#2F5E6B"
  rule: "#DCE5E3"
typography:
  display:
    fontFamily: "'Work Sans Variable', sans-serif"
    fontSize: "clamp(2.1rem, 4.4vw, 3.4rem)"
    fontWeight: 300
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  body:
    fontFamily: "'Work Sans Variable', sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  card: "16px"
  pill: "999px"
  footer: "32px"
components:
  button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.bg}"
    rounded: "{rounded.pill}"
    padding: "13px 20px"
  button-white:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "13px 20px"
---

# Design System: Total Cabinet Supplies

Supersedes the Warm Stone system. Structure modelled on luxofloors.com.au at the client's request; the accent is TCS's own, drawn from the logo navy.

## Overview

White and airy, led by a few very large photographs rather than many small ones. The opposite of Flatpax's black-and-red catalogue. Section rhythm: full-bleed photo, white, full-bleed photo columns, pale band, white, full-bleed photo, pale band, white, pale band, dark footer.

## Colors

White carries the page, a pale cool band separates sections, ink carries text, slate teal is the only accent (buttons, the fixed header tab, step numbers). Lowest measured text contrast passes AA.

## Typography

Work Sans Variable only. Headlines pair a 300 line with a 600 line. One large 500-weight manifesto paragraph. Tabular figures site-wide.

## Imagery

- Photos from the client archive at native resolution, never upscaled; provenance embedded in each file.
- White text over a photo sits on a neutral near-black scrim (`rgb(15 17 17)`), and every photo container has a dark background fallback so text survives a failed image load.

## Shapes

Full pill buttons with a trailing dot. 16px cards. Logo sits in a white tab (bottom-right radius 24px) because the mark only works on light grounds; the menu tab mirrors it on the right. Footer has a 32px arched top.

## Do's and Don'ts

- Do keep photos few and large.
- Don't use Inter, Roboto or system fonts; purple or blue gradient backgrounds; cards inside cards; grey body text on coloured grounds; bouncing motion.
- Don't place the logo directly on a photo or dark ground.
- Don't show supplier logos until permission is confirmed.
