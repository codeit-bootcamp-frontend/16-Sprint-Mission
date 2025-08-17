import { updateTodoItem } from "@/features/todo/services/todoApi";
import { todoQueries } from "@/features/todo/services/todoQuery";
import { TodoItemType } from "@/types/todoTypes";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY_TODOLIST = todoQueries.list();

const useUpdateCheck = (isCompleted: boolean) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => {
      await updateTodoItem(id, { isCompleted: !isCompleted });
    },
    onMutate: async (id: number) => {
      await queryClient.cancelQueries({ queryKey: QUERY_KEY_TODOLIST });

      const prevTodos = queryClient.getQueryData<TodoItemType[]>(["todos"]);

      queryClient.setQueryData(QUERY_KEY_TODOLIST, (todos: TodoItemType[]) => {
        return todos.map((todo) =>
          todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        );
      });

      return { prevTodos };
    },
    onError: (err, id, context) => {
      queryClient.setQueryData(QUERY_KEY_TODOLIST, context?.prevTodos);
      // 토스트 생성 안내 띄워주기
    },
    onSettled: () => {
      if (!(queryClient.isMutating() === 1)) return;
      queryClient.invalidateQueries({ queryKey: QUERY_KEY_TODOLIST });
    },
  });
};

export default useUpdateCheck;
