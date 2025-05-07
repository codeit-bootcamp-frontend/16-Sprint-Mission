/**
 * PasswordToggle
 * - 버튼 클릭으로 연관된 비밀번호 input의 type을 토글하고
 *   버튼의 아이콘 클래스를 온/오프 상태로 전환합니다.
 */
export class PasswordToggle {
  /**
   * @param {HTMLButtonElement} toggleButton - 눈 모양 버튼 요소
   */
  constructor(toggleButton) {
    this.button = toggleButton;
    // 토글 버튼 바로 위에 있는 input 요소를 찾습니다.
    this.input = this.button
      .closest('.form-field__group')
      .querySelector('input[type="password"], input[type="text"]');
    this._attachEvent();
    //console.log('이벤트 적용');
  }
  //이벤트를 적용함
  _attachEvent() {
    this.button.addEventListener('click', () => this._toggleVisibility());
  }
  //비밀번호와 아이콘을 토글합니다.
  _toggleVisibility() {
    //console.log('토글 클릭!', this.input.type);
    if (this._isPasswordHidden()) {
      this._showPassword();
    } else {
      this._hidePassword();
    }
  }

  /** 현재 입력 타입이 'password'인지 확인 */
  _isPasswordHidden() {
    return this.input.type === 'password';
  }

  /** 비밀번호를 표시하고, 버튼 아이콘을 변경 */
  _showPassword() {
    this.input.type = 'text';
    this.button.classList.add('form-field__toggle-password--visible');
  }

  /** 비밀번호를 가리고, 버튼 아이콘을 원래대로 */
  _hidePassword() {
    this.input.type = 'password';
    this.button.classList.remove('form-field__toggle-password--visible');
  }
}
