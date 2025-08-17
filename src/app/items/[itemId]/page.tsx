import TodoDetailArea from "@/features/todo/components/TodoDetailArea";
import { getTodoDetail } from "@/features/todo/services/todoApi";

interface Props {
  params: Promise<{ itemId: string }>;
}

const TodoDetailPage = async ({ params }: Props) => {
  const { itemId } = await params;
  const detailInfo = await getTodoDetail(itemId);

  return (
    <div className="max-w-[996px] mx-auto pt-6">
      <TodoDetailArea {...detailInfo} />
    </div>
  );
};

export default TodoDetailPage;
