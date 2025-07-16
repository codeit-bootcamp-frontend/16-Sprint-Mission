export interface ValidatorResult {
  isValid: boolean;
  message: string;
}

export interface ValidateFields {
  image: ValidatorResult;
  title: ValidatorResult;
  content: ValidatorResult;
  price: ValidatorResult;
  tagList: ValidatorResult;
  inquiry: ValidatorResult;
  email: ValidatorResult;
  password: ValidatorResult;
  passwordCheck: ValidatorResult;
  nickname: ValidatorResult;
}

export type FormFieldName = keyof ValidateFields;

export interface ValidatorRules {
  image: (value: string) => ValidatorResult;
  title: (value: string) => ValidatorResult;
  content: (value: string) => ValidatorResult;
  price: (value: string) => ValidatorResult;
  tagList: (value: string[]) => ValidatorResult;
  inquiry: (value: string) => ValidatorResult;
  email: (value: string) => ValidatorResult;
  password: (value: string) => ValidatorResult;
  passwordCheck: (value: string, password: string) => ValidatorResult;
  nickname: (value: string) => ValidatorResult;
}
