import Link from "next/link";
import { PiArrowRight } from "react-icons/pi";
import { Button } from "@/components/ui/Button";
import { HeroGuideCard } from "@/components/sections/HeroGuideCard";
import { HeroBackdrop } from "@/components/sections/HeroBackdrop";
import type { Service } from "@/content/guide";

export function ServiceIntro({
  eyebrow,
  title,
  highlight,
  description,
  ctaHref = "#contacto",
  ctaLabel,
  secondaryHref,
  secondaryLabel,
  tagline,
  serviceId,
}: {
  eyebrow: string;
  title: string;
  /** Parte del título que se pinta en amarillo (debe aparecer tal cual en `title`). */
  highlight?: string;
  description: string;
  /** Por defecto lleva al formulario guiado de esta misma página. */
  ctaHref?: string;
  ctaLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  /** Línea corta que aclara qué es (y qué no es) el servicio. */
  tagline?: string;
  /** Si se pasa, muestra el formulario guiado junto al texto con este servicio preseleccionado. */
  serviceId?: Service["id"];
}) {
  const split = Boolean(serviceId);
  const highlightAt = highlight ? title.indexOf(highlight) : -1;
  const heading =
    highlight && highlightAt >= 0 ? (
      <>
        {title.slice(0, highlightAt)}
        <span className="text-[var(--color-brand-yellow)]">{highlight}</span>
        {title.slice(highlightAt + highlight.length)}
      </>
    ) : (
      title
    );
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
            {heading}
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
              <PiArrowRight aria-hidden="true" className="ml-8 inline" />
            </Button>
            {secondaryHref && secondaryLabel && (
              <Button href={secondaryHref} variant="ghost-dark">
                {secondaryLabel}
              </Button>
            )}
          </div>
        </div>
        {split && (
          <div id="contacto" className="w-full max-w-[440px] scroll-mt-96 justify-self-center lg:justify-self-end">
            <HeroGuideCard
              initialServiceId={serviceId}
              className="w-full"
            />
          </div>
        )}
      </div>
    </section>
  );
}
