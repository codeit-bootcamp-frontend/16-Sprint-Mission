const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const loginButton = document.getElementById("login-btn");

// 이메일 유효성 검사
function validateEmail() {
  const emailValue = emailInput.value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailError.textContent = "";
  emailInput.classList.remove("input-error");

  if (!emailValue) {
    emailError.textContent = "이메일을 입력해주세요.";
    emailInput.classList.add("input-error");
  } else if (!emailPattern.test(emailValue)) {
    emailError.textContent = "잘못된 이메일 형식입니다.";
    emailInput.classList.add("input-error");
  }
}

// 비밀번호 유효성 검사
function validatePassword() {
  const passwordValue = passwordInput.value;
  passwordError.textContent = "";

  if (!passwordValue) {
    passwordError.textContent = "비밀번호를 입력해주세요.";
    passwordInput.classList.add("input-error");
  } else if (passwordValue.length < 8) {
    passwordError.textContent = "비밀번호를 8자 이상 입력해주세요.";
    passwordInput.classList.add("input-error");
  }
}

// 입력 변화 시 실시간 검증 추가
emailInput.addEventListener("input", () => {
  validateEmail();
  toggleLoginButton();
});

passwordInput.addEventListener("input", () => {
  validatePassword();
  toggleLoginButton();
});

// 로그인 버튼 활성화/비활성화
function toggleLoginButton() {
  const emailIsValid = emailInput.value && !emailError.textContent;
  const passwordIsValid = passwordInput.value && !passwordError.textContent;
  loginButton.disabled = !(emailIsValid && passwordIsValid);
}

emailInput.addEventListener("focusout", () => {
  validateEmail();
  toggleLoginButton();
});

passwordInput.addEventListener("focusout", () => {
  validatePassword();
  toggleLoginButton();
});

loginButton.addEventListener("click", () => {
  if (!loginButton.disabled) {
    window.location.href = "/items";
  }
});

//비밀번호 가리기/보이기
const toggleIcon = document.getElementById("toggle-password");

toggleIcon.addEventListener("click", () => {
  const isPasswordVisible = passwordInput.type === "text";
  passwordInput.type = isPasswordVisible ? "password" : "text";
  toggleIcon.src = isPasswordVisible
    ? "images/icons/eye-invisible.svg"
    : "images/icons/eye-visible.svg";
  toggleIcon.alt = isPasswordVisible ? "비밀번호 가리기" : "비밀번호 보이기"; //alt속성
});
