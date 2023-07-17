const aboutSlider = document.querySelector(".about__slider");
if (aboutSlider) {
    const swiper = new Swiper(aboutSlider, {
      grabCursor: true,
      slidesPerView: 3,
      spaceBetween: 30,
      // slidesWidth: 372,
      // autoHeight: true,
      // slidesPerGroup: 1,
    });
    swiper.on("slideChangeTransitionStart", function (e) {
      console.log(e, 'slide change begin');
      const index = e.activeIndex - 1;
      const slides = e.slides;
      slides.forEach(elem => {
        elem.style.transform = '';
        elem.style.transition = '';
      });
      if (slides[index]) {
        slides[index].style.transition = '200ms linear';
        slides[index].style.transform = 'translateY(500px)';
      }
    })
}

