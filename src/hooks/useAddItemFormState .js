import { useCallback, useReducer } from 'react';

const initialState = {
  values: {},
  isFilled: {},
};

function addItemReducer(state, action) {
  const { name, value, tagList } = action.payload;

  switch (action.type) {
    case 'set_value': {
      //제어 컴포넌트용
      let isPassed = value.length === 0 ? false : true;
      if (name === 'tag') isPassed = false; //태그는 인풋 값 말고 tagList로 판단

      return {
        values: { ...state.values, [name]: value },
        isFilled: { ...state.isFilled, [name]: isPassed },
      };
    }

    case 'set_tag': {
      //태그 리스트 판단용
      const isPassed = tagList?.length !== 0 ? true : false;

      return {
        values: { ...state.values, [name]: '' },
        isFilled: { ...state.isFilled, [name]: isPassed },
      };
    }

    default:
      return state;
  }
}

export function useAddItemFormState() {
  const [addItemValues, dispatch] = useReducer(addItemReducer, initialState);

  const updateFieldState = useCallback((name, value, tagList) => {
    if (tagList) {
      dispatch({ type: 'set_tag', payload: { name, value, tagList } });
    } else {
      dispatch({ type: 'set_value', payload: { name, value } });
    }
  }, []);

  const getFieldState = useCallback(
    (name) => {
      const inputValue = addItemValues.values[name] || '';
      const isPassed = addItemValues.isFilled[name] || false;

      return { inputValue, isPassed };
    },
    [addItemValues],
  );

  return { updateFieldState, getFieldState };
}
