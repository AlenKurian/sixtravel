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
        /* ---------------------------------------------------------------
           Black Tomato–style system — quiet luxury: near-white paper,
           near-black ink, restrained warm-neutral accent.
           The `night*` tokens are section BACKGROUNDS.
           The `cream*` tokens are primary TEXT on that ground.
           `mist*` are muted body / secondary text.
           Dark surfaces (panels, footer) use `forest*` explicitly.
           --------------------------------------------------------------- */
        night: "#faf9f6", // page ground — off-white paper
        "night-soft": "#f2f0ea", // raised panel / card
        "night-panel": "#ffffff", // lightest paper
        "night-deep": "#ece9e1", // deepest band

        // Dark accent surfaces (used explicitly where needed)
        forest: "#111110",
        "forest-soft": "#1c1b19",
        "forest-line": "rgba(250, 249, 246, 0.14)",
        char: "#111110",

        // Ink / text (on paper ground)
        cream: "#161513", // primary text — near black ink
        "cream-soft": "#4e4b45", // secondary
        ink: "#161513",
        "ink-soft": "#4e4b45",
        mist: "#6f6b62", // body copy
        "mist-soft": "#a19b8d", // faint captions

        // Restrained warm-neutral accent (replaces the old gold/yellow duo)
        gold: "#8a7a5c",
        "gold-light": "#a4967a",
        "gold-deep": "#6b5d44",
        yellow: "#161513",

        // Hairlines
        line: "rgba(22, 21, 19, 0.12)",
        "line-soft": "rgba(22, 21, 19, 0.07)",

        // legacy aliases
        ivory: "#faf9f6",
        "ivory-deep": "#f2f0ea",
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
      boxShadow: {
        lux: "0 40px 80px -40px rgba(38, 32, 25, 0.28)",
        "lux-sm": "0 20px 45px -28px rgba(38, 32, 25, 0.22)",
      },
      keyframes: {
        cue: {
          "0%": { transform: "translateX(-100%)" },
          "60%, 100%": { transform: "translateX(100%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        cue: "cue 2s cubic-bezier(0.16, 1, 0.3, 1) infinite",
        marquee: "marquee 22s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
