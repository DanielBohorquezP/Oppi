import { PiArrowRight } from "react-icons/pi";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { CONTACT_TRIGGER_HREF } from "@/lib/contact-modal";

export function CtaBand({
  title = "¿Cuántos clientes se están yendo con tu competencia hoy?",
  description = "En 20 minutos te mostramos dónde los estás perdiendo y qué hacer primero. Sin compromiso.",
  ctaLabel = "Agenda tu diagnóstico gratis",
  ctaHref = CONTACT_TRIGGER_HREF,
}: {
  title?: string;
  description?: string;
  ctaLabel?: string;
  /** Por defecto abre el popup de agendamiento; las páginas de servicio pasan "#contacto" para bajar al formulario de su hero. */
  ctaHref?: string;
}) {
  return (
    <section className="px-24 py-64 md:px-80 md:py-96">
      <Reveal className="mx-auto max-w-[1280px] rounded-[32px] bg-[var(--color-ink-black)] px-32 py-64 text-center md:px-80 md:py-96">
        <h2 className="tracking-heading mx-auto max-w-[900px] text-heading font-semibold text-balance text-white md:text-[52px] md:leading-[1.08]">
          {title}
        </h2>
        <p className="mx-auto mt-16 max-w-[520px] text-body-lg text-[var(--color-frost-gray)]">
          {description}
        </p>
        <div className="mt-32 flex justify-center">
          <Button href={ctaHref} variant="coral">
            {ctaLabel}
            <PiArrowRight aria-hidden="true" className="ml-8 inline" />
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
