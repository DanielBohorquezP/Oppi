"use client";

import { useState, type CSSProperties } from "react";
import {
  PiChartBar,
  PiCrosshair,
  PiMagnifyingGlass,
  PiMonitor,
} from "react-icons/pi";
import { Reveal } from "@/components/motion/Reveal";
import { TeamAvatar } from "@/components/ui/TeamAvatar";
import { team } from "@/content/team";

// Cada persona tiene su color: Angeline amarillo, Daniel azul, Juanse naranja.
const items = [
  {
    icon: PiMonitor,
    owner: "Angeline · Marketing Digital",
    title: "Redes que traen clientes",
    description: "Sabes qué publicar, a quién y cuánto invertir para que tus redes traigan clientes.",
    surface: "bg-[var(--color-brand-yellow)] text-[var(--color-ink-black)]",
    body: "text-[var(--color-ink-black)]",
    ownerClass: "opacity-70",
    chip: "bg-[var(--color-ink-black)] text-[var(--color-brand-yellow)]",
    member: team.marketing,
    // Las fotos de Angeline y Daniel son más angostas: van más altas para pesar igual.
    photoScale: 1.2,
    avatarAccent: "var(--color-ink-black)",
    scrim: "var(--color-brand-yellow)",
  },
  {
    icon: PiMagnifyingGlass,
    owner: "Daniel · Estrategia SEO",
    title: "Apareces tú primero",
    description: "Cuando te buscan en Google o le preguntan a ChatGPT, Claude o Perplexity, apareces tú.",
    surface: "bg-[var(--color-ink-black)] text-white",
    body: "text-[var(--color-frost-gray)]",
    ownerClass: "text-[var(--color-brand-yellow)]",
    chip: "bg-white/10 text-white",
    member: team.seo,
    photoScale: 1.2,
    avatarAccent: "#ffffff",
    scrim: "var(--color-ink-black)",
  },
  {
    icon: PiCrosshair,
    owner: "Juan Sebastián · Google Ads",
    title: "Ni un peso perdido",
    description: "Tus anuncios se revisan cada semana para que no se pierda ni un peso.",
    surface: "bg-[var(--color-coral-pulse)] text-[var(--color-ink-black)]",
    body: "text-[var(--color-ink-black)]",
    ownerClass: "opacity-70",
    chip: "bg-[var(--color-ink-black)] text-white",
    member: team.sem,
    photoScale: 1,
    avatarAccent: "var(--color-ink-black)",
    scrim: "var(--color-coral-pulse)",
  },
  {
    icon: PiChartBar,
    owner: "Todo el equipo · Reportes",
    title: "Sabes en qué se fue tu dinero",
    description: "Cada mes sabes en qué se fue tu dinero y cuántos clientes te trajo.",
    surface: "bg-white text-[var(--color-ink-black)] border border-black/10",
    body: "text-[var(--color-graphite)]",
    ownerClass: "opacity-70",
    chip: "bg-[var(--color-ink-black)] text-white",
    member: null,
    photoScale: 1,
    avatarAccent: "var(--color-ink-black)",
    scrim: "#ffffff",
  },
];

// Paneles que se expanden: en pantallas anchas (xl) el activo ocupa más ancho y
// revela su descripción; por debajo de xl los paneles cerrados quedarían
// demasiado angostos para el título, así que van en grilla (1 columna en
// móvil, 2 en tablet) con todo el texto visible.
export function Toolkit() {
  const [active, setActive] = useState(0);
  const columns = items.map((_, i) => (i === active ? "2.6fr" : "1fr")).join(" ");

  return (
    <section className="bg-[var(--color-cloud-gray)] px-24 py-64 md:px-80 md:py-96">
      <Reveal className="mx-auto max-w-[1280px]">
        <div className="flex flex-wrap items-end justify-between gap-x-64 gap-y-24">
          <h2 className="tracking-heading max-w-[640px] text-heading font-semibold text-balance text-[var(--color-ink-black)] md:text-heading-lg">
            Todo para que te encuentren, te elijan y te compren
          </h2>
          <p className="max-w-[340px] text-body text-[var(--color-graphite)]">
            Un equipo pequeño, una persona a cargo de cada frente. Sabes con
            quién hablas.
          </p>
        </div>
        <div
          className="mt-40 grid gap-16 md:grid-cols-2 xl:min-h-[460px] xl:[grid-template-columns:var(--cols)] xl:transition-[grid-template-columns] xl:duration-500 xl:ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
          style={{ "--cols": columns } as CSSProperties}
        >
          {items.map((item, index) => {
            const isActive = active === index;
            const Icon = item.icon;
            return (
              <button
                key={item.title}
                type="button"
                aria-expanded={isActive}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                className={`relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-[var(--radius-cards)] p-24 text-left md:p-32 ${item.surface}`}
              >
                <span
                  className={`flex h-48 w-48 items-center justify-center rounded-full ${item.chip}`}
                >
                  <Icon size={24} aria-hidden="true" />
                </span>
                {/* Móvil y tablet: la figura queda en el flujo, sobre el texto. */}
                <span className="relative -mb-24 flex flex-1 items-end justify-center pt-8 xl:hidden">
                  {item.member ? (
                    <>
                      <TeamAvatar
                        member={{ ...item.member, accent: item.avatarAccent }}
                        height={Math.round(280 * item.photoScale)}
                      />
                      {/* Desvanecido hacia el color del panel para que el título se lea. */}
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3"
                        style={{
                          background: `linear-gradient(to top, ${item.scrim} 15%, transparent)`,
                        }}
                      />
                    </>
                  ) : (
                    <Icon
                      aria-hidden="true"
                      className="h-[120px] w-[120px] opacity-20"
                    />
                  )}
                </span>
                {/* Escritorio: la figura se dibuja grande y se reduce cuando el
                    panel está cerrado; al expandirse crece y pasa a la derecha. */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute z-0 hidden w-max origin-bottom transition-[left,bottom,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none xl:block"
                  style={{
                    left: isActive ? "calc(100% - 16px)" : "50%",
                    bottom: isActive ? 0 : 130,
                    transform: `translateX(${isActive ? "-100%" : "-50%"}) scale(${isActive ? 1 : 0.55})`,
                  }}
                >
                  {item.member ? (
                    <TeamAvatar
                      member={{ ...item.member, accent: item.avatarAccent }}
                      height={Math.round(380 * item.photoScale)}
                    />
                  ) : (
                    <Icon className="h-[256px] w-[256px] opacity-20" />
                  )}
                </span>
                {/* Degradado del color del panel detrás del texto (abajo a la
                    izquierda), para que se lea aunque la foto quede debajo. */}
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-x-0 bottom-0 z-[5] hidden h-2/3 transition-opacity duration-300 xl:block ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    background: `linear-gradient(to right, ${item.scrim} 45%, transparent 80%)`,
                    maskImage: "linear-gradient(to top, black 55%, transparent)",
                  }}
                />
                <span className="relative z-10 block">
                  <span
                    className={`mb-8 block text-caption font-semibold uppercase tracking-wide ${item.ownerClass}`}
                  >
                    {item.owner}
                  </span>
                  <span className="block text-subheading font-semibold text-balance">
                    {item.title}
                  </span>
                  <span
                    className={`mt-12 block max-w-[380px] text-body transition-[opacity,max-height,margin] duration-300 xl:max-w-[240px] xl:overflow-hidden ${item.body} ${
                      isActive
                        ? "xl:max-h-[220px] xl:opacity-100"
                        : "xl:mt-0 xl:max-h-0 xl:opacity-0"
                    }`}
                  >
                    {item.description}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
