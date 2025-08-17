"use client";

import CheckItem from "@/components/CheckItem";
import useUpdateCheck from "@/hooks/useUpdateCheck";
import { TodoItemType } from "@/types/todoTypes";

const TodoItem = ({ name, id, isCompleted }: TodoItemType) => {
  const { mutate } = useUpdateCheck(isCompleted);

  const handleUpdateCheck = (id: number) => {
    mutate(id);
  };

  return (
    <li className="mt-4">
      <CheckItem
        name={name}
        id={id}
        isCompleted={isCompleted}
        onUpdate={handleUpdateCheck}
      />
    </li>
  );
};

export default TodoItem;
