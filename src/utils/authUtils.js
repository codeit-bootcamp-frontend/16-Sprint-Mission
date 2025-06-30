// 닉네임 검사
export function checkValidNickname(value) {
  // 빈값 확인
  if (!value.trim().length)
    return { isValid: false, msg: "닉네임을 입력해주세요." };

  // 유효성 검사 통과시
  return { isValid: true, msg: "" };
}

// 이메일 검사
export function checkValidEmail(value) {
  // 빈값 확인
  if (!value.trim().length)
    return { isValid: false, msg: "이메일을 입력해주세요." };

  // 유효성 검사
  const PATTERN =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  if (!PATTERN.test(value))
    return { isValid: false, msg: "잘못된 이메일 형식입니다." };

  // 유효성 검사 통과시
  return { isValid: true, msg: "" };
}

// 비밀번호 검사
export function checkValidPassword(value) {
  // 빈값 확인
  if (!value.trim().length)
    return { isValid: false, msg: "비밀번호를 입력해주세요." };

  // 유효성 검사
  const PATTERN = /^[0-9a-zA-Z]{8}/;
  if (!PATTERN.test(value))
    return { isValid: false, msg: "비밀번호를 8자 이상 입력해주세요." };

  // 유효성 검사 통과시
  return { isValid: true, msg: "" };
}

// 비밀번호 확인 검사
export function checkValidPasswordConfirm(value, password) {
  // 빈값 확인
  if (!value.trim().length)
    return { isValid: false, msg: "비밀번호를 입력해주세요." };

  // 유효성 검사
  if (value !== password)
    return { isValid: false, msg: "비밀번호가 일치하지 않습니다." };

  // 유효성 검사 통과시
  return { isValid: true, msg: "" };
}

export function getIsAllValid(valueValids) {
  return valueValids.every((valid) => valid.isValid);
}

// 인풋 유효성 검사 결과에 따라 클래스명 전달
export function getAuthValidClassName(isValid) {
  if (isValid === null) return "";

  return isValid ? "isPass" : "isError";
}
