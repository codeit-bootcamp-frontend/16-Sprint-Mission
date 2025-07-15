import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MouseEvent, useCallback } from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../../types/todo";
import { patchItem } from "../../api/todos";

interface InputProps {
  dataList: Todo[];
}

export default function TodoItems({ dataList }: InputProps) {
  const queryClient = useQueryClient();

  // 뮤테이션 컨텍스트 타입 정의
  type MutationContext = {
    previousTodos?: Todo[];
  };

  const toggleMutation = useMutation<
    void,
    Error,
    Pick<Todo, "id" | "isCompleted">,
    MutationContext
  >({
    mutationFn: ({ id, isCompleted }) => patchItem(id, { isCompleted }),
    onMutate: async ({ id, isCompleted }): Promise<MutationContext> => {
      // 낙관적 업데이트
      await queryClient.cancelQueries({ queryKey: ["todos"] });

      const previousTodos = queryClient.getQueryData<Todo[]>(["todos"]);

      queryClient.setQueryData<Todo[]>(["todos"], (old) => {
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
