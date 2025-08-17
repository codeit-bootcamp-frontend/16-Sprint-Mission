import CheckItem from "@/components/CheckItem";
import { updateTodoItem } from "@/features/todo/services/todoApi";
import { todoQueries } from "@/features/todo/services/todoQuery";
import { TodoItemType } from "@/types/todoTypes";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY_TODOLIST = todoQueries.list();

const TodoItem = ({ name, id, isCompleted }: TodoItemType) => {
  const queryClient = useQueryClient();

  const checkMutation = useMutation({
    mutationFn: async (id: number) => {
      await updateTodoItem(id, { isCompleted: !isCompleted });
    },
    onMutate: async (id: number) => {
      await queryClient.cancelQueries({ queryKey: QUERY_KEY_TODOLIST });

      const prevTodos = queryClient.getQueryData<TodoItemType[]>(["todos"]);

      queryClient.setQueryData(
        QUERY_KEY_TODOLIST,
        (prevTodos: TodoItemType[]) => {
          return prevTodos.map((todo) =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
          );
        }
      );

      return { prevTodos };
    },
    onError: (err, id, context) => {
      queryClient.setQueryData(QUERY_KEY_TODOLIST, context?.prevTodos);
    },
    onSettled: () => {
      if (!(queryClient.isMutating() === 1)) return;
      queryClient.invalidateQueries({ queryKey: QUERY_KEY_TODOLIST });
    },
  });

  const handleUpdateCheck = (id: number) => {
    checkMutation.mutate(id);
  };

  return (
    <li className="mt-4">
      <CheckItem
        name={name}
        id={id}
        isCompleted={isCompleted}
        onUpdate={handleUpdateCheck}
      />
    </li>
  );
};

export default TodoItem;
