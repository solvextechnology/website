import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://solvextechnology.in";
  const routes = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/solutions",
    "/branding",
    "/blog",
    "/contact",
    "/legal/privacy",
    "/legal/terms",
    "/legal/refund",
    "/legal/disclaimer",
    "/legal/cookies",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
