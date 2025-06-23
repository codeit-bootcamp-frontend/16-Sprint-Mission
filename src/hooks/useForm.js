import { useState, useEffect } from "react";
import debounce from "@/utils/debounce";
import {
  validateProductName,
  validateProductDescription,
  validateProductPrice,
} from "@/utils/validators";
import { formatPrice, unformatPrice } from "@/utils/formatPrice";

const CHECK_FORM_DEBOUNCE_MS = 300;

const validatorMap = {
  name: validateProductName,
  description: validateProductDescription,
  price: validateProductPrice,
};

const useForm = (formRef) => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [tags, setTags] = useState([]);
  const shouldCheckTags = formRef.current?.dataset.includeTags === "true";

  const handlePriceInput = (e) => {
    const { value } = e.target;
    // 숫자만 입력 받기
    if (!/^\d*$/.test(value))
      e.target.value = e.target.value.replace(/[^\d]/g, "");
  };

  const handleTagsChange = (updatedTags) => {
    setTags(updatedTags);
  };

  const validateForm = () => {
    const elements = formRef.current?.elements;
    if (!elements) return;

    const values = {};
    const results = [];

    for (const el of elements) {
      if (el.type === "text" || el.tagName === "TEXTAREA") {
        // text input, textarea 폼 요소 values에 추가
        values[el.name] = el.value;
      }
    }

    if (values.productPrice) {
      values.productPrice = values.productPrice?.replace(",", "");
    }

    if (shouldCheckTags) {
      results.push(tags.length > 0);
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

  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (name === "price") {
      const raw = unformatPrice(value);
      const formatted = formatPrice(raw);

      // 업데이트 값에 따라 다시 포맷팅
      if (value !== formatted) {
        const priceInputEl = document.querySelector("#productPrice");
        priceInputEl.value = formatted;
      }
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
  };
};

export default useForm;
