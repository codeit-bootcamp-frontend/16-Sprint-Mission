import { useState } from 'react';

const validateField = (name, value, values, mode = 'signup') => {
  let error = '';
  if (name === 'email') {
    if (!value) error = '이메일을 입력해주세요.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = '이메일 형식이 올바르지 않습니다.';
  }
  if (name === 'password') {
    if (!value) error = '비밀번호를 입력해주세요.';
    else if (value.length < 8) error = '비밀번호는 8자 이상이어야 합니다.';
  }
  if (mode === 'signup') {
    if (name === 'nickname') {
      if (!value) error = '닉네임을 입력해주세요.';
    }
    if (name === 'confirmPassword') {
      if (!value) error = '비밀번호 확인을 입력해주세요.';
      else if (value !== values.password) error = '비밀번호가 일치하지 않습니다.';
      else if (value.length < 8) error = '비밀번호는 8자 이상이어야 합니다.';
    }
  }
  return error;
};

const useFormValidation = (mode = 'signup') => {
  const [errors, setErrors] = useState({});

  // 전체 폼 검사
  const validate = (values) => {
    const newErrors = {};
    Object.keys(values).forEach((key) => {
      const error = validateField(key, values[key], values, mode);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return newErrors;
  };

  return { errors, setErrors, validate, validateField };
};

export default useFormValidation;
