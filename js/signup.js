import common from "./common.js";

const {
  emailInput,
  passwordInput,
  passwordIcon,
  button,
  emailValidate,
  updateEmailClass,
  passwordValidate,
  updatePasswordClass,
} = common;

const nicknameInput = document.querySelector("#nickname");
const nicknameInputMsg = document.querySelector(".nickname__msg");
const passwordCheckInput = document.querySelector("#passwordCheck");
const passwordCheckMsg = document.querySelector(".password__check__msg");

/* 닉네임 유효성 체크 */
const nicknameValidate = () => {
  let isValid = false;
  if (!nicknameInput.value) {
    nicknameInputMsg.innerText = "닉네임을 입력해주세요";
    isValid = false;
  } else {
    nicknameInputMsg.innerText = "";
    isValid = true;
  }
  return isValid;
};

/* 닉네임 인풋, 에러 메시지 클래스 변경 */
const updateNicknameClass = (result) => {
  nicknameInput.classList.remove("success", "error");
  nicknameInputMsg.classList.remove("success", "error");

  if (result) {
    nicknameInput.classList.add("success");
  } else {
    nicknameInput.classList.add("error");
    nicknameInputMsg.classList.add("error");
  }
};

/* 비밀번호 확인 유효성 체크 */
const passwordCheckValidate = () => {
  let isValid = false;
  if (!passwordInput.value) {
    passwordCheckMsg.innerText = "비밀번호를 먼저 입력해주세요";
    isValid = false;
  } else if (passwordCheckInput.value.length < 8) {
    passwordCheckMsg.innerText = "비밀번호를 8자 이상 입력해주세요";
    isValid = false;
  } else if (passwordCheckInput.value !== passwordInput.value) {
    passwordCheckMsg.innerText = "비밀번호가 일치하지 않습니다";
    isValid = false;
  } else {
    passwordCheckMsg.innerText = "";
    isValid = true;
  }
  return isValid;
};

/* 비밀번호 확인 인풋, 에러 메시지 클래스 변경 */
const updatePasswordCheckClass = (result) => {
  passwordCheckInput.classList.remove("success", "error");
  passwordCheckMsg.classList.remove("success", "error");

  if (result) {
    passwordCheckInput.classList.add("success");
  } else {
    passwordCheckInput.classList.add("error");
    passwordCheckMsg.classList.add("error");
  }
};

/* 로그인 버튼 유효성 체크 */
const signupButtonValidate = () => {
  const isEmailValid = emailValidate();
  const isNicknameValid = nicknameValidate();
  const isPasswordValid = passwordValidate();
  const isPasswordCheckValid = passwordCheckValidate();
  const result =
    isEmailValid && isNicknameValid && isPasswordValid && isPasswordCheckValid;
  if (result) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
  return result;
};

emailInput.addEventListener("focusout", () => {
  updateEmailClass(emailValidate());
  signupButtonValidate();
});

nicknameInput.addEventListener("focusout", () => {
  updateNicknameClass(nicknameValidate());
  signupButtonValidate();
});

passwordInput.addEventListener("focusout", () => {
  updatePasswordClass(passwordValidate());
  signupButtonValidate();
});

passwordCheckInput.addEventListener("focusout", () => {
  updatePasswordCheckClass(passwordCheckValidate());
  signupButtonValidate();
});

passwordIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    let passwordInput = icon.previousElementSibling;
    let isShowPassword = passwordInput.type === "text";
    passwordInput.type = isShowPassword ? "password" : "text";

    icon.src = isShowPassword
      ? "img/btn_visibility_off.svg"
      : "img/btn_visibility_on.svg";

    icon.setAttribute("aria-pressed", !isShowPassword);
  });
});

button.addEventListener("click", (event) => {
  event.preventDefault();
  if (signupButtonValidate()) {
    window.location.href = "/login.html";
  } else {
    updateEmailClass(emailValidate());
    updatePasswordClass(passwordValidate());
  }
});
