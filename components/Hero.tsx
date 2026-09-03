"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Arrow } from "./Icons";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const CHIPS = ["Curated Journeys", "Exceptional Destinations", "Considered Travel"];

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".js-frame", {
        clipPath: "inset(12% 12% 12% 12% round 28px)",
        scale: 1.08,
        duration: 1.6,
        ease: "expo.out",
      })
        .from(".js-line > span", { yPercent: 120, duration: 1.2, stagger: 0.12 }, "-=1.1")
        .from(".js-copy > *", { y: 30, opacity: 0, duration: 0.9, stagger: 0.1 }, "-=0.7")
        .from(".js-chip", { y: 20, opacity: 0, duration: 0.6, stagger: 0.08 }, "-=0.6");

      if (!reduce) {
        gsap.to(".js-hero-img", {
          yPercent: 18,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });
        gsap.to(".js-headline", {
          yPercent: -14,
          opacity: 0.15,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });
      }
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="top"
      className="flex min-h-[100svh] flex-col justify-center bg-ivory pt-[3.5rem] md:pt-0"
    >
      <div className="js-frame relative m-3 flex min-h-[calc(100svh-6.5rem)] items-end overflow-hidden rounded-[28px] [clip-path:inset(0_0_0_0_round_28px)] after:absolute after:inset-0 after:z-[1] after:bg-[linear-gradient(180deg,rgba(31,51,41,0.45)_0%,rgba(31,51,41,0.05)_32%,rgba(31,51,41,0.15)_60%,rgba(31,51,41,0.7)_100%)] after:content-[''] md:mx-6 md:mb-8 md:mt-[4.25rem] md:min-h-[96svh]">
        <div className="js-hero-img absolute inset-x-0 top-0 -bottom-[22%] z-0 md:-top-[16%] md:-bottom-[8%]">
          <picture>
            <source media="(max-width: 767px)" srcSet="/images/mob_hero.png" />
            <img
              src="/images/six_hero.png"
              alt="Sunlit sandstone cliffs rising over desert dunes"
              className="h-full w-full object-cover object-[center_top]"
            />
          </picture>
        </div>
        <div className="grain pointer-events-none absolute inset-0 z-[2] opacity-50 mix-blend-overlay" />

        <div className="relative z-[3] grid w-full grid-cols-1 content-start items-start gap-5 p-6 pb-[6vh] pt-[6vh] text-ivory sm:p-7 sm:pb-[18vh] md:content-normal md:items-end md:grid-cols-[1.1fr_0.9fr] md:gap-8 md:p-12 md:pb-[20vh] md:pt-12 lg:p-16 lg:pb-[20vh]">
          <p className="eyebrow text-[0.58rem] text-gold-light md:col-span-2 md:text-[0.72rem]">The Six Standard™</p>

          <h1 className="js-headline font-display text-[2.75rem] font-medium leading-[1.04] xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            {["The World", "Beautifully", "Within Reach"].map((l) => (
              <span key={l} className="js-line block overflow-hidden">
                <span className="block">{l}</span>
              </span>
            ))}
          </h1>

          <div className="js-copy mt-[28vh] flex flex-col items-center gap-6 pb-2 md:mt-auto md:mb-[-8vh] md:max-w-[52ch] md:justify-self-start md:pl-8 md:text-center lg:pl-12">
            <p className="text-[0.8rem] leading-[1.6] text-ivory/80 md:text-base md:leading-[1.7]">
              Sophisticated journeys across Kerala, India, and the world —
              thoughtfully curated, seamlessly delivered.
            </p>
            <a href="#plan" className="btn btn-light self-center !px-6 !py-3 !text-[0.62rem] md:!px-8 md:!py-4 md:!text-[0.7rem]">
              <span>Plan Your Journey</span>
              <Arrow className="arrow" />
            </a>
          </div>

          <div className="hidden flex-wrap gap-[0.6rem] border-t border-ivory/25 pt-6 md:col-span-2 md:flex">
            {CHIPS.map((c) => (
              <span
                key={c}
                className="js-chip rounded-full border border-ivory/35 px-4 py-[0.55rem] text-[0.64rem] uppercase tracking-[0.22em]"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 pb-4 text-[0.62rem] uppercase tracking-[0.28em] text-ink-soft md:pb-8">
        <span>Scroll</span>
        <i className="relative block h-px w-[46px] overflow-hidden bg-ink-soft after:absolute after:inset-0 after:animate-cue after:bg-gold after:content-['']" />
      </div>
    </section>
  );
}
