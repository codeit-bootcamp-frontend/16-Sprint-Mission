export interface Fields {
  email: FieldState;
  password: FieldState;
}

export type FormFieldName = keyof Fields;

export type FieldName = keyof Fields;

export interface FieldState {
  value: string;
  validInfo: {
    isValid: boolean | null;
    message: string;
  };
}
