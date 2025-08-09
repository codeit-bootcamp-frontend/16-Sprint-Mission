import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { getItemList } from '@/app/api/todo';
import TodoPage from '@/components/TodoPage';

export default async function Page() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: ['todos'], queryFn: getItemList });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <TodoPage />
      </HydrationBoundary>
    </>
  );
}
