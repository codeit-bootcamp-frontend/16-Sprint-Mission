import { useState, useMemo } from "react";

const useForm = (initialValues = {}, validators = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(null);

  // 이벤트 기반 input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    // 즉시 유효성 검사
    if (validators[name]) {
      const error = validators[name](value);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  // 태그 갯수 change handler
  const handleTagFieldChange = (tags, message) => {
    if (tags.length === 0) {
      setErrors((prev) => ({
        ...prev,
        tags: message,
      }));
    }
  };

  // 전체 유효성 검사 실행
  const checkIsFormValidate = () => {
    const newErrors = {};
    for (const key in validators) {
      const error = validators[key](values[key]);
      if (error) {
        newErrors[key] = error;
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 제출 핸들러 생성
  const handleFormSubmit = (onFormSubmit) => (e) => {
    e.preventDefault();
    if (checkIsFormValidate()) {
      onFormSubmit(values);
    }
  };

  // 유효성 여부 메모이제이션
  const isValid = useMemo(() => {
    return Object.values(errors).every((msg) => !msg);
  }, [errors]);

  // 폼 리셋
  const reset = () => {
    setValues(initialValues);
    setErrors({});
  };

  return {
    values,
    errors,
    handleInputChange,
    handleTagFieldChange,
    handleFormSubmit,
    isValid,
    reset,
  };
};

export default useForm;
