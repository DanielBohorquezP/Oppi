import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TagChip } from "@/components/ui/TagChip";
import { getAllPosts } from "@/lib/blog";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Blog — Oppi",
  description:
    "Ideas prácticas sobre reputación online, desarrollo web y SEO para negocios locales.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <div className="px-24 pt-64 md:px-80">
        <SectionHeading
          eyebrow="Blog"
          title="Ideas para vender más, sin tecnicismos"
          description="Guías prácticas sobre reputación, web y SEO escritas para dueños de negocio, no para desarrolladores."
        />
      </div>

      <section className="mx-auto max-w-[1280px] px-24 py-64 md:px-80">
        <Reveal className="grid gap-24 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex flex-col rounded-[var(--radius-cards-sm)] border border-[var(--color-frost-gray)] bg-white p-24 transition-opacity hover:opacity-90"
            >
              <TagChip>{post.tag}</TagChip>
              <h3 className="mt-16 text-heading-sm font-semibold text-[var(--color-ink-black)]">
                {post.title}
              </h3>
              <p className="mt-12 flex-1 text-body-sm text-[var(--color-graphite)]">
                {post.excerpt}
              </p>
              <p className="mt-16 text-caption text-[var(--color-slate)]">
                {new Date(post.date).toLocaleDateString("es-PE", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </Link>
          ))}
        </Reveal>
      </section>
    </>
  );
}
