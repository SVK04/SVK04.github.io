# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Single-page personal portfolio for Vaibhav Kaul, built with Next.js (App Router, JavaScript/JSX, no TypeScript in `src`) and Tailwind CSS 3. It is a **static export** (`output: 'export'` in [next.config.js](next.config.js)) deployed to **Firebase Hosting** (`vaibhav-kaul.web.app`), not GitHub Pages despite the repo name.

## Commands

Uses Yarn (lockfile is `yarn.lock`), Node >= 22 (see `.nvmrc`).

- `yarn dev` — dev server
- `yarn build` — static export to `out/` (what Firebase serves)
- `yarn lint` — ESLint (flat config in [eslint.config.js](eslint.config.js)) over `src`
- `yarn format` — Prettier over `src`
- `yarn seo-audit` — Lighthouse against the live site

There is no test suite.

The Husky pre-commit hook runs `lint-staged` (config in `package.json`): ESLint `--fix` + Prettier on staged `.js`/`.jsx`, Prettier on staged `.css`/`.json`/`.md`. ESLint errors block the commit.

## Deployment

Pushing to `master` triggers [.github/workflows/deploy.yml](.github/workflows/deploy.yml): `yarn build`, then deploy `out/` to Firebase (`channelId: live`). Merging to master is effectively a production release.

## Architecture

- [src/app/layout.jsx](src/app/layout.jsx) holds all SEO metadata, JSON-LD (Person/WebSite schema), `next/font` setup (Inter for text, Instrument Serif for display headlines and big figures, exposed as `--font-inter` / `--font-serif`), and a cleanup script that unregisters old service workers left by the previous Vite PWA build.
- [src/app/page.jsx](src/app/page.jsx) composes the page. `Hero` and `Navbar` are imported eagerly; every below-the-fold section is loaded via `next/dynamic` for code-splitting. Keep that split when adding sections (recent commits are performance/LCP work).
- **Content lives in [src/constants/index.js](src/constants/index.js)** (`navLinks`, `socials`, `resume`, `hero`, `projects`, `experiences`, `contact`); full case studies are in `src/constants/caseStudies.js`, matched to projects by `id`. To change portfolio content, edit data there rather than component markup. The page makes one claim ("I make slow backends fast") and stays short on purpose: `featured` projects get a large row with an expandable case study, the rest a compact row. `navLinks` ids must match section `id`s in the components.
- Client state: [src/components/Providers.jsx](src/components/Providers.jsx) wraps the app in `NotificationProvider` (exposes `useNotification`, used by the contact form for toasts). Components using hooks/browser APIs need `'use client'`.
- **Theming**: colors are RGB-triplet CSS variables defined in [src/app/globals.css](src/app/globals.css) on `:root`, mapped to semantic Tailwind colors in [tailwind.config.js](tailwind.config.js) (`bg-background`, `bg-surface`, `text-text-primary`, `text-text-muted`, `border-border`, `text-accent`, etc., all supporting `/<alpha>`). There is a single theme (ink on warm paper, one red accent) and no dark mode or toggle. Use these tokens instead of hard-coded colors; on the ink-colored closing section use `text-background` and `text-accent-bright`. Shared classes `.wrap`, `.label`, `.btn` (`--fill`, `--sm`, `--on-ink`) are in `globals.css`. `font-mono` is aliased to the sans stack.
- Animations are CSS/Tailwind keyframes only (defined in `tailwind.config.js`). Nothing imports `motion` any more, though the package is still in `package.json`. Most sections are server components; the client islands are `CaseStudy`/`CaseStudyBody` and `ContactForm`.
- Contact form ([src/components/ContactForm.jsx](src/components/ContactForm.jsx), rendered inside the closing section/footer in `Contact.jsx`) lazy-imports `@emailjs/browser` and reads `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` (set in CI from GitHub secrets; locally copy `.env.example` to `.env`).
- Static export constraints: no API routes, server actions, or runtime image optimization (`images.unoptimized: true`). `robots.js` and `sitemap.js` in `src/app` are generated at build time. Static assets (resume PDF, OG image, logo) are in `public/`.
- Import alias `@/*` → `src/*` (from `jsconfig.json`), though most files use relative imports.
