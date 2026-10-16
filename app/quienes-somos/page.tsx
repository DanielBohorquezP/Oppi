import type { Metadata } from "next";
import Link from "next/link";
import { PiArrowRight, PiWhatsappLogo } from "react-icons/pi";
import { CtaBlobs } from "@/components/motion/CtaBlobs";
import { PulseDot } from "@/components/motion/PulseDot";
import { TeamSection } from "@/components/sections/TeamSection";
import { TeamPhoto } from "@/components/ui/TeamPhoto";
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
      {/* El hero de esta página siempre fue índigo liso: se conserva tal cual. */}
      <section className="relative isolate overflow-hidden bg-[#040054] px-[clamp(24px,5vw,80px)] pt-[clamp(64px,8vw,112px)] pb-0">
        <div className="mx-auto max-w-[1280px]">
          <div data-reveal="up">
            <p className="inline-flex max-w-full items-center gap-[12px] rounded-full border border-white/15 bg-white/[0.06] py-[8px] pr-[16px] pl-[12px] text-[length:clamp(11px,1.2vw,13px)] font-bold tracking-[0.06em] text-balance text-[#ffe848] uppercase">
              <PulseDot />
              Quiénes somos · Agencia de marketing digital
            </p>
          </div>
          <h1
            data-reveal="up"
            data-delay="120"
            className="mt-[24px] max-w-[960px] text-[length:clamp(38px,5vw,68px)] leading-[1.03] tracking-[-0.022em] text-balance text-white"
          >
            Somos un equipo obsesionado con que{" "}
            <span className="text-[#ffe848]">te lleguen clientes</span>.
          </h1>
          <p
            data-reveal="up"
            data-delay="240"
            className="mt-[24px] max-w-[600px] text-[18px] leading-[1.55] text-pretty text-[#e0e0e0]"
          >
            Oppi nació para cerrar la brecha entre lo que las empresas ofrecen y
            lo que sus clientes encuentran en internet. Sin call center, sin
            tecnicismos: hablas con quien hace el trabajo.
          </p>
          <div className="mt-[56px] flex flex-nowrap items-end justify-center">
            <TeamPhoto
              member="marketing"
              height="clamp(200px,26vw,340px)"
              reveal="up"
              delay={420}
              className="mr-[-4%]"
            />
            <TeamPhoto
              member="seo"
              height="clamp(230px,30vw,390px)"
              reveal="up"
              delay={300}
              className="relative z-[1]"
              priority
            />
            <TeamPhoto
              member="sem"
              height="clamp(200px,26vw,340px)"
              reveal="up"
              delay={540}
              className="ml-[-4%]"
            />
          </div>
        </div>
      </section>

      <section className="px-[clamp(24px,5vw,80px)] py-[clamp(72px,9vw,128px)]">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-start gap-x-[80px] gap-y-[40px]">
          <div data-reveal="up" className="min-w-0 flex-[1_1_460px]">
            <p className="text-[14px] font-bold tracking-[0.06em] text-[#f8673e] uppercase">
              Nuestra misión
            </p>
            <h2 className="mt-[12px] text-[length:clamp(32px,4vw,56px)] leading-[1.05] tracking-[-0.02em] text-balance text-[#040054]">
              Que ningún negocio pierda una venta por falta de visibilidad
              digital.
            </h2>
          </div>
          <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-[20px] pt-[8px]">
            <p
              data-reveal="up"
              data-delay="120"
              className="text-[18px] leading-[1.6] text-[#3d3d3d]"
            >
              Trabajamos con negocios locales, clínicas, restaurantes y empresas
              de servicios que saben que su producto es bueno, pero no logran
              que suficientes personas lo encuentren o confíen en él en
              internet.
            </p>
            <p
              data-reveal="up"
              data-delay="220"
              className="text-[18px] leading-[1.6] text-[#3d3d3d]"
            >
              Por eso atacamos los tres lugares donde se pierden clientes:
              cuando te buscan y no apareces, cuando pagas anuncios que no
              venden y cuando publicas en redes sin que nadie te escriba.
            </p>
          </div>
        </div>
      </section>

      <TeamSection />

      <section className="px-[clamp(24px,5vw,80px)] py-[clamp(72px,9vw,128px)]">
        <div className="mx-auto max-w-[1280px]">
          <div data-reveal="up">
            <p className="text-[14px] font-bold tracking-[0.06em] text-[#f8673e] uppercase">
              Lo que nos guía
            </p>
            <h2 className="mt-[12px] max-w-[760px] text-[length:clamp(32px,4vw,56px)] leading-[1.05] tracking-[-0.02em] text-balance text-[#040054]">
              Tres reglas que no negociamos
            </h2>
          </div>
          <div className="relative mt-[48px] grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-x-[32px]">
            <div
              data-reveal="line"
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-[2px] origin-left bg-[#040054]"
            />
            {values.map((value, i) => (
              <div
                key={value.title}
                data-reveal="up"
                data-delay={150 + i * 130}
                className="pt-[36px]"
              >
                <span className="font-[family-name:var(--font-archivo-black)] text-[48px] leading-none text-[#f8673e]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-[20px] text-[26px] leading-[1.2] text-[#040054]">
                  {value.title}
                </h3>
                <p className="mt-[12px] text-[16px] leading-[1.55] text-[#3d3d3d]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contacto"
        className="scroll-mt-[96px] px-[clamp(24px,5vw,80px)] pb-[clamp(72px,9vw,128px)]"
      >
        <div
          data-reveal="scale"
          className="relative isolate mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-[32px] overflow-hidden rounded-[36px] bg-[#040054] p-[clamp(28px,6vw,80px)]"
        >
          <CtaBlobs />
          <div className="min-w-0 flex-[1_1_460px]">
            <h2 className="text-[length:clamp(32px,4.2vw,56px)] leading-[1.05] tracking-[-0.02em] text-balance text-white">
              ¿Cuántos clientes se están yendo con tu competencia hoy?
            </h2>
            <p className="mt-[16px] max-w-[480px] text-[18px] leading-[1.5] text-[#e0e0e0]">
              En 20 minutos te mostramos dónde los estás perdiendo y qué hacer
              primero. Sin compromiso.
            </p>
          </div>
          <div className="flex flex-col items-start gap-[12px]">
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-[10px] rounded-[40px] bg-[#f8673e] px-[28px] py-[15px] text-[16px] font-bold max-w-full sm:whitespace-nowrap text-white shadow-[0_12px_30px_-10px_rgba(248,103,62,0.7)] [transition:transform_350ms_cubic-bezier(.16,1,.3,1),background-color_200ms,color_200ms] hover:bg-[#ffe848] hover:text-[#040054] hover:[transform:translateY(-3px)]"
            >
              Agenda tu diagnóstico gratis
              <PiArrowRight aria-hidden="true" />
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[8px] px-[4px] py-[8px] text-[14px] text-[#e0e0e0] [transition:gap_300ms,color_300ms] hover:gap-[12px] hover:text-white"
            >
              <PiWhatsappLogo aria-hidden="true" className="text-[18px] text-[#ffe848]" />
              WhatsApp: {site.whatsappDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
