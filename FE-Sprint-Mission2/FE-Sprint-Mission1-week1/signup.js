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

const signupButton = document.querySelector("#signup-button");

const toggleIcon = document.querySelectorAll(
  ".form__password--wrapper .input-icon"
);

const inputpasswordCheck = document.querySelector("#passwordCheck");
const passwordCheckMessage = document.querySelector("#passwordCheck--message");

const inputNickName = document.querySelector("#form__nickName");
const nickNameInvalidMessage = document.querySelector(
  "#form__nickName--invalid-message"
);

function checkSignupFormValidity() {
  const emailValue = inputEmail.value.trim();
  const passwordValue = inputPassword.value.trim();
  const passwordCheckValue = inputpasswordCheck.value.trim();
  const nickNameValue = inputNickName.value.trim();

  const emailIsValid =
    /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+$/.test(emailValue);
  const passwordValid = passwordValue.length >= 8;

  if (
    emailIsValid &&
    passwordValid &&
    passwordValue === passwordCheckValue &&
    nickNameValue !== ""
  ) {
    signupButton.disabled = false;
    signupButton.classList.remove("button--disabled");
  } else {
    signupButton.disabled = true;
    signupButton.classList.add("button--disabled");
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

  checkSignupFormValidity();
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
  checkSignupFormValidity();
});

inputpasswordCheck.addEventListener("blur", function (e) {
  const passwordValue = inputPassword.value.trim();
  const passwordCheckValue = e.target.value.trim();

  if (passwordValue !== passwordCheckValue) {
    inputpasswordCheck.style.border = "1px solid red";
    passwordCheckMessage.style.display = "block";
  } else {
    inputpasswordCheck.style.border = "1px solid var(--gray-100)";
    passwordCheckMessage.style.display = "none";
  }
  checkSignupFormValidity();
});

inputNickName.addEventListener("blur", function (e) {
  const nickNameValue = e.target.value.trim();

  if (nickNameValue === "") {
    inputNickName.style.border = "1px solid red";
    nickNameInvalidMessage.style.display = "block";
  }
  checkSignupFormValidity();
});

toggleIcon.forEach(function (icon) {
  icon.addEventListener("click", function () {
    const wrapper = icon.closest(".form__password--wrapper");
    const input = wrapper.querySelector("input");

    const isPassword = input.type === "password";
    input.type = isPassword ? "text" : "password";
    icon.src = isPassword
      ? "images/btn_visibility_on_24px 2.png"
      : "images/btn_visibility_on_24px.png";
  });
});
