function showError(inputEl, message) {
  const errorEl = inputEl.parentElement.querySelector('.error-message');
  inputEl.classList.add('error');
  if (errorEl) errorEl.textContent = message;
}

function clearError(inputEl) {
  const errorEl = inputEl.parentElement.querySelector('.error-message');
  inputEl.classList.remove('error');
  if (errorEl) errorEl.textContent = '';
}

// 이메일 input에서 focus out 할 때, 
// 값이 없을 경우 input에 빨강색 테두리와 아래에 “이메일을 입력해주세요.” 
// 빨강색 에러 메세지를 보입니다.

// 이메일 input에서 focus out 할 때, 
// 이메일 형식에 맞지 않는 경우 input에 빨강색 테두리와 아래에 “잘못된 이메일 형식입니다” 
// 빨강색 에러 메세지를 보입니다.

const emailInput = document.querySelector('#login-email');
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
emailInput.addEventListener('focusout', function() {
  if (emailInput.value === '') {
    showError(emailInput, '이메일을 입력해주세요.');
  } else if (!emailPattern.test(emailInput.value)) {
    showError(emailInput, '잘못된 이메일 형식입니다');
  } else {
    clearError(emailInput)};
  });

// 닉네임 input에서 focus out 할 때, 
// 값이 없을 경우 input에 빨강색 테두리와 아래에 “닉네임을 입력해주세요.” 
// 빨강색 에러 메세지를 보입니다.

const nicknameInput = document.querySelector('#nickname');

nicknameInput.addEventListener('focusout', function() {
  if (nicknameInput.value === '') {
    showError(nicknameInput, '닉네임을 입력해주세요.');
  } else {
    clearError(nicknameInput);
  }
});

// 비밀번호 input에서 focus out 할 때, 
// 값이 없을 경우 아래에 “비밀번호를 입력해주세요.” 
// 에러 메세지를 보입니다
// 비밀번호 input에서 focus out 할 때, 
// 값이 8자 미만일 경우 아래에 “비밀번호를 8자 이상 입력해주세요.” 
// 에러 메세지를 보입니다.

// 비밀번호 input과 비밀번호 확인 input의 값이 다른 경우, 
// 비밀번호 확인 input 아래에 “비밀번호가 일치하지 않습니다..” 
// 에러 메세지를 보입니다. 

function validatePassword() {
  if (pwInput.value === '') {
    showError(pwInput, '비밀번호를 입력해주세요.');
  } else if (pwInput.value.length < 8) {
    showError(pwInput, '비밀번호를 8자 이상 입력해주세요.');
  } else {
    clearError(pwInput)};
    validatePasswordMatch();
}

function validatePasswordMatch() {
  if (pwcheckInput.value !== pwInput.value && pwcheckInput !== '') {
    showError(pwcheckInput, '비밀번호가 일치하지 않습니다..');
  } else {
    clearError(pwcheckInput);
  }
}

pwInput.addEventListener('focusout', validatePassword);
pwcheckInput.addEventListener('focusout', validatePasswordMatch)

pwInput.addEventListener('input', validatePassword);
pwcheckInput.addEventListener('input', validatePasswordMatch)

// input 에 빈 값이 있거나 에러 메세지가 있으면  ‘회원가입’ 버튼은 비활성화 됩니다.
// Input 에 유효한 값을 입력하면  ‘회원가입' 버튼이 활성화 됩니다.

// 활성화된 ‘회원가입’ 버튼을 누르면  로그인 페이지로 이동합니다

