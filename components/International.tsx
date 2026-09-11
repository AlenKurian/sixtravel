"use client";

import { useReveal } from "@/lib/useReveal";

const STEPS = [
  "Select the destination",
  "Refine the route",
  "Choose the right stays",
  "Coordinate the movement",
  "Curate the experiences",
  "Anticipate the details",
];

export default function International() {
  const scope = useReveal<HTMLElement>();

  return (
    <section ref={scope} id="experiences" className="section-pad border-t border-line bg-night-panel">
      <div className="mx-auto flex max-w-[960px] flex-col items-center text-center">
        {/* ── SIX EXPERIENCE™ ── */}
        <div className="flex flex-col items-center" data-reveal="">
          <p className="eyebrow">Six Experience™</p>
          <span className="mt-3 block h-px w-12 bg-gold/60" />
          <h2 className="mt-5 max-w-[26ch] font-display text-[1.7rem] italic leading-[1.2] text-cream md:text-[2.4rem]">
            We don&rsquo;t simply arrange the journey. We <span className="text-gold not-italic">compose</span> it.
          </h2>
          <p className="mt-5 max-w-[56ch] text-[0.86rem] leading-[1.75] text-mist md:text-[0.95rem] md:leading-[1.75]">
            Every SIX journey begins with a simple question:{" "}
            <span className="text-cream-soft">What should this experience feel like?</span>
          </p>
        </div>

        {/* ── Steps grid: 2 panels of 3 ── */}
        <div
          className="mt-10 grid w-full max-w-[900px] grid-cols-1 gap-x-14 sm:grid-cols-2"
          data-reveal=""
        >
          {[STEPS.slice(0, 3), STEPS.slice(3)].map((panel, panelIdx) => (
            <div key={panelIdx} className="flex flex-col">
              {panel.map((s, i) => (
                <div
                  key={s}
                  className="flex items-center gap-4 border-t border-line py-3.5 last:border-b"
                >
                  <span className="font-display text-base italic text-gold">
                    {String(panelIdx * 3 + i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-[0.74rem] uppercase tracking-[0.14em] text-cream-soft md:text-[0.75rem] md:tracking-[0.16em]">
                    {s}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-[48ch] text-[0.84rem] uppercase leading-[1.65] tracking-[0.1em] text-gold md:text-[0.95rem] md:leading-[1.7] md:tracking-[0.12em]" data-reveal="">
          Find the exceptional. Remove the unnecessary. Create the unforgettable.
        </p>

        {/* ── Travel for people who move differently ── */}
        <div
          className="mt-14 flex max-w-[720px] flex-col items-center gap-4 border-t border-line pt-10 lg:mt-16 lg:pt-12"
          data-reveal=""
        >
          <span className="block h-px w-10 bg-gold/70" />
          <p className="max-w-[30ch] font-display text-[1.5rem] italic leading-[1.25] text-cream md:text-[2.1rem]">
            Travel for people who move differently
          </p>
          <p className="max-w-[64ch] text-[0.86rem] leading-[1.8] text-mist md:text-[0.98rem] md:leading-[1.8]">
            SIX TRAVEL&trade; creates experiences for people who value time,
            quality, discovery, and meaningful connection.
          </p>
        </div>
      </div>
    </section>
  );
}
