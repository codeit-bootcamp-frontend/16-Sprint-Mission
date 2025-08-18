'use client';

import { useEffect, useState } from 'react';

import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import Button from '@/components/Button';
import CheckListDetail from '@/components/CheckListDetail';
import ImageUploader from '@/components/ImageUploader';
import LoadingOverlay from '@/components/LoadingOverlay';
import Memo from '@/components/Memo';
import { useItemStore } from '@/store/itemStore';
import { UploadImageResponse } from '@/types/TodoTypes';

import { deleteItem, getItem, updateItem, uploadImage } from '../api/todo';

interface ItemDetailContentProps {
  itemId: number;
}

const ItemDetailContent = ({ itemId }: ItemDetailContentProps) => {
  const router = useRouter();
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['itemDetail', itemId],
    queryFn: () => getItem(itemId),
  });

  const updateItemMutation = useMutation({
    mutationFn: () => updateItem(itemId, detailData),
    retry: 1,
    retryDelay: 300,
    onSuccess: () => {
      setDetailData({ name: '', memo: '', imageUrl: '', isCompleted: false });
      router.push('/');
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const uploadImageMutation = useMutation<UploadImageResponse, Error, File>({
    mutationFn: (file: File) => uploadImage(file),
    retry: 1,
    retryDelay: 300,
    onSuccess: (response) => {
      const { url } = response;
      console.log(url);
      setDetailData({ imageUrl: url });
      updateItemMutation.mutate();
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const deleteItemMutation = useMutation({
    mutationFn: () => deleteItem(itemId),
    retry: 1,
    retryDelay: 300,
    onSuccess: () => {
      setDetailData({ name: '', memo: '', imageUrl: '', isCompleted: false });
      router.push('/');
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const { detailData, setDetailData } = useItemStore();

  const [file, setFile] = useState<File | null>(null);

  const disableEditButton =
    !detailData.name ||
    (detailData.isCompleted === data?.isCompleted &&
      detailData.name === data?.name &&
      detailData.memo === data?.memo &&
      !file);

  const onUploadFile = (fileData: File) => {
    setFile(fileData);
  };

  const onClickEditDetail = () => {
    if (file) {
      uploadImageMutation.mutate(file);
    } else {
      updateItemMutation.mutate();
    }
  };

  useEffect(() => {
    if (data) {
      const { name, memo, imageUrl, isCompleted } = data;
      setDetailData({ name, memo, imageUrl, isCompleted });
    }
  }, [data, setDetailData]);

  if (isLoading || isFetching) return <LoadingOverlay />;

  return (
    <div className='max-w-[75rem] w-full flex flex-col gap-6.5 bg-white px-12 sm:px-24.5 py-6'>
      <CheckListDetail />
      <div className='flex flex-col sm:flex-row items-start justify-center gap-6'>
        <ImageUploader imageUrl={detailData.imageUrl} onUpload={onUploadFile} />
        <Memo />
      </div>
      <div className='flex w-full justify-center sm:justify-end gap-4 min-w-0'>
        <Button mode='edit' size='full' disabled={disableEditButton} onClick={onClickEditDetail}>
          수정 완료
        </Button>
        <Button mode='delete' size='full' onClick={() => deleteItemMutation.mutate()}>
          삭제하기
        </Button>
      </div>
    </div>
  );
};

export default ItemDetailContent;
