// 최적화된 TodoItems.tsx
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchItem } from "../api/patch/patchTodo";
import { MouseEvent, useCallback } from "react";
import Icon from "./Icon";

interface TodoItem {
  id: number;
  name: string;
  isCompleted: boolean;
}

interface InputProps {
  dataList: TodoItem[];
}

export default function TodoItems({ dataList }: InputProps) {
  const queryClient = useQueryClient();

  // 뮤테이션 컨텍스트 타입 정의
  type MutationContext = {
    previousTodos?: TodoItem[];
  };

  const toggleMutation = useMutation<
    void,
    Error,
    Pick<TodoItem, "id" | "isCompleted">,
    MutationContext
  >({
    mutationFn: ({ id, isCompleted }) => patchItem(id, { isCompleted }),
    onMutate: async ({ id, isCompleted }): Promise<MutationContext> => {
      // 낙관적 업데이트
      await queryClient.cancelQueries({ queryKey: ["todos"] });

      const previousTodos = queryClient.getQueryData<TodoItem[]>(["todos"]);

      queryClient.setQueryData<TodoItem[]>(["todos"], (old) => {
        if (!old) return [];
        return old.map((todo) =>
          todo.id === id ? { ...todo, isCompleted } : todo
        );
      });

      return { previousTodos };
    },
    onError: (err, variables, context) => {
      // 에러 발생 시 이전 상태로 롤백
      if (context?.previousTodos) {
        queryClient.setQueryData(["todos"], context.previousTodos);
      }
      console.error("토글 실패:", err);
    },
    onSettled: () => {
      // 최종적으로 서버 데이터와 동기화
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const handleToggle = useCallback(
    (e: MouseEvent<HTMLButtonElement>, id: number, current: boolean) => {
      e.preventDefault();
      toggleMutation.mutate({ id, isCompleted: !current });
    },
    [toggleMutation]
  );

  return (
    <ul className="flex flex-col gap-4">
      {dataList.map((data) => (
        <li key={data.id} className="list-none">
          <button
            className={`flex items-center gap-4 pl-3 py-[9px] max-w-[588px] w-full h-[50px] border-2 border-slate-900 text-slate-800 rounded-[27px] text-left cursor-pointer transition-colors group 
              ${
                data.isCompleted
                  ? "hover:bg-gray-50 bg-violet-50"
                  : "hover:bg-violet-50 bg-gray-50"
              }
              `}
            onClick={(e) => handleToggle(e, data.id, data.isCompleted)}
            disabled={toggleMutation.isPending}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                data.isCompleted
                  ? "bg-violet-600 border-0"
                  : "bg-yellow-50 border-2"
              }`}
            >
              {data.isCompleted && (
                <Icon id="check" className="text-yellow-50 w-5" />
              )}
            </div>
            <span
              className={`transition-all ${
                data.isCompleted
                  ? "line-through group-hover:decoration-transparent"
                  : "group-hover:line-through"
              }`}
            >
              {data.name}
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}