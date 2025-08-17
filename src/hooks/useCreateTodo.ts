import { createTodoItem } from "@/features/todo/services/todoApi";
import { todoQueries } from "@/features/todo/services/todoQuery";
import { TodoItemType } from "@/types/todoTypes";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY_TODOLIST = todoQueries.list();

const useCreateTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (name: string) => {
      await createTodoItem(name);
    },
    onMutate: async (name: string) => {
      await queryClient.cancelQueries({ queryKey: QUERY_KEY_TODOLIST });

      const prevTodos = queryClient.getQueryData<TodoItemType[]>(["todos"]);

      const newTodos: TodoItemType = {
        id: 9999, // 임시 id 값 설정
        name: name,
        isCompleted: false,
      };

      queryClient.setQueryData(QUERY_KEY_TODOLIST, (todos: TodoItemType[]) => [
        newTodos,
        ...todos,
      ]);

      return { prevTodos };
    },
    onError: (d, e, context) => {
      queryClient.setQueryData(QUERY_KEY_TODOLIST, context?.prevTodos);
      // 토스트 생성 안내 띄워주기
    },
    onSettled: () => {
      // id 프로퍼티 값 갱신
      queryClient.invalidateQueries({ queryKey: QUERY_KEY_TODOLIST });
    },
  });
};

export default useCreateTodo;
