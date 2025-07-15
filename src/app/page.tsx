"use client";

import { FormEvent, useState, useCallback } from "react";
import * as z from "zod/v4";
import Navbar from "./components/Navbar";
import FormInput from "./components/FormInput";
import TodoList from "./components/TodoList";
import { todoSchema } from "./schemas/todo";
import { addTodo } from "./api/post/addTodo";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const inputs = [
  {
    id: 1,
    type: "text",
    name: "todo",
    placeholder: "할 일을 입력해주세요.",
  },
];

const HomePage = () => {
  const queryClient = useQueryClient();
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Todo 타입 정의
  type Todo = {
    id: number;
    name: string;
    isCompleted: boolean;
  };

  // 뮤테이션 컨텍스트 타입 정의
  type MutationContext = {
    previousTodos?: Todo[];
  };

  const addTodoMutation = useMutation<void, Error, string, MutationContext>({
    mutationFn: (name: string) => addTodo(name),
    onMutate: async (newTodo): Promise<MutationContext> => {
      // 낙관적 업데이트
      await queryClient.cancelQueries({ queryKey: ["todos"] });

      const previousTodos = queryClient.getQueryData<Todo[]>(["todos"]);

      queryClient.setQueryData<Todo[]>(["todos"], (old) => {
        if (!old) return [];
        return [
          ...old,
          {
            id: Date.now(), // 임시 ID
            name: newTodo,
            isCompleted: false,
          },
        ];
      });

      return { previousTodos };
    },
    onError: (err, variables, context) => {
      // 에러 발생 시 이전 상태로 롤백
      if (context?.previousTodos) {
        queryClient.setQueryData(["todos"], context.previousTodos);
      }
    },
    onSettled: () => {
      // 최종적으로 서버 데이터와 동기화
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());

      const validation = todoSchema.safeParse(data);

      if (!validation.success) {
        const flattened = z.flattenError(validation.error);
        const newErrors: Record<string, string> = {};
        for (const key in flattened.fieldErrors) {
          const messages =
            flattened.fieldErrors[key as keyof typeof flattened.fieldErrors];
          if (messages && messages.length > 0) {
            newErrors[key] = messages.join(" ");
          }
        }
        setErrors(newErrors);
        return;
      }

      setErrors({});
      addTodoMutation.mutate(validation.data.todo);
      e.currentTarget.reset();
    },
    [addTodoMutation]
  );

  return (
    <>
      <Navbar />
      <main className="px-4 pb-4 md:px-6 lg:px-[360px]">
        <FormInput
          inputs={inputs}
          handleSubmit={handleSubmit}
          containerStyle="flex gap-4"
          errors={errors}
        />
        <section className="flex flex-col justify-between pt-10 gap-6 md:flex-row lg:flex-row">
          <TodoList isDone={false} />
          <TodoList isDone={true} />
        </section>
      </main>
    </>
  );
};

export default HomePage;
