"use client";

import BulletButton from "@/components/Button/BulletButton";
import { FormEvent, useState } from "react";
import { UpdateItem } from "@/types/todo";
import ImageUploader from "../ImageUploader";
import MemoContainer from "../MemoContainer";
import Button from "../Button";
import ChkIcon from "@/assets/images/ico-check.svg";
import DeleteIcon from "@/assets/images/ico-x.svg";

const TodoUpdateForm = ({ initialData }: { initialData: UpdateItem }) => {
  const [data, setData] = useState(initialData);
  const variant = data.isCompleted ? "done" : "todo";

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // patch item...
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <div className="item-base flex justify-center mb-6 rounded-3xl cursor-default">
        <BulletButton variant={variant} />
        <h2 className="text-base font-extrabold underline underline-offset-4">
          {data.name}
        </h2>
      </div>

      <div className="flex gap-6">
        <ImageUploader className="shrink-0" />
        <MemoContainer />
      </div>

      <div className="flex gap-4 mt-6 self-end">
        <Button variant="success" disabled={true}>
          <ChkIcon className="w-4 h-4 mr-1" /> 수정 완료
        </Button>
        <Button variant="danger">
          <DeleteIcon className="w-4 h-4 mr-1" />
          삭제하기
        </Button>
      </div>
    </form>
  );
};

export default TodoUpdateForm;
