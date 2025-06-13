import { useCallback, useReducer } from "react";

const initialState = {
  values: {},
  isFilled: {},
};

function addItemReducer(state, action) {
  const { name, value } = action.payload;

  switch (action.type) {
    case "set_value": {
      const isPassed = value.length === 0 ? false : true;

      return {
        values: { ...state.values, [name]: value },
        isFilled: { ...state.isFilled, [name]: isPassed },
      };
    }

    default:
      return state;
  }
}

export function useAddItem() {
  const [addItemValues, dispatch] = useReducer(addItemReducer, initialState);

  const checkFilled = useCallback((name, value) => {
    dispatch({ type: "set_value", payload: { name, value } });
  }, []);

  const getInputValues = useCallback(
    (name) => {
      const inputValue = addItemValues.values[name] || "";
      const isPassed = addItemValues.isFilled[name] || false;

      return { inputValue, isPassed };
    },
    [addItemValues],
  );

  return { checkFilled, getInputValues };
}
