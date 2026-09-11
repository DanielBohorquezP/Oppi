import { Reveal } from "@/components/motion/Reveal";
import { TeamAvatar } from "@/components/ui/TeamAvatar";
import type { TeamMember } from "@/content/team";

// Banda oscura de "conoce al equipo" — pensada para repetirse 2-3 veces a lo
// largo de la home, una persona a la vez, distribuida entre otras secciones.
export function TeamSpotlight({
  member,
  eyebrow = "Quién está detrás",
  imageSide = "left",
}: {
  member: TeamMember;
  eyebrow?: string;
  imageSide?: "left" | "right";
}) {
  return (
    <section className="bg-[var(--color-ink-black)] px-24 py-64 md:px-80">
      <Reveal
        className={`mx-auto flex max-w-[1280px] flex-col items-center gap-32 text-center md:gap-48 md:text-left ${
          imageSide === "right" ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <TeamAvatar member={member} height={240} />
        <div>
          <p
            className="text-body-sm font-semibold uppercase tracking-wide"
            style={{ color: member.accent }}
          >
            {eyebrow}
          </p>
          <p className="mt-8 text-heading-sm font-semibold text-white">
            {member.name}
          </p>
          <p className="mt-4 text-body-sm font-semibold text-[var(--color-frost-gray)]">
            {member.role}
          </p>
          <p className="mt-12 max-w-[480px] text-body text-[var(--color-frost-gray)]">
            {member.blurb}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
