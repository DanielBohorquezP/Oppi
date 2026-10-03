import { Button } from "@/components/ui/Button";
import { HeroGuideCard } from "@/components/sections/HeroGuideCard";
import { HeroBackdrop } from "@/components/sections/HeroBackdrop";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-ink-black)] px-24 py-64 md:px-80 md:py-96">
      <HeroBackdrop />
      <div className="relative z-10 mx-auto grid max-w-[1280px] items-center gap-48 xl:grid-cols-[minmax(0,1fr)_440px] xl:gap-64">
        <div>
          <p className="mb-16 text-body-sm font-semibold uppercase tracking-wide text-[var(--color-brand-yellow)]">
            Marketing digital que sí vende
          </p>
          <h1 className="tracking-heading text-[36px] leading-[1.1] font-semibold text-balance text-white sm:text-heading-lg lg:text-[52px] lg:leading-[1.08] xl:text-[46px] 2xl:text-[52px]">
            Convierte tu presencia{" "}
            <span className="text-[var(--color-brand-yellow)]">digital</span>{" "}
            en más ventas
          </h1>
          <p className="mt-24 max-w-[440px] text-body-lg text-[var(--color-frost-gray)]">
            Marketing, SEO y Google Ads trabajando juntos para que tu negocio
            consiga más clientes, con resultados medibles.
          </p>
          {/* La acción principal es el formulario de la derecha; aquí solo
              queda la alternativa para quien prefiere explorar primero. */}
          <div className="mt-32">
            <Button href="/#servicios" variant="ghost-dark">
              Ver servicios
            </Button>
          </div>
        </div>

        <HeroGuideCard className="w-full justify-self-center xl:justify-self-end" />
      </div>
    </section>
  );
}
