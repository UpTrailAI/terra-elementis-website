import type { MetadataRoute } from "next";

const siteUrl = "https://terraelementis.com";

const routes = [
  "",
  "/about",
  "/leadership",
  "/strategy",
  "/assets",
  "/governance",
  "/investors",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
