"use client";

import { useEffect } from "react";
import TodoForm from "@/components/Todos/TodoForm";
import ItemList from "@/components/ItemList";
import { Item } from "@/types/todo";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { getTodos } from "@/lib/api";

interface TodoClientProps {
  initialItems: Item[];
}

const TodoClient = ({ initialItems }: TodoClientProps) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.setQueryData(["todos"], initialItems);
  }, [queryClient, initialItems]);

  const { data: items = [] } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
    initialData: initialItems,
    staleTime: Infinity,
  });

  const todos = items.filter((i) => !i.isCompleted);
  const dones = items.filter((i) => i.isCompleted);

  return (
    <>
      <TodoForm />
      <div className="flex gap-6 mt-10">
        <ItemList.Todo items={todos} />
        <ItemList.Done items={dones} />
      </div>
    </>
  );
};

export default TodoClient;
