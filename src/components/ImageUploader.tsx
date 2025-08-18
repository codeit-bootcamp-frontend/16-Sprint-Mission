import { useRef, useState } from 'react';

import clsx from 'clsx';
import Image from 'next/image';

import noImage from '@/assets/images/no_image.png';

import IconButton from './IconButton';

interface ImageUploaderProps {
  imageUrl: string;
  className?: string;
  onUpload?: (file: File) => void;
}

const ImageUploader = ({ imageUrl, className, onUpload }: ImageUploaderProps) => {
  const [error, setError] = useState('');
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleOnClickUploader = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const nameInvalid = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(file.name);
    if (nameInvalid) {
      setError('한글이 포함된 파일은 업로드가 불가합니다.');
      return;
    }

    // 2. 파일 용량 체크 (5MB 제한)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      setError('파일 용량이 5MB를 초과했습니다.');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    onUpload?.(file);
  };

  return (
    <div className={clsx('flex flex-col items-center w-full max-w-[384px]', className)}>
      <div
        className={clsx(
          'relative flex justify-center items-center bg-slate-50 w-full max-w-[384px] h-[311px] rounded-3xl cursor-pointer',
          (preview || imageUrl) ?? 'border-2 border-dashed border-slate-300',
        )}
        onClick={handleOnClickUploader}
      >
        {preview || imageUrl ? (
          <Image
            src={preview || encodeURI(imageUrl)}
            alt={imageUrl ? '업로드 배경' : '업로드 이미지'}
            className='object-cover rounded-3xl'
            priority
            fill
          />
        ) : (
          <Image src={noImage} alt='업로드 배경' className='object-contain rounded-3xl' priority />
        )}
        <IconButton
          mode={preview || imageUrl ? 'edit' : 'add'}
          className='absolute bottom-4 right-4'
        />
        <input
          type='file'
          accept='image/*'
          className='hidden'
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </div>

      <p className='mt-4 min-h-[1.25rem] text-sm text-red-500 w-full'>{error}</p>
    </div>
  );
};

export default ImageUploader;
