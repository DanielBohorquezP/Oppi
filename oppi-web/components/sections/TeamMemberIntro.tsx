import { Reveal } from "@/components/motion/Reveal";
import { TeamAvatar } from "@/components/ui/TeamAvatar";
import type { TeamMember } from "@/content/team";

// Presenta a la persona a cargo de este servicio. Vive sobre una sección
// marfil (bg-cloud-gray) entre el ServiceIntro y "Qué incluye", así la
// tarjeta blanca queda distinguible del fondo.
export function TeamMemberIntro({ member }: { member: TeamMember }) {
  return (
    <section className="bg-[var(--color-cloud-gray)] px-24 py-64 md:px-80">
      <Reveal className="mx-auto flex max-w-[1280px] flex-col items-center gap-32 text-center md:flex-row md:gap-48 md:text-left">
        <TeamAvatar member={member} height={200} />
        <div>
          <p
            className="text-body-sm font-semibold uppercase tracking-wide"
            style={{ color: member.accent }}
          >
            Quién lleva tu cuenta
          </p>
          <p className="mt-8 text-heading-sm font-semibold text-[var(--color-ink-black)]">
            {member.name}
          </p>
          <p className="mt-4 text-body-sm font-semibold text-[var(--color-slate)]">
            {member.role}
          </p>
          <p className="mt-12 max-w-[480px] text-body text-[var(--color-graphite)]">
            {member.blurb}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
