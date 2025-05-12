import { useEffect, useState } from 'react';

export const useFormFields = ({ FIELDS }) => {
  const createInitialStates = (initialFields, initialValue) => {
    const returnFields = {};
    for (const field in initialFields) {
      returnFields[field] = initialValue;
    }
    return returnFields;
  };

  //prettier-ignore
  const [values, setValues] = useState(createInitialStates(FIELDS, ''));
  //prettier-ignore
  const [valids, setValids] = useState(createInitialStates(FIELDS, null));
  //prettier-ignore
  const [hints, setHints] = useState(createInitialStates(FIELDS, ''));
  //prettier-ignore
  const [isVisibles, setIsVisibles] = useState(createInitialStates(FIELDS, false));
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  useEffect(() => {
    setIsSubmitEnabled(Object.values(valids).every((v) => v === true));
  }, [valids]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateFieldValues(name, value);
  };

  const handleInputBlur = (e) => {
    const { name, value } = e.target;
    const validResults = getValidResults(name, value);
    updateValidResults(validResults);
  };

  const updateFieldValues = (name, value) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getValidResults = (name, value) => {
    const validFunction = FIELDS[name];
    return validFunction(value);
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

  const handlePasswordIconClick = (name) => {
    setIsVisibles((prev) => ({
      ...prev,
      [name]: !isVisibles[name],
    }));
  };

  return {
    values,
    valids,
    hints,
    isVisibles,
    isSubmitEnabled,
    handleInputChange,
    handleInputBlur,
    handlePasswordIconClick,
  };
};
