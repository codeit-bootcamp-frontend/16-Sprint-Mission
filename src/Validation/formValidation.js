// 상수 정의
export const EMAIL_REGEXP = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const MIN_PASSWORD_LENGTH = 8;
export const MIN_NICKNAME_LENGTH = 2;
export const MAX_NICKNAME_LENGTH = 20;

/**
 * 이메일 유효성 검사
 * @param {string} email - 검사할 이메일
 * @returns {boolean} 유효성 여부
 */
export function validateEmail(email) {
  return email === "" ? false : EMAIL_REGEXP.test(email);
}

/**
 * 닉네임 유효성 검사
 * @param {string} nickname - 검사할 닉네임
 * @returns {boolean} 유효성 여부
 */
export function validateNickname(nickname) {
  return nickname === "" ? false : 
         nickname.length >= MIN_NICKNAME_LENGTH && 
         nickname.length <= MAX_NICKNAME_LENGTH;
}

/**
 * 비밀번호 유효성 검사
 * @param {string} password - 검사할 비밀번호
 * @returns {boolean} 유효성 여부
 */
export function validatePassword(password) {
  return password === "" ? false : 
         password.length >= MIN_PASSWORD_LENGTH
}

/**
 * 비밀번호 확인 유효성 검사
 * @param {string} passwordConfirm - 검사할 비밀번호 확인
 * @param {string} originalPassword - 원본 비밀번호
 * @returns {boolean} 유효성 여부
 */
export function validatePasswordConfirm(passwordConfirm, originalPassword) {
  return passwordConfirm === "" ? false : 
         passwordConfirm === originalPassword && 
         passwordConfirm.length >= MIN_PASSWORD_LENGTH;
}

/**
 * 입력 필드 상태 업데이트
 * @param {HTMLElement} input - 입력 필드 요소
 * @param {HTMLElement} messageElement - 오류 메시지 요소
 * @param {boolean} isValid - 유효성 여부
 * @param {Object} messages - 오류 메시지 객체
 */
export function updateInputState(input, messageElement, isValid, messages) {
  input.classList.toggle("input-error", !isValid);
  messageElement.textContent = input.value === "" ? messages.empty : !isValid ? messages.invalid : "";
}

/**
 * 제출 버튼 상태 업데이트
 * @param {HTMLElement} submitBtn - 제출 버튼 요소
 * @param {boolean} isFormValid - 폼 유효성 여부
 */
export function updateSubmitButton(submitBtn, isFormValid) {
  submitBtn.disabled = !isFormValid;
  submitBtn.classList.toggle("disabled", !isFormValid);
}

/**
 * 비밀번호 표시/숨김 토글 처리
 * @param {HTMLElement} input - 비밀번호 입력 필드
 * @param {HTMLElement} eyeIcon - 눈 아이콘 요소
 */
export function togglePasswordVisibility(input, eyeIcon) {
  const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
  input.setAttribute('type', type);
  
  eyeIcon.classList.toggle('fa-eye-slash', type === 'password');
  eyeIcon.classList.toggle('fa-eye', type !== 'password');
}