import { useMemo } from "react";
import { getIsAllValid } from "../utils/getIsAllValid";

const checkValidInputLength = (value) => {
  return { isValid: value.length > 0 };
};

const useRequiredValidation = (formData) => {
  const validations = useMemo(() => {
    const results = {};
    Object.keys(formData).forEach((key) => {
      const value = formData[key];

      if (Array.isArray(value)) {
        results[key] = checkValidInputLength(value);
      } else if (typeof value === "string") {
        results[key] = checkValidInputLength(value);
      } else {
        results[key] = { isValid: false };
      }
    });

    return results;
  }, [formData]);

  const isAllValid = useMemo(() => {
    const validationValues = Object.values(validations);
    return getIsAllValid(validationValues);
  }, [validations]);

  return { validations, isAllValid };
};

export default useRequiredValidation;
