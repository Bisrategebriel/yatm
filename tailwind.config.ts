import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Atlassian Design System — Blue palette
        "ads-blue": {
          50: "#DEEBFF",
          100: "#B3D4FF",
          200: "#4C9AFF",
          300: "#2684FF",
          400: "#0052CC",
          500: "#0747A6",
          600: "#033278",
          700: "#091E42",
        },
        // Atlassian — Teal
        "ads-teal": {
          100: "#E6FCFF",
          200: "#B3F5FF",
          300: "#79E2F2",
          400: "#00C7E6",
          500: "#00B8D9",
          600: "#00A3BF",
          700: "#008DA6",
        },
        // Atlassian — Neutral
        "ads-n": {
          0: "#FFFFFF",
          10: "#FAFBFC",
          20: "#F4F5F7",
          30: "#EBECF0",
          40: "#DFE1E6",
          50: "#C1C7D0",
          60: "#B3BAC5",
          70: "#A5ADBA",
          80: "#97A0AF",
          90: "#8993A4",
          100: "#7A869A",
          200: "#6B778C",
          300: "#5E6C84",
          400: "#505F79",
          500: "#42526E",
          600: "#344563",
          700: "#253858",
          800: "#172B4D",
          900: "#091E42",
        },
        // Atlassian — Green
        "ads-green": {
          50: "#E3FCEF",
          200: "#79F2C0",
          300: "#57D9A3",
          400: "#36B37E",
          500: "#00875A",
          600: "#006644",
        },
        // Atlassian — Yellow
        "ads-yellow": {
          50: "#FFFAE6",
          100: "#FFF0B3",
          200: "#FFE380",
          300: "#FFC400",
          400: "#FF991F",
          500: "#FF8B00",
        },
        // Atlassian — Red
        "ads-red": {
          50: "#FFEBE6",
          100: "#FFBDAD",
          200: "#FF8F73",
          300: "#FF7452",
          400: "#FF5630",
          500: "#DE350B",
          600: "#BF2600",
        },
        // Brand primaries (shorthand aliases)
        primary: "#0052CC",
        "primary-dark": "#0747A6",
        "primary-light": "#4C9AFF",
        "primary-lightest": "#DEEBFF",
        accent: "#00C7E6",
        "accent-dark": "#00A3BF",
        navy: "#091E42",
        "navy-mid": "#172B4D",
        "navy-soft": "#253858",
        gold: "#FF8B00",
        "gold-light": "#FFC400",
        surface: "#F4F5F7",
        border: "#DFE1E6",
        muted: "#6B778C",
        body: "#172B4D",
      },
      fontFamily: {
        display: ["var(--font-bricolage)", "system-ui", "sans-serif"],
        body: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-xl": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
        "display-md": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "display-sm": ["1.875rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        "display-xs": ["1.5rem", { lineHeight: "1.3" }],
      },
      spacing: {
        "4.5": "1.125rem",
        "13": "3.25rem",
        "15": "3.75rem",
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
      },
      boxShadow: {
        "ads-e100": "0px 1px 1px rgba(9,30,66,0.25), 0px 0px 0px 1px rgba(9,30,66,0.08)",
        "ads-e200": "0px 3px 5px rgba(9,30,66,0.2), 0px 0px 1px rgba(9,30,66,0.31)",
        "ads-e300": "0px 8px 16px rgba(9,30,66,0.15), 0px 0px 1px rgba(9,30,66,0.31)",
        "ads-e400": "0px 16px 32px rgba(9,30,66,0.15), 0px 0px 1px rgba(9,30,66,0.25)",
        "ads-e500": "0px 24px 48px rgba(9,30,66,0.12), 0px 0px 1px rgba(9,30,66,0.25)",
        "card-hover": "0px 20px 40px rgba(0,82,204,0.15), 0px 0px 1px rgba(9,30,66,0.2)",
      },
      borderRadius: {
        "ads-sm": "3px",
        "ads-md": "4px",
        "ads-lg": "8px",
        "ads-xl": "12px",
        "ads-2xl": "16px",
        "ads-3xl": "24px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "slide-in": "slideIn 0.5s ease forwards",
        "count-up": "countUp 2s ease forwards",
        "shimmer": "shimmer 2s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideIn: {
          from: { opacity: "0", transform: "translateX(-24px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      backgroundImage: {
        "gradient-navy": "linear-gradient(135deg, #091E42 0%, #172B4D 50%, #253858 100%)",
        "gradient-blue": "linear-gradient(135deg, #0052CC 0%, #0747A6 100%)",
        "gradient-brand": "linear-gradient(135deg, #091E42 0%, #0052CC 60%, #00C7E6 100%)",
        "gradient-surface": "linear-gradient(180deg, #FFFFFF 0%, #F4F5F7 100%)",
        "hero-mesh": "radial-gradient(ellipse at 20% 50%, rgba(0,82,204,0.3) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(0,199,230,0.2) 0%, transparent 50%), radial-gradient(ellipse at 60% 80%, rgba(0,116,182,0.2) 0%, transparent 50%)",
      },
      gridTemplateColumns: {
        "auto-fill-280": "repeat(auto-fill, minmax(280px, 1fr))",
        "auto-fill-320": "repeat(auto-fill, minmax(320px, 1fr))",
      },
    },
  },
  plugins: [],
};

export default config;
