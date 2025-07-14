"use client";

import AddTodoForm from "@/components/AddTodoForm";
import TodoList from "@/components/TodoList";
import DoneList from "@/components/DoneList";

export default function Home() {
  return (
    <>
      <AddTodoForm />
      <div className="flex mt-10">
        <TodoList todos={undefined} />
        <DoneList dones={undefined} />
      </div>
    </>
  );
}
