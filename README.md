# FireSafe.AI — Marketing Site

Marketing site for [FireSafe.AI](https://firesafe.ai), a suite of AI-powered
fire protection engineering tools grounded in NFPA, IBC, and IFC standards.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, React 19)
- [Tailwind CSS 4](https://tailwindcss.com)
- [lucide-react](https://lucide.dev) icons
- TypeScript

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

| Variable | Purpose | Default |
| --- | --- | --- |
| `NEXT_PUBLIC_APP_URL` | URL of the product app (sign-in / get-started CTAs) | `https://app.firesafe.ai` |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics measurement ID (analytics disabled if unset) | — |

## Project structure

```
app/
  page.tsx            Home (hero + tools grid)
  about/  mission/  pricing/  contact/
  tools/<slug>/       One landing page per tool (9 pages)
  sitemap.ts robots.ts
components/
  flame-hero.tsx      Canvas flame/ember hero animation (30fps, reduced-motion aware)
  tool-page-layout.tsx Shared layout for all tool pages (incl. FAQPage JSON-LD)
  nav-dropdown.tsx    Desktop tools dropdown
  mobile-nav.tsx      Mobile hamburger menu
  site-footer.tsx     Footer with tool/company links + disclaimer
  ui/                 Button, Card, Badge primitives
lib/
  tools.ts            Single source of truth for the tool catalog
```

## Conventions

- Tool pages are defined by data passed to `ToolPageLayout`; add a new tool by
  creating `app/tools/<slug>/page.tsx`, registering it in `lib/tools.ts`, and
  adding the slug to `app/sitemap.ts`.
- Security headers (HSTS, nosniff, frame denial, etc.) are set in
  `next.config.ts`.
- All source files are UTF-8; em-dashes and arrows in copy are intentional.

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start dev server |
| `pnpm build` | Production build |
| `pnpm start` | Serve production build |
| `pnpm typecheck` | TypeScript check (`tsc --noEmit`) |
