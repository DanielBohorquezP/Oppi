import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { TeamAvatar } from "@/components/ui/TeamAvatar";
import { CONTACT_TRIGGER_HREF } from "@/lib/contact-modal";
import type { TeamMember } from "@/content/team";

// Banner de presentación: fondo de color propio del servicio, texto a la
// izquierda y la persona recortada pegada al borde inferior derecho. Vive sobre
// una sección marfil entre el ServiceIntro y "Qué incluye".
const themes: Record<
  string,
  {
    surface: string;
    text: string;
    body: string;
    eyebrow: string;
    glow: string;
    accent: string;
    button: "coral" | "ghost-dark";
  }
> = {
  // Cada persona tiene su color: Angeline amarillo, Daniel azul, Juanse naranja.
  "desarrollo-web": {
    surface: "bg-[var(--color-brand-yellow)]",
    text: "text-[var(--color-ink-black)]",
    body: "text-[var(--color-ink-black)]",
    eyebrow: "text-[var(--color-ink-black)]",
    glow: "bg-white/40",
    accent: "var(--color-ink-black)",
    button: "ghost-dark",
  },
  seo: {
    surface: "bg-[var(--color-ink-black)]",
    text: "text-white",
    body: "text-[var(--color-frost-gray)]",
    eyebrow: "text-white",
    glow: "bg-white/10",
    accent: "#ffffff",
    button: "coral",
  },
  sem: {
    surface: "bg-[var(--color-coral-pulse)]",
    text: "text-[var(--color-ink-black)]",
    body: "text-[var(--color-ink-black)]",
    eyebrow: "text-[var(--color-ink-black)]",
    glow: "bg-white/25",
    accent: "var(--color-ink-black)",
    button: "ghost-dark",
  },
};

export function TeamMemberIntro({ member }: { member: TeamMember }) {
  const theme = themes[member.key] ?? themes["desarrollo-web"];

  return (
    <section className="bg-[var(--color-cloud-gray)] px-24 py-64 md:px-80">
      <Reveal className="mx-auto max-w-[1280px]">
        <div
          className={`relative flex min-h-[420px] flex-col overflow-hidden rounded-[var(--radius-cards)] px-32 pt-48 md:flex-row md:items-center md:px-64 md:pt-0 ${theme.surface}`}
        >
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute -bottom-[160px] right-[6%] hidden h-[520px] w-[520px] rounded-full md:block ${theme.glow}`}
          />

          <div className="relative z-10 max-w-[520px] pb-32 md:pb-0">
            <p
              className={`text-body-sm font-semibold uppercase tracking-wide ${theme.eyebrow}`}
            >
              Quién lleva tu cuenta
            </p>
            <h2
              className={`tracking-heading mt-12 text-heading font-semibold md:text-heading-lg ${theme.text}`}
            >
              {member.name}
            </h2>
            <p className={`mt-8 text-body font-semibold ${theme.text}`}>
              {member.role}
            </p>
            <p className={`mt-16 max-w-[440px] text-body-lg ${theme.body}`}>
              {member.blurb}
            </p>
            <div className="mt-32">
              <Button href={CONTACT_TRIGGER_HREF} variant={theme.button}>
                Agenda una llamada
              </Button>
            </div>
          </div>

          <div className="relative z-10 mt-auto flex justify-center self-stretch md:absolute md:bottom-0 md:right-[8%] md:self-auto">
            <TeamAvatar
              member={{ ...member, accent: theme.accent }}
              height={380}
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
