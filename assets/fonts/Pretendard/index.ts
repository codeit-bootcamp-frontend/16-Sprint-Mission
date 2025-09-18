import localFont from "next/font/local";

const pretendard = localFont({
  src: [
    {
      path: "./Pretendard-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Pretendard-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Pretendard-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-pretendard",
  display: "swap",
});

export default pretendard;
