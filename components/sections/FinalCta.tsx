import { ContactLink } from "@/components/ui/ContactLink";
import { PiArrowRight, PiWhatsappLogo } from "react-icons/pi";
import { Blob } from "@/components/motion/Blob";
import { TeamPhoto } from "@/components/ui/TeamPhoto";
import { whatsappHref } from "@/content/site";

// CTA final del inicio: tarjeta amarilla con manchas animadas (ctaBlobs) y
// las 3 fotos del equipo apoyadas en el borde inferior.
export function FinalCta() {
  return (
    <section className="bg-white px-[clamp(24px,5vw,80px)] py-[clamp(72px,9vw,128px)]">
      <div
        data-reveal="scale"
        className="relative isolate mx-auto flex max-w-[1280px] flex-wrap items-end justify-between gap-[40px] overflow-hidden rounded-[36px] bg-[#ffe848] p-[clamp(40px,6vw,80px)]"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <Blob
            color="#fff"
            position={{ left: "-10%", top: "-40%" }}
            size={460}
            animation="oppiFloatB 18s ease-in-out infinite"
            opacity={0.6}
          />
          <Blob
            color="#f8673e"
            position={{ right: "10%", bottom: "-60%" }}
            size={420}
            animation="oppiFloatA 20s ease-in-out infinite"
            opacity={0.35}
          />
        </div>
        <div className="relative z-[1] min-w-0 flex-[1_1_520px]">
          <h2 className="text-[length:clamp(32px,4.4vw,60px)] leading-[1.04] tracking-[-0.02em] text-balance text-[#040054]">
            ¿Cuántos clientes se están yendo con tu competencia hoy?
          </h2>
          <p className="mt-[20px] max-w-[480px] text-[18px] leading-[1.5] text-[#040054]">
            En 20 minutos te mostramos dónde los estás perdiendo y qué hacer
            primero. Sin compromiso.
          </p>
          <div className="mt-[32px] flex flex-wrap gap-[12px]">
            <ContactLink
              href="#contacto"
              className="inline-flex items-center gap-[10px] rounded-[40px] bg-[#f8673e] px-[28px] py-[15px] text-[16px] font-bold max-w-full sm:whitespace-nowrap text-white shadow-[0_12px_30px_-10px_rgba(248,103,62,0.7)] [transition:transform_350ms_cubic-bezier(.16,1,.3,1),background-color_200ms,color_200ms] hover:bg-[#040054] hover:text-[#ffe848] hover:[transform:translateY(-3px)]"
            >
              Agenda tu diagnóstico gratis
              <PiArrowRight aria-hidden="true" />
            </ContactLink>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[10px] rounded-[40px] border border-[rgba(4,0,84,0.25)] px-[28px] py-[15px] text-[16px] font-bold max-w-full sm:whitespace-nowrap text-[#040054] [transition:background-color_250ms,transform_350ms_cubic-bezier(.16,1,.3,1)] hover:bg-white hover:[transform:translateY(-3px)]"
            >
              <PiWhatsappLogo aria-hidden="true" className="text-[20px]" />
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
        <div className="mb-[calc(-1*clamp(40px,6vw,80px))] flex flex-[0_1_auto] items-end">
          <TeamPhoto
            member="marketing"
            height={210}
            reveal="up"
            delay={200}
            className="mr-[-28px]"
          />
          <TeamPhoto
            member="seo"
            height={245}
            reveal="up"
            delay={80}
            className="relative z-[1]"
          />
          <TeamPhoto
            member="sem"
            height={210}
            reveal="up"
            delay={320}
            className="ml-[-28px]"
          />
        </div>
      </div>
    </section>
  );
}
