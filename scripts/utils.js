import { validators } from "./validators.js";
/**
 *  toggle password
 */
export const togglePasswordVisibility = (button) => {
  const targetId = button.getAttribute("data-target");
  const passwordInput = document.getElementById(targetId);
  if (!passwordInput) return;
  const img = button.querySelector("img");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    img.src = "/images/btn_visibility_on_24px.png";
    img.alt = "비밀번호 보이는 중";
  } else {
    passwordInput.type = "password";
    img.src = "/images/btn_none_visibility_on_24px.png";
    img.alt = "비밀번호 숨겨진 상태";
  }
};
/*
 *  Validate User Input
 */
export const validateInputs = (inputEl) => {
  const validateType = inputEl.dataset.validate;
  const { value, id } = inputEl;
  if (!validateType || !validators[validateType]) return;
  const { isValid, message } = validators[validateType](value);
  const errMsg = document.getElementById(`${id}-error`);
  if (errMsg) {
    errMsg.textContent = isValid ? "" : message;
  }
  if (isValid) {
    inputEl.classList.remove("input-error");
  } else {
    inputEl.classList.add("input-error");
  }
  return isValid;
};
/*
 * 모든 입력값이 유효한지 확인하는 함수
 */
export const checkAllInputsValid = (inputArr, submitBtn) => {
  const allValid = Array.from(inputArr).every((input) => validateInputs(input));
  submitBtn.disabled = !allValid;
};
