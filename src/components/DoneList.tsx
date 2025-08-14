'use client';

import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Todo } from '@/types/todo';
import { useUpdateItem } from '@/hooks/useItems';
import Image from 'next/image';

interface DoneListProps {
  todos: Todo[];
}

const DoneList = ({ todos }: DoneListProps) => {
  const updateItem = useUpdateItem();

  return (
    <div className='flex flex-col gap-6 text-slate-800'>
      <h1
        className='border-none rounded-[24px] 
        bg-green-700 text-amber-300 font-bold text-5
        w-fit px-7 py-2'
      >
        DONE
      </h1>
      {todos.length === 0 ? (
        <div className='flex flex-col items-center gap-2'>
          <Image
            src='/empty2.png'
            alt='로고캐릭터가 목록이 없음을 알려주는 이미지'
            width={240}
            height={240}
            quality={90}
          />
          <p className='text-slate-400 text-center'>
            아직 다 한 일이 없어요.
            <br />
            해야 할 일을 체크해보세요!
          </p>
        </div>
      ) : (
        todos.map((todo) => (
          <Label
            key={todo.id}
            className='hover:bg-accent/50 flex items-center
          rounded-[27px] border-2 border-black
          px-3 py-2 
          has-[[aria-checked=true]]:bg-violet-100 
          has-[[data-state=checked]]:line-through'
          >
            <Checkbox
              id={`done-${todo.id}`}
              checked={todo.isCompleted}
              onCheckedChange={(checked) =>
                updateItem.mutate({
                  itemId: todo.id,
                  updatedItem: { isCompleted: Boolean(checked) },
                })
              }
            />
            <div className='grid gap-1.5 font-normal'>
              <p>{todo.name}</p>
            </div>
          </Label>
        ))
      )}
    </div>
  );
};

export default DoneList;
