// input 상태관리 변수
const inputValidState = {
  email: { isValid: true, message: '' },
  nickname: { isValid: true, message: '' },
  password: { isValid: true, message: '' },
  passwordVerify: { isValid: true, message: '' },
};

/**
 * input 요소에서 focusout 이벤트 발생 시 관련 요소의 정보를 입력받아 이벤트를 처리하는 함수
 * @param {string} statusKey inputStatus 중 이벤트가 발생한 input 요소의 key
 */
export const inputEventHandler = (stateKey) => {
  validateHandler(stateKey);
  matchPasswordHandler(stateKey);
  updateUIByState(stateKey);
}

/**
 * 유효성검사 결과값을 InputValidState에 업데이트하는 함수
 * @param {string} stateKey 
 */
const validateHandler = (stateKey) => {
  const inputElement = document.querySelector(`#${stateKey} .form-input`);
  const isInputValid = inputValidators[stateKey](inputElement.value);
  const validMessage = messageObject[stateKey][isInputValid];
  setState(stateKey, {isValid: isInputValid, message: validMessage});
}

/**
 * passwordVerify가 유효성검사를 통과했을 때 password와 일치하는지 확인하고, passwordVerify의 스타일을 업데이트 하는 함수
 * password 또는 passwordVerify가 변경될 때만 실행
 * @param {string} stateKey
 * @returns 
 */
const matchPasswordHandler = (stateKey) => {
  if (!(stateKey=== 'password' || stateKey === 'passwordVerify')) return;
  if (!document.querySelector('#passwordVerify .form-input')) return;
  validateHandler('passwordVerify');
  if(getState('passwordVerify').isValid){
    const isMatched = inputMatchers.passwordMatch();
    const matchedMessage = messageObject.passwordMatch[isMatched];
    setState('passwordVerify',{isValid: isMatched, message: matchedMessage});
    updateUIByState('passwordVerify');
  }
}

const messageObject = {
  email: {
    null: '이메일을 입력해주세요',
    false: '잘못된 이메일 형식입니다',
    true: ''
  },
  nickname: {
    null: '닉네임을 입력해주세요',
    false: '잘못된 이메일 형식입니다',
    true: ''
  },
  password: {
    null: '비밀번호를 입력해주세요',
    false: '비밀번호를 8자 이상 입력해주세요',
    true: ''
  },
  passwordVerify: {
    null: '비밀번호를 입력해주세요',
    false: '비밀번호를 8자 이상 입력해주세요',
    true: ''
  },
  passwordMatch: {
    false: '비밀번호가 일치하지 않습니다',
    true: ''
  }
}

/**
 * 유효성 검사 함수
 */
const inputValidators = {
  email: (emailText) => {
    const emailRegex = new RegExp(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i);
    if (!emailText) return null;
    return (emailRegex.test(emailText));
  },
  nickname: (nicknameText) => {
    return !!nicknameText;
  },
  password: (passwordText) => {
    if (!passwordText) return null;
    return (passwordText.length >= 8);
  },
  passwordVerify: (passwordVerifyText) => {
    if (!passwordVerifyText) return null;
    return (passwordVerifyText.length >= 8);
  },
};

/**
 * password, passwordVerify 일치 비교 함수수
 */
const inputMatchers = {
  passwordMatch: () => {
    const passwordText = document.querySelector('#password .form-input').value;
    const passwordVerifyText = document.querySelector('#passwordVerify .form-input').value;
    return (passwordText === passwordVerifyText);
  }
}

/**
 * inputValidState값에 따라 stateKey에 해당하는 요소의 스타일을 업데이트 해주는 함수
 * @param {string} stateKey 
 */
const updateUIByState = (stateKey) => {
  const inputContainerElement = document.querySelector(`#${stateKey} .form-input-container`);
  const spanStateElement = document.querySelector(`#${stateKey} .form-status-info`);
  if (inputValidState[stateKey].isValid) {
    inputContainerElement.classList.add('valid');
    inputContainerElement.classList.remove('inValid');
    spanStateElement.classList.add('inVisible');
  } else {
    inputContainerElement.classList.add('inValid');
    inputContainerElement.classList.remove('valid');
    spanStateElement.classList.remove('inVisible');
  }
  spanStateElement.textContent = inputValidState[stateKey].message;
  setButtonState();
};

/**
 * inputValidState값에 따라 버튼의 활성화/비활성화 여부를 결정하는 함수
 */
const setButtonState = () => {
  const formButton = document.querySelector('.form-btn');
  formButton.disabled = !Object.values(inputValidState).every((v) => v.isValid);
}

/**
 * input 상태관리 변수 값을 불러오는 함수
 * @param {string} [stateKey]
 * @returns 기본값: inputValidState 객체 return / stateKey 지정 시 : stateKey에 해당하는 상태객체 반환
 */
export const getState = (stateKey) => {
  if(stateKey) return inputValidState[stateKey];
  else return inputValidState;
}

/**
 * input 상태관리 변수 값을 지정하는 함수수
 * @param {string} changedStateKey 변경 할 stateKey 지정
 * @param {object} changedStateObject 변경 할 stateKey의 값을 객체로 지정({isvalid: true/false, message: ''})
 */
export const setState = (changedStateKey, changedStateObject) => {
  for(const changeditem in changedStateObject){
    inputValidState[changedStateKey][changeditem] = changedStateObject[changeditem];
  }
}

export const onPasswordIconClick = (e, stateKey) => {
  e.target.classList.toggle('inVisible');
  const inputElement = document.querySelector(`#${stateKey} .form-input`);
  if (e.target.classList.contains('inVisible')) inputElement.type = 'password';
  else inputElement.type = 'text';
}

/**
 * 버튼 클릭 이벤트 지정 함수
 */
export const onButtonClick = (e) => {
  const formType = document.querySelector(".form-container").dataset.mode;
  if(formType==="login"){
    e.preventDefault();
    location.href = 'items.html';
  }else if(formType==="signup"){
    e.preventDefault();
    location.href = 'login.html';
  }
}