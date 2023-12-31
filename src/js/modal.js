export const modal = document.querySelector(".modal");
export const headerLinkOpen = document.querySelector(".header__link-sp");

if (modal && headerLinkOpen) {
  const removeZIndex = () => modal.classList.remove("zIndex");
  
  headerLinkOpen.addEventListener("click", function (e) {
    e.preventDefault();
    modal.removeEventListener("transitionend", removeZIndex);
    modal.classList.add("active", "zIndex");
    document.body.style.overflow = "hidden";
  });
  
  modal.addEventListener("click", function () {
    this.classList.remove("active");
    document.body.style.overflow = "";
    modal.addEventListener("transitionend", removeZIndex);
  });
  
  const modalContent = modal.querySelector(".modal__content");
  
  modalContent.addEventListener("click", function (e) {
    e.stopPropagation();
  });
}
