# Mraish Furniture — Website

A static one-page marketing site for **Mraish Furniture** (Omar Mraish, Amman, Jordan):
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

## Editing content

| What | Where |
| --- | --- |
| Phone, WhatsApp link, city, founder, nav items | `src/global/config/business.ts` |
| Service cards (titles, blurbs, icons) | `src/features/services/services.data.ts` |
| Portfolio projects (titles, categories, images) | `src/features/portfolio/portfolio.data.ts` |
| Process steps | `src/features/process/ProcessSection.tsx` |
| Who-we-serve cards | `src/features/clientele/ClienteleSection.tsx` |
| Colors, fonts, typography | `src/global/theme/theme.ts` |
| SEO title/description/JSON-LD | `index.html` |

## Structure

Feature-based, with shared building blocks in `global/`:

```
src/
├── global/
│   ├── components/   # Navbar, Footer, Section, SectionHeading, Reveal, WhatsAppFab
│   ├── config/       # business facts (phone, services, nav)
│   ├── hooks/        # useInView, useScrollSpy
│   └── theme/        # MUI theme + brand tokens
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
- **Review the copy** — especially the founder quote in
  `src/features/about/FounderQuote.tsx`; it is draft marketing copy written for Omar's
  approval, not something he actually said.

## Dev utility

`node scripts/screenshot.mjs` (with `npm run preview` running) captures QA screenshots
of every section to `/tmp` using the installed Google Chrome.
