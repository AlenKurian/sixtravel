"use client";

import { useState } from "react";
import { useReveal } from "@/lib/useReveal";
import { Arrow } from "./Icons";

function Compass({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="m12 4 2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6Z" strokeLinejoin="round" />
    </svg>
  );
}

const WORTHS: { text: string; icon: JSX.Element }[] = [
  {
    text: "A city worth understanding.",
    icon: (
      <>
        <path d="M6 21V7l6-3 6 3v14" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 21h18M10 10h.01M14 10h.01M10 14h.01M14 14h.01M10 21v-4h4v4" strokeLinecap="round" />
      </>
    ),
  },
  {
    text: "A coastline worth disappearing into.",
    icon: (
      <path
        d="M3 9c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2M3 14c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2M3 19c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    text: "A culture worth encountering.",
    icon: (
      <>
        <path d="M3 21h18M4 21V10M20 21V10M8 21V10M16 21V10M12 21V10M3 10 12 4l9 6" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    text: "A hotel worth travelling for.",
    icon: (
      <>
        <path d="M12 3a4 4 0 0 1 4 4H8a4 4 0 0 1 4-4Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 12h16a0 0 0 0 1 0 0 8 8 0 0 1-16 0ZM12 20v1M4 21h16" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    text: "A landscape worth waking up to.",
    icon: (
      <path
        d="M3 20h18L14 8l-4 6-2-3-5 9Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

const IMAGES = [
  // Italian coastline
  "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1000&q=80",
  // Dubai skyline
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80",
  // desert camp
  "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1000&q=80",
  // overwater villas
  "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1000&q=80",
];

const ENTERPRISE = [
  {
    name: "Executive Travel",
    body: "Seamless journeys designed around demanding schedules.",
    href: "#plan",
    caption: "Seamless. Smart. Successful.",
    sub: "Every journey, managed with precision and care.",
    // executive at the airport
    img: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1400&q=80",
    icon: (
      <path
        d="M4 15h16M6 15l1.5-5.5A2 2 0 0 1 9.4 8h5.2a2 2 0 0 1 1.9 1.5L18 15M7 19h2m6 0h2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    name: "Corporate Delegations",
    body: "Coordinated travel for teams moving together across destinations.",
    href: "#plan",
    caption: "Together, in motion.",
    sub: "One team, one itinerary, every detail aligned.",
    // group travelling together
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=80",
    icon: (
      <>
        <circle cx="9" cy="8" r="2.4" />
        <circle cx="16" cy="9.5" r="2" />
        <path
          d="M4.5 18c0-2.5 2-4.3 4.5-4.3s4.5 1.8 4.5 4.3M14.5 17c.2-1.9 1.6-3.2 3.4-3.2 1.4 0 2.6.8 3.1 2"
          strokeLinecap="round"
        />
      </>
    ),
  },
  {
    name: "Business Events",
    body: "Travel management for conferences, exhibitions, meetings, launches, and corporate occasions.",
    href: "#plan",
    caption: "The room, and everything around it.",
    sub: "Logistics handled so the occasion can lead.",
    // premium conference / event
    img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1400&q=80",
    icon: (
      <>
        <rect x="4" y="5" width="16" height="11" rx="1.5" />
        <path d="M9 20h6M12 16v4" strokeLinecap="round" />
      </>
    ),
  },
  {
    name: "Incentive Journeys",
    body: "Exceptional destination experiences designed to recognise and reward people.",
    href: "#plan",
    caption: "Motivate. Reward. Inspire.",
    sub: "Destination experiences people remember for years.",
    // luxury destination experience
    img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1400&q=80",
    icon: (
      <path
        d="M12 4 9.5 9l-5.5.8 4 3.9-1 5.5 5-2.6 5 2.6-1-5.5 4-3.9L14.5 9 12 4Z"
        strokeLinejoin="round"
      />
    ),
  },
  {
    name: "Leadership Retreats",
    body: "Thoughtfully curated environments for leadership, strategy, connection, and renewal.",
    href: "#plan",
    caption: "Strategy meets serenity.",
    sub: "Quiet settings that make room for clear thinking.",
    // secluded retreat
    img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1400&q=80",
    icon: (
      <>
        <path d="M4 19h16M6 19V9l6-4 6 4v10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 19v-4h4v4" strokeLinecap="round" />
      </>
    ),
  },
  {
    name: "International Business Travel",
    body: "Flights, accommodation, transportation, and destination logistics managed through one partner.",
    href: "#plan",
    caption: "Global reach. Local support.",
    sub: "One partner across flights, stays, and ground logistics.",
    // international airport / city
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=80",
    icon: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M4 12h16M12 4c2.5 2.3 2.5 13.7 0 16M12 4c-2.5 2.3-2.5 13.7 0 16" />
      </>
    ),
  },
];

export default function International() {
  const scope = useReveal<HTMLElement>();
  const [active, setActive] = useState(0);

  return (
    <section ref={scope} id="international" className="section-pad bg-ivory">
      <div className="grid grid-cols-1 items-center gap-12 border-b border-line pb-16 lg:grid-cols-[1fr_0.9fr] lg:gap-24 md:pb-28 xl:gap-32">
        {/* Left — collage with floating card */}
        <div className="relative w-full" data-reveal-group>
          <div className="grid grid-cols-2 gap-1 overflow-hidden rounded-[22px] border border-line">
            {IMAGES.map((src) => (
              <img
                key={src}
                src={src}
                alt=""
                loading="lazy"
                className="aspect-square h-full w-full object-cover"
              />
            ))}
          </div>

          <div className="absolute left-1/2 top-1/2 w-[82%] max-w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-[22px] border border-forest-soft/40 bg-forest p-7 text-ivory shadow-2xl md:p-9">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.3"
              aria-hidden="true"
              className="mx-auto mb-5 h-8 w-8 text-gold"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="m12 5 2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5Z" strokeLinejoin="round" />
            </svg>
            <p className="text-center font-display text-xl leading-[1.3] md:text-2xl">
              Our world is curated, not catalogued.
            </p>
            <span className="mx-auto mt-5 block h-px w-full bg-gold/40" />
            <ul className="mt-1 flex flex-col">
              {WORTHS.map((w) => (
                <li
                  key={w.text}
                  className="flex items-center gap-4 border-t border-ivory/10 py-3.5 first:border-t-0"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    aria-hidden="true"
                    className="h-5 w-5 flex-none text-gold"
                  >
                    {w.icon}
                  </svg>
                  <span className="font-display text-[0.95rem] italic text-ivory/80 md:text-base">
                    {w.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right — copy */}
        <div className="flex flex-col items-start gap-5">
          <div data-reveal="">
            <p className="eyebrow">Global Reach</p>
            <span className="mt-3 block h-px w-10 bg-gold" />
          </div>
          <h2
            className="font-display text-4xl leading-[1.05] md:text-5xl lg:text-[4.5rem]"
            data-reveal="words"
          >
            Beyond
            <br />
            Kerala
          </h2>
          <div className="w-full max-w-[46ch]" data-reveal="">
            <span className="block h-px w-full bg-gold/50" />
            <p className="py-4 text-[0.74rem] uppercase tracking-[0.26em] text-gold">
              The world, selected with discernment.
            </p>
            <span className="block h-px w-full bg-gold/50" />
          </div>
          <p
            className="max-w-[50ch] text-[0.95rem] leading-[1.8] text-ink-soft md:text-base"
            data-reveal=""
          >
            Our perspective extends far beyond home. Sixtravel curates journeys
            across global cities, private islands, distinguished coastlines,
            mountain retreats, cultural capitals, emerging destinations, and
            international business hubs.
          </p>
          <a href="#plan" className="btn" data-reveal="">
            <span>Explore International</span>
            <Arrow className="arrow" />
          </a>
        </div>
      </div>

      <div className="pt-16 md:pt-28">
        <div className="-mx-5 overflow-hidden bg-forest px-5 py-12 text-ivory md:-mx-16 md:px-16 md:py-14 lg:-mx-24 lg:px-24 lg:py-16">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
            {/* Left — heading + list */}
            <div className="flex flex-col">
              <div className="mb-8 flex flex-col gap-3 md:mb-10">
                <p className="flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-eyebrow text-gold">
                  <span className="h-px w-7 bg-gold" />
                  Corporate Travel
                </p>
                <h2
                  className="font-display text-4xl leading-[1.05] md:text-6xl"
                  data-reveal="words"
                >
                  Corporate Journeys
                </h2>
              </div>

              <ul className="flex flex-col" onMouseLeave={() => setActive(0)}>
                {ENTERPRISE.map((c, i) => {
                  const on = i === active;
                  return (
                    <li key={c.name}>
                      <a
                        href={c.href}
                        onMouseEnter={() => setActive(i)}
                        onFocus={() => setActive(i)}
                        className="group flex items-center gap-5 border-t border-ivory/12 py-4 transition-colors duration-[400ms] ease-smooth last:border-b md:py-5"
                      >
                        <span
                          className={`grid h-11 w-11 flex-none place-items-center rounded-full border transition-colors duration-[400ms] ease-smooth ${
                            on
                              ? "border-gold bg-gold/10 text-gold"
                              : "border-ivory/20 text-ivory/45 group-hover:border-gold/60 group-hover:text-gold/80"
                          }`}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            aria-hidden="true"
                            className="h-5 w-5"
                          >
                            {c.icon}
                          </svg>
                        </span>

                        <div className="flex flex-1 flex-col">
                          <h3
                            className={`font-display text-lg leading-[1.2] transition-colors duration-[400ms] ease-smooth md:text-xl ${
                              on ? "text-ivory" : "text-ivory/70 group-hover:text-ivory/90"
                            }`}
                          >
                            {c.name}
                          </h3>
                          <p
                            className={`overflow-hidden text-[0.85rem] leading-[1.6] text-ivory/50 transition-[max-height,opacity,margin] duration-[500ms] ease-smooth ${
                              on ? "mt-1 max-h-16 opacity-100" : "max-h-0 opacity-0"
                            }`}
                          >
                            {c.body}
                          </p>
                        </div>

                        <Arrow
                          className={`h-4 w-4 flex-none transition-all duration-[400ms] ease-smooth ${
                            on
                              ? "translate-x-1 text-gold opacity-100"
                              : "text-ivory/30 group-hover:translate-x-0.5 group-hover:text-gold/70"
                          }`}
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Right — cinematic panel */}
            <div className="flex flex-col gap-5 lg:mt-20">
              <div className="flex items-center justify-end gap-3 text-[0.68rem] uppercase tracking-[0.28em] text-gold">
                <span>Take Business Beyond Borders.</span>
                <Compass className="h-5 w-5" />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[6px] border border-gold/25 bg-forest sm:aspect-[3/2] lg:aspect-[4/3]">
                {ENTERPRISE.map((c, i) => (
                  <img
                    key={c.name}
                    src={c.img}
                    alt=""
                    loading="lazy"
                    aria-hidden={i !== active}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[900ms] ease-smooth ${
                      i === active ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}

                {/* dark wash for the heading */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tl from-forest/95 via-forest/35 to-transparent" />

                {/* heading only, bottom-right, two lines */}
                <div className="absolute bottom-7 right-7 max-w-[60%] text-right md:bottom-10 md:right-10">
                  <p className="font-display text-2xl leading-[1.2] text-ivory md:text-[2rem]">
                    {ENTERPRISE[active].caption}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 flex items-center gap-5 border-t border-ivory/12 pt-6 md:mt-14">
            <span className="font-display text-2xl text-gold md:text-3xl">
              {String(active + 1).padStart(2, "0")}
            </span>
            <span className="text-[0.68rem] uppercase tracking-[0.28em] text-ivory/70 md:text-[0.72rem]">
              {ENTERPRISE[active].caption}
            </span>
            <span className="h-px flex-1 bg-gold/30" />
            <Compass className="h-5 w-5 flex-none text-gold" />
          </div>
        </div>
      </div>
    </section>
  );
}
