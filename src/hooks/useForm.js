import { useState, useEffect } from "react";
import debounce from "../utils/debounce";
import {
  validateProductName,
  validateProductDescription,
  validateProductPrice,
} from "../utils/validators";
import { formatPrice, unformatPrice } from "../utils/formatPrice";

const CHECK_FORM_DEBOUNCE_MS = 300;

const useForm = () => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [tags, setTags] = useState([]);

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
    const name = document.querySelector("#productName")?.value ?? "";
    const description = document.querySelector("#productDesc")?.value ?? "";
    const priceString = document.querySelector("#productPrice")?.value ?? 0;
    const price = priceString.replace(",", "");

    const isNameValid = validateProductName(name).isValid;
    const isDescriptionValid = validateProductDescription(description).isValid;
    const isPriceValid = validateProductPrice(price).isValid;
    const isTagsValid = tags.length > 0;

    setIsFormValid(
      isNameValid && isDescriptionValid && isPriceValid && isTagsValid
    );
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
