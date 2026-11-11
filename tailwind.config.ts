import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette — dijawainajadulu
        ivory: {
          50:  "#FDFAF4",
          100: "#F7F3EA",
          200: "#EDE3CF",
          300: "#DDD0B0",
        },
        forest: {
          50:  "#E8F0EF",
          100: "#C8DAD7",
          200: "#8DB5B0",
          300: "#3D7570",
          400: "#1F4D47",
          500: "#173B35",   // primary
          600: "#102A25",
          700: "#0A1A17",
        },
        charcoal: {
          50:  "#F2F3F2",
          100: "#D6D9D7",
          200: "#A8AEA9",
          300: "#6B726C",
          400: "#394039",
          500: "#202522",   // primary
          600: "#151917",
          700: "#0C0F0D",
        },
        terracotta: {
          50:  "#FBF0EC",
          100: "#F4D5C9",
          200: "#E5A68F",
          300: "#D47B5E",
          400: "#C36B4D",   // primary
          500: "#A85538",
          600: "#8A4229",
        },
        sage: {
          50:  "#F5F8F4",
          100: "#E6EDE5",   // primary
          200: "#CDD9CB",
          300: "#AAC0A6",
          400: "#7D9E78",
        },
        // Semantic tokens
        brand: {
          bg:      "#F7F3EA",   // ivory-100
          surface: "#FFFFFF",
          "surface-muted": "#FDFAF4",
          border:  "#DDD0B0",
          "border-subtle": "#EDE3CF",
          text:    "#202522",   // charcoal-500
          "text-muted": "#6B726C",
          "text-inverse": "#F7F3EA",
          primary: "#173B35",  // forest-500
          "primary-hover": "#1F4D47",
          accent:  "#C36B4D",  // terracotta-400
          "accent-hover": "#A85538",
          highlight: "#E6EDE5", // sage-100
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "var(--font-noto-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-plus-jakarta)", "sans-serif"],
        jawa: ["var(--font-noto-jawa)", "serif"],
        mono: ["var(--font-fira-mono)", "monospace"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1rem" }],
        xs:   ["0.75rem",  { lineHeight: "1.125rem" }],
        sm:   ["0.875rem", { lineHeight: "1.375rem" }],
        base: ["1rem",     { lineHeight: "1.625rem" }],
        lg:   ["1.125rem", { lineHeight: "1.75rem" }],
        xl:   ["1.25rem",  { lineHeight: "1.875rem" }],
        "2xl": ["1.5rem",  { lineHeight: "2rem" }],
        "3xl": ["1.875rem",{ lineHeight: "2.375rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.75rem" }],
        "5xl": ["3rem",    { lineHeight: "3.5rem" }],
      },
      spacing: {
        "4.5": "1.125rem",
        "13": "3.25rem",
        "18": "4.5rem",
        "22": "5.5rem",
        "nav": "4rem",          // bottom nav height
        "nav-safe": "5rem",     // nav + extra safe area
      },
      borderRadius: {
        "xs":  "0.25rem",
        "sm":  "0.375rem",
        DEFAULT: "0.5rem",
        "md":  "0.625rem",
        "lg":  "0.75rem",
        "xl":  "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        "card":    "0 1px 3px 0 rgba(32,37,34,0.06), 0 1px 2px -1px rgba(32,37,34,0.06)",
        "card-md": "0 4px 12px -2px rgba(32,37,34,0.08), 0 2px 4px -2px rgba(32,37,34,0.05)",
        "card-lg": "0 8px 24px -4px rgba(32,37,34,0.10), 0 4px 8px -4px rgba(32,37,34,0.06)",
        "primary": "0 4px 16px -2px rgba(23,59,53,0.24)",
        "accent":  "0 4px 16px -2px rgba(195,107,77,0.28)",
        "inner":   "inset 0 1px 2px 0 rgba(32,37,34,0.05)",
      },
      animation: {
        "fade-in":      "fade-in 0.25s ease-out",
        "fade-up":      "fade-up 0.3s ease-out",
        "slide-in":     "slide-in 0.25s ease-out",
        "slide-up":     "slide-up 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        "scale-in":     "scale-in 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
        "pulse-soft":   "pulse-soft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer":      "shimmer 1.8s linear infinite",
        "spin-slow":    "spin 3s linear infinite",
      },
      keyframes: {
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          "0%":   { opacity: "0", transform: "translateX(-8px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-up": {
          "0%":   { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%":   { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0.6" },
        },
        "shimmer": {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "kawung":       "url('/patterns/kawung.svg')",
        "shimmer-grad": "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
      },
      transitionTimingFunction: {
        "spring": "cubic-bezier(0.16, 1, 0.3, 1)",
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      screens: {
        "xs": "375px",
        "sm": "430px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1440px",
      },
      maxWidth: {
        "content": "42rem",
        "prose":   "65ch",
        "app":     "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
