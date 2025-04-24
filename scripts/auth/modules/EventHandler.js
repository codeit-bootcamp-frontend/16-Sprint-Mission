// input 상태관리 변수
const inputValidState = {
  email: { isValid: true, message: '' },
  nickname: { isValid: true, message: '' },
  password: { isValid: true, message: '' },
  passwordVerify: { isValid: true, message: '' },
};

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
 * 
 * @param {*} changedStateKey 변경 할 stateKey 지정
 * @param {*} changedStateObject 변경 할 stateKey의 값을 객체로 지정({isvalid: true/false, message: ''})
 */
export const setState = (changedStateKey, changedStateObject) => {
  for(const changeditem in changedStateObject){
    inputValidState[changedStateKey][changeditem] = changedStateObject[changeditem];
  }
}

/**
 * inputEventHandler: form의 input에서 focusout 이벤트 발생 시 관련 요소의 정보를 입력받아 이벤트를 처리하는 함수
 * @param {string} statusKey inputStatus 중 이벤트가 발생한 input 요소의 key
 */
export const inputEventHandler = (stateKey) => {
  const inputElement = document.querySelector(`#${stateKey} .form-input`);
  const inputContainerElement = document.querySelector(`#${stateKey} .form-input-container`);
  const spanStateElement = document.querySelector(`#${stateKey} .form-status-info`);
  inputValidState[stateKey] = validators[stateKey](inputElement.value);
  updateUIByState(stateKey, inputContainerElement, spanStateElement);
  passwordMatchHandler(stateKey);
  checkValidateInputs();
}

// 비밀번호 눈 아이콘 클릭 이벤트
export const onPasswordIconClick = (e, stateKey) => {
  e.target.classList.toggle('inVisible');
  const inputElement = document.querySelector(`#${stateKey} .form-input`);
  if (e.target.classList.contains('inVisible')) inputElement.type = 'password';
  else inputElement.type = 'text';
}

const validators = {
  email: (emailText) => {
    const emailRegex = new RegExp(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i);
    if (!emailText) return { isValid: false, message: '이메일을 입력해주세요' };
    if (emailRegex.test(emailText)) return { isValid: true, message: '' };
    else return { isValid: false, message: '잘못된 이메일 형식입니다' };
  },

  nickname: (nicknameText) => {
    if (!nicknameText) return { isValid: false, message: '닉네임을 입력해주세요' };
    else return { isValid: true, message: '' };
  },

  password: (passwordText) => {
    if (!passwordText) return { isValid: false, message: '비밀번호를 입력해주세요' };
    if (passwordText.length < 8) return { isValid: false, message: '비밀번호를 8자 이상 입력해주세요' };
    else return { isValid: true, message: '' };
  },

  passwordVerify: (passwordVerifyText) => {
    if (!passwordVerifyText) return { isValid: false, message: '비밀번호를 입력해주세요' };
    if (passwordVerifyText.length < 8) return { isValid: false, message: '비밀번호를 8자 이상 입력해주세요' };
    else {
      const passwordText = document.querySelector(`#password .form-input`).value;
      if (passwordText === passwordVerifyText) return { isValid: true, message: '' };
      else return { isValid: false, message: '비밀번호가 일치하지 않습니다' };
    }
  },
};

//inputValidState값에 따른 스타일 업데이트
const updateUIByState = (stateKey, inputContainerElement, spanStateElement) => {
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
};

// stateKey가 password면 passwordVerify도 state재검사 후 스타일 반영
// passwordVerify 요소가 없으면 실행하지 않음
const passwordMatchHandler = (stateKey) => {
  const inputpasswordVerify = document.querySelector(`#passwordVerify .form-input`);
  if (inputpasswordVerify){
    if (stateKey === 'password' && inputpasswordVerify.value) inputEventHandler('passwordVerify');
  }
}

// ValidState.isValid가 전부 true면 Button 활성화
const checkValidateInputs = () => {
  const formButton = document.querySelector('.form-btn');
  formButton.disabled = !Object.values(inputValidState).every((v) => v.isValid);
}