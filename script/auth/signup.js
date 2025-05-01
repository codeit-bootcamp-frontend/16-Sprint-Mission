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
import { REDIRECT_MAP } from "../constants.js";

const form = document.querySelector("#signupForm");
const formButton = document.querySelector("#signupBtn");
const redirectUrl = REDIRECT_MAP[window.location.pathname];

function init() {
  validateForm({
    form,
    formButton,
    inputValidatorMap: {
      userEmail: validateEmail,
      userPassword: validatePassword,
      userPasswordChk: validatePasswordCheck,
      userNickname: validateNickname,
    },
    onSubmitRedirectUrl: redirectUrl,
  });
  togglePasswordVisible(form);
  focusFirstField(form);
}

window.addEventListener("DOMContentLoaded", init);
