import { updateTodoItem } from "@/features/todo/services/todoApi";
import { todoQueries } from "@/features/todo/services/todoQuery";
import { UpdateTodoData } from "@/types/todoTypes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const QUERY_KEY_TODO_ALL = todoQueries.all();

const useUpdateTodo = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      formValues,
    }: {
      id: number;
      formValues: UpdateTodoData;
    }) => {
      await updateTodoItem(id, formValues);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEY_TODO_ALL });
      router.push("/");
    },
  });
};

export default useUpdateTodo;
