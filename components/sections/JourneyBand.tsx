import {
  PiChartLineUp,
  PiMagnifyingGlass,
  PiPencilRuler,
  PiRocketLaunch,
} from "react-icons/pi";
import { Blob } from "@/components/motion/Blob";

const cardBase =
  "flex flex-col rounded-[28px] p-[32px] [transition:transform_500ms_cubic-bezier(.16,1,.3,1),background-color_300ms] hover:[transform:translateY(-8px)]";

const steps = [
  {
    icon: PiMagnifyingGlass,
    n: "01",
    title: "Diagnóstico",
    text: "Te decimos sin rodeos por qué hoy no te están llegando clientes.",
    minH: 260,
    delay: 0,
    card: "border border-white/[0.08] bg-white/[0.05] text-white hover:bg-white/[0.09]",
  },
  {
    icon: PiPencilRuler,
    n: "02",
    title: "Plan",
    text: "Un plan que ataca primero lo que más rápido te va a dar resultados.",
    minH: 310,
    delay: 140,
    card: "border border-white/[0.08] bg-white/[0.09] text-white hover:bg-white/[0.13]",
  },
  {
    icon: PiRocketLaunch,
    n: "03",
    title: "Implementación",
    text: "Lo ponemos en marcha en días; tú sigues atendiendo tu negocio.",
    minH: 360,
    delay: 280,
    card: "border border-white/[0.08] bg-white/[0.14] text-white hover:bg-white/[0.18]",
  },
];

// "Cómo trabajamos": 4 tarjetas escalonadas sobre fondo índigo con manchas
// animadas (procBlobs del prototipo).
export function JourneyBand() {
  return (
    <section className="relative isolate overflow-hidden bg-[#040054] px-[clamp(24px,5vw,80px)] py-[clamp(72px,9vw,128px)]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <Blob
          color="#f8673e"
          position={{ right: "-10%", bottom: "-30%" }}
          size={520}
          animation="oppiFloatA 20s ease-in-out infinite"
          opacity={0.35}
        />
        <Blob
          color="#2b23c9"
          position={{ left: "-10%", top: "-20%" }}
          size={560}
          animation="oppiFloatB 24s ease-in-out infinite"
          opacity={0.6}
        />
      </div>
      <div className="mx-auto max-w-[1280px]">
        <div data-reveal="up">
          <p className="text-[14px] font-bold tracking-[0.06em] text-[#ffe848] uppercase">
            Cómo trabajamos
          </p>
          <h2 className="mt-[12px] max-w-[860px] text-[length:clamp(32px,4vw,56px)] leading-[1.05] tracking-[-0.02em] text-balance text-white">
            De “no sé qué está fallando” a saber exactamente qué te trae
            clientes
          </h2>
        </div>
        <div className="mt-[64px] grid grid-cols-[repeat(auto-fit,minmax(min(100%,230px),1fr))] items-end gap-[16px]">
          {steps.map(({ icon: Icon, ...step }) => (
            <div
              key={step.n}
              data-reveal="up"
              data-delay={step.delay}
              className={`${cardBase} ${step.card}`}
              style={{ minHeight: step.minH }}
            >
              <div className="flex items-center justify-between">
                <span className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-white/10 text-[24px] text-[#ffe848]">
                  <Icon aria-hidden="true" />
                </span>
                <span className="font-[family-name:var(--font-archivo-black)] text-[14px] text-white/40">
                  {step.n}
                </span>
              </div>
              <h3 className="mt-auto pt-[32px] text-[22px] leading-[1.25]">
                {step.title}
              </h3>
              <p className="mt-[8px] text-[15px] leading-[1.5] text-[#e0e0e0]">
                {step.text}
              </p>
            </div>
          ))}
          <div
            data-reveal="up"
            data-delay="420"
            className="flex min-h-[410px] flex-col rounded-[28px] bg-[#f8673e] p-[32px] text-[#040054] shadow-[0_30px_60px_-30px_rgba(248,103,62,0.8)] [transition:transform_500ms_cubic-bezier(.16,1,.3,1)] hover:[transform:translateY(-8px)]"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#040054] text-[24px] text-[#f8673e]">
                <PiChartLineUp aria-hidden="true" />
              </span>
              <span className="font-[family-name:var(--font-archivo-black)] text-[14px] text-[rgba(4,0,84,0.55)]">
                04
              </span>
            </div>
            <h3 className="mt-auto pt-[32px] text-[22px] leading-[1.25]">
              Resultados
            </h3>
            <p className="mt-[8px] text-[15px] leading-[1.5] text-[#040054]">
              Cada mes ves cuántos clientes llegaron y cuánto te costó cada uno.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
