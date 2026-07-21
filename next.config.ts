import type { NextConfig } from "next";

// Set NEXT_PUBLIC_BASE_PATH=/your-repo-name when deploying to GitHub Pages
// at username.github.io/your-repo-name. Leave unset for custom domains or
// username.github.io root repos.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// GitHub Pages uses static export. Dokploy uses standalone so /api/contact
// can create FreeScout tickets server-side without exposing the API key.
const output =
  process.env.NEXT_OUTPUT === "standalone" ? "standalone" : "export";

const nextConfig: NextConfig = {
  output,
  basePath: output === "export" ? basePath : basePath || undefined,
  assetPrefix: output === "export" && basePath ? basePath : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
