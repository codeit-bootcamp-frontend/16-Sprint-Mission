// login.js
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const loginBtn = document.querySelector(".btn");
const emailError = document.querySelector("#email-error");
const passwordError = document.querySelector("#password-error");
const submitBtn = document.querySelector(".btn");
const toggleButtons = document.querySelectorAll(".toggle-password");

//눈 모양 토글
toggleButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const inputId = btn.dataset.target;
      const input = document.getElementById(inputId);
      const img = btn.querySelector("img");
  
      const isHidden = input.type === "password";
  
      input.type = isHidden ? "text" : "password";
      img.src = isHidden
        ? "/images/btn_visibility_on_24px.png" // 눈 (보임)
        : "/images/btn_none_visibility_on_24px.png"; // 눈+슬래시 (가려짐)
      img.alt = isHidden ? "패스워드 보임" : "패스워드 보이지 않음";
    });
  });

// 이메일 검증 정규표현식
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// 유효성 상태 관리 객체
const validationState = {
  email: false,
  password: false,
};

function checkValidation() {
  const isValid = validationState.email && validationState.password;
  loginBtn.disabled = !isValid;
  // 버튼 색상 변경을 위한 클래스 토글
  isValid
    ? submitBtn.classList.add("btn-active")
    : submitBtn.classList.remove("btn-active");
}

// 이메일 검증 함수
function validateEmail() {
  const emailValue = emailInput.value.trim();

  if (!emailValue) {
    emailError.textContent = "이메일을 입력해주세요.";
    emailInput.classList.add("input-error");
    validationState.email = false;
    checkValidation();
    return;
  }

  if (!emailRegex.test(emailValue)) {
    emailError.textContent = "잘못된 이메일 형식입니다.";
    emailInput.classList.add("input-error");
    validationState.email = false;
    checkValidation();
    return;
  }

  // 정상일 때
  emailError.textContent = "";
  emailInput.classList.remove("input-error");
  validationState.email = true;
  checkValidation();
}

// 비밀번호 검증 함수
function validatePassword() {
  const passwordValue = passwordInput.value.trim();

  if (!passwordValue) {
    passwordError.textContent = "비밀번호를 입력해주세요.";
    passwordInput.classList.add("input-error");
    validationState.password = false;
    checkValidation();
    return;
  }

  if (passwordValue.length < 8) {
    passwordError.textContent = "비밀번호를 8자 이상 입력해주세요.";
    passwordInput.classList.add("input-error");
    validationState.password = false;
    checkValidation();
    return;
  }

  // 정상일 때
  passwordError.textContent = "";
  passwordInput.classList.remove("input-error");
  validationState.password = true;
  checkValidation();
}

// 이벤트 리스너 추가
emailInput.addEventListener("focusout", validateEmail);
emailInput.addEventListener("input", validateEmail);

passwordInput.addEventListener("focusout", validatePassword);
passwordInput.addEventListener("input", validatePassword);

// 최초 로드 시 버튼 비활성화 상태 설정
document.addEventListener("DOMContentLoaded", () => {
  loginBtn.disabled = true;
});

// 버튼 클릭 이벤트
loginBtn.addEventListener("click", (e) => {
  // 기본 폼 제출 방지
  e.preventDefault();
  if (!loginBtn.disabled) {
    window.location.href = "/items";
  }
});
