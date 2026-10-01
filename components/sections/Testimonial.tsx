import { Reveal } from "@/components/motion/Reveal";

// Promesa de Oppi en una sola frase. Sin cifras de resultados: no prometemos
// cantidades de ventas ni porcentajes.
export function Testimonial() {
  return (
    <section className="bg-[var(--color-ink-black)] px-24 py-64 md:px-80 md:py-96">
      <Reveal className="mx-auto max-w-[1280px]">
        <h2 className="tracking-heading max-w-[760px] text-heading font-semibold text-balance text-white md:text-heading-lg">
          Convierte tu web en tu{" "}
          <span className="text-[var(--color-brand-yellow)]">
            mejor vendedor
          </span>
          .
        </h2>
        <p className="mt-24 max-w-[560px] text-body-lg text-[var(--color-frost-gray)]">
          Te encuentran en Google y en la IA, tus anuncios rinden más y cada
          visita sabe qué hacer para comprarte.
        </p>
      </Reveal>
    </section>
  );
}
