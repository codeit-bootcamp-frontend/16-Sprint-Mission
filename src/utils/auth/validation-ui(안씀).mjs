const submitBtn = document.querySelector("button");

//존재하는 실패 메세지 삭제
export function removeMessage(name) {
    // const msg = document.querySelector(`#${name}+.error-message`);
    
    // if (msg) msg.remove();

    //셋 에러 false
}

// 검사 실패 메세지 추가
export function appendErr(validator) {
    // validator.input.classList.add("error-Line");
    // const err = document.createElement("span");
    // err.classList.add("error-message");
    // err.textContent = validator.createMsg();
    // validator.input.insertAdjacentElement("afterend", err);
    
    //셋 에러 true
}

// 검사 실패 스타일 삭제
export function clearErr(validator) {
    // validator.input.classList.remove("error-Line");
    //셋 에러 false
}

// 버튼 스타일 추가
export function updateButton(validationState, hasInvalidInput) {
    submitBtn.classList.toggle("pass-button", !hasInvalidInput(validationState));
}
