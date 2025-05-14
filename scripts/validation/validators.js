import { showError, clearError, isValidEmail } from "./validation.js";

export function validateEmail(inputEl, errorEl) {
  const email = inputEl.value.trim();
  clearError(inputEl, errorEl);

  if (email === "") {
    showError(inputEl, errorEl, "이메일을 입력해주세요.");
  } else if (!isValidEmail(email)) {
    showError(inputEl, errorEl, "잘못된 이메일 형식입니다.");
  }
}

export function validatePassword(inputEl, errorEl) {
  const password = inputEl.value.trim();
  clearError(inputEl, errorEl);

  if (password === "") {
    showError(inputEl, errorEl, "비밀번호를 입력해주세요.");
  } else if (password.length < 8) {
    showError(inputEl, errorEl, "비밀번호를 8자 이상 입력해주세요.");
  }
}

export function validatePasswordCheck(passwordEl, checkEl, errorEl) {
  const password = passwordEl.value.trim();
  const passwordCheck = checkEl.value.trim();
  clearError(checkEl, errorEl);

  if (passwordCheck === "") {
    showError(checkEl, errorEl, "비밀번호 확인을 입력해주세요.");
  } else if (password !== passwordCheck) {
    showError(checkEl, errorEl, "비밀번호가 일치하지 않습니다.");
  }
}
