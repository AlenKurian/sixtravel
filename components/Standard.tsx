"use client";

import type { ReactNode } from "react";
import { useReveal } from "@/lib/useReveal";
import { useMobileReveal } from "@/lib/useMobileReveal";
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

const SELECTIVE_FEATURES: { title: string; body: string; icon: ReactNode }[] = [
  {
    title: "Fewer templates",
    body: "Every journey begins with a blank canvas.",
    icon: (
      <>
        <path
          d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
          strokeLinejoin="round"
        />
        <path d="M14 3v5h5" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Greater imagination",
    body: "More ideas. Deeper research. Better journeys.",
    icon: (
      <>
        <path
          d="M12 3a6 6 0 0 0-3 11.2c.6.4 1 1 1 1.8v1h4v-1c0-.8.4-1.4 1-1.8A6 6 0 0 0 12 3Z"
          strokeLinejoin="round"
        />
        <path d="M10 21h4" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Closer attention",
    body: "We notice what others might overlook.",
    icon: (
      <>
        <circle cx="11" cy="11" r="6" />
        <path d="m20 20-4.5-4.5" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "More memorable journeys",
    body: "Thoughtful details that stay long after you return.",
    icon: (
      <path
        d="m12 4 2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6Z"
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
    image: "/images/principles/curation.jpg",
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
    image: "/images/principles/personalization.jpg",
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
    image: "/images/principles/precision.jpg",
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
    image: "/images/principles/discovery.jpg",
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
    image: "/images/principles/service.jpg",
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
    image: "/images/principles/experience.jpg",
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
  const mob = useMobileReveal<HTMLDivElement>();

  return (
    <section ref={scope} id="standard" className="section-pad bg-ivory">
      <div className="mb-24 grid grid-cols-1 gap-10 md:mb-28 md:grid-cols-2 md:gap-8">
        {/* The Six Experience — dark card */}
        <div
          className="-mx-6 flex overflow-hidden border-y border-forest-soft/40 bg-forest text-ivory md:mx-0 md:rounded-[22px] md:border"
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

          <div className="flex flex-1 flex-col gap-5 p-6 py-10 sm:p-7 md:gap-[1.1rem] md:p-11">
            <div className="flex items-center gap-3">
              <Compass className="h-5 w-5 flex-none text-gold" />
              <p className="text-[0.62rem] font-medium uppercase tracking-eyebrow text-gold md:text-[0.72rem]">
                The Six Experience&trade;
              </p>
            </div>
            <span className="block h-px w-9 bg-gold/50" />

            <h3 className="max-w-[15ch] font-display text-[2rem] leading-[1.08] text-ivory sm:text-[2rem] md:max-w-[16ch] md:text-[2.6rem] md:leading-[1.1]">
              We don&rsquo;t simply arrange the journey. We compose it.
            </h3>
            <p className="max-w-[42ch] text-[0.92rem] leading-[1.8] text-ivory/70 md:leading-[1.75]">
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
          className="relative -mx-6 flex flex-col gap-5 overflow-hidden border-y border-line bg-white p-6 py-10 sm:p-7 md:mx-0 md:gap-[1.1rem] md:rounded-[22px] md:border md:p-11"
          data-reveal=""
        >
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

            <h3 className="max-w-[16ch] font-display text-[1.7rem] leading-[1.1] text-forest sm:text-[2rem] md:text-[2.6rem]">
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
                  className="flex items-center gap-3 border-t border-line py-5 last:border-b sm:gap-5"
                >
                  <span className="font-display text-lg text-gold md:text-xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="grid h-10 w-10 flex-none place-items-center rounded-full bg-forest text-gold sm:h-11 sm:w-11">
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
                  <span className="hidden h-8 w-px flex-none bg-line sm:block" />
                  <span className="flex-1 font-display text-lg text-forest sm:text-xl md:text-2xl">
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
        className="relative mb-20 overflow-hidden bg-ivory py-10 md:mb-24 md:rounded-[24px] md:border md:border-line md:px-12 md:py-16 sm:rounded-[32px] sm:px-6 sm:py-12"
        data-reveal=""
      >
        <div className="relative z-[2] flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-8">
          <div className="flex flex-col gap-4 md:gap-3">
            <p className="eyebrow">Core Principles</p>
            <span className="block h-px w-12 bg-gold/60" />
            <h2 className="flex items-end gap-3 font-display text-[2.4rem] leading-[1.04] text-forest sm:text-4xl md:text-[3.4rem] md:leading-[1.05]">
              The Six Standard&trade;
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                aria-hidden="true"
                className="mb-2 h-6 w-6 flex-none text-gold sm:h-7 sm:w-7"
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

          <p className="max-w-[24ch] font-display text-[1.15rem] italic leading-[1.6] text-ink-soft md:max-w-[22ch] md:pt-2 md:text-[1.05rem] md:leading-[1.7] md:text-right">
            Our promise of excellence, in every journey we curate.
          </p>
        </div>

        {/* Desktop (md+): the principle card grid. */}
        <div
          className="relative z-[2] mt-12 hidden gap-4 md:grid md:grid-cols-3 xl:grid-cols-6"
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

        {/* Mobile: editorial principle sequence — full-bleed plates, hairline-separated. */}
        <div ref={mob} className="relative z-[2] mt-12 flex flex-col md:hidden">
          {PRINCIPLES.map((p, i) => (
            <article key={p.title} className="mt-14 first:mt-0">
              <div
                data-m-reveal
                className="m-img-reveal relative aspect-[16/10] w-full overflow-hidden"
              >
                <img src={p.image} alt="" className="h-full w-full object-cover" />
                <span className="absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-baseline gap-3 px-5 pb-5 text-ivory">
                  <span className="font-display text-[0.85rem] text-gold-light/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="font-display text-[1.9rem] leading-none">{p.title}</h4>
                </div>
              </div>
              <p
                data-m-reveal
                data-m-reveal-delay="110"
                className="m-reveal mt-5 max-w-[38ch] text-[0.92rem] leading-[1.8] text-ink-soft"
              >
                {p.body}
              </p>
            </article>
          ))}
        </div>

        <div className="relative z-[2] -mx-6 mt-16 flex flex-col items-start gap-4 bg-forest px-6 py-8 text-left text-ivory md:mx-0 md:mt-10 md:flex-row md:items-center md:gap-6 md:rounded-[16px] md:px-6 md:py-5 sm:flex-row sm:gap-6 sm:text-left">
          <Compass className="h-6 w-6 flex-none text-gold" />
          <span className="hidden h-6 w-px flex-none bg-ivory/20 sm:block" />
          <p className="text-[0.66rem] uppercase tracking-[0.28em] text-gold md:text-[0.72rem] md:tracking-[0.24em]">
            Six principles. One unwavering promise.
          </p>
          <span className="hidden h-px flex-1 bg-ivory/15 sm:block" />
          <p className="text-[0.66rem] uppercase tracking-[0.3em] text-ivory/60 md:text-[0.72rem] md:tracking-[0.28em]">
            Sixtravel
          </p>
        </div>
      </div>

      <div
        className="-mx-6 overflow-hidden border-y border-gold bg-ivory-deep md:mx-0 md:rounded-[24px] md:border"
        data-reveal=""
      >
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,40%)_1fr]">
          {/* Left — image with badge */}
          <div className="relative aspect-[16/11] min-h-[320px] md:aspect-auto lg:min-h-full">
            <img
              src="/images/six.jpg"
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-ivory-deep/40 to-forest/10 md:bg-gradient-to-r md:from-forest/10 md:to-ivory-deep/30" />
          </div>

          {/* Right — content */}
          <div className="flex flex-col gap-8 px-6 py-12 sm:p-9 md:gap-6 md:p-14 lg:p-16">
            <div className="flex flex-col gap-5 md:items-center">
              <p className="eyebrow md:text-center">Selective by Design</p>
              <h3 className="font-display text-[2.4rem] leading-[1.1] text-forest md:text-center md:text-[3rem] md:leading-[1.15]">
                Exceptional travel demands{" "}
                <span className="italic text-gold">attention.</span>
              </h3>
              <span className="block h-px w-16 bg-gold/50 md:mx-auto" />
            </div>

            <p className="max-w-[46ch] leading-[1.85] text-ink-soft md:mx-auto md:max-w-[60ch] md:text-center md:leading-[1.8]">
              Sixtravel is not built around volume. We believe truly considered
              travel requires time — to understand the traveler, study the
              destination, refine the details, and create something genuinely
              distinctive. So we remain selective.
            </p>

            <ul className="mt-2 flex flex-col md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-8 lg:grid-cols-4">
              {SELECTIVE_FEATURES.map((f) => (
                <li
                  key={f.title}
                  className="flex items-start gap-4 border-t border-line py-5 last:border-b md:flex-col md:items-center md:gap-3 md:border-0 md:py-0 md:text-center"
                >
                  <span className="grid h-11 w-11 flex-none place-items-center rounded-full bg-gold/12 text-gold md:h-14 md:w-14">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      aria-hidden="true"
                      className="h-5 w-5 md:h-6 md:w-6"
                    >
                      {f.icon}
                    </svg>
                  </span>
                  <div className="flex flex-1 flex-col gap-2 md:items-center">
                    <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-forest md:tracking-[0.16em]">
                      {f.title}
                    </span>
                    <span className="hidden h-px w-6 bg-gold/50 md:block" />
                    <p className="text-[0.85rem] leading-[1.7] text-ink-soft md:text-[0.8rem] md:leading-[1.6]">
                      {f.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
