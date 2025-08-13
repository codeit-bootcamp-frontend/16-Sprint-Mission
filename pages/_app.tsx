import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header";
import pretendard from "@/assets/fonts/Pretendard";
import { ReactNode } from "react";

type PageLayout = AppProps["Component"] & {
  getLayout?: (page: ReactNode) => ReactNode;
};

export default function App({ Component, pageProps }: AppProps) {
  const PageComponent = Component as PageLayout;

  const getLayout =
    PageComponent.getLayout ??
    ((page) => (
      <>
        <Header />
        <Component {...pageProps} />
      </>
    ));

  return (
    <div className={pretendard.className}>
      {getLayout(<PageComponent {...pageProps} />)}
    </div>
  );
}
