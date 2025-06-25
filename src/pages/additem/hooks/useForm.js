import { useState } from "react";

export const useForm = (options) => {
  const [data, setData] = useState(options?.initialValues || {});
  const [errors, setErrors] = useState({});

  // 공통 검증 로직
  const runValidation = (key, value) => {
    const validations = options?.validations;
    if (!validations) return "";
    const validation = validations[key];
    if (!validation) return "";

    if (validation.required?.value && !value) {
      return validation.required.message;
    }
    if (
      validation.pattern?.value &&
      !RegExp(validation.pattern.value).test(value)
    ) {
      return validation.pattern.message;
    }
    if (validation.custom?.isValid && !validation.custom.isValid(value)) {
      return validation.custom.message;
    }
    return "";
  };

  const handleChange = (key, sanitizeFn) => (e) => {
    const raw = e.target.value;
    const value = sanitizeFn ? sanitizeFn(raw) : raw;
    setData((prev) => ({ ...prev, [key]: value }));
    // Change 단계 검증
    const message = runValidation(key, value);
    setErrors((prev) => ({ ...prev, [key]: message }));
  };

  const handleBlur = (key) => () => {
    const value = data[key];
    // Blur 단계 검증
    const message = runValidation(key, value);
    setErrors((prev) => ({ ...prev, [key]: message }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validations = options?.validations;
    if (validations) {
      let valid = true;
      const newErrors = {};
      for (const key in validations) {
        const message = runValidation(key, data[key]);
        if (message) valid = false;
        newErrors[key] = message;
      }
      if (!valid) {
        setErrors(newErrors);
        return;
      }
    }

    // 모든 필드 유효
    setErrors({});
    options?.onSubmit?.(data);
  };

  return {
    data,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
  };
};
