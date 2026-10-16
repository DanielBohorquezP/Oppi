import { Blob } from "@/components/motion/Blob";

// Manchas animadas (ctaBlobs) de los CTA oscuros de servicios y Quiénes somos.
export function CtaBlobs() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <Blob
        color="#f8673e"
        position={{ left: "-10%", bottom: "-50%" }}
        size={480}
        animation="oppiFloatA 16s ease-in-out infinite"
        opacity={0.45}
      />
      <Blob
        color="#ffe848"
        position={{ right: "-8%", top: "-50%" }}
        size={420}
        animation="oppiFloatB 20s ease-in-out infinite"
        opacity={0.28}
      />
    </div>
  );
}
