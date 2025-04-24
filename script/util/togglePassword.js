"use strict";

export default function togglePasswordHandler(area = document.body) {
  area.addEventListener("click", (e) => {
    const toggleBtn = e.target.closest(".btn-password-visible");
    if (!toggleBtn) return;

    const targetInput = toggleBtn.parentNode.querySelector(".form-input");
    if (!targetInput) return;

    const isVisible = toggleBtn.classList.toggle("on");
    targetInput.type = isVisible ? "text" : "password";
    targetInput.setAttribute("aria-pressed", `${isVisible}`);
  });
}
