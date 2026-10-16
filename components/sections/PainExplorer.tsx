"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { PiArrowRight, PiLightbulb } from "react-icons/pi";
import { presetGuide } from "@/components/sections/GuideFlow";
import { services } from "@/content/guide";
import { team } from "@/content/team";
import type { ServiceKey } from "@/content/service-pages";

const PAIN_MS = 5500;

/*
  "¿Te suena?": los dolores del cliente a la izquierda y, a la derecha, lo que
  haríamos primero. Rota solo cada 5,5 s (barra amarilla que se llena) hasta
  que la persona toca uno. "Quiero resolver esto" baja suave al formulario y lo
  deja en el paso 3 con ese servicio y ese reto elegidos.
*/
export function PainExplorer({ serviceKey }: { serviceKey: ServiceKey }) {
  const challenges = services.find((s) => s.id === serviceKey)!.challenges;
  const member = team[serviceKey];
  const [pain, setPain] = useState(0);
  const [auto, setAuto] = useState(true);
  const current = Math.min(pain, challenges.length - 1);

  useEffect(() => {
    if (!auto || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const timer = setInterval(
      () => setPain((p) => (p + 1) % challenges.length),
      PAIN_MS
    );
    return () => clearInterval(timer);
  }, [auto, challenges.length]);

  const solve = () => {
    setAuto(false);
    presetGuide(serviceKey, current);
    const form = document.getElementById("contacto");
    if (form) {
      window.scrollTo({
        top: form.getBoundingClientRect().top + window.scrollY - 110,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="dolores"
      className="scroll-mt-[80px] px-[clamp(24px,5vw,80px)] py-[clamp(72px,9vw,128px)]"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-wrap items-end justify-between gap-x-[64px] gap-y-[24px]">
          <div data-reveal="up" className="max-w-[720px]">
            <p className="text-[14px] font-bold tracking-[0.06em] text-[#f8673e] uppercase">
              ¿Te suena?
            </p>
            <h2 className="mt-[12px] text-[length:clamp(32px,4vw,52px)] leading-[1.06] tracking-[-0.02em] text-balance text-[#040054]">
              Esto nos dicen antes de llamarnos
            </h2>
          </div>
          <p
            data-reveal="up"
            data-delay="120"
            className="max-w-[360px] text-[17px] leading-[1.5] text-[#3d3d3d]"
          >
            Toca el que más se parece a tu caso y te contamos qué haríamos
            primero.
          </p>
        </div>

        <div className="mt-[48px] flex flex-wrap items-stretch gap-[24px]">
          <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-[12px]">
            {challenges.map(({ label }, i) => {
              const on = i === current;
              return (
                <button
                  key={label}
                  type="button"
                  aria-pressed={on}
                  data-reveal="left"
                  data-delay={i * 90}
                  onClick={() => {
                    setPain(i);
                    setAuto(false);
                  }}
                  className={`relative flex cursor-pointer items-center gap-[14px] overflow-hidden rounded-[20px] border px-[18px] py-[20px] sm:gap-[20px] sm:px-[28px] sm:py-[24px] text-left [transition:background-color_450ms_cubic-bezier(.16,1,.3,1),border-color_450ms,transform_400ms_cubic-bezier(.16,1,.3,1),box-shadow_450ms] hover:[transform:translateX(6px)] ${
                    on
                      ? "border-[#040054] bg-[#040054] shadow-[0_24px_50px_-24px_rgba(4,0,84,0.55)]"
                      : "border-[rgba(4,0,84,0.12)] bg-white"
                  }`}
                >
                  <span
                    className={`shrink-0 font-[family-name:var(--font-archivo-black)] text-[14px] [transition:color_400ms] ${
                      on ? "text-[#ffe848]" : "text-[#a6a6a6]"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`flex-1 font-[family-name:var(--font-archivo-black)] text-[length:clamp(18px,1.8vw,22px)] leading-[1.25] text-balance [transition:color_400ms] ${
                      on ? "text-white" : "text-[#040054]"
                    }`}
                  >
                    “{label}”
                  </span>
                  <PiArrowRight
                    aria-hidden="true"
                    className={`text-[20px] [transition:color_400ms,transform_400ms] ${
                      on
                        ? "text-[#ffe848] [transform:translateX(4px)]"
                        : "text-[#a6a6a6]"
                    }`}
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-[3px] origin-left"
                  >
                    {on && (
                      <span
                        key={`${current}-${auto}`}
                        className="block h-full origin-left bg-[#ffe848]"
                        style={{
                          animation: auto
                            ? `oppiBar ${PAIN_MS}ms linear forwards`
                            : "none",
                        }}
                      />
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            data-reveal="up"
            data-delay="200"
            className="relative flex min-h-[380px] min-w-0 flex-[1_1_420px] flex-col overflow-hidden rounded-[28px] bg-[#040054] p-[clamp(28px,4vw,48px)]"
          >
            <div
              aria-hidden="true"
              className="absolute -top-[120px] -right-[120px] h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(248,103,62,0.45),transparent_70%)]"
            />
            <div
              key={current}
              aria-live="polite"
              className="oppi-panel-in relative flex flex-1 flex-col"
            >
              <p className="flex items-center gap-[8px] text-[14px] font-bold tracking-[0.06em] text-[#ffe848] uppercase">
                <PiLightbulb aria-hidden="true" className="text-[18px]" />
                Lo que haríamos primero
              </p>
              <p className="mt-[20px] font-[family-name:var(--font-archivo-black)] text-[length:clamp(22px,2.3vw,30px)] leading-[1.25] text-pretty text-white">
                {challenges[current].pitch}
              </p>
              <div className="mt-auto flex flex-wrap items-center justify-between gap-[20px] pt-[32px]">
                <div className="flex items-center gap-[12px]">
                  <span className="block h-[52px] w-[52px] overflow-hidden rounded-full bg-[#ffe848]">
                    {serviceKey === "marketing" ? (
                      // La foto de Angeline tiene aire arriba: se encuadra en la cara.
                      <span
                        role="img"
                        aria-label={member.name}
                        className="block h-full w-full bg-no-repeat"
                        style={{
                          backgroundImage: `url(${member.photoSrc})`,
                          backgroundSize: "84px auto",
                          backgroundPosition: "-8px -32px",
                        }}
                      />
                    ) : (
                      <Image
                        src={member.photoSrc ?? ""}
                        alt={member.name}
                        width={Math.round(1000 * (member.photoRatio ?? 1))}
                        height={1000}
                        unoptimized
                        className="h-[120%] w-full object-cover object-top"
                      />
                    )}
                  </span>
                  <div>
                    <p className="text-[15px] font-bold text-white">{member.name}</p>
                    <p className="mt-[2px] text-[13px] text-[#e0e0e0]">{member.role}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={solve}
                  className="inline-flex cursor-pointer items-center gap-[8px] rounded-[40px] bg-[#f8673e] px-[22px] py-[13px] text-[15px] font-bold text-white [transition:background-color_200ms,color_200ms,transform_350ms_cubic-bezier(.16,1,.3,1)] hover:bg-[#ffe848] hover:text-[#040054] hover:[transform:translateY(-2px)]"
                >
                  Quiero resolver esto
                  <PiArrowRight aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
