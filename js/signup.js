document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('email')
  const nicknameInput = document.getElementById('nickname')
  const passwordInput = document.getElementById('password')
  const passwordCheckInput = document.getElementById('passwordCheck')
  const signupButton = document.querySelector('.login_button')
  const signupForm = document.querySelector('.signup_form_frame')

  // 이메일 부분
  emailInput.addEventListener('blur', () => {
    const value = emailInput.value.trim()
    const errorMsg = getOrCreateErrorElement(emailInput)

    if (!value) {
      showError(emailInput, errorMsg, '이메일을 입력해주세요.')
    } else if (!isValidEmail(value)) {
      showError(emailInput, errorMsg, '잘못된 이메일 형식입니다.')
    } else {
      clearError(emailInput, errorMsg)
    }

    updateButtonState()
  })

  // 닉네임 부분
  nicknameInput.addEventListener('blur', () => {
    const value = nicknameInput.value.trim()
    const errorMsg = getOrCreateErrorElement(nicknameInput)

    if (!value) {
      showError(nicknameInput, errorMsg, '닉네임을 입력해주세요.')
    } else {
      clearError(nicknameInput, errorMsg)
    }

    updateButtonState()
  })

  // 비밀번호 부분
  passwordInput.addEventListener('blur', () => {
    const value = passwordInput.value.trim()
    const errorMsg = getOrCreateErrorElement(passwordInput)

    if (!value) {
      showError(passwordInput, errorMsg, '비밀번호를 입력해주세요.')
    } else if (value.length < 8) {
      showError(passwordInput, errorMsg, '비밀번호를 8자 이상 입력해주세요.')
    } else {
      clearError(passwordInput, errorMsg)
    }

    updateButtonState()
  })

  // 비밀번호 확인 부분분
  passwordCheckInput.addEventListener('blur', () => {
    const pwValue = passwordInput.value.trim()
    const checkValue = passwordCheckInput.value.trim()
    const errorMsg = getOrCreateErrorElement(passwordCheckInput)

    if (pwValue !== checkValue) {
      showError(passwordCheckInput, errorMsg, '비밀번호가 일치하지 않습니다.')
    } else {
      clearError(passwordCheckInput, errorMsg)
    }

    updateButtonState()
  })

  emailInput.addEventListener('input', updateButtonState)
  nicknameInput.addEventListener('input', updateButtonState)
  passwordInput.addEventListener('input', updateButtonState)
  passwordCheckInput.addEventListener('input', updateButtonState)

  function updateButtonState() {
    const emailValue = emailInput.value.trim()
    const nicknameValue = nicknameInput.value.trim()
    const passwordValue = passwordInput.value.trim()
    const passwordCheckValue = passwordCheckInput.value.trim()

    const hasEmailError = getOrCreateErrorElement(emailInput).textContent !== ''
    const hasNicknameError =
      getOrCreateErrorElement(nicknameInput).textContent !== ''
    const hasPasswordError =
      getOrCreateErrorElement(passwordInput).textContent !== ''
    const hasPasswordCheckError =
      getOrCreateErrorElement(passwordCheckInput).textContent !== ''

    const isValid =
      emailValue &&
      nicknameValue &&
      passwordValue &&
      passwordCheckValue &&
      !hasEmailError &&
      !hasNicknameError &&
      !hasPasswordError &&
      !hasPasswordCheckError

    signupButton.disabled = !isValid

    if (isValid) {
      signupButton.classList.add('active')
    } else {
      signupButton.classList.remove('active')
    }
  }

  // 회원가입시 로그인페이지로
  signupForm.addEventListener('submit', function (e) {
    e.preventDefault()
    if (!signupButton.disabled) {
      window.location.href = '/login/index.html'
    }
  })

  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  function showError(input, errorElement, message) {
    const wrapper = input.closest('.login_password_wrap') || input
    wrapper.classList.add('error')
    errorElement.textContent = message
    errorElement.style.display = 'block'
  }

  function clearError(input, errorElement) {
    const wrapper = input.closest('.login_password_wrap') || input
    wrapper.classList.remove('error')
    errorElement.textContent = ''
    errorElement.style.display = 'none'
  }

  function getOrCreateErrorElement(input) {
    let wrapper = input.closest('.login_password_wrap') || input
    let next = wrapper.nextElementSibling
    if (!next || !next.classList.contains('error-message')) {
      const error = document.createElement('p')
      error.className = 'error-message'
      error.style.color = 'red'
      error.style.fontSize = '14px'
      error.style.marginTop = '4px'
      wrapper.parentNode.insertBefore(error, wrapper.nextSibling)
      return error
    }
    return next
  }

  // 페이지 로드 초기화
  updateButtonState()
})
