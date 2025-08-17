"use client";
import CheckItem from "@/components/CheckItem";
import Image from "next/image";

import PlustIcon from "@/assets/icons/PlusIcon.svg";
import Button from "@/components/Button";
import clsx from "clsx";
import { TodoResponseType } from "@/types/todoTypes";

const TodoDetailArea = (props: TodoResponseType) => {
  const { id, imageUrl, isCompleted, memo, name } = props;

  const handleUpdateCheck = (id: number) => {
    console.log(id);
  };

  return (
    <form>
      <CheckItem
        id={id}
        isCompleted={isCompleted}
        name={name}
        variant="detail"
        onUpdate={handleUpdateCheck}
      />
      <div className="flex gap-6 mt-6 h-[311px] overflow-hidden">
        <div className="flex items-center justify-center relative w-[384px] border-2 border-dashed border-slate300 bg-slate-50 rounded-3xl shrink-0 grow-0 basis-auto">
          {imageUrl === null ? (
            <Image
              src="/images/FileUploadIcon.svg"
              width={64}
              height={64}
              alt="이미지를 업로드해주세요."
            />
          ) : (
            <Image
              src={imageUrl}
              alt="투두 이미지"
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute bottom-[16px] right-[16px] w-16 h-16">
            <input
              type="file"
              name="imageUrl"
              id="imageUrl"
              className="hidden"
            />
            <label
              htmlFor="imageUrl"
              className={clsx(
                "flex items-center justify-center w-full h-full rounded-full cursor-pointer",
                imageUrl === null
                  ? "bg-slate200"
                  : "border-2 border-slate900 bg-slate900/0.5"
              )}
            >
              {imageUrl === null ? (
                <PlustIcon className="w-6 h-6 text-slate500" />
              ) : (
                <Image
                  src="/images/ImageEditIcon.svg"
                  width={24}
                  height={24}
                  alt="이미지 수정 버튼 아이콘"
                />
              )}
            </label>
          </div>
        </div>
        <div className="flex flex-col py-6 grow-1 bg-[url(/images/MemoLineBg.jpg)] bg-top bg-repeat-y rounded-3xl">
          <h3 className="mb-6 text-base text-center text-amber font-extrabold shrink-0">
            Memo
          </h3>
          <div className="flex items-center px-[10px] justify-center grow-1 overflow-hidden">
            <textarea
              name="memo"
              defaultValue={memo ?? ""}
              placeholder="메모를 입력해주세요."
              className="custom-scroll px-[6px] resize-none field-sizing-content max-w-full max-h-full"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-end mt-6">
        <Button type="button" variant="edit" disabled>
          수정 완료
        </Button>
        <Button type="button" variant="delete">
          삭제하기
        </Button>
      </div>
    </form>
  );
};

export default TodoDetailArea;
