import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PastelCard } from "@/components/ui/PastelCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Quiénes Somos — Oppi",
  description:
    "Conoce a Oppi: la organización que ayuda a empresas a aumentar su visibilidad digital y sus ventas.",
};

const values = [
  {
    title: "Resultados medibles",
    description:
      "No entregamos entregables bonitos sin propósito: cada servicio se mide en reseñas, tráfico o ventas.",
  },
  {
    title: "Trabajo cercano",
    description:
      "Somos un equipo pequeño que conoce cada cuenta a fondo, no un call center de soporte.",
  },
  {
    title: "Simplicidad primero",
    description:
      "Preferimos soluciones simples que tu equipo pueda usar todos los días, sin curva de aprendizaje.",
  },
];

export default function QuienesSomosPage() {
  return (
    <>
      <div className="px-24 pt-64 md:px-80">
        <SectionHeading
          eyebrow="Quiénes somos"
          title="Ayudamos a negocios reales a vender más, todos los días"
          description="Oppi nació para cerrar la brecha entre lo que las empresas ofrecen y lo que sus clientes encuentran en internet."
        />
      </div>

      <section className="mx-auto max-w-[1280px] px-24 py-64 md:px-80">
        <Reveal className="grid gap-48 md:grid-cols-2 md:items-center">
          <div className="rounded-[var(--radius-cards)] bg-[var(--color-ink-black)] p-32 text-white">
            <p className="text-body-sm font-semibold text-[var(--color-brand-yellow)]">
              Nuestra misión
            </p>
            <p className="tracking-heading mt-16 text-heading-sm font-semibold">
              Que ningún negocio pierda una venta por falta de visibilidad
              digital.
            </p>
          </div>
          <div>
            <p className="text-body-lg text-[var(--color-graphite)]">
              Trabajamos con negocios locales, clínicas, restaurantes y
              empresas de servicios que saben que su producto es bueno, pero
              que no logran que suficientes personas lo encuentren o confíen
              en él online. Combinamos desarrollo web, posicionamiento
              orgánico (SEO) y campañas de pauta digital (SEM) para resolver
              ese problema de punta a punta.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1280px] px-24 py-64 md:px-80">
        <SectionHeading title="Lo que nos guía" align="center" />
        <Reveal className="mt-40 grid gap-24 md:grid-cols-3">
          {values.map((value) => (
            <PastelCard key={value.title} wash="sage">
              <h3 className="text-heading-sm font-semibold text-[var(--color-ink-black)]">
                {value.title}
              </h3>
              <p className="mt-12 text-body text-[var(--color-graphite)]">
                {value.description}
              </p>
            </PastelCard>
          ))}
        </Reveal>
      </section>

      <section
        id="contacto"
        className="scroll-mt-96 mx-auto max-w-[1280px] px-24 py-64 md:px-80"
      >
        <div className="rounded-[var(--radius-cards)] bg-[var(--color-ink-black)] p-32 md:p-48">
          <div className="grid gap-32 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="tracking-heading text-heading-sm font-semibold text-white">
                Hablemos de tu negocio
              </h2>
              <p className="mt-12 text-body text-[var(--color-frost-gray)]">
                Escríbenos y agenda una llamada de 20 minutos sin costo.
              </p>
              <p className="mt-16 text-body-sm text-[var(--color-frost-gray)]">
                hola@oppi.com · +51 999 999 999
              </p>
            </div>
            <div className="flex md:justify-end">
              <Button href="/quienes-somos#contacto" variant="coral">
                Agenda una llamada
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
