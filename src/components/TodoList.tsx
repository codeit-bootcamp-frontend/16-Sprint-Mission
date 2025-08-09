'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { FormProvider, useForm } from 'react-hook-form';
import z from 'zod';

import Badge from '@/components/Badge';
import Button from '@/components/Button';
import CheckListItem from '@/components/CheckListItem';
import FormInput from '@/components/FormInput';
import { todoSchema } from '@/lib/schemas';
import { Item, ItemDetail } from '@/types/TodoTypes';
import { addItem, getItemList, updateItem } from 'app/api/todo';

import EmptyContent from './EmptyContent';

const TodoList = () => {
  const queryClient = useQueryClient();
  const TODO_QUERY_KEY = ['todos'];

  const { data: listData = [] } = useQuery<Item[]>({
    queryKey: TODO_QUERY_KEY,
    queryFn: getItemList,
    staleTime: 0,
    refetchOnMount: 'always',
  });

  const todoItems = listData.filter((item) => !item.isCompleted);
  const doneItems = listData.filter((item) => item.isCompleted);

  const TodoSchema = z.object({
    name: todoSchema,
  });

  type TodoData = z.infer<typeof TodoSchema>;
  const methods = useForm<TodoData>({
    resolver: zodResolver(TodoSchema),
    mode: 'all',
    defaultValues: {
      name: '',
    },
  });

  const {
    handleSubmit,
    reset,
    formState: { isValid },
  } = methods;

  const updateTodoMutation = useMutation({
    mutationFn: async (updatedTodo: Item) => {
      if (typeof updatedTodo.id !== 'number') {
        throw new Error('id는 숫자여야 합니다.');
      }
      return await updateItem(updatedTodo.id, { isCompleted: updatedTodo.isCompleted });
    },
    onMutate: async (updatedTodo: Item) => {
      await queryClient.cancelQueries({ queryKey: TODO_QUERY_KEY, exact: true });
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

  const addTodoMutation = useMutation({
    mutationFn: addItem,
    onMutate: async (newItem) => {
      await queryClient.cancelQueries({ queryKey: TODO_QUERY_KEY, exact: true });

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
    onSuccess: (response, variables, context) => {
      queryClient.setQueryData<Item[]>(TODO_QUERY_KEY, (todoList) =>
        todoList
          ? todoList.map((todo) => (todo.id === context.optimisticItem.id ? response : todo))
          : [response],
      );
      reset();
    },
    onError: (error, _, context) => {
      alert(error);
      if (context?.previousTodos) {
        queryClient.setQueryData(TODO_QUERY_KEY, context.previousTodos);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: TODO_QUERY_KEY, exact: true });
    },
  });

  const handleOnClickAdd = (formData) => {
    addTodoMutation.mutate(formData);
  };

  const onClickCheckListItem = (item) => {
    if (typeof item.id === 'number') {
      updateTodoMutation.mutate({ ...item, isCompleted: !item.isCompleted });
    }
  };

  return (
    <div className='flex justify-center pt-6 bg-gray-50 min-h-[calc(100vh-3.75rem)]'>
      <div className='max-w-[75rem] w-full p-4 xl:p-0'>
        <header>
          <div className=''>
            <FormProvider {...methods}>
              <form
                onSubmit={handleSubmit(handleOnClickAdd)}
                className='w-full flex items-start gap-4'
              >
                <FormInput name='name' placeholder='할 일을 입력해주세요' className='' />
                <Button disabled={!isValid}>추가하기</Button>
              </form>
            </FormProvider>
          </div>
        </header>
        <section className='flex pt-10 gap-6'>
          <div className='flex flex-col w-1/2 items-center'>
            <Badge mode='todo' className='self-start'>
              TO DO
            </Badge>
            <div className='flex flex-col gap-4 pt-4 w-full'>
              {todoItems.length ? (
                todoItems.map((item) => (
                  <CheckListItem
                    name={item.name}
                    checked={item.isCompleted}
                    key={item.id}
                    onClick={() => onClickCheckListItem(item)}
                  />
                ))
              ) : (
                <EmptyContent className='pt-16'>
                  할 일이 없어요.
                  <br />
                  TODO를 새롭게 추가해주세요
                </EmptyContent>
              )}
            </div>
          </div>
          <div className='flex flex-col w-1/2 items-center'>
            <Badge mode='done' className='self-start'>
              DONE
            </Badge>
            <div className='flex flex-col gap-4 pt-4 w-full'>
              {doneItems.length ? (
                doneItems.map((item) => (
                  <CheckListItem
                    name={item.name}
                    checked={item.isCompleted}
                    key={item.id}
                    className='line-through'
                    onClick={() => onClickCheckListItem(item)}
                  />
                ))
              ) : (
                <EmptyContent mode='done' className='pt-16'>
                  아직 다 한 일이 없어요.
                  <br />
                  해야 할 일을 체크해보세요!
                </EmptyContent>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TodoList;
