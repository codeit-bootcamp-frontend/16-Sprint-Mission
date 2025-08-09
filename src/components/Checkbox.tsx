'use client';

import { useState } from 'react';

import Check from '@/assets/icons/check.svg';

interface CheckboxProps {
  checked?: boolean;
  onChange?: () => void;
}

const Checkbox = ({ checked = false }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked ?? false);
  const onClickCheck = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <label className='flex items-center cursor-pointer select-none'>
      <input type='checkbox' className='hidden' checked={isChecked} onChange={onClickCheck} />
      <div
        className={`${isChecked ? 'border-none bg-violet-600' : 'border-slate-900 border-2 bg-yellow-50'} w-8 h-8 rounded-full  border-gray-400 flex items-center justify-center
            `}
      >
        {isChecked && <Check stroke='white' width={16} height={16} />}
      </div>
    </label>
  );
};

export default Checkbox;
