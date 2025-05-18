import { useEffect, useState } from "react";
import { validators } from "../utils/validators";

export const useFormFields = (FIELD_KEYS) => {
  const createInitialStates = (initialFields, initialValue) => {
    const returnFields = {};
    for (const field of initialFields) {
      returnFields[field] = initialValue;
    }
    return returnFields;
  };

  const [values, setValues] = useState(createInitialStates(FIELD_KEYS, '')); //prettier-ignore
  const [valids, setValids] = useState(createInitialStates(FIELD_KEYS, null)); //prettier-ignore
  const [hints, setHints] = useState(createInitialStates(FIELD_KEYS, '')); //prettier-ignore
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  const getValidateResults = {
    email: validators.email(values.email),
    nickname: validators.nickname(values.nickname),
    password: validators.password(values.password, values.passwordVerify),
    passwordVerify: validators.passwordVerify(values.passwordVerify, values.password), //prettier-ignore
  };

  useEffect(() => {
    setIsSubmitEnabled(Object.values(valids).every((v) => v === true));
  }, [valids]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateFieldValues(name, value);
  };

  const handleInputBlur = (e) => {
    const { name } = e.target;
    const validResults = getValidateResults[name];
    updateValidResults(validResults);
  };

  const updateFieldValues = (name, value) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const updateValidResults = (validResults) => {
    const nextInputValids = {};
    const nextHints = {};
    for (const validKey in validResults) {
      nextInputValids[validKey] = validResults[validKey].isValid;
      nextHints[validKey] = validResults[validKey].message;
    }
    setValids((prev) => ({
      ...prev,
      ...nextInputValids,
    }));
    setHints((prev) => ({
      ...prev,
      ...nextHints,
    }));
  };

  return {
    values,
    valids,
    hints,
    isSubmitEnabled,
    handleInputChange,
    handleInputBlur,
  };
};
