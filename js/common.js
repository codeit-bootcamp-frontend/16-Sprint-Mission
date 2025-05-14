const emailInput = document.querySelector("#email");
const emailInputMsg = document.querySelector(".email__msg");
const passwordInput = document.querySelector("#password");
const passwordInputMsg = document.querySelector(".password__msg");
const passwordIcon = document.querySelectorAll(".visibility__icon");
const button = document.querySelector(".btn");

/* 이메일 유효성 체크 */
const emailValidate = () => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  let isValid = false;

  if (!emailInput.value) {
    emailInputMsg.innerText = "이메일을 입력해주세요";
    isValid = false;
  } else if (!regex.test(emailInput.value)) {
    emailInputMsg.innerText = "잘못된 이메일 형식입니다 ";
    isValid = false;
  } else {
    emailInputMsg.innerText = "";
    isValid = true;
  }
  return isValid;
};

/* 이메일 인풋, 에러 메시지 클래스 변경 */
const updateEmailClass = (result) => {
  emailInput.classList.remove("success", "error");
  emailInputMsg.classList.remove("error");

  if (result) {
    emailInput.classList.add("success");
  } else {
    emailInput.classList.add("error");
    emailInputMsg.classList.add("error");
  }
};

/* 비밀번호 유효성 체크 */
const passwordValidate = () => {
  let isValid = false;
  if (!passwordInput.value) {
    passwordInputMsg.innerText = "비밀번호를 입력해주세요";
    isValid = false;
  } else if (passwordInput.value.length < 8) {
    passwordInputMsg.innerText = "비밀번호를 8자 이상 입력해주세요";
    isValid = false;
  } else {
    passwordInputMsg.innerText = "";
    isValid = true;
  }
  return isValid;
};

/* 비밀번호 인풋, 에러 메시지 클래스 변경 */
const updatePasswordClass = (result) => {
  passwordInput.classList.remove("success", "error");
  passwordInputMsg.classList.remove("success", "error");

  if (result) {
    passwordInput.classList.add("success");
  } else {
    passwordInput.classList.add("error");
    passwordInputMsg.classList.add("error");
  }
};

export default {
  emailInput,
  emailInputMsg,
  passwordInput,
  passwordInputMsg,
  passwordIcon,
  button,
  emailValidate,
  updateEmailClass,
  passwordValidate,
  updatePasswordClass,
};
