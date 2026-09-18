import type { MetadataRoute } from "next";

import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/privacy", "/terms", "/android"];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date("2026-09-18"),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : 0.6,
  }));
}
