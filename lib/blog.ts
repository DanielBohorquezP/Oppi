import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  /** Frase del cliente que responde el artículo (tarjeta del listado). */
  pain?: string;
  /** Clave del icono de la tarjeta (ver app/blog/page.tsx). */
  icon?: string;
  /** Color del bloque superior de la tarjeta: "yellow" | "ink" | "coral". */
  surface?: string;
};

export function getAllPosts(): PostMeta[] {
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const fileContents = fs.readFileSync(
        path.join(postsDirectory, filename),
        "utf8"
      );
      const { data } = matter(fileContents);
      return {
        slug,
        title: data.title as string,
        excerpt: data.excerpt as string,
        date: data.date as string,
        tag: data.tag as string,
        pain: data.pain as string | undefined,
        icon: data.icon as string | undefined,
        surface: data.surface as string | undefined,
      };
    });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processed = await remark().use(html).process(content);

  return {
    slug,
    title: data.title as string,
    excerpt: data.excerpt as string,
    date: data.date as string,
    tag: data.tag as string,
    contentHtml: processed.toString(),
  };
}

/** Fecha del post en español de Colombia. Las fechas del frontmatter son días sin hora, así que se leen en UTC para no correrse un día. */
export function formatPostDate(date: string) {
  return new Date(date).toLocaleDateString("es-CO", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
