import { create } from "zustand";

export const useToastStore = create((set) => ({
  toasts: [],
  addToast: (toast) => {
    set((state) => ({ toasts: [...state.toasts, toast] }));
  },
  deleteToast: (id) => {
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    }));
  },
}));
