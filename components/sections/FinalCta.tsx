import { PiArrowRight, PiWhatsappLogo } from "react-icons/pi";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { TeamAvatar } from "@/components/ui/TeamAvatar";
import { CONTACT_TRIGGER_HREF } from "@/lib/contact-modal";
import { team } from "@/content/team";
import { whatsappHref } from "@/content/site";

// Tarjeta amarilla con el equipo pegado al borde inferior: las fotos llevan un
// margen inferior negativo igual al padding de la tarjeta.
export function FinalCta({
  title = "¿Cuántos clientes se están yendo con tu competencia hoy?",
  description = "En 20 minutos te mostramos dónde los estás perdiendo y qué hacer primero. Sin compromiso.",
  ctaLabel = "Agenda tu diagnóstico gratis",
}: {
  title?: string;
  description?: string;
  ctaLabel?: string;
}) {
  return (
    <section className="bg-white px-24 py-64 md:px-80 md:py-120">
      <Reveal className="mx-auto flex max-w-[1280px] flex-wrap items-end justify-between gap-40 overflow-hidden rounded-[32px] bg-[var(--color-brand-yellow)] p-40 md:p-80">
        <div className="flex-[1_1_520px] max-md:basis-full">
          <h2 className="tracking-heading text-heading leading-[1.06] font-semibold text-balance text-[var(--color-ink-black)] md:text-[56px]">
            {title}
          </h2>
          <p className="mt-20 max-w-[480px] text-body-lg text-[var(--color-ink-black)]">
            {description}
          </p>
          <div className="mt-32 flex flex-wrap gap-16">
            <Button href={CONTACT_TRIGGER_HREF} variant="coral">
              {ctaLabel}
              <PiArrowRight aria-hidden="true" className="ml-8 inline" />
            </Button>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-8 rounded-[var(--radius-buttons)] border border-[var(--color-ink-black)]/25 px-24 py-12 text-body font-semibold text-[var(--color-ink-black)] transition-colors hover:bg-[var(--color-ink-black)] hover:text-white"
            >
              <PiWhatsappLogo size={20} aria-hidden="true" />
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>

        <div className="-mb-40 flex items-end justify-center max-md:w-full md:-mb-80">
          <div className="-mr-[28px]">
            <TeamAvatar member={team.marketing} height={200} fluidHeight="clamp(96px, 26vw, 200px)" />
          </div>
          <div className="relative z-10">
            <TeamAvatar member={team.seo} height={230} fluidHeight="clamp(112px, 30vw, 230px)" />
          </div>
          <div className="-ml-[28px]">
            <TeamAvatar member={team.sem} height={200} fluidHeight="clamp(96px, 26vw, 200px)" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
