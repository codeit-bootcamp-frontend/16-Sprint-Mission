// #toggle-visibility-pw 관련 변수
export const visibilityPw = document.querySelector("#toggle-visibility-pw");
const visibilityPwLabel = document.querySelector("label[for='toggle-visibility-pw']");
const passwordInput = document.querySelector("#user-password");

// #toggle-visibility-pwcheck 관련 변수
export const visibilityPwCheck = document.querySelector("#toggle-visibility-pwcheck");
const visibilityPwCheckLabel = document.querySelector("label[for='toggle-visibility-pwcheck']");
const pwCheckInput = document.querySelector("#user-password-check");

function toggleVisibilityPw() {
    let isShowing = visibilityPw.checked;
    if (isShowing) {
        passwordInput.type = "text";
        visibilityPwLabel.setAttribute('aria-checked', 'true');
    } else {
        passwordInput.type = "password";
        visibilityPwLabel.setAttribute('aria-checked', 'false');
    }
}

function toggleVisibilityPwCheck() {
    let isShowing = visibilityPwCheck.checked;
    if (isShowing) {
        pwCheckInput.type = "text";
        visibilityPwCheckLabel.setAttribute('aria-checked', 'true');
    } else {
        pwCheckInput.type = "password";
        visibilityPwCheckLabel.setAttribute('aria-checked', 'false');
    }
}

export function initPasswordVisibility(visibilityPw, visibilityPwCheck){
    visibilityPw.addEventListener("click", toggleVisibilityPw);
    if (visibilityPwCheck) visibilityPwCheck.addEventListener("click", toggleVisibilityPwCheck);
}
