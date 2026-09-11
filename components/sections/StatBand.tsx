import { Reveal } from "@/components/motion/Reveal";
import { CountingNumber } from "@/components/ui/counting-number";

const cards = [
  {
    label: "Negocios impulsados",
    tag: "Clientes",
    prefix: "+",
    target: 120,
    suffix: "",
  },
  {
    label: "Tráfico orgánico",
    tag: "▲ Mensual",
    prefix: "+",
    target: 65,
    suffix: "%",
  },
  {
    label: "Costo por cliente SEM",
    tag: "▼ Ahorro",
    prefix: "-",
    target: 32,
    suffix: "%",
  },
];

export function StatBand() {
  return (
    <section className="border-t border-white/10 bg-[var(--color-ink-black)] px-24 py-64 md:px-80">
      <Reveal className="mx-auto grid max-w-[1280px] gap-16 md:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.label}
            className="rounded-[var(--radius-cards)] border border-white/10 bg-white/[0.04] p-24"
          >
            <div className="flex items-start justify-between gap-12">
              <p className="text-body-sm text-[var(--color-frost-gray)]">
                {card.label}
              </p>
              <span className="rounded-[var(--radius-tags)] bg-[var(--color-brand-yellow)]/15 px-8 py-2 text-caption font-semibold text-[var(--color-brand-yellow)]">
                {card.tag}
              </span>
            </div>
            <p className="tracking-heading font-mono-metric mt-16 text-heading font-bold text-white">
              {card.prefix}
              <CountingNumber
                target={card.target}
                transition={{ duration: 2, ease: "easeOut" }}
              />
              {card.suffix}
            </p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
