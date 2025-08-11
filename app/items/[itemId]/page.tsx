import TodoUpdateForm from "@/components/Todos/TodoUpdateForm";
import { getTodo } from "@/lib/api";

interface ItemDetailPageProps {
  params: Promise<{ itemId: string }>;
}

const ItemDetailPage = async ({ params }: ItemDetailPageProps) => {
  const { itemId } = await params;
  const data = await getTodo(itemId);

  return (
    <section className="mt-10">
      <TodoUpdateForm initialData={data} />
    </section>
  );
};

export default ItemDetailPage;
