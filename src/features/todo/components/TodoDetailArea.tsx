"use client";
import CheckItem from "@/components/CheckItem";

import Button from "@/components/Button";
import { UpdateTodoData } from "@/types/todoTypes";
import { Controller, useForm } from "react-hook-form";
import TodoThumbnail from "@/features/todo/components/TodoThumbnail";
import TodoMemo from "@/features/todo/components/TodoMemo";
import { useQuery } from "@tanstack/react-query";
import { todoQueries } from "@/features/todo/services/todoQuery";
import LoadingArea from "@/components/LoadingArea";
import Link from "next/link";
import useUpdateTodo from "@/hooks/useUpdateTodo";
import useDeleteTodo from "@/hooks/useDeleteTodo";
import LoadingSpinner from "@/components/LoadingSpinner";

const TodoDetailArea = ({ itemId }: { itemId: string }) => {
  const { data, isLoading: isDataLoading } = useQuery(
    todoQueries.detailOptions(itemId)
  );
  const { mutate: updateMutate, isPending: isUpdatePending } = useUpdateTodo();
  const { mutate: deleteMutation, isPending: isDeletePending } =
    useDeleteTodo();

  if (isDataLoading) return <LoadingArea />;

  if (!data)
    return (
      <div className="text-center">
        <p className="text-[18px] font-bold">데이터가 없습니다.</p>
        <Link
          href="/"
          className="inline-block mt-3 px-3 py-2 text-[17px] text-white bg-violet600 rounded-sm"
        >
          목록으로 돌아가기
        </Link>
      </div>
    );

  const { id, imageUrl, isCompleted, memo, name } = data;
  const {
    register,
    control,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm<Required<UpdateTodoData>>({
    mode: "onChange",
    defaultValues: {
      isCompleted: isCompleted ?? false,
      name: name ?? "",
      imageUrl: imageUrl ?? null,
      memo: memo ?? "",
    },
  });

  // 수정하기
  const handleSubmitForm = (formValues: UpdateTodoData) => {
    const filterNullValue = Object.fromEntries(
      Object.entries(formValues).filter(
        ([_, value]) => value !== null && value !== ""
      )
    );
    updateMutate({ id, formValues: filterNullValue });
  };

  // 삭제하기
  const handleDeleteTodo = () => {
    if (isDeletePending) return;
    deleteMutation(id);
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <Controller
        name="isCompleted"
        control={control}
        render={({ field: { onChange, value } }) => {
          return (
            <CheckItem
              id={id}
              variant="detail"
              initValue={value}
              onChange={(v: boolean) => onChange(v)}
            >
              <input
                type="text"
                className="max-w-[90%] py-1 text-xl font-bold underline underline-offset-4 field-sizing-content"
                placeholder="할일을 입력해주세요."
                {...register("name", {
                  required: true,
                })}
              />
            </CheckItem>
          );
        }}
      />
      <div className="flex gap-6 mt-6 h-[311px] overflow-hidden">
        <Controller
          name="imageUrl"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TodoThumbnail value={value} onChange={(v) => onChange(v)} />
          )}
        />
        <Controller
          name="memo"
          control={control}
          render={({ field }) => <TodoMemo {...field} />}
        />
      </div>
      <div className="flex gap-5 justify-end mt-6">
        <Button
          type="submit"
          variant="edit"
          disabled={!isValid || !isDirty || isUpdatePending}
        >
          수정 완료
        </Button>
        <Button variant="delete" onClick={handleDeleteTodo}>
          삭제하기
          {isDeletePending && <LoadingSpinner />}
        </Button>
      </div>
    </form>
  );
};

export default TodoDetailArea;
