import Link from "next/link";
import { PiArrowRight } from "react-icons/pi";
import { TeamPhoto } from "@/components/ui/TeamPhoto";
import { team } from "@/content/team";

const cards = [
  { key: "marketing", surface: "#ffe848", circle: "rgba(255,255,255,0.45)" },
  { key: "seo", surface: "#040054", circle: "rgba(255,255,255,0.1)" },
  { key: "sem", surface: "#f8673e", circle: "rgba(255,255,255,0.25)" },
] as const;

// "Una persona a cargo de cada frente": 3 tarjetas que enlazan a su servicio.
export function TeamSection() {
  return (
    <section className="bg-[#fff8e6] px-[clamp(24px,5vw,80px)] py-[clamp(72px,9vw,128px)]">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-wrap items-end justify-between gap-x-[64px] gap-y-[24px]">
          <div data-reveal="up" className="max-w-[640px]">
            <p className="text-[14px] font-bold tracking-[0.06em] text-[#f8673e] uppercase">
              Nuestro equipo
            </p>
            <h2 className="mt-[12px] text-[length:clamp(32px,4vw,56px)] leading-[1.05] tracking-[-0.02em] text-balance text-[#040054]">
              Una persona a cargo de cada frente
            </h2>
          </div>
          <p
            data-reveal="up"
            data-delay="120"
            className="max-w-[360px] text-[16px] leading-[1.5] text-[#3d3d3d]"
          >
            Un equipo pequeño y cercano: hablas directamente con quien hace el
            trabajo.
          </p>
        </div>
        <div className="mt-[48px] grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-[20px]">
          {cards.map((card, i) => {
            const member = team[card.key];
            return (
              <Link
                key={card.key}
                href={`/servicios/${card.key}`}
                data-reveal="up"
                data-delay={i * 120}
                className="relative flex flex-col overflow-hidden rounded-[28px] text-[#040054] [transition:transform_500ms_cubic-bezier(.16,1,.3,1),box-shadow_500ms] hover:text-[#040054] hover:shadow-[0_36px_70px_-30px_rgba(4,0,84,0.4)] hover:[transform:translateY(-10px)]"
                style={{ background: card.surface }}
              >
                <div className="relative flex justify-center overflow-hidden pt-[36px]">
                  <div
                    aria-hidden="true"
                    className="absolute bottom-[-120px] left-1/2 -ml-[160px] h-[320px] w-[320px] rounded-full"
                    style={{ background: card.circle }}
                  />
                  <TeamPhoto member={card.key} height={270} className="relative" />
                </div>
                <div className="flex flex-1 flex-col bg-white p-[28px]">
                  <p className="text-[12px] font-bold tracking-[0.06em] text-[#f8673e] uppercase">
                    {member.role}
                  </p>
                  <h3 className="mt-[8px] text-[24px] leading-[1.25]">{member.name}</h3>
                  <p className="mt-[12px] flex-1 text-[15px] leading-[1.55] text-[#3d3d3d]">
                    {member.blurb}
                  </p>
                  <p className="mt-[20px] rounded-[14px] bg-[#fff8e6] px-[14px] py-[12px] text-[14px] leading-[1.4] font-bold text-[#040054]">
                    Te ayuda si: {member.helpsIf}
                  </p>
                  <span className="mt-[16px] flex items-center gap-[8px] text-[14px] font-bold text-[#f8673e]">
                    Ver su servicio
                    <PiArrowRight aria-hidden="true" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
