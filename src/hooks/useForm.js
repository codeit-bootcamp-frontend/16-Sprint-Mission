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

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    const digits = unformatPrice(value);
    const formatted = formatPrice(digits);
    console.log(formatted);
  };

  const handleTagsChange = (updatedTags) => {
    setTags(updatedTags);
  };

  const validateForm = () => {
    const name = document.querySelector("#productName")?.value ?? "";
    const description = document.querySelector("#productDesc")?.value ?? "";
    const price = document.querySelector("#productPrice")?.value ?? 0;

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
      const raw = value.replaceAll(",", "");
      const formatted = raw.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      // 값이 실제로 변경되었을 때만 업데이트
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
    handlePriceChange,
    handleTagsChange,
    handleBlur,
    validateForm,
  };
};

export default useForm;
