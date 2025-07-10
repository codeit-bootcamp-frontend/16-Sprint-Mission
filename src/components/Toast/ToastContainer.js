import { createPortal } from "react-dom";
import Toast from "./Toast";

import { useToastStore } from "../../store/toastStore";
import styled from "@emotion/styled/macro";

const ToastContainer = () => {
  const toasts = useToastStore((state) => state.toasts);

  return createPortal(
    <ToastContainerStyled>
      {toasts.map((toast, idx) => (
        <Toast key={toast.id} order={toasts.length - idx} {...toast} />
      ))}
    </ToastContainerStyled>,
    document.body
  );
};

const ToastContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  padding-bottom: 60px;
  pointer-events: none;
  z-index: 9999;
`;

export default ToastContainer;
