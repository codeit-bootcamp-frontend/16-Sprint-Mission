import { LabelHTMLAttributes, ReactNode } from "react";
import "./css/Label.css";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children?: ReactNode;
  className?: string;
}

const Label = ({ children, className, ...rest }: LabelProps) => {
  return (
    <label className={`form__label ${className}`} {...rest}>
      {children}
    </label>
  );
};

export default Label;
