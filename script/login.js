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

const formValidate = createFormValidator();
form.addEventListener("focusout", formValidate);

/* 비밀번호 토글 */
togglePasswordHandler(form);

/* 페이지 진입 UX */
window.addEventListener("DOMContentLoaded", () => {
  // 첫번째 input focus 처리
  form.querySelector(".form-input").focus();

  // 페이지 진입 시, 폼 자동완성 되어있으면 버튼 활성화
  loginBtn.disabled =
    emailInput.value.length === 0 && passwordInput.value.length === 0;
});

/* 로그인 버튼 클릭 시 'items'로 이동 */
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  location.href = "/items.html";
});
