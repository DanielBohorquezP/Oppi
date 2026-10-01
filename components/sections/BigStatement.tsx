import { Reveal } from "@/components/motion/Reveal";

// Las cifras son el contenido: cada dato va en grande y la frase lo explica.
export function BigStatement() {
  return (
    <section className="px-24 py-64 md:px-80 md:py-120">
      <Reveal className="mx-auto max-w-[1280px]">
        <div className="grid items-center gap-24 md:grid-cols-[5fr_7fr] md:gap-64">
          <p className="font-mono-metric text-[112px] font-bold leading-none tracking-tighter text-[var(--color-ink-black)] md:text-[208px]">
            68<span className="text-[var(--color-coral-pulse)]">%</span>
          </p>
          <div>
            <p className="tracking-display text-heading font-semibold text-balance text-[var(--color-ink-black)] md:text-display">
              de las compras empiezan con una búsqueda en Google.
            </p>
            <p className="mt-24 max-w-[520px] text-body-lg text-[var(--color-graphite)]">
              Si tu negocio no aparece ahí, orgánico o pagado, esos clientes le
              están comprando a tu competencia.
            </p>
          </div>
        </div>

        <div className="mt-64 rounded-[var(--radius-cards)] bg-[var(--color-ink-black)] p-32 md:mt-96 md:p-64">
          <p className="tracking-heading max-w-[760px] text-heading font-semibold text-balance text-white md:text-heading-lg">
            Y cada vez más de esas búsquedas ya no pasan por Google: pasan por{" "}
            <span className="text-[var(--color-coral-pulse)]">ChatGPT</span>.
          </p>
          <dl className="mt-40 grid gap-32 md:grid-cols-2 md:gap-64">
            <div className="border-t border-white/20 pt-24">
              <dt className="font-mono-metric text-heading-lg font-bold text-[var(--color-brand-yellow)] md:text-display">
                900 M
              </dt>
              <dd className="mt-8 text-body text-[var(--color-frost-gray)]">
                de usuarios activos semanales en ChatGPT (OpenAI, 2026).
              </dd>
            </div>
            <div className="border-t border-white/20 pt-24">
              <dt className="font-mono-metric text-heading-lg font-bold text-[var(--color-brand-yellow)] md:text-display">
                83%
              </dt>
              <dd className="mt-8 text-body text-[var(--color-frost-gray)]">
                de las búsquedas en Google no generan ni un clic cuando aparece
                un resumen con IA (Similarweb, 2026).
              </dd>
            </div>
          </dl>
          <p className="mt-40 text-body-lg font-semibold text-white">
            Si la IA no te conoce, tampoco te va a recomendar.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
