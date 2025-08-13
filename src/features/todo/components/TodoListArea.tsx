"use client";

import { startTransition, useOptimistic, useRef } from "react";

import DoneEmpty from "@/app/_components/Empty/DoneEmpty";
import TodoEmpty from "@/app/_components/Empty/TodoEmpty";
import TodoContent from "@/features/todo/components/TodoContent";
import { updateTodoItem } from "@/features/todo/services/todoApi";
import { TodoItemType } from "@/types/todoTypes";

interface Props {
  data: TodoItemType[];
  onUpdate?: (id: number) => void;
}

const TodoListArea = ({ data }: Props) => {
  const initialDataRef = useRef<TodoItemType[]>(data);
  const [optimisticState, toggleOptimisticState] = useOptimistic<
    TodoItemType[],
    number
  >(initialDataRef.current, (currentState, id) => {
    return currentState.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
  });

  const handleUpdateCheck = (id: number) => {
    startTransition(async () => {
      // 낙관적 업데이트
      toggleOptimisticState(id);

      const targetCheck = optimisticState.find(
        (todo) => todo.id === id
      )?.isCompleted;
      const updateData = { isCompleted: !targetCheck };

      try {
        await updateTodoItem(id, updateData);
        const updateTodo = initialDataRef.current.map((todo) =>
          todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        );
        initialDataRef.current = updateTodo;
      } catch (error) {
        console.error(error);
      }
    });
  };

  const todoData = optimisticState.filter((item) => !item.isCompleted);
  const doneData = optimisticState.filter((item) => item.isCompleted);

  return (
    <div className="flex gap-6 mt-10">
      <div className="grow-1 shrink-1 basis-0">
        <TodoContent
          titleSrc="/images/TodoTitle.svg"
          titleWidth={101}
          titleHeight={36}
          titleAlt="TO DO title"
          dataList={todoData}
          EmptyComponent={TodoEmpty}
          onUpdate={handleUpdateCheck}
        />
      </div>

      <div className="grow-1 shrink-1 basis-0">
        <TodoContent
          titleSrc="/images/DoneTitle.svg"
          titleWidth={97}
          titleHeight={36}
          titleAlt="Done title"
          dataList={doneData}
          EmptyComponent={DoneEmpty}
          onUpdate={handleUpdateCheck}
        />
      </div>
    </div>
  );
};

export default TodoListArea;
