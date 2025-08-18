"use client";
import CheckItem from "@/components/CheckItem";

import Button from "@/components/Button";
import { TodoResponseType } from "@/types/todoTypes";
import { Controller, useForm } from "react-hook-form";
import TodoThumbnail from "@/features/todo/components/TodoThumbnail";
import TodoMemo from "@/features/todo/components/TodoMemo";

interface FormValuesType {
  imageUrl: string | null;
  memo: string | null;
}

const TodoDetailArea = (props: TodoResponseType) => {
  const { id, imageUrl, isCompleted, memo, name } = props;
  const {
    control,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm<FormValuesType>({
    mode: "onChange",
    defaultValues: {
      imageUrl: imageUrl ?? null,
      memo: memo ?? "",
    },
  });

  const handleUpdateCheck = (id: number) => {
    console.log(id);
  };

  const handleSubmitForm = (formValues: FormValuesType) => {
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <CheckItem
        id={id}
        isCompleted={isCompleted}
        name={name}
        variant="detail"
        onUpdate={handleUpdateCheck}
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
        <Button type="submit" variant="edit" disabled={!isDirty}>
          수정 완료
        </Button>
        <Button variant="delete">삭제하기</Button>
      </div>
    </form>
  );
};

export default TodoDetailArea;
