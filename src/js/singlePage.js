import { httpClient } from "./api-client";

const singleImageItems = [...document.querySelectorAll(".single__left-item")];
const singleImageBlock = document.querySelector(".single__left-show");
const singleImageZoom = singleImageBlock?.querySelector(".single__left-zoom");
const singleImage = singleImageBlock?.querySelector("img");

export const getPrice = (item, atrr) =>
  isNaN(Number(item.getAttribute(atrr)))
    ? null
    : Number(item.getAttribute(atrr));

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
const selfPagePriceCommon = document.querySelector(
  ".single__content-price.common-price span"
);

if (selfPageControls && selfPagePrice && selfPagePriceCommon) {
  const filteredControls = selfPageControls.filter(
    (c) => c.tagName === "INPUT"
  );
  const productId = getPrice(selfPagePrice, "data-product-id");
  selfPageControls.forEach((item) => {
    item.addEventListener("change", function (e) {
      const form = new FormData();
      form.append("product_id", productId);
      let condition = false;
      selfPageControls.forEach((item) => {
        if (item.selectedOptions) {
          const elem = item.selectedOptions[0];
          if (elem) {
            const attr = elem.getAttribute("data-name");
            const value = elem.getAttribute("data-value");
            if (attr && value) {
              form.append(attr, value);
            }
          }
        }
      });
      const elems = [
        ...new Set(filteredControls.map((c) => c.getAttribute("name"))),
      ];
      const medium = [];
      elems.forEach((elem, i) => {
        filteredControls.forEach((ind) => {
          if (ind.getAttribute("name") === elem) {
            if (medium[i]) medium[i] = [...medium[i], ind];
            else medium.push([ind]);
          }
        });
      });
      const bool = medium.map((c) => c.some((d) => d.checked));
      if (bool.every((c) => c)) {
        filteredControls.forEach((c) => {
          if (c.checked) {
            const attr = c.getAttribute("data-name");
            const value = c.getAttribute("data-value");
            if (attr && value) {
              form.append(attr, value);
            }
          }
        });
        condition = true;
      } else condition = false;
      if (condition) {
        httpClient("/api/get_price/", "POST", {
          body: form,
        }).then((res) => {
          selfPagePriceCommon.textContent = res?.price?.toLocaleString();
        });
      }
    });
  });
}