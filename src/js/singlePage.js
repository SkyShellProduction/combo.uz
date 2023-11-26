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
    });
  });
}

const selfPageControls = [...document.querySelectorAll(".self-page__control")];
const selfPagePrice = document.querySelector(".single__content-price span");
const getPrice = (item, atrr) =>
  isNaN(Number(item.getAttribute(atrr)))
    ? null
    : Number(item.getAttribute(atrr));
if (selfPageControls && selfPagePrice) {
  const startPrice = getPrice(selfPagePrice, "data-start-price") || 0;
  let changedPrice = getPrice(selfPagePrice, "data-start-price") || 0;
  selfPageControls.forEach((item) => {
    item.addEventListener("change", function (e) {
      let summ = 0;
      selfPageControls.forEach((elem) => {
        if (elem.selectedOptions) {
          const selectOption = elem.selectedOptions[0];
          if (selectOption) {
            const price = getPrice(selectOption, "data-price");
            // console.log(price, elem);
            if (price) summ += price;
          }
        } else {
          if(elem.checked) {
            const price = getPrice(elem, "data-price");
            // console.log(price, elem);
            if (price) summ += price;
          }
        }
      });
      selfPagePrice.textContent = (startPrice + summ).toLocaleString();
      selfPageControls.forEach((elem) => {
        if (elem.selectedOptions) {
          const selectOption = elem.selectedOptions[0];
          if (selectOption) {
            const counter = getPrice(selectOption, "data-count");
            if(counter) {
              changedPrice = (startPrice+summ) * counter;
              selfPagePrice.textContent = changedPrice.toLocaleString();
            }
          }
        }
      })
      // if (price) {
      //   changedPrice = startPrice + price;
      //   selfPagePrice.textContent = changedPrice.toLocaleString();
      // }
      // if(e.target.selectedOptions) {
      //   const selectOption = e.target.selectedOptions[0];
      //   if(selectOption) {
      //     const price = getPrice(selectOption, "data-price");
      //     const counter = getPrice(selectOption, "data-count");
      //     if(price) {
      //       changedPrice = startPrice + price;
      //     }
      //     else if(counter) {
      //       changedPrice = startPrice * counter;
      //     }
      //     selfPagePrice.textContent = changedPrice.toLocaleString();
      //   }
      // }
      // else {
      //   const price = getPrice(e.target, "data-price");
      //   if(price) {
      //     changedPrice = startPrice + price;
      //     selfPagePrice.textContent = changedPrice.toLocaleString();
      //   }
      // }
    });
  });
}
