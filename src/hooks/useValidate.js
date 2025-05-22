import { useEffect, useState } from "react";
import { getProducts } from "../service/api";

export const ruleObj = {
  "user-email": {
    value: null,
    isPassed: false,
    isValid(value) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    },
    getErrorMessage(value) {
      return value ? "잘못된 이메일입니다." : "이메일을 입력해주세요";
    },
  },
  "user-password": {
    value: null,
    isPassed: false,
    isValid(value) {
      return value.length >= 8;
    },
    getErrorMessage(value) {
      return value.length == 0
        ? "비밀번호를 입력해주세요."
        : "비밀번호를 8자 이상 입력해주세요.";
    },
  },
  "user-name": {
    value: null,
    isPassed: false,
    isValid(value) {
      return value;
    },
    getErrorMessage() {
      return "닉네임을 입력해주세요";
    },
  },
  "user-password-check": {
    value: null,
    isPassed: false,
    // input: passwordCheckInput,
    isValid(value) {
      //여기보류해야하나
      return ruleObj["user-password"].value === value && value.length != 0;
    },
    getErrorMessage() {
      return "비밀번호가 일치하지 않습니다.";
    },
  },
};

export function useValidate() {
  const [err, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  function updateErrUi(e) {
    const validator = ruleObj[e.target.name];
    const targetValue = e.target.value;

    if (validator.isValid(targetValue)) {
      setErr(false);
      setErrMsg("");
      // setHasErr((prev) => ({ ...prev, [e.target.name]: false }));
      validator.isPassed = true;
    } else {
      setErr(true);
      setErrMsg(validator.getErrorMessage(targetValue));
      // setHasErr((prev) => ({ ...prev, [e.target.name]: true }));
      validator.isPassed = false;
    }



}

  return [err, errMsg, updateErrUi];
}

export function updateValidateRule(name, value) {
  ruleObj[name].value = value;
}

export function hasLoginInvalid() {
  const hasValidResult =
    ruleObj["user-email"].isPassed && ruleObj["user-password"].isPassed
      ? true
      : false;
  return hasValidResult;
}
export function hasSignUpInvalid() {
  const hasValidResult =
    ruleObj["user-email"].isPassed &&
    ruleObj["user-password"].isPassed &&
    ruleObj["user-name"].isPassed &&
    ruleObj["user-password-check"].isPassed
      ? true
      : false;
  return hasValidResult;
}






// 이건 다른 거 일단 킵
export function useLoadItems(queryStrings) {
  const [loadFail, setLoadFail] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    async function loadItemsByQuery() {
      try {
        const result = await getProducts(queryStrings);
        setResult(result);
        // console.log(result)
        setLoadFail(null);
      } catch (err) {
        setLoadFail(err);
      }
    }
    loadItemsByQuery();
  }, []);

  return [loadFail, result];
}


