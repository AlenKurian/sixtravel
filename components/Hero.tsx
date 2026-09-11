"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Arrow } from "./Icons";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const CHIPS = ["Curated Journeys", "Exceptional Destinations", "Considered Travel"];

const HERO_DESKTOP = "/images/desk_hero1.jpeg";
const HERO_MOBILE = "/images/mob_hero1.jpeg";

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 767px)").matches;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".js-hero-img", {
        scale: mobile ? 1.12 : 1.16,
        duration: 2,
        ease: "expo.out",
      })
        .from(".js-line > span", { yPercent: 120, duration: 1.2, stagger: 0.12 }, "-=1.5")
        .from(".js-copy > *", { y: 30, opacity: 0, duration: 0.9, stagger: 0.1 }, "-=0.7")
        .from(".js-chip", { y: 20, opacity: 0, duration: 0.6, stagger: 0.08 }, "-=0.6");

      if (!reduce) {
        gsap.to(".js-hero-img", {
          yPercent: mobile ? 10 : 16,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });
        gsap.to(".js-headline", {
          yPercent: -12,
          opacity: 0.2,
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
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-night text-center md:justify-end"
    >
      {/* Full-bleed image */}
      <div className="js-hero-img absolute inset-x-0 -top-[8%] -bottom-[8%] z-0">
        <picture>
          <source media="(max-width: 767px)" srcSet={HERO_MOBILE} />
          <img
            src={HERO_DESKTOP}
            alt="A vintage camper van on a mountain road through a green alpine valley"
            fetchPriority="high"
            className="h-full w-full object-cover object-[60%_center] saturate-[0.95] contrast-[1.02] md:object-center"
          />
        </picture>
      </div>

      {/* Quiet dark wash — legible nav top, deep base for text */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(10,10,9,0.44)_0%,rgba(10,10,9,0.08)_26%,rgba(10,10,9,0.2)_52%,rgba(10,10,9,0.65)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-1/2 bg-[linear-gradient(180deg,transparent,rgba(10,10,9,0.58))]" />

      <div className="relative z-[3] -mt-28 flex w-full flex-col items-center px-6 pb-0 pt-0 sm:px-8 md:mt-0 md:px-16 md:pb-32 md:pt-[13vh] lg:px-24">
        <p className="mb-6 font-body text-[0.6rem] font-medium uppercase tracking-[0.28em] text-[#faf9f6]/80 md:mb-9 md:text-[0.72rem] md:tracking-[0.32em]">
          The Six Standard™ · Travel, Perfected.
        </p>

        <div className="flex flex-col items-center gap-8">
          <h1 className="js-headline font-display text-[2.2rem] font-semibold italic leading-[1.08] tracking-[0.005em] text-[#faf9f6] xs:text-[2.4rem] sm:text-5xl md:text-6xl md:font-medium md:leading-[1.08] md:tracking-normal lg:text-[4.4rem]">
            {["The World, Beautifully", "Within Reach"].map((l) => (
              <span key={l} className="js-line block overflow-hidden">
                <span className="block">{l}</span>
              </span>
            ))}
          </h1>

          <div className="js-copy flex flex-col items-center gap-7">
            <a
              href="#plan"
              className="group inline-flex items-center gap-3 border border-[#faf9f6]/70 px-6 py-[0.75rem] font-body text-[0.66rem] uppercase tracking-[0.14em] text-[#faf9f6] transition-colors duration-500 ease-smooth hover:bg-[#faf9f6] hover:text-forest md:hidden"
            >
              Plan Your Journey
              <Arrow className="h-[0.85rem] w-[0.85rem] transition-transform duration-500 ease-smooth group-hover:translate-x-0.5" />
            </a>
            <a
              href="#plan"
              className="group hidden items-center gap-3 border border-[#faf9f6]/70 px-8 py-4 font-body text-[0.68rem] font-medium uppercase tracking-wide2 text-[#faf9f6] transition-colors duration-500 ease-smooth hover:bg-[#faf9f6] hover:text-forest md:inline-flex"
            >
              <span>Plan Your Journey</span>
              <Arrow className="h-4 w-4 transition-transform duration-500 ease-smooth group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-[0.6rem] border-t border-[#faf9f6]/20 pt-8 md:mt-16">
          {CHIPS.map((c) => (
            <span
              key={c}
              className="js-chip rounded-none border border-[#faf9f6]/25 px-3 py-[0.45rem] font-body text-[0.58rem] uppercase tracking-[0.18em] text-[#e9e6dd] md:px-4 md:py-[0.55rem] md:text-[0.64rem] md:tracking-[0.22em]"
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute inset-x-0 bottom-0 z-[3] flex items-center justify-center gap-3 pb-[calc(env(safe-area-inset-bottom)+1.5rem)] font-body text-[0.6rem] uppercase tracking-[0.28em] text-[#faf9f6]/55 md:relative md:pb-8 md:text-[0.62rem]">
        <span>Scroll</span>
        <i className="relative block h-px w-[46px] overflow-hidden bg-[#faf9f6]/30 after:absolute after:inset-0 after:animate-cue after:bg-[#faf9f6] after:content-['']" />
      </div>
    </section>
  );
}
