"use client";

import { useEffect } from "react";

/*
  Reveal al hacer scroll del sistema de movimiento (prototipos v3). Cualquier
  elemento con `data-reveal` ("up" | "left" | "right" | "scale" | "fade" |
  "line") y, opcional, `data-delay` (ms) se anima una sola vez al entrar en el
  viewport: de opacity 0 + blur(8px) + desplazamiento a su estado normal, 1000 ms
  con cubic-bezier(.16,1,.3,1).

  Se monta una vez en el layout y escucha el DOM con un MutationObserver, así
  que también anima lo que aparece tras navegar o tras un cambio de estado. No
  se inicializa con prefers-reduced-motion: reduce.
*/

const EASE = "cubic-bezier(.16,1,.3,1)";

const FROM: Record<string, Keyframe> = {
  fade: { opacity: 0 },
  scale: { opacity: 0, transform: "scale(.96) translateY(24px)" },
  left: { opacity: 0, transform: "translateX(-36px)" },
  right: { opacity: 0, transform: "translateX(36px)" },
  up: { opacity: 0, transform: "translateY(36px)" },
};

function createAnimation(el: HTMLElement): Animation {
  const kind = el.getAttribute("data-reveal") ?? "up";
  const delay = Number(el.getAttribute("data-delay")) || 0;
  if (kind === "line") {
    return el.animate(
      [{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }],
      { duration: 1400, delay, easing: EASE, fill: "backwards" }
    );
  }
  return el.animate(
    [
      { ...(FROM[kind] ?? FROM.up), filter: "blur(8px)" },
      { opacity: 1, transform: "none", filter: "blur(0px)" },
    ],
    { duration: 1000, delay, easing: EASE, fill: "backwards" }
  );
}

export function MotionRoot() {
  useEffect(() => {
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const pending = new Map<Element, Animation>();
    const watched = new WeakSet<Element>();

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-revealed", "");
          pending.get(entry.target)?.play();
          pending.delete(entry.target);
          io.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    const scan = () => {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        if (watched.has(el) || el.hasAttribute("data-revealed")) return;
        watched.add(el);
        const animation = createAnimation(el);
        animation.pause();
        pending.set(el, animation);
        io.observe(el);
      });
    };

    let raf = 0;
    const mutations = new MutationObserver(() => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        scan();
      });
    });

    scan();
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutations.disconnect();
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
      pending.forEach((animation) => animation.cancel());
    };
  }, []);

  return null;
}
