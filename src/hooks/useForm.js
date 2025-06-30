import { useState, useEffect, useRef } from "react";
import debounce from "@/utils/debounce";
import * as validators from "@/utils/validators";
import { formatPrice, unformatPrice } from "@/utils/formatPrice";

const CHECK_FORM_DEBOUNCE_MS = 300;

const validatorMap = {
  name: validators.validateProductName,
  description: validators.validateProductDescription,
  price: validators.validateProductPrice,
  email: validators.validateEmail,
  password: validators.validatePassword,
};

const useForm = (formRef, formOptions) => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [tags, setTags] = useState([]);
  const shouldCheckTags = formRef.current?.dataset.includeTags === "true";

  // 에러 메시지
  const [emailMsg, setEmailMsg] = useState("");
  const [passwordMsg, setPasswordMsg] = useState("");

  const handlePriceInput = (e) => {
    const { value } = e.target;
    // 숫자만 입력 받기
    if (!/^\d*$/.test(value))
      e.target.value = e.target.value.replace(/[^\d]/g, "");
  };

  const handleTagsChange = (updatedTags) => {
    setTags(updatedTags);
  };

  const validateForm = (e) => {
    e?.preventDefault();

    const elements = formRef.current?.elements;
    if (!elements) return;

    const values = {};
    const results = [];

    for (const el of elements) {
      values[el.name] = el.value;
    }

    if (values.productPrice) {
      values.productPrice = values.productPrice?.replace(",", "");
    }

    if (shouldCheckTags) {
      results.push(formOptions.customFieldValidators.tags(tags));
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

    // 에러 메시지 업데이트
    const validator = validatorMap[name];
    if (validator) {
      const { message } = validator(value);
      if (name === "email") setEmailMsg(message);
      if (name === "password") setPasswordMsg(message);
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
    emailMsg,
    passwordMsg,
  };
};

export default useForm;
