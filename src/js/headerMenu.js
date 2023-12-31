const headerBtn = document.querySelector(".header__btn");
const headerItems = document.querySelector(".header__items");
const headerAbs = document.querySelector(".header__abs");
const headerClose = document.querySelector(".header__close");
const headerLang = document.querySelector(".header__lang");
const headerLangOptions = document.querySelector(".header__lang-options");

if (headerBtn && headerItems && headerAbs && headerClose) {
  const openClose = (bool = false) => {
    headerBtn.classList[bool ? "add" : "remove"]("active");
    headerItems.classList[bool ? "add" : "remove"]("active");
    headerAbs.classList[bool ? "add" : "remove"]("active");
    headerClose.classList[bool ? "add" : "remove"]("active");
    document.body.style.overflow = bool ? "hidden" : "";
  };
  headerBtn.addEventListener("click", () => {
    openClose(true);
  });
  [headerClose, headerAbs].forEach((element) => {
    element.addEventListener("click", () => {
      openClose();
    });
  });
}

if (headerLang && headerLangOptions) {
  headerLang.addEventListener("click", (e) => {
    const bool = headerLangOptions.classList.contains("show");
    headerLangOptions.classList[bool ? "remove" : "add"]("show");
  })
}
