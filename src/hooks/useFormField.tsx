import { useEffect, useState, type ChangeEvent, type FocusEvent } from 'react';
import { validators, type FieldKey, type ValidationResultType } from '../utils/validators';

const getInitialState = <T,>(initialField: FieldKey[], initialValue: T) => {
  const nextState = {} as Partial<Record<FieldKey, T>>;
  for (const key of initialField) {
    nextState[key] = initialValue;
  }
  return nextState as Record<FieldKey, T>;
};

const INITIALFIELD: FieldKey[] = ['email', 'nickname', 'password', 'passwordVerify'];

export const useFormField = (initialField: FieldKey[] = INITIALFIELD) => {
  //
  const [values, setValues] = useState(getInitialState<string>(initialField, ''));
  const [valids, setValids] = useState(getInitialState<boolean | null>(initialField, null));
  const [hints, setHints] = useState(getInitialState<string>(initialField, ''));
  const [isSubmitEnable, setIsSubmitEnable] = useState(false);

  const validationMap: {
    [key in FieldKey]: ValidationResultType;
  } = {
    email: validators.email(values.email),
    nickname: validators.nickname(values.nickname),
    password: validators.password(values.password, values.passwordVerify),
    passwordVerify: validators.passwordVerify(values.passwordVerify, values.password),
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const key = e.target.id as FieldKey;
    const value = e.target.value as string;

    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleInputBlur = (e: FocusEvent<HTMLInputElement>): void => {
    const key = e.target.id as FieldKey;
    const validateResults = validationMap[key];

    const nextValids = {} as Partial<Record<FieldKey, boolean>>;
    const nextHints = {} as Partial<Record<FieldKey, string>>;
    if (validateResults) {
      for (const validateKey in validateResults) {
        const updateKey = validateKey as FieldKey;
        nextValids[updateKey] = validateResults[updateKey]?.isValid;
        nextHints[updateKey] = validateResults[updateKey]?.message;
      }
    }
    setValids((prev) => ({ ...prev, ...nextValids }));
    setHints((prev) => ({ ...prev, ...nextHints }));
  };

  useEffect(() => {
    setIsSubmitEnable(Object.values(valids).every((v) => v === true));
  }, [valids]);

  return { values, valids, hints, isSubmitEnable, handleInputChange, handleInputBlur };
};
