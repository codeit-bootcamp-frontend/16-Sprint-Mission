"use strict";
import { validateEmail, validatePassword } from "../util/validators.js";
import togglePasswordVisible from "./togglePasswordVisible.js";
import validateForm from "./validateForm.js";

const form = document.querySelector("#loginForm");
const formButton = document.querySelector("#loginBtn");
const REDIRECT_URL = "/items.html";
const PASSWORD_TOGGLE_BUTTONS = form.querySelectorAll(".btn-password-visible");

function focusFirstInput(form) {
  const firstInput = form.querySelector(".form-input");
  if (!firstInput) return;
  firstInput.focus();
}

function init() {
  validateForm({
    form,
    formButton,
    inputValidatorMap: {
      userEmail: validateEmail,
      userPassword: validatePassword,
    },
    onSubmitRedirectUrl: REDIRECT_URL,
  });
  togglePasswordVisible(PASSWORD_TOGGLE_BUTTONS);
  focusFirstInput();
}

window.addEventListener("DOMContentLoaded", init);
