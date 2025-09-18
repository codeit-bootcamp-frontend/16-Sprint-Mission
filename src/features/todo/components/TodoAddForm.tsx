"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import Button from "@/components/Button";
import useCreateTodo from "@/hooks/useCreateTodo";

const TodoAddForm = () => {
  const [todoText, setTodoText] = useState("");

  const { mutate, isPending } = useCreateTodo();
  const isValid = todoText.trim().length === 0 || isPending;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(todoText);
    setTodoText("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  return (
    <form className="flex gap-5" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={todoText}
        onChange={handleChange}
        placeholder="할 일을 입력해주세요"
        className="px-6 border-2 border-slate900 bg-slate100 rounded-3xl grow-1 shadow-custom placeholder:text-slate500"
      />
      <Button disabled={isValid} variant="add" type="submit">
        추가하기
      </Button>
    </form>
  );
};

export default TodoAddForm;
