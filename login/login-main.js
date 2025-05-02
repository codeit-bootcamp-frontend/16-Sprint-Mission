import { createValidRule, ruleObj, emailInput, passwordInput } from '../modules/validation-rule.mjs';
import { initValidation } from '../modules/validate.mjs';
import { initPasswordVisibility, visibilityPw } from '../modules/toggle-visibility-pw.mjs';

const loginValidationState  = createValidRule({ emailInput, passwordInput }, ruleObj); //네이밍구조 페이지 기반으로 바꾸기
initValidation(loginValidationState);
initPasswordVisibility({ visibilityPw });
