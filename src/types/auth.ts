import { Fields, FieldName } from "./field";

export interface AuthState extends Fields {
  setField: (name: FieldName, value: string) => void;
  validateField: (name: FieldName, value: string) => void;
  resetFields: () => void;
}
