import { updateTodoItem } from "@/features/todo/services/todoApi";
import { todoQueries } from "@/features/todo/services/todoQuery";
import { useToastStore } from "@/store/toastStore";
import { TodoItemType } from "@/types/todoTypes";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY_TODOLIST = todoQueries.list();

const useUpdateCheck = () => {
  const queryClient = useQueryClient();
  const createToast = useToastStore((state) => state.createToast);

  return useMutation({
    mutationFn: async ({
      id,
      isCompleted,
    }: {
      id: number;
      isCompleted: boolean;
    }) => {
      await updateTodoItem(id, { isCompleted });
    },
    onMutate: async ({ id }) => {
      await queryClient.cancelQueries({ queryKey: QUERY_KEY_TODOLIST });

      const prevTodos = queryClient.getQueryData<TodoItemType[]>(["todos"]);

      queryClient.setQueryData(QUERY_KEY_TODOLIST, (todos: TodoItemType[]) => {
        return todos.map((todo) =>
          todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        );
      });

      return { prevTodos };
    },
    onError: (err, variables, context) => {
      queryClient.setQueryData(QUERY_KEY_TODOLIST, context?.prevTodos);
      createToast({ message: "다시 시도해주세요." });
    },
    onSettled: () => {
      if (!(queryClient.isMutating() === 1)) return;
      queryClient.invalidateQueries({ queryKey: QUERY_KEY_TODOLIST });
    },
  });
};

export default useUpdateCheck;
