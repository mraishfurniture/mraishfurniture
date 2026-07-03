# Mraish Furniture — Website

A static one-page marketing site for **Mraish Furniture** (Jordan — established 1993):
bespoke carpentry, upholstery, interior & exterior design, glass, aluminum, drapery,
painting and lighting.

Built with **React + TypeScript + Vite + MUI**.

## Run it

```bash
npm install
npm run dev       # local preview at http://localhost:5173
npm run build     # production build → dist/
npm run preview   # serve the production build locally
```

## Deploy

The `dist/` folder is a plain static site (`base: './'`), so it works anywhere:
drag-and-drop the `dist/` folder into [Netlify Drop](https://app.netlify.com/drop),
or point Vercel / GitHub Pages / any static host at the project.

## Languages

The site is bilingual: **English (default)** and **Arabic (full RTL)**, switched from the
navbar globe button; the choice is remembered in the browser. All copy for both languages
lives in `src/global/i18n/translations.ts` — edit the `en` and `ar` objects side by side
(TypeScript enforces that both stay complete). Arabic renders with the Amiri/Almarai fonts
and a mirrored right-to-left layout.

## Editing content

| What | Where |
| --- | --- |
| All text, both languages | `src/global/i18n/translations.ts` |
| Phone number and WhatsApp link | `src/global/config/business.ts` |
| Service card icons (order matches translations) | `src/features/services/services.data.ts` |
| Portfolio images and categories | `src/features/portfolio/portfolio.data.ts` |
| Colors, fonts, typography, RTL rules | `src/global/theme/theme.ts` |
| SEO title/description/JSON-LD | `index.html` |

## Structure

Feature-based, with shared building blocks in `global/`:

```
src/
├── global/
│   ├── components/   # Navbar, Footer, Section, SectionHeading, Reveal, WhatsAppFab, ScrollProgress
│   ├── config/       # business facts (phone, nav ids)
│   ├── i18n/         # translations (en/ar) + language context
│   ├── hooks/        # useInView, useScrollSpy
│   └── theme/        # MUI theme factory (LTR/RTL) + brand tokens
└── features/
    ├── hero/         # HeroSection, TradesMarquee
    ├── about/        # AboutSection, FounderQuote
    ├── services/     # ServicesSection + data
    ├── portfolio/    # PortfolioSection + data
    ├── process/
    ├── clientele/
    └── contact/
```

## Before sharing with clients

- **Images are Unsplash placeholders.** Replace the URLs in
  `src/features/portfolio/portfolio.data.ts` and `src/features/about/AboutSection.tsx`
  with real project photos (the portfolio section already says "representative imagery"
  until then).
- **Review the copy** — especially the workshop quote rendered by
  `src/features/about/FounderQuote.tsx`; it is draft marketing copy awaiting the
  owner's approval.

## Dev utility

`node scripts/screenshot.mjs [en|ar]` (with `npm run preview` running) captures QA
screenshots of every section in the chosen language to `/tmp` using the installed
Google Chrome.
