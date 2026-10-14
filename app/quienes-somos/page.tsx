import type { Metadata } from "next";
import { PiArrowRight, PiWhatsappLogo } from "react-icons/pi";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TeamAvatar } from "@/components/ui/TeamAvatar";
import { Reveal } from "@/components/motion/Reveal";
import { TeamSection } from "@/components/sections/TeamSection";
import { CONTACT_TRIGGER_HREF } from "@/lib/contact-modal";
import { team } from "@/content/team";
import { site, whatsappHref } from "@/content/site";

export const metadata: Metadata = {
  title: "Quiénes Somos | Oppi, agencia de marketing digital",
  description:
    "Somos tres personas obsesionadas con que te lleguen clientes. Hablas directo con quien hace el trabajo, sin call center ni tecnicismos.",
};

const values = [
  {
    title: "Medimos en clientes, no en likes",
    description:
      "Cada mes sabes cuántos clientes llegaron y cuánto te costó cada uno. Si algo no trae clientes, lo cortamos.",
  },
  {
    title: "Trabajo cercano",
    description:
      "Somos un equipo pequeño que conoce cada cuenta a fondo, no un call center de soporte.",
  },
  {
    title: "Te lo decimos sin rodeos",
    description:
      "Te hablamos de clientes, plata y competencia, no de tecnicismos. Si algo no te conviene, también te lo decimos.",
  },
];

export default function QuienesSomosPage() {
  return (
    <>
      <section className="overflow-hidden bg-[var(--color-ink-black)] px-24 pt-64 md:px-80 md:pt-[104px]">
        <div className="mx-auto max-w-[1280px]">
          <Eyebrow tone="yellow" className="mb-16">
            Quiénes somos · Agencia de marketing digital
          </Eyebrow>
          <h1 className="tracking-heading max-w-[920px] text-[36px] leading-[1.05] font-semibold text-balance text-white md:text-[62px]">
            Somos tres personas obsesionadas con que{" "}
            <span className="text-[var(--color-brand-yellow)]">te lleguen clientes</span>.
          </h1>
          <p className="mt-24 max-w-[600px] text-body-lg text-[var(--color-frost-gray)]">
            Oppi nació para cerrar la brecha entre lo que las empresas ofrecen y
            lo que sus clientes encuentran en internet. Sin call center, sin
            tecnicismos: hablas con quien hace el trabajo.
          </p>
          <div className="mt-56 flex items-end justify-center">
            <div className="-mr-[28px]">
              <TeamAvatar member={team.marketing} height={340} fluidHeight="clamp(120px, 26vw, 340px)" />
            </div>
            <div className="relative z-10">
              <TeamAvatar member={team.seo} height={390} fluidHeight="clamp(140px, 30vw, 390px)" />
            </div>
            <div className="-ml-[28px]">
              <TeamAvatar member={team.sem} height={340} fluidHeight="clamp(120px, 26vw, 340px)" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-24 py-64 md:px-80 md:py-96">
        <Reveal className="mx-auto flex max-w-[1280px] flex-wrap gap-x-80 gap-y-32">
          <div className="flex-[1_1_380px]">
            <Eyebrow tone="coral" className="mb-12">
              Nuestra misión
            </Eyebrow>
            <h2 className="tracking-heading text-heading font-semibold text-balance text-[var(--color-ink-black)] md:text-heading-lg">
              Que ningún negocio pierda una venta por falta de visibilidad
              digital.
            </h2>
          </div>
          <div className="flex flex-[1_1_420px] flex-col gap-20 text-body-lg leading-[1.55] text-[var(--color-graphite)]">
            <p>
              Trabajamos con negocios locales, clínicas, restaurantes y
              empresas de servicios que saben que su producto es bueno, pero no
              logran que suficientes personas lo encuentren o confíen en él en
              internet.
            </p>
            <p>
              Por eso atacamos los tres lugares donde se pierden clientes:
              cuando te buscan y no apareces, cuando pagas anuncios que no
              venden y cuando publicas en redes sin que nadie te escriba.
            </p>
          </div>
        </Reveal>
      </section>

      <TeamSection />

      <section className="px-24 py-64 md:px-80 md:py-96">
        <div className="mx-auto max-w-[1280px]">
          <Eyebrow tone="coral" className="mb-12">
            Lo que nos guía
          </Eyebrow>
          <Reveal className="mt-24 grid gap-32 border-t-2 border-[var(--color-ink-black)] pt-32 md:grid-cols-3 md:gap-48">
            {values.map((value, index) => (
              <div key={value.title}>
                <p
                  className="text-[20px] text-[var(--color-coral-pulse)]"
                  style={{ fontFamily: "var(--font-archivo-black)" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-12 text-[24px] leading-[1.25] font-semibold text-[var(--color-ink-black)]">
                  {value.title}
                </h3>
                <p className="mt-12 text-body text-[var(--color-graphite)]">
                  {value.description}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="contacto" className="scroll-mt-96 px-24 pb-64 md:px-80 md:pb-96">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-x-64 gap-y-32 rounded-[32px] bg-[var(--color-ink-black)] p-32 md:p-64">
          <div className="max-w-[640px] flex-[1_1_420px]">
            <h2 className="tracking-heading text-heading font-semibold text-balance text-white md:text-heading-lg">
              ¿Cuántos clientes se están yendo con tu competencia hoy?
            </h2>
            <p className="mt-16 text-body-lg text-[var(--color-frost-gray)]">
              En 20 minutos te mostramos dónde los estás perdiendo y qué hacer
              primero. Sin compromiso.
            </p>
          </div>
          <div className="flex flex-col items-start gap-8">
            <Button href={CONTACT_TRIGGER_HREF} variant="coral">
              Agenda tu diagnóstico gratis
              <PiArrowRight aria-hidden="true" className="ml-8 inline" />
            </Button>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-8 py-12 text-body-sm text-[var(--color-frost-gray)] underline-offset-4 hover:text-white hover:underline"
            >
              <PiWhatsappLogo size={18} aria-hidden="true" className="text-[var(--color-brand-yellow)]" />
              WhatsApp: {site.whatsappDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
