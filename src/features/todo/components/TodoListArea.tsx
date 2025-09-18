"use client";

import DoneEmpty from "@/app/_components/Empty/DoneEmpty";
import TodoEmpty from "@/app/_components/Empty/TodoEmpty";
import TodoContent from "@/features/todo/components/TodoContent";
import { todoQueries } from "@/features/todo/services/todoQuery";
import { useQuery } from "@tanstack/react-query";

const TodoListArea = () => {
  const { data } = useQuery(todoQueries.listOptions());

  if (!data) return <div>로딩중...</div>;

  const todoData = data.filter((item) => !item.isCompleted);
  const doneData = data.filter((item) => item.isCompleted);

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
        />
      </div>
    </div>
  );
};

export default TodoListArea;
