"use client";

import BulletButton from "@/components/Button/BulletButton";
import { FormEvent, useState } from "react";
import { UpdateItem } from "@/types/todo";
import ImageUploader from "../ImageUploader";
import MemoContainer from "../MemoContainer";

const TodoUpdateForm = ({ initialData }: { initialData: UpdateItem }) => {
  const [data, setData] = useState(initialData);
  const variant = data.isCompleted ? "done" : "todo";

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // patch item...
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="item-base flex justify-center mb-6 rounded-3xl cursor-default">
        <BulletButton variant={variant} />
        <h2 className="text-base font-bold underline underline-offset-4">
          {data.name}
        </h2>
      </div>

      <div className="flex gap-6">
        <ImageUploader className="shrink-0" />
        <MemoContainer />
      </div>
    </form>
  );
};

export default TodoUpdateForm;
