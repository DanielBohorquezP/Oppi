export function TagChip({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-block rounded-[var(--radius-tags)] bg-[var(--color-cloud-gray)] px-12 py-4 text-caption font-semibold text-[var(--color-charcoal)] ${className}`}
    >
      {children}
    </span>
  );
}
