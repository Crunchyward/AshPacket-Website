import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

type SitemapEntry = MetadataRoute.Sitemap[number];

const pages: Array<{
  path: string;
  lastModified?: Date;
  changeFrequency: SitemapEntry["changeFrequency"];
  priority: number;
}> = [
  {
    path: "/",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: "/projects",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/turnstile-privacy",
    lastModified: new Date("2025-06-18"),
    changeFrequency: "yearly",
    priority: 0.3,
  },
];

/**
 * XML sitemap for search engines at /sitemap.xml.
 * Keep this list in sync with every publicly indexable route.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return pages.map(({ path, lastModified, changeFrequency, priority }) => ({
    url: absoluteUrl(path),
    lastModified: lastModified ?? now,
    changeFrequency,
    priority,
  }));
}
