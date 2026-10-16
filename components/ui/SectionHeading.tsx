export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  reveal = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  /** Anima eyebrow, título y descripción al hacer scroll (escalonados 120 ms). */
  reveal?: boolean;
}) {
  return (
    <div
      className={`mx-auto max-w-[720px] ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      {eyebrow && (
        <p
          data-reveal={reveal ? "up" : undefined}
          className="mb-8 text-body-sm font-semibold uppercase tracking-wide text-[var(--color-amber-edge)]"
        >
          {eyebrow}
        </p>
      )}
      <h2
        data-reveal={reveal ? "up" : undefined}
        data-delay={reveal ? 120 : undefined}
        className="tracking-heading text-heading font-semibold text-[var(--color-ink-black)] md:text-heading-lg"
      >
        {title}
      </h2>
      {description && (
        <p
          data-reveal={reveal ? "up" : undefined}
          data-delay={reveal ? 240 : undefined}
          className="mt-16 text-body-lg text-[var(--color-graphite)]"
        >
          {description}
        </p>
      )}
    </div>
  );
}
