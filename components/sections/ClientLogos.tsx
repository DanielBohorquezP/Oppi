import Link from "next/link";
import Image from "next/image";
import { clients } from "@/content/clients";

/*
  Cinta infinita de logos, justo debajo del hero. Cada set repite los 3 logos
  tres veces y el set completo se duplica para el loop (translateX 0 → -50%,
  45 s lineal; se pausa con hover). Solo el primer set es accesible; el resto
  lleva aria-hidden y tabIndex -1.
*/
const ROUNDS = 3;

function LogoSet({ hidden }: { hidden: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-[72px] pr-[72px]">
      {Array.from({ length: ROUNDS }).flatMap((_, round) =>
        clients.map((client) => {
          const duplicate = hidden || round > 0;
          return (
            <Link
              key={`${round}-${client.name}`}
              href="/experiencia"
              aria-hidden={duplicate ? true : undefined}
              tabIndex={duplicate ? -1 : undefined}
              className="block shrink-0"
            >
              <Image
                src={client.logo}
                alt={`Logo de ${client.name}`}
                width={client.width}
                height={client.height}
                unoptimized
                className="block h-[72px] w-auto"
              />
            </Link>
          );
        })
      )}
    </div>
  );
}

export function ClientLogos() {
  return (
    <section
      aria-label="Negocios que ya confían en Oppi"
      className="border-b border-[rgba(4,0,84,0.08)] bg-white px-[clamp(24px,5vw,80px)] py-[48px]"
    >
      <div className="mx-auto max-w-[1280px]">
        <div
          data-reveal="fade"
          className="oppi-marquee min-w-0 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]"
        >
          <div className="oppi-marquee-track flex w-max animate-[oppiMarquee_45s_linear_infinite]">
            <LogoSet hidden={false} />
            <LogoSet hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
