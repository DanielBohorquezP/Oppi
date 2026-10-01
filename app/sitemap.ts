import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/servicios/desarrollo-web",
    "/servicios/seo",
    "/servicios/sem",
    "/experiencia",
    "/quienes-somos",
    "/blog",
    "/politica-de-privacidad",
  ].map((path) => ({ url: `${site.url}${path}` }));

  const posts = getAllPosts().map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: post.date,
  }));

  return [...pages, ...posts];
}
