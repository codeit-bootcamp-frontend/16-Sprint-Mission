import { createValidRule, ruleObj, emailInput, passwordInput } from '/modules/validation-rule.mjs';
import { initValidation } from '/modules/validate.mjs';
import { initPasswordVisibility, visibilityPw } from '/modules/toggle-visibility-pw.mjs';

const validRule = createValidRule({ emailInput, passwordInput }, ruleObj);
initValidation(validRule);
initPasswordVisibility(visibilityPw);
