const singleImageItems = [...document.querySelectorAll(".single__left-item")];
const singleImageBlock = document.querySelector(".single__left-show");
const singleImageZoom = singleImageBlock?.querySelector(".single__left-zoom");
const singleImage = singleImageBlock?.querySelector("img");
if (singleImage && singleImageItems && singleImageBlock && singleImageZoom) {
  singleImageItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      const img = item.querySelector("img");
      singleImage.src = img.src;
      singleImage.style.backgroundImage = img.src;
      singleImageBlock.setAttribute("data-img", img.src);
    });
  });

  const mouseMove = (e, elem) => {
    const posX2 = e.offsetX;
    const posY2 = e.offsetY;
    const moveX = (posX2 / elem.offsetWidth) * 100;
    const moveY = (posY2 / elem.offsetHeight) * 100;
    singleImageZoom.style.backgroundPosition = `${moveX}% ${moveY}%`;
  };

  singleImageBlock.addEventListener("mouseover", function () {
    const bg = this.getAttribute("data-img");
    singleImageZoom.classList.add("show");
    singleImageZoom.style.backgroundImage = `url(${bg})`;
  });
  singleImageBlock.addEventListener("mousemove", function (e) {
    mouseMove(e, this);
  });
  singleImageBlock.addEventListener("mouseout", () => {
    singleImageZoom.classList.remove("show");
  });
}

const single = document.querySelector(".single");
const singleSelects = single?.querySelectorAll(".single__right-select");

if (singleSelects) {
  let timer;
  singleSelects.forEach((select) => {
    select.addEventListener("change", (e) => {
      const parent = e.target.closest(".single__right-chose");
      const hint = parent?.querySelector(".single__right-hint-abs");
      if (hint) {
        hint.classList.add("show");
        clearTimeout(timer);
        timer = setTimeout(() => {
          timer = undefined;
          hint.classList.remove("show");
        }, 2000);
      }
    })
  })
}
