import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { getItemList } from '@/app/api/todo';
import TodoContent from '@/components/TodoContent';

export default async function Page() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: ['todos'], queryFn: getItemList });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <div className='flex justify-center pt-6 bg-gray-50 min-h-[calc(100vh-3.75rem)]'>
          <TodoContent />
        </div>
      </HydrationBoundary>
    </>
  );
}
