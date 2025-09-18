"use client";
import { getQueryClient } from "@/utils/getQueryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import dynamic from "next/dynamic";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ToastContainer = dynamic(
  () => import("@/components/Toast/ToastContainer"),
  {
    ssr: false,
    loading: () => null,
  }
);

const QueryProvider = ({ children }: Props) => {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
      <ToastContainer />
    </QueryClientProvider>
  );
};

export default QueryProvider;
