import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

interface ToastType {
  id: string;
  message: string;
}

interface CreateToastType {
  message: string;
}

interface ToastStoreType {
  toast: ToastType | null;
  createToast: (toast: CreateToastType) => void;
  deleteToast: () => void;
}

export const useToastStore = create<ToastStoreType>((set) => ({
  toast: null,
  createToast: (toast) => {
    const id = uuidv4();
    const newToast: ToastType = {
      ...toast,
      id,
    };

    set(() => ({
      toast: newToast,
    }));
  },
  deleteToast: () => {
    set(() => ({
      toast: null,
    }));
  },
}));
