const emailInput = document.querySelector("#email");
const emailInputMsg = document.querySelector(".email__msg");
const passwordInput = document.querySelector("#password");
const passwordInputMsg = document.querySelector(".password__msg");
const passwordIcons = document.querySelectorAll(".visibility__icon");
const nicknameInput = document.querySelector("#nickname");
const nicknameInputMsg = document.querySelector(".nickname__msg");
const passwordCheckInput = document.querySelector("#passwordCheck");
const passwordCheckMsg = document.querySelector(".password__check__msg");
const button = document.querySelector(".btn");

const validators = {
  email: (value) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    if (!value) return { isValid: false, message: "이메일을 입력해주세요" };
    if (!regex.test(value)) {
      return { isValid: false, message: "" };
    }
    return { isValid: true, message: "잘못된 이메일 형식입니다" };
  },
  password: (value) => {
    if (!value) return { isValid: false, message: "비밀번호를 입력해주세요" };
    if (value.length < 8)
      return { isValid: false, message: "비밀번호를 8자 이상 입력해주세요" };
    return { isValid: true, message: "" };
  },
  passwordCheck: (value) => {
    if (!passwordInput.value)
      return { isValid: false, message: "비밀번호를 먼저 입력해주세요" };
    if (value.length < 8)
      return { isValid: false, message: "비밀번호를 8자 이상 입력해주세요" };
    if (value !== passwordInput.value)
      return { isValid: false, message: "비밀번호가 일치하지 않습니다" };
    return { isValid: true, message: "" };
  },
  nickname: (value) => {
    if (!value) return { isValid: false, message: "닉네임을 입력해주세요" };
    return { isValid: true, message: "" };
  },
};

/* 공통 유효성 체크 */
const validateInput = (inputElement, inputMsgElement, validatorType) => {
  const { isValid, message } = validators[validatorType](inputElement.value);
  inputMsgElement.innerText = message;

  inputElement.classList.remove("success", "error");
  inputMsgElement.classList.remove("error");

  if (isValid) {
    inputElement.classList.add("success");
  } else {
    inputElement.classList.add("error");
    inputMsgElement.classList.add("error");
  }

  return isValid;
};

export default {
  emailInput,
  emailInputMsg,
  passwordInput,
  passwordInputMsg,
  passwordIcons,
  nicknameInput,
  nicknameInputMsg,
  passwordCheckInput,
  passwordCheckMsg,
  button,
  validateInput,
};
