import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

interface ToastType {
  id: string;
  message: string;
  delay: number;
  duration: number;
}

interface CreateToastType {
  message: string;
  delay?: number;
  duration?: number;
}

interface ToastStoreType {
  toasts: ToastType[];
  createToast: (toast: CreateToastType) => void;
  deleteToast: (id: string) => void;
}

const TOAST_DEFAULTS = {
  DELAY: 5000, //ms
  DURATION: 500, //ms
};

export const useToastStore = create<ToastStoreType>((set) => ({
  toasts: [],
  createToast: (toast) => {
    if (!toast.message) {
      // 방어 코드 추가
      console.warn("토스트 메세지 값이 없습니다.");
      return;
    }

    const id = uuidv4();
    const newToast: ToastType = {
      delay: TOAST_DEFAULTS.DELAY,
      duration: TOAST_DEFAULTS.DURATION,
      ...toast,
      id,
    };
    set((state) => ({ toasts: [...state.toasts, newToast] }));
  },
  deleteToast: (id) => {
    if (!id) {
      // 방어 코드 추가
      console.warn("아이디 값이 없습니다.");
      return;
    }

    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    }));
  },
}));
