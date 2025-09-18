import { updateTodoItem } from "@/features/todo/services/todoApi";
import { todoQueries } from "@/features/todo/services/todoQuery";
import { useToastStore } from "@/store/toastStore";
import { UpdateTodoData } from "@/types/todoTypes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const QUERY_KEY_TODO_ALL = todoQueries.all();

const useUpdateTodo = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const createToast = useToastStore((state) => state.createToast);

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
    onError: () => {
      createToast({ message: "수정 실패!" });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEY_TODO_ALL });
      createToast({ message: "수정 성공!" });
      router.push("/");
    },
  });
};

export default useUpdateTodo;
