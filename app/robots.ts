import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/studio/", "/studio-login/"],
    },
    sitemap: "https://sdnparang5.vercel.app/sitemap.xml",
  };
}
