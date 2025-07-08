import { ChangeEvent, RefObject } from "react";

export interface FormField {
  label: string;
  inputId?: string;
  type?: string;
  name: string;
  placeholder: string;
  required?: boolean;
  form: RefObject<HTMLFormElement | null>;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface ReqData {
  [key: string]: FormDataEntryValue;
}
