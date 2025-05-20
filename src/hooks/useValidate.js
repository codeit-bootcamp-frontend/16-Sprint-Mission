import { useState } from "react";

const ruleObj = {
    'user-email': {
        isValid(value) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        getErrorMessage(value) {
            return value ? "잘못된 이메일입니다." : "이메일을 입력해주세요"
        },
    },
    'user-password': {
        isValid(value) {
            return value.length >= 8;
        },
        getErrorMessage(value) {
            return (value.length == 0) ? "비밀번호를 입력해주세요." : "비밀번호를 8자 이상 입력해주세요."
        },
    },
    'user-name': {
        isValid(value) {
            return value;
        },
        getErrorMessage() {
            return "닉네임을 입력해주세요";
        },
    },
    'user-password-check': {
        // input: passwordCheckInput,
        isValid() {
            //여기보류해야하나
            return (passwordInput.value === this.input.value) && passwordCheckInput.value.length != 0;
        },
        getErrorMessage() {
            return "비밀번호가 일치하지 않습니다."
        },
    }
}

export function useValidate() {
    const [err, setErr] = useState(false);
    const [errMsg, setErrMsg] = useState("");

    function updateErrUi(e, setHasErr) {
        const validator = ruleObj[e.target.name];
        const targetValue = e.target.value;

        if (validator.isValid(targetValue)) {
            setErr(false);
            setErrMsg("");
            setHasErr((prev) => ({ ...prev, [e.target.name]: false }));
        } else {
            setErr(true);
            setErrMsg(validator.getErrorMessage(targetValue))
            setHasErr((prev) => ({ ...prev, [e.target.name]: true }));
        }
    }

    return [err, errMsg, updateErrUi];
}




