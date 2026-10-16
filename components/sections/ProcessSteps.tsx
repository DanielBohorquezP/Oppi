"use client";

import { ContactLink } from "@/components/ui/ContactLink";
import { useEffect, useRef, useState } from "react";
import { PiArrowRight } from "react-icons/pi";

const YELLOW = "#ffe848";
const CORAL = "#f8673e";

/*
  "Cómo trabajamos": título fijo (sticky) a la izquierda y la línea de tiempo a
  la derecha. Al hacer scroll la línea se rellena y cada paso se enciende
  cuando cruza el 60 % del viewport.
*/
export function ProcessSteps({
  title,
  steps,
}: {
  title: string;
  steps: { title: string; text: string }[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [lit, setLit] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const track = trackRef.current;
      const fill = fillRef.current;
      if (!track || !fill) return;
      const line = window.innerHeight * 0.6;
      const rect = track.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (line - rect.top) / rect.height));
      fill.style.transform = `scaleY(${progress})`;
      let count = 0;
      stepRefs.current.forEach((step) => {
        if (step && step.getBoundingClientRect().top < line) count += 1;
      });
      setLit(count);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="px-[clamp(24px,5vw,80px)] py-[clamp(72px,9vw,128px)]">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-start gap-x-[96px] gap-y-[48px]">
        <div
          data-reveal="up"
          className="lg:sticky lg:top-[120px] max-w-[460px] flex-[1_1_340px]"
        >
          <p className="text-[14px] font-bold tracking-[0.06em] text-[#f8673e] uppercase">
            Cómo trabajamos
          </p>
          <h2 className="mt-[12px] text-[length:clamp(32px,4vw,52px)] leading-[1.06] tracking-[-0.02em] text-balance text-[#040054]">
            {title}
          </h2>
          <p className="mt-[20px] text-[17px] leading-[1.55] text-[#3d3d3d]">
            Sin letra pequeña: así se ve cada etapa y lo que recibes en cada
            una.
          </p>
          <ContactLink
            href="#contacto"
            className="mt-[32px] inline-flex items-center gap-[8px] rounded-[40px] border border-[rgba(4,0,84,0.2)] px-[22px] py-[12px] text-[15px] font-bold text-[#040054] [transition:background-color_250ms,color_250ms,border-color_250ms] hover:border-[#040054] hover:bg-[#040054] hover:text-white"
          >
            Empieza por el diagnóstico
            <PiArrowRight aria-hidden="true" />
          </ContactLink>
        </div>

        <div
          ref={trackRef}
          className="relative flex min-w-0 flex-[1.3_1_420px] flex-col gap-[64px] py-[8px] pr-0 pl-[76px]"
        >
          <div
            aria-hidden="true"
            className="absolute top-[28px] bottom-[28px] left-[19px] w-[2px] overflow-hidden rounded-[2px] bg-[#e0e0e0]"
          >
            <div
              ref={fillRef}
              className="h-full w-full origin-top bg-[linear-gradient(#ffe848,#f8673e)]"
              style={{ transform: "scaleY(0)" }}
            />
          </div>
          {steps.map((step, i) => {
            const on = i < lit;
            const color = i === steps.length - 1 ? CORAL : YELLOW;
            return (
              <div
                key={step.title}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                className="relative [transition:opacity_600ms_cubic-bezier(.16,1,.3,1)]"
                style={{ opacity: on ? 1 : 0.38 }}
              >
                <span
                  aria-hidden="true"
                  className="absolute top-0 -left-[76px] flex h-[40px] w-[40px] items-center justify-center rounded-full border-2 text-[15px] font-bold text-[#040054] [transition:background-color_500ms,border-color_500ms,transform_500ms_cubic-bezier(.16,1,.3,1)]"
                  style={{
                    background: on ? color : "#fff",
                    borderColor: on ? color : "#040054",
                    transform: on ? "scale(1.12)" : "scale(1)",
                  }}
                >
                  {i + 1}
                </span>
                <p className="text-[13px] font-bold tracking-[0.06em] text-[#7a7a7a] uppercase">
                  Paso 0{i + 1}
                </p>
                <h3 className="mt-[8px] text-[length:clamp(24px,2.4vw,32px)] leading-[1.15] text-[#040054]">
                  {step.title}
                </h3>
                <p className="mt-[12px] max-w-[520px] text-[17px] leading-[1.55] text-[#3d3d3d]">
                  {step.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
