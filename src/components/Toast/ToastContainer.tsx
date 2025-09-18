"use client";
import Toast from "@/components/Toast/Toast";
import { useToastStore } from "@/store/toastStore";
import { createPortal } from "react-dom";

const ToastContainer = () => {
  const toast = useToastStore((state) => state.toast);

  console.log(toast);

  const portalTarget = document.body;

  return createPortal(
    <div className="fixed bottom-0 left-0 w-full h-0 flex justify-center">
      {toast && <Toast key={toast.id} {...toast} />}
    </div>,
    portalTarget
  );
};

export default ToastContainer;
