import type { Metadata } from "next";
import { ServiceIntro } from "@/components/sections/ServiceIntro";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Faq } from "@/components/sections/Faq";
import { PastelCard } from "@/components/ui/PastelCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { Reveal } from "@/components/motion/Reveal";
import { TeamMemberIntro } from "@/components/sections/TeamMemberIntro";
import { team } from "@/content/team";

export const metadata: Metadata = {
  title: "Desarrollo web optimizado para ventas — Oppi",
  description:
    "Diseñamos y construimos sitios web rápidos y enfocados en conversión: cada sección está pensada para llevar al visitante a comprar, agendar o contactarte.",
};

const steps = [
  {
    title: "Descubrimiento",
    description:
      "Entendemos tu negocio, tu cliente ideal y qué acción quieres que tome en tu sitio.",
  },
  {
    title: "Diseño",
    description:
      "Diseñamos cada sección a medida, con foco en claridad y en un solo llamado a la acción por página.",
  },
  {
    title: "Desarrollo",
    description:
      "Construimos el sitio optimizado para velocidad de carga y experiencia mobile-first.",
  },
  {
    title: "Lanzamiento y medición",
    description:
      "Publicamos, conectamos analítica y medimos qué botones y secciones realmente convierten.",
  },
];

const faqs = [
  {
    question: "¿Cuánto tiempo toma tener mi sitio listo?",
    answer:
      "Un sitio de una sola página (landing) toma entre 2 y 3 semanas. Sitios con más secciones o catálogo de productos toman entre 4 y 6 semanas.",
  },
  {
    question: "¿El sitio incluye carrito de compras y pagos?",
    answer:
      "Sí, si tu negocio vende productos podemos integrar carrito y pasarela de pago (Stripe, MercadoPago u otra) según las necesidades de tu negocio.",
  },
  {
    question: "¿Puedo actualizar el contenido yo mismo después?",
    answer:
      "Sí. Dependiendo de tu sitio, dejamos un panel simple de edición o te entregamos una guía para hacer cambios de texto e imágenes sin depender de un desarrollador.",
  },
  {
    question: "¿Se integra con WhatsApp?",
    answer:
      "Sí, es una de las integraciones más pedidas: botón flotante de WhatsApp, formularios que notifican por WhatsApp, o ambos.",
  },
];

export default function DesarrolloWebPage() {
  return (
    <>
      <ServiceIntro
        eyebrow="Desarrollo web"
        title="Un sitio que no solo se ve bien, vende"
        description="Diseñamos y construimos sitios rápidos, claros y enfocados en conversión: cada sección está pensada para llevar al visitante a comprar, agendar o contactarte."
        ctaHref="/quienes-somos#contacto"
        ctaLabel="Agenda una llamada"
      />

      <TeamMemberIntro member={team["desarrollo-web"]} />

      <section className="px-24 py-64 md:px-80">
        <SectionHeading
          eyebrow="Qué incluye"
          title="Todo lo que necesita un sitio para convertir"
        />
        <Reveal className="mx-auto mt-40 grid max-w-[1280px] gap-24 md:grid-cols-3">
          <PastelCard wash="sky">
            <h3 className="text-body font-semibold text-[var(--color-ink-black)]">
              Diseño a medida
            </h3>
            <p className="mt-8 text-body-sm text-[var(--color-graphite)]">
              Sin plantillas genéricas: cada sección se diseña para tu
              negocio y tu cliente ideal.
            </p>
          </PastelCard>
          <PastelCard wash="yellow">
            <h3 className="text-body font-semibold text-[var(--color-ink-black)]">
              Velocidad y mobile-first
            </h3>
            <p className="mt-8 text-body-sm text-[var(--color-graphite)]">
              Más del 70% del tráfico llega desde el celular: optimizamos
              para que cargue rápido ahí primero.
            </p>
          </PastelCard>
          <PastelCard wash="lilac">
            <h3 className="text-body font-semibold text-[var(--color-ink-black)]">
              Integraciones clave
            </h3>
            <p className="mt-8 text-body-sm text-[var(--color-graphite)]">
              WhatsApp, formularios, pagos y analítica conectados desde el
              día uno.
            </p>
          </PastelCard>
        </Reveal>
      </section>

      <section className="bg-[var(--color-cloud-gray)] px-24 py-64 md:px-80">
        <SectionHeading
          eyebrow="Nuestro proceso"
          title="De la idea a un sitio publicado"
        />
        <div className="mt-40">
          <ProcessSteps steps={steps} />
        </div>
      </section>

      <section className="px-24 py-64 md:px-80">
        <Reveal className="mx-auto max-w-[1280px] rounded-[var(--radius-cards)] border border-black/5 bg-white p-32 shadow-[var(--shadow-subtle)] md:p-48">
          <p className="text-body-sm font-semibold text-[var(--color-slate)]">
            Antes / Después
          </p>
          <div className="mt-16 grid gap-12 md:grid-cols-2">
            <div className="rounded-[var(--radius-cards-sm)] bg-[var(--color-cloud-gray)] p-16 text-body-sm">
              Sitio lento, sin llamado a la acción claro → <span className="font-mono-metric">1.2%</span> conversión
            </div>
            <div className="rounded-[var(--radius-cards-sm)] border-l-4 border-l-[var(--color-brand-yellow)] bg-[var(--color-cloud-gray)] p-16 text-body-sm font-medium">
              Web Oppi, rápida y enfocada en vender → <span className="font-mono-metric">4.8%</span> conversión
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-[var(--color-cloud-gray)] px-24 py-64 md:px-80">
        <SectionHeading eyebrow="Preguntas frecuentes" title="Todo lo que debes saber" />
        <div className="mt-40">
          <Faq items={faqs} />
        </div>
      </section>

      <CtaBand
        title="¿Listo para un sitio que venda de verdad?"
        description="Agenda una llamada de 20 minutos y te mostramos ejemplos de sitios similares al tuyo."
      />
    </>
  );
}
