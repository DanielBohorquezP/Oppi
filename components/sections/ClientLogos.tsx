import { clients } from "@/content/clients";

// La lista se repite para que el carrusel llene el ancho sin huecos;
// el segundo grupo es decorativo (aria-hidden) y no recibe foco.
const group = [...clients, ...clients, ...clients];

function LogoGroup({ hidden }: { hidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-64 pr-64"
      aria-hidden={hidden || undefined}
    >
      {group.map((client, i) => (
        <li key={`${client.name}-${i}`}>
          <a
            href={client.href}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={hidden ? -1 : undefined}
            aria-label={`${client.name} (abre su sitio web)`}
            className="block transition-transform duration-150 ease-out hover:-translate-y-4"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={client.logo}
              alt={hidden ? "" : `Logo de ${client.name}`}
              loading="lazy"
              className="h-[96px] w-auto"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}

export function ClientLogos() {
  return (
    // Sin título visible: los logos hablan solos. El nombre queda para lectores
    // de pantalla.
    <section className="bg-white py-48" aria-label="Negocios que ya confían en Oppi">
      <div className="logo-marquee overflow-hidden">
        <div className="logo-marquee-track flex w-max">
          <LogoGroup />
          <LogoGroup hidden />
        </div>
      </div>
    </section>
  );
}
