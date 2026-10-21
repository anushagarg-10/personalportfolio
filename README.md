# Anusha Garg, Portfolio

A personal portfolio built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and a hand-rolled **Three.js/WebGL** hero. The design system lives in `app/globals.css`; the page is split into components under `components/`, with the canvas background, custom cursor, theme toggle, and interactions as client components.

## Highlights

- **WebGL hero centerpiece** (`components/three/HeroScene.tsx`): a noise-displaced, fresnel-shaded icosahedron with orbiting wireframe fragments, built in raw Three.js (no scene-graph framework). It reacts to cursor movement and scroll, re-colors itself on theme toggle, and cleanly falls back to the existing CSS orb backdrop when WebGL is unavailable or `prefers-reduced-motion` is set.
- **Role lens** (hero): switch between UI/UX Designer, Software Engineer and Full-Stack Developer. It changes the pitch, the Highlights set and the Skills order through a `data-lens` attribute on `<html>`, so all content stays in the page.
- **Design decisions** (`components/DesignLanguage.tsx`): palette, signature motif and principle for each case study.
- **Motion system** (`components/ScrollFX.tsx`, `Loader.tsx`, `Cursor.tsx`): intro curtain loader, masked word-rise headings, scroll-linked word fill, parallax, clip-path reveals, a timeline rail that draws on scroll, and a marquee driven by scroll velocity. All of it is hand-rolled and disabled under `prefers-reduced-motion`.
- **Quick navigation overlay** (`components/CommandNav.tsx`): press `/` or `⌘K`/`Ctrl+K`, or click the grid icon in the header, for a full-screen command-style jump list with arrow-key and number-key navigation.
- **Organic blob accents**: gooey, morphing gradient shapes behind the About portrait and Skills heading, in plain CSS.
- Canvas particle background, custom cursor, tilt/spotlight project cards, scroll reveals, and a light/dark theme toggle, all hand-rolled with no extra UI dependencies beyond Three.js.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Scripts

- `npm run dev` - start the dev server
- `npm run build` - production build
- `npm run start` - serve the production build
- `npm run lint` - lint

## Structure

```
app/
  layout.tsx      root layout: fonts, metadata, global chrome
  page.tsx        assembles the page sections
  globals.css     design system (CSS variables + component styles)
components/
  Header, Hero, Highlights, Marquee, About, Experience, Projects, DesignLanguage,
  Skills, Background, Contact, Footer     content sections
  Loader, LoaderScript, ScrollFX          intro curtain and scroll motion
  BackgroundFX, Cursor, Interactions,
  RaysEgg, ThemeScript, CommandNav        client behavior
  three/HeroScene.tsx                     WebGL hero centerpiece
```

## Deploy

Push to a Git host and import into **Vercel** (zero config for Next.js), or run:

```bash
npx vercel --prod
```

Add a custom domain in the Vercel dashboard once deployed. HTTPS is automatic.
