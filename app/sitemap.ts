import { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import { allNewsSlugsQuery } from "@/sanity/lib/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://sdnparang5.vercel.app";

  // Daftar halaman statis utama
  const routes = ["", "/profil", "/guru", "/berita", "/galeri", "/kontak"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1.0 : 0.8,
    })
  );

  // Default / Fallback news slugs
  let newsSlugs: string[] = ["kegiatan-kkn-um", "ppdb-2026"];

  try {
    const fetchedSlugs = await client.fetch(allNewsSlugsQuery);
    if (Array.isArray(fetchedSlugs)) {
      const sanitySlugs = fetchedSlugs
        .map((item: { slug?: string }) => item?.slug)
        .filter((slug): slug is string => Boolean(slug));
      newsSlugs = Array.from(new Set([...newsSlugs, ...sanitySlugs]));
    }
  } catch (err) {
    console.error("Error fetching news slugs for sitemap:", err);
  }

  const newsRoutes = newsSlugs.map((slug) => ({
    url: `${baseUrl}/berita/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...routes, ...newsRoutes];
}
