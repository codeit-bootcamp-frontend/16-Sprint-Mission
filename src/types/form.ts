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

export type ValidatorParams = {
  image: [value: string];
  title: [value: string];
  content: [value: string];
  price: [value: string];
  tagList: [value: string[]];
  inquiry: [value: string];
  email: [value: string];
  password: [value: string];
  passwordCheck: [value: string, password: string];
  nickname: [value: string];
};

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

/* 공통 유효성 체크 */
export const validators: ValidatorRules = {
  image: (value) => {
    if (value)
      return {
        isValid: false,
        message: "*이미지 등록은 최대 1개까지 가능합니다.",
      };
    return { isValid: true, message: "" };
  },
  title: (value) => {
    if (!value) return { isValid: false, message: "상품명을 입력해주세요" };
    return { isValid: true, message: "" };
  },
  content: (value) => {
    if (!value) return { isValid: false, message: "상품 소개를 입력해주세요" };
    return { isValid: true, message: "" };
  },
  price: (value) => {
    const unformattedVal = value.replace(/,/g, "");
    const regex = /^[1-9]\d*$/;
    if (!value) return { isValid: false, message: "판매 가격을 입력해주세요" };
    if (!regex.test(unformattedVal))
      return {
        isValid: false,
        message: "판매 가격 형식을 올바르게 입력해주세요",
      };

    return { isValid: true, message: "" };
  },
  tagList: (value) => {
    if (value.length === 0)
      return { isValid: false, message: "태그를 입력해주세요" };
    return { isValid: true, message: "" };
  },
  inquiry: (value) => {
    if (!value) return { isValid: false, message: "문의 내용을 입력해주세요" };
    return { isValid: true, message: "" };
  },
  email: (value) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    if (!value) return { isValid: false, message: "이메일을 입력해주세요" };
    if (!regex.test(value))
      return {
        isValid: false,
        message: "잘못된 이메일 형식입니다",
      };

    return { isValid: true, message: "" };
  },
  password: (value) => {
    if (!value) return { isValid: false, message: "비밀번호를 입력해주세요" };
    if (value.length < 8)
      return {
        isValid: false,
        message: "비밀번호를 8자 이상 입력해주세요",
      };

    return { isValid: true, message: "" };
  },
  passwordCheck: (value, password) => {
    if (!password)
      return { isValid: false, message: "비밀번호를 먼저 입력해주세요" };
    if (value.length < 8)
      return { isValid: false, message: "비밀번호를 8자 이상 입력해주세요" };
    if (value !== password)
      return { isValid: false, message: "비밀번호가 일치하지 않습니다" };
    return { isValid: true, message: "" };
  },
  nickname: (value) => {
    if (!value) return { isValid: false, message: "닉네임을 입력해주세요" };
    return { isValid: true, message: "" };
  },
};
