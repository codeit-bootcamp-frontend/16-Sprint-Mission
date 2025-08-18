"use client";
import Toast from "@/components/Toast/Toast";
import { useToastStore } from "@/store/toastStore";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const ToastContainer = () => {
  const [isClient, setIsClient] = useState(false);
  const toasts = useToastStore((state) => state.toasts);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return;

  const portalTarget = document.body;

  return createPortal(
    <div className="fixed bottom-0 left-0 w-full h-0 flex justify-center">
      {toasts.map((toast, idx) => (
        <Toast key={toast.id} order={toasts.length - idx} {...toast} />
      ))}
    </div>,
    portalTarget
  );
};

export default ToastContainer;
