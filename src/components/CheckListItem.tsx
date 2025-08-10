import clsx from 'clsx';

import Check from '@/assets/icons/check.svg';

interface CheckListItemProps {
  name?: string;
  checked?: boolean;
  className?: string;
  onClick?: () => void;
}

const CheckListItem = ({ name, checked, className, onClick }: CheckListItemProps) => {
  const onChangeCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    onClick?.();
  };

  const Checkbox = () => {
    return (
      <label className='flex items-center cursor-pointer select-none'>
        <input type='checkbox' className='hidden' checked={checked} onChange={onChangeCheck} />
        <div
          className={`${checked ? 'border-none bg-violet-600' : 'border-slate-900 border-2 bg-yellow-50'} w-8 h-8 rounded-full  border-gray-400 flex items-center justify-center
            `}
        >
          {checked && <Check stroke='white' width={16} height={16} />}
        </div>
      </label>
    );
  };

  return (
    <div
      className={clsx(
        'w-full bg-white border-2 border-slate-900 rounded-[1.68rem] px-3 py-2.25 flex gap-4 items-center cursor-pointer',
        className,
      )}
      onClick={onClick}
    >
      <Checkbox />
      <span className='truncate'>{name}</span>
    </div>
  );
};

export default CheckListItem;
