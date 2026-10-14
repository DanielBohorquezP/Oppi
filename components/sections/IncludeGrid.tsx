import type { ReactNode } from "react";
import type { IconType } from "react-icons";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

const accents = {
  yellow: "var(--color-brand-yellow)",
  ink: "var(--color-ink-black)",
  coral: "var(--color-coral-pulse)",
  slate: "var(--color-slate)",
} as const;

export type IncludeItem = {
  icon: IconType;
  title: string;
  text: string;
  accent: keyof typeof accents;
};

// "Qué incluye" de las páginas de servicio: cada tarjeta dice lo que logra el
// cliente (título) y cómo lo hacemos (texto). `children` va debajo del grid.
export function IncludeGrid({
  eyebrow = "Qué incluye",
  title,
  items,
  children,
}: {
  eyebrow?: string;
  title: string;
  items: IncludeItem[];
  children?: ReactNode;
}) {
  return (
    <section className="px-24 py-64 md:px-80 md:py-96">
      <div className="mx-auto max-w-[1280px]">
        <Eyebrow tone="coral" className="mb-12">
          {eyebrow}
        </Eyebrow>
        <h2 className="tracking-heading max-w-[720px] text-heading leading-[1.1] font-semibold text-balance text-[var(--color-ink-black)] md:text-[48px]">
          {title}
        </h2>
        <Reveal
          className={`mt-40 grid gap-20 sm:grid-cols-2 ${
            items.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
          }`}
        >
          {items.map(({ icon: Icon, title: itemTitle, text, accent }) => (
            <div
              key={itemTitle}
              className="flex flex-col gap-16 rounded-[var(--radius-cards)] border border-black/5 bg-white p-[28px] shadow-[var(--shadow-subtle)]"
              style={{ borderTop: `3px solid ${accents[accent]}` }}
            >
              <span className="flex h-[44px] w-[44px] items-center justify-center rounded-[12px] bg-[var(--color-cloud-gray)] text-[22px] text-[var(--color-ink-black)]">
                <Icon aria-hidden="true" />
              </span>
              <h3 className="text-[19px] leading-[1.3] font-semibold text-balance text-[var(--color-ink-black)]">
                {itemTitle}
              </h3>
              <p className="text-[15px] leading-[1.5] text-[var(--color-graphite)]">
                {text}
              </p>
            </div>
          ))}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
