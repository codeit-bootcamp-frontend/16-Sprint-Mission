'use client';

import React, { useEffect, useState } from 'react';
import Input from './Input';
import Button from './Button';
import { FaPlus } from 'react-icons/fa';
import { z } from 'zod';
import { useCreateItem } from '@/hooks/useItems';
import { NewTodo } from '@/types/todo';

const todoSchema = z.object({
  content: z.string().min(1, '할 일을 입력해주세요.'),
});

const TodoInputForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  const createItem = useCreateItem();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    const newTodo: NewTodo = { name: inputValue };
    createItem.mutate(newTodo, {
      onSuccess: () => setInputValue(''),
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // 입력값이 변경될 때마다 유효성 검사
  useEffect(() => {
    const result = todoSchema.safeParse({ content: inputValue });
    setIsValid(result.success);
  }, [inputValue]);

  return (
    <form onSubmit={handleSubmit} className='flex gap-4 w-full justify-between'>
      <Input className='flex-grow' value={inputValue} onChange={handleInputChange} />
      <Button htmlType='submit' disabled={!isValid}>
        <FaPlus size={16} /> 추가하기
      </Button>
    </form>
  );
};

export default TodoInputForm;
