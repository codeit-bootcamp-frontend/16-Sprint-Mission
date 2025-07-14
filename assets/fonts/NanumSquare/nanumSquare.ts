import localFont from "next/font/local";

const nanumSquare = localFont({
  src: [
    {
      path: "./NanumSquareR.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./NanumSquareB.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-nanumSquare",
  display: "swap",
});

export default nanumSquare;
