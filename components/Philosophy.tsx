"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  {
    label: "Less itinerary. More immersion.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    label: "Less tourism. More discovery.",
    img: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&w=1000&q=80",
  },
  {
    label: "Less ordinary. More Six.",
    img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1000&q=80",
  },
];

export default function Philosophy() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".js-phil-panel > *", {
        y: 28,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".js-phil-panel", start: "top 82%" },
      });

      gsap.from(".js-phil-feature", {
        y: 24,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: ".js-phil-features", start: "top 85%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="philosophy"
      className="section-pad overflow-hidden bg-ivory"
    >
      <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-16 lg:gap-20">
        <div className="js-phil-panel flex flex-col items-start">
          <p className="eyebrow flex items-center gap-3">
            Philosophy — Travel, Redefined
            <span className="h-px w-10 bg-gold/60" />
          </p>

          <h2 className="mt-8 max-w-[16ch] font-display text-[2.35rem] font-medium leading-[1.16] text-forest md:mt-6 md:max-w-[20ch] md:text-4xl md:leading-[1.14]">
            The world has no shortage of places. It has a shortage of experiences
            worth remembering.
          </h2>

          <p className="mt-8 max-w-[42ch] text-[0.95rem] leading-[1.85] text-ink-soft md:mt-6 md:max-w-[52ch] md:text-base md:leading-[1.8]">
            Sixtravel takes a more considered approach to travel. We look beyond
            the obvious — searching for extraordinary properties, distinctive
            landscapes, exceptional dining, cultural depth, private experiences,
            and the details that give a destination its soul. Then we bring them
            together into journeys that feel effortless, personal, and
            beautifully composed.
          </p>
        </div>

        {/* Mobile: full-bleed editorial stack. Desktop (md+): original mosaic. */}
        <ul className="js-phil-features -mx-6 flex flex-col md:mx-0 md:grid md:h-[22rem] md:grid-cols-2 md:grid-rows-2 md:gap-4">
          {FEATURES.map((f, i) => (
            <li
              key={f.label}
              className={`js-phil-feature group relative flex aspect-[4/5] flex-col justify-end overflow-hidden bg-forest text-ivory md:aspect-auto md:rounded-[20px] ${
                i === 2 ? "md:col-start-2 md:row-start-1 md:row-span-2" : ""
              }`}
            >
              <img
                src={f.img}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1100ms] ease-smooth group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/35 to-forest/5" />
              <p className="relative m-6 max-w-[16ch] font-display text-[1.35rem] leading-[1.2] md:m-4 md:max-w-none md:text-base md:leading-[1.3]">
                {f.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
