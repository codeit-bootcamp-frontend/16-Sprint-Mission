import clsx from 'clsx';
import Image from 'next/image';

import doneEmpty from '@/assets/images/done_empty.png';
import todoEmpty from '@/assets/images/todo_empty.png';

interface EmptyContentProps {
  mode?: 'todo' | 'done';
  className?: string;
}

const MESSAGES = {
  todo: '할 일이 없어요.\nTODO를 새롭게 추가해주세요',
  done: '아직 다 한 일이 없어요.\n해야 할 일을 체크해보세요!',
} as const;

const EmptyContent = ({ mode = 'todo', className }: EmptyContentProps) => {
  return (
    <div className={clsx('flex flex-col items-center', className)}>
      <Image src={mode === 'todo' ? todoEmpty : doneEmpty} alt={`${mode}초기이미지`} priority />
      <div className='text-slate-400 text-center font-bold text-base whitespace-pre-line'>
        {MESSAGES[mode]}
      </div>
    </div>
  );
};

export default EmptyContent;
