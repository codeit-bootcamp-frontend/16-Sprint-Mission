import { forwardRef, InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <input ref={ref} className={`${styles.input} ${className}`} {...props} />
    );
  }
);

export default Input;
