
const emailInput = document.querySelector("#user-email");
const pwInput = document.querySelector("#user-password");
const userForm = document.querySelector("form");
const submitBtn = document.querySelector("button");
const errMsg = document.querySelector(".error-message");
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


function emailValidation() {
    document.querySelector("#user-email+.error-message")?.remove();
    if (!regex.test(emailInput.value)) {
        emailInput.classList.add("error-Line");
        const errEmail = document.createElement("span");
        errEmail.classList.add("error-message");
        errEmail.innerText = emailInput.value ? "잘못된 이메일입니다." : "이메일을 입력해주세요";
        emailInput.insertAdjacentElement("afterend", errEmail);
        return false;
    } else {
        emailInput.classList.remove("error-Line");
        return true;
    }
}

function pwValidation() {
    document.querySelector("#user-password+.error-message")?.remove();
    if (pwInput.value.length < 8) {
        pwInput.classList.add("error-Line");
        const errPw = document.createElement("span");
        errPw.classList.add("error-message");
        errPw.innerText = (pwInput.value.length == 0) ? "비밀번호를 입력해주세요." : "비밀번호를 8자 이상 입력해주세요."
        pwInput.insertAdjacentElement("afterend", errPw);
        return false;
    } else {
        pwInput.classList.remove("error-Line");
        return true;
    }
}

function preventInvalidSubmit(e) {
    const emailPass = emailValidation();
    const pwPass = pwValidation();
    if (!(emailPass && pwPass)) {
        e.preventDefault();
    }
}

// 이건 확실히 상태로 하는 게 좋겠네
function canISubmit() {
    const emailPass = emailValidation();
    const pwPass = pwValidation();
    // const emailPass = obj.email;
    // const pwPass = obj.password;
    if (!(emailPass && pwPass)) {
        submitBtn.classList.add("error-button");
    } else {
        submitBtn.classList.remove("error-button");
    }
    // errMsg ? submitBtn.classList.add("error-button") : submitBtn.classList.remove("error-button");
}

emailInput.addEventListener("focusout",emailValidation);
emailInput.addEventListener("focusout",canISubmit);
pwInput.addEventListener("focusout", pwValidation);
pwInput.addEventListener("focusout", canISubmit);
userForm.addEventListener("submit", preventInvalidSubmit);
userForm.addEventListener("submit", canISubmit);

// 추가할 내용
// if(nameInput)
// if(pwCheckInput)


