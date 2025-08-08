import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonStyle, ButtonStyleProps } from "./ButtonStyle";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonStyleProps {
  children: ReactNode;
}

const Button = ({ onClick, children, ...props }: ButtonProps) => {
  return (
    <ButtonStyle onClick={onClick} {...props}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
