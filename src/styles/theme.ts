import "@emotion/react";

const primaryColor = "#3692ff";
export const theme = {
  colors: {
    primaryColor: primaryColor,
    primaryBg: "#cfe5ff",
    white: "#fff",
    gray50: "#f9fafb",
    gray100: "#f3f4f6",
    gray200: "#e5e7eb",
    gray300: "#d1d5db",
    gray400: "#9ca3af",
    gray500: "#6b7280",
    gray600: "#4b5563",
    gray700: "#374151",
    gray800: "#1f2937",
    gray900: "#111827",
    error: "#f74747",
  },
  btn: {
    primary: primaryColor,
    hover: "#1967d6",
    click: "#1251aa",
    disabled: "#9ca3af",
  },
  footer: {
    bg: "#111827",
  },
  responsive: {
    tablet: "1199px",
    mobile: "767px",
  },
  font: {
    family: '"Pretendard Variable", Pretendard, sans-serif',
  },
};

declare module "@emotion/react" {
  export interface Theme {
    colors: typeof theme.colors;
    btn: typeof theme.btn;
    footer: typeof theme.footer;
    responsive: typeof theme.responsive;
    font: typeof theme.font;
  }
}
