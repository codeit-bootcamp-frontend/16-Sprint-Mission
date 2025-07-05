import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

export const useToastStore = create((set) => ({
  toasts: [],
  createToast: (toast) => {
    const id = uuidv4();
    const newToast = { ...toast, id };
    set((state) => ({ toasts: [...state.toasts, newToast] }));
  },
  deleteToast: (id) => {
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    }));
  },
}));
