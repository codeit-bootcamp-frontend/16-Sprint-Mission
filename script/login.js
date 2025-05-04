import {
  validInput,
  updateValidationUI,
  togglePasswordVisibility,
  checkButtonActivation,
} from "./utils.js";

// 요소 선택
const formElements = {
  email: document.querySelector("#email"),
  pw: document.querySelector("#pw"),
  warnings: document.querySelectorAll(".warning-text"),
  eyeIcon: document.querySelector(".eye-icon"),
  loginBtn: document.querySelector(".form-btn"),
};

// 공통 유효성 검사 핸들러
const handleValidation = (type, inputEl, warningEl) => {
  const result = validInput[type](inputEl);
  updateValidationUI(inputEl, warningEl, result);
  checkButtonActivation(formElements.loginBtn, "login");
};

// 이벤트 바인딩
formElements.email.addEventListener("blur", () => {
  handleValidation("email", formElements.email, formElements.warnings[0]);
});

formElements.pw.addEventListener("input", () => {
  handleValidation("pw", formElements.pw, formElements.warnings[1]);
});

// 비밀번호 보기 토글
formElements.eyeIcon.addEventListener("click", () => {
  togglePasswordVisibility(formElements.eyeIcon, formElements.pw);
});

// 로그인 버튼 클릭
formElements.loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkButtonActivation(formElements.loginBtn, "login");
  if (!formElements.loginBtn.disabled) {
    window.location.href = "./signup.html";
  }
});
