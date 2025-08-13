"use client";

import { ChangeEvent, useActionState, useEffect, useState } from "react";

import { createTodoItemAction } from "@/app/actions";
import Button from "@/components/Button";

const TodoAddForm = () => {
  const [state, formAction, isPending] = useActionState(
    createTodoItemAction,
    null
  );
  const [todoText, setTodoText] = useState("");
  const isValid = todoText.trim().length === 0 || isPending;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTodoText(e.target.value);

  useEffect(() => {
    if (state) {
      setTodoText("");
    }
  }, [state]);

  return (
    <form className="flex gap-5" action={formAction}>
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
