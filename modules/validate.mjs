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
        updateFailStyle({ currentTarget: validator.input }, validRule);
    });

    if (hasInvalidInput(validRule)) {
        e.preventDefault();
    }
}

//검사 실패 시 스타일 추가
function updateFailStyle(e, validRule) {
    const { name } = e.currentTarget;
    const validator = validRule[name];

    document.querySelector(`#${name}+.error-message`)?.remove();

    if (!validator.condition()) {
        validator.input.classList.add("error-Line");
        const err = document.createElement("span");
        err.classList.add("error-message");
        err.innerText = validator.createMsg();
        validator.input.insertAdjacentElement("afterend", err);
        validator.passed = false;
    } else {
        validator.input.classList.remove("error-Line");
        validator.passed = true;
    }

    updateButton(validRule);
}

// 버튼 스타일 추가
function updateButton(validRule) {
    submitBtn.classList.toggle("pass-button", !hasInvalidInput(validRule));
}

//리스너 추가
export function initValidation(validRule) {
    for (let validator in validRule) {
        validRule[validator].input.addEventListener("focusout", e => updateFailStyle(e, validRule));
    }

    userForm.addEventListener("submit", e => preventInvalidSubmit(e, validRule));

    if (validRule['user-password-check']) {
        validRule['user-password'].input.addEventListener("focusout", () => {
            // 비밀번호 변경되었을 때 비밀번호 확인도 같이 
            updateFailStyle({ currentTarget: validRule['user-password-check'].input }, validRule);
        });
    }
}
