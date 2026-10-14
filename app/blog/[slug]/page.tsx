import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { PiArrowRight } from "react-icons/pi";
import { TagChip } from "@/components/ui/TagChip";
import { Button } from "@/components/ui/Button";
import { CONTACT_TRIGGER_HREF } from "@/lib/contact-modal";
import { formatPostDate, getAllPosts, getPostBySlug } from "@/lib/blog";

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
    title: `${post.title} | Blog Oppi`,
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
      <div className="mt-24 flex flex-wrap items-center gap-12">
        <TagChip>{post.tag}</TagChip>
        <span className="text-caption text-[var(--color-slate)]">
          {formatPostDate(post.date)}
        </span>
      </div>
      <h1 className="tracking-heading mt-16 text-heading leading-[1.1] font-semibold text-balance text-[var(--color-ink-black)] md:text-[48px]">
        {post.title}
      </h1>
      <div
        className="prose-oppi mt-40"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
      <aside className="mt-56 rounded-[var(--radius-cards)] bg-[var(--color-ink-black)] p-32">
        <p
          className="text-[22px] leading-[1.3] text-white"
          style={{ fontFamily: "var(--font-archivo-black)" }}
        >
          ¿Quieres saber cómo está tu negocio en esto?
        </p>
        <p className="mt-8 text-body-lg text-[var(--color-frost-gray)]">
          Lo revisamos gratis en 20 minutos.
        </p>
        <div className="mt-24">
          <Button href={CONTACT_TRIGGER_HREF} variant="coral">
            Agenda tu diagnóstico gratis
            <PiArrowRight aria-hidden="true" className="ml-8 inline" />
          </Button>
        </div>
      </aside>
    </article>
  );
}
