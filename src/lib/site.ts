// Set by the deploy workflow. Falls back to the production domain for SEO
// artifacts (sitemap/robots/canonicals) when unset outside local override.
const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://ashpacket.net";

export const siteUrl = rawSiteUrl.replace(/\/$/, "");

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Absolute public URL for a site path (e.g. "/projects"). */
export function absoluteUrl(path = "/"): string {
  if (!path || path === "/") {
    return siteUrl;
  }
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
