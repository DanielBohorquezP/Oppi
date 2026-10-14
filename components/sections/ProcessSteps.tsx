import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

type Step = {
  title: string;
  description: string;
};

// Línea de tiempo: una raya índigo arriba y los pasos sin caja debajo. El
// último paso (el resultado) va en coral.
export function ProcessSteps({
  title,
  steps,
  eyebrow = "Cómo trabajamos",
}: {
  title: string;
  steps: Step[];
  eyebrow?: string;
}) {
  return (
    <section className="px-24 py-64 md:px-80 md:py-96">
      <div className="mx-auto max-w-[1280px]">
        <Eyebrow tone="coral" className="mb-12">
          {eyebrow}
        </Eyebrow>
        <h2 className="tracking-heading max-w-[720px] text-heading font-semibold text-balance text-[var(--color-ink-black)] md:text-heading-lg">
          {title}
        </h2>
        <Reveal className="mt-40 grid border-t-2 border-[var(--color-ink-black)] md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const last = index === steps.length - 1;
            return (
              <div key={step.title} className="flex flex-col gap-12 pr-[28px] pt-[28px]">
                <span
                  className={`flex h-[36px] w-[36px] items-center justify-center rounded-full text-body-sm font-bold ${
                    last
                      ? "bg-[var(--color-coral-pulse)] text-white"
                      : "bg-[var(--color-brand-yellow)] text-[var(--color-ink-black)]"
                  }`}
                >
                  {index + 1}
                </span>
                <h3 className="text-[19px] leading-[1.3] font-semibold text-[var(--color-ink-black)]">
                  {step.title}
                </h3>
                <p className="text-[15px] leading-[1.5] text-[var(--color-graphite)]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
