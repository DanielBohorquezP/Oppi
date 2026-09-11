import { Reveal } from "@/components/motion/Reveal";

type Step = {
  title: string;
  description: string;
};

export function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <Reveal className="grid gap-24 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <div
          key={step.title}
          className="rounded-[var(--radius-cards-sm)] border border-[var(--color-frost-gray)] bg-white p-24"
        >
          <span className="flex h-32 w-32 items-center justify-center rounded-full bg-[var(--color-brand-yellow)] text-body-sm font-bold text-[var(--color-ink-black)]">
            {index + 1}
          </span>
          <h3 className="mt-16 text-body font-semibold text-[var(--color-ink-black)]">
            {step.title}
          </h3>
          <p className="mt-8 text-body-sm text-[var(--color-graphite)]">
            {step.description}
          </p>
        </div>
      ))}
    </Reveal>
  );
}
