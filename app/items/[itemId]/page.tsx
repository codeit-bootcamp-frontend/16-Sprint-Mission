import TodoUpdateForm from "@/components/Todos/TodoUpdateForm";
import { getTodo } from "@/lib/api";

interface ItemDetailPageProps {
  params: { itemId: string };
  variant: string;
}

const ItemDetailPage = async ({ params }: ItemDetailPageProps) => {
  const data = await getTodo(params.itemId);

  return (
    <section className="mt-10">
      <TodoUpdateForm initialData={data} />
    </section>
  );
};

export default ItemDetailPage;
