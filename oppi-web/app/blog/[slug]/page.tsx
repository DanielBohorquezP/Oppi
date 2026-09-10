import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { TagChip } from "@/components/ui/TagChip";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Blog Oppi`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-[720px] px-24 py-64 md:px-0">
      <Link
        href="/blog"
        className="text-body-sm font-medium text-[var(--color-amber-edge)]"
      >
        ← Volver al blog
      </Link>
      <div className="mt-24">
        <TagChip>{post.tag}</TagChip>
      </div>
      <h1 className="tracking-heading mt-16 text-heading font-semibold text-[var(--color-ink-black)] md:text-heading-lg">
        {post.title}
      </h1>
      <p className="mt-12 text-caption text-[var(--color-slate)]">
        {new Date(post.date).toLocaleDateString("es-PE", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <div
        className="prose-oppi mt-40"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
