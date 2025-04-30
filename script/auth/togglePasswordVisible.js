"use strict";

export default function togglePasswordVisible(btns) {
  if (!btns) return;

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetInput = btn.parentNode.querySelector(".form-input");
      if (!targetInput) return;

      const isVisible = btn.classList.toggle("on");
      targetInput.type = isVisible ? "text" : "password";
      targetInput.setAttribute("aria-pressed", `${isVisible}`);
    });
  });
}
