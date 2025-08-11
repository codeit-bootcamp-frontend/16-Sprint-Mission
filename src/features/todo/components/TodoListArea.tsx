"use client";

import Empty from "@/components/Empty";
import TodoList from "@/features/todo/components/TodoList";
import { TodoItemType } from "@/types/todoTypes";
import Image from "next/image";
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
        <Image
          src="/images/TodoTitle.svg"
          width={101}
          height={36}
          alt="TO DO title"
        />
        {todoData.length === 0 ? (
          <Empty
            src="/images/TodoEmptyIcon.svg"
            width={240}
            height={240}
            alt="할 일이 없어요."
          >
            할 일이 없어요. <br />
            TODO를 새롭게 추가해주세요!
          </Empty>
        ) : (
          <TodoList dataList={todoData} onUpdate={handleUpdateTodo} />
        )}
      </div>

      <div className="grow-1">
        <Image
          src="/images/DoneTitle.svg"
          width={97}
          height={36}
          alt="Done title"
        />
        {doneData.length === 0 ? (
          <Empty
            src="/images/DoneEmptyIcon.svg"
            width={240}
            height={240}
            alt="아직 다 한 일이 없어요."
          >
            아직 다 한 일이 없어요. <br />
            해야 할 일을 체크해보세요!
          </Empty>
        ) : (
          <TodoList dataList={doneData} onUpdate={handleUpdateTodo} />
        )}
      </div>
    </div>
  );
};

export default TodoListArea;
