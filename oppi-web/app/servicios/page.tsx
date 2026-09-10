import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TagChip } from "@/components/ui/TagChip";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Servicios — Oppi",
  description:
    "Desarrollo web optimizado para ventas, estrategia SEO y campañas de Google Ads (SEM). Descubre los servicios de Oppi.",
};

export default function ServiciosPage() {
  return (
    <>
      <div className="px-24 pt-64 md:px-80">
        <SectionHeading
          eyebrow="Servicios"
          title="Tres formas de vender más, una sola estrategia"
          description="Cada servicio funciona por su cuenta, pero juntos multiplican resultados."
        />
      </div>

      {/* 1. Desarrollo Web */}
      <section
        id="web"
        className="scroll-mt-96 bg-[var(--color-cloud-gray)] px-24 py-64 md:px-80"
      >
        <div className="mx-auto grid max-w-[1280px] gap-48 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1 rounded-[var(--radius-cards)] border border-black/5 bg-white p-32 shadow-[var(--shadow-subtle)]">
            <p className="text-body-sm font-semibold text-[var(--color-slate)]">
              Antes / Después
            </p>
            <div className="mt-16 space-y-12">
              <div className="rounded-[var(--radius-cards-sm)] bg-[var(--color-cloud-gray)] p-16 text-body-sm">
                Sitio lento, sin llamado a la acción claro → <span className="font-mono-metric">1.2%</span> conversión
              </div>
              <div className="rounded-[var(--radius-cards-sm)] border-l-4 border-l-[var(--color-brand-yellow)] bg-[var(--color-cloud-gray)] p-16 text-body-sm font-medium">
                Web Oppi, rápida y enfocada en vender → <span className="font-mono-metric">4.8%</span> conversión
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <TagChip>Desarrollo web</TagChip>
            <h2 className="tracking-heading mt-16 text-heading font-semibold text-[var(--color-ink-black)]">
              Desarrollo web optimizado para ventas
            </h2>
            <p className="mt-16 text-body-lg text-[var(--color-graphite)]">
              Diseñamos y construimos sitios rápidos, claros y enfocados en
              conversión: cada sección está pensada para llevar al visitante
              a comprar, agendar o contactarte.
            </p>
            <ul className="mt-24 space-y-12 text-body text-[var(--color-charcoal)]">
              <li>✓ Diseño a medida, sin plantillas genéricas</li>
              <li>✓ Velocidad de carga y experiencia mobile-first</li>
              <li>✓ Integración con WhatsApp, formularios y pagos</li>
              <li>✓ Analítica para medir qué convierte y qué no</li>
            </ul>
            <Link
              href="/servicios/desarrollo-web"
              className="mt-24 inline-block text-body-sm font-semibold text-[var(--color-amber-edge)]"
            >
              Ver página completa →
            </Link>
          </div>
        </div>
      </section>

      {/* 2. SEO */}
      <section
        id="seo"
        className="scroll-mt-96 px-24 py-64 md:px-80"
      >
        <div className="mx-auto grid max-w-[1280px] gap-48 md:grid-cols-2 md:items-center">
          <div>
            <TagChip>Crecimiento orgánico</TagChip>
            <h2 className="tracking-heading mt-16 text-heading font-semibold text-[var(--color-ink-black)]">
              Estrategia SEO para visibilidad y ventas orgánicas
            </h2>
            <p className="mt-16 text-body-lg text-[var(--color-graphite)]">
              Trabajamos la estructura técnica, el contenido y las señales de
              autoridad de tu sitio para que aparezcas primero cuando tus
              clientes buscan lo que ofreces.
            </p>
            <ul className="mt-24 space-y-12 text-body text-[var(--color-charcoal)]">
              <li>✓ Auditoría técnica y de contenido inicial</li>
              <li>✓ Optimización on-page y estructura de datos (schema)</li>
              <li>✓ Estrategia de contenidos mensual</li>
              <li>✓ Reportes claros de posiciones y tráfico</li>
            </ul>
            <Link
              href="/servicios/seo"
              className="mt-24 inline-block text-body-sm font-semibold text-[var(--color-amber-edge)]"
            >
              Ver página completa →
            </Link>
          </div>
          <div
            className="rounded-[var(--radius-cards)] border border-black/5 bg-white p-32 shadow-[var(--shadow-subtle)]"
            style={{ borderTop: "3px solid var(--color-indigo-bloom)" }}
          >
            <p className="text-body-sm font-semibold text-[var(--color-slate)]">
              Resultado típico a 6 meses
            </p>
            <p className="tracking-heading mt-8 font-mono-metric text-display font-bold text-[var(--color-ink-black)]">
              +65%
            </p>
            <p className="text-body text-[var(--color-graphite)]">
              tráfico orgánico mensual
            </p>
          </div>
        </div>
      </section>

      {/* 3. SEM */}
      <section
        id="sem"
        className="scroll-mt-96 bg-[var(--color-cloud-gray)] px-24 py-64 md:px-80"
      >
        <div className="mx-auto grid max-w-[1280px] gap-48 md:grid-cols-2 md:items-center">
          <div
            className="order-2 md:order-1 rounded-[var(--radius-cards)] border border-black/5 bg-white p-32 text-center shadow-[var(--shadow-subtle)]"
            style={{ borderTop: "3px solid var(--color-coral-pulse)" }}
          >
            <p className="text-body-sm font-semibold text-[var(--color-slate)]">
              Resultado típico a 90 días
            </p>
            <p className="tracking-heading mt-8 font-mono-metric text-display font-bold text-[var(--color-coral-pulse)]">
              -32%
            </p>
            <p className="text-body text-[var(--color-graphite)]">
              costo por adquisición (CPA)
            </p>
          </div>
          <div className="order-1 md:order-2">
            <TagChip>Resultados inmediatos</TagChip>
            <h2 className="tracking-heading mt-16 text-heading font-semibold text-[var(--color-ink-black)]">
              Google Ads que generan clientes hoy
            </h2>
            <p className="mt-16 text-body-lg text-[var(--color-graphite)]">
              Diseñamos y gestionamos campañas de búsqueda, display y
              remarketing en Google Ads, con optimización semanal para bajar
              tu costo por cliente mientras tu SEO todavía está creciendo.
            </p>
            <ul className="mt-24 space-y-12 text-body text-[var(--color-charcoal)]">
              <li>✓ Auditoría de cuenta y estructura de campañas</li>
              <li>✓ Campañas de búsqueda con intención de compra</li>
              <li>✓ Remarketing a quienes visitaron sin convertir</li>
              <li>✓ Reportes mensuales de CPA, ROAS y CTR</li>
            </ul>
            <Link
              href="/servicios/sem"
              className="mt-24 inline-block text-body-sm font-semibold text-[var(--color-amber-edge)]"
            >
              Ver página completa →
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title="¿Con cuál servicio empezamos?"
        description="Cuéntanos sobre tu negocio y te recomendamos por dónde empezar."
      />
    </>
  );
}
