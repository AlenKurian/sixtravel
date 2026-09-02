"use client";

import { useState } from "react";
import { useReveal } from "@/lib/useReveal";
import { Arrow } from "./Icons";

const WORTHS = [
  "A city worth understanding.",
  "A coastline worth disappearing into.",
  "A culture worth encountering.",
  "A hotel worth travelling for.",
  "A landscape worth waking up to.",
];

const ENTERPRISE = [
  {
    name: "Executive Travel",
    body: "Seamless journeys designed around demanding schedules.",
    href: "#plan",
    caption: "Seamless. Smart. Successful.",
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
      <div className="grid grid-cols-1 items-center gap-8 border-b border-line pb-16 md:grid-cols-2 md:gap-16 md:pb-28">
        <div className="flex flex-col items-start gap-5">
          <p className="eyebrow" data-reveal="">
            Global Reach
          </p>
          <h2
            className="font-display text-4xl md:text-5xl lg:text-[4.5rem]"
            data-reveal="words"
          >
            Beyond Kerala
          </h2>
          <p
            className="text-[0.74rem] uppercase tracking-[0.26em] text-gold"
            data-reveal=""
          >
            The world, selected with discernment.
          </p>
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

        <div
          className="flex flex-col rounded-[22px] border border-line bg-ivory-deep p-6 md:p-10"
          data-reveal-group
        >
          <p className="mb-4 font-display text-xl text-forest md:text-2xl">
            Our world is curated, not catalogued.
          </p>
          {WORTHS.map((w) => (
            <div
              key={w}
              className="border-t border-line py-4 font-display text-base italic text-ink-soft transition-[color,padding] duration-[400ms] ease-smooth hover:pl-3 hover:text-gold md:text-xl"
            >
              <span>{w}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-16 md:pt-28">
        <div className="-mx-5 overflow-hidden bg-forest px-5 py-12 text-ivory md:-mx-16 md:px-16 md:py-16 lg:-mx-24 lg:px-24">
          {/* Header row */}
          <div className="mb-10 flex flex-col gap-3 md:mb-14">
            <p className="text-[0.72rem] font-medium uppercase tracking-eyebrow text-gold">
              Corporate Travel
            </p>
            <h2
              className="font-display text-4xl leading-[1.05] md:text-6xl"
              data-reveal="words"
            >
              Corporate Journeys
            </h2>
          </div>

          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
            {/* Left — list */}
            <ul
              className="flex flex-col"
              onMouseLeave={() => setActive(0)}
            >
              {ENTERPRISE.map((c, i) => {
                const on = i === active;
                return (
                  <li key={c.name}>
                    <a
                      href={c.href}
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      className="group flex items-center gap-5 border-t border-ivory/12 py-5 transition-colors duration-[400ms] ease-smooth last:border-b md:py-6"
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
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Right — framed cinematic image */}
            <div className="flex flex-col gap-4 lg:-mt-[2.75rem]">
              <p className="text-[0.7rem] uppercase tracking-[0.28em] text-gold md:text-right">
                Take Business Beyond Borders.
              </p>
              <div className="rounded-[24px] border border-ivory/12 bg-ivory/[0.03] p-3 md:p-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[16px] bg-forest">
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
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest/70 via-forest/10 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-end gap-4">
                    <span className="font-display text-5xl leading-none text-ivory md:text-6xl">
                      {String(active + 1).padStart(2, "0")}
                    </span>
                    <span className="mb-1.5 text-[0.7rem] uppercase tracking-[0.22em] text-ivory/75">
                      {ENTERPRISE[active].caption}
                    </span>
                  </div>
                </div>
              </div>

              {/* progress dashes */}
              <div className="flex items-center justify-end gap-2 pr-2">
                {ENTERPRISE.map((c, i) => (
                  <span
                    key={c.name}
                    className={`h-px transition-all duration-500 ease-smooth ${
                      i === active ? "w-8 bg-gold" : "w-4 bg-ivory/25"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
