const accordionBtns = [
  ...document.querySelectorAll(".goods-filters__accordion-name"),
];
if (accordionBtns) {
  const opened = accordionBtns.filter((c) => {
    const elem = c.closest(".goods-filters__accordion-item");
    if (elem && elem.classList.contains("open")) return c;
  });

  const openCloseAccordion = (btn, onlyOpen = true) => {
    const content = btn.nextElementSibling;
    const parent = btn.closest(".goods-filters__accordion-item");
    const height = content.scrollHeight;
    if (content && parent && !parent.classList.contains("open") || !onlyOpen) {
      parent.classList.add("open");
      content.style.height = `${height}px`;
    } else if (content && parent && parent.classList.contains("open")) {
      parent.classList.remove("open");
      content.style.height = "";
    }
  };

  opened.forEach((btn) => {
    openCloseAccordion(btn, false);
  })
  
  accordionBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openCloseAccordion(btn);
    });
  });
}
