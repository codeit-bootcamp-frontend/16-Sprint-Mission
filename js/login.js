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

/* 로그인 버튼 유효성 체크 */
const loginButtonValidate = () => {
  const isEmailValid = emailValidate();
  const isPasswordValid = passwordValidate();
  const result = isEmailValid && isPasswordValid;
  if (result) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
  return result;
};

emailInput.addEventListener("focusout", () => {
  updateEmailClass(emailValidate());
  loginButtonValidate();
});

passwordInput.addEventListener("focusout", () => {
  updatePasswordClass(passwordValidate());
  loginButtonValidate();
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
  if (loginButtonValidate()) {
    window.location.href = "/items.html";
  } else {
    updateEmailClass(emailValidate());
    updatePasswordClass(passwordValidate());
  }
});
