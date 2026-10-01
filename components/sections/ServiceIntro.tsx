import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { HeroGuideCard } from "@/components/sections/HeroGuideCard";
import { HeroBackdrop } from "@/components/sections/HeroBackdrop";
import type { Service } from "@/content/guide";

export function ServiceIntro({
  eyebrow,
  title,
  description,
  ctaHref,
  ctaLabel,
  secondaryHref,
  secondaryLabel,
  tagline,
  serviceId,
}: {
  eyebrow: string;
  title: string;
  description: string;
  ctaHref: string;
  ctaLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  /** Línea corta que aclara qué es (y qué no es) el servicio. */
  tagline?: string;
  /** Si se pasa, muestra el formulario guiado junto al texto con este servicio preseleccionado. */
  serviceId?: Service["id"];
}) {
  const split = Boolean(serviceId);
  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-ink-black)] px-24 py-64 md:px-80 md:py-96">
      <HeroBackdrop splitAt={split ? "lg" : undefined} />
      <div
        className={
          split
            ? "relative z-10 mx-auto grid max-w-[1280px] items-center gap-48 lg:grid-cols-[1.05fr_0.95fr] lg:gap-64"
            : "relative z-10"
        }
      >
        <div className={split ? "" : "mx-auto max-w-[760px] text-center"}>
          <Link
            href="/#servicios"
            className="-my-12 inline-block py-12 text-body-sm font-medium text-[var(--color-frost-gray)] hover:text-white"
          >
            ← Todos los servicios
          </Link>
          <p className="mb-16 mt-24 text-body-sm font-semibold uppercase tracking-wide text-[var(--color-brand-yellow)]">
            {eyebrow}
          </p>
          <h1
            className={`tracking-heading text-[36px] leading-[1.1] font-semibold text-balance text-white sm:text-heading-lg ${split ? "" : "md:text-display"}`}
          >
            {title}
          </h1>
          <p
            className={`mt-24 max-w-[560px] text-body-lg text-[var(--color-frost-gray)] ${split ? "" : "mx-auto"}`}
          >
            {description}
          </p>
          {tagline && (
            <p className="mt-16 text-body-sm font-semibold text-white">
              {tagline}
            </p>
          )}
          <div
            className={`mt-32 flex flex-wrap gap-16 ${split ? "" : "justify-center"}`}
          >
            <Button href={ctaHref} variant="coral">
              {ctaLabel}
            </Button>
            {secondaryHref && secondaryLabel && (
              <Button href={secondaryHref} variant="ghost-dark">
                {secondaryLabel}
              </Button>
            )}
          </div>
        </div>
        {split && (
          <HeroGuideCard
            initialServiceId={serviceId}
            className="w-full justify-self-center lg:justify-self-end"
          />
        )}
      </div>
    </section>
  );
}
