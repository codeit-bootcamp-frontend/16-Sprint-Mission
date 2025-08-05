export interface LoginFields {
  email: FieldState;
  password: FieldState;
}

export interface SignupFields extends LoginFields {
  passwordCheck: FieldState;
  nickname: FieldState;
}

export type FormFieldName = keyof SignupFields;

export type FieldName = keyof SignupFields;
export type LoginFieldName = keyof LoginFields;

export interface FieldState {
  value: string;
  validInfo: {
    isValid: boolean | null;
    message: string;
  };
}
