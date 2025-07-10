import { useEffect } from "react";
import { useToastStore } from "../../store/toastStore";
import styled from "@emotion/styled/macro";
import { keyframes } from "@emotion/react";

const TOAST_DEFAULT = {
  HEIGHT: 36,
  GAP: 10,
};

const Toast = ({ id, message, delay, order, duration }) => {
  const deleteToast = useToastStore((state) => state.deleteToast);

  useEffect(() => {
    const TIMER = setTimeout(() => {
      deleteToast(id);
    }, delay + duration);

    return () => {
      clearTimeout(TIMER);
    };
  }, [id, delay, duration, deleteToast]);

  return (
    <ToastStyled order={order} delay={delay} duration={duration}>
      {message}
    </ToastStyled>
  );
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
  animation: ${ToastShow} ${({ duration }) => duration}ms ease forwards,
    ${ToastHide} ${({ duration }) => duration}ms ease forwards
      ${({ delay }) => delay}ms;
  transition: all ${({ duration }) => duration * 0.7}ms ease;
`;

export default Toast;
