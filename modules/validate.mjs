import { removeMessage, appendErr, clearErr, updateButton } from './validation-ui.mjs';

const userForm = document.querySelector("form");

// 검사 통과 못한 거 있나요?
export function hasInvalidInput(validationState) {
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

//스타일 추가할지 말지 판단
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

    updateButton(validationState, hasInvalidInput);
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
