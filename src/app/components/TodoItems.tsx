// 최적화된 TodoItems.tsx
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchItem } from "../api/patch/patchTodo";
import { MouseEvent, useCallback } from "react";
import TodoItem from "./TodoItem";

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
    <div className="flex flex-col gap-4">
      {dataList.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onToggle={handleToggle}
          disabled={toggleMutation.isPending}
        />
      ))}
    </div>
  );
}
