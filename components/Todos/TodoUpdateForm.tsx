"use client";

import BulletButton from "@/components/Button/BulletButton";
import { FormEvent, useState } from "react";
import { UpdateItem } from "@/types/todo";

const TodoUpdateForm = ({ initialData }: { initialData: UpdateItem }) => {
  const [data, setData] = useState(initialData);
  const variant = data.isCompleted ? "done" : "todo";

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // patch item...
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="item-base flex justify-center rounded-3xl cursor-default">
        <BulletButton variant={variant} />
        <strong className="underline underline-offset-4">{data.name}</strong>
      </h2>
    </form>
  );
};

export default TodoUpdateForm;
