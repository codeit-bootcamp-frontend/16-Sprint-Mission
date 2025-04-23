const EMAIL_REGEXP = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;


const signupForm = document.getElementById("signup-form");


const emailInput = document.getElementById("email");
const nicknameInput = document.getElementById("nickname");
const passwordInput = document.getElementById("password");
const passwordConfirmInput = document.getElementById("password-comfirm");
const submitBtn = document.querySelector('button[type="submit"]');
const passwordIcon = document.querySelectorAll('.input-icon')

signupForm.addEventListener("input", handleLoginForm);


passwordIcon.forEach((button) => {
  button.addEventListener('click',handlePasswordIcon)
})
function handlePasswordIcon(event) {
  const eyeIcon = this.querySelector('i');
  const inputEl = this.previousElementSibling.previousElementSibling;

  const type = inputEl.getAttribute('type') === 'password' ? 'text' : 'password';
  
  inputEl.setAttribute('type', type);

  if (type === 'password') {
    eyeIcon.classList.remove('fa-eye');
    eyeIcon.classList.add('fa-eye-slash');
  } else {
    eyeIcon.classList.remove('fa-eye-slash');
    eyeIcon.classList.add('fa-eye');
  }
}


function handleLoginForm(event) {
  const input = event.target;

  let isEmailValid = true;
  let isNicknameValid = true;
  let isPasswordValid = true;
  let isPasswordConfirmValid = true;

  switch (input.name) {
    case "email": {
      const email = input.value;
      const emailMsg = document.getElementById("emailMsg");

      isEmailValid = EMAIL_REGEXP.test(email);

      emailInput.classList.toggle("input-error", !isEmailValid);
      emailMsg.textContent =
        email === ""
          ? "이메일을 입력해주세요."
          : !isEmailValid
          ? "잘못된 이메일 형식입니다."
          : "";
      break;
    }
    case "nickname": {
      const nickname = input.value;
      const nicknameMsg = document.getElementById("nicknameMsg");

      isNicknameValid = nickname !== ""

      nicknameInput.classList.toggle("input-error", !isNicknameValid);
      nicknameMsg.textContent = isNicknameValid ? "" : "닉네임을 입력해주세요."
      break;
    }
    case "password": {
      const password = input.value;
      const passwordMsg = document.getElementById("passwordMsg");

      isPasswordValid = password.length >= 8;

      passwordInput.classList.toggle("input-error", !isPasswordValid);
      passwordMsg.textContent =
        password === ""
          ? "비밀번호를 입력해주세요."
          : !isPasswordValid
          ? "비밀번호를 8자 이상 입력해주세요."
          : "";
      break;
    }
     case "password-comfirm": {
      const passwordConfirm = input.value;
      const passwordConfirmMsg = document.getElementById("passwordComfirmMsg");

      isPasswordConfirmValid = passwordConfirm === passwordInput.value && passwordConfirm !== '' && passwordConfirm >= 8

      passwordConfirmInput.classList.toggle("input-error", !isPasswordConfirmValid);
      passwordConfirmMsg.textContent = isPasswordConfirmValid ? "" : "비밀번호가 일치하지 않습니다."

     }
    
  }
  const isFormValid = emailInput.value !== "" && isEmailValid 
  && nicknameInput.value!==''&& isNicknameValid 
  && passwordInput.value !== "" && isPasswordValid
  && passwordConfirmInput.value !=='' && isPasswordConfirmValid;

  
  submitBtn.disabled = !isFormValid;
  submitBtn.classList.toggle("disabled", !isFormValid);
}
submitBtn.addEventListener('click', function(event) {
  event.preventDefault();

  if (!this.disabled) {
    window.location.href = '/login.html'; 
  }
});