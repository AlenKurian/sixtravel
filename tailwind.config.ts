import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        ivory: "#f7f3ea",
        "ivory-deep": "#efe8d8",
        forest: "#1f3329",
        "forest-soft": "#2c4a3b",
        gold: "#b08d49",
        "gold-light": "#c7a76a",
        ink: "#2b2b28",
        "ink-soft": "#5b5b52",
        line: "rgba(31, 51, 41, 0.16)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      letterSpacing: {
        eyebrow: "0.34em",
        wide2: "0.24em",
      },
      keyframes: {
        cue: {
          "0%": { transform: "translateX(-100%)" },
          "60%, 100%": { transform: "translateX(100%)" },
        },
        drift: {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.5" },
          "50%": { transform: "translateY(6px)", opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        cue: "cue 2s cubic-bezier(0.16, 1, 0.3, 1) infinite",
        drift: "drift 3.4s cubic-bezier(0.16, 1, 0.3, 1) infinite",
        marquee: "marquee 22s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
