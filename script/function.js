export { enableLoginButton, passwordShowHide };

function enableLoginButton(button, ...validator) {
  const checkValid = validator.every((el) => el === true);
  if (checkValid) {
    button.removeAttribute("disabled");
    button.classList.add("login-button-enable");
  } else {
    button.setAttribute("disabled", true);
    button.classList.remove("login-button-enable");
  }
}

function passwordShowHide(button, input) {
  const passwordHideImage = button.children.item(0);
  const passwordShowImage = button.children.item(1);

  button.onclick = () => {
    passwordShowImage.classList.toggle("password-show-button-toggle");
    passwordHideImage.classList.toggle("password-hide-button-toggle");
    if (input.getAttribute("type") === "password")
      input.setAttribute("type", "text");
    else input.setAttribute("type", "password");
  };
}
