"use client";

import { useToastStore } from "@/store/toastStore";
import { useEffect } from "react";

interface ToastType {
  message: string;
}

const DEFAULT_DURATION = 500;
const DEFAULT_DELAY = 3000;

const Toast = ({ message }: ToastType) => {
  const deleteToast = useToastStore((state) => state.deleteToast);

  useEffect(() => {
    const TIMER = setTimeout(() => {
      deleteToast();
    }, DEFAULT_DELAY + DEFAULT_DURATION);

    return () => {
      clearTimeout(TIMER);
    };
  }, [deleteToast]);
  return (
    <div className="absolute bottom-10 py-2 px-4 rounded-md text-white text-[17px] bg-slate-900 animate-toast-in-out transition-[bottom] transition-700 ease-initial">
      {message}
    </div>
  );
};

export default Toast;
