import { Fields, FieldName } from "../types/field";

export interface LoginState extends Fields {
  setField: (name: FieldName, value: string) => void;
  validateField: (name: FieldName, value: string) => void;
}
