import TodoDetailArea from "@/features/todo/components/TodoDetailArea";
import { todoQueries } from "@/features/todo/services/todoQuery";
import { getQueryClient } from "@/utils/getQueryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

interface Props {
  params: Promise<{ itemId: string }>;
}

const TodoDetailPage = async ({ params }: Props) => {
  const { itemId } = await params;
  const queryClient = getQueryClient();

  await queryClient.fetchQuery(todoQueries.detailOptions(itemId));

  return (
    <div className="max-w-[996px] mx-auto pt-6">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <TodoDetailArea itemId={itemId} />
      </HydrationBoundary>
    </div>
  );
};

export default TodoDetailPage;
