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
      const result = await queryFn();
      console.log(result);
      return queryClient.prefetchQuery({
        queryKey,
        queryFn: async () => result,
      });
    }),
  );

  return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>;
};

export default HydrationWrapper;
