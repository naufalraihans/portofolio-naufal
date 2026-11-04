---
version: alpha
name: "Fashion brand template by 8B"
description: "Fashion label one-pager in white and ink with five loud season colour bands, a giant two-line title and a portrait panel that acts as a lens. Free HTML template by 8B, MIT."
colors:
  primary: "#111111"
  secondary: "#555555"
  tertiary: "#d92b1a"
  neutral: "#f2f2f2"
  surface: "#ffffff"
  on-surface: "#111111"
  mid-grey: "#767676"
  light-grey: "#a6a6a6"
  hairline: "#e6e6e6"
  band-red: "#d92b1a"
  band-yellow: "#f2b705"
  band-blue: "#1f4fd6"
  band-pink: "#f4a3c4"
  band-ice: "#a9d8ec"
typography:
  headline-display:
    fontFamily: Schibsted Grotesk
    fontSize: 215px
    fontWeight: 900
    lineHeight: 0.84
    letterSpacing: -0.035em
  headline-band:
    fontFamily: Schibsted Grotesk
    fontSize: 200px
    fontWeight: 800
    lineHeight: 0.82
  headline-city:
    fontFamily: Schibsted Grotesk
    fontSize: 104px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: -0.03em
  headline-statement:
    fontFamily: Schibsted Grotesk
    fontSize: 46px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -0.01em
  headline-quote:
    fontFamily: Schibsted Grotesk
    fontSize: 34px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.015em
  body-md:
    fontFamily: Host Grotesk
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.55
  body-sm:
    fontFamily: Host Grotesk
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.55
  label-md:
    fontFamily: Host Grotesk
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.45
    letterSpacing: 0.05em
  button:
    fontFamily: Host Grotesk
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1
  button-sm:
    fontFamily: Host Grotesk
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1
rounded:
  none: 0px
  thumb: 14px
  full: 999px
spacing:
  gutter: 34px
  nav-height: 72px
  look-gap: 16px
  section-padding: 120px
  field-height: 46px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: 0 22px
    height: 44px
  button-light:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.full}"
    padding: 0 18px
    height: 40px
  icon-button:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    height: 40px
  badge-stock:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    rounded: "{rounded.full}"
    padding: 0 12px
    height: 26px
  input-field:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    height: 46px
  card-look:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.none}"
    padding: 0
  band-colour:
    backgroundColor: "{colors.band-red}"
    textColor: "{colors.surface}"
    typography: "{typography.headline-band}"
    rounded: "{rounded.none}"
    padding: 28px 34px 36px
---

## Overview

This is a one-page site for a clothing label that sells one seasonal collection and runs a few stores. The one idea is colour on a quiet frame: the page is white and ink, with hairlines and huge type, and the only loud thing is the set of five season colours that arrive as full-width bands. A tall portrait panel stands in front of the title and later behaves as a lens. The feeling is an editorial lookbook that is confident and a little playful. It is for independent labels, outerwear makers and boutiques that want a showcase more than a catalogue.

## Colors

White and ink carry the page; greys give hierarchy; five season colours exist only as the palette bands, plus the blue behind the arrivals photo.

