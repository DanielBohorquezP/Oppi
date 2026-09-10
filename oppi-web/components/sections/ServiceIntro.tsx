import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function ServiceIntro({
  eyebrow,
  title,
  description,
  ctaHref,
  ctaLabel,
}: {
  eyebrow: string;
  title: string;
  description: string;
  ctaHref: string;
  ctaLabel: string;
}) {
  return (
    <section className="bg-[var(--color-ink-black)] px-24 py-64 md:px-80 md:py-96">
      <div className="mx-auto max-w-[760px] text-center">
        <Link
          href="/servicios"
          className="text-body-sm font-medium text-[var(--color-frost-gray)] hover:text-white"
        >
          ← Todos los servicios
        </Link>
        <p className="mb-16 mt-24 text-body-sm font-semibold uppercase tracking-wide text-[var(--color-brand-yellow)]">
          {eyebrow}
        </p>
        <h1 className="tracking-heading text-heading-lg font-semibold text-balance text-white md:text-display">
          {title}
        </h1>
        <p className="mx-auto mt-24 max-w-[560px] text-body-lg text-[var(--color-frost-gray)]">
          {description}
        </p>
        <div className="mt-32 flex justify-center">
          <Button href={ctaHref} variant="coral">
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
