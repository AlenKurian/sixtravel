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
    img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
  },
  {
    t: "Highlands",
    s: "Where the world slows down.",
    b: "Tea estates, spice plantations, mountain forests, mist-covered landscapes, and extraordinary highland retreats.",
    img: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    t: "Coast",
    s: "The Arabian Sea, reimagined.",
    b: "Tropical shores, refined coastal properties, private escapes, and endless horizons.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    t: "Heritage",
    s: "Where the past remains present.",
    b: "Architecture, craftsmanship, traditions, art, and stories carried through generations.",
    img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
  },
  {
    t: "Culinary",
    s: "The flavour of a place.",
    b: "Malabar traditions, coastal cuisine, local ingredients, heritage recipes, and exceptional dining experiences.",
    img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80",
  },
  {
    t: "Wellness",
    s: "The luxury of time.",
    b: "Ayurveda, nature, stillness, restorative hospitality, and the freedom to disconnect from the noise.",
    img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Kerala() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

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
      className="overflow-hidden bg-forest py-16 text-ivory md:py-20"
    >
      <div className="js-kerala-head mb-10 flex flex-col gap-8 px-5 md:mb-14 md:flex-row md:items-end md:justify-between md:gap-12 md:px-16 lg:px-24">
        <div className="flex flex-col items-start gap-3">
          <p className="eyebrow">Heritage &amp; Origin</p>
          <h2 className="font-display text-5xl tracking-[0.08em] md:text-6xl lg:text-7xl">
            Kerala
          </h2>
          <p className="text-[0.74rem] uppercase tracking-[0.26em] text-gold-light">
            Our home. An extraordinary world of its own.
          </p>
        </div>

        <p className="max-w-[58ch] text-[0.9rem] leading-[1.7] text-ivory/70 md:text-right md:text-[0.95rem]">
          Kerala is not simply where we operate. It is where our understanding of
          travel begins. Sixtravel reveals Kerala through a more discerning lens —
          connecting travelers with remarkable stays, intimate experiences,
          extraordinary landscapes, and the cultural character that exists beyond
          the postcard.
        </p>
      </div>

      <div className="mb-6 flex justify-end gap-3 px-5 md:px-16 lg:px-24">
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
        {FACETS.map((f, i) => (
          <article
            key={f.t}
            className="js-kerala-card group relative flex flex-none basis-[85%] snap-start flex-col gap-[0.85rem] rounded-[22px] border border-ivory/[0.14] bg-ivory/5 p-6 sm:basis-[340px] md:p-8 lg:basis-[400px]"
          >
            <span className="absolute right-6 top-5 font-display text-[0.9rem] tracking-[0.1em] text-gold">
              0{i + 1}
            </span>
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

      <div className="flex flex-col items-center gap-7 px-5 pt-16 text-center md:px-16 md:pt-24 lg:px-24">
        <p className="max-w-[20ch] font-display text-2xl md:text-4xl">
          Discover Kerala as it deserves to be experienced.
        </p>
        <a href="#plan" className="btn btn-light">
          <span>Explore Kerala</span>
          <Arrow className="arrow" />
        </a>
      </div>
    </section>
  );
}
