"use strict";
import { validateEmail, validatePassword } from "./util/validators.js";

const form = document.querySelector(".form");
const emailInput = document.querySelector("#userEmail");
const passwordInput = document.querySelector("#userPassword");
const loginBtn = document.querySelector("#loginBtn");

/* 로그인 폼 유효성 검사 */
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

const formValidate = createFormValidator();
form.addEventListener("focusout", formValidate);

/* UX: 로그인 페이지 진입 시 첫번째 input focus 처리 */
window.addEventListener("DOMContentLoaded", () => {
  emailInput.focus();
});

/* 로그인 버튼 클릭 시 'items'로 이동 */
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  location.href = "/items.html";
});
