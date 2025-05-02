const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const loginButton = document.getElementById("login-btn");
const nicknameInput = document.getElementById("nickname");
const confirmPasswordInput = document.getElementById("passwordConfirmation");
const confirmPasswordError = document.getElementById("confirmPassword-error");
const signupButton = document.getElementById("signupButton");

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
  } else if (passwordValue.length < 8) {
    passwordError.textContent = "비밀번호를 8자 이상 입력해주세요.";
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

// 비밀번호 확인 유효성 검사
function validateConfirmPassword() {
  const passwordValue = passwordInput.value;
  const confirmPasswordValue = confirmPasswordInput.value;
  confirmPasswordError.textContent = "";

  if (confirmPasswordValue !== passwordValue) {
    confirmPasswordError.textContent = "비밀번호가 일치하지 않습니다.";
  }
}

// 회원가입 버튼 활성화/비활성화
function toggleSignupButton() {
  const emailIsValid = emailInput.value && !emailError.textContent;
  const passwordIsValid =
    passwordInput.value && passwordError.textContent === "";
  const confirmPasswordIsValid =
    confirmPasswordInput.value && confirmPasswordError.textContent === "";
  signupButton.disabled = !(
    emailIsValid &&
    passwordIsValid &&
    confirmPasswordIsValid &&
    !nicknameInput
  );
  // 버튼 활성화 조건
  signupButton.disabled = !(
    emailIsValid &&
    passwordIsValid &&
    confirmPasswordIsValid
  );
}

// 이벤트 리스너 설정
emailInput.addEventListener("input", () => {
  validateEmail();
  toggleSignupButton();
});

// 닉네임 유효성 검사
nicknameInput.addEventListener("input", toggleSignupButton);

passwordInput.addEventListener("input", () => {
  validatePassword();
  validateConfirmPassword();
  toggleSignupButton();
});

confirmPasswordInput.addEventListener("input", () => {
  validateConfirmPassword();
  toggleSignupButton();
});

// 회원가입 버튼 클릭 시 이동
signupButton.addEventListener("click", () => {
  if (!signupButton.disabled) {
    window.location.href = "/login"; // 로그인 페이지로 이동
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

//비밀번호 확인 가리기/보이기
const confirmToggleIcon = document.getElementById("toggle-confirm-password");

confirmToggleIcon.addEventListener("click", () => {
  const isConfirmPasswordVisible = confirmPasswordInput.type === "text";
  confirmPasswordInput.type = isConfirmPasswordVisible ? "password" : "text";
  confirmToggleIcon.src = isConfirmPasswordVisible
    ? "images/icons/eye-invisible.svg"
    : "images/icons/eye-visible.svg";
  confirmToggleIcon.alt = isConfirmPasswordVisible
    ? "비밀번호 가리기"
    : "비밀번호 보이기";
});
