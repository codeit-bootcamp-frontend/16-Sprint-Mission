import { useState } from "react";

export const ruleObj = {
  "user-email": {
    isValid(value) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    },
    getErrorMessage(value) {
      return value ? "잘못된 이메일입니다." : "이메일을 입력해주세요";
    },
  },
  "user-password": {
    isValid(value) {
      return value.length >= 8;
    },
    getErrorMessage(value) {
      return value.length == 0
        ? "비밀번호를 입력해주세요."
        : "비밀번호를 8자 이상 입력해주세요.";
    },
  },
  "user-name": {
    isValid(value) {
      return value;
    },
    getErrorMessage() {
      return "닉네임을 입력해주세요";
    },
  },
  "user-password-check": {
    isValid(value, pwValue) {
      return pwValue === value && value.length !== 0;
    },
    getErrorMessage() {
      return "비밀번호가 일치하지 않습니다.";
    },
  },
};

export function useValidate() {
  const [err, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [isValidNow, setIsValidNow] = useState(false);
  const [value, setValue] = useState("");

  function isValidate(name, pwValue) {
    const validator = ruleObj[name];
    const targetValue = value;
    const validResult = validator.isValid(targetValue, pwValue);

    setErr(!validResult);
    validResult ? setErrMsg("") : setErrMsg(validator.getErrorMessage(targetValue));
    setIsValidNow(validResult);
  }


  return { err, errMsg, isValidate, isValidNow, value, setValue };
}