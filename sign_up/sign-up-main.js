import { createValidRule, ruleObj, emailInput, passwordInput, nameInput, passwordCheckInput } from '../modules/validation-rule.mjs';
import { initValidation } from '../modules/validate.mjs';
import { initPasswordVisibility, visibilityPw, visibilityPwCheck } from '../modules/toggle-visibility-pw.mjs';

const singUpValidationState = createValidRule({ emailInput, passwordInput, nameInput, passwordCheckInput }, ruleObj);
initValidation(singUpValidationState);
initPasswordVisibility({ visibilityPw, visibilityPwCheck });