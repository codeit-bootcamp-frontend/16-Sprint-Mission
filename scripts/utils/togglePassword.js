export function setupPasswordToggle({
  inputSelector,
  buttonSelector,
  iconSelector,
}) {
  const passwordInput = document.querySelector(inputSelector);
  const toggleButton = document.querySelector(buttonSelector);
  const eyeIcon = document.querySelector(iconSelector);

  if (!passwordInput || !toggleButton || !eyeIcon) return;

  toggleButton.addEventListener("click", () => {
    const isVisible = passwordInput.type === "text";
    passwordInput.type = isVisible ? "password" : "text";
    eyeIcon.src = isVisible
      ? "/assets/images/icons/icon_visibilityOff.svg"
      : "/assets/images/icons/icon_visibilityOn.svg";
  });
}
