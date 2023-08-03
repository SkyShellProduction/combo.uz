const busketBtn = document.querySelector(".busket-bottom__btn");
const busketModal = document.querySelector(".busket-modal");
const busketModalClose = busketModal?.querySelector(".busket-modal__close");
const busketForm = document.querySelector(".busket");

if (busketBtn && busketModal && busketForm) {
  busketForm.addEventListener("submit", (e) => {
    e.preventDefault();
    busketModal.classList.add("show");
    setTimeout(() => {
      busketModal.classList.remove("show");
    }, 3000);
  });

  busketModalClose?.addEventListener("click", (e) => {
    e.preventDefault();
    busketModal.classList.remove("show");
  });
}
