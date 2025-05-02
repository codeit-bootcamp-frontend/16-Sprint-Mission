const inputEmail = document.querySelector("#form__email");
const emailErrorMessage = document.querySelector("#form__email--message");
const emailInvalidMessage = document.querySelector(
  "#form__email--invalid-message"
);

const inputPassword = document.querySelector("#form__password");
const passwordErrorMessage = document.querySelector("#form__password--message");
const passwordInvalidMessage = document.querySelector(
  "#form__password--invalid-message"
);

const loginButton = document.querySelector("#login-button");

const toggleIcon = document.querySelector(
  ".form__password--wrapper .input-icon"
);

function checkLoginFormValidity() {
  const emailValue = inputEmail.value.trim();
  const passwordValue = inputPassword.value.trim();

  const emailIsValid =
    /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+$/.test(emailValue);
  const passwordValid = passwordValue.length >= 8;

  if (emailIsValid && passwordValid) {
    loginButton.disabled = false;
    loginButton.classList.remove("button--disabled");
  } else {
    loginButton.disabled = true;
    loginButton.classList.add("button--disabled");
  }
}

inputEmail.addEventListener("blur", function (e) {
  const emailValue = e.target.value.trim();

  if (emailValue === "") {
    inputEmail.style.border = "1px solid red";
    emailErrorMessage.style.display = "block";
    emailInvalidMessage.style.display = "none";
  } else if (
    !/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+$/.test(emailValue)
  ) {
    inputEmail.style.border = "1px solid red";
    emailErrorMessage.style.display = "none";
    emailInvalidMessage.style.display = "block";
  } else {
    inputEmail.style.border = "1px solid var(--gray-100)";
    emailErrorMessage.style.display = "none";
    emailInvalidMessage.style.display = "none";
  }

  checkLoginFormValidity();
});

inputPassword.addEventListener("blur", function (e) {
  const passwordValue = e.target.value.trim();

  if (passwordValue === "") {
    inputPassword.style.border = "1px solid red";
    passwordErrorMessage.style.display = "block";
    passwordInvalidMessage.style.display = "none";
  } else if (passwordValue.length < 8) {
    inputPassword.style.border = "1px solid red";
    passwordErrorMessage.style.display = "none";
    passwordInvalidMessage.style.display = "block";
  } else {
    inputPassword.style.border = "1px solid var(--gray-100)";
    passwordErrorMessage.style.display = "none";
    passwordInvalidMessage.style.display = "none";
  }
  checkLoginFormValidity();
});

toggleIcon.addEventListener("click", function (e) {
  inputPassword.type = inputPassword.type === "password" ? "text" : "password";
  toggleIcon.src =
    inputPassword.type === "password"
      ? "images/btn_visibility_on_24px.png"
      : "images/btn_visibility_on_24px 2.png";
});
