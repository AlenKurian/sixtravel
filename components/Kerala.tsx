"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Arrow } from "./Icons";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const FACETS = [
  {
    t: "Backwaters",
    s: "Stillness, in motion.",
    b: "Private waterways, elegant houseboats, secluded waterfront retreats, and mornings that unfold at the pace of the water.",
    img: "/images/backwaters.jpg",
  },
  {
    t: "Highlands",
    s: "Where the world slows down.",
    b: "Tea estates, spice plantations, mountain forests, mist-covered landscapes, and extraordinary highland retreats.",
    img: "/images/highlands.jpg",
  },
  {
    t: "Coast",
    s: "The Arabian Sea, reimagined.",
    b: "Tropical shores, refined coastal properties, private escapes, and endless horizons.",
    img: "/images/coast.jpg",
  },
  {
    t: "Heritage",
    s: "Where the past remains present.",
    b: "Architecture, craftsmanship, traditions, art, and stories carried through generations.",
    img: "/images/heritage.jpg",
  },
  {
    t: "Culinary",
    s: "The flavour of a place.",
    b: "Malabar traditions, coastal cuisine, local ingredients, heritage recipes, and exceptional dining experiences.",
    img: "/images/culinary.jpg",
  },
  {
    t: "Wellness",
    s: "The luxury of time.",
    b: "Ayurveda, nature, stillness, restorative hospitality, and the freedom to disconnect from the noise.",
    img: "/images/wellness.jpg",
  },
];

const STATS = [
  { n: "600+", l: "Kilometres of coastline" },
  { n: "44", l: "Rivers" },
  { n: "Countless", l: "Unforgettable stories" },
];

export default function Kerala() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".js-kerala-copy > *", {
        y: 32,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".js-kerala-hero", start: "top 78%" },
      });

      gsap.from(".js-kerala-card", {
        y: 44,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: track.current, start: "top 82%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const scrollBy = (dir: number) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".js-kerala-card");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  return (
    <section ref={root} id="kerala" className="overflow-hidden bg-ivory">
      {/* ── Split hero: dark panel + full-bleed image ── */}
      <div className="js-kerala-hero grid grid-cols-1 lg:grid-cols-2">
        <div className="js-kerala-copy order-2 flex flex-col items-start gap-8 bg-forest px-6 py-16 text-ivory sm:px-10 lg:order-none lg:px-16 lg:py-24 xl:px-24">
          <div className="flex items-center gap-4">
            <p className="text-[0.66rem] uppercase tracking-[0.34em] text-ivory/80">
              HERITAGE & ORIGIN
            </p>
            <span className="block h-px w-10 bg-ivory/40" />
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-[3rem] font-medium leading-[1.02] tracking-[0.01em] sm:text-[3.6rem] lg:text-[4.2rem] xl:text-[4.75rem]">
              Kerala
            </h2>
            <p className="text-[0.62rem] uppercase tracking-[0.28em] text-gold-light">
              Our home. An extraordinary world of its own.
            </p>
          </div>

          <p className="max-w-[44ch] text-[0.95rem] leading-[1.85] text-ivory/70">
            Kerala is not simply where we operate. It is where our understanding of travel begins. SIX TRAVEL reveals
            Kerala through a more discerning lens—connecting travelers with remarkable stays, intimate experiences,
            extraordinary landscapes, and the cultural character that exists beyond the postcard.
          </p>

          <a
            href="#plan"
            className="group mt-2 inline-flex items-center gap-5 text-[0.66rem] uppercase tracking-[0.3em] text-ivory"
          >
            <span className="grid h-14 w-14 flex-none place-items-center rounded-full border border-ivory/40 transition-colors duration-500 ease-smooth group-hover:bg-ivory group-hover:text-forest">
              <Arrow className="h-4 w-4 transition-transform duration-500 ease-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
            Explore Kerala
          </a>

          <dl className="mt-6 grid w-full grid-cols-3 gap-3 border-t border-ivory/15 pt-8 sm:gap-4">
            {STATS.map((s) => (
              <div
                key={s.l}
                className="flex flex-col gap-1.5 border-l border-ivory/15 pl-2.5 first:border-l-0 first:pl-0 sm:gap-2 sm:pl-4"
              >
                <dt className="font-display text-[1.15rem] leading-none tracking-[0.04em] sm:text-[1.9rem]">
                  {s.n}
                </dt>
                <dd className="max-w-[16ch] text-[0.5rem] uppercase leading-[1.5] tracking-[0.16em] text-ivory/55 sm:text-[0.62rem] sm:tracking-[0.24em]">
                  {s.l}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative order-1 min-h-[62vw] w-full overflow-hidden lg:order-none lg:min-h-full">
          <img
            src="/images/kerala.png"
            alt="A Kerala backwater houseboat framed by a window"
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="absolute right-6 top-10 flex flex-col items-end text-right sm:right-10 lg:right-12 lg:top-16">
            <p className="max-w-[16ch] font-display text-[1.4rem] italic leading-[1.35] text-ivory [text-shadow:0_2px_16px_rgba(31,51,41,0.85)] lg:text-[1.65rem]">
              More than a destination, a feeling.
            </p>
            <span className="mt-4 block h-px w-12 bg-ivory/70" />
          </div>
        </div>
      </div>

      {/* ── Experiences band ── */}
      <div className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24 xl:px-24">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <p className="text-[0.66rem] uppercase tracking-[0.32em] text-ink-soft">
              Experiences in Kerala
            </p>
            <span className="hidden h-px w-16 bg-line sm:block" />
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Previous"
              className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink-soft transition-colors duration-500 ease-smooth hover:border-forest hover:bg-forest hover:text-ivory"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="h-4 w-4">
                <path d="m14 7-5 5 5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <span className="hidden h-px w-16 bg-line sm:block" />
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Next"
              className="grid h-11 w-11 place-items-center rounded-full border border-forest bg-forest text-ivory transition-colors duration-500 ease-smooth hover:bg-forest-soft"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="h-4 w-4">
                <path d="m10 7 5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={track}
          className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-6"
        >
          {FACETS.map((f, i) => (
            <article
              key={f.t}
              className="js-kerala-card group relative flex aspect-[3/4] flex-none basis-[72%] snap-start flex-col justify-between overflow-hidden bg-forest p-5 text-ivory sm:basis-[280px] md:p-6 lg:basis-[300px]"
            >
              <img
                src={f.img}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1100ms] ease-smooth group-hover:scale-[1.05]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest via-forest/45 to-forest/10" />

              <div className="relative">
                <span className="font-display text-[1.05rem] text-ivory/85">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-2 block h-px w-8 bg-gold/70" />
              </div>

              <div className="relative">
                <h3 className="text-[0.9rem] uppercase tracking-[0.24em] text-ivory">
                  {f.t}
                </h3>
                <p className="mt-2.5 line-clamp-3 max-w-[34ch] text-[0.8rem] leading-[1.55] text-ivory/75">
                  {f.b}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-6 text-[0.62rem] uppercase tracking-[0.28em] text-ink-soft/70 sm:flex-row sm:items-center sm:justify-between">
          <span>Kerala stays with you</span>
          <span className="hidden h-px flex-1 bg-line sm:mx-8 sm:block" />
          <span>Long after you leave</span>
        </div>
      </div>
    </section>
  );
}
