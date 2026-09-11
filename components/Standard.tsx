"use client";

import { useReveal } from "@/lib/useReveal";
import { Arrow } from "./Icons";

const PRINCIPLES = [
  {
    title: "Curation",
    body: "We choose with intention, not volume. The world offers endless possibilities; our value lies in knowing which ones are worth the journey.",
    image: "/images/principles/curation.jpg",
  },
  {
    title: "Personalization",
    body: "No two journeys need to feel the same. Every journey begins with a blank canvas, designed around the traveller.",
    image: "/images/principles/personalization.jpg",
  },
  {
    title: "Precision",
    body: "Every detail matters. A remarkable journey is built through hundreds of small, deliberate decisions.",
    image: "/images/principles/precision.jpg",
  },
  {
    title: "Discovery",
    body: "We look beyond the expected — the unexpected meal, the quiet morning, the local conversation, the road worth taking.",
    image: "/images/principles/discovery.jpg",
  },
  {
    title: "Service",
    body: "Seamless support from beginning to end. We coordinate the details so you never have to.",
    image: "/images/principles/service.jpg",
  },
  {
    title: "Experience",
    body: "The journey itself becomes the memory. Thoughtful details that stay long after you return.",
    image: "/images/principles/experience.jpg",
  },
];

export default function Standard() {
  const scope = useReveal<HTMLElement>();

  return (
    <section ref={scope} id="standard" className="border-t border-line bg-night">
      {/* ── Beyond the Itinerary — The Six Standard grid ── */}
      <div className="section-pad">
        <div className="flex flex-col items-center gap-5 text-center" data-reveal="">
          <p className="eyebrow">Beyond the Itinerary</p>
          <span className="block h-px w-14 bg-gold/60" />
          <h2 className="max-w-[20ch] headline-vintage text-[2rem] leading-[1.1] text-cream sm:text-[2.6rem] md:text-5xl lg:text-6xl">
            The <span className="accent">Six</span> Standard™
          </h2>
          <p className="max-w-[52ch] text-[0.78rem] leading-[1.7] text-mist md:text-base md:leading-[1.8]">
            SIX TRAVEL&trade; is not built around volume. Truly considered travel
            requires time — to understand the traveller, study the destination,
            refine the details, and create something genuinely distinctive. So we
            remain selective by design.
          </p>
        </div>

        <div
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-20 lg:grid-cols-3"
          data-reveal-group
        >
          {PRINCIPLES.map((p, i) => (
            <article
              key={p.title}
              className="group flex flex-col overflow-hidden border border-line bg-night-panel transition-colors duration-500 hover:border-cream/40"
            >
              <div className="relative h-60 flex-none overflow-hidden md:h-64">
                <img
                  src={p.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover saturate-[0.9] transition-transform duration-[900ms] ease-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent" />
                <span className="absolute left-5 top-4 font-display text-[0.95rem] italic text-[#faf9f6]/85 [text-shadow:0_1px_10px_rgba(10,10,9,0.6)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-7">
                <h3 className="font-display text-[1.2rem] italic text-cream md:text-[1.4rem]">{p.title}</h3>
                <span className="block h-px w-8 bg-gold/50" />
                <p className="text-[0.76rem] leading-[1.7] text-mist md:text-[0.83rem] md:leading-[1.75]">{p.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 border-t border-line pt-8 text-center md:mt-20 md:flex-row md:justify-between md:text-left">
          <p className="text-[0.56rem] uppercase tracking-[0.22em] text-gold md:text-[0.62rem] md:tracking-[0.28em]">
            That is the SIX difference.
          </p>
          <span className="hidden h-px flex-1 bg-line md:mx-8 md:block" />
          <p className="text-[0.56rem] uppercase tracking-[0.2em] text-mist md:text-[0.62rem] md:tracking-[0.24em]">
            SIX TRAVEL&trade;
          </p>
        </div>
      </div>
    </section>
  );
}
