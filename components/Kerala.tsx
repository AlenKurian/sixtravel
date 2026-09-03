"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Arrow } from "./Icons";
import { useMobileReveal } from "@/lib/useMobileReveal";

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

export default function Kerala() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const mob = useMobileReveal<HTMLDivElement>();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".js-kerala-head > *", {
        y: 34,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: ".js-kerala-head", start: "top 82%" },
      });

      gsap.from(".js-kerala-card", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: track.current, start: "top 80%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const scrollBy = (dir: number) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".js-kerala-card");
    const step = card ? card.offsetWidth + 32 : el.clientWidth * 0.8;
    el.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  return (
    <section
      ref={root}
      id="kerala"
      className="overflow-hidden bg-forest py-24 text-ivory md:py-20"
    >
      <div className="js-kerala-head mb-14 flex flex-col gap-8 px-6 md:mb-14 md:flex-row md:items-end md:justify-between md:gap-12 md:px-16 lg:px-24">
        <div className="flex flex-col items-start gap-4 md:gap-3">
          <p className="eyebrow">Heritage &amp; Origin</p>
          <h2 className="font-display text-[4rem] leading-[0.98] tracking-[0.06em] md:text-6xl md:leading-normal md:tracking-[0.08em] lg:text-7xl">
            Kerala
          </h2>
          <p className="text-[0.66rem] uppercase tracking-[0.3em] text-gold-light md:text-[0.74rem] md:tracking-[0.26em]">
            Our home. An extraordinary world of its own.
          </p>
        </div>

        <p className="max-w-[42ch] text-[0.95rem] leading-[1.85] text-ivory/70 md:max-w-[58ch] md:text-right md:text-[0.95rem] md:leading-[1.7]">
          Kerala is not simply where we operate. It is where our understanding of
          travel begins. Sixtravel reveals Kerala through a more discerning lens —
          connecting travelers with remarkable stays, intimate experiences,
          extraordinary landscapes, and the cultural character that exists beyond
          the postcard.
        </p>
      </div>

      {/* Desktop (md+): the original carousel with nav arrows. */}
      <div className="hidden md:block">
        <div className="mb-6 flex justify-end gap-3 md:px-16 lg:px-24">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Previous"
            className="grid h-11 w-11 place-items-center rounded-full border border-ivory/30 text-ivory transition-colors duration-500 ease-smooth hover:bg-ivory hover:text-forest"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="h-4 w-4">
              <path d="m14 7-5 5 5 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Next"
            className="grid h-11 w-11 place-items-center rounded-full border border-ivory/30 text-ivory transition-colors duration-500 ease-smooth hover:bg-ivory hover:text-forest"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="h-4 w-4">
              <path d="m10 7 5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div
          ref={track}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth scroll-pl-5 px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:scroll-pl-16 md:gap-8 md:px-16 lg:scroll-pl-24 lg:px-24"
        >
          {FACETS.map((f) => (
            <article
              key={f.t}
              className="js-kerala-card group relative flex flex-none basis-[85%] snap-start flex-col gap-[0.85rem] rounded-[22px] border border-ivory/[0.14] bg-ivory/5 p-6 sm:basis-[340px] md:p-8 lg:basis-[400px]"
            >
              <div className="mb-2 aspect-[4/3] overflow-hidden rounded-[14px]">
                <img
                  src={f.img}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1100ms] ease-smooth group-hover:scale-[1.07]"
                />
              </div>
              <h3 className="font-display text-2xl md:text-3xl">{f.t}</h3>
              <p className="text-[0.68rem] uppercase tracking-[0.18em] text-gold-light">
                {f.s}
              </p>
              <p className="text-[0.9rem] leading-[1.7] text-ivory/70">{f.b}</p>
            </article>
          ))}
        </div>
      </div>

      {/* Mobile: intimate vertical sequence — full-bleed plates, slow reveals. */}
      <div ref={mob} className="flex flex-col md:hidden">
        {FACETS.map((f, i) => (
          <article key={f.t} className="mt-16 first:mt-0">
            <div
              data-m-reveal
              className="m-img-reveal relative aspect-[4/5] w-full overflow-hidden"
            >
              <img
                src={f.img}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest via-forest/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-baseline gap-3 px-6 pb-6">
                <span className="font-display text-[0.9rem] text-gold-light/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-[2.4rem] leading-[1.02]">{f.t}</h3>
              </div>
            </div>
            <div data-m-reveal data-m-reveal-delay="120" className="m-reveal px-6 pt-6">
              <p className="text-[0.62rem] uppercase tracking-[0.3em] text-gold-light">
                {f.s}
              </p>
              <p className="mt-4 max-w-[40ch] text-[0.92rem] leading-[1.85] text-ivory/70">
                {f.b}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-24 flex flex-col items-start gap-8 px-6 md:mt-0 md:items-center md:px-16 md:pt-24 md:text-center lg:px-24">
        <p className="max-w-[14ch] font-display text-[2.4rem] leading-[1.08] md:max-w-[20ch] md:text-4xl md:leading-normal">
          Discover Kerala as it deserves to be experienced.
        </p>
        <a
          href="#plan"
          className="group inline-flex items-center gap-3 border-b border-ivory/40 pb-2 font-body text-[0.66rem] uppercase tracking-[0.3em] text-ivory transition-colors duration-500 ease-smooth active:border-gold-light active:text-gold-light md:hidden"
        >
          Explore Kerala
          <Arrow className="h-[0.85rem] w-[0.85rem] transition-transform duration-500 ease-smooth group-active:translate-x-0.5" />
        </a>
        <a href="#plan" className="btn btn-light hidden md:inline-flex">
          <span>Explore Kerala</span>
          <Arrow className="arrow" />
        </a>
      </div>
    </section>
  );
}
