import { type Config } from "tailwindcss";

export default {
  mode: "jit",
  prefix: "tw-",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        extension: "405px",
        xs: "300px",
      },
      aspectRatio: {
        card: "1.7736",
      },
      fontFamily: {
        lobster: ["Lobster", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        montserratAlt: ["MontserratAlt", "sans-serif"],
        next: ["AvenirNext", "sans-serif"],
      },
      transitionProperty: {
        width: "width",
      },
      keyframes: {
        "reverse-spin": {
          from: {
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        "spin-slower": "spin 3.5s linear infinite",
        "spin-slow": "spin 3s linear infinite",
        "spin-fast": "spin 0.5s linear infinite",
        "spin-faster": "spin 0.1s linear infinite",
        "spin-reverse": "reverse-spin 1s linear infinite",
        "spin-reverse-slow": "reverse-spin 3s linear infinite",
        "spin-reverse-fast": "reverse-spin 0.5s linear infinite",
        "spin-reverse-faster": "reverse-spin 0.1s linear infinite",
      },
      fontSize: {
        xxs: ["10px", "13.5px"],
        h0: [
          "48px",
          { lineHeight: "56px", letterSpacing: "0.1em", fontWeight: "500" },
        ],
        h1: [
          "32px",
          { lineHeight: "40px", letterSpacing: "0.1em", fontWeight: "500" },
        ],
        h2: [
          "24px",
          { lineHeight: "32px", letterSpacing: "0.1em", fontWeight: "500" },
        ],
        h3: [
          "20px",
          { lineHeight: "28px", letterSpacing: "0.1em", fontWeight: "500" },
        ],
        p18: [
          "18px",
          { lineHeight: "24px", letterSpacing: "0.1em", fontWeight: "300" },
        ],
        p16: [
          "16px",
          { lineHeight: "24px", letterSpacing: "0.1em", fontWeight: "300" },
        ],
        p16b: [
          "16px",
          { lineHeight: "24px", letterSpacing: "0.1em", fontWeight: "500" },
        ],
        p14b: [
          "14px",
          { lineHeight: "20px", letterSpacing: "0.1em", fontWeight: "500" },
        ],
        p14: [
          "14px",
          { lineHeight: "20px", letterSpacing: "0.1em", fontWeight: "300" },
        ],
        sp14: [
          "14px",
          { lineHeight: "20px", letterSpacing: "0.2em", fontWeight: "300" },
        ],
        sp12b: [
          "12px",
          { lineHeight: "18px", letterSpacing: "0.2em", fontWeight: "500" },
        ],
        sp12bb: [
          "12px",
          { lineHeight: "18px", letterSpacing: "0.2em", fontWeight: "800" },
        ],
        p12b: [
          "12px",
          { lineHeight: "18px", letterSpacing: "0.1em", fontWeight: "500" },
        ],
        p12: [
          "12px",
          { lineHeight: "18px", letterSpacing: "0.2em", fontWeight: "300" },
        ],
        c10bb: [
          "10px",
          { lineHeight: "16px", letterSpacing: "0.1em", fontWeight: "800" },
        ],
        c10b: [
          "10px",
          { lineHeight: "16px", letterSpacing: "0.1em", fontWeight: "500" },
        ],
        c10: [
          "10px",
          { lineHeight: "16px", letterSpacing: "0.1em", fontWeight: "300" },
        ],
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(4em, 1fr))",
      },
      borderWidth: {
        1: "1px",
      },
      spacing: {
        1: "0.35em",
      },
      gradientColorStops: {
        gradient1: `var(--g1l), var(--g1r)`,
        gradient2: `var(--g2l), var(--g2r)`,
      },
      colors: {
        t1: "var(--t1)",
        t2: "var(--t2)",
        t3: "var(--textContrast)",
        b1: "var(--b1)",
        b2: "var(--b2)",
        br1: "var(--br1)",
        br2: "var(--br2)",
        br3: "var(--br3)",
        g1l: "var(--g1l)",
        g1r: "var(--g1r)",
        i1: "var(--i1)",
        s1: "var(--s1)",
        tint: "var(--tint)",
      },
      boxShadowColor: {
        sh1: "var(--s)",
      },
      backgroundImage: {
        gradient1: `linear-gradient(to right top, var(--g1l), var(--g1r))`,
        gradient2: `linear-gradient(to right top, var(--g2l), var(--g2r))`,
        gradient3: `linear-gradient(to  bottom, var(--g3t), var(--g3b))`,
        gradient4: `linear-gradient(to  bottom, var(--g4t), var(--g4b))`,
      },
    },
  },
  plugins: [require("tailwindcss"), require("precss"), require("autoprefixer")],
} satisfies Config;
