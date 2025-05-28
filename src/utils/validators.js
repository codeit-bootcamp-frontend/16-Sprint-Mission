export const validateProductName = (value) => {
  if (!value.trim())
    return { isValid: false, message: "상품명을 입력해주세요." };
  return { isValid: true, message: "" };
};

export const validateProductDescription = (value) => {
  if (!value.trim())
    return { isValid: false, message: "상품 소개를 입력해주세요." };
  return { isValid: true, message: "" };
};

export const validateProductPrice = (value) => {
  if (!value.trim() || value.trim() === "0")
    return { isValid: false, message: "상품 가격을 입력해주세요." };
  if (Number(value) < 0)
    return { isValid: false, message: "상품 가격은 0원 이상이어야 합니다." };
  return { isValid: true, message: "" };
};

export const validateTag = (newTag, existingTags) => {
  if (newTag.trim().length === 0)
    return { isValid: false, message: "태그명을 입력해주세요." };
  if (existingTags.includes(newTag.trim()))
    return { isValid: false, message: "중복된 태그명입니다." };
  return { isValid: true, message: "" };
};
