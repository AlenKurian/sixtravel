"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight, mobile-only scroll reveal.
 *
 * Adds `is-in` to every `[data-m-reveal]` descendant of the returned ref
 * as it enters the viewport. Pairs with the `.m-reveal` / `.m-img-reveal`
 * classes in globals.css. Does nothing above 767px, on reduced-motion, or
 * where IntersectionObserver is unavailable — the elements simply render
 * in their resting (visible) state because the base rules only dim them
 * inside the mobile media query.
 */
export function useMobileReveal<T extends HTMLElement = HTMLElement>() {
  const scope = useRef<T>(null);

  useEffect(() => {
    const root = scope.current;
    if (!root) return;

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isMobile || reduce || typeof IntersectionObserver === "undefined") {
      root
        .querySelectorAll<HTMLElement>("[data-m-reveal]")
        .forEach((el) => el.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const delay = Number(el.dataset.mRevealDelay || 0);
          window.setTimeout(() => el.classList.add("is-in"), delay);
          io.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );

    root
      .querySelectorAll<HTMLElement>("[data-m-reveal]")
      .forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return scope;
}
