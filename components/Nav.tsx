"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Mark, Arrow } from "./Icons";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Why us", href: "#philosophy" },
  { label: "Destinations", href: "#destinations" },
  { label: "Collection", href: "#collection" },
  { label: "Experiences", href: "#experiences" },
  { label: "FAQ", href: "#standard" },
];

export default function Nav() {
  const bar = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    gsap.fromTo(
      bar.current,
      { yPercent: -100, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1, delay: 0.6, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const { style } = document.body;
    if (open) {
      const prev = style.overflow;
      style.overflow = "hidden";
      return () => {
        style.overflow = prev;
      };
    }
  }, [open]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 40);
      if (bar.current) {
        if (y > lastY.current && y > 400 && !open) {
          gsap.to(bar.current, { yPercent: -100, duration: 0.4, ease: "power2.out" });
        } else {
          gsap.to(bar.current, { yPercent: 0, duration: 0.4, ease: "power2.out" });
        }
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <>
      <header
        ref={bar}
        className={`fixed inset-x-0 top-0 z-[100] isolate grid grid-cols-[1fr_auto] items-center gap-4 px-5 transition-[background,color,padding,box-shadow,border-color] duration-500 ease-smooth sm:gap-6 md:grid-cols-[1fr_auto_1fr] md:px-16 lg:px-24 ${
          solid
            ? "border-b border-line bg-night/95 pb-[0.55rem] pt-[0.7rem] text-cream shadow-lux-sm backdrop-blur-[16px] md:pb-2 md:pt-[1.15rem]"
            : "border-b border-transparent bg-transparent pb-[0.6rem] pt-[0.85rem] text-[#faf9f6] md:pb-[0.7rem] md:pt-[1.6rem]"
        }`}
      >
        <a
          href="#top"
          className="inline-flex items-center gap-[0.6rem] justify-self-start"
          aria-label="SIX TRAVEL home"
        >
          <Mark className="h-[1.5rem] w-[1.5rem] text-current sm:h-[1.7rem] sm:w-[1.7rem]" />
        </a>

        <nav className="hidden items-center gap-[1.3rem] justify-self-center lg:gap-[1.7rem] md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`group relative py-[0.3rem] font-body text-[0.72rem] uppercase tracking-[0.14em] transition-colors duration-300 ${
                solid ? "text-cream-soft hover:text-cream" : "text-[#faf9f6]/85 hover:text-[#faf9f6]"
              }`}
            >
              {l.label}
              <span className="absolute bottom-0 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-[400ms] ease-smooth group-hover:origin-left group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <a
          href="#plan"
          className={`hidden justify-self-end border px-6 py-[0.6rem] font-body text-[0.66rem] uppercase tracking-[0.14em] transition-colors duration-500 ease-smooth md:inline-block ${
            solid
              ? "border-cream text-cream hover:bg-cream hover:text-night"
              : "border-[#faf9f6]/70 text-[#faf9f6] hover:bg-[#faf9f6] hover:text-forest"
          }`}
        >
          Plan Your Journey
        </a>

        <button
          className="relative z-[110] flex h-11 w-11 flex-col items-end justify-center gap-[7px] justify-self-end border-0 bg-transparent md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-px bg-current transition-all duration-[450ms] ease-smooth ${
              open ? "w-[22px] translate-y-[4px] rotate-45" : "w-[22px]"
            }`}
          />
          <span
            className={`block h-px bg-current transition-all duration-[450ms] ease-smooth ${
              open ? "w-[22px] -translate-y-[4px] -rotate-45" : "w-[15px]"
            }`}
          />
        </button>
      </header>

      {/* Mobile editorial overlay */}
      <div
        className={`fixed inset-0 z-[95] flex flex-col text-cream transition-[opacity,visibility] duration-[550ms] ease-smooth md:hidden ${
          open
            ? "visible opacity-100 pointer-events-auto"
            : "invisible opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-night" />

        <div
          className={`relative flex h-full flex-col px-7 pb-[calc(env(safe-area-inset-bottom)+5.5rem)] pt-[7.5rem] transition-all duration-[600ms] ease-smooth ${
            open
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-3 opacity-0"
          }`}
        >
          <nav className="flex flex-1 flex-col justify-center gap-9">
            {[{ label: "Home", href: "#top" }, ...LINKS].map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block font-display text-[1.9rem] italic leading-[1.1] tracking-[0.01em] text-cream transition-[transform,opacity,color] duration-[600ms] ease-smooth active:text-mist xs:text-[2.1rem]"
                style={{
                  transitionDelay: open ? `${120 + i * 70}ms` : "0ms",
                  transform: open ? "translateY(0)" : "translateY(14px)",
                  opacity: open ? 1 : 0,
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div
            className="transition-[transform,opacity] duration-[600ms] ease-smooth"
            style={{
              transitionDelay: open ? `${120 + (LINKS.length + 1) * 70 + 60}ms` : "0ms",
              transform: open ? "translateY(0)" : "translateY(14px)",
              opacity: open ? 1 : 0,
            }}
          >
            <span className="block h-px w-full bg-cream/12" />
            <a
              href="#plan"
              onClick={() => setOpen(false)}
              className="mt-7 inline-flex items-center gap-3 font-body text-[0.62rem] uppercase tracking-[0.22em] text-cream xs:text-[0.7rem] xs:tracking-[0.28em]"
            >
              Plan Your Journey
              <Arrow className="h-[0.9rem] w-[0.9rem]" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
