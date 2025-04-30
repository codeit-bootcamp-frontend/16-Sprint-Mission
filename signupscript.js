const passwordInput = document.getElementById('password')
const showEye = document.getElementById('show-eye')
const hideEye = document.getElementById('hide-eye')

showEye.addEventListener('click', function () {
  passwordInput.setAttribute('type', 'password');
  showEye.style.display = 'none';
  hideEye.style.display = 'inline';
});

hideEye.addEventListener('click', function () {
  passwordInput.setAttribute('type', 'text');
  showEye.style.display = 'inline';
  hideEye.style.display = 'none';
});

const passwordCheckInput = document.getElementById('password-check')
const showCheckEye = document.getElementById('show-check-eye')
const hideCheckEye = document.getElementById('hide-check-eye')

showCheckEye.addEventListener('click', function () {
  passwordCheckInput.setAttribute('type', 'password');
  showCheckEye.style.display = 'none';
  hideCheckEye.style.display = 'inline';
});

hideCheckEye.addEventListener('click', function () {
  passwordCheckInput.setAttribute('type', 'text');
  showCheckEye.style.display = 'inline';
  hideCheckEye.style.display = 'none';
});