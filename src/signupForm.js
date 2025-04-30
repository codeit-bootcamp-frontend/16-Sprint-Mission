import { 
  validateEmail,
  validateNickname,
  validatePassword,
  validatePasswordConfirm,
  updateInputState,
  updateSubmitButton,
  togglePasswordVisibility,
 } from "./Validation/formValidation";

 document.addEventListener('DOMContentLoaded', () => {
  const emailInput = document.getElementById("email");
  const nicknameInput = document.getElementById("nickname");
  const passwordInput = document.getElementById("password");
  const passwordConfirmInput = document.getElementById("password-comfirm");
  const submitBtn = document.querySelector('button[type="submit"]');
  const emailMsg = document.getElementById("emailMsg");
  const nicknameMsg = document.getElementById("nicknameMsg");
  const passwordMsg = document.getElementById("passwordMsg");
  const passwordConfirmMsg = document.getElementById("passwordComfirmMsg");
  const passwordIcons = document.querySelectorAll('.input-icon');

  const messages = {
    email: {
      empty: "이메일을 입력해주세요.",
      invalid: "잘못된 이메일 형식입니다.",
    },
    nickname: {
      empty: "닉네임을 입력해주세요.",
      invalid: `닉네임은 ${MIN_NICKNAME_LENGTH} ~ ${MAX_NICKNAME_LENGTH}자 사이여야 합니다.`, 
    },
    password: {
      empty: "비밀번호를 입력해주세요.",
      invalid: "비밀번호를 8자 이상 입력해주세요.",
    },
    passwordConfirm: {
      empty: "비밀번호를 입력해주세요.",
      invalid: "비밀번호가 일치하지 않습니다.",
    },
  };

  let isEmailValid = false;
  let isNicknameValid = false;
  let isPasswordValid = false;
  let isPasswordConfirmValid = false;
  let isSubmitButtonValid

  function validateEmailInput() {
    isEmailValid = validateEmail(emailInput.value);
    updateInputState(emailInput, emailMsg, isEmailValid, messages.email);
    updateSubmitButtonState()
  }
  emailInput.addEventListener('input', validateEmailInput);

  function validateNicknameInput() {
    isNicknameValid = validateNickname(nicknameInput.value)
    updateInputState(nicknameInput, nicknameMsg,isNicknameValid, messages.nickname)
    updateSubmitButtonState()
  }
  nicknameInput.addEventListener('input',validateNicknameInput)

  function validatePasswordInput() {
    isPasswordValid = validatePassword(passwordInput.value);
    updateInputState(passwordInput, passwordMsg, isPasswordValid, messages.password);
    updateSubmitButtonState()
  }
  passwordInput.addEventListener('input', validatePasswordInput);

  function validatePasswordConfirmInput() {
    isPasswordConfirmValid = validatePasswordConfirm(passwordConfirmInput.value)
    updateInputState(passwordConfirmInput, passwordConfirmMsg,isPasswordConfirmValid,messages.passwordConfirm)
    updateSubmitButtonState()
  }
  passwordConfirmInput.addEventListener('input',validatePasswordConfirmInput)

  function updateSubmitButtonState() {
    isSubmitButtonValid = isEmailValid && isNicknameValid && isPasswordValid && isPasswordConfirmValid;
    updateSubmitButton(submitBtn, isSubmitButtonValid);
  }

  passwordIcons.forEach((icon) => {
    icon.addEventListener('click',() => {
      const eyeIcon = this.querySelector('i');
      const inputEl = this.previousElementSibling.previousElementSibling;
      togglePasswordVisibility(inputEl,eyeIcon)
    })
  })

  
  submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    if (!this.disabled) {
      window.location.href = '/login.html';
    }
  });
 });