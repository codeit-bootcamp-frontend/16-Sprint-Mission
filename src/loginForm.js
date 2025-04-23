const EMAIL_REGEXP = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;



const loginForm = document.getElementById("login-form");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const passwordIcon = document.querySelector('.input-icon')
const submitBtn = document.querySelector('button[type="submit"]');

passwordIcon.addEventListener('click',handlePasswordIcon)
loginForm.addEventListener("input", handleLoginForm);

function handlePasswordIcon(event) {
  const eyeIcon = this.querySelector('i');
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);


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
  let isPasswordValid = true;

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
    
  }
  const isFormValid = emailInput.value !== "" && isEmailValid && passwordInput.value !== "" && isPasswordValid;

  // 폼 유효성 상태에 따라 버튼의 disabled 속성과 클래스 제어
  submitBtn.disabled = !isFormValid;
  submitBtn.classList.toggle("disabled", !isFormValid);
}
submitBtn.addEventListener('click', function(event) {
  event.preventDefault();

  if (!this.disabled) {
    window.location.href = '/items.html'; 
  }
});