import { getItemListServer } from '@/app/api/todo';
import HydrationWrapper from '@/components/HydrationWrapper';
import TodoContent from '@/components/TodoContent';

export default async function Page() {
  return (
    <>
      <HydrationWrapper prefetchQueries={[{ queryKey: ['todos'], queryFn: getItemListServer }]}>
        <div className='flex justify-center pt-6 bg-gray-50 min-h-[calc(100vh-3.75rem)]'>
          <TodoContent />
        </div>
      </HydrationWrapper>
    </>
  );
}
