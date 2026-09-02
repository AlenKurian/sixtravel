"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Scoped scroll-reveal. Animates every [data-reveal] descendant of the
 * returned ref: fade + rise, staggered by DOM order, triggered on enter.
 * Split words for elements marked [data-reveal="words"].
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const scope = useRef<T>(null);

  useEffect(() => {
    const root = scope.current;
    if (!root) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      // word-split lines
      root.querySelectorAll<HTMLElement>('[data-reveal="words"]').forEach((el) => {
        if (el.dataset.split === "done") return;
        const words = (el.textContent || "").split(/(\s+)/);
        el.textContent = "";
        words.forEach((w) => {
          if (/^\s+$/.test(w)) {
            el.appendChild(document.createTextNode(w));
            return;
          }
          const outer = document.createElement("span");
          outer.className = "word";
          outer.style.display = "inline-block";
          outer.style.overflow = "hidden";
          outer.style.verticalAlign = "top";
          const inner = document.createElement("span");
          inner.className = "word-inner";
          inner.style.display = "inline-block";
          inner.style.willChange = "transform";
          inner.textContent = w;
          outer.appendChild(inner);
          el.appendChild(outer);
        });
        el.dataset.split = "done";

        gsap.from(el.querySelectorAll(".word-inner"), {
          yPercent: 120,
          duration: 1,
          ease: "power4.out",
          stagger: 0.05,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        });
      });

      // generic reveals
      const items = gsap.utils.toArray<HTMLElement>(
        root.querySelectorAll('[data-reveal=""], [data-reveal="up"]')
      );
      items.forEach((el) => {
        gsap.from(el, {
          y: 42,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
          },
        });
        gsap.set(el, { opacity: 1 });
      });

      // staggered groups
      root.querySelectorAll<HTMLElement>("[data-reveal-group]").forEach((grp) => {
        const kids = grp.children;
        gsap.from(kids, {
          y: 48,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: grp,
            start: "top 82%",
          },
        });
        gsap.set(kids, { opacity: 1 });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return scope;
}
