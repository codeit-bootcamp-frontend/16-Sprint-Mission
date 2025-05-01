"use strict";
import { validateEmail, validatePassword } from "../util/validators.js";
import togglePasswordVisible from "./togglePasswordVisible.js";
import validateForm from "./validateForm.js";
import focusFirstField from "../util/focusFirstField.js";

const form = document.querySelector("#loginForm");
const formButton = document.querySelector("#loginBtn");
const REDIRECT_URL = "/items.html";
const PASSWORD_TOGGLE_BUTTONS = form.querySelectorAll(".btn-password-visible");

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
  focusFirstField(form);
}

window.addEventListener("DOMContentLoaded", init);
