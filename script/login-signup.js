// 로그인
const LoginInputs = document.querySelectorAll('.LoginInput');
const loginBtn = document.getElementById('loginBtn');
// 회원가입
const SignupInputs = document.querySelectorAll('.SignupInput');
const signupBtn = document.getElementById('signupBtn');


// 로그인
LoginInputs.forEach(function(input) {
    input.addEventListener("input", checkInput);
    input.addEventListener("focusout", checkInput);
});
// 회원가입
SignupInputs.forEach(function(input) {
    input.addEventListener("input", checkInput);
    input.addEventListener("focusout", checkInput);
})



function checkInput(e) {
    const input = e.target;
    const inputText = input.value.trim();
    const ErrMsg = input.parentElement.querySelector('.error-msg');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const typeEmail = input.type === "email";
    const typePassword = input.classList.contains('signup-password-input') || input.classList.contains('login-password-input');
    const typeCkPassword = input.classList.contains('signup-ckpassword-input');
    const typeNickname = input.classList.contains('signup-nickname-input');
    let hasError = false;


    // 이메일
    if (typeEmail) {
        if (inputText === "") {
            input.style.border = "1px solid red";
            ErrMsg.style.display = "block";
            ErrMsg.textContent = "이메일을 입력해주세요.";
            hasError = true;
        } else if (!emailPattern.test(inputText)) {
            input.style.border = "1px solid red";
            ErrMsg.style.display = "block";
            ErrMsg.textContent = "잘못된 이메일 형식입니다.";
            hasError = true;
        }
    }

    // 비번
    if (typePassword) {
        if (inputText === "") {
            input.style.border = "1px solid red";
            ErrMsg.style.display = "block";
            ErrMsg.textContent = "비밀번호를 입력해주세요.";
            hasError = true;
        } else if (inputText.length < 8) {
            input.style.border = "1px solid red";
            ErrMsg.style.display = "block";
            ErrMsg.textContent = "비밀번호를 8자 이상 입력해주세요.";
            hasError = true;
        }
    }

    // 닉네임
    if (typeNickname) {
        if (inputText === "") {
            input.style.border = "1px solid red";
            ErrMsg.style.display = "block";
            ErrMsg.textContent = "닉네임을 입력해주세요.";
            hasError = true;
        }
    }

    // 비밀번호 확인
    if (typeCkPassword) {
        const originPwInput = document.querySelector('.signup-password-input');
        if (originPwInput) {
            const originPw = originPwInput.value.trim();

            if (inputText === "") {
                input.style.border = "1px solid red";
                ErrMsg.style.display = "block";
                ErrMsg.style.color = "red";
                ErrMsg.textContent = "비밀번호 확인을 입력해주세요.";
                hasError = true;
            } else if (inputText !== originPw) {
                input.style.border = "1px solid red";
                ErrMsg.style.display = "block";
                ErrMsg.style.color = "red";
                ErrMsg.textContent = "비밀번호가 일치하지 않습니다.";
                hasError = true;
            } else {
                input.style.border = "none";
                ErrMsg.style.display = "none";
            }
        }
    }
    
    // 정상화
    if (!hasError && !typeCkPassword) {
        input.style.border = "none";
        ErrMsg.style.display = "none";
    }
    
    toggleButton();
}

// 
// 
// 
// 버튼 활성화시키기
function toggleButton() {
    // 로그인
    console.log('11');
    const emailInput = document.querySelector('.login-email-input');
    const passwordInput = document.querySelector('.login-password-input');

    if (emailInput && passwordInput) {
        const checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailInput.value.trim());
        const checkPassword = passwordInput.value.trim().length >= 8;

        if (checkEmail && checkPassword) {
            loginBtn.disabled = false;
            loginBtn.style.backgroundColor = "#3692FF";
            loginBtn.style.cursor = "pointer";
        }
        else {
            loginBtn.disabled = true;
            loginBtn.style.backgroundColor = "#9CA3AF";
            loginBtn.style.cursor = "default";
        }
    }


    // 회원가입
    const signupEmail = document.querySelector('.signup-email-input');
    const signupNickname = document.querySelector('.signup-nickname-input');
    const signupPw = document.querySelector('.signup-password-input');
    const signupCkPw = document.querySelector('.signup-ckpassword-input');

    if (signupEmail && signupNickname && signupPw && signupCkPw) {
        const checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(signupEmail.value.trim());
        const checkNickname = signupNickname.value.trim() !== "";
        const realPW = signupPw.value.trim().length >= 8;
        const checkPW = signupPw.value.trim() === signupCkPw.value.trim();

        if (checkEmail && checkNickname && realPW && checkPW) {
            signupBtn.disabled = false;
            signupBtn.style.backgroundColor = "#3692FF";
            signupBtn.style.cursor = "pointer";
        } else {
            signupBtn.disabled = true;
            signupBtn.style.backgroundColor = "#9CA3AF";
            signupBtn.style.cursor = "default";
        }
    }
}