import Input from "@/components/ui/Input";
import { InputFieldProps } from "@/types/form";

const InputField = ({
  label,
  inputId,
  type,
  name,
  placeholder,
  required,
  onBlur,
  fieldError,
}: InputFieldProps) => {
  return (
    <div className="flex flex-col">
      <label className="form-label" htmlFor={inputId}>
        {label}
      </label>
      <div className="input-hint-wrap">
        <Input
          className="form-input"
          type={type}
          name={name}
          id={inputId}
          autoComplete={type}
          placeholder={placeholder}
          required={required}
          onBlur={onBlur}
          isError={fieldError}
        />
        <span className="form-input-hint">{fieldError}</span>
      </div>
    </div>
  );
};

export default InputField;
