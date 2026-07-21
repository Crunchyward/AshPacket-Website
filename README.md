# AshPacket Website

Business site for AshPacket LLC, built with Next.js. Deploy to GitHub Pages (static) or Dokploy (Node + FreeScout contact API).

## Requirements

- [Node.js](https://nodejs.org/) 20 or later (Node 24 recommended, see `.nvmrc`)
- npm (included with Node.js)

Works on Linux, Windows, and WSL.

## Local development

```bash
git clone https://github.com/YOUR_USERNAME/AshPacket-Website.git
cd AshPacket-Website
cp .env.example .env.local
npm install
npm run dev
```

Open http://localhost:3000

For local FreeScout ticket creation, fill in `FREESCOUT_*` values in `.env.local` and run with:

```bash
NEXT_OUTPUT=standalone npm run dev
```

(`next dev` always supports API routes; `NEXT_OUTPUT=standalone` matters for production builds.)

## Production build

GitHub Pages (static export to `out/`):

```bash
npm run build
```

Dokploy / FreeScout API (standalone Node server):

```bash
NEXT_OUTPUT=standalone npm run build
npm run start
```

## FreeScout contact form

The contact form posts to `/api/contact`, which creates a conversation in FreeScout (API & Webhooks module required).

Set these **server** env vars in Dokploy (never expose the API key in the browser):

| Variable | Example | Purpose |
|----------|---------|---------|
| `FREESCOUT_URL` | `https://help.ashpacket.net` | FreeScout base URL (no trailing slash) |
| `FREESCOUT_API_KEY` | `(from FreeScout → API)` | API key header |
| `FREESCOUT_MAILBOX_ID` | `1` | Mailbox that should receive website tickets |
| `NEXT_PUBLIC_SITE_URL` | `https://ashpacket.net` | Canonical site URL |
| `NEXT_PUBLIC_BASE_PATH` | empty | Leave empty on a root domain |

Optional:

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_CONTACT_API_URL` | Absolute API URL if the static GitHub Pages site should post tickets to your Dokploy app |

## Deploy to Dokploy

Use the **Dockerfile** build (required for FreeScout; it runs Next.js standalone on port 3000).

1. Create an Application in Dokploy and connect this GitHub repo (`main`).
2. Build Type: **Dockerfile**
3. Dockerfile Path: `Dockerfile`
4. Docker Context Path: `.`
5. Environment:
   - `NEXT_PUBLIC_BASE_PATH` = empty
   - `NEXT_PUBLIC_SITE_URL` = `https://your-domain.com`
   - `FREESCOUT_URL` = your FreeScout URL
   - `FREESCOUT_API_KEY` = your API key
   - `FREESCOUT_MAILBOX_ID` = mailbox ID (often `1`)
6. Domain / app port: **3000**
7. Enable HTTPS, then Deploy.

Local smoke test:

```bash
docker build \
  --build-arg NEXT_PUBLIC_SITE_URL=http://localhost:3000 \
  -t ashpacket-website .
docker run --rm -p 3000:3000 \
  -e FREESCOUT_URL=https://help.example.com \
  -e FREESCOUT_API_KEY=replace-me \
  -e FREESCOUT_MAILBOX_ID=1 \
  ashpacket-website
```

> Do not set `NEXT_PUBLIC_BASE_PATH=/AshPacket-Website` on Dokploy unless the site is actually hosted under that subpath. That value is for GitHub Pages only.

## Deploy to GitHub Pages

Deployment runs automatically on every push to `main` via GitHub Actions (Ubuntu). This build is static and does **not** include `/api/contact`.

To keep website tickets working from GitHub Pages, either:

1. Use Dokploy as the primary site, or
2. Set Pages build env `NEXT_PUBLIC_CONTACT_API_URL` to `https://your-dokploy-domain/api/contact` (and allow CORS if needed later).

## Customize

| File | Purpose |
|------|---------|
| `src/components/sections.tsx` | Page copy and services |
| `src/components/header.tsx` | Navigation |
| `src/components/contact-form.tsx` | Contact form UI |
| `src/app/api/contact/route.ts` | FreeScout ticket API |
| `src/app/layout.tsx` | SEO metadata |
| `src/app/globals.css` | Theme colors |
| `Dockerfile` | Dokploy / container deploy |

## Project layout

```
src/
  app/           # Pages, API routes, global styles
  components/    # Reusable UI components
  lib/           # Shared helpers
public/          # Static assets (logo, etc.)
out/             # Static export (GitHub Pages builds)
```
