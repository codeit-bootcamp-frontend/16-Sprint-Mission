import {
  AddItemRequest,
  DeleteItemResponse,
  Item,
  ItemDetail,
  UpdateItemRequest,
  UploadImageResponse,
} from '@/types/TodoTypes';

import apiClient from './apiClient';

export const addItem = (data: AddItemRequest): Promise<ItemDetail> => {
  return apiClient.post(`${process.env.NEXT_PUBLIC_TENANT_ID}/items`, data);
};

export const getItemList = (): Promise<Item[]> => {
  return apiClient.get(`${process.env.NEXT_PUBLIC_TENANT_ID}/items`, {});
};

export const getItem = (itemId: number): Promise<ItemDetail> => {
  return apiClient.get(`${process.env.NEXT_PUBLIC_TENANT_ID}/items/${itemId}`);
};

export const updateItem = (itemId: number, data: UpdateItemRequest): Promise<ItemDetail> => {
  return apiClient.patch(`${process.env.NEXT_PUBLIC_TENANT_ID}/items/${itemId}`, data);
};

export const deleteItem = (itemId: number): Promise<DeleteItemResponse> => {
  return apiClient.delete(`${process.env.NEXT_PUBLIC_TENANT_ID}/items/${itemId}`);
};

export const uploadImage = (file: File): Promise<UploadImageResponse> => {
  const formData = new FormData();
  formData.append('image', file);

  return apiClient.post(`${process.env.NEXT_PUBLIC_TENANT_ID}/items`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
