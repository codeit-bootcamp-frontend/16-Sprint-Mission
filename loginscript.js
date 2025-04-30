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
