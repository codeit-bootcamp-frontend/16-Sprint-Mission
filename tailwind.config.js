/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      md: "600px",
      lg: "1200px",
    },
    extend: {
      colors: {
        primary: "#3692FF",
      },
    },
  },
  plugins: [],
};
