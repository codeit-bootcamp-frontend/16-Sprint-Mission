import "./globals.css";
import { ReactNode } from "react";
import localFont from "next/font/local";
import SVGSprites from "./components/SVGSprites";

// NanumSquare Regular
const NanumSquareR = localFont({
  src: "./ui/font/NanumSquareR.woff2",
  display: "swap",
  weight: "400",
  variable: "--font-nanumsquareR",
});

// NanumSquare Bold
const NanumSquareB = localFont({
  src: "./ui/font/NanumSquareB.woff2",
  display: "swap",
  weight: "700 800",
  variable: "--font-nanumsquareB",
});

// NanumSquare ExtraBold
const NanumSquareEB = localFont({
  src: "./ui/font/NanumSquareEB.woff2",
  display: "swap",
  weight: "800",
  variable: "--font-nanumsquareEB",
});

const metadata = {
  title: "do it;",
  description: "오늘 할 일은 오늘 하자 do it;",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="ko"
      className={`${NanumSquareR.variable} ${NanumSquareB.variable} ${NanumSquareEB.variable}`}
    >
      <body className={NanumSquareR.className}>
        <SVGSprites/>
        {children}
      </body>
    </html>
  );
}
