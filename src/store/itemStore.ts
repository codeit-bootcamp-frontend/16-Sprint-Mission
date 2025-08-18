import { create } from 'zustand';

import { ItemDetail } from '@/types/TodoTypes';

interface ItemStore {
  detailData: ItemDetail;
  setDetailData: (data: Partial<ItemDetail>) => void;
}

export const useItemStore = create<ItemStore>((set) => ({
  detailData: {
    id: 0,
    tenantId: '',
    name: '',
    memo: '',
    imageUrl: '',
    isCompleted: true,
  },
  setDetailData: (data) => set((state) => ({ detailData: { ...state.detailData, ...data } })),
}));
