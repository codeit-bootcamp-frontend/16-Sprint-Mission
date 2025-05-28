import { useState, useEffect } from "react";
import debounce from "../utils/debounce";
import {
  validateProductName,
  validateProductDescription,
  validateProductPrice,
} from "../utils/validators";
import { formatPrice, unformatPrice } from "../utils/formatPrice";

const CHECK_FORM_DEBOUNCE_MS = 300;

const useForm = (initialValues) => {
  const [formData, setFormData] = useState(initialValues);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    const digits = unformatPrice(value);
    const formatted = formatPrice(digits);

    setFormData((prev) => ({
      ...prev,
      [name]: formatted,
    }));
  };

  const handleTagsChange = (updatedTags) => {
    setFormData((prev) => ({
      ...prev,
      tags: updatedTags,
    }));
  };

  const validateForm = (data) => {
    const { name, description, price, tags } = data;

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
      const formatted = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      setFormData((prev) => ({
        ...prev,
        [name]: formatted,
      }));
    }

    debouncedValidateForm(formData);
  };

  useEffect(() => {
    debouncedValidateForm(formData);
    return () => debouncedValidateForm.cancel();
  }, [formData, debouncedValidateForm]);

  return {
    formData,
    isFormValid,
    handleChange,
    handlePriceChange,
    handleTagsChange,
    handleBlur,
  };
};

export default useForm;
