// src/js/components/FormValidator.js
import { InputFieldHandler } from './InputFieldHandler.js';
import { validateEmail } from '../validators/emailValidator.js';
import { validatePassword } from '../validators/passwordValidator.js';

/**
 * FormValidator 클래스
 * - 로그인/회원가입 폼의 두 개 필드를 관리
 * - 버튼 활성 토글
 * - 제출 후 '/items'로 이동
 */
export class FormValidator {
  /**
   * 필드 초기화 및 의존객체인 필드 핸들러를 생성합니다.
   * @param {HTMLFormElement} formEl - 폼 요소
   */
  constructor(formEl) {
    this.form = formEl;
    this.submitBtn = this.form.querySelector('button[type=submit]');

    // 각 InputFieldHander 생성
    this.emailHandler = new InputFieldHandler(
      this.form.querySelector('#email'),
      validateEmail,
      'form-field__input--error',
      'form-field__error-message'
    );

    this.passwordHandler = new InputFieldHandler(
      this.form.querySelector('#password'),
      validatePassword,
      'form-field__input--error',
      'form-field__error-message'
    );

    this._attachEvents();
    this._updateButtonState();
  }

  /** 이벤트 연결:
   * input -> 버튼토글
   *  submit -> 이동
   */
  _attachEvents() {
    const inputs = [this.emailHandler.inputEl, this.passwordHandler.inputEl];

    inputs.forEach((el) => {
      el.addEventListener('input', () => this._updateButtonState());
    });

    this.form.addEventListener('submit', (e) => this._handleSubmit(e));
  }

  /** 버튼 활성/비활성 상태 업데이트 */
  _updateButtonState() {
    const validEmail = this.emailHandler.validate();
    const validPwd = this.passwordHandler.validate();
    this.submitBtn.disabled = !(validEmail && validPwd);
  }

  /**
   * 폼 제출 핸들러
   * @param {SubmitEvent} event
   */
  _handleSubmit(event) {
    event.preventDefault();
    // 최종 검사
    if (!this.submitBtn.disabled) {
      window.location.href = '/items';
    }
  }
}
