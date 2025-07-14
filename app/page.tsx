"use client";

import { useEffect, useState } from "react";
import AddTodoForm from "@/components/AddTodoForm";
import TodoList from "@/components/TodoList";
import DoneList from "@/components/DoneList";

interface Todo {
  id: string;
  name: string;
  isCompleted: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [dones, setDones] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    const res = await fetch(
      `https://assignment-todolist-api.vercel.app/api/sdsample/items/?page=1&pageSize=10`
    );
    const results = await res.json();

    const unCompleted = results.filter((data: Todo) => !data.isCompleted);
    const completed = results.filter((data: Todo) => data.isCompleted);

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
