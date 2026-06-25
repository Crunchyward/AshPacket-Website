import type { NextConfig } from "next";

// Set NEXT_PUBLIC_BASE_PATH=/your-repo-name when deploying to GitHub Pages
// at username.github.io/your-repo-name. Leave unset for custom domains or
// username.github.io root repos.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
