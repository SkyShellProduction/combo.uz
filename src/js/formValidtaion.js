import { headerLinkOpen, modal } from "./modal";

if (modal && headerLinkOpen) {
  const formSignIn = modal.querySelector(".modal__form-signin");
  const formRegister = modal.querySelector(".modal__form-register");
  const signInInputes = [...formSignIn.querySelectorAll(".modal__form-input")];
  const registerInputs = [
    ...formRegister.querySelectorAll(".modal__form-input"),
  ];
  const signInBtn = formSignIn.querySelector(".modal__form-btn");
  const registerBtn = formRegister.querySelector(".modal__form-btn");
  const regPass = formRegister.querySelector(".modal__form-password");
  const regPassRepeat = formRegister.querySelector(".modal__form-password-rep");
  const hideEyes = [...modal.querySelectorAll(".modal__form-hide")];

  //validate sign in form
  signInInputes.forEach((input) => {
    input.addEventListener("input", () => {
      if (signInInputes.every((c) => c.value.trim() !== "")) {
        signInBtn.disabled = false;
      } else {
        signInBtn.disabled = true;
      }
    });
  });

  //hide/show password
  hideEyes.forEach((eye) => {
    eye.addEventListener("click", (e) => {
      const parent = e.target.closest(".modal__form-item");
      const input = parent?.querySelector(".modal__form-input");
      if (input) {
        eye.classList.toggle("active");
        input.type = eye.classList.contains("active") ? "text" : "password";
      }
    });
  });

  //validate registes form

  registerInputs.forEach((reg) => {
    reg.addEventListener("input", () => {
      if (registerInputs.every((c) => c.value.trim() !== "") && regPass.value === regPassRepeat.value) {
        registerBtn.disabled = false;
      } else {
        registerBtn.disabled = true;
      }
    });
  });
}
