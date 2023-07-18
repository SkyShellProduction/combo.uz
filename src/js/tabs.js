import { headerLinkOpen, modal } from "./modal";

if (headerLinkOpen && modal) {
  const tabLinks = [...modal.querySelectorAll(".modal__tabs-link")];
  const tabItems = [...modal.querySelectorAll(".modal__items-elem")];
  //   console.log(tabLinks, tabItems);
  tabLinks.forEach((link, i) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      tabLinks.forEach((item, idx) => {
        item.classList.remove("active");
        tabItems[idx].classList.remove("active");
      });
      this.classList.add("active");
      tabItems[i].classList.add("active");
    });
  });
}
