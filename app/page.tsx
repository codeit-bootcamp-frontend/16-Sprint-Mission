"use client";

import { useEffect, useState } from "react";
import AddTodoForm from "@/components/AddTodoForm";
import TodoList from "@/components/TodoList";
import DoneList from "@/components/DoneList";
import { Item } from "@/types/todo";
import { BASE_URL, TENANT_ID } from "@/constants/constants";

export default function Home() {
  const [todos, setTodos] = useState<Item[]>([]);
  const [dones, setDones] = useState<Item[]>([]);

  const fetchTodos = async () => {
    const res = await fetch(`${BASE_URL}/${TENANT_ID}/items`);
    const results = await res.json();

    const unCompleted = results.filter((data: Item) => !data.isCompleted);
    const completed = results.filter((data: Item) => data.isCompleted);

    setTodos(unCompleted);
    setDones(completed);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <AddTodoForm onAddTodo={fetchTodos} />
      <div className="flex gap-6 mt-10">
        <TodoList items={todos} onDone={fetchTodos} />
        <DoneList items={dones} onDone={fetchTodos} />
      </div>
    </>
  );
}
