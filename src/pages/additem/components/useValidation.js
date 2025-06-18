const validateProductName = (value) => {
  if (!value.trim()) return "상품명을 입력해 주세요";
  return "";
};
const validateProductDescription = (value) => {
  if (!value.trim()) return "상품 소개를 입력해주세요.";
  return "";
};
const validatePrice = (value) => {
  if (!value.trim()) return "가격을 입력해주세요.";
  if (isNaN(value)) return "숫자만 입력해주세요.";
  return "";
};

export const validateField = (name, value) => {
  const validators = {
    productName: validateProductName,
    productDescription: validateProductDescription,
    price: validatePrice,
  };

  return validators[name] ? validators[name](value) : "";
};
