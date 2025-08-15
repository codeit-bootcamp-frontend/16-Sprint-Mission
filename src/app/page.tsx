import TodoAddForm from "@/features/todo/components/TodoAddForm";
import TodoListArea from "@/features/todo/components/TodoListArea";
import { getTodoList } from "@/features/todo/services/todoApi";
import { getQueryClient } from "@/utils/getQueryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function Home() {
  const queryClient = getQueryClient();

  await queryClient.fetchQuery({
    queryKey: ["todos"],
    queryFn: getTodoList,
  });

  return (
    <div className="pt-6">
      <TodoAddForm />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <TodoListArea />
      </HydrationBoundary>
    </div>
  );
}
