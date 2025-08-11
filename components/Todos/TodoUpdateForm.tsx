"use client";

import BulletButton from "@/components/Button/BulletButton";
import { FormEvent, useEffect, useState } from "react";
import { Item } from "@/types/todo";
import ImageUploader from "@/components/ImageUploader";
import MemoContainer from "@/components/MemoContainer";
import Button from "@/components/Button";
import ChkIcon from "@/assets/images/ico-check.svg";
import DeleteIcon from "@/assets/images/ico-x.svg";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { updateTodo } from "@/lib/api";

const TodoUpdateForm = ({ initialData }: { initialData: Item }) => {
  const [data, setData] = useState(initialData);

  const [name, setName] = useState(data.name);
  const [image, setImage] = useState<string | undefined>(data.imageUrl);
  const [memo, setMemo] = useState(data.memo);
  const [isCompleted, setIsCompleted] = useState(data.isCompleted);
  const variant = data.isCompleted ? "done" : "todo";

  const [isUpdated, setIsUpdated] = useState(false);

  const queryClient = new QueryClient();

  const { mutate: updateStatus, isPending } = useMutation({
    mutationFn: updateTodo,
    retry: 1,
    retryDelay: 0.3,
    onMutate: async ({ itemId, bodyData }) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });

      const prevItems = queryClient.getQueryData<Item[]>(["todos"]);
      if (prevItems) {
        queryClient.setQueryData<Item[]>(["todos"], (oldItems) => {
          if (!oldItems) return;

          return oldItems.map((item) =>
            item.id === itemId ? { ...bodyData } : item
          );
        });
      }

      return { prevItems };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      alert("수정 성공!");

      // 수정 성공 시 최신 데이터로 업데이트해서 '수정하기' 버튼 비활성화
      setData({ name, imageUrl: image, memo, isCompleted, id: data.id });
    },
    onError: (_err, _data, context) => {
      if (context?.prevItems) {
        queryClient.setQueryData(["todos"], context.prevItems);
      }
      alert("투두 업데이트에 실패했습니다.");
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const bodyData = {
      name,
      imageUrl: image,
      memo,
      isCompleted,
    };

    updateStatus({ itemId: data.id, bodyData });
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
        <ImageUploader
          initialData={data.imageUrl}
          className="shrink-0"
          onUploaded={(v) => setImage(v)}
        />
        <MemoContainer initialData={data.memo} onChange={(v) => setMemo(v)} />
      </div>

      <div className="flex gap-4 mt-6 self-end">
        <Button
          variant="success"
          disabled={!isUpdated || isPending}
          type="submit"
        >
          <ChkIcon className="w-4 h-4 mr-1" />{" "}
          {isPending ? "수정중..." : "수정 완료"}
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
