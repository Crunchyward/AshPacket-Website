# AshPacket Website

Static business site for AshPacket LLC, built with Next.js and deployed to GitHub Pages.

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

## Project layout

```
src/
  app/           # Pages and global styles
  components/    # Reusable UI components
public/          # Static assets (logo, etc.)
out/             # Generated static site (after build)
```
