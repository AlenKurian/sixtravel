"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function Progress() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const st = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        gsap.set(bar.current, { scaleX: self.progress });
      },
    });
    return () => st.kill();
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[200] h-0.5 bg-transparent"
    >
      <div
        ref={bar}
        className="h-full origin-left scale-x-0 bg-gold"
      />
    </div>
  );
}
