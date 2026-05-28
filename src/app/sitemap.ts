import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://solvextechnology.in";
  const routes = [
    "",
    "/about",
    "/services",
    "/services/web-development",
    "/services/mobile-app",
    "/services/business-solutions",
    "/services/business-consultancy",
    "/services/growth-strategy",
    "/services/digital-automation",
    "/services/custom-software",
    "/portfolio",
    "/products",
    "/products/todoit",
    "/products/todoit/privacy-policy",
    "/products/todoit/terms",
    "/products/todoit/delete-account",
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
