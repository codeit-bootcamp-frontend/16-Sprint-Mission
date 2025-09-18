"use client";

import CheckItem from "@/components/CheckItem";
import useUpdateCheck from "@/hooks/useUpdateCheck";
import { TodoItemType } from "@/types/todoTypes";
import Link from "next/link";

interface Props {
  item: TodoItemType;
}

const TodoItem = ({ item }: Props) => {
  const { isCompleted, name, id } = item;
  const { mutate } = useUpdateCheck();

  const handleUpdateCheck = (isCompleted: boolean) => {
    mutate({ id: item.id, isCompleted });
  };

  return (
    <li className="mt-4">
      <CheckItem id={id} initValue={isCompleted} onChange={handleUpdateCheck}>
        <Link
          href={`/items/${id}`}
          className={"text-base group-has-checked:line-through break-keep"}
        >
          {name}
        </Link>
      </CheckItem>
    </li>
  );
};

export default TodoItem;
