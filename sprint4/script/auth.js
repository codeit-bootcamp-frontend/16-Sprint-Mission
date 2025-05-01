// 로그인, 회원가입 유효성 검사 
const DOM = {
  form: document.getElementById('auth__form'),
  emailInput: document.getElementById('email'),
  nickNameInput: document.getElementById('nickname'),
  passwordInput: document.getElementById('password'),
  passwordConfirmInput: document.getElementById('password-confirm'),
  authBtn: document.querySelector('.auth__btn'),
}

// input 에러 메세지 삭제
function clearError(input){
  const inputEl = input.nextElementSibling;
  if(inputEl && inputEl.classList.contains('invalid') ){
    inputEl.remove();
  } 
  input.classList.remove('invalid');
}

// input 에러 메세지 추가
function showError(input, text){
  clearError(input);
  const span = document.createElement('span');
  span.className = 'invalid';
  span.textContent = text;
  input.insertAdjacentElement('afterend', span);
  input.classList.add('invalid');
}

// input 값 체크 
const validationStatus = {
  email: false,
  nickName: false,
  password: false,
  passwordConfirm: false,
};

// input 유효성 검사
function validateInput(inputEl) {
  inputEl.value  = inputEl.value.trim()
  if (inputEl.classList.contains('input--email')) {
    if (!inputEl.value) {
      showError(inputEl, "이메일을 입력해주세요.");
      validationStatus.email = false;
    } else if(!/^\S+@\S+\.\S+$/.test(inputEl.value)) {
      showError(inputEl, "올바른 이메일 형식이 아닙니다.");
      validationStatus.email = false;
    } else {
      clearError(inputEl);
      validationStatus.email = true;
    }
  } else if (inputEl.classList.contains('input--nickname')) {
    if (!inputEl.value) {
      inputEl.classList.remove('valid');
      showError(inputEl, "닉네임을 입력해주세요.");
      validationStatus.nickName = false;
    }  else {
      clearError(inputEl);
      inputEl.classList.add('valid');
      validationStatus.nickName = true;
    }
  } else if (inputEl.classList.contains('input--password')) {
    if (!inputEl.value) {
      showError(inputEl, "비밀번호를 입력해주세요.");
      validationStatus.password = false;
    } else if(inputEl.value.length < 8) {
      showError(inputEl, "비밀번호는 최소 8자 이상이어야 합니다.");
      validationStatus.password = false;
    } else {
      clearError(inputEl);
      validationStatus.password = true;
    }
  } else if (inputEl.classList.contains('input--password-confirm')) {
    const passwordValue = DOM.passwordInput.value;
    if(!inputEl.value || inputEl.value !== passwordValue){
      showError(inputEl, "비밀번호가 일치하지 않습니다.");
      validationStatus.passwordConfirm = false;
    } else {
      clearError(inputEl);
      validationStatus.passwordConfirm = true;
    }
  }
  authBtnValidity();
}

// 비밀번호 보이기 토글
function visibilityPassword(form){
  const toggleBtnAll = form.querySelectorAll('.password__toggle');
  for(const toggleBtn of toggleBtnAll) {
    toggleBtn.addEventListener('click', () => {
      let input = toggleBtn.parentElement.querySelector('input')
      if (!input) return; // 토글 버튼에 input이 없을 경우 중단됨

      const type = input.type === 'password' ? 'text' : 'password';
      input.type = type;
      toggleBtn.classList.toggle('on');    
    });
  }
}

const singUpInputPage = DOM.passwordConfirmInput && DOM.nickNameInput;

// 버튼 활성화
function authBtnValidity(){
  const singInValidation = validationStatus.email && validationStatus.password;
  const singUpValidation = validationStatus.passwordConfirm && validationStatus.nickName;

  if(singUpInputPage != null){
    DOM.authBtn.disabled = !(singInValidation && singUpValidation);
  }else{
    console.log(singInValidation)
    DOM.authBtn.disabled = !(singInValidation);
  }
}

// 페이지 초기화 함수
function initPage() {
  const inputs = [DOM.emailInput, DOM.passwordInput];
  if (DOM.passwordConfirmInput) inputs.push(DOM.passwordConfirmInput);
  if (DOM.nickNameInput) inputs.push(DOM.nickNameInput);

  // input focus out 메세지 제어
  inputs.forEach(input => {
    input.addEventListener('focusout', () => validateInput(input));
  });

  // 비밀번호 보이기 토글 기능 초기화
  visibilityPassword(DOM.form);

  // 첫 번째 입력 필드에 포커스
  DOM.form.querySelector('.auth__input').focus();
  // DOM.form.querySelector('.auth__input')?.focus();

  DOM.authBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    // 모든 input 강제 검사
    inputs.forEach(input => validateInput(input));
    
    const singUpInputPage = DOM.passwordConfirmInput && DOM.nickNameInput;
    const isValid = singUpInputPage
      ? validationStatus.email && validationStatus.password && validationStatus.passwordConfirm && validationStatus.nickName
      : validationStatus.email && validationStatus.password;
    
    if (isValid) {
      // 페이지 이동 또는 폼 제출
      location.href = "/items.html";
    }
  });
}
// DOMContentLoaded 이벤트에 페이지 초기화 함수 연결
window.addEventListener("DOMContentLoaded", initPage);