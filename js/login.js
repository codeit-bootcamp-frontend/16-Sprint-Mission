import common from "./common.js";

const {
  emailInput,
  emailInputMsg,
  passwordInput,
  passwordInputMsg,
  passwordIcons,
  button,
  validateInput,
} = common;

const inputs = [emailInput, passwordInput];

/* 로그인 버튼 유효성 체크 */
const loginButtonValidate = () => {
  const isEmailValid = validateInput(emailInput, emailInputMsg, "email");
  const isPasswordValid = validateInput(
    passwordInput,
    passwordInputMsg,
    "password"
  );
  const result = isEmailValid && isPasswordValid;
  if (result) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
  return result;
};

inputs.forEach((input) => {
  input.addEventListener("focusout", () => {
    loginButtonValidate();
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
  if (loginButtonValidate()) {
    window.location.href = "/items.html";
  }
});
