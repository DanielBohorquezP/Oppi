import type { Metadata } from "next";
import Link from "next/link";
import type { IconType } from "react-icons";
import { PiArrowRight, PiArticle, PiBrowser, PiMapPin } from "react-icons/pi";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TagChip } from "@/components/ui/TagChip";
import { Reveal } from "@/components/motion/Reveal";
import { formatPostDate, getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Oppi",
  description:
    "Guías prácticas para que te encuentren en Google, tus anuncios vendan y tus redes traigan clientes. Sin tecnicismos.",
};

// Claves de `icon` y `surface` que se usan en el frontmatter de los posts.
const icons: Record<string, IconType> = {
  browser: PiBrowser,
  "map-pin": PiMapPin,
};

const surfaces: Record<string, { bg: string; text: string; icon: string }> = {
  yellow: {
    bg: "var(--color-brand-yellow)",
    text: "var(--color-ink-black)",
    icon: "var(--color-ink-black)",
  },
  ink: {
    bg: "var(--color-ink-black)",
    text: "#ffffff",
    icon: "var(--color-brand-yellow)",
  },
  coral: {
    bg: "var(--color-coral-pulse)",
    text: "var(--color-ink-black)",
    icon: "var(--color-ink-black)",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="bg-[var(--color-cloud-gray)] px-24 py-64 md:px-80 md:py-96">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-end justify-between gap-x-64 gap-y-24">
          <div className="max-w-[720px]">
            <Eyebrow tone="coral" className="mb-12">
              Blog · Marketing, SEO y Google Ads
            </Eyebrow>
            <h1 className="tracking-heading text-[36px] leading-[1.06] font-semibold text-balance text-[var(--color-ink-black)] md:text-[56px]">
              Ideas para vender más, sin tecnicismos
            </h1>
          </div>
          <p className="max-w-[380px] text-body-lg text-[var(--color-graphite)]">
            Guías prácticas para que te encuentren, te elijan y te compren.
            Escritas para dueños de negocio, no para expertos.
          </p>
        </div>
      </section>

      <section className="px-24 py-64 md:px-80 md:py-96">
        <Reveal className="mx-auto grid max-w-[1280px] gap-24 md:grid-cols-2">
          {posts.map((post) => {
            const Icon = icons[post.icon ?? ""] ?? PiArticle;
            const surface = surfaces[post.surface ?? ""] ?? surfaces.ink;
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="flex flex-col overflow-hidden rounded-[var(--radius-cards)] border border-black/5 bg-white shadow-[var(--shadow-subtle)] transition-[transform,box-shadow] duration-300 hover:-translate-y-4 hover:shadow-[0_18px_40px_-18px_rgba(4,0,84,0.3)]"
              >
                <div
                  className="flex min-h-[200px] flex-col justify-between gap-24 p-32"
                  style={{ backgroundColor: surface.bg, color: surface.text }}
                >
                  <Icon size={36} aria-hidden="true" style={{ color: surface.icon }} />
                  {post.pain && (
                    <p
                      className="text-[20px] leading-[1.3] text-balance"
                      style={{ fontFamily: "var(--font-archivo-black)" }}
                    >
                      “{post.pain}”
                    </p>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-32">
                  <div className="flex flex-wrap items-center justify-between gap-12">
                    <TagChip>{post.tag}</TagChip>
                    <span className="text-caption text-[var(--color-slate)]">
                      {formatPostDate(post.date)}
                    </span>
                  </div>
                  <h2 className="mt-16 text-[24px] leading-[1.25] font-semibold text-balance text-[var(--color-ink-black)]">
                    {post.title}
                  </h2>
                  <p className="mt-12 flex-1 text-body text-[var(--color-graphite)]">
                    {post.excerpt}
                  </p>
                  <span className="mt-24 flex items-center gap-8 text-body-sm font-semibold text-[var(--color-coral-pulse)]">
                    Leer artículo
                    <PiArrowRight aria-hidden="true" />
                  </span>
                </div>
              </Link>
            );
          })}
        </Reveal>
      </section>
    </>
  );
}
