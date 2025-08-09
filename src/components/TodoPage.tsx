'use client';

import Badge from '@/components/Badge';
import TodoList from '@/components/TodoList';
import useTodo from '@/hooks/useTodo';
import { Item } from '@/types/TodoTypes';

import TodoForm from './TodoForm';

const TodoPage = () => {
  const { addTodoMutation, updateTodoMutation, listData } = useTodo();

  const todoItems = listData.filter((item) => !item.isCompleted);
  const doneItems = listData.filter((item) => item.isCompleted);

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

  return (
    <div className='flex justify-center pt-6 bg-gray-50 min-h-[calc(100vh-3.75rem)]'>
      <div className='max-w-[75rem] w-full p-4 xl:p-0'>
        <TodoForm onSubmit={handleOnClickAdd} />
        <section className='flex pt-10 gap-6'>
          <div className='flex flex-col w-1/2 items-center'>
            <Badge mode='todo' className='self-start'>
              TO DO
            </Badge>
            <TodoList items={todoItems} mode='todo' onClick={onClickCheckListItem} />
          </div>
          <div className='flex flex-col w-1/2 items-center'>
            <Badge mode='done' className='self-start'>
              DONE
            </Badge>
            <TodoList items={doneItems} mode='done' onClick={onClickCheckListItem} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default TodoPage;
