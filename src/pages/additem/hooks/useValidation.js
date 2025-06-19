const validateProductName = (value) => {
  if (!value.trim()) return "상품명을 입력해 주세요";
  return "";
};

const validateProductDescription = (value) => {
  if (!value.trim()) return "상품 소개를 입력해주세요.";
  return "";
};

const validateProductPrice = (value) => {
  if (!value.trim()) return "가격을 입력해주세요.";
  if (isNaN(value)) return "숫자만 입력해주세요.";
  return "";
};

const validateProductTag = (value) => {
    if (!Array.isArray(value) || value.length === 0) {
      return "태그를 하나 이상 입력해주세요.";
    }
  return "";
};

const validateUploadImage = (value) => {
  if (!(value instanceof FileList)) {
    return "파일 형식이 잘못되었습니다.";
  }

  if (value.length === 0) {
    return "상품 이미지를 업로드해주세요.";
  } else if (value.length > 1) {
    return "상품 이미지는 한 개만 업로드할 수 있습니다.";
  }

  return "";
};

export const validateField = (name, value) => {
  const validators = {
    productName: validateProductName,
    productDescription: validateProductDescription,
    productPrice: validateProductPrice,
    uploadImage: validateUploadImage,
    productTag: validateProductTag,
  };

  return validators[name] ? validators[name](value) : "";
};
