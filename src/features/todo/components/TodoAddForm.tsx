"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import Button from "@/components/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodoItem } from "@/features/todo/services/todoApi";
import { TodoItemType } from "@/types/todoTypes";
import { todoQueries } from "@/features/todo/services/todoQuery";

const QUERY_KEY_TODOLIST = todoQueries.list();

const TodoAddForm = () => {
  const [todoText, setTodoText] = useState("");
  const queryClient = useQueryClient();

  const todoAddMutation = useMutation({
    mutationFn: async (name: string) => {
      await createTodoItem(name);
    },
    onMutate: async (name: string) => {
      await queryClient.cancelQueries({ queryKey: QUERY_KEY_TODOLIST });

      const prevTodos: TodoItemType[] | undefined = queryClient.getQueryData([
        "todos",
      ]);

      const newTodos: TodoItemType = {
        id: 9999, // 임시 id 값 설정
        name: name,
        isCompleted: false,
      };

      queryClient.setQueryData(QUERY_KEY_TODOLIST, (todos: TodoItemType[]) => [
        newTodos,
        ...todos,
      ]);

      return { prevTodos };
    },
    onError: (d, e, context) => {
      queryClient.setQueryData(QUERY_KEY_TODOLIST, context?.prevTodos);
      // 토스트 생성 안내 띄워주기
    },
    onSettled: () => {
      // id 프로퍼티 값 갱신
      queryClient.invalidateQueries({ queryKey: QUERY_KEY_TODOLIST });
    },
  });
  const isValid = todoText.trim().length === 0 || todoAddMutation.isPending;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    todoAddMutation.mutate(todoText);
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
