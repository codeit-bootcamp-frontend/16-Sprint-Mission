import { useState, useEffect, FormEvent, ChangeEvent, RefObject } from "react";
import debounce from "@/utils/debounce";
import * as validators from "@/utils/validators";
import { formatPrice, unformatPrice } from "@/utils/formatPrice";

const CHECK_FORM_DEBOUNCE_MS = 300;

interface FormOptions<T> {
  customFieldValidators?: {
    [key: string]: (value: T) => boolean;
  };
}

interface ValidationResult {
  isValid: boolean;
  message: string;
}

type ValidationFn = (value: string | string[] | number) => ValidationResult;

type ValidatorMap = {
  [key: string]: ValidationFn;
};

const validatorMap: ValidatorMap = {
  name: validators.validateProductName,
  description: validators.validateProductDescription,
  price: validators.validateProductPrice,
  email: validators.validateEmail,
  password: validators.validatePassword,
  passwordCheck: validators.validatePasswordCheck,
  nickname: validators.validateNickname,
};

interface FieldErrors {
  [key: string]: string;
}

const useForm = (
  formRef: RefObject<HTMLFormElement | null>,
  formOptions?: FormOptions<string | string[] | number | undefined>
) => {
  const [isFormValid, setIsFormValid] = useState(false);

  const [tags, setTags] = useState<string[]>([]);
  const shouldCheckTags = formRef.current?.dataset.includeTags === "true";
  const checkTagsResult = formOptions?.customFieldValidators?.tags(tags);

  // 에러 메시지: 에러 발생은 순서가 없으므로, 리렌더링 비용을 감수하고 한번에 관리
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const handlePriceInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    // 숫자만 입력 받기
    if (!/^\d*$/.test(value))
      e.target.value = e.target.value.replace(/[^\d]/g, "");
  };

  const handleTagsChange = (updatedTags: string[]) => {
    setTags(updatedTags);
  };

  const validateForm = (e: FormEvent) => {
    e?.preventDefault();

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);

    const values: Record<string, string> = {};
    const results: boolean[] = [];

    for (const [name, value] of formData.entries()) {
      values[name] = value.toString(); // Record<string, string>으로 타입을 선언했으므로, 문자열만 받기 위해 toString() 사용
    }

    if (values.productPrice) {
      values.productPrice = values.productPrice?.replace(",", "");
    }

    if (shouldCheckTags && checkTagsResult) {
      results.push(checkTagsResult);
    }

    for (const key in values) {
      const validator = validatorMap[key];
      if (validator) {
        results.push(validator(values[key]).isValid);
      }
    }

    setIsFormValid(results.every(Boolean));
  };

  const debouncedValidateForm = debounce(validateForm, CHECK_FORM_DEBOUNCE_MS);

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "price") {
      const raw = unformatPrice(value);
      const formatted = formatPrice(raw);

      // 업데이트 값에 따라 다시 포맷팅
      if (value !== formatted) {
        const priceInputEl = document.querySelector(
          "#productPrice"
        ) as HTMLInputElement;
        priceInputEl.value = formatted;
      }
    }

    // 에러 메시지 업데이트
    const validator = validatorMap[name];
    if (validator) {
      const { message } = validator(value);
      setFieldErrors((prev) => ({
        ...prev,
        [name]: message,
      }));
    }

    debouncedValidateForm(); // blur될 때만 폼 유효성 검사
  };

  useEffect(() => {
    debouncedValidateForm();
    return () => debouncedValidateForm.cancel();
  }, [debouncedValidateForm]);

  return {
    tags,
    isFormValid,
    handlePriceInput,
    handleTagsChange,
    handleBlur,
    validateForm,

    // 에러 메시지
    fieldErrors,
  };
};

export default useForm;
