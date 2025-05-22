import common from "./common.js";

const {
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
} = common;

const inputs = [emailInput, nicknameInput, passwordInput, passwordCheckInput];

/* 로그인 버튼 유효성 체크 */
const signupButtonValidate = () => {
  const isEmailValid = validateInput(emailInput, emailInputMsg, "email");
  const isNicknameValid = validateInput(
    nicknameInput,
    nicknameInputMsg,
    "nickname"
  );
  const isPasswordValid = validateInput(
    passwordInput,
    passwordInputMsg,
    "password"
  );
  const isPasswordCheckValid = validateInput(
    passwordCheckInput,
    passwordCheckMsg,
    "passwordCheck"
  );
  const result =
    isEmailValid && isNicknameValid && isPasswordValid && isPasswordCheckValid;
  if (result) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
  return result;
};

inputs.forEach((input) => {
  input.addEventListener("focusout", () => {
    signupButtonValidate();
  });
});

passwordIcons.forEach((icon) => {
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
  }
});
