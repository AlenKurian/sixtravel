"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const COLUMNS = [
  {
    heading: "A Different Way",
    eyebrow: "To See The World",
    lead: "Travel has become easier.<br />Exceptional travel has become rarer.",
    paragraphs: [
      "At SIX TRAVEL&trade;, we believe the best journeys are not defined by how many places you visit, but by how deeply you experience them.",
      "We look beyond standard itineraries to discover places with character, experiences with meaning, and moments that stay with you long after the journey ends.",
    ],
  },
  {
    heading: "Our Philosophy",
    eyebrow: "Effortless Excellence",
    lead: "Luxury isn&rsquo;t simply where you stay.<br />It&rsquo;s everything in between.",
    paragraphs: [
      "A remarkable journey is built through hundreds of details: The right destination. The right property. The right route. The right people. The right experience. The right moment.",
      "We bring these elements together with precision and purpose. Because true luxury is not excess. It is effortless excellence.",
    ],
  },
];

const CONTRASTS = [
  { small: "Less", big: "Itinerary", img: "/images/journeys/business.jpg" },
  { small: "More", big: "Immersion", img: "/images/journeys/incentive.jpg" },
  { small: "Less", big: "Ordinary", img: "/images/journeys/leadership.jpg" },
  { small: "More", big: "SIX", img: "/images/journeys/corporate_d.jpg" },
];

function ContrastCell({ c, i }: { c: (typeof CONTRASTS)[number]; i: number }) {
  const isMore = c.small === "More";
  return (
    <div
      className={`js-phil-cell group relative flex h-[200px] flex-col justify-end overflow-hidden md:h-[300px] lg:h-[360px] ${
        isMore ? "" : ""
      }`}
    >
      <img
        src={c.img}
        alt=""
        loading="lazy"
        className={`absolute inset-0 h-full w-full object-cover transition-[transform,filter] duration-[1200ms] ease-smooth group-hover:scale-[1.04] ${
          isMore ? "saturate-100" : "saturate-[0.35] grayscale-[0.3]"
        }`}
      />
      <div
        className={`absolute inset-0 ${
          isMore
            ? "bg-gradient-to-t from-forest/85 via-forest/10 to-transparent"
            : "bg-forest/55"
        }`}
      />
      <span className="relative z-[1] mb-1 px-4 text-[0.54rem] uppercase tracking-[0.24em] text-mist-soft md:px-8 md:text-[0.64rem] md:tracking-[0.3em]">
        {String(i + 1).padStart(2, "0")} &mdash; {c.small}
      </span>
      <span className="relative z-[1] px-4 pb-4 font-display text-[1.4rem] italic leading-none text-[#faf9f6] md:px-8 md:pb-8 md:text-[2.6rem] lg:text-[3.1rem]">
        {c.big}
      </span>
      <span
        className={`absolute inset-x-0 bottom-0 z-[1] h-px origin-left scale-x-0 bg-gold/70 transition-transform duration-700 ease-smooth group-hover:scale-x-100`}
      />
    </div>
  );
}

function PhilosophyColumn({ c }: { c: (typeof COLUMNS)[number] }) {
  return (
    <div className="js-phil-col flex flex-col items-start text-left">
      <p className="js-phil-reveal eyebrow flex items-center gap-3">
        {c.heading}
        <span className="h-px w-10 bg-gold/60" />
      </p>
      <p className="js-phil-reveal mt-5 max-w-[14ch] font-display text-[1.6rem] not-italic leading-[1.15] text-cream md:text-[2.4rem]">
        <span className="italic">{c.eyebrow.split(" ")[0]}</span>{" "}
        {c.eyebrow.split(" ").slice(1).join(" ")}
      </p>

      <div className="mt-6 flex flex-col gap-5">
        {c.lead && (
          <p
            className="js-phil-reveal text-[0.72rem] font-bold uppercase leading-[1.55] text-cream md:text-[0.88rem]"
            dangerouslySetInnerHTML={{ __html: c.lead }}
          />
        )}
        {c.paragraphs.map((p, i) => (
          <p
            key={i}
            className="js-phil-reveal max-w-[46ch] text-[0.82rem] leading-[1.75] text-mist md:text-[0.92rem] md:leading-[1.8]"
            dangerouslySetInnerHTML={{ __html: p }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Philosophy() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".js-phil-col").forEach((col) => {
        gsap.from(col.querySelectorAll(".js-phil-reveal"), {
          y: 28,
          opacity: 0,
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: col, start: "top 82%" },
        });
      });

      gsap.from(".js-phil-cell", {
        y: 24,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: ".js-phil-grid", start: "top 88%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="philosophy" className="border-t border-line bg-night">
      <div className="section-pad !pb-14 md:!pb-20">
        <div className="flex flex-col gap-14 md:gap-16">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14">
            <PhilosophyColumn c={COLUMNS[0]} />

            <div className="js-phil-reveal relative h-[260px] w-full overflow-hidden md:h-[380px] lg:h-[440px]">
              <img
                src="/images/philo.jpg"
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover saturate-[0.9]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14">
            <div className="js-phil-reveal relative order-first h-[260px] w-full overflow-hidden md:h-[380px] lg:h-[440px]">
              <img
                src="/images/diff.jpeg"
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover saturate-[0.9]"
              />
            </div>

            <PhilosophyColumn c={COLUMNS[1]} />
          </div>
        </div>

        <div className="js-phil-grid mt-14 grid grid-cols-2 gap-px overflow-hidden bg-line md:mt-16 md:grid-cols-4">
          {CONTRASTS.map((c, i) => (
            <ContrastCell key={c.small + c.big} c={c} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
