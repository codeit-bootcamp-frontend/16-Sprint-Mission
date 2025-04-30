import { validators } from './validation.js';

const email = document.querySelector('#email');
const emailError = document.querySelector('#email-error');
const pw = document.querySelector('#password');
const pwError = document.querySelector('#password-error');
const pwImg = document.querySelector('.img-password');
const loginBtn = document.querySelector('.long-btn.login.disabled');

let isEmail = 0;
let isPw = 0;

function emailValidChk(email) {
  const pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/;
  return pattern.test(email);
}

function isLogin() {
  if (isEmail && isPw) {
    loginBtn.classList.remove('disabled');
    loginBtn.setAttribute('onclick', "location.href='/items.html'");
  } else {
    loginBtn.classList.add('disabled');
    loginBtn.setAttribute('onclick', '');
  }
}

function emailEvent(event) {
  const data = event.target.value;
  if (data === '') {
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
  isLogin();
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
  isLogin();
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

email.addEventListener('blur', emailEvent);
pw.addEventListener('blur', pwEvent);
pwImg.addEventListener('click', pwImgEvent);
