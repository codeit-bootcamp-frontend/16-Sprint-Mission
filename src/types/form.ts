import { ChangeEvent } from "react";

export interface FormField {
  label: string;
  inputId?: string;
  type?: string;
  name: string;
  placeholder: string;
  required?: boolean;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
  fieldError?: string;
}

export interface ReqData {
  [key: string]: FormDataEntryValue;
}