- **Primary (#111111):** text, primary buttons, the nav badge, the black edit and footer sections, the menu sheet and the lit store row.
- **Surface (#ffffff):** page ground, text on black sections, and the outline strokes of the lens copies.
- **Secondary (#555555):** small body text, FAQ answers, the quote attribution.
- **Mid grey (#767676):** the grey that statements fill from, the giant word Colour, inactive index rows, the brand row and the hairlines in the FAQ and footer.
- **Light grey (#a6a6a6):** small text on black: edit caption, footer legal line, a lit store's address.
- **Neutral (#f2f2f2):** icon buttons, the FAQ ground, photo placeholders, the start of the quote gradient.
- **Hairline (#e6e6e6):** nav border, the first-screen grid, studio fact rules, store dividers.
- **Band colours:** red #d92b1a and blue #1f4fd6 carry white text; yellow #f2b705, pink #f4a3c4 and ice blue #a9d8ec carry ink text. The blue also sits behind the arrivals photo. Do not use these as page backgrounds elsewhere.

## Typography

Two grotesks. Schibsted Grotesk does the shouting: weight 900 uppercase for the giant title (about 215px on a 1440 by 900 screen, sized from the stage height and the word's character count), 800 for the brand row and colour band names, 900 again for the footer wordmark, 600 uppercase for statements (24px to 46px), 700 sentence case for the quote and subheads, and 500 uppercase for store cities. Host Grotesk is the quiet voice: 15px regular body, 13px secondary text, and 12px semibold uppercase labels with 0.05em tracking. Large words are sized from a `--len` custom property that holds their character count, so type always fills the width.

## Layout

The page is full bleed with a gutter of 34px at most (16px to 34px, fluid). The fixed nav bar is 72px tall (64px on phones). The first screen is a white stage cut by four hairlines, with a two-line title, the portrait panel and corner captions; the second screen holds the brand statement over a brand row and two stacked photos. The edit is a black section with four looks in a row. Index rows are staggered by indents. Sections alternate white, black, grey and colour. Below 760px the nav links move into a full-screen menu, looks sit two to a row, vertical hairlines disappear and colour bands grow shorter.

## Elevation & Depth

Depth comes from overlap, not shadow. The portrait panel sits over the title, the index preview floats over the rows, and the looks overlap the giant word behind them. Photos carry one soft shadow (0 34px 60px -24px, ink at 45%) in most places. Colour bands stick and shrink to read as stacked layers.

## Shapes

Corners are square. The only radii are 14px on the first-screen thumbnail and fully round buttons, icon buttons and the stock badge. Photos are 4:5 portraits, square notebook shots or wide crops. Hairlines (1px) and thin 1.5px field underlines do the drawing; the small spinning burst beside the quote is the one decorative drawn mark.

## Components

- **button-primary:** ink pill, 44px, white label; on hover the fill wipes away to the right and the label turns ink.
- **button-light:** white pill, 40px, ink label, for black sections (Add to bag, Sign up).
- **icon-button:** 40px light grey circle that fills with ink on hover.
- **badge-stock:** small ink pill reading the stock count.
- **input-field:** no box, only a 1.5px bottom line, 46px high, uppercase labels above.
- **card-look:** photo, name and price on one line, then an Add to bag button.
- **band-colour:** full-width block at least 70% of the screen high, tag at the top, giant name and a short note at the bottom.

## Motion

The page loads no animation library. Scroll motion is CSS scroll-driven animations (`animation-timeline` with named view timelines), written per section in `<style data-8b-part="scene:...">` blocks; the lens is two registered custom properties animated on the opening, which the panel and the outline copies' clip paths both read. A small inline motion kit at the end of the body measures distances into CSS variables, splits the filling statements into words, adds `is-in` to `data-8b-motion` elements as they arrive, steps the index and the store bar, cuts the arrivals photo into strips, pauses endless loops off screen and smooths the mouse wheel (fine pointers only; touch scrolls natively). A gate script in the head sets `data-8b-live` on the root only when the browser supports `animation-timeline` and the visitor has no reduced-motion preference; every scroll rule is scoped to it. The one motion idea is the lens: the portrait panel travels down through the title, and where it passes each letter turns into a white outline, then it lands on the photo stack of the second screen. Around that idea:

- **Opening:** on load the title rises and side captions fade up; the thumbnail sways and the portrait pans on slow loops that pause off screen. On scroll the title lines part, the panel moves, shrinks and tilts, and the statement fills from grey to ink word by word.
- **Collections:** the four looks start as a tilted pile and deal out as the giant word rises.
- **Index:** a tilted photo wipes in beside the active row, by scroll or by pointer.
- **Voice and studio:** photos slide up from a tilt into place and the text fills word by word; hairlines draw above studio facts.
- **Arrivals:** the wide photo is five vertical strips (three on phones) that slide into line.
- **Palette:** bands stick, shrink to 88% and let their name drift up.
- **Notebook:** six photos rise from different depths while the heading thickens from 400 to 900.
- **Contact:** a black bar lights each store row in turn.

With reduced motion, and in browsers without CSS scroll-driven animations (Firefox today), `data-8b-live` is not set: the smooth wheel and every scroll effect are off, scrolling is the browser's own, and each section shows its finished layout: the panel over the title with no lens, the looks in their row, the first index row lit with its photo, the arrivals photo whole, the bands in plain flow, statements in ink. The opening load-in, the thumbnail sway, the portrait pan and the burst's spin are CSS keyframes under `prefers-reduced-motion: no-preference`, so they still play in Firefox and stop with reduced motion. Hover fills and the nav hiding on scroll keep running in both cases. Easings are cubic-bezier and `linear()` copies of power curves; scroll effects follow the scroll directly, and the wheel smoothing gives them their glide. The five bands and the six notebook photos are fixed counts in the CSS (`data-8b-fixed`).

## Do's and Don'ts

- Do keep the frame white and ink and let colour live in the five bands.
- Do size every giant word from its `--len` and update it when the text changes.
- Do keep the outline copy of the title and brand row in step with the visible one.
- Do keep photos full of real colour, in the crop each section uses (4:5 looks, square notebook shots, the wide arrivals photo).
- Don't add rounded cards, new gradients or drop shadows on text.
- Don't introduce a third typeface or italics.
- Don't use the band colours as page backgrounds outside the palette section.
- Don't add motion that fights the lens: one big idea per screen.
- Don't remove the hairlines; they hold the first screen together.
