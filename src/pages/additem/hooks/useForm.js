import { useCallback, useRef, useState } from "react";

export const useForm = (options) => {
  const dataRef = useRef({ ...options.initialValues });
  const [errors, setErrors] = useState({});

  // 공통 검증 로직
  const runValidation = useCallback(
    (key, value) => {
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
    },
    [options?.validations]
  );

  // getter함수
  const getFieldValue = useCallback((key) => {
    return dataRef.current[key];
  }, []);

  // setter함수
  const setFieldValue = useCallback(
    (key, value) => {
      dataRef.current[key] = value;
      const message = runValidation(key, value);

      setErrors((prev) => ({ ...prev, [key]: message }));
    },
    [runValidation]
  );

  // onChange관련 handle함수
  // 리렌더링 최소화를 위해 에러체크 안 함
  const handleChange = useCallback(
    (key, sanitizeFn) => (e) => {
      const raw = e.target.value;
      const value = sanitizeFn ? sanitizeFn(raw) : raw;

      // ref에 데이터 저장 (비제어 컴포넌트)
      dataRef.current[key] = value;

      // 렌더링 테스트용 (지워야 함)
     const message = runValidation(key, value);
      setErrors((prev) => {
        if (prev[key] === message) return prev;
        return { ...prev, [key]: message };
      });
    },
    [runValidation]
  );

  // onBlur관련 handle함수
  // 리렌더링 최소화를 위해 onBlur일 때만 에러체크 함
  const handleBlur = useCallback(
    (key, sanitizeFn) => (e) => {
      const raw = e.target.value;
      const value = sanitizeFn ? sanitizeFn(raw) : raw;
      e.target.value = value;
      setFieldValue(key, value);

      const message = runValidation(key, value);
      setErrors((prev) => {
        if (prev[key] === message) return prev;
        return { ...prev, [key]: message };
      });
    },
    [runValidation, setFieldValue]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validations = options?.validations;

    if (validations) {
      let valid = true;
      const newErrors = {};

      for (const key in validations) {
        const value = dataRef.current[key];
        const message = runValidation(key, value);

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
    options?.onSubmit?.(dataRef.current);
  };

  return {
    setFieldValue,
    getFieldValue,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
  };
};
