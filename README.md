# Anusha Garg — Portfolio

A single-page personal portfolio built as one self-contained `index.html` (HTML, CSS, and JavaScript inline). No build step, no dependencies.

## Run locally

```bash
node server.js
```

Then open http://localhost:3000

(You can also just double-click `index.html` to open it directly in a browser.)

## Files

- `index.html` — the entire website
- `server.js` — a tiny static server for local preview only (not needed for deployment)

## Deploy

Only `index.html` is needed to go live. Two easy options:

- **Netlify Drop:** drag this folder onto https://app.netlify.com/drop
- **Vercel CLI:** run `npx vercel --prod` from this folder

HTTPS is issued automatically by both. Add a custom domain in the host's dashboard once deployed.
