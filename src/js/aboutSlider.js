import { animateDown } from "./swiperDownAnimation";

const aboutSlider = document.querySelector(".about__slider");
if (aboutSlider) {
    const swiper = new Swiper(aboutSlider, {
      grabCursor: true,
      slidesPerView: 3,
      spaceBetween: 30,
    });
    animateDown(swiper);
}

