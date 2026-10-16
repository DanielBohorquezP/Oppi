import Link from "next/link";
import { ContactLink } from "@/components/ui/ContactLink";
import {
  PiArrowDown,
  PiArrowLeft,
  PiArrowRight,
  PiCheckCircle,
} from "react-icons/pi";
import { PulseDot } from "@/components/motion/PulseDot";
import { HeroBackdrop } from "@/components/sections/HeroBackdrop";
import { HeroGuideCard } from "@/components/sections/HeroGuideCard";
import type { ServiceKey, ServicePageData } from "@/content/service-pages";

const checks = [
  "Diagnóstico gratis",
  "Sin compromiso",
  "Hablas con quien hace el trabajo",
];

// Hero de las páginas de servicio. El fondo es el HeroBackdrop actual del
// sitio (GradientWave + velo azul), no las manchas del prototipo.
export function ServiceHero({
  serviceKey,
  page,
}: {
  serviceKey: ServiceKey;
  page: ServicePageData;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#040054] px-[clamp(24px,5vw,80px)] pt-[clamp(56px,7vw,104px)] pb-[clamp(72px,8vw,120px)]">
      <HeroBackdrop splitAt="lg" />
      <div className="relative z-[1] mx-auto flex max-w-[1280px] flex-wrap items-center gap-[64px]">
        <div className="min-w-0 flex-[1_1_480px]">
          <Link
            data-reveal="fade"
            href="/#servicios"
            className="flex w-fit items-center gap-[8px] text-[14px] text-[#e0e0e0] [transition:gap_300ms,color_300ms] hover:gap-[12px] hover:text-white"
          >
            <PiArrowLeft aria-hidden="true" />
            Todos los servicios
          </Link>
          <p
            data-reveal="up"
            data-delay="80"
            className="mt-[32px] inline-flex items-center gap-[12px] rounded-full border border-white/15 bg-white/[0.06] py-[8px] pr-[16px] pl-[12px] text-[13px] font-bold tracking-[0.06em] max-w-full sm:whitespace-nowrap text-[#ffe848] uppercase"
          >
            <PulseDot />
            {page.eyebrow}
          </p>
          <h1
            data-reveal="up"
            data-delay="160"
            className="mt-[24px] text-[length:clamp(38px,4.8vw,64px)] leading-[1.04] tracking-[-0.022em] text-balance text-white"
          >
            {page.h1Pre}
            <span className="text-[#ffe848]">{page.h1Hi}</span>
            {page.h1Post}
          </h1>
          <p
            data-reveal="up"
            data-delay="260"
            className="mt-[24px] max-w-[540px] text-[18px] leading-[1.55] text-pretty text-[#e0e0e0]"
          >
            {page.desc}
          </p>
          <div
            data-reveal="up"
            data-delay="360"
            className="mt-[36px] flex flex-wrap gap-[12px]"
          >
            <ContactLink
              href="#contacto"
              className="inline-flex items-center gap-[10px] rounded-[40px] bg-[#f8673e] px-[26px] py-[14px] text-[16px] font-bold max-w-full sm:whitespace-nowrap text-white shadow-[0_12px_30px_-10px_rgba(248,103,62,0.7)] [transition:transform_350ms_cubic-bezier(.16,1,.3,1),box-shadow_350ms,background-color_200ms,color_200ms] hover:bg-[#ffe848] hover:text-[#040054] hover:shadow-[0_18px_36px_-12px_rgba(255,232,72,0.6)] hover:[transform:translateY(-3px)]"
            >
              {page.cta}
              <PiArrowRight aria-hidden="true" />
            </ContactLink>
            <Link
              href="#dolores"
              className="inline-flex items-center gap-[8px] rounded-[40px] border border-white/[0.22] px-[26px] py-[14px] text-[16px] font-bold max-w-full sm:whitespace-nowrap text-white [transition:border-color_200ms,color_200ms,transform_350ms_cubic-bezier(.16,1,.3,1)] hover:border-[#ffe848] hover:text-[#ffe848] hover:[transform:translateY(-3px)]"
            >
              ¿Es para mí?
              <PiArrowDown aria-hidden="true" />
            </Link>
          </div>
          <div
            data-reveal="fade"
            data-delay="520"
            className="mt-[40px] flex flex-wrap gap-x-[28px] gap-y-[12px] text-[14px] text-[#e0e0e0]"
          >
            {checks.map((label) => (
              <span key={label} className="flex items-center gap-[8px]">
                <PiCheckCircle aria-hidden="true" className="text-[18px] text-[#ffe848]" />
                {label}
              </span>
            ))}
          </div>
        </div>

        <HeroGuideCard initialServiceId={serviceKey} />
      </div>
    </section>
  );
}
