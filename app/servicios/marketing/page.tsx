import type { Metadata } from "next";
import Link from "next/link";
import { PiFilmStrip, PiMagnifyingGlass, PiMegaphone, PiTarget } from "react-icons/pi";
import { ServiceIntro } from "@/components/sections/ServiceIntro";
import { PainChips } from "@/components/sections/PainChips";
import { IncludeGrid, type IncludeItem } from "@/components/sections/IncludeGrid";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Faq, type QA } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { TeamMemberIntro } from "@/components/sections/TeamMemberIntro";
import { team } from "@/content/team";

export const metadata: Metadata = {
  title: "Marketing Digital y Meta Ads en Barranquilla: redes que venden | Oppi",
  description:
    "Deja de publicar y pautar a ciegas. Estrategia, contenido y anuncios en Facebook e Instagram que traen clientes, no solo likes.",
};

const pains = [
  "Pautas y no ves clientes",
  "Publicas y nadie te escribe",
  "No sabes qué decir en redes",
  "No sabes qué está funcionando",
];

const includes: IncludeItem[] = [
  {
    icon: PiMagnifyingGlass,
    accent: "slate",
    title: "Encontramos la fuga",
    text: "Revisamos tus campañas, canales y contenido para ver dónde se está yendo tu dinero.",
  },
  {
    icon: PiTarget,
    accent: "yellow",
    title: "Definimos qué decir",
    text: "Tu público, tu propuesta y tu mensaje claros, para dejar el ensayo y error.",
  },
  {
    icon: PiFilmStrip,
    accent: "ink",
    title: "Contenido que vende",
    text: "Reels y posts a partir de los dolores y preguntas de tu cliente ideal.",
  },
  {
    icon: PiMegaphone,
    accent: "coral",
    title: "Anuncios que traen clientes",
    text: "Campañas en Facebook e Instagram ajustadas por lo que te cuesta cada cliente.",
  },
];

const steps = [
  {
    title: "Diagnóstico",
    description: "Vemos dónde se pierde tu dinero y qué frena tus resultados.",
  },
  {
    title: "Mensaje",
    description: "Definimos a quién le hablas y qué decirle para que te elija.",
  },
  {
    title: "Contenido y anuncios",
    description:
      "Publicamos para tu cliente ideal y lo amplificamos con anuncios en Meta.",
  },
  {
    title: "Medición",
    description:
      "Cada mes ves cuánto invertiste, cuántos clientes llegaron y cuánto te costó cada uno.",
  },
];

const faqs: QA[] = [
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
      "Depende de tu objetivo. Meta Ads y contenido te ayudan a generar demanda en redes; SEO y Google Ads captan a quien ya está buscando. En la llamada te decimos qué combinación te conviene.",
    answerNode: (
      <>
        Depende de tu objetivo. Meta Ads y contenido te ayudan a generar
        demanda en redes;{" "}
        <Link href="/servicios/seo" className="font-semibold text-[var(--color-coral-pulse)] underline">
          SEO
        </Link>{" "}
        y{" "}
        <Link href="/servicios/sem" className="font-semibold text-[var(--color-coral-pulse)] underline">
          Google Ads
        </Link>{" "}
        captan a quien ya está buscando. En la llamada te decimos qué
        combinación te conviene.
      </>
    ),
  },
];

export default function MarketingPage() {
  return (
    <>
      <ServiceIntro
        serviceId="marketing"
        eyebrow="Marketing Digital y Meta Ads"
        title="Deja de publicar y pautar a ciegas"
        highlight="a ciegas"
        description="Descubrimos dónde se está yendo tu dinero, definimos qué decirle a tu cliente ideal y lo convertimos en contenido y anuncios en Facebook e Instagram que traen clientes, no solo likes."
        ctaLabel="Agenda tu diagnóstico gratis"
        secondaryHref="#ideal-para"
        secondaryLabel="¿Es para mí?"
      />

      <PainChips items={pains} />

      <IncludeGrid title="Lo que hacemos para que tus redes vendan" items={includes} />

      <TeamMemberIntro member={team.marketing} />

      <ProcessSteps title="De publicar a ciegas a saber qué funciona" steps={steps} />

      <Faq items={faqs} />

      <CtaBand
        ctaHref="#contacto"
        title="¿Sabes cuánto te cuesta cada cliente que llega por redes?"
        description="En 20 minutos revisamos tus campañas y te decimos dónde se está yendo el dinero."
      />
    </>
  );
}
