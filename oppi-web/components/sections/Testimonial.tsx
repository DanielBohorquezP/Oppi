import { Reveal } from "@/components/motion/Reveal";

const stats = [
  { value: "2x", label: "ventas desde el sitio" },
  { value: "-30%", label: "costo por cliente" },
  { value: "4", label: "meses" },
];

export function Testimonial() {
  return (
    <section className="bg-[var(--color-cloud-gray)] px-24 py-64 md:px-80">
      <Reveal className="mx-auto max-w-[900px] rounded-[var(--radius-cards)] border border-black/5 border-l-4 border-l-[var(--color-indigo-bloom)] bg-white p-32 shadow-[var(--shadow-subtle)] md:p-48">
        <p className="tracking-heading text-heading-sm font-semibold text-[var(--color-ink-black)] md:text-heading">
          &ldquo;En cuatro meses duplicamos las ventas que llegan desde la web
          y bajamos el costo por cliente de nuestras campañas casi a la
          mitad.&rdquo;
        </p>
        <p className="mt-24 text-body font-semibold text-[var(--color-graphite)]">
          — Cliente Oppi, retail
        </p>
        <div className="mt-32 flex flex-wrap gap-32 border-t border-black/10 pt-32">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-mono-metric text-heading-sm font-bold text-[var(--color-ink-black)]">
                {stat.value}
              </p>
              <p className="text-body-sm text-[var(--color-graphite)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
