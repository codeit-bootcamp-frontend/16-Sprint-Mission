import { Fields, FieldName } from "./field";

export interface AuthState extends Fields {
  setField: (name: FieldName, value: string) => void;
  validateField: (
    name: FieldName,
    ...values: [string] | [string, string]
  ) => void;
  resetFields: () => void;
}
