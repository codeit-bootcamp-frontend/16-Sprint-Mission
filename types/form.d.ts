export interface InputFieldProps {
  type?: string;
  label?: string;
  placeholder: string;
  inputId?: string;
  inputRef?: Ref<HTMLInputElement>;
  required?: boolean;
  error?: string;
}

export type PasswordFieldProps = Omit<InputFieldProps, "required"> & {
  isLogin?: boolean;
};

export interface LoginFormValues {
  email: string;
  password: string;
}
