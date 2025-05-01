"use strict";
import {
  validateEmail,
  validatePassword,
  validatePasswordCheck,
  validateNickname,
} from "../util/validators.js";
import togglePasswordVisible from "./togglePasswordVisible.js";
import validateForm from "./validateForm.js";
import focusFirstField from "../util/focusFirstField.js";

const form = document.querySelector("#signupForm");
const formButton = document.querySelector("#signupBtn");
const REDIRECT_URL = "/login.html";
const PASSWORD_TOGGLE_BUTTONS = form.querySelectorAll(".btn-password-visible");

function init() {
  validateForm({
    form,
    formButton,
    inputValidatorMap: {
      userEmail: validateEmail,
      userPassword: validatePassword,
      userPasswordChk: (input) => {
        const passwordInput = document.querySelector("#userPassword");
        validatePasswordCheck(passwordInput, input);
      },
      userNickname: validateNickname,
    },
    onSubmitRedirectUrl: REDIRECT_URL,
  });
  togglePasswordVisible(PASSWORD_TOGGLE_BUTTONS);
  focusFirstField(form);
}

window.addEventListener("DOMContentLoaded", init);
