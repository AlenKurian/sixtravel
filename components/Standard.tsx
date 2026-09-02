"use client";

import type { ReactNode } from "react";
import { useReveal } from "@/lib/useReveal";

const PRINCIPLES: {
  title: string;
  body: string;
  icon: ReactNode;
}[] = [
  {
    title: "Curation",
    body: "Chosen with taste, relevance, and intention.",
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
        <div
          className="flex flex-col gap-[1.1rem] rounded-[22px] border border-line bg-white p-7 md:p-12"
          data-reveal=""
        >
          <p className="eyebrow">The Six Experience™</p>
          <h3 className="max-w-[20ch] font-display text-2xl text-forest md:text-3xl">
            We don&rsquo;t simply arrange the journey. We compose it.
          </h3>
          <p className="text-[0.95rem] leading-[1.75] text-ink-soft">
            The finest travel experiences are rarely defined by a single hotel or
            destination. They are created through the relationship between every
            detail:
          </p>
          <p className="font-display text-[1.05rem] leading-[1.75] text-forest">
            The arrival · The property · The room · The view · The vehicle · The
            table · The experience · The moment between destinations.
          </p>
          <p className="font-display text-[1.05rem] italic leading-[1.75] text-gold">
            Sixtravel considers the entire journey as one continuous experience.
            Every detail has a purpose. Every experience has a reason.
          </p>
        </div>

        <div
          className="flex flex-col gap-[1.1rem] rounded-[22px] border border-line bg-white p-7 md:p-12"
          data-reveal=""
        >
          <p className="eyebrow">The Art of Curation</p>
          <h3 className="max-w-[20ch] font-display text-2xl text-forest md:text-3xl">
            We don&rsquo;t simply choose. We edit.
          </h3>
          <p className="text-[0.95rem] leading-[1.75] text-ink-soft">
            The world offers endless possibilities. Our value lies in knowing
            which ones deserve your time.
          </p>
          <ul className="mt-2 flex flex-col gap-3">
            {["Find the exceptional.", "Remove the unnecessary.", "Create the unforgettable."].map(
              (l) => (
                <li
                  key={l}
                  className="relative pl-6 font-display text-xl text-forest before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-[0.6rem] before:bg-gold before:content-[''] md:text-2xl"
                >
                  {l}
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      <div
        className="relative mb-14 overflow-hidden rounded-[32px] border border-line bg-ivory-deep px-7 py-12 md:mb-24 md:px-14 md:py-16"
        data-reveal=""
      >
        <div className="relative z-[2]">
          <div className="flex flex-col gap-3">
            <p className="eyebrow">Core Principles</p>
            <h2 className="flex items-center gap-3 font-display text-3xl text-forest md:text-4xl">
              The Six Standard&trade;
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
                className="h-6 w-6 flex-none text-gold"
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

          <div
            className="mt-12 grid grid-cols-2 gap-x-6 gap-y-11 sm:grid-cols-3 md:grid-cols-6 md:gap-x-5 lg:gap-x-8"
            data-reveal-group
          >
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="flex flex-col items-center text-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  aria-hidden="true"
                  className="h-8 w-8 text-forest"
                >
                  {p.icon}
                </svg>
                <h4 className="mt-4 font-display text-base font-medium leading-snug text-forest lg:text-lg">
                  {p.title}
                </h4>
                <p className="mt-2 max-w-[18ch] text-[0.8rem] leading-[1.55] text-ink-soft lg:text-[0.85rem]">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
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
