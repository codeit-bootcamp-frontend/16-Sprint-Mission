import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { addItem, getItemList, updateItem } from '@/app/api/todo';
import { Item } from '@/types/TodoTypes';

const useTodo = () => {
  const queryClient = useQueryClient();
  const TODO_QUERY_KEY = ['todos'];

  const {
    data: listData = [],
    isLoading,
    isFetching,
  } = useQuery<Item[]>({
    queryKey: TODO_QUERY_KEY,
    queryFn: getItemList,
    refetchOnMount: 'always',
  });

  const todoItems = listData.filter((item) => !item.isCompleted);
  const doneItems = listData.filter((item) => item.isCompleted);

  const addTodoMutation = useMutation({
    mutationFn: addItem,
    retry: 1,
    retryDelay: 300,
    onMutate: async () => {
      const previousTodos = queryClient.getQueryData<Item[]>(TODO_QUERY_KEY);

      const optimisticItem: Item = {
        id: `temp-${crypto.randomUUID()}`,
        name: '추가중...',
        isCompleted: false,
      };

      queryClient.setQueryData<Item[]>(TODO_QUERY_KEY, (todoList) =>
        todoList ? [optimisticItem, ...todoList] : [optimisticItem],
      );

      return { previousTodos, optimisticItem };
    },
    onSuccess: (response, _, context) => {
      queryClient.setQueryData<Item[]>(TODO_QUERY_KEY, (todoList) =>
        todoList
          ? todoList.map((todo) => (todo.id === context.optimisticItem.id ? response : todo))
          : [response],
      );
    },
    onError: (error, _, context) => {
      alert(error);
      if (context?.previousTodos) {
        queryClient.setQueryData(TODO_QUERY_KEY, context.previousTodos);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: TODO_QUERY_KEY });
    },
  });

  const updateTodoMutation = useMutation({
    mutationFn: async (updatedTodo: Item) => {
      if (typeof updatedTodo.id !== 'number') {
        throw new Error('id는 숫자여야 합니다.');
      }
      return await updateItem(updatedTodo.id, { isCompleted: updatedTodo.isCompleted });
    },
    retry: 1,
    retryDelay: 300,
    onMutate: async (updatedTodo: Item) => {
      await queryClient.cancelQueries({ queryKey: TODO_QUERY_KEY });
      const previousTodos = queryClient.getQueryData<Item[]>(TODO_QUERY_KEY);

      queryClient.setQueryData<Item[]>(TODO_QUERY_KEY, (todoList) => {
        if (!todoList) return [];
        return todoList.map((todo) =>
          todo.id === updatedTodo.id ? { ...todo, ...updatedTodo } : todo,
        );
      });

      return { previousTodos };
    },
    onError: (error, _, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData(TODO_QUERY_KEY, context.previousTodos);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: TODO_QUERY_KEY });
    },
  });

  return {
    addTodoMutation,
    updateTodoMutation,
    listData,
    isLoading,
    isFetching,
    todoItems,
    doneItems,
  };
};

export default useTodo;
