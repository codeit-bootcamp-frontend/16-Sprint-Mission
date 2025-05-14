export function showError(inputEl, errorEl, message) {
  inputEl.classList.add("input-error");
  errorEl.textContent = message;
  errorEl.classList.add("text-error");
}

export function clearError(inputEl, errorEl) {
  inputEl.classList.remove("input-error");
  errorEl.textContent = "";
  errorEl.classList.remove("text-error");
}

export function isValidEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(email);
}
