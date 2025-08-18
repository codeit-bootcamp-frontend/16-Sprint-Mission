import { create } from 'zustand';

import { ItemDetail } from '@/types/TodoTypes';

interface ItemStore {
  detailData: Omit<ItemDetail, 'id' | 'tenantId'>;
  setDetailData: (data: Partial<Omit<ItemDetail, 'id' | 'tenantId'>>) => void;
}

export const useItemStore = create<ItemStore>((set) => ({
  detailData: {
    name: '',
    memo: '',
    imageUrl: '',
    isCompleted: true,
  },
  setDetailData: (data) => set((state) => ({ detailData: { ...state.detailData, ...data } })),
}));
