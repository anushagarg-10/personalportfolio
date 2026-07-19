# Anusha Garg — Portfolio

A personal portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. The design system lives in `app/globals.css`; the page is split into components under `components/`, with the canvas background, custom cursor, theme toggle, and interactions as client components.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — lint

## Structure

```
app/
  layout.tsx      root layout: fonts, metadata, global chrome
  page.tsx        assembles the page sections
  globals.css     design system (CSS variables + component styles)
components/
  Header, Hero, Marquee, About, Experience, Projects,
  Skills, Background, Contact, Footer   — content sections
  BackgroundFX, Cursor, Interactions, RaysEgg, ThemeScript  — client behavior
```

## Deploy

Push to a Git host and import into **Vercel** (zero config for Next.js), or run:

```bash
npx vercel --prod
```

Add a custom domain in the Vercel dashboard once deployed. HTTPS is automatic.
