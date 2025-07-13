/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    boxShadow: {
      button: "4px 4px 0 0 #0F172A",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7C3AED",
          100: "#EDE9FE",
        },
        gray: {
          50: "#F9FAFB",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          800: "#1E293B",
          900: "#0F172A",
        },
        danger: {
          DEFAULT: "#F43F5E",
        },
        success: {
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
