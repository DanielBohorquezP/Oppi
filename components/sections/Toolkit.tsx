"use client";

import { useState } from "react";
import { PiCrosshair, PiMagnifyingGlass, PiMonitor } from "react-icons/pi";
import type { IconType } from "react-icons";
import { TeamPhoto } from "@/components/ui/TeamPhoto";
import type { team } from "@/content/team";

/*
  "Todo para que te encuentren, te elijan y te compren": 3 tarjetas con la foto
  de cada integrante, en acordeón. La tarjeta activa crece (flex 2.6), su foto
  se mueve y escala y la descripción se despliega (700 ms,
  cubic-bezier(.16,1,.3,1)). Se activa con hover, focus o click.
*/

type Panel = {
  member: keyof typeof team;
  icon: IconType;
  surface: string;
  text: string;
  iconBg: string;
  iconColor: string;
  labelClass: string;
  label: string;
  title: string;
  description: string;
  descriptionClass: string;
};

const panels: Panel[] = [
  {
    member: "marketing",
    icon: PiMonitor,
    surface: "#ffe848",
    text: "#040054",
    iconBg: "#040054",
    iconColor: "#ffe848",
    labelClass: "opacity-70",
    label: "Angeline · Marketing Digital",
    title: "Redes que traen clientes",
    description:
      "Sabes qué publicar, a quién y cuánto invertir para que tus redes traigan clientes.",
    descriptionClass: "",
  },
  {
    member: "seo",
    icon: PiMagnifyingGlass,
    surface: "#040054",
    text: "#ffffff",
    iconBg: "rgba(255,255,255,0.1)",
    iconColor: "#ffffff",
    labelClass: "text-[#ffe848]",
    label: "Daniel · Estrategia SEO",
    title: "Apareces tú primero",
    description:
      "Cuando te buscan en Google o le preguntan a ChatGPT, apareces tú.",
    descriptionClass: "text-[#e0e0e0]",
  },
  {
    member: "sem",
    icon: PiCrosshair,
    surface: "#f8673e",
    text: "#040054",
    iconBg: "#040054",
    iconColor: "#ffffff",
    labelClass: "opacity-75",
    label: "Juan Sebastián · Google Ads",
    title: "Ni un peso perdido",
    description:
      "Tus anuncios se revisan cada semana para que no se pierda ni un peso.",
    descriptionClass: "",
  },
];

export function Toolkit() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#fff8e6] px-[clamp(24px,5vw,80px)] py-[clamp(72px,9vw,128px)]">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-wrap items-end justify-between gap-x-[64px] gap-y-[24px]">
          <h2
            data-reveal="up"
            className="max-w-[720px] text-[length:clamp(32px,4vw,56px)] leading-[1.05] tracking-[-0.02em] text-balance text-[#040054]"
          >
            Todo para que te encuentren, te elijan y te compren
          </h2>
          <p
            data-reveal="up"
            data-delay="120"
            className="max-w-[340px] text-[16px] leading-[1.5] text-[#3d3d3d]"
          >
            Un equipo pequeño, una persona a cargo de cada frente. Sabes con
            quién hablas.
          </p>
        </div>

        <div
          data-reveal="up"
          data-delay="200"
          className="mt-[48px] flex flex-wrap gap-[16px]"
        >
          {panels.map((panel, i) => {
            const on = active === i;
            const Icon = panel.icon;
            const activate = () => setActive(i);
            return (
              <button
                key={panel.member}
                type="button"
                aria-expanded={on}
                onMouseEnter={activate}
                onFocus={activate}
                onClick={activate}
                className="relative flex min-h-[480px] min-w-[230px] cursor-pointer flex-col justify-between overflow-hidden rounded-[28px] p-[32px] text-left [transition:flex_700ms_cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  flex: on ? "2.6 1 0" : "1 1 0",
                  background: panel.surface,
                  color: panel.text,
                }}
              >
                <span
                  className="relative z-10 flex h-[48px] w-[48px] items-center justify-center rounded-full text-[24px]"
                  style={{ background: panel.iconBg, color: panel.iconColor }}
                >
                  <Icon aria-hidden="true" />
                </span>
                <TeamPhoto
                  member={panel.member}
                  alt=""
                  height={420}
                  className="absolute z-0 origin-bottom [transition:all_700ms_cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    left: on ? "calc(100% - 16px)" : "50%",
                    bottom: on ? "0px" : "130px",
                    transform: on
                      ? "translateX(-100%) scale(1)"
                      : "translateX(-50%) scale(0.55)",
                  }}
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[66%] [mask-image:linear-gradient(to_top,black_55%,transparent)] [transition:opacity_400ms]"
                  style={{
                    background: `linear-gradient(to right, ${panel.surface} 45%, transparent 80%)`,
                    opacity: on ? 1 : 0,
                  }}
                />
                <span className="relative z-10 block">
                  <span
                    className={`block text-[12px] font-bold tracking-[0.06em] uppercase ${panel.labelClass}`}
                  >
                    {panel.label}
                  </span>
                  <span className="mt-[8px] block font-[family-name:var(--font-archivo-black)] text-[22px] leading-[1.2]">
                    {panel.title}
                  </span>
                  <span
                    className={`block max-w-[260px] overflow-hidden text-[16px] leading-[1.45] [transition:all_500ms_cubic-bezier(.16,1,.3,1)] ${panel.descriptionClass}`}
                    style={{
                      marginTop: on ? "12px" : "0px",
                      maxHeight: on ? "220px" : "0px",
                      opacity: on ? 1 : 0,
                    }}
                  >
                    {panel.description}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
