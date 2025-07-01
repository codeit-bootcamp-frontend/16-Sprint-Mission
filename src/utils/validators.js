/* 상품명 유효성 */
export const validateProductName = (value) => {
  if (!value.trim())
    return { isValid: false, message: "상품명을 입력해주세요." };
  return { isValid: true, message: "" };
};

/* 상품 설명 유효성 */
export const validateProductDescription = (value) => {
  if (!value.trim())
    return { isValid: false, message: "상품 소개를 입력해주세요." };
  return { isValid: true, message: "" };
};

/* 상품 가격 유효성 */
export const validateProductPrice = (value) => {
  if (!value.trim() || value.trim() === "0")
    return { isValid: false, message: "상품 가격을 입력해주세요." };
  if (Number(value) < 0)
    return { isValid: false, message: "상품 가격은 0원 이상이어야 합니다." };
  return { isValid: true, message: "" };
};

/* 태그 유효성 */
export const validateTag = (newTag, existingTags) => {
  if (newTag.trim().length === 0)
    return { isValid: false, message: "태그명을 입력해주세요." };
  if (existingTags.includes(newTag.trim()))
    return { isValid: false, message: "중복된 태그명입니다." };
  return { isValid: true, message: "" };
};

/* 이메일 유효성 */
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export function validateEmail(value) {
  if (!value.trim()) {
    return { isValid: false, message: "이메일을 입력해주세요." };
  }
  if (!emailRegex.test(value)) {
    return { isValid: false, message: "잘못된 이메일 형식입니다." };
  }
  return { isValid: true, message: "" };
}

/* 비밀번호 유효성 */
export function validatePassword(value) {
  if (!value.trim()) {
    return { isValid: false, message: "비밀번호를 입력해주세요." };
  }
  if (value.trim().length < 8) {
    return { isValid: false, message: "비밀번호를 8자 이상 입력해주세요." };
  }
  return { isValid: true, message: "" };
}

/* 비밀번호 확인 유효성 */
export function validatePasswordCheck(value) {
  const inputPassword = document.querySelector("input[name=password]");
  if (inputPassword.value !== value) {
    return { isValid: false, message: "비밀번호가 일치하지 않습니다." };
  }
  return { isValid: true, message: "" };
}

/* 닉네임 유효성 */
export function validateNickname(value) {
  if (!value.trim()) {
    return { isValid: false, message: "닉네임을 입력해주세요." };
  }
  return { isValid: true, message: "" };
}
