import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

const mainColors = [
  "#f5f5f5",
  "#e5e5e5",
  "#d4d4d4",
  "#a3a3a3",
  "#737373",
  "#525252",
  "#404040",
  "#333333",
  "#262626",
  "#1e1e1e",
  "#171717",
  "#111111",
  "#0a0a0a",
  "#040404",
].reverse();

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
    "./public/index.html",
  ],
  darkMode: "class",
  theme: {
    screens: {
      "2xs": "400px",
      xs: "480px",
      sm: "375px",
      md: "768px",
      lg: "1200px",
      "2xl": "1400px",
      ...defaultTheme.screens,
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        "meteor-effect": "meteor 5s linear infinite",
        "ping-large": "ping-large 1s ease-in-out infinite",
        "move-left": "move-left 1s linear infinite",
        "move-right": "move-right 1s linear infinite",
        arrowAnimation: "arrowAnimation 2s linear infinite",
        spinSlowly: "spin 20s linear infinite",
        hueRotate: "hueRotate 15s linear infinite",
      },
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        "ping-large": {
          "75%, 100%": {
            transform: "scale(3)",
            opacity: "0",
          },
        },
        "move-left": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "move-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        arrowAnimation: {
          "0%": { opacity: 0, transform: "translateY(-7px) rotate(45deg)" },
          "40%, 60%": { opacity: 1 },
          "100%": { opacity: 0, transform: "translateY(3px) rotate(45deg)" },
        },
        hueRotate: {
          "0%": { filter: "hue-rotate(0deg)" },
          "100%": { filter: "hue-rotate(360deg)" },
        },
      },
      colors: {
        main: mainColors,
        "main-reverse": [...mainColors].reverse(),
        accent: colors.rose,
      },
      fontSize: {
        "7.5xl": ["5.25rem", "1"],
      },
      maxWidth: {
        "8xl": "87.5rem", // 1400px
      },
      rotate: {
        135: "135deg",
      },
      fontFamily: {
        sans: "var(--font-sans)",
        serif: "var(--font-serif)",
        righteous: ["Righteous", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      translate: {
        screen: "100vw",
      },
    },
  },
  plugins: [],
};

export default config;
