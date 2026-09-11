"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Arrow } from "./Icons";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const NAVS = [
  { label: "Home", href: "#top" },
  { label: "Destinations", href: "#destinations" },
  { label: "Our Collection", href: "#collection" },
  { label: "Our Approach", href: "#experiences" },
  { label: "About", href: "#standard" },
];

export default function Closing() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      gsap.from(".js-closing-big .word-inner", {
        yPercent: 120,
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.06,
        scrollTrigger: { trigger: ".js-closing-big", start: "top 82%" },
      });

      gsap.from(".js-closing-sub > *", {
        y: 26,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".js-closing-sub", start: "top 85%" },
      });

      if (!reduce) {
        gsap.to(".js-closing-glow", {
          scale: 1.15,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, root);
    return () => ctx.revert();
  }, []);

  const words = "The Journey Starts Here".split(" ");

  const SERVICES = [
    "Private Travel",
    "Corporate Travel",
    "Destination Experiences",
    "Curated Journeys",
  ];

  return (
    <section
      ref={root}
      id="plan"
      className="relative overflow-hidden bg-forest text-[#faf9f6]"
    >
      <div className="absolute inset-0 z-0 opacity-[0.24]">
        <img
          className="js-closing-glow h-full w-full object-cover saturate-[0.85]"
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=2000&q=80"
          alt=""
          loading="lazy"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_32%,rgba(18,42,26,0.5),rgba(10,10,9,0.96)_72%)]" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(140%_60%_at_50%_115%,rgba(90,82,66,0.22),transparent_58%)]" />

      <div className="relative z-[2] flex flex-col items-center gap-9 px-6 pb-28 pt-28 text-center md:gap-7 md:px-16 md:pb-36 md:pt-36 lg:px-24">
        <p className="font-body text-[0.72rem] font-medium uppercase tracking-eyebrow text-gold">
          SIX TRAVEL&trade;
        </p>

        <h2 className="js-closing-big max-w-[14ch] font-display text-[2.35rem] italic leading-[1.1] text-[#faf9f6] xs:text-[2.55rem] sm:text-[2.9rem] md:max-w-[18ch] md:text-7xl md:leading-[1.03] lg:text-[5rem]">
          {words.map((w, i) => (
            <span key={i}>
              <span className="word inline-block overflow-hidden align-bottom">
                <span className="word-inner inline-block will-change-transform">
                  {w}
                </span>
              </span>
              {i < words.length - 1 ? " " : ""}
            </span>
          ))}
        </h2>

        <div className="js-closing-sub mt-2 flex flex-col items-center gap-7 md:mt-4 md:gap-6">
          <p className="max-w-[48ch] text-[0.82rem] leading-[1.8] text-gold md:max-w-[56ch] md:text-[1.5rem] md:leading-[1.85]">
            Tell us where you want to go. Tell us how you want to travel. Tell us
            what you want to experience. We&rsquo;ll take it from there.
          </p>
          <p className="max-w-[28ch] font-display text-[1.25rem] italic leading-[1.4] text-[#faf9f6] md:max-w-[40ch] md:text-3xl md:leading-normal">
            Go somewhere worth remembering.
          </p>

          <a
            href="#plan"
            className="group mt-2 inline-flex items-center gap-3 rounded-full bg-[#faf9f6] px-6 py-[0.75rem] font-body text-[0.68rem] font-medium text-forest transition-colors duration-500 ease-smooth active:bg-[#e9e6dd] md:hidden"
          >
            Plan Your Journey
            <Arrow className="h-[0.85rem] w-[0.85rem] transition-transform duration-500 ease-smooth group-active:translate-x-0.5" />
          </a>
          <a
            href="#plan"
            className="group mt-2 hidden items-center gap-3 rounded-full bg-[#faf9f6] px-8 py-4 font-body text-[0.68rem] font-medium uppercase tracking-wide2 text-forest transition-colors duration-500 ease-smooth hover:bg-[#e9e6dd] md:inline-flex"
          >
            <span>Plan Your Journey</span>
            <Arrow className="h-4 w-4 transition-transform duration-500 ease-smooth group-hover:translate-x-0.5" />
          </a>

          <div className="mt-2 flex flex-col items-center gap-2">
            <p className="text-[0.86rem] uppercase tracking-[0.2em] text-gold md:text-[1rem] md:tracking-[0.3em]">
              Kerala to the World.
            </p>
            <p className="max-w-[48ch] text-[0.8rem] uppercase leading-[1.75] tracking-[0.1em] text-[#d9d5cb]/60 md:text-[0.9rem] md:leading-[1.8] md:tracking-[0.14em]">
              One travel house. An endless horizon.
              <br />
              Curated with intention. Experienced without compromise.
            </p>
          </div>

          <div className="mt-2 flex w-full max-w-[820px] flex-wrap items-center justify-center gap-x-3 gap-y-2 border-t border-[#faf9f6]/15 pt-6">
            {SERVICES.map((s, i) => (
              <span key={s} className="flex items-center gap-3">
                <span className="text-[0.72rem] uppercase tracking-[0.16em] text-[#d9d5cb]/70 md:text-[0.8rem] md:tracking-[0.2em]">
                  {s}
                </span>
                {i < SERVICES.length - 1 && (
                  <span className="text-[#d9d5cb]/30">|</span>
                )}
              </span>
            ))}
          </div>

          <p className="mt-2 text-[0.86rem] uppercase tracking-[0.16em] text-[#faf9f6] md:text-[1rem] md:tracking-[0.2em]">
            SIX TRAVEL&trade; &nbsp;&bull;&nbsp; The Six Standard&trade;
          </p>
        </div>
      </div>

      <footer className="relative z-[2] border-t border-[#faf9f6]/12 px-6 py-12 md:px-16 md:py-12 lg:px-24">
        <div className="flex flex-col items-center gap-7 text-center md:flex-row md:items-center md:justify-between md:gap-8 md:text-left">
          <a href="#top" className="inline-flex items-center gap-[0.6rem]">
            <span className="pl-[0.36em] font-display text-[1.15rem] italic tracking-[0.1em] text-[#faf9f6]">
              SIX&nbsp;TRAVEL
            </span>
          </a>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:justify-end">
            {NAVS.map((n) => (
              <a
                href={n.href}
                key={n.label}
                className="text-[0.64rem] uppercase tracking-[0.13em] text-[#d9d5cb]/70 transition-colors duration-[300ms] ease-smooth hover:text-gold md:text-[0.66rem] md:tracking-[0.16em]"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-6 flex flex-col items-center gap-2 border-t border-[#faf9f6]/[0.08] pt-5 text-center text-[0.6rem] uppercase tracking-[0.12em] text-[#d9d5cb]/45 md:mt-8 md:flex-row md:justify-between md:gap-4 md:pt-6 md:text-left md:text-[0.62rem] md:tracking-[0.16em]">
          <span>© {new Date().getFullYear()} SIX TRAVEL™. The Six Standard™.</span>
          <span>Curated Journeys. A Richer World.</span>
        </div>
      </footer>
    </section>
  );
}
