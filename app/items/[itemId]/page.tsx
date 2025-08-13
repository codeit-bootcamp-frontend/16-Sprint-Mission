import { getTodo } from "@/lib/api";
import getBlurImage from "@/lib/getBlurImage";
import TodoUpdateForm from "@/components/Todos/TodoUpdateForm";

interface ItemDetailPageProps {
  params: Promise<{ itemId: string }>;
}

const ItemDetailPage = async ({ params }: ItemDetailPageProps) => {
  const { itemId } = await params;
  const data = await getTodo(itemId);

  let blurImageUrl: string | undefined;
  if (data.imageUrl) blurImageUrl = await getBlurImage(data.imageUrl);

  return (
    <section className="mt-10">
      <TodoUpdateForm initialData={data} blurImageUrl={blurImageUrl} />
    </section>
  );
};

export default ItemDetailPage;
