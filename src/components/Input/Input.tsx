import { forwardRef, InputHTMLAttributes } from "react";
import { InputStyle } from "@styles/formStyles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, Props>(({ ...props }, ref) => {
  return <InputStyle ref={ref} {...props} />;
});

export default Input;
