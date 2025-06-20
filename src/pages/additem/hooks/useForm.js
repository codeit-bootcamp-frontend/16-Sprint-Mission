import { useState } from "react";

export const useForm = (options) => {
  const [data, setData] = useState(options?.initialValues || {});
  const [errors, setErrors] = useState({});

  const handleChange = (key, sanitizeFn) => (e) => {
    const value = sanitizeFn ? sanitizeFn(e.target.value) : e.target.value;
    setData({
      ...data,
      [key]: value,
    });
       const validations = options?.validations;
    if (!validations) return;
    const validation = validations[key];
    let message = "";

    if (validation?.required?.value && !value) {
      message = validation.required.message;
    } else if (
      validation?.pattern?.value &&
      !RegExp(validation.pattern.value).test(value)
    ) {
      message = validation.pattern.message;
    } else if (
      validation?.custom?.isValid &&
      !validation.custom.isValid(value)
    ) {
      message = validation.custom.message;
    }

    setErrors((prev) => ({ ...prev, [key]: message }));
  };

  const handleBlur = (key) => () => {
    const validations = options?.validations;
    if (!validations) return;
    const validation = validations[key];
    const value = data[key];
    let message = "";

    if (validation?.required?.value && !value) {
      message = validation.required.message;
    } else if (
      validation?.pattern?.value &&
      !RegExp(validation.pattern.value).test(value)
    ) {
      message = validation.pattern.message;
    } else if (
      validation?.custom?.isValid &&
      !validation.custom.isValid(value)
    ) {
      message = validation.custom.message;
    }

    setErrors((prev) => ({ ...prev, [key]: message }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validations = options?.validations;
    if (validations) {
      let valid = true;
      const newErrors = {};
      for (const key in validations) {
        const value = data[key];
        const validation = validations[key];
        if (validation?.required?.value && !value) {
          valid = false;
          newErrors[key] = validation?.required?.message;
        }

        const pattern = validation?.pattern;
        if (pattern?.value && !RegExp(pattern.value).test(value)) {
          valid = false;
          newErrors[key] = pattern.message;
        }

        const custom = validation?.custom;
        if (custom?.isValid && !custom.isValid(value)) {
          valid = false;
          newErrors[key] = custom.message;
        }
      }

      if (!valid) {
        setErrors(newErrors);
        return;
      }
    }

    setErrors({});

    if (options?.onSubmit) {
      options.onSubmit(data);
    }
  };

  return {
    data,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
  };
};
