"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Mark } from "./Icons";

const LINKS = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Kerala", href: "#kerala" },
  { label: "International", href: "#international" },
  { label: "The Standard", href: "#standard" },
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
    <header
      ref={bar}
      className={`fixed inset-x-0 top-0 z-[100] isolate grid grid-cols-[1fr_auto] items-center gap-4 px-5 transition-[background,color,padding,box-shadow] duration-500 ease-smooth sm:gap-6 md:grid-cols-[1fr_auto_1fr] md:px-16 md:text-forest md:backdrop-blur-[10px] lg:px-24 ${
        solid
          ? "bg-ivory/[0.92] pb-2 pt-[1.15rem] text-forest shadow-[0_12px_30px_-20px_rgba(31,51,41,0.4)] backdrop-blur-[16px] md:bg-ivory/[0.92]"
          : "bg-transparent pb-[0.85rem] pt-[1.35rem] text-ivory md:bg-ivory/[0.72] md:pb-[0.7rem] md:pt-[1.6rem]"
      }`}
    >
      <a
        href="#top"
        className="inline-flex items-center gap-[0.7rem] justify-self-start"
        aria-label="Sixtravel home"
      >
        <Mark className="h-[1.4rem] w-[1.4rem] sm:h-[1.6rem] sm:w-[1.6rem]" />
        <span className="pl-[0.28em] font-display text-[1rem] font-semibold tracking-[0.28em] sm:pl-[0.36em] sm:text-[1.15rem] sm:tracking-[0.36em]">
          SIXTRAVEL
        </span>
      </a>

      <span className="hidden whitespace-nowrap text-[0.66rem] uppercase tracking-[0.26em] opacity-75 md:block">
        Kerala to the World
      </span>

      <nav className="hidden items-center gap-[1.9rem] justify-self-end md:flex">
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="group relative py-[0.3rem] text-[0.72rem] uppercase tracking-[0.18em]"
          >
            {l.label}
            <span className="absolute bottom-0 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-[400ms] ease-smooth group-hover:origin-left group-hover:scale-x-100" />
          </a>
        ))}
      </nav>

      <button
        className="flex w-[26px] flex-col gap-[7px] justify-self-end border-0 bg-transparent md:hidden"
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span
          className={`h-px w-full bg-current transition-transform duration-[400ms] ease-smooth ${
            open ? "translate-y-[4px] rotate-45" : ""
          }`}
        />
        <span
          className={`h-px w-full bg-current transition-transform duration-[400ms] ease-smooth ${
            open ? "-translate-y-[4px] -rotate-45" : ""
          }`}
        />
      </button>

      <div
        className={`fixed inset-0 z-[90] flex flex-col justify-center gap-5 overflow-y-auto bg-forest p-8 font-display text-[1.75rem] text-ivory transition-transform duration-[600ms] ease-smooth xs:text-[2rem] xs:gap-6 md:p-16 lg:p-24 ${
          open ? "visible translate-y-0" : "invisible -translate-y-full"
        }`}
      >
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a
          href="#plan"
          onClick={() => setOpen(false)}
          className="mt-4 font-body text-[0.8rem] uppercase tracking-wide2 text-gold"
        >
          Plan Your Journey
        </a>
      </div>
    </header>
  );
}
