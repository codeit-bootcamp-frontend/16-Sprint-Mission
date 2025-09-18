import { getItem } from '@/app/api/todo';
import ItemDetailContent from '@/app/components/ItemDetailContent';
import HydrationWrapper from '@/components/HydrationWrapper';

interface ItemPageProps {
  params: Promise<{ itemId: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}
const ItemPage = async ({ params }: ItemPageProps) => {
  const { itemId } = await params;
  return (
    <HydrationWrapper
      prefetchQueries={[
        { queryKey: ['itemDetail', itemId], queryFn: () => getItem(Number(itemId)) },
      ]}
    >
      <div className='flex justify-center bg-gray-50 min-h-[calc(100vh-3.75rem)]'>
        <ItemDetailContent itemId={Number(itemId)} />
      </div>
    </HydrationWrapper>
  );
};

export default ItemPage;
