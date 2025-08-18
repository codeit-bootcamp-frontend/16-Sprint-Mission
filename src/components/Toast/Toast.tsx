"use client";

import { useToastStore } from "@/store/toastStore";
import { useEffect } from "react";

interface ToastType {
  id: string;
  order: number;
  message: string;
}

const DEFAULT_DURATION = 500;
const DEFAULT_DELAY = 3000;

const Toast = ({ id, order, message }: ToastType) => {
  const deleteToast = useToastStore((state) => state.deleteToast);

  useEffect(() => {
    const TIMER = setTimeout(() => {
      deleteToast(id);
    }, DEFAULT_DELAY + DEFAULT_DURATION);

    return () => {
      clearTimeout(TIMER);
    };
  }, [id, deleteToast]);
  return (
    <div
      className="absolute py-2 px-4 rounded-md text-white text-[17px] bg-slate-900 animate-toast-in-out transition-[bottom] transition-700 ease-initial"
      style={{ bottom: `${order * 50}px` }}
    >
      {message}
    </div>
  );
};

export default Toast;
