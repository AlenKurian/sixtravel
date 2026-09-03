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

export default function Portfolio() {
  const scope = useReveal<HTMLElement>();

  return (
    <section
      ref={scope}
      id="portfolio"
      className="section-pad bg-ivory"
    >
      <div className="mb-10 flex items-end justify-between gap-6 md:mb-14">
        <div className="flex flex-col gap-3">
          <p className="eyebrow" data-reveal="">
            Our Portfolio
          </p>
          <h2 className="font-display text-3xl leading-[1.1] md:text-5xl" data-reveal="words">
            Three Ways to Travel
          </h2>
        </div>
      </div>

      <div
        className="mx-auto grid max-w-[1180px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6"
        data-reveal-group
      >
        {CARDS.map((c) => (
          <a
            key={c.name}
            href={c.href}
            className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-[26px] bg-forest text-ivory"
          >
            <img
              src={c.img}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1100ms] ease-smooth group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/35 to-forest/5" />

            <span className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-ivory/40 bg-forest/20 backdrop-blur-sm transition-colors duration-500 ease-smooth group-hover:bg-ivory group-hover:text-forest">
              <Arrow className="h-4 w-4 transition-transform duration-500 ease-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>

            <div className="relative flex flex-col gap-2.5 p-6">
              <h3 className="font-display text-2xl">{c.name}</h3>
              <p className="max-w-[34ch] text-[0.88rem] leading-[1.65] text-ivory/75">
                {c.body}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
