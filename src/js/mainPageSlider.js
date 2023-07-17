const mainSlider = document.querySelector(".gallery-projects__slider");
console.log(mainSlider);
if (mainSlider) {
    const swiper = new Swiper(mainSlider, {
      grabCursor: true,
      slidesPerView: 1,
      // spaceBetween: 24,
      width: 404,
      // slidesWidth: 372,
      // autoHeight: true,
      // slidesPerGroup: 1,
      navigation: {
        nextEl: ".gallery-projects__next",
        // prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: '.gallery-projects__pagination',
        clickable: true,
        bulletActiveClass: 'active',
        bulletClass: 'gallery-projects__bullet',
      }
      // allowTouchMove: false,
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

    const btnsAlternate = mainSlider.querySelectorAll('.gallery-projects__alternate');
    btnsAlternate.forEach((btn) => {
      btn.addEventListener("click", () => {
        swiper.slideNext();
      })
    })
}

