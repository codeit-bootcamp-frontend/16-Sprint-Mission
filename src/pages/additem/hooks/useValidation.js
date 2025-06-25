const validateProductName = (value) => {
  return !value.trim() ? "상품명을 입력해 주세요" : "";
};

const validateProductDescription = (value) => {
  return !value.trim() ? "상품 소개를 입력해주세요." : "";
};

export function useValidation() {
  return {
    validations: {
      productName: {
        required: { value: true, message: validateProductName("") },
      },

      productDescription: {
        required: {
          value: true,
          message: validateProductDescription(""),
        },
      },

      productPrice: {
        required: { value: true, message: "가격을 입력해주세요." },
        custom: {
          isValid: (v) => {
            // 1) 콤마 다 제거
            const raw = String(v).replace(/,/g, "");
            // 2) 빈 문자열이 아니고, 숫자로 잘 변환되는지 확인
            return raw !== "" && !isNaN(raw);
          },
          message: "숫자만 입력해주세요.",
        },
      },

      productTag: {
        custom: {
          isValid: (v) => Array.isArray(v) && v.length > 0,
          message: "태그를 하나 이상 입력해주세요.",
        },
      },

      uploadImage: {
        custom: {
          // 빈 값(null)일 땐 true → 통과, 값이 있으면 instanceof File 검사
          isValid: (v) => !v || v instanceof File,
          message: "유효한 이미지 파일만 업로드 가능합니다.",
        },
      },
    },
  };
}
