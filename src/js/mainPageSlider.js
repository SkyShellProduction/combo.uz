const mainSlider = document.querySelector(".gallery-projects__slider");
console.log(mainSlider);
if (mainSlider) {
    const swiper = new Swiper(mainSlider, {
      grabCursor: true,
      //   direction: "vertical",
      effect: "creative",
      slidesPerView: 3,
      spaceBetween: 44,
      creativeEffect: {
        prev: {
          shadow: true,
          translate: [0, 400, 0],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },
    });
}

