# Sixtravel — The Six Standard™

A single-page marketing site for the Sixtravel premium travel company. Content is
drawn verbatim from `Sixtravel_The_Six_Standard-v2.pdf`; the layout is inspired by
the two reference concept images (rounded hero frame, image-card grids) rendered in
the Sixtravel brand palette (ivory, forest green, gold, serif display type).

## Stack

- **Next.js 14** (App Router, TypeScript)
- **GSAP + ScrollTrigger** — reveal animations, pinned horizontal scroll, parallax,
  scrubbed word reveals, sticky nav show/hide, scroll-progress bar
- **Lenis** — smooth scrolling, wired into the GSAP ticker and anchor links
- CSS Modules per component; `next/font` for Cormorant Garamond + Jost

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the build
```

## Sections (in scroll order)

| Section        | PDF source                        | Interaction                                   |
| -------------- | --------------------------------- | --------------------------------------------- |
| Hero           | p.1                               | Clip-path frame reveal, line mask, parallax   |
| Philosophy     | p.2                               | Scrubbed word-by-word statement, marquee      |
| Portfolio      | p.3 (Private / Corporate / Select)| Staggered card rise, hover zoom               |
| Kerala         | p.4 (6 facets)                    | Pinned horizontal scroll (desktop), stacks on mobile |
| International  | p.5–6 (Beyond Kerala + Enterprise)| Group stagger, hover list                     |
| The Six Standard | p.7 (Experience / Curation / 6 principles) | Reveal grid                          |
| Closing        | p.8                               | Masked headline, parallax glow, footer        |

All animations respect `prefers-reduced-motion`. Hero/section imagery uses Unsplash
URLs as placeholders — swap for licensed Sixtravel photography before launch.
