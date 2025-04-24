const email = document.querySelector('#email');
const emailError = document.querySelector('#email-error');
const nick = document.querySelector('#nickname');
const nickError = document.querySelector('#nickname-error');
const pw = document.querySelector('#password');
const pwError = document.querySelector('#password-error');
const pwCheck = document.querySelector('#password-check');
const pwCheckError = document.querySelector('#pwcheck-error');
const pwImg = document.querySelector('.img-password');
const pwCheckImg = document.querySelector('.img-password.check');
const signupBtn = document.querySelector('.long-btn.login.disabled');

let isEmail = 0;
let isNick = 0;
let isPw = 0;

function emailValidChk(email) {
  const pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/;
  return pattern.test(email);
}

function isSignup() {
  if (isEmail && isPw && isNick && pw.value === pwCheck.value) {
    signupBtn.classList.remove('disabled');
    signupBtn.setAttribute('onclick', "location.href='/login.html'");
  } else {
    signupBtn.classList.add('disabled');
    signupBtn.setAttribute('onclick', '');
  }
}

function emailEvent(event) {
  if (event.target.value === '') {
    event.target.classList.add('error');
    email.focus();
    emailError.innerHTML = '이메일을 입력해주세요.';
    isEmail = 0;
  } else if (!emailValidChk(data)) {
    event.target.classList.add('error');
    email.focus();
    emailError.innerHTML = '잘못된 이메일 형식입니다.';
    isEmail = 0;
  } else {
    event.target.classList.remove('error');
    emailError.innerHTML = '';
    isEmail = 1;
  }
  isSignup();
}

function nickEvent(event) {
  if (event.target.value === '') {
    event.target.classList.add('error');
    nick.focus();
    nickError.innerHTML = '닉네임을 입력해주세요.';
    isNick = 0;
  } else {
    event.target.classList.remove('error');
    nickError.innerHTML = '';
    isNick = 1;
  }
  isSignup();
}

function pwEvent(event) {
  if (event.target.value === '') {
    event.target.classList.add('error');
    pw.focus();
    pwError.innerHTML = '비밀번호를 입력해주세요.';
    isPw = 0;
  } else if (event.target.value.length < 8) {
    event.target.classList.add('error');
    pw.focus();
    pwError.innerHTML = '비밀번호를 8자 이상 입력해주세요';
    isPw = 0;
  } else {
    event.target.classList.remove('error');
    pwError.innerHTML = '';
    isPw = 1;
  }
  isSignup();
}

function pwCheckEvent(event) {
  if (event.target.value === '') {
    event.target.classList.remove('error');
    pwCheckError.innerHTML = '';
  } else if (event.target.value.length > 0 && pw.value === pwCheck.value) {
    event.target.classList.remove('error');
    pwCheckError.innerHTML = '';
  } else {
    event.target.classList.add('error');
    pwCheck.focus();
    pwCheckError.innerHTML = '비밀번호가 일치하지 않습니다.';
  }
  isSignup();
}

function pwImgEvent() {
  if (pw.getAttribute('type') === 'password') {
    pw.setAttribute('type', 'text');
    pwImg.setAttribute('src', 'images/Icon_pwopen.png');
  } else {
    pw.setAttribute('type', 'password');
    pwImg.setAttribute('src', 'images/Icon_pwclose.png');
  }
}

function pwImgCheckEvent() {
  if (pwCheck.getAttribute('type') === 'password') {
    pwCheck.setAttribute('type', 'text');
    pwCheckImg.setAttribute('src', 'images/Icon_pwopen.png');
  } else {
    pwCheck.setAttribute('type', 'password');
    pwCheckImg.setAttribute('src', 'images/Icon_pwclose.png');
  }
}

email.addEventListener('blur', emailEvent);
nick.addEventListener('blur', nickEvent);
pw.addEventListener('blur', pwEvent);
pwCheck.addEventListener('blur', pwCheckEvent);
pwImg.addEventListener('click', pwImgEvent);
pwCheckImg.addEventListener('click', pwImgCheckEvent);
