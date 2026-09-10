"use client";

import { useReveal } from "@/lib/useReveal";
import { Arrow } from "./Icons";

const CARDS = [
  {
    name: "Private Travel",
    body: "Travel created around you. Private escapes, family journeys, honeymoons, celebrations, wellness retreats, and bespoke itineraries designed with the freedom to move at your own pace.",
    href: "#plan",
    img: "/images/private.jpg",
  },
  {
    name: "Corporate Travel",
    body: "When business takes you across borders, precision matters. Sixtravel manages sophisticated journeys for executives, leadership teams, delegations, meetings, incentives, and retreats.",
    href: "#plan",
    img: "/images/corporate.jpg",
  },
  {
    name: "Six Select™",
    body: "A curated collection for founders, entrepreneurs, and ambitious travelers. Exceptional destinations meet meaningful experiences, cultural discovery, and genuine connection.",
    href: "#plan",
    img: "/images/six.jpg",
  },
];

/* outer cards sit high, the middle card drops down (editorial stagger) */
const OFFSET = ["md:mt-0", "md:mt-24 lg:mt-32", "md:mt-10 lg:mt-14"];

export default function Portfolio() {
  const scope = useReveal<HTMLElement>();

  return (
    <section
      ref={scope}
      id="portfolio"
      className="section-pad bg-ivory"
    >
      <div className="mb-12 flex items-end justify-between gap-6 md:mb-16">
        <div className="flex flex-col gap-4 md:gap-3">
          <p className="eyebrow" data-reveal="">
            Our Portfolio
          </p>
          <h2 className="max-w-[10ch] font-display text-[2.6rem] leading-[1.06] md:max-w-none md:text-5xl md:leading-[1.1]" data-reveal="words">
            Three Ways to Travel
          </h2>
        </div>
      </div>

      {/* Mobile: horizontal editorial reel. Desktop (md+): staggered 3-up. */}
      <div
        className="m-hscroll -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-pl-6 px-6 pb-2 md:mx-auto md:grid md:max-w-[1120px] md:snap-none md:grid-cols-3 md:items-start md:gap-7 md:overflow-visible md:px-0 md:pb-0 lg:gap-10"
        data-reveal-group
      >
        {CARDS.map((c, i) => (
          <article
            key={c.name}
            className={`group flex w-[78vw] max-w-[320px] flex-none snap-start flex-col md:w-auto md:max-w-none ${OFFSET[i]}`}
          >
            <a
              href={c.href}
              className="relative flex aspect-[3/4] flex-col justify-start overflow-hidden rounded-[20px] bg-forest text-ivory md:rounded-[24px]"
            >
              <img
                src={c.img}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1100ms] ease-smooth group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-forest/70 via-forest/10 to-forest/5" />

              <h3 className="relative p-6 text-center font-display text-[1.75rem] leading-[1.1] md:p-7 md:text-[1.7rem]">
                {c.name}
              </h3>
            </a>

            <div className="flex flex-col items-start gap-4 px-2 pt-5 md:items-center md:px-4 md:pt-6 md:text-center">
              <p className="max-w-[38ch] text-[0.88rem] leading-[1.7] text-ink-soft md:max-w-[40ch]">
                {c.body}
              </p>
              <a
                href={c.href}
                className="group/btn inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-3 text-[0.68rem] font-medium uppercase tracking-wide2 text-forest transition-colors duration-500 ease-smooth hover:border-forest"
              >
                <span>Discover more</span>
                <Arrow className="h-3.5 w-3.5 transition-transform duration-500 ease-smooth group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
