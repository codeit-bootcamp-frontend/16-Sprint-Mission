import Input from "@/components/ui/Input";
import { InputFieldProps } from "@/types/form";
import { forwardRef } from "react";
import clsx from "clsx";

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, inputId, type, placeholder, required, error, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        <label className="form-label" htmlFor={inputId}>
          {label}
        </label>

        <div className="input-field-wrap">
          <input
            id={inputId}
            ref={ref}
            type={type}
            className={clsx("input", {
              "input-error": error,
            })}
            autoComplete={type}
            placeholder={placeholder}
            required={required}
            {...props}
          />
          <p className="mt-1 text-sm md:text-md text-red-500 h-6">
            {error ? error : ""}
          </p>
        </div>
      </div>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
