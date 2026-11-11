---
name: VEX portfolio and la suite flair
description: Two scoped visual worlds in one repo. The portfolio (ivory and terracotta editorial) and /flair/ (the flair apps' own dark launcher).
colors:
  # Portfolio world: index.html, privacy.html, cgu.html, src/style.css. Light theme (default).
  portfolio-ivory: "#F7F2E7"
  portfolio-cream: "#FBF8F0"
  portfolio-charcoal: "#242321"
  portfolio-charcoal-muted: "#5C5852"
  portfolio-charcoal-faded: "#8C867C"
  portfolio-terracotta: "#B87352"
  portfolio-terracotta-hover: "#9E5F43"
  portfolio-terracotta-light: "#F4EAE2"
  portfolio-terracotta-surface: "#F9F1EB"
  portfolio-beige-border: "#DED3C0"
  portfolio-beige-border-hover: "#CBB99E"
  portfolio-beige-subtle: "#EFE8DC"
  # Portfolio world, dark theme (html.dark / [data-theme="dark"]).
  portfolio-ivory-dark: "#151413"
  portfolio-cream-dark: "#1D1C1A"
  portfolio-charcoal-dark: "#EFEAE1"
  portfolio-charcoal-muted-dark: "#A39E93"
  portfolio-charcoal-faded-dark: "#757067"
  portfolio-terracotta-dark: "#C97D5C"
  portfolio-terracotta-hover-dark: "#DD8F6D"
  portfolio-beige-border-dark: "#2E2B26"
  # Flair world: flair/index.html, flair/confidentialite.html, flair/cgu.html, src/flair.css, src/flair.js. Dark only.
  flair-ground: "#121214"
  flair-raised: "#1b1b1f"
  flair-raised-2: "#222227"
  flair-line: "#2c2c32"
  flair-line-strong: "#3a3a42"
  flair-text: "#ececf0"
  flair-text-dim: "#a6a6ad"
  flair-text-faint: "#8a8a93"
  flair-orange: "#ff8a3d"
  flair-ink: "#1b120b"
  flair-cream: "#fff3e8"
  flair-shot-well: "#0e0e10"
typography:
  portfolio-display:
    fontFamily: "Cormorant Garamond, Georgia, Cambria, serif"
    fontSize: "3.75rem"
    fontWeight: 500
    lineHeight: 0.98
  portfolio-headline:
    fontFamily: "Cormorant Garamond, Georgia, Cambria, serif"
    fontSize: "3rem"
    fontWeight: 500
    lineHeight: 1.25
  portfolio-title:
    fontFamily: "Cormorant Garamond, Georgia, Cambria, serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1.33
  portfolio-body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  portfolio-label:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.4
  flair-display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 1.2rem + 1.5vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.028em"
  flair-headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(1.8rem, 1.3rem + 1.6vw, 2.6rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  flair-title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  flair-body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  flair-ui:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.6
  flair-key:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1
rounded:
  portfolio-hairline: "2px"
  portfolio-control: "3px"
  portfolio-card: "4px"
  flair-code: "4px"
  flair-key: "5px"
  flair-control: "6px"
  flair-tile: "8px"
  flair-window: "10px"
  flair-panel: "12px"
  flair-app-icon: "26%"
spacing:
  portfolio-container: "1120px"
  portfolio-gutter: "24px"
  portfolio-card-pad: "32px"
  portfolio-section: "96px"
  flair-container: "1240px"
  flair-gutter: "24px"
  flair-section: "112px"
  flair-group: "48px"
  flair-cell: "32px 40px"
  flair-row: "14px"
components:
  portfolio-button-primary:
    backgroundColor: "{colors.portfolio-terracotta}"
    textColor: "{colors.portfolio-cream}"
    rounded: "{rounded.portfolio-control}"
    padding: "12px 24px"
  portfolio-button-primary-hover:
    backgroundColor: "{colors.portfolio-terracotta-hover}"
  portfolio-button-outline:
    backgroundColor: "{colors.portfolio-cream}"
    textColor: "{colors.portfolio-charcoal}"
    rounded: "{rounded.portfolio-control}"
  portfolio-button-outline-hover:
    backgroundColor: "{colors.portfolio-terracotta-light}"
    textColor: "{colors.portfolio-terracotta}"
  portfolio-card:
    backgroundColor: "{colors.portfolio-cream}"
    rounded: "{rounded.portfolio-card}"
    padding: "{spacing.portfolio-card-pad}"
  portfolio-tag:
    backgroundColor: "{colors.portfolio-ivory}"
    textColor: "{colors.portfolio-charcoal}"
    typography: "{typography.portfolio-label}"
    rounded: "{rounded.portfolio-hairline}"
    padding: "4px 10px"
  portfolio-field:
    backgroundColor: "{colors.portfolio-cream}"
    textColor: "{colors.portfolio-charcoal}"
    rounded: "{rounded.portfolio-control}"
    padding: "12px 14px"
  flair-button-mail:
    backgroundColor: "{colors.flair-ink}"
    textColor: "{colors.flair-cream}"
    rounded: "{rounded.flair-control}"
    padding: "14px 20px"
  flair-keycap:
    backgroundColor: "{colors.flair-raised-2}"
    textColor: "{colors.flair-text}"
    typography: "{typography.flair-key}"
    rounded: "{rounded.flair-key}"
    padding: "5px 7px 4px"
  flair-launcher-tile:
    textColor: "{colors.flair-text-dim}"
    rounded: "{rounded.flair-tile}"
    padding: "10px 10px 8px"
  flair-launcher-tile-selected:
    textColor: "{colors.flair-text}"
  flair-window:
    backgroundColor: "{colors.flair-raised}"
    rounded: "{rounded.flair-window}"
  flair-window-titlebar:
    textColor: "{colors.flair-text-dim}"
    height: "38px"
    padding: "0 14px"
  flair-availability-panel:
    backgroundColor: "{colors.flair-orange}"
    textColor: "{colors.flair-ink}"
    rounded: "{rounded.flair-panel}"
    padding: "48px 56px"
  flair-inline-code:
    backgroundColor: "{colors.flair-raised}"
    textColor: "{colors.flair-cream}"
    rounded: "{rounded.flair-code}"
    padding: "1px 6px"
---

# Design System: VEX portfolio and la suite flair

## Overview

**Creative North Star: "Two Workshops, One Maker"**

This repository carries two separate visual worlds and they must never mix. Every token in the frontmatter is prefixed with the world it belongs to: `portfolio-*` or `flair-*`. A file uses only its own world's tokens.

| World | Governs | Stylesheet |
|---|---|---|
| Portfolio | `index.html`, `privacy.html`, `cgu.html`, root `public/` assets | `src/style.css` (Tailwind 4 `@theme`) with `src/main.js` |
| Flair | `flair/index.html`, `flair/confidentialite.html`, `flair/cgu.html`, `public/flair/` assets | `src/flair.css` (plain CSS custom properties) with `src/flair.js` |

**The portfolio world** is an editorial workshop: warm ivory paper, charcoal ink, a single terracotta accent, Cormorant Garamond display set large and tight over Inter body and JetBrains Mono labels. It is light by default with a full dark theme swapped through `html.dark`. Surfaces are flat cream cards with beige hairlines and corners of 2 to 4px; buttons are architectural rectangles. Depth is a whisper of ambient shadow.

**The flair world** is the flair desktop apps' own identity brought to the web: the apps' dark UI ground, raised panels and hairlines, the flair orange as the one accent, the brown ink and cream of the app logos, and the four-point spark. The page behaves like the suite's launcher: orange app icons that act as a real tablist, opening each app's real window (title bar, real screenshot, side panel with keycap shortcuts). Inter carries all UI and headings at 700 with tight negative tracking; JetBrains Mono appears only in keycaps and inline paths. It is dark only, ruled by 1px hairlines rather than cards, with corners of 4 to 12px and never pills.

**Key Characteristics:**
- Two scoped worlds; tokens never cross. Flair tokens on the portfolio, or terracotta and Cormorant on /flair/, are both errors.
- One accent per world: terracotta for the portfolio, flair orange for /flair/.
- Square-ish corners everywhere; no pill shapes in either world.
- Real artifacts over decoration: the portfolio's code window, flair's real app screenshots and real shortcuts.
- Plain copy, French UI, no em dashes in any visible text.

## Colors

The portfolio is warm paper with one earthen accent; flair is a cool near-black workspace with one hot orange accent and two logo tones.

### Primary
- **Kiln Terracotta** (portfolio-terracotta; dark theme portfolio-terracotta-dark): the portfolio's only accent. Primary buttons, link underlines, nav indicator bar, focus outline, active code-window marker. Deepens to Fired Terracotta (portfolio-terracotta-hover) on hover in light mode and lightens (portfolio-terracotta-hover-dark) in dark mode.
- **Flair Orange** (flair-orange): the flair apps' accent. The app icons themselves, the selected tile's outline, the availability panel's full-bleed ground, the status dot, the spark bullets, FAQ plus icons, the focus outline and text selection.

### Secondary
- **Logo Ink** (flair-ink): the brown ink of the flair logos. Text on orange (availability panel, selection, skip link) and the ground of the one filled button ("Me prévenir").
- **Logo Cream** (flair-cream): the logos' cream. Text on the ink button and inline code paths such as `~/.config/flair/flair.conf`.

### Neutral
- **Ivory Paper** (portfolio-ivory): portfolio page ground; tag fill.
- **Card Cream** (portfolio-cream): portfolio card, field, code window and outline button fill; text on terracotta.
- **Charcoal** (portfolio-charcoal), **Muted Charcoal** (portfolio-charcoal-muted), **Faded Charcoal** (portfolio-charcoal-faded): portfolio text tiers (headings and body, secondary copy, meta and placeholders).
- **Beige Hairline** (portfolio-beige-border), hover step (portfolio-beige-border-hover), **Beige Subtle** (portfolio-beige-subtle): portfolio borders, dividers and quiet fills.
- **Terracotta Wash** (portfolio-terracotta-light, portfolio-terracotta-surface): outline button hover fill, selection background, tinted surfaces.
- **App Ground** (flair-ground): the flair page ground, scrollbar track, and the 92% translucent sticky bar.
- **Raised Panel** (flair-raised): the app window body and inline code fill. **Raised Panel 2** (flair-raised-2): keycap fill.
- **Hairline** (flair-line): every flair divider, window border, ruled grid and FAQ rule. **Strong Hairline** (flair-line-strong): keycap border and scrollbar thumb.
- **App Text** (flair-text), **Dim Text** (flair-text-dim), **Faint Text** (flair-text-faint): flair text tiers (headings and selected states, body and nav, captions, hints, footer, `dt` labels).
- **Screenshot Well** (flair-shot-well): the darker recess behind each app screenshot inside the window.

### Named Rules
**The Scoped Palette Rule.** A token's prefix is its passport. `portfolio-*` colors appear only in files the portfolio world governs; `flair-*` colors only in /flair/ files. The two worlds share no color, even where hex values look close.

**The One Accent Rule.** Each world has exactly one chromatic accent. On /flair/, orange is a material (icons, the availability panel) and a signal (selection, focus, status), never a gradient and never a tint wash behind text. On the portfolio, terracotta marks action and focus only.

## Typography

**Portfolio Display Font:** Cormorant Garamond 500/600 (with Georgia, Cambria)
**Portfolio Body Font:** Inter 400/500/600 (with system sans)
**Portfolio Label Font:** JetBrains Mono 400/500
**Flair UI and Display Font:** Inter 400/500/600/700 (with system-ui)
**Flair Key Font:** JetBrains Mono 500

**Character:** The portfolio pairs a high-contrast serif display with a neutral sans, the voice of a careful craftsman. Flair uses one sans at heavy weight with tight tracking, like the apps' own Qt UI (they set `QFont("Inter")`), with mono reserved for things you type.

### Hierarchy (portfolio)
- **Display** (Cormorant 500, 3.75rem stepping to 4.5rem at md and 6rem at lg, line-height 0.98): the hero statement only.
- **Headline** (Cormorant 500, 2.25rem to 3rem, leading tight, 14 to 18ch max): section headings.
- **Title** (Cormorant 500, 1.5rem to 1.875rem): card and project titles.
- **Body** (Inter 400, 1.125rem, line-height 1.625, about 44ch in the hero): lead paragraphs; 0.875rem for UI and nav at 500.
- **Label** (JetBrains Mono 400, 12px): tags, code window file name, clock.

### Hierarchy (flair)
- **Display** (Inter 700, clamp 1.9rem to 2.5rem, line-height 1.1, -0.028em, 34ch max, centered): the single one-line launcher heading.
- **Headline** (Inter 700, clamp 1.8rem to 2.6rem, line-height 1.12, -0.025em, 20ch max): section titles; the availability panel and legal h1 use sibling clamps on the same pattern.
- **Title** (Inter 700, 19px, -0.01em): shared-trait headings; the window side panel's app name runs at 26px, -0.02em with its 30px icon.
- **Body** (Inter 400, 16px, line-height 1.6): base; leads and intro at 17px in Dim Text, 52 to 68ch max.
- **UI** (Inter 400 to 600, 13 to 15px): nav, tile names (600, 15px), shortcut names (600, 15px), title bar, captions, footer.
- **Key** (JetBrains Mono 500, 12px, line-height 1): keycaps only; inline code paths at 13px.

### Named Rules
**The Mono Is Typed Rule.** In the flair world, JetBrains Mono marks only what a person types or reads as a path: keycaps and inline file paths. It is not a label, kicker or decoration face.

**The No Kicker Rule.** No small uppercase tracked line sits above a heading in either world. Headings stand on their own.

## Layout

**Portfolio:** a centered 1120px container with 24px side gutters; sections stack at 64px (mobile) to 96px (desktop) vertical padding. The hero splits into two columns divided by a vertical beige hairline (48px inset each side); cards sit in grids with 32px internal padding. Navigation collapses to a second ruled row under 768px.

**Flair:** a centered container of `min(1240px, 100% - 48px)`. The first viewport is a slim 60px sticky bar, a centered heading, three launcher icons spaced `clamp(20px, 5vw, 56px)` apart, and the app window directly beneath. The window body is a two-column grid: the screenshot fills the flexible column, a fixed 340px side panel holds the app name, its one-line job, three keycap shortcuts and a spark list. Below, sections open at 112px (80px under 720px) and content groups start 48px below their heading. The "shared" block is a 2x2 ruled grid (cells 32px 40px, hairline column divider); the tech block is a two-column split with a ruled definition list (150px term column). The availability panel follows at 112px, the FAQ caps at 860px, the footer at 120px. At 960px the window, shared grid and tech split stack to one column; at 720px the bar nav hides, tile hints hide, and the window bleeds 8px past the gutter with mobile-specific portrait screenshots.

## Elevation & Depth

**Portfolio:** near-flat. Cards carry an almost invisible ambient shadow that deepens a step on hover, and the border warms; the dark theme raises shadow opacity so the step stays visible.

**Flair:** tonal and ruled. Depth comes from the step between App Ground, Raised Panel and Screenshot Well, plus 1px hairlines. Only two physical objects cast shadows, both soft, black, and offset downward with negative spread so they read as a resting object, not a glow: the app window and the launcher icons. Selection lifts the chosen icon 3px and deepens its shadow.

### Shadow Vocabulary
- **Portfolio card rest / hover** (`0 2px 12px rgba(36,35,33,0.03)` / `0 6px 20px rgba(36,35,33,0.05)`; dark `0.25` / `0.45` black): cards and the code window.
- **Flair window** (`0 40px 80px -40px rgb(0 0 0 / 0.85)`): the app window only.
- **Flair icon rest / selected** (`0 10px 24px -14px rgb(0 0 0 / 0.9)` / `0 18px 30px -16px rgb(0 0 0 / 0.9)`): launcher icons.

### Named Rules
**The No Glow Rule.** Shadows are neutral (charcoal or black), downward and soft. No colored halos, no accent-tinted shadows, no outer glows, in either world.

**The Two Objects Rule.** On /flair/, only the app window and the app icons cast shadows. Sections, grids, the availability panel and the FAQ stay flat.

## Shapes

**Portfolio:** architectural. Tags at 2px, buttons and fields at 3px, cards and the code window at 4px; one 1px square marker in the code window. Nothing rounder.

**Flair:** the apps' window language. Inline code 4px, keycaps 5px with a 3px bottom border that makes them read as physical keys, the filled button 6px, tile focus target 8px, the app window 10px, the availability panel 12px. App icons are rounded squares at 26% radius, as in the desktop launcher. The only circle is the 7px status dot. The four-point spark (a clip-path star, 6px) is the flair list bullet and appears in the logos.

**The No Pill Rule.** No fully rounded buttons, chips or tags in either world. The maximum control radius is 3px on the portfolio and 6px on /flair/.

## Components

### Buttons
- **Portfolio primary:** terracotta fill, cream text, 1px fired-terracotta border, 3px corners, Inter 500 at 0.875rem, 12px 24px, optional trailing 16px arrow icon. Hover darkens the fill; active presses down 1px.
- **Portfolio outline:** cream fill, charcoal text, beige hairline, 3px; hover tints to terracotta wash with terracotta border and text.
- **Portfolio text link CTA:** text with a 1px terracotta bottom border, arrow icon in terracotta.
- **Flair filled ("Me prévenir"):** ink fill on the orange panel, cream text, 6px corners, Inter 600, 14px 20px, leading 16px stroke mail icon; hover goes to pure black in 150ms. It is the page's only filled button; download buttons do not exist because nothing is downloadable.

### Cards / Containers
- **Portfolio card:** cream fill, beige hairline, 4px corners, 32px padding, ambient shadow; hover warms the border and deepens the shadow, no lift.
- **Portfolio code window:** cream body, ivory title strip with mono file name, 4px corners.
- **Flair has no cards.** Content groups are ruled grids and lists separated by hairlines.

### Chips / Tags
- **Portfolio tag:** ivory fill, beige hairline, 2px corners, JetBrains Mono 12px, 4px 10px.

### Inputs / Fields
- **Portfolio field:** cream fill, beige hairline, 3px corners, Inter 15px, 12px 14px; hover warms the border; focus sets a terracotta border plus a 3px terracotta focus ring at 20%.

### Navigation
- **Portfolio:** sticky ivory bar at 95% with light blur, serif VEX wordmark, Inter 500 0.875rem links that turn terracotta on hover with a 2px terracotta underline bar scaling in from the left; theme toggle as a 3px-cornered bordered icon button; mobile nav moves to a ruled second row.
- **Flair:** sticky 60px bar at 92% App Ground with blur, bottom hairline; 28px spark logo with "la suite flair" in Inter 700 17px; 14px Dim Text links brightening on hover; a right-aligned "Téléchargement bientôt" status with a 7px orange dot. Links hide under 720px. Legal pages reuse the bar with a single back link.

### Keycap (flair signature)
JetBrains Mono 500 12px on Raised Panel 2, 1px Strong Hairline border thickened to 3px at the bottom, 5px corners, 5px 7px 4px padding, never wrapping. Combinations are separate keycaps 4px apart. Each shortcut row pairs the combo with a 600 15px name and a Dim Text description.

### Launcher and App Window (flair signature)
Three app icons (72 to 88px) are an ARIA tablist; arrows, Home and End move between apps, and the URL hash follows the selection. Unselected icons sit at 82% opacity with Dim Text names and a Faint Text hint; the selected icon goes full opacity, lifts 3px and gains a 2px orange outline at 4px offset. The window has a 38px title bar (Dim Text, app name in App Text 600, a 12px close glyph drawn as stroke SVG) and swaps panels with a 180ms opacity fade on the house ease `cubic-bezier(0.16, 1, 0.3, 1)`, removed under reduced motion.

### Availability Panel (flair)
A full orange block, 12px corners, 48px 56px padding, ink headline and dark-brown body, holding the honest status and the only filled button. It is the single place orange becomes a surface larger than an icon.

### FAQ (flair)
Native `details` rows ruled by hairlines, 17px 600 summaries with a stroke plus icon in orange that rotates 45 degrees when open; answers in Dim Text at 68ch.

## Do's and Don'ts

### Do:
- **Do** check which world a file belongs to before styling it, using the governs table in Overview, and use only that world's prefixed tokens.
- **Do** keep each world to its one accent: terracotta on the portfolio, flair orange on /flair/.
- **Do** carry shortcuts as keycaps with the 3px bottom border, and paths as cream inline code.
- **Do** use real screenshots, real shortcuts and real facts; state status plainly ("Téléchargement bientôt").
- **Do** keep icons as inline stroke SVG, and remove motion under `prefers-reduced-motion`.
- **Do** credit "créé par vex" in the footer or FAQ, and ship favicon, privacy and CGU pages for each world.

### Don't:
- **Don't** apply flair tokens, dark ground or Inter-700 headings to the portfolio, and don't bring Cormorant, ivory or terracotta into /flair/.
- **Don't** use pill buttons, pill chips or pill tags (max control radius 3px portfolio, 6px flair).
- **Don't** use glows, accent-colored shadows or purple gradients.
- **Don't** place kickers or eyebrows (small uppercase tracked lines) above headings.
- **Don't** use em dashes in visible copy.
- **Don't** use emoji or glyph characters as icons.
- **Don't** add fake download buttons, reviews, metrics or counters.
- **Don't** use AI-generated images, exaggerated scroll or cursor animations, vague hero copy, or a "made with AI" tag.
- **Don't** wrap flair content in cards; rule it with hairlines.
