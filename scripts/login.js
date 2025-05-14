import { validateEmail, validatePassword } from "./validation/validators.js";
import { checkFormValidity } from "./validation/formUtils.js";
import { setupPasswordToggle } from "./utils/togglePassword.js";

document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");
  const emailError = document.querySelector("#emailError");
  const passwordError = document.querySelector("#passwordError");
  const loginButton = document.querySelector("#loginButton");

  function validateAndCheck() {
    validateEmail(emailInput, emailError);
    validatePassword(passwordInput, passwordError);
    checkFormValidity({
      errors: [emailError, passwordError],
      values: [emailInput.value, passwordInput.value],
      buttonEl: loginButton,
    });
  }
  setupPasswordToggle({
    inputSelector: "#password",
    buttonSelector: "#togglePassword",
    iconSelector: "#eyeIcon",
  });

  emailInput.addEventListener("blur", () =>
    validateEmail(emailInput, emailError)
  );
  passwordInput.addEventListener("blur", () =>
    validatePassword(passwordInput, passwordError)
  );

  emailInput.addEventListener("input", validateAndCheck);
  passwordInput.addEventListener("input", validateAndCheck);

  document.querySelector(".form__login").addEventListener("submit", (e) => {
    e.preventDefault();
    if (!loginButton.disabled) {
      window.location.href = "/items";
    }
  });
});
