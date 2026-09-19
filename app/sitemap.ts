import type { MetadataRoute } from "next";
import { projectSlugs } from "@/content/projects";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const staticRoutes = [
    "",
    "/about",
    "/faq",
    "/projects",
    "/blog/who-is-the-ai-khan",
    "/llms.txt",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: (path === "" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: path === "" ? 1 : 0.8,
    })),
    ...projectSlugs.map((slug) => ({
      url: `${base}/projects/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: slug === "12pilot" || slug === "intezamtech" ? 0.9 : 0.7,
    })),
  ];
}
