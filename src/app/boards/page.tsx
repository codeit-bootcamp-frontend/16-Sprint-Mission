'use client';

import DoneList from '@/components/DoneList';
import TodoInputForm from '@/components/TodoInputForm';
import TodoList from '@/components/TodoList';
import { useGetItems } from '@/hooks/useItems';
import React from 'react';

const BoardsPage = () => {
  const { isLoading, isError, data } = useGetItems();

  const todos = data ?? [];

  const activeTodos = todos.filter((todo) => !todo.isCompleted);
  const doneTodos = todos.filter((todo) => todo.isCompleted);

  if (isLoading) return <p>로딩중...</p>;
  if (isError) return <p>에러가 발생했습니다.</p>;

  return (
    <div className='flex flex-col gap-10 px-4 py-2 w-auto md:px-6 md:py-[10px] lg:px-90'>
      <TodoInputForm />
      <div className='flex gap-6 w-auto'>
        <div className='flex-1'>
          <TodoList todos={activeTodos} />
        </div>
        <div className='flex-1'>
          <DoneList todos={doneTodos} />
        </div>
      </div>
    </div>
  );
};

export default BoardsPage;
