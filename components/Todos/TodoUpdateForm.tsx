"use client";

import BulletButton from "@/components/Button/BulletButton";
import { FormEvent } from "react";
import { Item } from "@/types/todo";
import ImageUploader from "@/components/ImageUploader";
import MemoContainer from "@/components/MemoContainer";
import Button from "@/components/Button";
import ChkIcon from "@/assets/images/ico-check.svg";
import DeleteIcon from "@/assets/images/ico-x.svg";
import useTodoUpdate from "@/hooks/useTodoUpdate";
import useTodoMutations from "@/hooks/useTodoMutations";

interface Props {
  initialData: Item;
  blurImageUrl: string | undefined;
}

const TodoUpdateForm = ({ initialData, blurImageUrl }: Props) => {
  // 상태 관리
  const {
    data,
    name,
    setName,
    image,
    setImage,
    memo,
    setMemo,
    isCompleted,
    setIsCompleted,
    isUpdated,
    variant,
  } = useTodoUpdate(initialData);

  // api 요청
  const { handleUpdate, handleDelete, isUpdatePending, isDeletePending } =
    useTodoMutations();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const bodyData = {
      name,
      imageUrl: image ?? "",
      memo: memo ?? "",
      isCompleted,
    };

    handleUpdate({ id: data.id as string, bodyData: { ...bodyData } });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <div className="item-base flex justify-center mb-6 rounded-3xl cursor-default">
        <BulletButton
          variant={variant}
          type="button"
          onClick={() => setIsCompleted((prev) => !prev)}
        />
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
        <ImageUploader
          initialData={data.imageUrl}
          className="shrink-0"
          onUploaded={(v) => setImage(v)}
          blurImageUrl={blurImageUrl}
        />
        <MemoContainer initialData={data.memo} onChange={(v) => setMemo(v)} />
      </div>

      <div className="flex gap-4 mt-6 self-end">
        <Button
          variant="success"
          disabled={!isUpdated || isUpdatePending}
          type="submit"
        >
          <ChkIcon className="w-4 h-4 mr-1" />{" "}
          {isUpdatePending ? "수정중..." : "수정 완료"}
        </Button>
        <Button
          type="button"
          variant="danger"
          onClick={() => handleDelete(data.id as string)}
        >
          <DeleteIcon className="w-4 h-4 mr-1" />
          {isDeletePending ? "삭제중..." : "삭제하기"}
        </Button>
      </div>
    </form>
  );
};

export default TodoUpdateForm;
