import "@/styles/globals.css";
import { ReactNode, useState } from "react";
import type { AppProps } from "next/app";
import Header from "@/components/Header";
import pretendard from "@/assets/fonts/Pretendard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type PageLayout = AppProps["Component"] & {
  getLayout?: (page: ReactNode) => ReactNode;
};

export default function App({ Component, pageProps }: AppProps) {
  const PageComponent = Component as PageLayout;
  const [queryClient] = useState(() => new QueryClient());

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
      <QueryClientProvider client={queryClient}>
        {getLayout(<PageComponent {...pageProps} />)}
      </QueryClientProvider>
    </div>
  );
}
