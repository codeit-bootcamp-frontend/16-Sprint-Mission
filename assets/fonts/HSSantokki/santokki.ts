import localFont from "next/font/local";

const santokki = localFont({
  src: [
    {
      path: "./HSSantokki-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-santokki",
  display: "swap",
});

export default santokki;
