# AshPacket Website

Static business site for AshPacket LLC, built with Next.js. Deploy to GitHub Pages or Dokploy.

## Requirements

- [Node.js](https://nodejs.org/) 20 or later (Node 24 recommended, see `.nvmrc`)
- npm (included with Node.js)

Works on Linux, Windows, and WSL.

## Local development

```bash
git clone https://github.com/YOUR_USERNAME/AshPacket-Website.git
cd AshPacket-Website
npm install
npm run dev
```

Open http://localhost:3000

### Using nvm (optional)

```bash
nvm install
nvm use
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Static files are written to `out/`.

## Deploy to Dokploy

This repo is a static Next.js export (`output: "export"`). Prefer one of these build types:

### Option A: Dockerfile (recommended)

1. Create an Application in Dokploy and connect this GitHub repo (`main`).
2. Build Type: **Dockerfile**
3. Dockerfile Path: `Dockerfile`
4. Docker Context Path: `.`
5. Environment / build args:
   - `NEXT_PUBLIC_BASE_PATH` = empty (or `/` only if you truly need a subpath)
   - `NEXT_PUBLIC_SITE_URL` = `https://your-domain.com`
6. Add a domain on port **80**, enable HTTPS.
7. Deploy.

Local smoke test:

```bash
docker build \
  --build-arg NEXT_PUBLIC_SITE_URL=http://localhost:8080 \
  -t ashpacket-website .
docker run --rm -p 8080:80 ashpacket-website
```

### Option B: Nixpacks

1. Build Type: **Nixpacks**
2. Publish Directory: `out`
3. Same env vars as above (`NEXT_PUBLIC_BASE_PATH` empty, `NEXT_PUBLIC_SITE_URL` set)
4. Deploy

`nixpacks.toml` in the repo pins Node 24 and the build command.

> Do not set `NEXT_PUBLIC_BASE_PATH=/AshPacket-Website` on Dokploy unless the site is actually hosted under that subpath. That value is for GitHub Pages only.

## Deploy to GitHub Pages

Deployment runs automatically on every push to `main` via GitHub Actions (Ubuntu).

1. Push this repository to GitHub.
2. Go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. If the site URL is `username.github.io/repo-name`, add a repository variable:
   - **Settings → Secrets and variables → Actions → Variables**
   - Name: `NEXT_PUBLIC_BASE_PATH`
   - Value: `/your-repo-name`

### Reproducible installs (recommended)

After cloning on any machine, run `npm install` once and commit the generated lock file:

```bash
npm install
git add package-lock.json
git commit -m "Add package-lock.json"
git push
```

CI will then use `npm ci` for faster, deterministic builds.

## Customize

| File | Purpose |
|------|---------|
| `src/components/sections.tsx` | Page copy and services |
| `src/components/header.tsx` | Navigation |
| `src/app/layout.tsx` | SEO metadata |
| `src/app/globals.css` | Theme colors |
| `Dockerfile` | Dokploy / container deploy |
| `nixpacks.toml` | Dokploy Nixpacks build |

## Project layout

```
src/
  app/           # Pages and global styles
  components/    # Reusable UI components
public/          # Static assets (logo, etc.)
docker/          # nginx config for container deploys
out/             # Generated static site (after build)
```
