import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchItem } from "../api/patch/patchTodo";
import { MouseEvent } from "react";

interface TodoItem {
  id: number;
  name: string;
  isCompleted: boolean;
}

interface InputProps {
  isDone: boolean;
  dataList: TodoItem[];
}

export default function TodoItems({ isDone, dataList }: InputProps) {
  const queryClient = useQueryClient();

  const toggleMutation = useMutation<
    void,
    Error,
    Pick<TodoItem, "id" | "isCompleted">
  >({
    mutationFn: ({ id, isCompleted }) => patchItem(id, { isCompleted }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (err: Error) => {
      console.error("토글 실패:", err);
    },
  });

  const handleToggle = async (
    e: MouseEvent<HTMLButtonElement>,
    id: number,
    current: boolean
  ) => {
    e.preventDefault();
    toggleMutation.mutate({ id, isCompleted: !current });
  };

  return (
    <ul className="flex flex-col gap-4">
      {dataList
        .filter((data) => (isDone ? data.isCompleted : !data.isCompleted))
        .map((data) => (
          <li
            key={data.id}
            className="flex items-center gap-4 pl-3 py-[9px] max-w-[588px] w-auto h-[50px] border-2 border-slate-900 rounded-[27px]"
          >
            <button
              className="w-8 h-8 border-2 rounded-full cursor-pointer"
              onClick={(e) => handleToggle(e, data.id, data.isCompleted)}
            ></button>
            {data.name}
          </li>
        ))}
    </ul>
  );
}
