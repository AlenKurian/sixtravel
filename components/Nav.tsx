"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Mark, Arrow } from "./Icons";

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
  }, []);

  // Lock body scroll while the mobile overlay is open.
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
      className={`fixed inset-x-0 top-0 z-[100] isolate grid grid-cols-[1fr_auto] items-center gap-4 px-5 text-forest backdrop-blur-[10px] transition-[background,color,padding,box-shadow] duration-500 ease-smooth sm:gap-6 md:grid-cols-[1fr_auto_1fr] md:px-16 lg:px-24 ${
        solid
          ? "bg-ivory/[0.92] pb-[0.55rem] pt-[0.7rem] shadow-[0_12px_30px_-20px_rgba(31,51,41,0.4)] backdrop-blur-[16px] md:pb-2 md:pt-[1.15rem]"
          : "bg-ivory/[0.72] pb-[0.6rem] pt-[0.85rem] md:pb-[0.7rem] md:pt-[1.6rem]"
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
      className={`fixed inset-0 z-[95] flex flex-col text-ivory transition-[opacity,visibility] duration-[550ms] ease-smooth md:hidden ${
        open
          ? "visible opacity-100 pointer-events-auto"
          : "invisible opacity-0 pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      {/* backdrop veil */}
      <div className="absolute inset-0 bg-forest" />

      <div
        className={`relative flex h-full flex-col px-7 pb-[calc(env(safe-area-inset-bottom)+5.5rem)] pt-[7.5rem] transition-all duration-[600ms] ease-smooth ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <nav className="flex flex-1 flex-col justify-center gap-9">
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block font-display text-[2.4rem] font-medium leading-[1.05] tracking-[0.01em] text-ivory transition-[transform,opacity,color] duration-[600ms] ease-smooth active:text-gold-light"
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
            transitionDelay: open ? `${120 + LINKS.length * 70 + 60}ms` : "0ms",
            transform: open ? "translateY(0)" : "translateY(14px)",
            opacity: open ? 1 : 0,
          }}
        >
          <span className="block h-px w-full bg-ivory/15" />
          <a
            href="#plan"
            onClick={() => setOpen(false)}
            className="mt-7 inline-flex items-center gap-3 font-body text-[0.7rem] uppercase tracking-[0.28em] text-gold-light"
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
