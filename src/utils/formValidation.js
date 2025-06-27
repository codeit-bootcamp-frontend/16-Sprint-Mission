/* 공통 유효성 체크 */
export const validators = {
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
};

export const validateInput = (validatorType, value) => {
  const { isValid, message } = validators[validatorType](value);
  return { isValid, message };
};
