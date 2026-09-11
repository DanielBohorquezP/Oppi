import { Reveal } from "@/components/motion/Reveal";

type QA = {
  question: string;
  answer: string;
};

export function Faq({ items }: { items: QA[] }) {
  return (
    <Reveal className="mx-auto max-w-[760px] space-y-16">
      {items.map((item) => (
        <div
          key={item.question}
          className="rounded-[var(--radius-cards-sm)] border border-[var(--color-frost-gray)] bg-white p-24"
        >
          <p className="text-body font-semibold text-[var(--color-ink-black)]">
            {item.question}
          </p>
          <p className="mt-8 text-body-sm text-[var(--color-graphite)]">
            {item.answer}
          </p>
        </div>
      ))}
    </Reveal>
  );
}
