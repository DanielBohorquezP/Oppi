import Image from "next/image";
import type { TeamMember } from "@/content/team";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

// Mientras no haya una foto real, se muestra un placeholder en forma de
// busto (no un círculo), flotando con una sombra suave y sin fondo — así se
// lee como un espacio para una foto recortada, no como un avatar genérico.
export function TeamAvatar({
  member,
  height = 220,
}: {
  member: TeamMember;
  height?: number;
}) {
  if (member.photoSrc) {
    return (
      <Image
        src={member.photoSrc}
        alt={member.name}
        width={Math.round(height * 0.78)}
        height={height}
        className="object-contain"
        style={{
          height,
          width: "auto",
          filter: "drop-shadow(0 24px 24px rgba(0,0,0,0.25))",
        }}
      />
    );
  }

  const width = Math.round(height * 0.78);

  return (
    <svg
      viewBox="0 0 140 180"
      width={width}
      height={height}
      style={{ filter: "drop-shadow(0 16px 16px rgba(0,0,0,0.18))" }}
      role="img"
      aria-label={`Foto de ${member.name} (pendiente)`}
    >
      {/* Busto: cabeza + hombros, sin caja ni fondo, para que se lea como una foto recortada flotando */}
      <path
        d="M20 178 C20 112 40 78 70 78 C100 78 120 112 120 178"
        fill={`color-mix(in srgb, ${member.accent} 8%, transparent)`}
        stroke={member.accent}
        strokeWidth="2"
        strokeDasharray="6 5"
        strokeLinecap="round"
      />
      <circle
        cx="70"
        cy="46"
        r="32"
        fill={`color-mix(in srgb, ${member.accent} 10%, transparent)`}
        stroke={member.accent}
        strokeWidth="2"
        strokeDasharray="6 5"
      />
      <text
        x="70"
        y="53"
        textAnchor="middle"
        fontSize="22"
        fontWeight="600"
        fill={member.accent}
      >
        {initials(member.name)}
      </text>
    </svg>
  );
}
