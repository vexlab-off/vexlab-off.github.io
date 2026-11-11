# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, confirmed 2026-11-11:
- Linux users on Arch who might install the flair suite once it is published: they want to know what each app does, what it needs, and how to get it.
- Visitors of VEX's portfolio (recruiters, potential clients) judging VEX's work: they look at technical choices and care in the details.

## Product Purpose

The portfolio presents VEX, an independent frontend developer, and his projects. The `/flair/` page presents la suite flair, three Linux desktop apps VEX builds:
- **flair**: file manager driven by the keyboard, with AI (local or Claude) to preview, search by meaning, sort and chat with a folder. Plans never delete or overwrite, and can be undone.
- **Flair Code**: code editor with AI assistance (Claude, OpenAI, Gemini or local models), live preview, command palette.
- **Flair Web**: browser (Chromium via Qt WebEngine) with search engine choice and keywords, a built-in ad and tracker shield, reader mode, page assistant, and Chrome extensions (Manifest V3).

Success: a visitor understands concretely what each app does and that it is not available yet; a portfolio visitor sees the work as real and careful.

## Positioning

Native C++/Qt Quick apps sharing one identity (accent color, logo, theme) and settings, built by one person, with AI that can stay local. Not Electron, not a fork.

## Operating Context

Portfolio is a Vite + Tailwind 4 multi-page static site (repo github.com/vexlab-off/mon-portfolio). No custom domain yet.

## Capabilities and Constraints

- Apps target Arch Linux in general (Qt 6, qmake builds, Arch packages); Vex adds theme following.
- **Not published yet**: no repos, no packages online. The site must say "bientôt" for download; no fake download buttons. Packaging comes later.
- French UI; MIT license (per each repo).

## Brand Commitments

- Credit "créé par vex" (FAQ / footer).
- The user's website rules (anti-"vibecodé"): no purple gradients, no pill buttons, no fake reviews/metrics/counters, no vague hero, no emoji icons, no em dashes, no exaggerated scroll or cursor animations, no AI images, plain copy. Favicon, privacy page, CGU page, no "made with AI" tag.

## Evidence on Hand

- Real screenshots can be produced from the apps (FLAIR_SNAPSHOT, FLAIRCODE_SNAPSHOT, FLAIRWEB_SNAPSHOT hooks).
- App logos: ~/Work/flair*/pkgbuild/*.svg.
- No users, testimonials, download counts or benchmarks exist: never invent them.

## Product Principles

- Say exactly what the software does, with real screens.
- Be honest about status (in development, not yet downloadable).
- Privacy facts stated precisely (what stays local, what goes to an AI provider).
