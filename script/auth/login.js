"use strict";
import { validateEmail, validatePassword } from "../util/validators.js";
import togglePasswordVisible from "./togglePasswordVisible.js";
import validateForm from "./validateForm.js";
import focusFirstField from "../util/focusFirstField.js";
import { REDIRECT_MAP } from "../constants.js";

const form = document.querySelector("#loginForm");
const formButton = document.querySelector("#loginBtn");
const redirectUrl = REDIRECT_MAP[window.location.pathname];

function init() {
  validateForm({
    form,
    formButton,
    inputValidatorMap: {
      userEmail: validateEmail,
      userPassword: validatePassword,
    },
    onSubmitRedirectUrl: redirectUrl,
  });
  togglePasswordVisible(form);
  focusFirstField(form);
}

window.addEventListener("DOMContentLoaded", init);
