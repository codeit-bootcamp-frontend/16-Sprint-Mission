import {
  validateInputs,
  checkAllInputsValid,
  togglePasswordVisibility,
} from "./utils.js";

// 변수 정의
const inputArr = document.querySelectorAll("[data-validate]");
const submitBtn = document.querySelector(".btn");
const togglePasswordBtns = document.querySelectorAll(".toggle-password");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

// input마다 이벤트 등록
inputArr.forEach((input) => {
  input.addEventListener("input", () => {
    validateInputs(input);
    checkAllInputsValid(inputArr, submitBtn);
  });
  input.addEventListener("focusOut", () => {
    validateInputs(input);
    checkAllInputsValid(inputArr, submitBtn);
  });
});
// 비밀번호 입력시 확인칸도 검사
if (passwordInput && confirmPasswordInput) {
  passwordInput.addEventListener("input", () => {
    validateInputs(confirmPasswordInput);
    checkAllInputsValid(inputArr, submitBtn);
  });
}

// 패스워드 토글
togglePasswordBtns.forEach((button) => {
  button.addEventListener("click", () => togglePasswordVisibility(button));
});

// submit
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!submitBtn.disabled) {
    const redirectMap = {
      "/login.html": "/items.html",
      "/signup.html": "/login.html",
    };
    const target = redirectMap[window.location.pathname];
    if (target) window.location.href = target;
  }
});
