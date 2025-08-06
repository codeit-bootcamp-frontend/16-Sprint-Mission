type GrayScale = Record<
  100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900,
  string
>;

const gray: GrayScale = {
  100: "#f9fafb",
  200: "#f3f4f6",
  300: "#e5e7eb",
  400: "#9ca3af",
  500: "#6b7280",
  600: "#4b5563",
  700: "#374151",
  800: "#1f2937",
  900: "#111827",
};

export const COLORS = {
  gray,
  primary: {
    DEFAULT: "#3692ff",
    hover: "#1967d6",
    click: "#1251aa",
  },
  secondary: {
    DEFAULT: gray[800],
  },
  text: {
    DEFAULT: gray[600],
  },
  background: {
    lightGray: "#fcfcfc",
    blue: "#cfe5ff",
    lightBlue: "#e6f2ff",
  },
  error: "#f74747",
  border: gray[200],
};
