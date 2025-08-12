export interface InputFieldProps {
  label: string;
  inputId?: string;
  type?: string;
  name: string;
  placeholder: string;
  required?: boolean;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
  fieldError?: string;
}
