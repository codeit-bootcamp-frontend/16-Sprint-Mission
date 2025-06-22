const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

const emailInput = document.getElementById("email");
const nicknameInput = document.getElementById("nickname");
const passwordInput = document.getElementById("password");
const passwordCheckInput = document.getElementById("password-check");

const submitButton = document.getElementById("auth-form_btn");

let isEmailValid = false;
let isPasswordValid = false;
let isNicknameValid = false;
let isPasswordCheckValid = false;

function showError(input, errorID) {
  const errorMessage = document.getElementById(errorID);
  errorMessage.style.display = "block";
  input.style.border = "1px solid #f74747";
}

function hideError(input, errorID) {
  const errorMessage = document.getElementById(errorID);
  errorMessage.style.display = "none";
  input.style.border = "none";
}

function validateEmail(email) {
  const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  return emailRegex.test(email);
}
//1. 이메일 유효성 확인
function checkEmailValidity() {
  const emailValue = emailInput.value.trim();
  isEmailValid = false;

  hideError(emailInput, "emailEmptyError");
  hideError(emailInput, "emailInputError");

  if (emailValue.length === 0) {
    showError(emailInput, "emailEmptyError");
  } else if (!validateEmail(emailValue)) {
    showError(emailInput, "emailInputError");
  } else {
    isEmailValid = true;
  }
  updateSubmitButton();
}

//2. 닉네임 유효성 확인
function checkNicknameValidity() {
  const nicknameValue = nicknameInput.value.trim();
  isNicknameValid = false;

  hideError(nicknameInput, "nicknameEmptyError");

  if (nicknameValue.length === 0) {
    showError(nicknameInput, "nicknameEmptyError");
  } else {
    isNicknameValid = true;
  }
  updateSubmitButton();
}

//2. 비번 유효성 확인
function checkPasswordValidity() {
  const passwordValue = passwordInput.value.trim();
  isPasswordValid = false;

  hideError(passwordInput, "passwordEmptyError");
  hideError(passwordInput, "passwordLengthError");

  if (passwordValue.length === 0) {
    showError(passwordInput, "passwordEmptyError");
  } else if (passwordValue.length < 8) {
    showError(passwordInput, "passwordLengthError");
  } else {
    isPasswordValid = true;
  }
  updateSubmitButton();
}

//비번 더블 체크

function checkPasswordMatchValidity() {
  const passwordCheckValue = passwordCheckInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  isPasswordCheckValid = false;
  hideError(passwordCheckInput, "passwordCheckEmptyError");
  hideError(passwordCheckInput, "passwordMatchError");
  hideError(passwordCheckInput, "passwordCheckLengthError");

  if (passwordCheckValue.length === 0) {
    showError(passwordCheckInput, "passwordCheckEmptyError");
  } else if (passwordCheckValue.length < 8) {
    showError(passwordCheckInput, "passwordCheckLengthError");
  } else if (passwordCheckValue !== passwordValue) {
    showError(passwordCheckInput, "passwordMatchError");
  } else {
    isPasswordCheckValid = true;
  }
  updateSubmitButton();
}

//3. 이벤트 리스너
if (emailInput) {
  emailInput.addEventListener("focusout", checkEmailValidity);
}
if (nicknameInput) {
  nicknameInput.addEventListener("focusout", checkNicknameValidity);
}
if (passwordInput) {
  passwordInput.addEventListener("input", checkPasswordValidity);
}

if (passwordCheckInput) {
  passwordCheckInput.addEventListener("input", checkPasswordMatchValidity);
  passwordCheckInput.addEventListener("input", checkPasswordMatchValidity);
}

//4. input 에 빈 값이 있거나 에러 메세지가 있으면  ‘로그인’, '회원가입' 버튼은 비활성화 됩니다.
function updateSubmitButton() {
  let isFormValid = isEmailValid && isPasswordValid;

  if (signupForm) {
    isFormValid = isFormValid && isNicknameValid && isPasswordCheckValid;
  }

  submitButton.disabled = !isFormValid;
}

//5.활성화된 ‘로그인’ 버튼을 누르면  “/items” 로 이동합니다

updateSubmitButton();

if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    window.location.href = "../features/items.html";
  });
}
if (signupForm) {
  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    window.location.href = "../features/signin.html";
  });
}
