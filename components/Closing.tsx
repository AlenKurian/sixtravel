"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Arrow } from "./Icons";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const NAVS = [
  "Private Travel",
  "Corporate Travel",
  "Six Select™",
  "Kerala Experiences",
  "International Journeys",
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
        scrollTrigger: { trigger: ".js-closing-big", start: "top 80%" },
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

  const words = "Go somewhere worth remembering.".split(" ");

  return (
    <section
      ref={root}
      id="plan"
      className="relative overflow-hidden bg-forest text-ivory before:absolute before:inset-0 before:z-[1] before:bg-[radial-gradient(circle_at_50%_30%,rgba(31,51,41,0.35),rgba(31,51,41,0.95)_70%)] before:content-['']"
    >
      <div className="absolute inset-0 z-0 opacity-[0.28]">
        <img
          className="js-closing-glow h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=2000&q=80"
          alt=""
          loading="lazy"
        />
      </div>

      <div className="relative z-[2] flex flex-col items-center gap-8 px-6 pb-28 pt-28 text-center md:gap-6 md:px-16 md:pb-28 md:pt-28 lg:px-24">
        <p className="eyebrow text-gold-light">Sixtravel</p>

        <h2 className="js-closing-big max-w-[12ch] font-display text-[2.9rem] font-medium leading-[1.04] xs:text-[3.2rem] md:max-w-[16ch] md:text-7xl md:leading-[1.05] lg:text-8xl">
          {words.map((w, i) => (
            <span key={i} className="word inline-block overflow-hidden">
              <span className="word-inner inline-block will-change-transform">{w}</span>
              {i < words.length - 1 ? " " : ""}
            </span>
          ))}
        </h2>

        <div className="js-closing-sub mt-2 flex flex-col items-center gap-7 md:mt-4 md:gap-5">
          <p className="text-[0.62rem] uppercase tracking-[0.28em] text-ivory/70 md:text-[0.7rem] md:tracking-[0.22em]">
            Kerala to the World · One Travel House · An Endless Horizon
          </p>
          <p className="max-w-[26ch] font-display text-[1.35rem] italic leading-[1.4] text-gold-light md:max-w-[34ch] md:text-2xl md:leading-normal">
            Curated with intention. Experienced without compromise. Travel,
            elevated.
          </p>
          <a
            href="#plan"
            className="group mt-2 inline-flex items-center gap-3 border-b border-ivory/40 pb-2 font-body text-[0.66rem] uppercase tracking-[0.3em] text-ivory transition-colors duration-500 ease-smooth active:border-gold-light active:text-gold-light md:hidden"
          >
            Plan Your Journey
            <Arrow className="h-[0.85rem] w-[0.85rem] transition-transform duration-500 ease-smooth group-active:translate-x-0.5" />
          </a>
          <a href="#plan" className="btn btn-light hidden md:inline-flex">
            <span>Plan Your Journey</span>
            <Arrow className="arrow" />
          </a>
        </div>
      </div>

      <footer className="relative z-[2] border-t border-ivory/[0.16] px-6 py-12 md:px-16 md:py-10 lg:px-24">
        <div className="flex flex-col items-center gap-7 text-center md:flex-row md:items-start md:justify-between md:gap-8 md:text-left">
          <span className="pl-[0.36em] font-display text-[1.15rem] tracking-[0.36em]">
            SIXTRAVEL
          </span>
          <nav className="flex flex-col items-center gap-2 md:flex-row md:flex-wrap md:items-center md:justify-end md:gap-x-6 md:gap-y-2">
            {NAVS.map((n) => (
              <a
                href="#top"
                key={n}
                className="text-[0.68rem] uppercase tracking-[0.16em] text-ivory/70 transition-colors duration-[300ms] ease-smooth hover:text-gold"
              >
                {n}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-6 flex flex-col items-center gap-2 border-t border-ivory/[0.1] pt-5 text-center text-[0.64rem] uppercase tracking-[0.16em] text-ivory/45 md:mt-8 md:flex-row md:justify-between md:gap-4 md:pt-6 md:text-left">
          <span>© {new Date().getFullYear()} Sixtravel. The Six Standard™.</span>
          <span>The world, beautifully within reach.</span>
        </div>
      </footer>
    </section>
  );
}
