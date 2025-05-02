/**
 * FormValidator 클래스
 * 로그인 및 회원가입 폼의 입력 유효성을 검사하고
 * 제출 버튼 활성/비활성 상태를 제어합니다.
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
  }

  /**
   * 폼 필드에 이벤트 리스너를 연결합니다.
   */
  _attachEvents() {
    // focusout 시 유효성 검사
    this.emailInput.addEventListener('focusout', () =>
      this._handleEmailValidation()
    );
    this.passwordInput.addEventListener('focusout', () =>
      this._handlePasswordValidation()
    );

    // 입력 변화 시 버튼 활성/비활성 상태 업데이트
    const inputs = [this.emailInput, this.passwordInput];
    inputs.forEach((input) => {
      input.addEventListener('input', () => this._updateSubmitState());
    });
  }

  /**
   * 에러를 표시하기 위해 에러 클래스를 추가하여 에러 메시지를 보여줍니다.
   * @param {HTMLInputElement} inputEl - 에러 스타일을 적용할 입력 요소
   * @param {string} message - 표시할 에러 메시지
   */
  _showError(inputEl, message) {
    // 에러 클래스 추가
    inputEl.classList.add('form-field__input--error');

    // 에러 클래스를 없다면 생성
    let msgEl = inputEl.parentElement.querySelector(
      '.form-field__error-message'
    );
    if (!msgEl) {
      msgEl = document.createElement('p');
      msgEl.className = 'form-field__error-message';
      inputEl.parentElement.appendChild(msgEl);
    }
    msgEl.textContent = message;
  }

  /**
   * 에러 스타일과 메시지를 제거합니다.
   * @param {HTMLInputElement} inputEl - 스타일을 제거할 입력 요소
   */
  _clearError(inputEl) {
    inputEl.classList.remove('input--error');
    const msgEl = inputEl.parentElement.querySelector('.error-message');
    if (msgEl) {
      msgEl.remove();
    }
  }

  /**
   * 이메일 유효성을 검사하고 에러를 처리합니다.
   * @returns {boolean} - 유효함 === true
   */
  _handleEmailValidation() {
    const value = this.emailInput.value.trim();
    const { valid, message } = validateEmail(value);
    //유효하지 않는다면 에러 표시
    if (!valid) {
      this._showError(this.emailInput, message);
      return false;
    }
    //에러 클래스 제거
    this._clearError(this.emailInput);
    return true;
  }

  /**
   * 비밀번호 유효성을 검사하고 에러를 처리합니다.
   * @returns {boolean} - 유효하면 true, 아니면 false
   */
  _handlePasswordValidation() {
    const value = this.passwordInput.value;
    const { valid, message } = validatePassword(value);
    //유효하지 않는다면 에러ㅓ 표시
    if (!valid) {
      this._showError(this.passwordInput, message);
      return false;
    }
    //유효하면 에러 제거
    this._clearError(this.passwordInput);
    return true;
  }

  /**
   * 초기 상태에서 제출 버튼의 활성/비활성 상태를 설정합니다.
   */
  _setInitialButtonState() {
    this._setSubmitButtonState();
  }

  /**
   * 폼의 전체 유효성을 검사하여 제출 버튼 상태를 업데이트합니다.
   */
  _setSubmitButtonState() {
    if (!this.submitBtn) {
      return;
    }

    const emailIsValid = this._validateEmailField();
    const passwordIsValid = this._validatePasswordField();
    const formIsValid = emailIsValid && passwordIsValid;

    // 버튼 활성/비활성 제어
    this.submitBtn.disabled = !formIsValid;
  }
}
