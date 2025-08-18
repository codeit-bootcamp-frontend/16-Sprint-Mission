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
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleOnClickUploader = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    onUpload?.(file);
  };

  return (
    <div
      className={clsx(
        'relative flex justify-center items-center bg-slate-50 w-full max-w-[384px] aspect-[384/311] rounded-3xl',
        (preview || imageUrl) ?? 'border-2 border-dashed border-slate-300',
        className,
      )}
      onClick={handleOnClickUploader}
    >
      {preview || imageUrl ? (
        <Image
          src={preview || imageUrl}
          alt={imageUrl ? '업로드 배경' : '업로드 이미지'}
          className='object-cover rounded-3xl'
          priority
          fill
        />
      ) : (
        <Image src={noImage} alt={'업로드 배경'} className='object-contain rounded-3xl' priority />
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
  );
};

export default ImageUploader;
