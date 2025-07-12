import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonStyle, ButtonStyleProps } from "./ButtonStyle";

interface BaseButtonProps {
  onClick?: () => void;
  children: ReactNode;
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  BaseButtonProps &
  ButtonStyleProps;

const Button = ({ onClick, children, ...props }: ButtonProps) => {
  return (
    <ButtonStyle onClick={onClick} {...props}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
