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

      <div className="relative z-[2] flex flex-col items-center gap-6 px-5 pb-16 pt-16 text-center md:px-16 md:pb-28 md:pt-28 lg:px-24">
        <p className="eyebrow text-gold-light">Sixtravel</p>

        <h2 className="js-closing-big max-w-[16ch] font-display text-[2.5rem] font-medium leading-[1.05] xs:text-5xl md:text-7xl lg:text-8xl">
          {words.map((w, i) => (
            <span key={i} className="word inline-block overflow-hidden">
              <span className="word-inner inline-block will-change-transform">{w}</span>
              {i < words.length - 1 ? " " : ""}
            </span>
          ))}
        </h2>

        <div className="js-closing-sub mt-4 flex flex-col items-center gap-5">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-ivory/70">
            Kerala to the World · One Travel House · An Endless Horizon
          </p>
          <p className="max-w-[34ch] font-display text-lg italic text-gold-light md:text-2xl">
            Curated with intention. Experienced without compromise. Travel,
            elevated.
          </p>
          <a href="#plan" className="btn btn-light">
            <span>Plan Your Journey</span>
            <Arrow className="arrow" />
          </a>
        </div>
      </div>

      <footer className="relative z-[2] flex flex-col gap-5 border-t border-ivory/[0.16] px-5 py-8 md:px-16 md:py-10 lg:px-24">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <span className="pl-[0.36em] font-display text-[1.1rem] tracking-[0.36em]">
            SIXTRAVEL
          </span>
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
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
        <div className="flex flex-col gap-2 text-[0.66rem] uppercase tracking-[0.14em] text-ivory/45 sm:flex-row sm:flex-wrap sm:justify-between sm:gap-4">
          <span>© {new Date().getFullYear()} Sixtravel. The Six Standard™.</span>
          <span>The world, beautifully within reach.</span>
        </div>
      </footer>
    </section>
  );
}
