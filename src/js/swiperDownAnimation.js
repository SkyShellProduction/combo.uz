export function animateDown(swiper) {
  swiper.on("slideChangeTransitionStart", function (e) {
    const index = e.activeIndex - 1;
    const slides = e.slides;
    slides.forEach((elem) => {
      elem.style.transform = "";
      elem.style.transition = "";
    });
    if (slides[index]) {
      slides[index].style.transition = "200ms linear";
      slides[index].style.transform = "translateY(500px)";
    }
  });
}
