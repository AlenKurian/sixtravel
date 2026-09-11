"use client";

import { useReveal } from "@/lib/useReveal";

export default function About() {
  const scope = useReveal<HTMLElement>();

  return (
    <section ref={scope} id="about" className="border-t border-[#faf9f6]/10 bg-forest">
      <div className="section-pad">
        <div className="mx-auto flex max-w-[880px] flex-col items-center gap-8 text-center">
          <p className="font-body text-[0.66rem] font-medium uppercase tracking-eyebrow text-gold md:text-[0.68rem]" data-reveal>
            Who We Are
          </p>
          <p
            className="max-w-[74ch] text-[0.95rem] leading-[1.8] text-[#faf9f6] md:text-[1.15rem] md:leading-[1.8]"
            data-reveal="words"
          >
            A premium travel house creating thoughtfully designed journeys
            across Kerala, India, and the world. We bring together exceptional
            destinations, distinctive stays, seamless mobility, authentic
            experiences, and considered hospitality to create travel that
            feels effortless, personal, and worth remembering.
          </p>

          <span className="h-px w-10 bg-[#faf9f6]/20" data-reveal />

          <p
            className="max-w-[70ch] text-[0.72rem] uppercase leading-[1.85] tracking-[0.12em] text-[#d9d5cb]/60 md:text-[0.8rem] md:tracking-[0.14em]"
            data-reveal
          >
            From private escapes and family journeys to executive travel,
            corporate movements, destination experiences, and curated group
            journeys — every experience is designed with intention.
          </p>
        </div>
      </div>
    </section>
  );
}
