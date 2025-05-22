import {
  validInput,
  updateValidationUI,
  togglePasswordVisibility,
  checkButtonActivation,
} from "./utils.js";

// 엘리먼트 모음
const formElements = {
  email: document.querySelector("#email"),
  nickname: document.querySelector("#nickname"),
  pw: document.querySelector("#pw"),
  pwChk: document.querySelector("#pw-chk"),
};
const warningText = document.querySelectorAll(".warning-text");
const signUpBtn = document.querySelector(".form-btn");
const eyesIcons = document.querySelectorAll(".eye-icon");

// 유효성 검사 핸들러
const handleValidation = (type, index) => {
  const result = validInput[type](formElements[type], formElements.pw?.value);
  updateValidationUI(formElements[type], warningText[index], result);

  // 비밀번호 blur 시 pwChk도 함께 검사
  if (type === "pw" && formElements.pwChk.value) {
    const chkResult = validInput.pwChk(
      formElements.pwChk,
      formElements.pw.value
    );
    updateValidationUI(formElements.pwChk, warningText[3], chkResult);
  }
  checkButtonActivation(signUpBtn, "signup");
};

// 이벤트 연결
formElements.email.addEventListener("blur", () => handleValidation("email", 0));
formElements.nickname.addEventListener("blur", () =>
  handleValidation("nickname", 1)
);
formElements.pw.addEventListener("input", () => handleValidation("pw", 2));
formElements.pwChk.addEventListener("input", () =>
  handleValidation("pwChk", 3)
);

// 비밀번호 토글
eyesIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const target = icon.classList.contains("pw")
      ? formElements.pw
      : formElements.pwChk;
    togglePasswordVisibility(icon, target);
  });
});

// 회원가입 버튼
signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkButtonActivation(signUpBtn, "signup");
  if (!signUpBtn.disabled) {
    window.location.href = "../page/login.html";
  }
});
