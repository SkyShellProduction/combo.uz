import { animateDown } from "./swiperDownAnimation";

const mainSlider = document.querySelector(".gallery-projects__slider");
if (mainSlider) {
  const swiper = new Swiper(mainSlider, {
    grabCursor: true,
    slidesPerView: 1.2,
    // spaceBetween: 30,
    width: 230,
    loop: true,
    navigation: {
      nextEl: ".gallery-projects__next",
    },
    pagination: {
      el: ".gallery-projects__pagination",
      clickable: true,
      bulletActiveClass: "active",
      bulletClass: "gallery-projects__bullet",
    },
    breakpoints: {
      1016: {
        width: 404,
      },
      680: {
        width: 300,
      },
    },
  });
  animateDown(swiper);

  const btnsAlternate = mainSlider.querySelectorAll(
    ".gallery-projects__alternate"
  );
  btnsAlternate.forEach((btn) => {
    btn.addEventListener("click", () => {
      swiper.slideNext();
    });
  });
}

const beginSlider = document.querySelector(".best-curtains__slider");
if (beginSlider) {
  new Swiper(beginSlider, {
    grabCursor: true,
    slidesPerView: 1,
    // spaceBetween: 30,
    loop: true,
  });
}
