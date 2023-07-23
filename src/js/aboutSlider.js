import { animateDown } from "./swiperDownAnimation";

const aboutSlider = document.querySelector(".about__slider");
if (aboutSlider) {
    const swiper = new Swiper(aboutSlider, {
      grabCursor: true,
      slidesPerView: 1.3,
      spaceBetween: 30,
      loop: true,
      breakpoints: {
        520: {
          slidesPerView: 3,
        },
        400: {
          slidesPerView: 2,
        }
      }
    });
    animateDown(swiper);
}

