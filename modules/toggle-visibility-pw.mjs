// 비밀번호 보기 토글버튼들(chekBox)
export const visibilityPw = document.querySelector("#toggle-visibility-pw");
export const visibilityPwCheck = document.querySelector("#toggle-visibility-pwcheck");

function togglePasswordVisibility(targetInput) {
    const isPassword = targetInput.type === "password";
    targetInput.type = isPassword ? "text" : "password";
    targetInput.setAttribute('aria-checked', isPassword ? 'true' : 'false');
}

export function initPasswordVisibility(toggleBtns) {
    Object.values(toggleBtns).forEach((toggleBtn) => {
        if (!toggleBtn) return;

        const targetInput = toggleBtn.previousElementSibling;
        if (!targetInput || targetInput.type !== "password") return;

        toggleBtn.addEventListener("click", () => {
            togglePasswordVisibility(targetInput);
        });
    });
}
