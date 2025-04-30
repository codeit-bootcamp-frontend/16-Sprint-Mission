const userForm = document.querySelector("form");
const submitBtn = document.querySelector("button");

// 검사 통과 못한 거 있나요?
function hasInvalidInput(validRule) {
    return Object.values(validRule).some(validator => validator.passed === false);
}

//폼 전송 막기
function preventInvalidSubmit(e, validRule) {
    //서브밋 누르면 통과 못한 인풋에 경고 보여줘
    Object.values(validRule).forEach((validator) => {
        updateValidation({ currentTarget: validator.input }, validRule);
    });

    if (hasInvalidInput(validRule)) {
        e.preventDefault();
    }
}

//검사 실패 시 스타일 추가
function updateValidation(e, validRule) {
    const { name } = e.currentTarget;
    const validator = validRule[name];

    removeMessage(name)

    if (!validator.condition()) {
        appendErr(validator);
        validator.passed = false;
    } else {
        clearErr(validator);
        validator.passed = true;
    }

    updateButton(validRule);
}

//존재하는 실패 메세지 삭제
function removeMessage(name) {
    const msg = document.querySelector(`#${name}+.error-message`);
    if (msg) msg.remove();
}

// 검사 실패 메세지 추가
function appendErr(validator) {
    validator.input.classList.add("error-Line");
    const err = document.createElement("span");
    err.classList.add("error-message");
    err.textContent = validator.createMsg();
    validator.input.insertAdjacentElement("afterend", err);
}

// 검사 실패 스타일 삭제
function clearErr(validator) {
    validator.input.classList.remove("error-Line");
}

// 버튼 스타일 추가
function updateButton(validRule) {
    submitBtn.classList.toggle("pass-button", !hasInvalidInput(validRule));
}

//리스너 추가
export function initValidation(validRule) {
    for (let validator in validRule) {
        validRule[validator].input.addEventListener("focusout", e => updateValidation(e, validRule));
    }

    userForm.addEventListener("submit", e => preventInvalidSubmit(e, validRule));

    if (validRule['user-password-check']) {
        validRule['user-password'].input.addEventListener("focusout", () => {
            // 비밀번호 변경되었을 때 비밀번호 확인도 같이 
            updateValidation({ currentTarget: validRule['user-password-check'].input }, validRule);
        });
    }
}
