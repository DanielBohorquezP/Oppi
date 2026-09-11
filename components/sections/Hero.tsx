import { Button } from "@/components/ui/Button";
import { GrowthChartCard } from "@/components/sections/GrowthChartCard";

export function Hero() {
  return (
    <section className="bg-[var(--color-ink-black)] px-24 py-64 md:px-80 md:py-96">
      <div className="mx-auto grid max-w-[1280px] items-center gap-48 lg:grid-cols-[1.05fr_0.95fr] lg:gap-64">
        <div>
          <p className="mb-16 text-body-sm font-semibold uppercase tracking-wide text-[var(--color-brand-yellow)]">
            Marketing digital que sí vende
          </p>
          <h1 className="tracking-heading text-heading-lg font-semibold text-balance text-white lg:text-display">
            Convierte tu presencia{" "}
            <span className="text-[var(--color-brand-yellow)]">digital</span>{" "}
            en más ventas
          </h1>
          <p className="mt-24 max-w-[440px] text-body-lg text-[var(--color-frost-gray)]">
            En Oppi combinamos desarrollo web optimizado para conversión, SEO
            y campañas de Google Ads (SEM) para que tu negocio consiga más
            visitas, más clientes y más ventas medibles.
          </p>
          <div className="mt-32 flex flex-wrap gap-16">
            <Button href="/servicios" variant="coral">
              Ver servicios
            </Button>
            <Button href="/quienes-somos#contacto" variant="ghost-dark">
              Agenda una llamada
            </Button>
          </div>
        </div>

        <GrowthChartCard className="w-full justify-self-center lg:justify-self-end" />
      </div>
    </section>
  );
}
