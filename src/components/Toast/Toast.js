import { useEffect } from "react";
import { useToastStore } from "../../store/toastStore";
import styled from "@emotion/styled/macro";
import { keyframes } from "@emotion/react";

const TOAST_DEFAULT = {
  DELAY: 5000, //ms
  DURATION: 500, //ms
  HEIGHT: 36,
  GAP: 10,
};

const ToastShow = keyframes`
    0% {
      transform: translateY(40px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
`;

const ToastHide = keyframes`
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(-20px);
      opacity: 0;
    }
`;

const ToastStyled = styled.div`
  position: absolute;
  bottom: ${({ order }) =>
    order * (TOAST_DEFAULT.HEIGHT + TOAST_DEFAULT.GAP)}px;
  padding: 8px 15px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  background: #252525;
  border-radius: 5px;
  animation: ${ToastShow} ${TOAST_DEFAULT.DURATION}ms ease forwards,
    ${ToastHide} ${TOAST_DEFAULT.DURATION}ms ease forwards
      ${({ delay }) => delay}ms;
  transition: all ${TOAST_DEFAULT.DURATION * 0.7}ms ease;
`;

const Toast = ({ id, message, delay = TOAST_DEFAULT.DELAY, order }) => {
  const deleteToast = useToastStore((state) => state.deleteToast);

  useEffect(() => {
    const TIMER = setTimeout(() => {
      deleteToast(id);
    }, delay + TOAST_DEFAULT.DURATION);

    return () => {
      clearTimeout(TIMER);
    };
  }, [id, delay, deleteToast]);

  return (
    <ToastStyled order={order} delay={delay}>
      {message}
    </ToastStyled>
  );
};

export default Toast;
