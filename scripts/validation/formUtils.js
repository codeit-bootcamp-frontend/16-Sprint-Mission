export function updateButtonState({ conditions, buttonEl }) {
  const isValid = conditions.every(Boolean);
  buttonEl.disabled = !isValid;
  buttonEl.classList.toggle("active", isValid);
}

export function checkFormValidity({ errors, values, buttonEl }) {
  const hasErrors = errors.some((el) => el.textContent !== "");
  const hasEmpty = values.some((val) => val.trim() === "");
  buttonEl.disabled = hasErrors || hasEmpty;
  buttonEl.classList.toggle("active", !buttonEl.disabled);
}
