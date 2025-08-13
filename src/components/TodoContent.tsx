'use client';

import { useEffect, useState } from 'react';

import Badge from '@/components/Badge';
import LoadingOverlay from '@/components/LoadingOverlay';
import TodoForm from '@/components/TodoForm';
import TodoList from '@/components/TodoList';
import useTodo from '@/hooks/useTodo';
import { Item } from '@/types/TodoTypes';

const TodoContent = () => {
  const [initialLoading, setInitialLoading] = useState(true);
  const { addTodoMutation, updateTodoMutation, isFetching, todoItems, doneItems } = useTodo();

  const handleOnClickAdd = (formData, reset) => {
    addTodoMutation.mutate(formData, {
      onSuccess: () => {
        reset();
      },
    });
  };

  const onClickCheckListItem = (item: Item) => {
    if (typeof item.id === 'number') {
      updateTodoMutation.mutate({ ...item, isCompleted: !item.isCompleted });
    }
  };

  useEffect(() => {
    if (!isFetching) {
      setInitialLoading(false);
    }
  }, [isFetching]);

  if (initialLoading) return <LoadingOverlay />;

  return (
    <>
      <div className='max-w-[75rem] w-full p-4 xl:p-0'>
        <TodoForm onSubmit={handleOnClickAdd} />

        <section className='flex pt-10 gap-6'>
          <div className='flex flex-col w-1/2 min-w-0 items-start'>
            <Badge mode='todo' className='self-start'>
              TO DO
            </Badge>
            <TodoList items={todoItems} mode='todo' onClick={onClickCheckListItem} />
          </div>
          <div className='flex flex-col w-1/2 min-w-0items-start'>
            <Badge mode='done' className='self-start'>
              DONE
            </Badge>
            <TodoList items={doneItems} mode='done' onClick={onClickCheckListItem} />
          </div>
        </section>
      </div>
    </>
  );
};

export default TodoContent;
