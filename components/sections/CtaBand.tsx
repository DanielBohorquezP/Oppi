import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

export function CtaBand({
  title = "¿Listo para vender más?",
  description = "Agenda una llamada de 20 minutos y te mostramos cómo Oppi puede ayudar a tu negocio.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="mx-auto max-w-[1280px] px-24 py-64 md:px-80">
      <Reveal className="rounded-[var(--radius-cards)] bg-[var(--color-ink-black)] px-32 py-64 text-center">
        <h2 className="tracking-heading text-heading font-semibold text-white md:text-heading-lg">
          {title}
        </h2>
        <p className="mx-auto mt-16 max-w-[520px] text-body-lg text-[var(--color-frost-gray)]">
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
