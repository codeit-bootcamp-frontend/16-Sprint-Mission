export function updateValidationUI(input, validationResult) {
  const inputHint = input
    .closest(".form-control")
    .querySelector(".form-input-hint");

  if (!inputHint) return;

  !validationResult.isValid
    ? input.classList.add("invalid")
    : input.classList.remove("invalid");
  inputHint.textContent = validationResult.message;
}
