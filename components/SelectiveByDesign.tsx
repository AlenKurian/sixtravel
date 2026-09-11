"use client";

import { useReveal } from "@/lib/useReveal";
import { Arrow } from "./Icons";

export default function SelectiveByDesign() {
  const scope = useReveal<HTMLElement>();

  return (
    <section ref={scope} className="section-pad border-t border-line bg-night-panel">
      <div
        className="mx-auto mb-14 flex max-w-[900px] flex-col items-center gap-4 text-center md:mb-16"
        data-reveal=""
      >
        <p className="font-body text-[0.66rem] font-medium uppercase tracking-eyebrow text-gold md:text-[0.72rem]">
          Travel for People Who Move Differently
        </p>
        <p className="text-[0.9rem] leading-[1.75] text-cream-soft md:text-[0.95rem] md:leading-[1.8]">
          SIX TRAVEL&trade; creates experiences for people who value time,
          quality, discovery, and meaningful connection.
        </p>
        <p className="text-[0.72rem] uppercase leading-[1.85] tracking-[0.12em] text-mist md:text-[0.78rem] md:leading-[1.9] md:tracking-[0.14em]">
          Founders &bull; Entrepreneurs &bull; Executives &bull; Creators &bull;
          Families &bull; Corporate Teams &bull; Curious Travellers
        </p>
      </div>

      <div
        className="mx-auto flex max-w-[900px] flex-col items-center gap-5 text-center"
        data-reveal=""
      >
        <h3 className="font-display text-[1.8rem] italic leading-[1.2] text-cream md:text-[2.4rem]">
          Selective by Design
        </h3>
        <p className="max-w-[68ch] text-[0.92rem] leading-[1.75] text-mist md:text-[1.05rem] md:leading-[1.8]">
          Fewer templates. Greater imagination. Closer attention. Every
          journey deserves its own character.
        </p>
        <a
          href="#plan"
          className="group mt-4 inline-flex items-center gap-3 border-b border-gold/40 pb-2 font-body text-[0.62rem] uppercase tracking-[0.26em] text-gold transition-colors duration-500 ease-smooth hover:border-gold-deep hover:text-gold-deep md:text-[0.62rem] md:tracking-[0.3em]"
        >
          Start Your Journey
          <Arrow className="h-[0.8rem] w-[0.8rem] transition-transform duration-500 ease-smooth group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  );
}
