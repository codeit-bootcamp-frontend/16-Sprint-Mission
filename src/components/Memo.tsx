import Image from 'next/image';

import MemoImage from '@/assets/images/memo.png';
import TextArea from '@/components/TextArea';
import { useItemStore } from '@/store/itemStore';

const Memo = () => {
  const { detailData, setDetailData } = useItemStore();

  const handleMemoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDetailData({ memo: e.target.value });
  };

  return (
    <div className='relative w-full max-w-[384px] sm:max-w-[588px] h-[311px]'>
      <Image
        src={MemoImage}
        alt={'메모 배경'}
        fill
        className='object-cover rounded-3xl'
        sizes='(max-width: 696px) 100vw, 696px'
      />
      <div className='p-4 absolute inset-0 z-10 flex flex-col gap-4 items-center justify-center'>
        <div className='font-extrabold text-amber-800'>Memo</div>
        <TextArea
          value={detailData.memo ?? ''}
          className='min-h-[15rem] scrollbar-custom'
          onChange={handleMemoChange}
        />
      </div>
    </div>
  );
};

export default Memo;
