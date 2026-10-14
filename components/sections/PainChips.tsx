import { PiWarningCircle } from "react-icons/pi";

// "Es para ti si…": los dolores del cliente como chips, para que se reconozca.
export function PainChips({
  label = "Es para ti si…",
  items,
}: {
  label?: string;
  items: string[];
}) {
  return (
    <section id="ideal-para" className="scroll-mt-96 px-24 pt-64 md:px-80">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center gap-x-24 gap-y-16">
        <p className="text-body-sm font-semibold uppercase tracking-wide text-[var(--color-graphite)]">
          {label}
        </p>
        <ul className="flex flex-wrap gap-12">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-8 rounded-full border border-black/10 bg-white px-20 py-[10px] text-body-sm font-semibold text-[var(--color-ink-black)]"
            >
              <PiWarningCircle
                size={18}
                aria-hidden="true"
                className="text-[var(--color-coral-pulse)]"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
