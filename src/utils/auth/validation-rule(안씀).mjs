export const emailInput = document.querySelector("#user-email");
export const passwordInput = document.querySelector("#user-password");
export const nameInput = document.querySelector("#user-name");
export const passwordCheckInput = document.querySelector("#user-password-check");


// 전체 검사 조건
export const ruleObj = {
    'user-email': {
        input: emailInput,
        isValid() {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.input.value);
        },
        getErrorMessage() {
            return this.input.value ? "잘못된 이메일입니다." : "이메일을 입력해주세요"
        },
    },
    'user-password': {
        input: passwordInput,
        isValid() {
            return this.input.value.length >= 8;
        },
        getErrorMessage() {
            return (this.input.value.length == 0) ? "비밀번호를 입력해주세요." : "비밀번호를 8자 이상 입력해주세요."
        },
    },
    'user-name': {
        input: nameInput,
        isValid() {
            return this.input.value;
        },
        getErrorMessage() {
            return "닉네임을 입력해주세요";
        },
    },
    'user-password-check': {
        input: passwordCheckInput,
        isValid() {
            return (passwordInput.value === this.input.value) && passwordCheckInput.value.length != 0;
        },
        getErrorMessage() {
            return "비밀번호가 일치하지 않습니다."
        },
    }
}

// 해당 페이지에 있는 인풋만 규칙 만들기
export function createValidRule(inputElement, ruleObj) {
    const validRule = {}

    Object.values(inputElement).forEach((input) => {
        validRule[input.name] = {
            input,
            condition: ruleObj[input.name].isValid,
            createMsg: ruleObj[input.name].getErrorMessage,
            passed: false,
        }
    });

    return validRule;
}