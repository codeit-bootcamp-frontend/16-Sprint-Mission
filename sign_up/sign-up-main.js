import { createValidRule, ruleObj, emailInput, passwordInput, nameInput, passwordCheckInput } from '/modules/validationRule.mjs';
import { initValidation } from '/modules/validate.mjs';
import { initPasswordVisibility, visibilityPw, visibilityPwCheck } from '/modules/toggle-visibility-pw.mjs';

window.addEventListener('DOMContentLoaded', () => {
    const validRule = createValidRule({ emailInput, passwordInput, nameInput, passwordCheckInput }, ruleObj);
    initValidation(validRule);
    initPasswordVisibility(visibilityPw, visibilityPwCheck);
});