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

    // formDataRef.current = {
    //   ...formDataRef.current,
    //   [name]: formatted,
    // };
  };

  const handleTagsChange = (updatedTags) => {
    setTags(updatedTags);
  };

  const validateForm = () => {
    const nameInput = document.querySelector("#productName")?.value;
    const descriptionInput = document.querySelector("#productDesc")?.value;
    const priceInput = document.querySelector("#productPrice")?.value;

    const isNameValid = validateProductName(nameInput).isValid;
    const isDescriptionValid =
      validateProductDescription(descriptionInput).isValid;
    const isPriceValid = validateProductPrice(priceInput).isValid;
    const isTagsValid = tags.length > 0;

    setIsFormValid(
      isNameValid && isDescriptionValid && isPriceValid && isTagsValid
    );
  };

  const debouncedValidateForm = debounce(validateForm, CHECK_FORM_DEBOUNCE_MS);

  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (name === "price") {
      const formatted = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      // formDataRef.current = {
      //   ...formDataRef.current,
      //   [name]: formatted,
      // };
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
