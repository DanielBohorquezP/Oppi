import Image from "next/image";
import type { CSSProperties } from "react";
import { team, type TeamMember } from "@/content/team";

/*
  Foto recortada de un integrante del equipo. El alto se pasa como valor CSS
  (px o clamp()) y el ancho se calcula solo; width/height de la imagen son
  intrínsecos para reservar la proporción.
*/
export function TeamPhoto({
  member,
  height,
  alt,
  className,
  style,
  reveal,
  delay,
  priority,
}: {
  member: keyof typeof team | TeamMember;
  height: string | number;
  /** Texto alternativo; "" para fotos decorativas. */
  alt?: string;
  className?: string;
  style?: CSSProperties;
  /** Variante de reveal al hacer scroll (ver components/motion/Reveal). */
  reveal?: "up" | "fade" | "scale" | "left";
  delay?: number;
  priority?: boolean;
}) {
  const m = typeof member === "string" ? team[member] : member;
  return (
    <Image
      src={m.photoSrc ?? ""}
      alt={alt ?? m.name}
      width={Math.round(1000 * (m.photoRatio ?? 1))}
      height={1000}
      unoptimized
      priority={priority}
      data-reveal={reveal}
      data-delay={delay}
      className={className}
      style={{ height, width: "auto", ...style }}
    />
  );
}
