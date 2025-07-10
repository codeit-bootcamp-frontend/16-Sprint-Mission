/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#3692FF',
          200: '#1967D6',
          300: '#1251AA',
        },
        gray: {
          100: '#F9FAFB',
          200: '#F3F4F6',
          300: '#E5E7EB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#FB5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        error: '#F74747',
      },
    },
  },
  plugins: [],
};
