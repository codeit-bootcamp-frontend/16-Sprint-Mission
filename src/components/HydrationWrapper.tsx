import { ReactNode } from 'react';

import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

interface HydrationWrapperProps {
  prefetchQueries: { queryKey: string[]; queryFn: () => Promise<unknown> }[];
  children?: ReactNode;
}

const HydrationWrapper = async ({ prefetchQueries, children }: HydrationWrapperProps) => {
  const queryClient = new QueryClient();

  await Promise.all(
    prefetchQueries.map(async ({ queryKey, queryFn }) => {
      try {
        queryClient.prefetchQuery({ queryKey, queryFn });
      } catch (err) {
        console.error('prefetchQuery 실패:', queryKey, err);
        queryClient.setQueryData(queryKey, []);
      }
    }),
  );
  return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>;
};

export default HydrationWrapper;
