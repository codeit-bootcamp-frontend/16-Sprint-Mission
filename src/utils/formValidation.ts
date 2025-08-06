import {
  ValidatorResult,
  FormFieldName,
  validators,
  ValidatorParams,
} from "../types/form";

export const validateInput = <T extends FormFieldName>(
  validatorType: T,
  ...values: ValidatorParams[T]
): ValidatorResult => {
  const errorValidator = () => ({
    isValid: false,
    message: "유효성 체크가 정의되지 않았습니다.",
  });

  const validator =
    (validators[validatorType] as (
      ...args: ValidatorParams[T]
    ) => ValidatorResult) || errorValidator;
  return validator(...values);
};
