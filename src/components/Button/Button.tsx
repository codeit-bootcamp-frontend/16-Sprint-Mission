import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonStyle, ButtonStyleProps } from "./ButtonStyle";

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color" | "children">,
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
