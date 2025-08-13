import { ReactNode } from "react";
import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";
import type { QueryKey, QueryFunction } from "@tanstack/react-query";

interface QueryType {
  queryKey: QueryKey;
  queryFn: QueryFunction;
}

interface Props {
  children: ReactNode;
  queries: QueryType[] | QueryType;
}

const PrefetchHydration = async ({ children, queries }: Props) => {
  const queryClient = new QueryClient();
  const queriesArr = Array.isArray(queries) ? queries : [queries];

  // 단일 queryKey 또는 여러 개의 queryKey를 prefetch
  for (const { queryKey, queryFn } of queriesArr) {
    await queryClient.prefetchQuery({ queryKey, queryFn });
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
};

export default PrefetchHydration;
