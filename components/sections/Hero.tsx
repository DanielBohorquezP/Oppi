import { PiArrowDown, PiCrosshair, PiMagnifyingGlass, PiMonitor } from "react-icons/pi";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HeroGuideCard } from "@/components/sections/HeroGuideCard";
import { HeroBackdrop } from "@/components/sections/HeroBackdrop";

// Los nombres de los servicios quedan en una fila discreta bajo el botón, sin
// competir con el dolor del H1. En móvil se oculta para no recargar el hero
// (sigue en el HTML, así que Google la lee igual).
const serviceNames = [
  { icon: PiMagnifyingGlass, label: "Estrategia SEO" },
  { icon: PiCrosshair, label: "Google Ads" },
  { icon: PiMonitor, label: "Marketing Digital y Meta Ads" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-ink-black)] px-24 py-64 md:px-80 md:py-96">
      <HeroBackdrop />
      <div className="relative z-10 mx-auto grid max-w-[1280px] items-center gap-48 xl:grid-cols-[minmax(0,1fr)_440px] xl:gap-64">
        <div>
          <Eyebrow tone="yellow" className="mb-16">
            Para negocios que quieren clientes, no likes
          </Eyebrow>
          <h1 className="tracking-heading text-[36px] leading-[1.06] font-semibold text-balance text-white sm:text-heading-lg sm:leading-[1.06] lg:text-[52px] xl:text-[46px] 2xl:text-[56px]">
            Que te encuentren{" "}
            <span className="text-[var(--color-brand-yellow)]">a ti</span>, no
            a tu competencia.
          </h1>
          {/* Alternativas para A/B:
              Tus clientes te están buscando. Hagamos que te encuentren <span>a ti</span>, no a tu competencia.
              Deja de perder clientes frente a tu <span>competencia</span> en internet.
              Que tu próximo cliente te encuentre <span>a ti primero</span>. */}
          <p className="mt-24 max-w-[520px] text-body-lg text-[var(--color-frost-gray)]">
            Aparece primero en Google y en la IA, y haz que tus anuncios y tus
            redes traigan clientes. Con resultados que mides cada mes.
          </p>
          {/* La acción principal es el formulario de la derecha; aquí queda
              la alternativa para quien prefiere explorar primero. */}
          <div className="mt-32">
            <Button href="/#servicios" variant="ghost-dark">
              ¿Dónde estoy perdiendo clientes?
              <PiArrowDown aria-hidden="true" className="ml-8 inline" />
            </Button>
          </div>
          <ul className="mt-48 hidden flex-wrap gap-x-24 gap-y-8 text-body-sm text-[var(--color-frost-gray)] sm:flex">
            {serviceNames.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-8">
                <Icon
                  size={18}
                  aria-hidden="true"
                  className="text-[var(--color-brand-yellow)]"
                />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div id="contacto" className="w-full max-w-[440px] scroll-mt-96 justify-self-center xl:justify-self-end">
          <HeroGuideCard className="w-full" />
        </div>
      </div>
    </section>
  );
}
