import { useQueryClient, useMutation } from "@tanstack/react-query";
import { updateTodo, deleteTodo } from "@/lib/api";
import { useRouter } from "next/navigation";
import { Item } from "@/types/todo";

interface UpdatePayload {
  id: string;
  bodyData: {
    name: string;
    isCompleted: boolean;
    memo: string;
    imageUrl: string;
  };
}

const useTodoMutations = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  // 수정 mutation
  const { mutate: handleUpdate, isPending: isUpdatePending } = useMutation({
    mutationFn: (payload: UpdatePayload) =>
      updateTodo({ itemId: payload.id, bodyData: payload.bodyData }),
    retry: 1,
    retryDelay: 0.3,
    onMutate: async ({ ...payload }) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });

      const prevItems = queryClient.getQueryData<Item[]>(["todos"]);
      if (prevItems) {
        queryClient.setQueryData<Item[]>(["todos"], (oldItems) => {
          if (!oldItems) return;

          return oldItems.map((item) =>
            item.id === payload.id ? { ...payload.bodyData } : item
          );
        });
      }

      return { prevItems };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      alert("수정 성공!");
      router.push("/");
    },
    onError: (err, _data, context) => {
      if (context?.prevItems) {
        queryClient.setQueryData(["todos"], context.prevItems);
      }
      alert(err);
    },
  });

  // 삭제 mutation
  const { mutate: handleDelete, isPending: isDeletePending } = useMutation({
    mutationFn: (itemId: string) => deleteTodo(itemId),
    retry: 1,
    retryDelay: 0.3,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      alert("삭제에 성공했습니다.");
      router.push("/");
    },
    onError: (err) => {
      alert(err);
    },
  });

  return {
    handleUpdate,
    handleDelete,
    isUpdatePending,
    isDeletePending,
  };
};

export default useTodoMutations;
