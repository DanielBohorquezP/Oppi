import Link from "next/link";
import { ContactLink } from "@/components/ui/ContactLink";
import {
  PiArrowDown,
  PiArrowRight,
  PiCrosshair,
  PiMagnifyingGlass,
  PiMonitor,
} from "react-icons/pi";
import { PulseDot } from "@/components/motion/PulseDot";
import { HeroBackdrop } from "@/components/sections/HeroBackdrop";
import { HeroGuideCard } from "@/components/sections/HeroGuideCard";

const chipClass =
  "flex items-center gap-[8px] rounded-full border border-white/10 bg-white/[0.06] px-[14px] py-[8px] text-[14px] text-[#e0e0e0] [transition:background-color_250ms,color_250ms,transform_350ms_cubic-bezier(.16,1,.3,1)] hover:bg-white/[0.12] hover:text-white hover:[transform:translateY(-2px)]";

const chips = [
  { href: "/servicios/seo", icon: PiMagnifyingGlass, label: "Estrategia SEO" },
  { href: "/servicios/sem", icon: PiCrosshair, label: "Google Ads" },
  { href: "/servicios/marketing", icon: PiMonitor, label: "Marketing Digital y Meta Ads" },
];

// El fondo del hero es el HeroBackdrop actual del sitio (GradientWave + velo
// azul), no las manchas del prototipo.
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#040054] px-[clamp(24px,5vw,80px)] pt-[clamp(64px,8vw,112px)] pb-[clamp(80px,9vw,128px)]">
      <HeroBackdrop />
      <div className="relative z-[1] mx-auto flex max-w-[1280px] flex-wrap items-center gap-[64px]">
        <div className="min-w-0 flex-[1_1_480px]">
          <div data-reveal="up">
            <p className="inline-flex max-w-full items-center gap-[12px] rounded-full border border-white/15 bg-white/[0.06] py-[8px] pr-[16px] pl-[12px] text-[length:clamp(11px,1.2vw,13px)] font-bold tracking-[0.06em] text-balance text-[#ffe848] uppercase">
              <PulseDot />
              Marketing digital que sí vende
            </p>
          </div>
          <div data-reveal="up" data-delay="120">
            <h1 className="mt-[24px] text-[length:clamp(38px,4.8vw,62px)] leading-[1.04] tracking-[-0.022em] text-balance text-white">
              Convierte tu presencia digital en{" "}
              <span className="text-[#ffe848]">más ventas</span>
            </h1>
          </div>
          <p
            data-reveal="up"
            data-delay="240"
            className="mt-[24px] max-w-[540px] text-[18px] leading-[1.55] text-pretty text-[#e0e0e0]"
          >
            Web, SEO y Google Ads trabajando juntos para que tu negocio consiga
            más clientes, con resultados medibles.
          </p>
          <div
            data-reveal="up"
            data-delay="340"
            className="mt-[36px] flex flex-wrap gap-[12px]"
          >
            <ContactLink
              href="#contacto"
              className="inline-flex items-center gap-[10px] rounded-[40px] bg-[#f8673e] px-[26px] py-[14px] text-[16px] font-bold max-w-full sm:whitespace-nowrap text-white shadow-[0_12px_30px_-10px_rgba(248,103,62,0.7)] [transition:transform_350ms_cubic-bezier(.16,1,.3,1),box-shadow_350ms,background-color_200ms,color_200ms] hover:bg-[#ffe848] hover:text-[#040054] hover:shadow-[0_18px_36px_-12px_rgba(255,232,72,0.6)] hover:[transform:translateY(-3px)]"
            >
              Agenda tu diagnóstico gratis
              <PiArrowRight aria-hidden="true" />
            </ContactLink>
            <Link
              href="#servicios"
              className="inline-flex items-center gap-[8px] rounded-[40px] border border-white/[0.22] px-[26px] py-[14px] text-[16px] font-bold max-w-full sm:whitespace-nowrap text-white [transition:border-color_200ms,color_200ms,transform_350ms_cubic-bezier(.16,1,.3,1)] hover:border-[#ffe848] hover:text-[#ffe848] hover:[transform:translateY(-3px)]"
            >
              ¿Dónde estoy perdiendo clientes?
              <PiArrowDown aria-hidden="true" />
            </Link>
          </div>
          <div
            data-reveal="fade"
            data-delay="500"
            className="mt-[48px] flex flex-wrap gap-[10px]"
          >
            {chips.map(({ href, icon: Icon, label }) => (
              <Link key={href} href={href} className={chipClass}>
                <Icon aria-hidden="true" className="text-[18px] text-[#ffe848]" />
                {label}
              </Link>
            ))}
          </div>
        </div>

        <HeroGuideCard />
      </div>
    </section>
  );
}
