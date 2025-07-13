/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7C3AED",
          100: "#EDE9FE",
        },
        gray: {
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#E2E8F0",
          400: "#94A3B8",
          500: "#64748B",
          800: "#1E293B",
          900: "#0F172A",
        },
        rose: {
          DEFAULT: "#F43F5E",
        },
        lime: {
          DEFAULT: "#BEF264",
        },
        amber: {
          DEFAULT: "#92400E",
        },
      },
      fontSize: {
        base: "16px",
        lg: "18px",
        xl: "20px",
      },
    },
  },
  screen: {
    md: "640px",
    lg: "1280px",
  },
  plugins: [],
};
