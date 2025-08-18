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

import { getItem, uploadImage } from '../api/todo';

interface ItemDetailContentProps {
  itemId: number;
}

const ItemDetailContent = ({ itemId }: ItemDetailContentProps) => {
  const router = useRouter();
  const { data, isLoading } = useQuery({
    queryKey: ['itemDetail', itemId],
    queryFn: () => getItem(itemId),
  });

  // const updateItemMutation = useMutation({
  //   mutationFn: () => updateItem(itemId, detailData),
  //   retry: 1,
  //   retryDelay: 300,
  //   onSuccess: () => {
  //     // 데이터 업데이트 후 이미지 업로드 진행
  //     onSaveFile();
  //   },
  //   onError: (error) => {
  //     console.log(error);
  //   },
  // });

  const uploadImageMutation = useMutation<UploadImageResponse, Error, File>({
    mutationFn: (file: File) => uploadImage(file),
    retry: 1,
    retryDelay: 300,
    onSuccess: () => {
      // 이미지 업로드 완료 후
      console.log('성공 시, 목록 페이지로 이동');
      router.push(`/`);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const { detailData, setDetailData } = useItemStore();

  const [file, setFile] = useState<File | null>(null);

  const disableEditButton =
    !detailData.name || (detailData.name === data?.name && detailData.memo === data?.memo && !file);

  const onUploadFile = (fileData: File) => {
    setFile(fileData);
  };

  const onClickEditDetail = () => {
    console.log('상세페이지 데이터 수정');
    // updateItemMutation.mutate();
  };

  const onSaveFile = () => {
    if (!file) return;
    uploadImageMutation.mutate(file);
    console.log('파일을 저장합니다.');
  };

  useEffect(() => {
    if (data) {
      setDetailData(data);
    }
  }, [data, setDetailData]);

  if (isLoading) return <LoadingOverlay />;

  return (
    <div className='max-w-[75rem] flex flex-col gap-6 bg-white w-full px-24.5 pt-6'>
      <CheckListDetail />
      <div className='flex gap-6'>
        <ImageUploader imageUrl={detailData.imageUrl} onUpload={onUploadFile} />
        <Memo />
      </div>
      <div className='flex justify-end gap-4'>
        <Button mode='edit' disabled={disableEditButton} onClick={onClickEditDetail}>
          수정 완료
        </Button>
        <Button mode='delete'>삭제하기</Button>
      </div>
    </div>
  );
};

export default ItemDetailContent;
