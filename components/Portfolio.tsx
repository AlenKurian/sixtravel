"use client";

import { useReveal } from "@/lib/useReveal";
import { Arrow } from "./Icons";

const CARDS = [
  {
    name: "Private Travel",
    tag: "Your journey. Your way.",
    body: "Private escapes, family holidays, celebrations, romantic getaways, and completely personalized journeys. Designed around your pace, interests, preferences, and sense of discovery.",
    note: "Personal. Private. Distinctly yours.",
    img: "/images/private.jpg",
  },
  {
    name: "Corporate Travel",
    tag: "Business, without the friction.",
    body: "Executive travel, corporate movements, business delegations, leadership retreats, incentive journeys, and destination programs. We coordinate the details behind seamless corporate travel.",
    note: "Precision in motion.",
    img: "/images/corporate.jpg",
  },
  {
    name: "Destination Experiences",
    tag: "Go beyond the obvious.",
    body: "Travel should be more than arriving somewhere and checking a destination off a list. We create experiences around culture, cuisine, nature, design, discovery, wellness, adventure, and connection.",
    note: "See more. Experience more. Remember more.",
    img: "/images/journeys/international.jpg",
  },
  {
    name: "Curated Journeys",
    tag: "Designed around the experience.",
    body: "For individuals, families, groups, and organizations, we create complete journeys where accommodation, transportation, destinations, dining, and hospitality come together naturally.",
    note: "Selective by templates. Designed with intention.",
    img: "/images/journeys/executive.jpg",
  },
];

export default function Portfolio() {
  const scope = useReveal<HTMLElement>();

  return (
    <section ref={scope} id="collection" className="section-pad border-t border-line bg-night-panel">
      <div className="mb-14 flex flex-col gap-5 md:mb-20 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-5">
          <p className="eyebrow flex items-center gap-3" data-reveal="">
            Our Collection
            <span className="h-px w-10 bg-gold/60" />
          </p>
          <h2
            className="max-w-[18ch] headline-vintage text-[2rem] leading-[1.1] text-cream sm:text-[2.6rem] md:text-5xl lg:text-6xl"
            data-reveal="words"
          >
            Tailored <span className="accent">Mobility</span> &amp; Escapes
          </h2>
        </div>
        <a
          href="#plan"
          className="group inline-flex items-center gap-3 border-b border-gold/40 pb-2 font-body text-[0.58rem] uppercase tracking-[0.24em] text-gold transition-colors duration-500 ease-smooth hover:border-gold-deep hover:text-gold-deep md:text-[0.64rem] md:tracking-[0.3em]"
        >
          Explore Our Collection
          <Arrow className="h-[0.85rem] w-[0.85rem] transition-transform duration-500 ease-smooth group-hover:translate-x-0.5" />
        </a>
      </div>

      <div
        className="m-hscroll -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-pl-6 px-6 pb-2 md:mx-0 md:grid md:snap-none md:grid-cols-2 md:items-stretch md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4"
        data-reveal-group
      >
        {CARDS.map((c) => (
          <article
            key={c.name}
            className="group flex w-[80vw] max-w-[340px] flex-none snap-start flex-col overflow-hidden border border-line bg-night transition-colors duration-500 hover:border-cream/40 md:w-auto md:max-w-none"
          >
            <div className="relative h-64 flex-none overflow-hidden md:h-72">
              <img
                src={c.img}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover saturate-[0.9] transition-transform duration-[1100ms] ease-smooth group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/35 to-transparent" />
            </div>

            <div className="flex flex-1 flex-col items-start gap-3 p-7">
              <h3 className="font-display text-[1.25rem] italic leading-[1.15] text-cream md:text-[1.5rem]">
                {c.name}
              </h3>
              <p className="text-[0.5rem] uppercase tracking-[0.18em] text-gold md:text-[0.56rem] md:tracking-[0.24em]">
                {c.tag}
              </p>
              <span className="block h-px w-8 bg-gold/50" />
              <p className="max-w-[42ch] text-[0.76rem] leading-[1.7] text-mist md:text-[0.83rem] md:leading-[1.75]">
                {c.body}
              </p>
              <p className="mt-1 text-[0.52rem] uppercase tracking-[0.18em] text-cream-soft md:text-[0.58rem] md:tracking-[0.22em]">
                {c.note}
              </p>
              <a
                href="#plan"
                className="group/btn mt-auto inline-flex items-center gap-2 pt-4 text-[0.56rem] uppercase tracking-[0.22em] text-cream transition-colors duration-500 ease-smooth hover:text-gold-deep md:text-[0.6rem] md:tracking-[0.26em]"
              >
                Learn More
                <Arrow className="h-3.5 w-3.5 transition-transform duration-500 ease-smooth group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
