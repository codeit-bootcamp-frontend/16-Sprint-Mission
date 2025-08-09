"use client";

import BulletButton from "@/components/Button/BulletButton";
import { FormEvent, useEffect, useState } from "react";
import { UpdateItem } from "@/types/todo";
import ImageUploader from "@/components/ImageUploader";
import MemoContainer from "@/components/MemoContainer";
import Button from "@/components/Button";
import ChkIcon from "@/assets/images/ico-check.svg";
import DeleteIcon from "@/assets/images/ico-x.svg";

const TodoUpdateForm = ({ initialData: data }: { initialData: UpdateItem }) => {
  const [name, setName] = useState(data.name);
  const [image, setImage] = useState<string | undefined>(data.imageUrl);
  const [memo, setMemo] = useState(data.memo);
  const [isCompleted, setIsCompleted] = useState(data.isCompleted);
  const [isUpdated, setIsUpdated] = useState(false);
  const variant = data.isCompleted ? "done" : "todo";

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const payload = {
      name,
      imageUrl: image,
      memo,
      isCompleted,
    };

    console.log(payload);

    // patch item...
  };

  useEffect(() => {
    const checkUpdate =
      data.name !== name ||
      data.imageUrl !== image ||
      data.isCompleted !== isCompleted ||
      data.memo !== memo;

    setIsUpdated(checkUpdate);
  }, [data, name, image, isCompleted, memo]);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <div className="item-base flex justify-center mb-6 rounded-3xl cursor-default">
        <BulletButton variant={variant} type="button" />
        <h2 className="py-2 text-base font-extrabold underline underline-offset-4">
          <input
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="block bg-transparent field-sizing-content"
            autoComplete="off"
          />
        </h2>
      </div>

      <div className="flex gap-6">
        <ImageUploader className="shrink-0" onUploaded={(v) => setImage(v)} />
        <MemoContainer onChange={(v) => setMemo(v)} />
      </div>

      <div className="flex gap-4 mt-6 self-end">
        <Button variant="success" disabled={!isUpdated} type="submit">
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
