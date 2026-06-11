# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build (runs type-check + Next.js build)
npm run start    # Serve production build
npm run lint     # ESLint (flat config, no auto-fix by default)
```

There is no test suite. Requires Node.js ≥ 20.9.0.

## Architecture

**Stack:** Next.js 16 App Router · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · Three.js via React Three Fiber

### Data flow

All site content lives in two TypeScript files — never in a CMS or database:

- **`lib/content.ts`** — structured data for every page section (hero copy, project case studies, capability groups, experience items, universe nodes, proof stats). Editing visible text means editing this file.
- **`lib/site.ts`** — site-wide config: owner name/email, navigation links, social links, and resume URL. Resume href resolves from `NEXT_PUBLIC_RESUME_URL` env var, falling back to `/public/resume.pdf`.

Blog posts are `.md` / `.mdx` files in `content/blog/` with gray-matter frontmatter (`title`, `date`, `excerpt`). `lib/blog.ts` reads them at request time (no static export needed).

### Component layers

Components are split into two generations — **v2 is current**, v1 is legacy but still referenced in some routes:

```
components/
  layout/        Nav, Footer, CosmicBackdrop* (animated WebGL backdrop)
  sections/v2/   Active page sections (CinematicHero, ProductUniverse, CaseStudyTunnel, ProofCockpit, FinalContact)
  sections/      v1 legacy (Hero, About, Projects, Contact, Experience, Writing, ProofStrip)
  ui/            SectionReveal (scroll animation wrapper), Icons
  blog/          BlogCard
```

`app/page.tsx` uses only v2 sections. If adding a new homepage section, add it to `sections/v2/` and import it in `app/page.tsx`.

### Three.js / WebGL pattern

Heavy WebGL scenes are isolated into `*Canvas.tsx` files (e.g. `HeroSignalCanvas.tsx`, `ProductUniverseCanvas.tsx`) and loaded with `next/dynamic` + `{ ssr: false }` to avoid SSR errors. Mobile and below-the-fold scenes are conditionally skipped — preserve this pattern when adding 3D content.

The persistent animated background is `CosmicBackdrop.tsx` rendered via `CosmicBackdropIsland.tsx` (a client island in the root layout).

### Theme system

Theme (light/dark) is set by an inline `<script>` in `app/layout.tsx` that runs before hydration, reading `localStorage("theme")` and falling back to `prefers-color-scheme`. It toggles the `dark` class on `<html>`. All colours are CSS custom properties defined in `app/globals.css` under `:root` (light) and `.dark` (dark). Use `var(--accent)`, `var(--foreground)`, etc. — never hardcode hex values.

Fonts are loaded via `next/font/google`: `--font-dm-sans` (body), `--font-syne` (display headings), `--font-geist-mono` (mono). Reference them via CSS variables or Tailwind's `font-sans` / `font-display` / `font-mono` utilities (mapped in `@theme inline` in `globals.css`).

### Routing

| Route | Source |
|---|---|
| `/` | `app/page.tsx` → v2 sections |
| `/blog` | `app/blog/page.tsx` → `getAllPosts()` |
| `/blog/[slug]` | `app/blog/[slug]/page.tsx` → `getPostBySlug()` |
| `/projects/[slug]` | `app/projects/[slug]/page.tsx` → project data from `lib/content.ts` |

OG images are generated via `opengraph-image.tsx` at both the root and per-project level.

### Environment variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL (used in metadata) |
| `NEXT_PUBLIC_RESUME_URL` | External resume link; if absent, serves `/public/resume.pdf` |

### Path alias

`@/` maps to the repo root. Use it for all internal imports (`@/lib/site`, `@/components/layout/Nav`, etc.).

## Key conventions

- **No Prettier** — ESLint only. Don't add formatting tooling.
- **Tailwind v4** uses `@import "tailwindcss"` in `globals.css` (not `@tailwind` directives). Custom theme extensions go in `@theme` blocks in CSS, not `tailwind.config.*`.
- **CSS variables for all design tokens** — colour, shadow, border, grain opacity. Check `globals.css :root` before adding any new visual value.
- The `"use client"` directive is required for any component using Framer Motion, Three.js, or browser APIs. Server components are the default in the App Router.
