import Link from "next/link";
import { PastelCard } from "@/components/ui/PastelCard";
import { TagChip } from "@/components/ui/TagChip";
import { Reveal } from "@/components/motion/Reveal";
import { services } from "@/content/services";

export function ServiceSummary() {
  return (
    <section className="mx-auto max-w-[1280px] px-24 py-64 md:px-80">
      <Reveal className="grid gap-24 md:grid-cols-3">
        {services.map((service) => (
          <Link key={service.href} href={service.href}>
            <PastelCard wash={service.wash} className="h-full">
              <TagChip>{service.tag}</TagChip>
              <h3 className="mt-16 text-heading-sm font-semibold text-[var(--color-ink-black)]">
                {service.title}
              </h3>
              <p className="mt-12 text-body text-[var(--color-graphite)]">
                {service.summary}
              </p>
            </PastelCard>
          </Link>
        ))}
      </Reveal>
    </section>
  );
}
