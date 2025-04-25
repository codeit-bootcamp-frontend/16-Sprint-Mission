import { 
  validateEmail , 
  validatePassword, 
  updateInputState,
  updateSubmitButton,
  togglePasswordVisibility 
} from "./Validation/formValidation.js"; 

document.addEventListener('DOMContentLoaded', () => {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const passwordIcon = document.querySelector('.input-icon');
  const submitBtn = document.querySelector('button[type="submit"]');
  const emailMsg = document.getElementById("emailMsg");
  const passwordMsg = document.getElementById("passwordMsg");

  const message = {
    email: {
      empty: "이메일을 입력해주세요.",
      invalid: "잘못된 이메일 형식입니다.",
    },
    password: {
      empty: "비밀번호를 입력해주세요.",
      invalid: "비밀번호를 8자 이상 입력해주세요.",
    },
  };

  let isEmailValid = false;
  let isPasswordValid = false;

  function validateEmailInput() {
    isEmailValid = validateEmail(emailInput.value);
    updateInputState(emailInput, emailMsg, isEmailValid, message.email);
    updateSubmitButtonState()//해당 코드를 중복해서 사용하지 않고싶은데 이외의 방법을 못찾겠습니다.
  }
  emailInput.addEventListener('input', validateEmailInput);

  function validatePasswordInput() {
    isPasswordValid = validatePassword(passwordInput.value);
    updateInputState(passwordInput, passwordMsg, isPasswordValid, message.password);
    updateSubmitButtonState()
  }
  passwordInput.addEventListener('input', validatePasswordInput);

  function updateSubmitButtonState() {
    const isFormValid = isEmailValid && isPasswordValid;
    updateSubmitButton(submitBtn, isFormValid);
  }

  if (passwordIcon) {
    passwordIcon.addEventListener('click', function() {
      const eyeIcon = this.querySelector('i');
      togglePasswordVisibility(passwordInput, eyeIcon);
    });
  }

  submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    if (!this.disabled) {
      window.location.href = '/items.html';
    }
  });
});