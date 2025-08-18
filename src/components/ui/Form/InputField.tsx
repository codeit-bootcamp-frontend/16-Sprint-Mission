/** @jsxImportSource @emotion/react */
import Input from "@/components/ui/Input";
import FormControl from "./FormControl";
import { FormField } from "@/types/form";

const InputField = ({
  label,
  inputId,
  type,
  name,
  placeholder,
  required,
  onBlur,
  fieldError,
}: FormField) => {
  return (
    <FormControl>
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
    </FormControl>
  );
};

export default InputField;
