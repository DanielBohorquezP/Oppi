import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TeamAvatar } from "@/components/ui/TeamAvatar";
import { team } from "@/content/team";

// El acento de SEO es el mismo índigo del fondo de la tarjeta; aquí se usa
// amarillo para que el placeholder y el rol sean visibles.
const members = [team["desarrollo-web"], team.seo, team.sem].map((m) => ({
  ...m,
  accent:
    m.accent === "var(--color-indigo-bloom)"
      ? "var(--color-brand-yellow)"
      : m.accent,
}));

// Sección "conoce al equipo": los tres integrantes juntos. Cuando cada
// persona tenga foto real, basta con agregar `photoSrc` en content/team.ts.
export function TeamSection() {
  return (
    <section className="bg-[var(--color-cloud-gray)] px-24 py-64 md:px-80 md:py-96">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeading
          eyebrow="Nuestro equipo"
          title="Las personas detrás de tu crecimiento"
          description="Un equipo pequeño y cercano: hablas directamente con quien hace el trabajo."
        />
        <Reveal className="mt-48 grid gap-40 md:grid-cols-3 md:gap-32">
          {members.map((member) => (
            <div
              key={member.key}
              className="flex flex-col items-center rounded-3xl bg-[var(--color-ink-black)] px-24 pb-40 pt-40 text-center"
            >
              <TeamAvatar member={member} height={220} />
              <p
                className="mt-24 text-body-sm font-semibold uppercase tracking-wide"
                style={{ color: member.accent }}
              >
                {member.role}
              </p>
              <p className="mt-8 text-heading-sm font-semibold text-white">
                {member.name}
              </p>
              <p className="mt-12 max-w-[320px] text-body text-[var(--color-frost-gray)]">
                {member.blurb}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
