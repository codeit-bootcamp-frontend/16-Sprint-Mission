const email = document.querySelector("#email");
const password = document.querySelector("#password");
const nickname = document.querySelector("#nickname");
const signupConfirm = document.querySelector("#signup-confirm");
const inputs = document.querySelectorAll("input");
const submit = document.querySelector(".submit");

function validateEmail() {
  const emailValue = email.value.trim();
  const currentError = document.querySelector(".email-error-message");

  if (emailValue === "") {
    showError(email, "이메일을 입력해주세요.", "email-error-message");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
    showError(email, "잘못된 이메일 형식입니다.", "email-error-message");
  } else {
    removeError(email, currentError);
  }

  btnDisable();
}

function validatePassword() {
  const passwordValue = password.value.trim();
  const currentError = document.querySelector(".pw-error-message");

  if (passwordValue === "") {
    showError(password, "비밀번호를 입력해주세요.", "pw-error-message");
  } else if (passwordValue.length < 8) {
    showError(password, "비밀번호를 8자 이상 입력해주세요", "pw-error-message");
  } else {
    removeError(password, currentError);
  }

  btnDisable();
}

function validateNickname() {
  const nicknameValue = nickname.value.trim();
  const currentError = document.querySelector(".nickname-error-message");

  if (nicknameValue === "") {
    showError(nickname, "닉네임을 입력해주세요.", "nickname-error-message");
  } else {
    removeError(nickname, currentError);
  }

  btnDisable();
}

function validateSignupConfirm() {
  const signupConfirmValue = signupConfirm.value.trim();
  const currentError = document.querySelector(".confirm-error-message");

  if (signupConfirmValue !== password.value) {
    showError(signupConfirm, "비밀번호가 일치하지 않습니다", "confirm-error-message");
  } else {
    removeError(signupConfirm, currentError);
  }

  btnDisable();
}

//에러 메세지
function showError(input, message, errorClass) {
  input.classList.add("error");

  let errorElement = document.querySelector(`.${errorClass}`);
  if (!errorElement) {
    errorElement = document.createElement("span");
    errorElement.classList.add(errorClass);
    input.insertAdjacentElement("afterend", errorElement);
  }
  errorElement.textContent = message;
}

//에러 메세지 삭제
function removeError(input, errorElement) {
  input.classList.remove("error");
  if (errorElement) {
    errorElement.remove();
  }
}

// 버튼 활성화/비활성화 함수
function btnDisable() {
  const emptyInput = Array.from(inputs).some((input) => input.value.trim() === "");
  const error =
    document.querySelector(".email-error-message") ||
    document.querySelector(".pw-error-message") ||
    document.querySelector(".nickname-error-message") ||
    document.querySelector(".confirm-error-message");

  if (emptyInput || error) {
    submit.disabled = true;
    submit.classList.add("disabled");
  } else {
    submit.disabled = false;
    submit.classList.remove("disabled");
  }
}

email.addEventListener("focusout", validateEmail);
password.addEventListener("focusout", validatePassword);
if (nickname) {
  nickname.addEventListener("focusout", validateNickname);
}
if (signupConfirm) {
  signupConfirm.addEventListener("focusout", validateSignupConfirm);
}

//심화
const visibilityBtn = document.querySelector(".btn_visibility");
const visibilityBtnCheck = document.querySelector(".check");

visibilityBtn.addEventListener("click", function () {
  const visibilityImg = visibilityBtn.querySelector("img");
  password.type = password.type === "text" ? "password" : "text";
  visibilityImg.src = password.type === "text" ? "../images/btn_visibility_on.png" : "../images/btn_visibility_off.png";
});
visibilityBtnCheck.addEventListener("click", function () {
  const visibilityImgCheck = visibilityBtnCheck.querySelector("img");
  signupConfirm.type = signupConfirm.type === "text" ? "password" : "text";
  visibilityImgCheck.src = signupConfirm.type === "text" ? "../images/btn_visibility_on.png" : "../images/btn_visibility_off.png";
});
