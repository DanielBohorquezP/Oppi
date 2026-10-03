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
  title: "Marketing digital y Meta Ads | Oppi",
  description:
    "Auditoría de marketing, gestión de Meta Ads, contenido estratégico y posicionamiento digital para que tu inversión se convierta en clientes.",
};

const steps = [
  {
    title: "Auditoría",
    description:
      "Analizamos tus campañas, canales y contenidos para ver dónde se pierde dinero y qué frena tus resultados.",
  },
  {
    title: "Estrategia",
    description:
      "Definimos posicionamiento, público objetivo y propuesta de valor para tener una dirección concreta.",
  },
  {
    title: "Ejecución",
    description:
      "Lanzamos campañas en Meta Ads y publicamos contenido pensado para los dolores de tu cliente ideal.",
  },
  {
    title: "Medición y ajuste",
    description:
      "Medimos inversión, alcance, leads y costo por resultado, y optimizamos de forma continua.",
  },
];

const idealFor = [
  "Negocios que invierten en pauta sin ver resultados",
  "Marcas que quieren una presencia digital clara",
  "Servicios profesionales y negocios locales",
  "Empresas sin estrategia de contenido",
];

const faqs = [
  {
    question: "¿Qué incluye la auditoría de marketing?",
    answer:
      "Revisamos tu inversión, el rendimiento de tus campañas y la efectividad de tu comunicación para detectar oportunidades de mejora y tomar decisiones basadas en datos.",
  },
  {
    question: "¿Qué métricas reportan en Meta Ads?",
    answer:
      "Inversión, alcance, leads, conversiones y costo por resultado, siempre enfocados en el retorno de la inversión.",
  },
  {
    question: "¿Qué tipo de contenido crean?",
    answer:
      "Contenido estratégico para redes, especialmente Reels y posts, partiendo de los dolores, necesidades y preguntas de tu cliente ideal.",
  },
  {
    question: "¿Necesito también SEO o Google Ads?",
    answer:
      "Depende de tu objetivo. Meta Ads y contenido te ayudan a generar demanda en redes; SEO (/servicios/seo) y Google Ads (/servicios/sem) captan a quien ya está buscando. En la llamada te decimos qué combinación te conviene.",
  },
];

export default function MarketingPage() {
  return (
    <>
      <ServiceIntro
        serviceId="marketing"
        eyebrow="Marketing digital"
        title="Marketing con estrategia, no con ensayo y error"
        tagline="Campañas y contenido pensados alrededor de tu cliente ideal y de tus resultados."
        secondaryHref="#ideal-para"
        secondaryLabel="¿Es para mí?"
        description="Analizamos tus canales, gestionamos tus campañas en Meta Ads y creamos contenido que conecta los problemas de tu cliente con tu propuesta de valor."
        ctaHref="/quienes-somos#contacto"
        ctaLabel="Agenda una llamada"
      />

      <TeamMemberIntro member={team.marketing} />

      <section id="ideal-para" className="px-24 pt-64 md:px-80">
        <div className="mx-auto max-w-[960px] text-center">
          <p className="text-body-sm font-semibold uppercase tracking-wide text-[var(--color-graphite)]">
            Ideal para
          </p>
          <ul className="mt-16 flex flex-wrap justify-center gap-12">
            {idealFor.map((item) => (
              <li
                key={item}
                className="rounded-full border border-black/10 bg-white px-20 py-8 text-body-sm font-medium text-[var(--color-ink-black)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-24 py-64 md:px-80">
        <SectionHeading
          eyebrow="Qué incluye"
          title="Todo lo que necesita tu marketing para vender"
        />
        <Reveal className="mx-auto mt-40 grid max-w-[1280px] gap-24 md:grid-cols-2 lg:grid-cols-4">
          <PastelCard wash="sky">
            <h3 className="text-body font-semibold text-[var(--color-ink-black)]">
              Auditoría de marketing
            </h3>
            <p className="mt-8 text-body-sm text-[var(--color-graphite)]">
              Analizamos campañas, canales y contenidos para identificar
              dónde se pierde dinero y qué frena tus resultados.
            </p>
          </PastelCard>
          <PastelCard wash="yellow">
            <h3 className="text-body font-semibold text-[var(--color-ink-black)]">
              Gestión de Meta Ads
            </h3>
            <p className="mt-8 text-body-sm text-[var(--color-graphite)]">
              Campañas en Facebook e Instagram, desde la segmentación hasta
              la optimización continua, medidas por costo por resultado.
            </p>
          </PastelCard>
          <PastelCard wash="lilac">
            <h3 className="text-body font-semibold text-[var(--color-ink-black)]">
              Estrategia + creación de contenido
            </h3>
            <p className="mt-8 text-body-sm text-[var(--color-graphite)]">
              Reels y posts que parten de los dolores y preguntas de tu
              cliente ideal y muestran cómo lo resuelves.
            </p>
          </PastelCard>
          <PastelCard wash="peach">
            <h3 className="text-body font-semibold text-[var(--color-ink-black)]">
              Consultoría en posicionamiento digital
            </h3>
            <p className="mt-8 text-body-sm text-[var(--color-graphite)]">
              Una presencia digital clara, coherente y orientada a
              objetivos, con menos dependencia del ensayo y error.
            </p>
          </PastelCard>
        </Reveal>
      </section>

      <section className="bg-[var(--color-cloud-gray)] px-24 py-64 md:px-80">
        <SectionHeading
          eyebrow="Nuestro proceso"
          title="De la auditoría a resultados medibles"
        />
        <div className="mt-40">
          <ProcessSteps steps={steps} />
        </div>
      </section>

      <section className="px-24 py-64 md:px-80">
        <SectionHeading eyebrow="Preguntas frecuentes" title="Todo lo que debes saber" />
        <div className="mt-40">
          <Faq items={faqs} />
        </div>
      </section>

      <CtaBand
        title="¿Listo para un marketing que se mida en ventas?"
        description="Agenda una llamada de 20 minutos y revisamos juntos dónde está tu oportunidad."
      />
    </>
  );
}
