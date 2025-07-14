"use client";

import { useEffect, useState } from "react";
import AddTodoForm from "@/components/AddTodoForm";
import ItemList from "@/components/ItemList";
import { Item } from "@/types/todo";
import { BASE_URL, TENANT_ID } from "@/constants/constants";
import axios from "@/lib/axios";

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);

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

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <AddTodoForm onAddTodo={fetchTodos} />
      <div className="flex gap-6 mt-10">
        <ItemList.Todo items={todos} onClick={handleChange} />
        <ItemList.Done items={dones} onClick={handleChange} />
      </div>
    </>
  );
}
