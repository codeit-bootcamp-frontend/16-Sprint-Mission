"use strict";
import { validateEmail, validatePassword } from "./util/validators.js";
import togglePasswordHandler from "./util/togglePassword.js";

const form = document.querySelector(".form");
const emailInput = document.querySelector("#userEmail");
const passwordInput = document.querySelector("#userPassword");
const loginBtn = document.querySelector("#loginBtn");

function createFormValidator() {
  let emailValid = false;
  let passwordValid = false;

  return function formValidate(e) {
    switch (e.target.id) {
      case "userEmail":
        emailValid = validateEmail(emailInput);
        break;
      case "userPassword":
        passwordValid = validatePassword(passwordInput);
        break;
    }

    loginBtn.disabled = !(emailValid && passwordValid);
  };
}

form.addEventListener("focusout", createFormValidator());

/* 비밀번호 토글 */
togglePasswordHandler(form);

/* UX: 첫번째 input focus 처리 */
window.addEventListener("DOMContentLoaded", () => {
  form.querySelector(".form-input").focus();
});

/* 로그인 버튼 클릭 시 'items'로 이동 */
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  location.href = "/items.html";
});
