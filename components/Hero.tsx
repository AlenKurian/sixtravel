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
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".js-frame", {
        clipPath: "inset(10% 10% 10% 10% round 24px)",
        scale: 1.06,
        duration: 2,
        ease: "expo.out",
      })
        .from(".js-hero-img img", { scale: 1.12, duration: 2.4, ease: "expo.out" }, 0)
        .from(".js-eyebrow", { y: 16, opacity: 0, duration: 1.1 }, "-=1.5")
        .from(
          ".js-line > span",
          { yPercent: 118, duration: 1.4, stagger: 0.14 },
          "-=1.15"
        )
        .from(".js-para", { y: 22, opacity: 0, duration: 1.1 }, "-=0.9")
        .from(".js-cta", { y: 18, opacity: 0, duration: 1 }, "-=0.75")
        .from(
          ".js-manifesto > *",
          { y: 16, opacity: 0, duration: 0.9, stagger: 0.12 },
          "-=0.7"
        )
        .from(".js-scroll", { opacity: 0, duration: 1 }, "-=0.5");

      if (!reduce) {
        gsap.to(".js-hero-img", {
          yPercent: 12,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });
        gsap.to(".js-headline", {
          yPercent: -10,
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
      className="flex min-h-[100svh] flex-col justify-center bg-ivory"
    >
      <div className="js-frame relative mx-3 mb-4 mt-0 flex min-h-[100svh] items-stretch overflow-hidden rounded-none [clip-path:inset(0_0_0_0)] md:mx-6 md:mb-8 md:mt-[4.25rem] md:min-h-[96svh] md:items-end md:rounded-[28px] md:[clip-path:inset(0_0_0_0_round_28px)]">
        <div className="js-hero-img absolute inset-x-0 -top-[10%] -bottom-[6%] z-0 md:-top-[16%] md:-bottom-[8%]">
          <img
            src="/images/6_hero.png"
            alt="Sunlit sandstone cliffs rising over desert dunes"
            className="h-full w-full object-cover object-[62%_center] md:object-[center_top]"
          />
        </div>

        {/* Subtle cinematic gradient — weighted to the lower text zone,
            light touch elsewhere to protect the sunset tones. */}
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(20,32,26,0.42)_0%,rgba(20,32,26,0.06)_24%,rgba(20,32,26,0)_46%,rgba(20,32,26,0.34)_72%,rgba(20,32,26,0.78)_100%)] md:bg-[linear-gradient(180deg,rgba(31,51,41,0.45)_0%,rgba(31,51,41,0.05)_32%,rgba(31,51,41,0.15)_60%,rgba(31,51,41,0.7)_100%)]" />

        <div className="grain pointer-events-none absolute inset-0 z-[2] opacity-40 mix-blend-overlay md:opacity-50" />

        {/* MOBILE composition — intentional, lower-weighted, editorial rhythm */}
        <div className="relative z-[3] flex w-full flex-col px-6 pb-[9vh] pt-[calc(4.25rem+7vh)] text-ivory md:hidden">
          <p className="js-eyebrow eyebrow text-gold-light">The Six Standard™</p>

          <h1 className="js-headline mt-[13vh] font-display text-[2.55rem] font-medium leading-[1.02]">
            {["The World", "Beautifully", "Within Reach"].map((l) => (
              <span key={l} className="js-line block overflow-hidden">
                <span className="block">{l}</span>
              </span>
            ))}
          </h1>

          <p className="js-para mt-9 max-w-[34ch] text-[0.84rem] leading-[1.75] text-ivory/85">
            Sophisticated journeys across Kerala, India, and the world —
            thoughtfully curated, seamlessly delivered.
          </p>

          <a href="#plan" className="js-cta cta-line mt-10 self-start">
            <span>Plan Your Journey</span>
            <Arrow className="arrow" />
          </a>

          <div className="js-manifesto mt-[11vh] flex flex-col">
            {CHIPS.map((c) => (
              <span
                key={c}
                className="border-t border-ivory/20 py-[0.85rem] text-[0.6rem] uppercase tracking-[0.28em] text-ivory/75 first:border-t-0"
              >
                {c}
              </span>
            ))}
          </div>

          <div className="js-scroll mt-[7vh] flex items-center gap-3 self-start text-[0.58rem] uppercase tracking-[0.32em] text-ivory/60">
            <span>Scroll</span>
            <i className="block h-[14px] w-px bg-ivory/50 animate-drift" />
          </div>
        </div>

        {/* DESKTOP composition — unchanged */}
        <div className="relative z-[3] hidden w-full grid-cols-1 items-end gap-5 p-6 pb-[14vh] text-ivory sm:p-7 sm:pb-[18vh] md:grid md:grid-cols-[1.1fr_0.9fr] md:gap-8 md:p-12 md:pb-[20vh] lg:p-16 lg:pb-[20vh]">
          <p className="eyebrow text-gold-light md:col-span-2">The Six Standard™</p>

          <h1 className="js-headline font-display text-[2.75rem] font-medium leading-[1.04] xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            {["The World", "Beautifully", "Within Reach"].map((l) => (
              <span key={l} className="js-line block overflow-hidden">
                <span className="block">{l}</span>
              </span>
            ))}
          </h1>

          <div className="js-copy flex flex-col items-center gap-6 pb-2 md:mb-[-8vh] md:mt-auto md:max-w-[52ch] md:justify-self-start md:pl-8 md:text-center lg:pl-12">
            <p className="text-[0.9rem] leading-[1.7] text-ivory/80 md:text-base">
              Sophisticated journeys across Kerala, India, and the world —
              thoughtfully curated, seamlessly delivered.
            </p>
            <a href="#plan" className="btn btn-light self-center">
              <span>Plan Your Journey</span>
              <Arrow className="arrow" />
            </a>
          </div>

          <div className="flex flex-wrap gap-[0.6rem] border-t border-ivory/25 pt-6 md:col-span-2">
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

      {/* Desktop scroll cue — unchanged; hidden on mobile (mobile has its own) */}
      <div className="hidden items-center justify-center gap-3 pb-4 text-[0.62rem] uppercase tracking-[0.28em] text-ink-soft md:flex md:pb-8">
        <span>Scroll</span>
        <i className="relative block h-px w-[46px] overflow-hidden bg-ink-soft after:absolute after:inset-0 after:animate-cue after:bg-gold after:content-['']" />
      </div>
    </section>
  );
}
