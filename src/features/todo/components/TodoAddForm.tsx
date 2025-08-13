"use client";

import Button from "@/components/Button";
import { createTodoItem } from "@/features/todo/services/todoApi";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useRef, useState } from "react";

const TodoAddForm = () => {
  const [todoText, setTodoText] = useState("");
  const loadingRef = useRef<boolean>(false);
  const router = useRouter();
  const isValid = !(todoText.trim().length > 0) || loadingRef.current;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTodoText(e.target.value);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loadingRef.current) return; // 중복 요청 방지
    try {
      loadingRef.current = true;
      await createTodoItem(todoText.trim());
      router.refresh(); // 서버컴포넌트 새로고침
    } catch (error) {
      console.error(error);
    } finally {
      setTodoText(""); // input 초기화
      loadingRef.current = false;
    }
  };

  return (
    <form className="flex gap-5" onSubmit={handleSubmit}>
      <input
        type="text"
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
