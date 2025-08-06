import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MutationContext, Todo } from "../types/todo";
import { addTodo } from "../api/todos";

export const useAddTodo = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, string, MutationContext>({
    mutationFn: (name: string) => addTodo(name),
    onMutate: async (newTodo): Promise<MutationContext> => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });
      const previousTodos = queryClient.getQueryData<Todo[]>(["todos"]);
      queryClient.setQueryData<Todo[]>(["todos"], (old) => {
        if (!old) return [];
        return [
          ...old,
          {
            id: Date.now(),
            name: newTodo,
            isCompleted: false,
          },
        ];
      });
      return { previousTodos };
    },
    onError: (err, variables, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData(["todos"], context.previousTodos);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};
