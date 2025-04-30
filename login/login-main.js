import { createValidRule, ruleObj, emailInput, passwordInput } from '/modules/validationRule.mjs';
import { initValidation } from '/modules/validate.mjs';
import { initPasswordVisibility, visibilityPw } from '/modules/toggle-visibility-pw.mjs';

window.addEventListener('DOMContentLoaded', () => {
    const validRule = createValidRule({ emailInput, passwordInput }, ruleObj);
    initValidation(validRule);
    initPasswordVisibility(visibilityPw);
});
