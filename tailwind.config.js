/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        secondary: "#4f46e5",
        accent: "#7c3aed",
        dark: "#1e293b",
        light: "#f8fafc",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "25%": { transform: "translate(20px, -20px) scale(1.05)" },
          "50%": { transform: "translate(0, 20px) scale(0.95)" },
          "75%": { transform: "translate(-20px, -10px) scale(1.02)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        blob: "blob 7s infinite",
        "blob-slow": "blob 10s infinite",
        "blob-slower": "blob 13s infinite",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-reverse": "marquee-reverse var(--duration) linear infinite",
      },
    },
  },
  plugins: [],
};
