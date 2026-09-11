import { Reveal } from "@/components/motion/Reveal";

export function BigStatement() {
  return (
    <section className="px-24 py-80 text-center md:px-80 md:py-120">
      <Reveal className="mx-auto max-w-[880px]">
        <p className="tracking-display text-heading font-semibold text-balance text-[var(--color-ink-black)] md:text-display">
          El <span className="font-mono-metric text-[var(--color-coral-pulse)]">68%</span> de
          las compras empiezan con una búsqueda en Google.
        </p>
        <p className="mx-auto mt-24 max-w-[480px] text-body-lg text-[var(--color-graphite)]">
          Si tu negocio no aparece ahí, orgánico o pagado, esos clientes le
          están comprando a tu competencia.
        </p>

        <div className="mx-auto mt-56 max-w-[640px] border-t border-black/10 pt-56">
          <p className="tracking-display text-heading font-semibold text-balance text-[var(--color-ink-black)] md:text-display">
            Y cada vez más de esas búsquedas ya no pasan por Google: pasan por{" "}
            <span className="font-mono-metric text-[var(--color-coral-pulse)]">ChatGPT</span>.
          </p>
          <p className="mx-auto mt-24 max-w-[480px] text-body-lg text-[var(--color-graphite)]">
            ChatGPT supera los 900 millones de usuarios activos semanales
            (OpenAI, 2026) y hasta el 83% de las búsquedas en Google no
            generan ni un clic cuando aparece un resumen con IA (Similarweb,
            2026). Si la IA no te conoce, tampoco te va a recomendar.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
