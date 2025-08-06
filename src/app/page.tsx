"use client";

import { FormEvent, useState, useCallback } from "react";
import * as z from "zod/v4";
import Navbar from "./components/layout/Navbar";
import FormInput from "./components/common/FormInput";
import TodoList from "./components/todo/TodoList";
import { todoSchema } from "./schemas/todo";
import { TODO_FORM_INPUTS } from "./constants/form";
import { useAddTodo } from "./hooks/useTodoMutations";

const HomePage = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const addTodoMutation = useAddTodo();

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
          inputs={TODO_FORM_INPUTS}
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
