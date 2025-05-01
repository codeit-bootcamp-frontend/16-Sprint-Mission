import { createValidRule, ruleObj, emailInput, passwordInput, nameInput, passwordCheckInput } from '../modules/validation-rule.mjs';
import { initValidation } from '../modules/validate.mjs';
import { initPasswordVisibility, visibilityPw, visibilityPwCheck } from '../modules/toggle-visibility-pw.mjs';

const validRule = createValidRule({ emailInput, passwordInput, nameInput, passwordCheckInput }, ruleObj);
initValidation(validRule);
initPasswordVisibility(visibilityPw, visibilityPwCheck);