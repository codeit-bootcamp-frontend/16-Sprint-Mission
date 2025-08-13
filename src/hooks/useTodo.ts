import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { addItem, getItemList, updateItem } from '@/app/api/todo';
import { Item, ItemDetail } from '@/types/TodoTypes';

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
    staleTime: 10000,
    refetchOnMount: false,
  });

  const todoItems = listData.filter((item) => !item.isCompleted);
  const doneItems = listData.filter((item) => item.isCompleted);

  const addTodoMutation = useMutation({
    mutationFn: addItem,
    onMutate: async (newItem) => {
      const previousTodos = queryClient.getQueryData<Item[]>(TODO_QUERY_KEY);

      const optimisticItem: Item = {
        id: `temp-${crypto.randomUUID()}`,
        name: newItem.name,
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
  });

  const updateTodoMutation = useMutation({
    mutationFn: async (updatedTodo: Item) => {
      if (typeof updatedTodo.id !== 'number') {
        throw new Error('id는 숫자여야 합니다.');
      }
      return await updateItem(updatedTodo.id, { isCompleted: updatedTodo.isCompleted });
    },
    onMutate: async (updatedTodo: Item) => {
      const previousTodos = queryClient.getQueryData<Item[]>(TODO_QUERY_KEY);

      queryClient.setQueryData<Item[]>(TODO_QUERY_KEY, (todoList) => {
        if (!todoList) return [];
        return todoList.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo));
      });

      return { previousTodos };
    },
    onSuccess: (response: ItemDetail) => {
      const responseItem = {
        id: response.id,
        name: response.name,
        isCompleted: response.isCompleted,
      };

      queryClient.setQueryData<Item[]>(TODO_QUERY_KEY, (todoList) =>
        todoList
          ? todoList.map((todo) => (todo.id === response.id ? responseItem : todo))
          : todoList,
      );
    },
    onError: (error, _, context) => {
      alert(error);
      if (context?.previousTodos) {
        queryClient.setQueryData(TODO_QUERY_KEY, context.previousTodos);
      }
    },
  });

  return {
    addTodoMutation,
    updateTodoMutation,
    isLoading,
    isFetching,
    todoItems,
    doneItems,
  };
};

export default useTodo;
