import "@/styles/globals.css";
import { ReactNode, useState } from "react";
import type { AppProps } from "next/app";
import pretendard from "@/assets/fonts/Pretendard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainLayout from "@/components/layouts/MainLayout";

type PageLayout = AppProps["Component"] & {
  getLayout?: (page: ReactNode) => ReactNode;
};

export default function App({ Component, pageProps }: AppProps) {
  const PageComponent = Component as PageLayout;
  const [queryClient] = useState(() => new QueryClient());

  const getLayout =
    PageComponent.getLayout ?? ((page) => <MainLayout>{page}</MainLayout>);

  return (
    <div className={pretendard.className}>
      <QueryClientProvider client={queryClient}>
        {getLayout(<PageComponent {...pageProps} />)}
      </QueryClientProvider>
    </div>
  );
}
