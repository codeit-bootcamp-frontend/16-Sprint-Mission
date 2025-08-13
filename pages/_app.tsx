import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header";
import pretendard from "@/assets/fonts/Pretendard";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={pretendard.className}>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
