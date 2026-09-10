import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

export function FinalCta({
  title = "Que cada visita se convierta en una venta",
  description = "Agenda una llamada de 20 minutos y te mostramos por dónde empezar.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="border-t border-white/10 bg-[var(--color-ink-black)] px-24 py-80 text-center md:px-80 md:py-120">
      <Reveal className="mx-auto max-w-[640px]">
        <h2 className="tracking-heading text-heading font-semibold text-balance text-white md:text-heading-lg">
          {title}
        </h2>
        <p className="mx-auto mt-16 max-w-[440px] text-body-lg text-[var(--color-frost-gray)]">
          {description}
        </p>
        <div className="mt-32 flex justify-center">
          <Button href="/quienes-somos#contacto" variant="coral">
            Agenda una llamada
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
