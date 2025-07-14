"use client";

import { FormEvent, useState } from "react";
import * as z from "zod/v4";
import Navbar from "./components/Navbar";
import FormInput from "./components/FormInput";
import TodoList from "./components/TodoList";
import { todoSchema } from "./schemas/todo";
import { addTodo } from "./api/post/addTodo";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// input값들 설정하는 배열의 타입
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

  // 뮤테이션 정의: 투두 입력해서 api(post) 성공 시 ["todos"] 쿼리들 refetch
  const addTodoMutation = useMutation<void, Error, string>({
    mutationFn: (name: string) => addTodo(name),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos", false] });
    },
  });

  // submit했을 때 함수
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // formData객체 생성해서 내부 input입력값들 모두 비제어로 접근
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // zod용 schema로 유효성 검사
    const validation = todoSchema.safeParse(data);

    // zod로 유효성 검사 실패 시에 에러 내용 및 return
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

      // ❌ 실패할 경우 에러 메세지 추가
      setErrors(newErrors);
      return;
    }

    // ✅ 성공한 경우 에러 초기화
    setErrors({});

    // 유효성 검사 통과할 시 입력값들 제출
    addTodoMutation.mutate(validation.data.todo);

    // 제출 성공 시
    e.currentTarget.reset();
  };

  return (
    <>
      <Navbar />
      <main className="px-4 md:px-6 lg:px-[360px]">
        <FormInput
          inputs={inputs}
          handleSubmit={handleSubmit}
          containerStyle="flex gap-4"
          errors={errors}
        />
        <section
          className="flex flex-col justify-between pt-10 gap-6
        md:flex-row
        lg:flex-row
        "
        >
          <TodoList isDone={false} />
          <TodoList isDone={true} />
        </section>
      </main>
    </>
  );
};

export default HomePage;
