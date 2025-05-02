const userForm = document.querySelector("form");
const submitBtn = document.querySelector("button");

// 검사 통과 못한 거 있나요?
function hasInvalidInput(validationState) {
    return Object.values(validationState).some(validator => validator.passed === false);
}

//폼 전송 막기
function preventInvalidSubmit(e, validationState) {
    //서브밋 누르면 통과 못한 인풋에 경고 보여줘
    Object.values(validationState).forEach((validator) => {
        updateValidation({ currentTarget: validator.input }, validationState);
    });

    if (hasInvalidInput(validationState)) {
        e.preventDefault();
    }
}

//검사 실패 시 스타일 추가
function updateValidation(e, validationState) {
    const { name } = e.currentTarget;
    const validator = validationState[name];

    removeMessage(name)

    if (!validator.condition()) {
        appendErr(validator);
        validator.passed = false;
    } else {
        clearErr(validator);
        validator.passed = true;
    }

    updateButton(validationState);
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
function updateButton(validationState) {
    submitBtn.classList.toggle("pass-button", !hasInvalidInput(validationState));
}

//리스너 추가
export function initValidation(validationState) {
    for (let validator in validationState) {
        validationState[validator].input.addEventListener("focusout", e => updateValidation(e, validationState));
    }

    userForm.addEventListener("submit", e => preventInvalidSubmit(e, validationState));

    if (validationState['user-password-check']) {
        validationState['user-password'].input.addEventListener("focusout", () => {
            // 비밀번호 변경되었을 때 비밀번호 확인도 같이 
            updateValidation({ currentTarget: validationState['user-password-check'].input }, validationState);
        });
    }
}
