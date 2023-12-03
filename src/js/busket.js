import { getPrice } from "./singlePage";

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

const busketDelivery = [...document.querySelectorAll(".busket-bottom__label input[type=radio]")];
const busketTotalPrice = document.querySelector(".busket-middle__total output");

if(busketDelivery && busketTotalPrice) {
  const initialPrice = getPrice(busketTotalPrice, "data-total");
  busketDelivery.forEach((item) => {
    item.addEventListener(("change"), function(e){
      const percent = getPrice(e.target, "data-percent");
      if(percent && initialPrice) {
        const diff = initialPrice / 100 * percent;
        busketTotalPrice.textContent = (initialPrice - diff).toLocaleString();
      }
      else {
        busketTotalPrice.textContent = (initialPrice).toLocaleString();
      }
    })
  })
}
