"use client";

import { useReveal } from "@/lib/useReveal";
import { Arrow } from "./Icons";

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
  // mountain lake
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
  // temple at dusk
  "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1000&q=80",
];

const ENTERPRISE = [
  {
    name: "Executive Travel",
    body: "Seamless journeys designed around demanding schedules.",
    href: "#plan",
    caption: "Seamless. Smart. Successful.",
    sub: "Every journey, managed with precision and care.",
    img: "/images/journeys/executive.jpg",
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
    img: "/images/journeys/corporate_d.jpg",
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
    img: "/images/journeys/business.jpg",
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
    img: "/images/journeys/incentive.jpg",
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
    img: "/images/journeys/leadership.jpg",
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
    img: "/images/journeys/international.jpg",
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

  return (
    <section ref={scope} id="international" className="section-pad bg-ivory">
      {/* Mobile: expansive, cinematic — panoramic plate + editorial list. */}
      <div className="-mx-6 mb-14 md:hidden">
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <img
            src={IMAGES[0]}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ivory via-ivory/10 to-forest/25" />
          <div className="absolute inset-x-0 bottom-0 px-6 pb-8">
            <p className="text-[0.6rem] uppercase tracking-[0.34em] text-gold">
              Global Reach
            </p>
            <h2 className="mt-4 font-display text-[3.6rem] leading-[0.98] text-forest">
              Beyond
              <br />
              Kerala
            </h2>
          </div>
        </div>

        <div className="px-6 pt-9">
          <div className="m-rule" />
          <p className="py-4 text-[0.62rem] uppercase tracking-[0.3em] text-gold">
            The world, selected with discernment.
          </p>
          <div className="m-rule" />
          <p className="mt-8 max-w-[42ch] text-[0.95rem] leading-[1.85] text-ink-soft">
            Our perspective extends far beyond home. Sixtravel curates journeys
            across global cities, private islands, distinguished coastlines,
            mountain retreats, cultural capitals, emerging destinations, and
            international business hubs.
          </p>

          <p className="mt-12 font-display text-[1.6rem] italic leading-[1.3] text-forest">
            Our world is curated, not catalogued.
          </p>
          <ul className="mt-6 flex flex-col">
            {WORTHS.map((w) => (
              <li
                key={w.text}
                className="flex items-center gap-4 border-t border-line py-4 last:border-b"
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
                <span className="font-display text-[1.05rem] italic text-ink-soft">
                  {w.text}
                </span>
              </li>
            ))}
          </ul>

          <a
            href="#plan"
            className="group mt-10 inline-flex items-center gap-3 border-b border-forest/40 pb-2 font-body text-[0.66rem] uppercase tracking-[0.3em] text-forest transition-colors duration-500 ease-smooth active:border-gold active:text-gold"
          >
            Explore International
            <Arrow className="h-[0.85rem] w-[0.85rem] transition-transform duration-500 ease-smooth group-active:translate-x-0.5" />
          </a>
        </div>
      </div>

      <div className="hidden border-b border-line pb-16 md:block md:pb-24">
        {/* Hero row — two tall plates flanking the centred headline */}
        <div className="grid grid-cols-[minmax(0,0.82fr)_minmax(0,1.36fr)_minmax(0,0.82fr)] items-stretch gap-0">
          {/* Left plate */}
          <figure className="relative overflow-hidden" data-reveal="">
            <img
              src={IMAGES[0]}
              alt=""
              loading="lazy"
              className="h-full min-h-[34rem] w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-2/5 bg-gradient-to-b from-forest/60 to-transparent" />
            <figcaption className="absolute inset-x-0 top-0 p-6 lg:p-8">
              <p className="text-[0.62rem] uppercase tracking-[0.3em] text-ivory/85">
                {WORTHS[0].text.replace(/\.$/, "")}
              </p>
              <p className="mt-3 max-w-[14ch] font-display text-[1.35rem] leading-[1.2] text-ivory">
                {WORTHS[1].text}
              </p>
            </figcaption>
          </figure>

          {/* Centre — headline */}
          <div className="relative flex flex-col items-center px-6 py-10 text-center lg:px-10">
            <p className="eyebrow" data-reveal="">
              Global Reach
            </p>
            <span className="mt-4 block h-px w-14 bg-gold" data-reveal="" />

            <h2
              className="mt-8 font-display text-[3.6rem] leading-[0.92] text-forest lg:text-[5.5rem]"
              data-reveal=""
            >
              Beyond
              <br />
              Kerala
            </h2>

            <p
              className="mt-8 text-[0.72rem] uppercase tracking-[0.26em] text-gold"
              data-reveal=""
            >
              The world, selected with discernment.
            </p>
            <p
              className="mt-6 max-w-[46ch] text-[0.95rem] leading-[1.8] text-ink-soft md:text-base"
              data-reveal=""
            >
              Our perspective extends far beyond home. Sixtravel curates journeys
              across global cities, private islands, distinguished coastlines,
              mountain retreats, cultural capitals, emerging destinations, and
              international business hubs.
            </p>
            <a href="#plan" className="btn mt-8" data-reveal="">
              <span>Explore International</span>
              <Arrow className="arrow" />
            </a>
          </div>

          {/* Right plate */}
          <figure className="relative overflow-hidden" data-reveal="">
            <img
              src={IMAGES[2]}
              alt=""
              loading="lazy"
              className="h-full min-h-[34rem] w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-2/5 bg-gradient-to-b from-forest/60 to-transparent" />
            <figcaption className="absolute inset-x-0 top-0 p-6 text-right lg:p-8">
              <p className="text-[0.62rem] uppercase tracking-[0.3em] text-ivory/85">
                {WORTHS[4].text.replace(/\.$/, "")}
              </p>
              <p className="mt-3 ml-auto max-w-[14ch] font-display text-[1.35rem] leading-[1.2] text-ivory">
                {WORTHS[3].text}
              </p>
            </figcaption>
          </figure>
        </div>

        {/* Thumbnail row */}
        <div
          className="mt-8 grid grid-cols-4 gap-6 border-t border-line pt-12 lg:gap-8"
          data-reveal-group
        >
          {WORTHS.slice(0, 4).map((w, i) => (
            <div
              key={w.text}
              className="mx-auto flex w-full max-w-[13rem] flex-col"
              data-reveal=""
            >
              <img
                src={IMAGES[i]}
                alt=""
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="mt-4">
                <div className="flex items-center gap-2 text-gold">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    aria-hidden="true"
                    className="h-4 w-4 flex-none"
                  >
                    {w.icon}
                  </svg>
                  <span className="text-[0.62rem] uppercase tracking-[0.26em]">
                    {w.text.replace(/^A /, "").replace(/ worth.*$/, "")}
                  </span>
                </div>
                <p className="mt-3 font-display text-[1.05rem] italic leading-[1.3] text-forest lg:text-[1.2rem]">
                  {w.text}
                </p>
                <span className="mt-3 inline-flex items-center gap-2 text-[0.62rem] uppercase tracking-[0.26em] text-ink-soft">
                  Explore
                  <Arrow className="h-[0.7rem] w-[0.7rem]" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer rule */}
        <div className="mt-10 flex items-center gap-6 border-t border-line pt-6">
          <p className="text-[0.62rem] uppercase tracking-[0.3em] text-ink-soft">
            {WORTHS[0].text.replace(/\.$/, "")}
          </p>
          <span className="h-px flex-1 bg-line" />
          <p className="text-[0.62rem] uppercase tracking-[0.3em] text-gold">
            {WORTHS[4].text.replace(/\.$/, "")}
          </p>
        </div>
      </div>

      <div className="pt-20 md:pt-28">
        {/* Centered header */}
        <div className="mx-auto flex max-w-[52rem] flex-col items-center text-center">
          <p className="eyebrow" data-reveal="">
            ENTERPRISE SOLUTIONS
          </p>
          <span className="mt-4 block h-px w-14 bg-gold" data-reveal="" />
          <h2
            className="mt-8 font-display text-[2.9rem] leading-[1.04] text-forest md:text-6xl md:leading-[1.05]"
            data-reveal="words"
          >
            Corporate Journeys
          </h2>
          <p
            className="mt-6 max-w-[46ch] text-[0.95rem] leading-[1.8] text-ink-soft md:text-base"
            data-reveal=""
          >
            TAKE BUSINESS BEYOND BORDERS.
          </p>
        </div>

        {/* Card grid */}
        <div
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-10 md:gap-6 lg:grid-cols-3"
          data-reveal-group
        >
          {ENTERPRISE.map((c, i) => (
            <a
              key={c.name}
              href={c.href}
              data-reveal=""
              className="group relative flex aspect-[3/2] flex-col justify-between overflow-hidden rounded-[6px] bg-forest p-6 text-ivory md:p-7"
            >
              <img
                src={c.img}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-smooth group-hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-forest/95 via-forest/70 to-forest/30" />

              {/* number */}
              <div className="relative">
                <span className="font-display text-lg text-ivory/85 md:text-xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-2 block h-px w-7 bg-gold/70" />
              </div>

              {/* name + body + arrow */}
              <div className="relative mt-auto flex items-end justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl leading-[1.15] text-ivory md:text-[1.75rem]">
                    {c.name}
                  </h3>
                  <p className="mt-3 line-clamp-2 max-w-[44ch] text-[0.85rem] leading-[1.6] text-ivory/70">
                    {c.body}
                  </p>
                </div>

                <span className="grid h-11 w-11 flex-none place-items-center rounded-full border border-gold/60 text-gold transition-colors duration-[400ms] ease-smooth group-hover:border-gold group-hover:bg-gold/10">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-[400ms] ease-smooth group-hover:translate-x-0.5"
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
