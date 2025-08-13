import { ReactNode } from 'react';

import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

interface HydrationWrapperProps {
  prefetchQueries: { queryKey: string[]; queryFn: () => Promise<unknown> }[];
  children?: ReactNode;
}

const HydrationWrapper = async ({ prefetchQueries, children }: HydrationWrapperProps) => {
  const queryClient = new QueryClient();
  await Promise.all(
    prefetchQueries.map(({ queryKey, queryFn }) =>
      queryClient.prefetchQuery({ queryKey, queryFn }),
    ),
  );

  return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>;
};

export default HydrationWrapper;
