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
  toasts: ToastType[];
  createToast: (toast: CreateToastType) => void;
  deleteToast: (id: string) => void;
}

export const useToastStore = create<ToastStoreType>((set) => ({
  toasts: [],
  createToast: (toast) => {
    const id = uuidv4();
    const newToast: ToastType = {
      ...toast,
      id,
    };

    set((state) => ({
      toasts: [...state.toasts, newToast],
    }));
  },
  deleteToast: (id) => {
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    }));
  },
}));
