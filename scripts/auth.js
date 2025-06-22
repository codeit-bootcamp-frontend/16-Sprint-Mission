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

//3. 비번 유효성 확인
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

//4. 비번 더블 체크

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

//5. 이벤트 리스너
if (emailInput) {
  emailInput.addEventListener("focusout", checkEmailValidity);
}
if (nicknameInput) {
  nicknameInput.addEventListener("focusout", checkNicknameValidity);
}
if (passwordInput) {
  passwordInput.addEventListener("focusout", checkPasswordValidity);
}

if (passwordCheckInput) {
  passwordCheckInput.addEventListener("input", checkPasswordMatchValidity);
  passwordCheckInput.addEventListener("input", checkPasswordMatchValidity);
}

//6. input 에 빈 값이 있거나 에러 메세지가 있으면  ‘로그인’, '회원가입' 버튼은 비활성화 됩니다.
function updateSubmitButton() {
  let isFormValid = isEmailValid && isPasswordValid;

  if (signupForm) {
    isFormValid = isFormValid && isNicknameValid && isPasswordCheckValid;
  }

  submitButton.disabled = !isFormValid;
}

//7.활성화된 ‘로그인’ 버튼을 누르면  “/items” 로 이동합니다. /'회원가입' 버튼을 누르면 로그인페이지로 이동

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

/*8. 눈 모양 아이콘 클릭시 비밀번호의 문자열이 보이기도 하고, 가려지기도 합니다.
비밀번호의 문자열이 가려질 때는 눈 모양 아이콘에는 사선이 그어져있고, 비밀번호의 문자열이 보일 때는 사선이 없는 눈 모양 아이콘이 보이도록 합니다.*/

const showEye = document.querySelector(".showEye");
const hideEye = document.querySelector(".hideEye");
const showEyeCheck = document.querySelector(".showEye-check");
const hideEyeCheck = document.querySelector(".hideEye-check");

function showPassword() {
  hideEye.style.visibility = "hidden";
  showEye.style.visibility = "visible";
  passwordInput.setAttribute("type", "text");
}
function hidePassword() {
  hideEye.style.visibility = "visible";
  showEye.style.visibility = "hidden";
  passwordInput.setAttribute("type", "password");
}
function showPasswordCheck() {
  hideEyeCheck.style.visibility = "hidden";
  showEyeCheck.style.visibility = "visible";
  passwordCheckInput.setAttribute("type", "text");
}
function hidePasswordCheck() {
  hideEyeCheck.style.visibility = "visible";
  showEyeCheck.style.visibility = "hidden";
  passwordCheckInput.setAttribute("type", "password");
}

hideEye.addEventListener("click", showPassword);
showEye.addEventListener("click", hidePassword);
hideEyeCheck.addEventListener("click", showPasswordCheck);
showEyeCheck.addEventListener("click", hidePasswordCheck);
