// input 요소들
const emailInput = document.getElementById("email");
const nicknameInput = document.getElementById("nickname");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirm-password");
const submitBtn = document.querySelector(".btn");
const toggleButtons = document.querySelectorAll(".toggle-password");
// 에러 메시지 요소
const emailError = document.getElementById("email-error");
const nicknameError = document.getElementById("nickname-error");
const passwordError = document.getElementById("password-error");
const confirmError = document.getElementById("confirm-error");

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

// 이메일 정규표현식
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// 유효성 상태
const validationState = {
  email: false,
  nickname: false,
  password: false,
  confirm: false,
};

// 유효성 검사 후 버튼 상태 체크
function checkFormValid() {
  const isValid = Object.values(validationState).every(Boolean);
  submitBtn.disabled = !isValid;

  // 버튼 색상 변경을 위한 클래스 토글
  isValid
    ? submitBtn.classList.add("btn-active")
    : submitBtn.classList.remove("btn-active");
}

// 유효성 검사 함수들
function validateEmail() {
  const value = emailInput.value.trim();

  if (!value) {
    setError(emailInput, emailError, "이메일을 입력해주세요.");
    validationState.email = false;
    checkFormValid();
    return;
  }

  if (!emailRegex.test(value)) {
    setError(emailInput, emailError, "잘못된 이메일 형식입니다.");
    validationState.email = false;
    checkFormValid();
    return;
  }

  clearError(emailInput, emailError);
  validationState.email = true;
  checkFormValid();
}

function validateNickname() {
  const value = nicknameInput.value.trim();

  if (!value) {
    setError(nicknameInput, nicknameError, "닉네임을 입력해주세요.");
    validationState.nickname = false;
    checkFormValid();
    return;
  }

  clearError(nicknameInput, nicknameError);
  validationState.nickname = true;
  checkFormValid();
}

function validatePassword() {
  const value = passwordInput.value.trim();

  if (!value) {
    setError(passwordInput, passwordError, "비밀번호를 입력해주세요.");
    validationState.password = false;
    checkFormValid();
    return;
  }

  if (value.length < 8) {
    setError(passwordInput, passwordError, "비밀번호를 8자 이상 입력해주세요.");
    validationState.password = false;
    checkFormValid();
    return;
  }

  clearError(passwordInput, passwordError);
  validationState.password = true;
  validateConfirmPassword(); // 연동 확인
  checkFormValid();
}

function validateConfirmPassword() {
  const value = confirmInput.value.trim();

  if (!value) {
    setError(confirmInput, confirmError, "비밀번호를 한번 더 입력해주세요.");
    validationState.confirm = false;
    checkFormValid();
    return;
  }

  if (value !== passwordInput.value.trim()) {
    setError(confirmInput, confirmError, "비밀번호가 일치하지 않습니다.");
    validationState.confirm = false;
    checkFormValid();
    return;
  }

  clearError(confirmInput, confirmError);
  validationState.confirm = true;
  checkFormValid();
}

// 공통 에러 출력/제거 함수
function setError(input, errorEl, message) {
  input.classList.add("input-error");
  errorEl.textContent = message;
}

function clearError(input, errorEl) {
  input.classList.remove("input-error");
  errorEl.textContent = "";
}

// 이벤트 바인딩
emailInput.addEventListener("focusout", validateEmail);
emailInput.addEventListener("input", validateEmail);

nicknameInput.addEventListener("focusout", validateNickname);
nicknameInput.addEventListener("input", validateNickname);

passwordInput.addEventListener("focusout", validatePassword);
passwordInput.addEventListener("input", validatePassword);

confirmInput.addEventListener("focusout", validateConfirmPassword);
confirmInput.addEventListener("input", validateConfirmPassword);
// 초기 버튼 비활성화
submitBtn.disabled = true;

// 버튼 클릭 시 페이지 이동
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!submitBtn.disabled) {
    window.location.href = "/login.html";
  }
});
