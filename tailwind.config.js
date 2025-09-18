/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1280px",
    },
    extend: {
      colors: {
        gray: {
          50: "#fcfcfc",
          100: "#f9fafb",
          200: "#f3f4f6",
          300: "#e5e7eb",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        primary: {
          DEFAULT: "#3692FF",
          hover: "#1967d6",
          click: "#1251aa",
          light: "#cfe5ff",
        },
      },
      fontSize: {
        fluid: "clamp(32px, 5vw, 40px)",
      },
    },
  },
  plugins: [],
};
