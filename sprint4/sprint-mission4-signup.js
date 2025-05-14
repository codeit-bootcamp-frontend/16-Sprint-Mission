// 요소 가져오기
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const signUpButton = document.querySelector('.signup-btn');
const togglePasswordButton = document.getElementById('togglePassword');
const toggleCheckButton = document.getElementById('togglePasswordCheck');
const nickNameInput = document.getElementById('nickname');
const passwordCheckInput = document.getElementById('password-check');

// 에러 메시지 요소
const emailEmptyError = document.getElementById('emailEmptyError');
const emailInvalidError = document.getElementById('emailInvalidError');
const passwordEmptyError = document.getElementById('passwordEmptyError');
const passwordInvalidError = document.getElementById('passwordInvalidError');
const nickNameEmptyError = document.getElementById('nicknameEmptyError');
const passwordCheckError = document.getElementById('passwordCheckError');

// 이메일 유효성 검사 함수
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// 전체 폼 검증 함수
function validateForm() {
  let isValid = true;

  // 이메일 검증
  const emailValue = emailInput.value.trim();
  if (emailValue === '') {
    showError(emailInput, emailEmptyError);
    hideError(emailInvalidError);
    isValid = false;
  } else if (!isValidEmail(emailValue)) {
    showError(emailInput, emailInvalidError);
    hideError(emailEmptyError);
    isValid = false;
  } else {
    hideError(emailEmptyError);
    hideError(emailInvalidError);
    clearBorder(emailInput);
  }

  // 비밀번호 검증
  const passwordValue = passwordInput.value;
  if (passwordValue === '') {
    showError(passwordInput, passwordEmptyError);
    hideError(passwordInvalidError);
    isValid = false;
  } else if (passwordValue.length < 8) {
    showError(passwordInput, passwordInvalidError);
    hideError(passwordEmptyError);
    isValid = false;
  } else {
    hideError(passwordEmptyError);
    hideError(passwordInvalidError);
    clearBorder(passwordInput);
  }

  // 닉네임 검증
  const nicknameValue = nickNameInput.value;
  if(nicknameValue === '') {    
    showError(nickNameInput, nickNameEmptyError);
    isValid = false;
  } else {
      hideError(nickNameEmptyError);
      clearBorder(nickNameInput);
  }
  
  const passwordCheckValue = passwordCheckInput.value;

  if (passwordCheckValue === '') {
    // 비밀번호 확인창이 비었을 때
    showError(passwordCheckInput, passwordCheckError);
    passwordCheckError.textContent = '비밀번호 확인을 입력해주세요';
    isValid = false;
  } else if (passwordCheckValue !== passwordValue) {
    // 비밀번호와 일치하지 않을 때
    showError(passwordCheckInput, passwordCheckError);
    passwordCheckError.textContent = '비밀번호가 일치하지 않습니다';
    isValid = false;
  } else {
    // 통과
    hideError(passwordCheckError);
    clearBorder(passwordCheckInput);
  }

  // 로그인 버튼 상태
  setLoginButtonState(isValid);

  // 결과 반환
  return isValid;
}

// 에러 표시 함수
function showError(input, errorElement) {
  input.style.border = '1px solid #f74747';
  errorElement.style.display = 'block';
}

// 에러 숨기기 함수
function hideError(errorElement) {
  errorElement.style.display = 'none';
}

// 테두리 초기화
function clearBorder(input) {
  input.style.border = 'none';
}

// 로그인 버튼 활성화/비활성화
function setLoginButtonState(isActive) {
  if (isActive) {
    signUpButton.disabled = false;
    signUpButton.style.backgroundColor = '#3b82f6';
  } else {
    signUpButton.disabled = true;
    signUpButton.style.backgroundColor = '#9ca3af';
  }
}

// 포커스 아웃 이벤트로 검증
emailInput.addEventListener('blur', validateForm);
passwordInput.addEventListener('blur', validateForm);
nickNameInput.addEventListener('blur', validateForm);
passwordCheckInput.addEventListener('blur', validateForm);

// 입력 중에도 버튼 상태 체크
emailInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);
nickNameInput.addEventListener('input', validateForm);
passwordCheckInput.addEventListener('input', validateForm);

// 로그인 버튼 클릭
signUpButton.addEventListener('click', function (e) {
  e.preventDefault(); // 기본 이동 막기

  // 최종 검증 다시 실행
  const isFormValid = validateForm();

  // 유효할 때만 이동
  if (isFormValid) {
    window.location.href = 'items.html';
  }
});

// 비밀번호 보기/숨기기 토글
togglePasswordButton.addEventListener('click', function () {
  const isPasswordVisible = passwordInput.type === 'text';

  // 비밀번호 타입 토글
  passwordInput.type = isPasswordVisible ? 'password' : 'text';

  // 아이콘 이미지 변경
  togglePasswordButton.src = isPasswordVisible 
    ? 'img/btn_visibility_on_24px.png' // 가려진 상태
    : 'img/btn_visibility_off_24px.png'; // 보이는 상태

  // alt 텍스트 변경 (웹 접근성)
  togglePasswordButton.alt = isPasswordVisible 
    ? '비밀번호 숨기기'
    : '비밀번호 보기';
});

toggleCheckButton.addEventListener('click', function () {
    const isPasswordCheckVisible = passwordCheckInput.type === 'text';
  
    // 비밀번호 확인 input의 타입 바꿈
    passwordCheckInput.type = isPasswordCheckVisible ? 'password' : 'text';
  
    // 아이콘 이미지 변경
    toggleCheckButton.src = isPasswordCheckVisible 
      ? 'img/btn_visibility_on_24px.png' // 가려진 상태
      : 'img/btn_visibility_off_24px.png'; // 보이는 상태
  
    // alt 텍스트 변경 (웹 접근성)
    toggleCheckButton.alt = isPasswordCheckVisible 
      ? '비밀번호 숨기기'
      : '비밀번호 보기';
  });

