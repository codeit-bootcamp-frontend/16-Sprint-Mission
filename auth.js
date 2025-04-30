document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email"); 
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const repeatInput = document.getElementById("password-repeat");

  const emailError = document.getElementById("email-error"); 
  const usernameError = document.getElementById("username-error");
  const passwordError = document.getElementById("password-error");
  const repeatError = document.getElementById('repeat-error');
  const form = document.querySelector("form");
  const loginButton = form.querySelector("button[type='submit']");

  loginButton.disabled = true;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const state = {
    emailValid : false,
    usernameValid: false,
    passwordValid: false,
    repeatValid: false
  };

  function validateEmail() {
    const emailValue = emailInput.value.trim();
    emailInput.classList.remove("invalid");

    if(!emailValue) {
      emailError.innerText = "이메일을 입력해주세요.";
      emailInput.classList.add("invalid");
      state.emailValid = false;
    } else if (!emailRegex.test(emailValue)) {
      emailError.innerText = "잘못된 이메일 형식입니다.";
      emailInput.classList.add("invalid");
      state.emailValid = false;
    } else {
      emailError.innerText = "";
      state.emailValid = true;
    }

    updateButtonState();
  }

  function validateUsername() {
    const usernameValue = usernameInput.value.trim();
    usernameInput.classList.remove("invalid");

    if(!usernameValue) {
      usernameError.innerText = "닉네임을 입력해주세요.";
      usernameInput.classList.add("invalid");
      state.usernameValid = false;
    } else {
      usernameError.innerText = "";
      state.usernameValid = true;
    }

    updateButtonState();

  }

  function validatePassword() {
    const passwordValue = passwordInput.value.trim();
    passwordInput.classList.remove("invalid");

    if(!passwordValue) {
      passwordError.innerText = "비밀번호를 입력해주세요.";
      passwordInput.classList.add("invalid");
      state.passwordValid = false;
    } else if (passwordValue.length < 8) {
      passwordError.innerText = "비밀번호를 8자 이상 입력해주세요.";
      passwordInput.classList.add("invalid");
      state.passwordValid = false;
    } else {
      passwordError.innerText = "";
      state.passwordValid = true;
    }

    updateButtonState();
  }

  function validatePasswordRepeat() {
    const repeatValue = repeatInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    repeatInput.classList.remove("invalid");

    if(repeatValue !== passwordValue) {
      repeatError.innerText = "비밀번호가 일치하지 않습니다.";
      repeatInput.classList.add("invalid");
      state.repeatValid = false;
    } else {
      repeatError.innerText = "";
      state.repeatValid = true;
    }

    updateButtonState();
  }


  function updateButtonState() {
    loginButton.disabled = !(state.emailValid && state.passwordValid && state.usernameValid && state.repeatValid);
  }

  emailInput.addEventListener("focusout", validateEmail);
  passwordInput.addEventListener("focusout", validatePassword);
  usernameInput.addEventListener("focusout", validateUsername);
  repeatInput.addEventListener("focusout", validatePasswordRepeat);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (usernameInput && repeatInput) {
      // 회원가입 페이지
      loginButton.disabled = !(state.emailValid && state.passwordValid && state.usernameValid && state.repeatValid);
      window.location.href = "/items";
    } else {
      // 로그인 페이지
      loginButton.disabled = !(state.emailValid && state.passwordValid);
      window.location.href = "/items";
    }
  });
});