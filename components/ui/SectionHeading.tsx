export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={`mx-auto max-w-[720px] ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      {eyebrow && (
        <p className="mb-8 text-body-sm font-semibold uppercase tracking-wide text-[var(--color-amber-edge)]">
          {eyebrow}
        </p>
      )}
      <h2 className="tracking-heading text-heading font-semibold text-[var(--color-ink-black)] md:text-heading-lg">
        {title}
      </h2>
      {description && (
        <p className="mt-16 text-body-lg text-[var(--color-graphite)]">
          {description}
        </p>
      )}
    </div>
  );
}
