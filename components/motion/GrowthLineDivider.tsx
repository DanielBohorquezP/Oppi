import { Reveal } from "@/components/motion/Reveal";

const dots = [
  { cx: 40, color: "var(--color-brand-yellow)" },
  { cx: 300, color: "var(--color-ink-black)" },
  { cx: 560, color: "var(--color-coral-pulse)" },
];

export function GrowthLineDivider() {
  return (
    <Reveal className="mx-auto flex max-w-[1280px] justify-center px-24 md:px-80">
      <svg viewBox="0 0 600 40" className="h-24 w-full max-w-[600px]" aria-hidden="true">
        <line
          x1="40"
          y1="20"
          x2="560"
          y2="20"
          stroke="var(--color-frost-gray)"
          strokeWidth="2"
        />
        {dots.map((dot) => (
          <circle key={dot.cx} cx={dot.cx} cy="20" r="6" fill={dot.color} />
        ))}
      </svg>
    </Reveal>
  );
}
