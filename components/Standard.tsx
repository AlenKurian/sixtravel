"use client";

import type { ReactNode } from "react";
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

const EXPERIENCE_DETAILS: { label: string; icon: ReactNode }[] = [
  {
    label: "The arrival",
    icon: (
      <path
        d="M10 14 3 12l1-2 3 .6L11 6 5 3l1.5-1L15 5l4-1a2 2 0 0 1 2 2c0 1-.7 1.6-2 2l-6 2-2 7-2 1 1-6Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "The property",
    icon: (
      <>
        <path d="M5 21V6l7-3 7 3v15" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M3 21h18M9 9h.01M15 9h.01M9 13h.01M15 13h.01M9 21v-4h6v4"
          strokeLinecap="round"
        />
      </>
    ),
  },
  {
    label: "The room",
    icon: (
      <>
        <path
          d="M3 17v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4M3 17v3M21 17v3M3 13V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  {
    label: "The view",
    icon: (
      <>
        <path d="M3 20h18L14 9l-3.5 5-2-3L3 20Z" strokeLinejoin="round" />
        <path
          d="m18 4 .8 1.7L20.5 6.5 18.8 7.3 18 9l-.8-1.7L15.5 6.5l1.7-.8L18 4Z"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  {
    label: "The vehicle",
    icon: (
      <>
        <path
          d="M4 15h16M6 15l1.5-5.5A2 2 0 0 1 9.4 8h5.2a2 2 0 0 1 1.9 1.5L18 15M4 15v3M20 15v3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  {
    label: "The table",
    icon: (
      <>
        <path d="M4 13a8 8 0 0 1 16 0" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 13h18M12 5V4" strokeLinecap="round" />
      </>
    ),
  },
  {
    label: "The experience",
    icon: (
      <>
        <path
          d="M4 8a2 2 0 0 1 2-2h1.5l1-1.5h5L16 6H18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
  },
  {
    label: "The moment",
    icon: (
      <>
        <path
          d="M12 21c4-4 6-7 6-10a6 6 0 1 0-12 0c0 3 2 6 6 10Z"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="11" r="2.2" />
      </>
    ),
  },
];

const CURATION_STEPS: { label: string; icon: ReactNode }[] = [
  {
    label: "Find the exceptional.",
    icon: (
      <path
        d="m12 4 2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6Z"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "Remove the unnecessary.",
    icon: <path d="M6 9h12M6 12h12M6 15h6" strokeLinecap="round" />,
  },
  {
    label: "Create the unforgettable.",
    icon: (
      <path
        d="M12 3c.7 4.3 1.7 5.3 6 6-4.3.7-5.3 1.7-6 6-.7-4.3-1.7-5.3-6-6 4.3-.7 5.3-1.7 6-6Z"
        strokeLinejoin="round"
      />
    ),
  },
];

const PRINCIPLES: {
  title: string;
  body: string;
  image: string;
  icon: ReactNode;
}[] = [
  {
    title: "Curation",
    body: "Chosen with taste, relevance, and intention.",
    image:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80",
    icon: (
      <path
        d="M12 3 4 6v5c0 5 3.4 8 8 10 4.6-2 8-5 8-10V6l-8-3Zm-2 9 1.6 1.6L15 10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Personalization",
    body: "Built around the traveler — not a predetermined package.",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80",
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <circle cx="16" cy="10" r="2.4" />
        <path
          d="M4 19c0-2.8 2.2-5 5-5s5 2.2 5 5M14 18c0-1.9 1.4-3.4 3.2-3.7"
          strokeLinecap="round"
        />
      </>
    ),
  },
  {
    title: "Precision",
    body: "Every transition, reservation, and detail thoughtfully coordinated.",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=600&q=80",
    icon: (
      <>
        <rect x="5" y="4" width="14" height="17" rx="2" />
        <path d="M9 3v3M15 3v3M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Discovery",
    body: "Beyond landmarks and into the character of a destination.",
    image:
      "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=600&q=80",
    icon: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="m15 9-3.5 1.5L10 14l3.5-1.5L15 9Z" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Service",
    body: "Discreet, responsive, and attentive from departure to return.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80",
    icon: (
      <>
        <path d="M5 12a7 7 0 0 1 14 0" strokeLinecap="round" />
        <rect x="3.5" y="12" width="3.5" height="6" rx="1.5" />
        <rect x="17" y="12" width="3.5" height="6" rx="1.5" />
        <path d="M19 18c0 2-1.6 3.2-4 3.2" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Experience",
    body: "Because the ultimate measure of a journey is what remains after it ends.",
    image:
      "https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&w=600&q=80",
    icon: (
      <>
        <path
          d="M12 4.5c-2 4-2 7 0 15 2-8 2-11 0-15Z"
          strokeLinejoin="round"
        />
        <path d="M12 8c-3 1.5-5 3.5-6 7M12 8c3 1.5 5 3.5 6 7" strokeLinecap="round" />
      </>
    ),
  },
];

export default function Standard() {
  const scope = useReveal<HTMLElement>();

  return (
    <section ref={scope} id="standard" className="section-pad bg-ivory">
      <div className="mb-16 grid grid-cols-1 gap-5 md:mb-28 md:grid-cols-2 md:gap-8">
        {/* The Six Experience — dark card */}
        <div
          className="flex overflow-hidden rounded-[22px] border border-forest-soft/40 bg-forest text-ivory"
          data-reveal=""
        >
          <div
            className="relative hidden w-[34%] flex-none bg-cover bg-center lg:block"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1548783307-f63adc3f200b?auto=format&fit=crop&w=700&q=80')",
            }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent to-forest" />
          </div>

          <div className="flex flex-1 flex-col gap-[1.1rem] p-7 md:p-11">
            <div className="flex items-center gap-3">
              <Compass className="h-5 w-5 flex-none text-gold" />
              <p className="text-[0.72rem] font-medium uppercase tracking-eyebrow text-gold">
                The Six Experience&trade;
              </p>
            </div>
            <span className="block h-px w-9 bg-gold/50" />

            <h3 className="max-w-[16ch] font-display text-[2rem] leading-[1.1] text-ivory md:text-[2.6rem]">
              We don&rsquo;t simply arrange the journey. We compose it.
            </h3>
            <p className="max-w-[42ch] text-[0.92rem] leading-[1.75] text-ivory/70">
              The finest travel experiences are rarely defined by a single hotel
              or destination. They are created through the relationship between
              every detail:
            </p>

            <ul className="mt-1 grid grid-cols-2 gap-x-3 sm:grid-cols-4">
              {EXPERIENCE_DETAILS.map((d) => (
                <li
                  key={d.label}
                  className="flex flex-col items-center gap-2.5 border-t border-ivory/12 py-4 text-center"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    aria-hidden="true"
                    className="h-6 w-6 text-gold"
                  >
                    {d.icon}
                  </svg>
                  <span className="text-[0.7rem] uppercase tracking-[0.16em] text-ivory/55">
                    {d.label}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-2 max-w-[46ch] border-t border-ivory/12 pt-5 font-display text-[1.05rem] italic leading-[1.75] text-gold">
              Sixtravel considers the entire journey as one continuous
              experience. Every detail has a purpose. Every experience has a
              reason.
            </p>
          </div>
        </div>

        {/* The Art of Curation — light card */}
        <div
          className="relative flex flex-col gap-[1.1rem] overflow-hidden rounded-[22px] border border-line bg-white p-7 md:p-11"
          data-reveal=""
        >
          <Compass className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 text-gold/[0.07]" />
          <div
            className="pointer-events-none absolute bottom-0 right-0 h-48 w-3/5 bg-cover bg-bottom opacity-[0.12]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80')",
              maskImage:
                "linear-gradient(to top left, black, transparent 70%)",
              WebkitMaskImage:
                "linear-gradient(to top left, black, transparent 70%)",
            }}
          />

          <div className="relative z-[2] flex flex-col gap-[1.1rem]">
            <p className="text-[0.72rem] font-medium uppercase tracking-eyebrow text-gold">
              The Art of Curation
            </p>
            <span className="block h-px w-9 bg-gold/50" />

            <h3 className="max-w-[16ch] font-display text-[2rem] leading-[1.1] text-forest md:text-[2.6rem]">
              We don&rsquo;t simply choose. We edit.
            </h3>
            <p className="max-w-[44ch] text-[0.92rem] leading-[1.75] text-ink-soft">
              The world offers endless possibilities.
              <br />
              Our value lies in knowing which ones deserve your time.
            </p>

            <ul className="mt-4 flex flex-col">
              {CURATION_STEPS.map((s, i) => (
                <li
                  key={s.label}
                  className="flex items-center gap-5 border-t border-line py-5 last:border-b"
                >
                  <span className="font-display text-lg text-gold md:text-xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="grid h-11 w-11 flex-none place-items-center rounded-full bg-forest text-gold">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      {s.icon}
                    </svg>
                  </span>
                  <span className="h-8 w-px flex-none bg-line" />
                  <span className="flex-1 font-display text-xl text-forest md:text-2xl">
                    {s.label}
                  </span>
                  <Arrow className="h-4 w-4 flex-none text-gold" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div
        className="relative mb-14 overflow-hidden rounded-[32px] border border-line bg-ivory px-6 py-12 md:mb-24 md:px-12 md:py-16"
        data-reveal=""
      >
        <Compass className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 text-gold/[0.06]" />

        <div className="relative z-[2] flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-3">
            <p className="eyebrow">Core Principles</p>
            <span className="block h-px w-12 bg-gold/60" />
            <h2 className="flex items-end gap-3 font-display text-4xl leading-[1.05] text-forest md:text-[3.4rem]">
              The Six Standard&trade;
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                aria-hidden="true"
                className="mb-2 h-7 w-7 flex-none text-gold"
              >
                <path
                  d="M20 5c-8 0-13 4-13 11 7 0 11-4 13-11ZM7 16c1-4 4-7 8-8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </h2>
            <p className="font-body text-[0.72rem] uppercase tracking-[0.28em] text-gold">
              A higher expectation of travel
            </p>
          </div>

          <p className="max-w-[22ch] font-display text-[1.05rem] italic leading-[1.7] text-ink-soft md:pt-2 md:text-right">
            Our promise of excellence, in every journey we curate.
          </p>
        </div>

        <div
          className="relative z-[2] mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
          data-reveal-group
        >
          {PRINCIPLES.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-[18px] border border-forest-soft/30 bg-forest text-ivory"
            >
              <div className="relative h-40 flex-none overflow-hidden">
                <img
                  src={p.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-smooth group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-b from-forest/20 via-forest/40 to-forest" />
              </div>

              <div className="relative flex flex-1 flex-col items-center px-5 pb-7 text-center">
                <span className="-mt-7 grid h-14 w-14 flex-none place-items-center rounded-full border border-gold/60 bg-forest text-gold">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    aria-hidden="true"
                    className="h-6 w-6"
                  >
                    {p.icon}
                  </svg>
                </span>

                <h4 className="mt-4 font-display text-xl text-ivory">
                  {p.title}
                </h4>
                <span className="mt-3 block h-px w-8 bg-gold/60" />
                <p className="mt-4 text-[0.82rem] leading-[1.6] text-ivory/60">
                  {p.body}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="relative z-[2] mt-10 flex flex-col items-center gap-4 rounded-[16px] bg-forest px-6 py-5 text-ivory sm:flex-row sm:gap-6">
          <Compass className="h-6 w-6 flex-none text-gold" />
          <span className="h-6 w-px flex-none bg-ivory/20" />
          <p className="text-[0.72rem] uppercase tracking-[0.24em] text-gold">
            Six principles. One unwavering promise.
          </p>
          <span className="hidden h-px flex-1 bg-ivory/15 sm:block" />
          <p className="text-[0.72rem] uppercase tracking-[0.28em] text-ivory/60">
            Sixtravel
          </p>
        </div>
      </div>

      <div
        className="flex flex-col items-center gap-5 rounded-[24px] border border-gold bg-ivory-deep p-10 text-center md:p-16 lg:p-20"
        data-reveal=""
      >
        <p className="eyebrow">Selective by Design</p>
        <h3 className="font-display text-2xl text-forest md:text-4xl">
          Exceptional travel demands attention.
        </h3>
        <p className="max-w-[60ch] leading-[1.8] text-ink-soft">
          Sixtravel is not built around volume. We believe truly considered
          travel requires time — to understand the traveler, study the
          destination, refine the details, and create something genuinely
          distinctive. So we remain selective.
        </p>
        <div className="mt-2 flex flex-wrap justify-center gap-[0.6rem]">
          {[
            "Fewer templates",
            "Greater imagination",
            "Closer attention",
            "More memorable journeys",
          ].map((p) => (
            <span
              key={p}
              className="rounded-full border border-gold px-4 py-[0.55rem] text-[0.64rem] uppercase tracking-[0.2em] text-forest"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
