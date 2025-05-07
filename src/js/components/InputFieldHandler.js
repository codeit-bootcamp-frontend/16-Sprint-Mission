// src/js/components/InputFieldHandler.js

/**
 * 입력 필드를 관리합니다.
 * - focusout 시 유효성 검사
 * - 에러 클래스 토글
 * - 에러 메시지 렌더링
 */
export class InputFieldHandler {
  /**
   * @param {HTMLInputElement} inputEl    입력 요소
   * @param {function(string): {valid: boolean, message: string}} validateFn  유효성 검사 함수
   * ex) validateEmail, validatePassword
   * @param {string} errorClass           에러 시 추가할 CSS 클래스
   * @param {string} errorMsgClass        에러 메시지 요소에 붙일 CSS 클래스
   */
  constructor(inputEl, validateFn, errorClass, errorMsgClass) {
    this.inputEl = inputEl;
    this.validateFn = validateFn;
    this.errorClass = errorClass;
    this.errorMsgClass = errorMsgClass;

    this.inputEl.addEventListener('focusout', () => this.validate());
  }

  /**
   * 입력값 유효성을 검사합니다.
   * @returns {boolean} 유효하면 true
   */
  validate() {
    const value = this.inputEl.value.trim();
    const { valid, message } = this.validateFn(value);

    if (!valid) {
      this._showError(message);
      return false;
    }

    this._clearError();
    return true;
  }

  /** 에러 스타일 및 메시지 표시 */
  _showError(message) {
    this.inputEl.classList.add(this.errorClass);

    let msgEl = this.inputEl.parentElement.querySelector(
      `.${this.errorMsgClass}`
    );
    if (!msgEl) {
      msgEl = document.createElement('p');
      msgEl.className = this.errorMsgClass;
      this.inputEl.parentElement.appendChild(msgEl);
    }
    msgEl.textContent = message;
  }

  /** 에러 스타일 및 메시지 제거 */
  _clearError() {
    //css 제거
    this.inputEl.classList.remove(this.errorClass);
    //요소 제거
    const msgEl = this.inputEl.parentElement.querySelector(
      `.${this.errorMsgClass}`
    );
    //에러 요소가 존재한다면 제거합니다.
    if (msgEl) msgEl.remove();
  }
}
