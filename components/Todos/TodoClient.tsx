"use client";

import { useState } from "react";
import TodoForm from "@/components/Todos/TodoForm";
import ItemList from "@/components/ItemList";
import { Item } from "@/types/todo";
import { BASE_URL, TENANT_ID } from "@/constants/constants";
import axios from "@/lib/axios";

interface TodoClientProps {
  initialItems: Item[];
}

const TodoClient = ({ initialItems }: TodoClientProps) => {
  const [items, setItems] = useState<Item[]>(initialItems);

  const handleChange = (updatedItem: Item) => {
    setItems((prev) =>
      prev.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
  };

  const fetchTodos = async () => {
    const res = await axios.get(`${BASE_URL}/${TENANT_ID}/items`);
    const results = res.data;
    setItems(results);
  };

  const todos = items.filter((i) => !i.isCompleted);
  const dones = items.filter((i) => i.isCompleted);

  return (
    <>
      <TodoForm onAddTodo={fetchTodos} />
      <div className="flex gap-6 mt-10">
        <ItemList.Todo items={todos} onClick={handleChange} />
        <ItemList.Done items={dones} onClick={handleChange} />
      </div>
    </>
  );
};

export default TodoClient;
