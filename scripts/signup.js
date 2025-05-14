import {
  validateEmail,
  validatePassword,
  validatePasswordCheck,
} from "./validation/validators.js";
import { checkFormValidity } from "./validation/formUtils.js";
import { setupPasswordToggle } from "./utils/togglePassword.js";

document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");
  const passwordCheckInput = document.querySelector("#passwordCheck");
  const emailError = document.querySelector("#emailError");
  const passwordError = document.querySelector("#passwordError");
  const passwordCheckError = document.querySelector("#passwordCheckError");
  const signupButton = document.querySelector("#signupButton");

  function validateAll() {
    validateEmail(emailInput, emailError);
    validatePassword(passwordInput, passwordError);
    validatePasswordCheck(
      passwordInput,
      passwordCheckInput,
      passwordCheckError,
    );
    checkFormValidity({
      errors: [emailError, passwordError, passwordCheckError],
      values: [emailInput.value, passwordInput.value, passwordCheckInput.value],
      buttonEl: signupButton,
    });
  }

  setupPasswordToggle({
    inputSelector: "#password",
    buttonSelector: "#togglePassword",
    iconSelector: "#eyeIcon",
  });

  setupPasswordToggle({
    inputSelector: "#passwordCheck",
    buttonSelector: "#togglePasswordCheck",
    iconSelector: "#eyeIconCheck",
  });

  emailInput.addEventListener("blur", () =>
    validateEmail(emailInput, emailError),
  );
  passwordInput.addEventListener("blur", () =>
    validatePassword(passwordInput, passwordError),
  );
  passwordCheckInput.addEventListener("blur", () =>
    validatePasswordCheck(
      passwordInput,
      passwordCheckInput,
      passwordCheckError,
    ),
  );

  [emailInput, passwordInput, passwordCheckInput].forEach((input) =>
    input.addEventListener("input", validateAll),
  );

  document.querySelector(".form__signup").addEventListener("submit", (e) => {
    e.preventDefault();
    if (!signupButton.disabled) {
      window.location.href = "/items";
    }
  });
});
