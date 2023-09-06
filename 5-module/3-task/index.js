function initCarousel() {
  let rightArrow = document.querySelector('.carousel__arrow_right');
  let leftArrow = document.querySelector('.carousel__arrow_left');
  let carousel = document.querySelector('.carousel');
  let carouselInner = document.querySelector('.carousel__inner');
  let slideWidth = carouselInner.offsetWidth; // 988
  let numberSlide = 0;
  let total = carouselInner.querySelectorAll('.carousel__slide').length - 1;

  carouselInner.dataset.index = '1';
  carouselInner.dataset.transform = '0';

  if (carouselInner.dataset.index === '1') {
    leftArrow.style.display = 'none';
  }

  carousel.addEventListener('click', function (event) {
    if (event.target.closest('.carousel__arrow_right')) {
      carouselInner.dataset.index = ++numberSlide;
      carouselInner.style.transform = `translateX(-${slideWidth * carouselInner.dataset.index}px)`;

      carouselInner.dataset.transform = `${slideWidth * carouselInner.dataset.index }`;

      if (carouselInner.dataset.index === String(total)) {
        rightArrow.style.display = 'none';
      } else {
        leftArrow.style.display = '';
      }
    }

    if (event.target.closest('.carousel__arrow_left')) {
      carouselInner.dataset.index = --numberSlide;

      carouselInner.style.transform = `translateX(-${carouselInner.dataset.transform - slideWidth}px)`; // slideWidth = 988
      carouselInner.dataset.transform = `${ carouselInner.dataset.transform - slideWidth }`;

      if (carouselInner.dataset.index === '0') {
        leftArrow.style.display = 'none';
      } else {
        rightArrow.style.display = '';
      }
    }
  });
}
