/**
 * FormValidator 클래스
 * 로그인 및 회원가입 폼의 입력 유효성을 검사하고
 * 제출 버튼 활성/비활성 상태를 제어합니다.
 * 로그인 폼은 제출 시 '/items'로 이동합니다.
 */
import { validateEmail } from '../validators/emailValidator.js';
import { validatePassword } from '../validators/passwordValidator.js';

export class FormValidator {
  /**
   * @param {HTMLFormElement} formElement - 유효성 검사를 적용할 폼 요소
   */
  constructor(formElement) {
    /** 폼 요소 가져오기 */
    this.form = formElement;
    this.emailInput = this.form.querySelector('#email');
    this.passwordInput = this.form.querySelector('#password');
    this.submitBtn = this.form.querySelector('button[type=submit]');

    this._attachEvents(); // 이벤트 리스너 연결
    this._setInitialButtonState(); // 초기 버튼 상태 설정
    this.form.addEventListener('submit', (event) => this._handleSubmit(event));
  }

  /**
   * 폼 제출 핸들러: 유효성 통과 시 '/items'로 이동
   * @param {SubmitEvent} event
   */
  _handleSubmit(event) {
    event.preventDefault();
    const emailValid = this._validateEmailField();
    const passwordValid = this._validatePasswordField();
    if (emailValid && passwordValid) {
      this._redirectToItems();
    }
  }

  /**
   * '/items' 경로로 이동합니다.
   */
  _redirectToItems() {
    window.location.href = '/items';
  }

  /**
   * 폼 필드에 이벤트 리스너를 연결합니다.
   */
  _attachEvents() {
    this.emailInput.addEventListener('focusout', () =>
      this._validateEmailField()
    );
    this.passwordInput.addEventListener('focusout', () =>
      this._validatePasswordField()
    );
    [this.emailInput, this.passwordInput].forEach((inputEl) => {
      inputEl.addEventListener('input', () => this._setSubmitButtonState());
    });
  }

  /**
   * 입력 요소에 에러 클래스를 추가합니다.
   * @param {HTMLInputElement} inputEl
   */
  _addErrorClass(inputEl) {
    inputEl.classList.add('form-field__input--error');
  }

  /**
   * 에러 메시지 요소를 생성하거나 기존 요소를 반환합니다.
   * @param {HTMLInputElement} inputEl
   * @returns {HTMLElement}
   */
  _getErrorMessageElement(inputEl) {
    let msgEl = inputEl.parentElement.querySelector(
      '.form-field__error-message'
    );
    if (!msgEl) {
      msgEl = document.createElement('p');
      msgEl.className = 'form-field__error-message';
      inputEl.parentElement.appendChild(msgEl);
    }
    return msgEl;
  }

  /**
   * 에러 메시지를 화면에 렌더링합니다.
   * @param {HTMLInputElement} inputEl
   * @param {string} message
   */
  _renderErrorMessage(inputEl, message) {
    const msgEl = this._getErrorMessageElement(inputEl);
    msgEl.textContent = message;
  }

  /**
   * 입력 필드에 에러를 표시합니다.
   * @param {HTMLInputElement} inputEl
   * @param {string} message
   */
  _showError(inputEl, message) {
    this._addErrorClass(inputEl);
    this._renderErrorMessage(inputEl, message);
  }

  /**
   * 입력 필드의 에러 스타일과 메시지를 제거합니다.
   * @param {HTMLInputElement} inputEl
   */
  _clearError(inputEl) {
    inputEl.classList.remove('form-field__input--error');
    const msgEl = inputEl.parentElement.querySelector(
      '.form-field__error-message'
    );
    if (msgEl) {
      msgEl.remove();
    }
  }

  /**
   * 이메일 필드 유효성을 검사하고 에러를 처리합니다.
   * @returns {boolean}
   */
  _validateEmailField() {
    const value = this.emailInput.value.trim();
    const { valid, message } = validateEmail(value);
    if (!valid) {
      this._showError(this.emailInput, message);
      return false;
    }
    this._clearError(this.emailInput);
    return true;
  }

  /**
   * 비밀번호 필드 유효성을 검사하고 에러를 처리합니다.
   * @returns {boolean}
   */
  _validatePasswordField() {
    const value = this.passwordInput.value;
    const { valid, message } = validatePassword(value);
    if (!valid) {
      this._showError(this.passwordInput, message);
      return false;
    }
    this._clearError(this.passwordInput);
    return true;
  }

  /**
   * 초기 버튼 상태를 설정합니다.
   */
  _setInitialButtonState() {
    this._setSubmitButtonState();
  }

  /**
   * 전체 폼 유효성을 검사하여 제출 버튼 상태를 업데이트합니다.
   */
  _setSubmitButtonState() {
    if (!this.submitBtn) {
      return;
    }
    const emailIsValid = this._validateEmailField();
    const passwordIsValid = this._validatePasswordField();
    const formIsValid = emailIsValid && passwordIsValid;
    this.submitBtn.disabled = !formIsValid;
  }
}
