import {
  validateInputs,
  checkAllInputsValid,
  togglePasswordVisibility,
  debounce,
} from "./utils.js";
/**
 * 변수들 정의
 */
const inputArr = document.querySelectorAll("[data-validate]");
const submitBtn = document.querySelector(".btn");
const togglePasswordBtns = document.querySelectorAll(".toggle-password");
const form = document.querySelector(".auth-form");
const debouncedCheckAll = debounce(() => {
  checkAllInputsValid(inputArr, submitBtn);
}, 120);

// 엘리멘트에 함수 등록
form.addEventListener("input", (e) => {
  const input = e.target.closest("[data-validate]");
  if (!input) return;
  validateInputs(input);
  debouncedCheckAll();
});
form.addEventListener(
  "blur",
  (e) => {
    const input = e.target.closest("[data-validate]");
    if (!input) return;
    validateInputs(input);
    checkAllInputsValid(inputArr, submitBtn);
  },
  true
);

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
