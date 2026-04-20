# XIRU Landing Page

Cinematic one-scroll landing page for [XIRU](https://xiru.io) — a long-term crypto buying strategy platform.

## Tech Stack 

- **Next.js 16** (App Router, SSG)
- **TypeScript** (strict mode)
- **Tailwind CSS v4** (CSS-first config with `@theme` tokens)
- **Framer Motion** (scroll-triggered cinematic animations)
- **Lucide React** (icons)

## Getting Started

```bash
bun install
bun run dev      # http://localhost:3000
bun run build    # Production build
bun run start    # Start production server
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout + fonts + metadata
│   ├── page.tsx          # Homepage (SSG)
│   ├── sitemap.ts        # Dynamic sitemap
│   └── robots.ts         # Robots config
├── components/
│   ├── hero/             # Waterfall canvas animation
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Hero, Pillars, HowItWorks, ProductPreview, Pricing, FAQ, FinalCTA
│   ├── seo/              # JSON-LD structured data
│   └── ui/               # Button, Card, Accordion, SectionHeading, Badge, GoldText, ScrollReveal
├── lib/
│   ├── constants.ts      # Site config, nav links, pricing/FAQ data
│   └── metadata.ts       # SEO metadata helpers
└── styles/
    └── globals.css        # Tailwind + CSS custom properties (design tokens)
```

## Design System

- **Colors**: Dark cinematic theme (deep browns/greens + gold accents)
- **Fonts**: Playfair Display (headings), Inter (body/nav), Poppins (body alt)
- **Animation**: Canvas waterfall particles + Framer Motion scroll reveals

## Deploy

Configured for Vercel (`output: 'standalone'`). Push to main for auto-deploy.
