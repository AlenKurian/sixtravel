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
    const mobile = window.matchMedia("(max-width: 767px)").matches;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".js-frame", {
        clipPath: mobile
          ? "inset(8% 8% 8% 8%)"
          : "inset(12% 12% 12% 12% round 28px)",
        scale: mobile ? 1.06 : 1.08,
        duration: 1.6,
        ease: "expo.out",
      })
        .from(".js-line > span", { yPercent: 120, duration: 1.2, stagger: 0.12 }, "-=1.1")
        .from(".js-copy > *", { y: 30, opacity: 0, duration: 0.9, stagger: 0.1 }, "-=0.7")
        .from(".js-chip", { y: 20, opacity: 0, duration: 0.6, stagger: 0.08 }, "-=0.6");

      if (!reduce) {
        gsap.to(".js-hero-img", {
          yPercent: mobile ? 12 : 18,
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
      className="flex min-h-[100svh] flex-col justify-center bg-ivory pt-0"
    >
      <div className="js-frame relative m-0 flex min-h-[100svh] items-end overflow-hidden rounded-none [clip-path:inset(0_0_0_0)] after:absolute after:inset-0 after:z-[1] after:bg-[linear-gradient(180deg,rgba(31,51,41,0.42)_0%,rgba(31,51,41,0.04)_30%,rgba(31,51,41,0.12)_55%,rgba(31,51,41,0.78)_100%)] after:content-[''] md:m-3 md:mx-6 md:mb-8 md:mt-[4.25rem] md:min-h-[96svh] md:rounded-[28px] md:[clip-path:inset(0_0_0_0_round_28px)] md:after:bg-[linear-gradient(180deg,rgba(31,51,41,0.45)_0%,rgba(31,51,41,0.05)_32%,rgba(31,51,41,0.15)_60%,rgba(31,51,41,0.7)_100%)]">
        <div className="js-hero-img absolute inset-x-0 -top-[6%] -bottom-[16%] z-0 md:-top-[16%] md:-bottom-[8%]">
          <picture>
            <source media="(max-width: 767px)" srcSet="/images/mob_hero.png" />
            <img
              src="/images/six_hero.png"
              alt="Sunlit sandstone cliffs rising over desert dunes"
              fetchPriority="high"
              className="h-full w-full object-cover object-[52%_28%] md:object-[center_top]"
            />
          </picture>
        </div>
        <div className="grain pointer-events-none absolute inset-0 z-[2] opacity-50 mix-blend-overlay" />

        <div className="relative z-[3] grid w-full grid-cols-1 content-start items-start gap-5 px-6 pb-[calc(env(safe-area-inset-bottom)+3.25rem)] pt-[14vh] text-ivory sm:p-7 sm:pb-[18vh] md:content-normal md:items-end md:grid-cols-[1.1fr_0.9fr] md:gap-8 md:p-12 md:pb-[20vh] md:pt-12 lg:p-16 lg:pb-[20vh]">
          <p className="eyebrow text-[0.6rem] tracking-[0.32em] text-gold-light md:col-span-2 md:text-[0.72rem]">The Six Standard™</p>

          <h1 className="js-headline font-display text-[3.1rem] font-medium leading-[1.02] tracking-[0.005em] xs:text-[3.4rem] sm:text-6xl md:text-7xl md:leading-[1.04] md:tracking-normal lg:text-8xl">
            {["The World", "Beautifully", "Within Reach"].map((l) => (
              <span key={l} className="js-line block overflow-hidden">
                <span className="block">{l}</span>
              </span>
            ))}
          </h1>

          <div className="js-copy mt-[38vh] flex flex-col items-start gap-7 pb-2 sm:mt-[30vh] md:mt-auto md:mb-[-8vh] md:max-w-[52ch] md:items-center md:justify-self-start md:pl-8 md:text-center lg:pl-12">
            <p className="max-w-[32ch] text-[0.86rem] leading-[1.7] text-ivory/85 md:max-w-none md:text-base md:leading-[1.7]">
              Sophisticated journeys across Kerala, India, and the world —
              thoughtfully curated, seamlessly delivered.
            </p>
            <a
              href="#plan"
              className="group inline-flex items-center gap-3 border-b border-ivory/40 pb-2 font-body text-[0.66rem] uppercase tracking-[0.3em] text-ivory transition-colors duration-500 ease-smooth active:border-gold-light active:text-gold-light md:hidden"
            >
              Plan Your Journey
              <Arrow className="h-[0.85rem] w-[0.85rem] transition-transform duration-500 ease-smooth group-active:translate-x-0.5" />
            </a>
            <a href="#plan" className="btn btn-light hidden self-center md:inline-flex md:!px-8 md:!py-4 md:!text-[0.7rem]">
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

      <div className="hidden items-center justify-center gap-3 pb-4 text-[0.62rem] uppercase tracking-[0.28em] text-ink-soft md:flex md:pb-8">
        <span>Scroll</span>
        <i className="relative block h-px w-[46px] overflow-hidden bg-ink-soft after:absolute after:inset-0 after:animate-cue after:bg-gold after:content-['']" />
      </div>
    </section>
  );
}
