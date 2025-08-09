import clsx from 'clsx';
import Image from 'next/image';

import doneEmpty from '@/assets/images/done_empty.png';
import todoEmpty from '@/assets/images/todo_empty.png';

interface EmptyContentProps {
  mode?: 'todo' | 'done';
  className?: string;
  children?: React.ReactNode;
}

const EmptyContent = ({ mode = 'todo', children, className }: EmptyContentProps) => {
  return (
    <div className={clsx('flex flex-col items-center', className)}>
      <Image src={mode === 'todo' ? todoEmpty : doneEmpty} alt={`${mode}초기이미지`} />
      <div className='text-slate-400 text-center font-bold text-base'>{children}</div>
    </div>
  );
};

export default EmptyContent;
