import TodoAddForm from "@/features/todo/components/TodoAddForm";
import TodoListArea from "@/features/todo/components/TodoListArea";
import { getTodoList } from "@/features/todo/services/todoApi";
import { getQueryClient } from "@/utils/getQueryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function Home() {
  const queryClient = getQueryClient();
  const data = await getTodoList();

  return (
    <div className="pt-6">
      <TodoAddForm />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <TodoListArea data={data} />
      </HydrationBoundary>
    </div>
  );
}
