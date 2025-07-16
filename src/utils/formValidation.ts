import { ValidatorRules, ValidatorResult, FormFieldName } from "../types/form";

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

export const validateInput = <T extends FormFieldName>(
  validatorType: T,
  ...values: Parameters<ValidatorRules[T]>
): ValidatorResult => {
  const errorValidator = () => ({
    isValid: false,
    message: "유효성 체크가 정의되지 않았습니다.",
  });

  const validator =
    (validators[validatorType] as (
      ...args: Parameters<ValidatorRules[T]>
    ) => ValidatorResult) || errorValidator;
  const { isValid, message } = validator(...values);
  return { isValid, message };
};
