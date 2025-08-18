import { deleteTodoDetail } from "@/features/todo/services/todoApi";
import { todoQueries } from "@/features/todo/services/todoQuery";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const QUERY_KEY_TODO_LIST = todoQueries.list();

const useDeleteTodo = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => await deleteTodoDetail(id),
    onSuccess: () => {
      console.log("success");
      queryClient.invalidateQueries({ queryKey: QUERY_KEY_TODO_LIST });
      router.push("/");
    },
  });
};

export default useDeleteTodo;
