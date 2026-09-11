"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Arrow } from "./Icons";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const LANDSCAPES = [
  {
    t: "Kerala",
    s: "Our home. Our heritage. Our beginning.",
    b: "Kerala is where SIX TRAVEL™ begins. A land of quiet backwaters, dramatic highlands, expansive coastlines, living heritage, extraordinary cuisine, and deeply rooted culture.",
    cta: "Discover Kerala",
    img: "/images/kerala.png",
  },
  {
    t: "India",
    s: "A country of endless possibilities",
    b: "India is not one destination. It is thousands of stories, landscapes, cultures, traditions, and experiences waiting to be discovered.",
    cta: "Explore India",
    img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
  },
  {
    t: "The World",
    s: "Selected with discernment",
    b: "Our journey extends beyond India. We curate destinations across the world based on more than popularity. We look for character, quality, beauty, authenticity, hospitality, and experiences worth the journey.",
    cta: "Explore The World",
    img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
  },
];

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".js-land-head > *", {
        y: 26,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".js-land-head", start: "top 85%" },
      });
      gsap.from(".js-land-card", {
        y: 44,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: ".js-land-grid", start: "top 80%" },
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
    <section ref={root} id="destinations" className="overflow-hidden bg-night">
      {/* ── Destinations — Curated Landscapes & Horizons ── */}
      <div className="section-pad !pt-14 !pb-20 md:!pt-20 md:!pb-28">
        <div className="js-land-head flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-5">
            <p className="eyebrow flex items-center gap-3">
              Destinations
              <span className="h-px w-10 bg-gold/60" />
            </p>
            <h2 className="max-w-[18ch] headline-vintage text-[2rem] leading-[1.1] text-cream sm:text-[2.6rem] md:text-5xl lg:text-6xl">
              Curated <span className="accent">Landscapes</span> &amp; Horizons
            </h2>
          </div>
          <a
            href="#plan"
            className="group inline-flex items-center gap-3 border-b border-gold/40 pb-2 font-body text-[0.58rem] uppercase tracking-[0.24em] text-gold transition-colors duration-500 ease-smooth hover:border-gold-deep hover:text-gold-deep md:text-[0.64rem] md:tracking-[0.3em]"
          >
            Explore Destinations
            <Arrow className="h-[0.85rem] w-[0.85rem] transition-transform duration-500 ease-smooth group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="js-land-grid mt-14 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-3 md:gap-6">
          {LANDSCAPES.map((l) => (
            <article
              key={l.t}
              className="js-land-card group flex flex-col overflow-hidden border border-line bg-night-panel transition-colors duration-500 hover:border-cream/40"
            >
              <div className="relative h-72 flex-none overflow-hidden md:h-80">
                <img
                  src={l.img}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover saturate-[0.9] transition-transform duration-[1100ms] ease-smooth group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/30 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col items-start gap-3 p-7 md:p-8">
                <h3 className="font-display text-[1.4rem] leading-[1.1] text-cream md:text-[1.7rem]">
                  {l.t}
                </h3>
                <p className="text-[0.52rem] uppercase tracking-[0.2em] text-gold md:text-[0.58rem] md:tracking-[0.24em]">
                  {l.s}
                </p>
                <p className="mt-1 max-w-[42ch] text-[0.78rem] leading-[1.7] text-mist md:text-[0.86rem] md:leading-[1.8]">
                  {l.b}
                </p>
                <a
                  href="#plan"
                  className="group/btn mt-auto inline-flex items-center gap-2 pt-4 text-[0.58rem] uppercase tracking-[0.22em] text-cream transition-colors duration-500 ease-smooth hover:text-gold-deep md:text-[0.62rem] md:tracking-[0.26em]"
                >
                  {l.cta}
                  <Arrow className="h-3.5 w-3.5 transition-transform duration-500 ease-smooth group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ── Split hero: dark panel + full-bleed image ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="order-2 flex flex-col items-start gap-8 bg-forest px-6 py-14 text-[#faf9f6] sm:px-10 lg:order-none lg:px-16 lg:py-16 xl:px-24">
          <div className="flex items-center gap-4">
            <p className="text-[0.54rem] uppercase tracking-[0.24em] text-[#d9d5cb]/80 md:text-[0.62rem] md:tracking-[0.32em]">
              Our home. Our heritage. Our beginning.
            </p>
            <span className="block h-px w-10 bg-gold/50" />
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-[2.4rem] italic leading-[1] tracking-[0.01em] text-[#faf9f6] sm:text-[3.6rem] lg:text-[4.2rem] xl:text-[4.75rem]">
              <span className="text-gold not-italic">K</span>erala
            </h2>
            <p className="text-[0.54rem] uppercase tracking-[0.22em] text-gold md:text-[0.6rem] md:tracking-[0.28em]">
              Where SIX TRAVEL&trade; begins.
            </p>
          </div>

          <p className="max-w-[44ch] text-[0.82rem] leading-[1.8] text-[#d9d5cb]/85 md:text-[0.95rem] md:leading-[1.9]">
            A land of quiet backwaters, dramatic highlands, expansive coastlines,
            living heritage, extraordinary cuisine, and deeply rooted culture. We
            create journeys that reveal Kerala beyond conventional tourism — from
            hidden landscapes and distinctive stays to local encounters, culinary
            experiences, and wellness escapes designed around discovery.
          </p>

          <a
            href="#plan"
            className="group mt-2 inline-flex items-center gap-5 text-[0.56rem] uppercase tracking-[0.24em] text-[#faf9f6] md:text-[0.62rem] md:tracking-[0.3em]"
          >
            <span className="grid h-14 w-14 flex-none place-items-center rounded-full border border-gold/40 transition-colors duration-500 ease-smooth group-hover:bg-gold group-hover:text-forest">
              <Arrow className="h-4 w-4 transition-transform duration-500 ease-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
            Explore Kerala
          </a>

          <dl className="mt-6 grid w-full grid-cols-3 gap-3 border-t border-[#faf9f6]/15 pt-8 sm:gap-4">
            {[
              { n: "600+", l: "Kilometres of coastline" },
              { n: "44", l: "Rivers" },
              { n: "Countless", l: "Unforgettable stories" },
            ].map((s) => (
              <div
                key={s.l}
                className="flex flex-col gap-1.5 border-l border-[#faf9f6]/15 pl-2.5 first:border-l-0 first:pl-0 sm:gap-2 sm:pl-4"
              >
                <dt className="font-display text-[1.05rem] italic leading-none tracking-[0.04em] text-gold sm:text-[1.9rem]">
                  {s.n}
                </dt>
                <dd className="max-w-[16ch] text-[0.42rem] uppercase leading-[1.45] tracking-[0.12em] text-[#d9d5cb]/60 sm:text-[0.6rem] sm:tracking-[0.24em]">
                  {s.l}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative order-1 min-h-[62vw] w-full overflow-hidden lg:order-none lg:min-h-0 lg:self-stretch">
          <img
            src="/images/kerala.png"
            alt="A Kerala backwater houseboat framed by a window"
            loading="lazy"
            className="h-full w-full object-cover saturate-[0.9]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest/50 via-transparent to-forest/10" />
          <div className="absolute right-6 top-10 flex flex-col items-end text-right sm:right-10 lg:right-12 lg:top-16">
            <p className="max-w-[16ch] font-display text-[1.05rem] italic leading-[1.3] text-[#faf9f6] [text-shadow:0_2px_18px_rgba(10,10,9,0.9)] sm:text-[1.4rem] lg:text-[1.65rem]">
              More than a destination, a feeling.
            </p>
            <span className="mt-4 block h-px w-12 bg-[#faf9f6]/70" />
          </div>
        </div>
      </div>

      {/* ── Experiences band ── */}
      <div className="border-t border-line bg-night-soft px-6 py-20 sm:px-10 lg:px-16 lg:py-28 xl:px-24">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <p className="text-[0.56rem] uppercase tracking-[0.22em] text-cream-soft sm:text-[0.62rem] sm:tracking-[0.32em]">
              Experiences in Kerala
            </p>
            <span className="hidden h-px w-16 bg-line sm:block" />
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Previous"
              className="grid h-11 w-11 place-items-center rounded-full border border-line text-cream-soft transition-colors duration-500 ease-smooth hover:border-gold hover:bg-gold hover:text-forest"
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
              className="grid h-11 w-11 place-items-center rounded-full border border-gold bg-gold text-forest transition-colors duration-500 ease-smooth hover:bg-gold-deep"
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
              className="js-kerala-card group relative flex aspect-[3/4] flex-none basis-[72%] snap-start flex-col justify-between overflow-hidden bg-forest p-5 text-[#faf9f6] sm:basis-[280px] md:p-6 lg:basis-[300px]"
            >
              <img
                src={f.img}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover saturate-[0.9] transition-transform duration-[1100ms] ease-smooth group-hover:scale-[1.05]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest via-forest/45 to-forest/10" />

              <div className="relative">
                <span className="font-display text-[0.9rem] italic text-[#faf9f6]/85">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-2 block h-px w-8 bg-gold/70" />
              </div>

              <div className="relative">
                <h3 className="text-[0.78rem] uppercase tracking-[0.2em] text-[#faf9f6] md:text-[0.9rem] md:tracking-[0.24em]">
                  {f.t}
                </h3>
                <p className="mt-2.5 line-clamp-3 max-w-[24ch] text-[0.7rem] leading-[1.55] text-[#d9d5cb]/80 md:text-[0.8rem] md:leading-[1.6]">
                  {f.b}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-6 text-[0.54rem] uppercase tracking-[0.22em] text-mist sm:flex-row sm:items-center sm:justify-between sm:text-[0.6rem] sm:tracking-[0.28em]">
          <span>Kerala stays with you</span>
          <span className="hidden h-px flex-1 bg-line sm:mx-8 sm:block" />
          <span>Long after you leave</span>
        </div>
      </div>

      {/* ── India & The World ── */}
      <div className="grid grid-cols-1 gap-px bg-line md:grid-cols-2">
        {[
          {
            t: "India",
            s: "A country of endless possibilities",
            b: "India is not one destination. It is thousands of stories, landscapes, cultures, traditions, and experiences waiting to be discovered — from sophisticated cities and heritage destinations to remote escapes and extraordinary natural landscapes.",
            note: "India, curated differently.",
            img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
          },
          {
            t: "The World",
            s: "Selected with discernment",
            b: "Our journey extends beyond India. We curate destinations across the world based on more than popularity — character, quality, beauty, authenticity, hospitality, and experiences worth the journey. Our approach remains the same wherever you go.",
            note: "Our world is curated, not catalogued.",
            img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
          },
        ].map((r) => (
          <div
            key={r.t}
            className="group relative flex min-h-[520px] flex-col justify-end overflow-hidden px-6 py-16 sm:px-10 lg:px-16 lg:py-24 xl:px-24"
          >
            <img
              src={r.img}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover saturate-[0.9] transition-transform duration-[1200ms] ease-smooth group-hover:scale-[1.05]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night via-night/80 to-night/20" />
            <div className="relative flex flex-col gap-4">
              <h3 className="font-display text-[1.7rem] italic leading-[1.08] text-cream md:text-[2.6rem]">
                {r.t}
              </h3>
              <p className="text-[0.52rem] uppercase tracking-[0.22em] text-gold md:text-[0.6rem] md:tracking-[0.28em]">
                {r.s}
              </p>
              <p className="mt-2 max-w-[46ch] text-[0.78rem] leading-[1.75] text-mist md:text-[0.9rem] md:leading-[1.85]">
                {r.b}
              </p>
              <p className="mt-3 font-display text-[0.95rem] italic leading-[1.35] text-gold-deep md:text-[1.1rem] md:leading-[1.4]">
                {r.note}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
