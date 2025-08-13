"use client";

import TodoForm from "@/components/Todos/TodoForm";
import ItemList from "@/components/ItemList";
import { useQuery } from "@tanstack/react-query";
import { getTodos } from "@/lib/api";

const TodoClient = () => {
  const { data: items = [] } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
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
