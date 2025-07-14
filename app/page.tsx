"use client";

import { useEffect, useState } from "react";
import AddTodoForm from "@/components/AddTodoForm";
import TodoList from "@/components/TodoList";
import DoneList from "@/components/DoneList";
import { Item } from "@/types/todo";
import { BASE_URL, TENANT_ID } from "@/constants/constants";
import axios from "@/lib/axios";

export default function Home() {
  const [todos, setTodos] = useState<Item[]>([]);
  const [dones, setDones] = useState<Item[]>([]);

  const moveToDone = (todo: Item) => {
    setTodos((prev) => prev.filter((item) => item.id !== todo.id));
    setDones((prev) => [todo, ...prev]);
  };

  const cancelDone = (todo: Item) => {
    setDones((prev) => prev.filter((item) => item.id !== todo.id));
    setTodos((prev) => [todo, ...prev]);
  };

  const fetchTodos = async () => {
    const res = await axios.get(`${BASE_URL}/${TENANT_ID}/items`);
    const results = res.data;

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
        <TodoList items={todos} onChange={moveToDone} />
        <DoneList items={dones} onChange={cancelDone} />
      </div>
    </>
  );
}
