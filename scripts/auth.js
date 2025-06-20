/*
- 이메일 input에서 focus out 할 때, 값이 없을 경우 input에 빨강색 테두리와 아래에 “이메일을 입력해주세요.” 빨강색 에러 메세지를 보입니다.
- 이메일 input에서 focus out 할 때, 이메일 형식에 맞지 않는 경우 input에 빨강색 테두리와 아래에 “잘못된 이메일 형식입니다” 빨강색 에러 메세지를 보입니다.

- 비밀번호 input에서 focus out 할 때, 값이 없을 경우 아래에 “비밀번호를 입력해주세요.” 에러 메세지를 보입니다
- 비밀번호 input에서 focus out 할 때, 값이 8자 미만일 경우 아래에 “비밀번호를 8자 이상 입력해주세요.” 에러 메세지를 보입니다.

- input 에 빈 값이 있거나 에러 메세지가 있으면  ‘로그인’ 버튼은 비활성화 됩니다.
- Input 에 유효한 값을 입력하면  ‘로그인' 버튼이 활성화 됩니다.
- 활성화된 ‘로그인’ 버튼을 누르면  “/items” 로 이동합니다

*/

const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const nicknameInput = document.getElementById("nickname");

const submitButton = document.getElementById("auth-form_btn");

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

  hideError(emailInput, "emailEmptyError");
  hideError(emailInput, "emailInputError");

  if (emailValue.length === 0) {
    showError(emailInput, "emailEmptyError");
  } else if (!validateEmail(emailValue)) {
    showError(emailInput, "emailInputError");
  }
  updateSubmitButton();
}

//2. 비번 유효성 확인
function checkPasswordValidity() {
  const passwordValue = passwordInput.value;

  hideError(passwordInput, "passwordEmptyError");
  hideError(passwordInput, "passwordLengthError");

  if (passwordValue.length === 0) {
    showError(passwordInput, "passwordEmptyError");
  } else if (passwordValue.length < 8) {
    showError(passwordInput, "passwordLengthError");
  }
  updateSubmitButton();
}

//3. 이벤트 리스너
emailInput.addEventListener("focusout", checkEmailValidity);
passwordInput.addEventListener("focusout", checkPasswordValidity);

//4. input 에 빈 값이 있거나 에러 메세지가 있으면  ‘로그인’ 버튼은 비활성화 됩니다.
function updateSubmitButton() {
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  const emailErrorVisible =
    document.getElementById("emailEmptyError").style.display === "block" ||
    document.getElementById("emailInputError").style.display === "block";

  const passwordErrorVisible =
    document.getElementById("passwordEmptyError").style.display === "block" ||
    document.getElementById("passwordLengthError").style.display === "block";

  const hasEmptyInput = emailValue === "" || passwordValue === "";

  if (hasEmptyInput || emailErrorVisible || passwordErrorVisible) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
}
//5.활성화된 ‘로그인’ 버튼을 누르면  “/items” 로 이동합니다
if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // 기본 제출 동작 방지
    window.location.href = "../features/items.html";
  });
}
