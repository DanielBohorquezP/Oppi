import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TeamAvatar } from "@/components/ui/TeamAvatar";
import { team } from "@/content/team";

// Cada persona sobre su color (Angeline amarillo, Daniel índigo, Juanse coral)
// y, debajo, el dolor del cliente que resuelve.
const members = [
  { member: team.marketing, surface: "var(--color-brand-yellow)" },
  { member: team.seo, surface: "var(--color-ink-black)" },
  { member: team.sem, surface: "var(--color-coral-pulse)" },
];

export function TeamSection() {
  return (
    <section className="bg-[var(--color-cloud-gray)] px-24 py-64 md:px-80 md:py-96">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-wrap items-end justify-between gap-x-64 gap-y-24">
          <div>
            <Eyebrow tone="coral" className="mb-12">
              Nuestro equipo
            </Eyebrow>
            <h2 className="tracking-heading max-w-[640px] text-heading font-semibold text-balance text-[var(--color-ink-black)] md:text-heading-lg">
              Una persona a cargo de cada frente
            </h2>
          </div>
          <p className="max-w-[360px] text-body-lg text-[var(--color-graphite)]">
            Un equipo pequeño y cercano: hablas directamente con quien hace el
            trabajo.
          </p>
        </div>
        <Reveal className="mt-48 grid gap-24 md:grid-cols-3">
          {members.map(({ member, surface }) => (
            <article
              key={member.key}
              className="flex flex-col overflow-hidden rounded-[var(--radius-cards)] border border-black/5 bg-white shadow-[var(--shadow-subtle)]"
            >
              <div
                className="flex h-[260px] items-end justify-center overflow-hidden pt-24"
                style={{ backgroundColor: surface }}
              >
                <TeamAvatar member={member} height={236} />
              </div>
              <div className="flex flex-1 flex-col p-32">
                <p className="text-body-sm font-semibold uppercase tracking-wide text-[var(--color-coral-pulse)]">
                  {member.role}
                </p>
                <h3 className="mt-8 text-[24px] leading-[1.25] font-semibold text-[var(--color-ink-black)]">
                  {member.name}
                </h3>
                <p className="mt-12 flex-1 text-body text-[var(--color-graphite)]">
                  {member.blurb}
                </p>
                <p className="mt-20 text-body font-bold text-[var(--color-ink-black)]">
                  Te ayuda si: {member.helpsIf}
                </p>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
