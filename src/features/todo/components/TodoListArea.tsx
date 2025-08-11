"use client";

import DoneEmpty from "@/features/todo/components/DoneEmpty";
import TodoContent from "@/features/todo/components/TodoContent";
import TodoEmpty from "@/features/todo/components/TodoEmpty";
import { TodoItemType } from "@/types/todoTypes";
import { useEffect, useState } from "react";

interface Props {
  data: TodoItemType[];
  onUpdate?: (id: number) => void;
}

const TodoListArea = ({ data }: Props) => {
  const [todoAll, setTodoAll] = useState(data);

  const todoData = todoAll.filter((item) => !item.isCompleted);
  const doneData = todoAll.filter((item) => item.isCompleted);

  const handleUpdateTodo = (id: number) =>
    setTodoAll((prevTodoAll) => {
      return prevTodoAll.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );
    });

  useEffect(() => {
    setTodoAll(data);
  }, [data]);

  return (
    <div className="flex gap-6 mt-10">
      <div className="grow-1">
        <TodoContent
          titleSrc="/images/TodoTitle.svg"
          titleWidth={101}
          titleHeight={36}
          titleAlt="TO DO title"
          dataList={todoData}
          EmptyComponent={TodoEmpty}
          onUpdate={handleUpdateTodo}
        />
      </div>

      <div className="grow-1">
        <TodoContent
          titleSrc="/images/DoneTitle.svg"
          titleWidth={97}
          titleHeight={36}
          titleAlt="Done title"
          dataList={doneData}
          EmptyComponent={DoneEmpty}
          onUpdate={handleUpdateTodo}
        />
      </div>
    </div>
  );
};

export default TodoListArea;
