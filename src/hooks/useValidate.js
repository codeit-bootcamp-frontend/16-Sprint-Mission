import { useCallback, useReducer } from 'react';

const validRuleObj = {
  'user-email': {
    isValid(value) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    },
    getErrorMessage(value) {
      return value ? '잘못된 이메일입니다.' : '이메일을 입력해주세요';
    },
  },
  'user-password': {
    isValid(value) {
      return value.length >= 8;
    },
    getErrorMessage(value) {
      return value.length == 0
        ? '비밀번호를 입력해주세요.'
        : '비밀번호를 8자 이상 입력해주세요.';
    },
  },
  'user-name': {
    isValid(value) {
      return value;
    },
    getErrorMessage() {
      return '닉네임을 입력해주세요';
    },
  },
  'user-password-check': {
    isValid(value, pwValue) {
      return pwValue === value && value.length !== 0;
    },
    getErrorMessage() {
      return '비밀번호가 일치하지 않습니다.';
    },
  },
};

const initialValidationStates = {
  //앞으로 해당 인풋들 다 여기에 한번에 저장 키:밸류로
  values: {},
  errors: {},
  errorMessages: {},
  isValid: {},
};

function validationReducer(state, action) {
  //state는 validationStates
  switch (action.type) {
    case 'set_validationState': {
      const { name, value } = action.payload;
      const validator = validRuleObj[name];
      const isValid = Boolean(
        validator.isValid(value, state.values['user-password']),
      );
      const errMsg = isValid ? '' : validator.getErrorMessage(value);

      return {
        //여기서 새로 만들어서 set해주기
        values: { ...state.values, [name]: value },
        errors: { ...state.errors, [name]: !isValid },
        errorMessages: { ...state.errorMessages, [name]: errMsg },
        isValid: { ...state.isValid, [name]: isValid },
      };
    }
    default:
      return state;
  }
}

export function useValidate() {
  const [validationStates, dispatch] = useReducer(
    validationReducer,
    initialValidationStates,
  );

  const validate = useCallback((name, value) => {
    dispatch({ type: 'set_validationState', payload: { name, value } });
  }, []);

  //아 이렇게 필드 만들어서 가져오면 독립적으로 따로 렌더링할 수 있구나
  //++ dispatch를 발생시키는 인풋은 결국 부모 컴포넌트를 리렌더하니까
  //    -> React.Memo써야 제대로 불필요한 리렌더링 막을 수 있는 거 아닐까?
  // 아 그런데 그럼 password랑 passwordCheck랑  비교 될까...? -> 이건 useEffect로 validate 다시 실행하면 되겠다
  const getFieldState = useCallback(
    (name) => {
      return {
        value: validationStates.values[name] || '',
        error: validationStates.errors[name] || false,
        errorMessage: validationStates.errorMessages[name] || '',
        isValid: validationStates.isValid[name] || false, //초기에만 false로 주기
      };
    },
    [validationStates],
  );

  return { getFieldState, validate };
}

//useCallback으로 해도 어차피 isValid변할 때마다 다시 만들거면
//  그냥 바깥에 빼는게 나을 것 같음
export function checkAllValid(...args) {
  return args.every((item) => item.isValid);
}
