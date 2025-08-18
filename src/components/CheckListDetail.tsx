'use client';
import { useState } from 'react';

import clsx from 'clsx';

import Check from '@/assets/icons/check.svg';
import { useItemStore } from '@/store/itemStore';

interface CheckListDetailProps {
  className?: string;
}

const CheckListDetail = ({ className }: CheckListDetailProps) => {
  const [editMode, setEditMode] = useState(false);
  const { detailData, setDetailData } = useItemStore();

  const onChangeCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setDetailData({ isCompleted: !detailData.isCompleted });
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetailData({ name: e.target.value });
  };

  const onClickDetail = () => {
    setEditMode(true);
  };

  const Checkbox = () => {
    return (
      <label
        className='flex items-center cursor-pointer select-none'
        onClick={(e) => e.stopPropagation()}
      >
        <input
          type='checkbox'
          className='hidden'
          checked={detailData.isCompleted}
          onChange={onChangeCheck}
        />
        <div
          className={`${detailData.isCompleted ? 'border-none bg-violet-600' : 'border-slate-900 border-2 bg-yellow-50'} w-8 h-8 rounded-full  border-gray-400 flex items-center justify-center
            `}
        >
          {detailData.isCompleted && <Check stroke='white' width={16} height={16} />}
        </div>
      </label>
    );
  };

  return (
    <div
      className={clsx(
        'w-full border-2 border-slate-900 rounded-[1.5rem] px-3 py-3.5 flex gap-4 items-center justify-center',
        detailData.isCompleted ? 'bg-violet-100' : 'bg-white',
        className,
      )}
      onClick={onClickDetail}
    >
      <Checkbox />
      {editMode ? (
        <input
          value={detailData.name}
          onChange={handleNameChange}
          className='focus:outline-none'
          style={{ width: `${detailData.name.length + 1.4 || 1}ch` }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setEditMode(false);
            }
          }}
        />
      ) : (
        <span className='truncate underline'>{detailData.name}</span>
      )}
    </div>
  );
};

export default CheckListDetail;
