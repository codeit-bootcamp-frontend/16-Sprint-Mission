import {
  setInputIdsObj,
  validateInputs,
  checkAllInputsValid,
  togglePasswordVisibility,
} from "./utils.js";

// 변수 정의
const submitBtn = document.querySelector(".btn");
const inputIdsObjs = setInputIdsObj();
const inputIds = Object.keys(inputIdsObjs);
const redirectMap = {
  "/login.html": "/items.html",
  "/signup.html": "/login.html",
};
const currentPage = window.location.pathname;
const target = redirectMap[currentPage];
const togglePasswordBtns = document.querySelectorAll(".toggle-password");

//  엘리멘트에 이벤트리스너 추가
togglePasswordBtns.forEach((button) => {
  button.addEventListener("click", () => togglePasswordVisibility(button));
});

for (let inputId of inputIds) {
  const inputEl = document.getElementById(inputId);
  inputEl.addEventListener("input", () => {
    validateInputs(inputEl, inputIdsObjs);
    checkAllInputsValid(inputIdsObjs, submitBtn);
  });
  inputEl.addEventListener("focus", () => {
    validateInputs(inputEl, inputIdsObjs);
    checkAllInputsValid(inputIdsObjs, submitBtn);
  });
}

if (inputIds.includes("password") && inputIds.includes("confirmPassword")) {
  const inputPassword = document.getElementById("password");
  const confirmPasswordEl = document.getElementById("confirmPassword");
  inputPassword.addEventListener("input", () => {
    validateInputs(confirmPasswordEl, inputIdsObjs);
    checkAllInputsValid(inputIdsObjs, submitBtn);
  });
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!submitBtn.disabled) {
    window.location.href = target;
  }
});
