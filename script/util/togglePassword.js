"use strict";

export default function togglePasswordHandler(area = "body") {
  area.addEventListener("click", (e) => {
    const targetInput = e.target.parentNode.querySelector(".form-input");

    if (!e.target.classList.contains("btn-password-visible")) return;

    if (!e.target.classList.contains("on")) {
      e.target.classList.add("on");
      targetInput.type = "text";
      targetInput.setAttribute("aria-pressed", "true");
    } else {
      e.target.classList.remove("on");
      targetInput.type = "password";
      targetInput.setAttribute("aria-pressed", "false");
    }
  });
}
