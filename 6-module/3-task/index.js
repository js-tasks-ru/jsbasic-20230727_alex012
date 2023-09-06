import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = this.renderCarousel();
    this.startSlider();
    // setTimeout(() => {
    //   this.startSlider();
    // }, 0);
  }

  renderCarousel() {
    this.carousel = createElement(
      `
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left" style="display: none;">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
        <div class="carousel__inner"></div>
      </div>
    `);

    for (let slide in this.slides) {
      this.slide = createElement(`
          <div class="carousel__slide" data-id="${this.slides[slide].id}">
            <img src="/assets/images/carousel/${this.slides[slide].image}" class="carousel__img" alt="slide">
            <div class="carousel__caption">
              <span class="carousel__price">${this.slides[slide].price}</span>
              <div class="carousel__title">${this.slides[slide].name}</div>
              <button type="button" class="carousel__button">
                <img src="/assets/images/icons/plus-icon.svg" alt="icon">
              </button>
            </div>
          </div>
    `);

      this.carouselInner = this.carousel.querySelector('.carousel__inner');
      this.carouselInner.appendChild(this.slide);
    }

    return this.carousel;
  }

  startSlider() {
    // Слайдер находится в переменной this.carousel и ннадо искать все кнопки и т.д. внутри него, а не в документе
    this.rightArrow = this.carousel.querySelector('.carousel__arrow_right');
    this.leftArrow = this.carousel.querySelector('.carousel__arrow_left');
    // this.carousel = document.querySelector('.carousel');
    this.carouselSlide = this.carousel.querySelectorAll('.carousel__slide');

    this.carouselInner = this.carousel.querySelector('.carousel__inner');

    // Ширину надо высчитывать в момент клика т.к. на данном этапе карусели ещё нет на странице (в DOM-дереве) и ширина равна 0
    // this.slideWidth = this.carouselInner.offsetWidth;
    this.numberSlide = 0;

    // this.carouselInner = document.querySelector('.carousel__inner');
    this.total = this.carouselInner.querySelectorAll('.carousel__slide').length - 1;

    this.carouselInner.dataset.index = '1';
    this.carouselInner.dataset.transform = '0';

    if (this.carouselInner.dataset.index === '1') {
      this.leftArrow.style.display = 'none';
    }

    this.rightArrow.addEventListener('click', (event) => {
      // Ширину надо высчитывать в момент клика т.к. на данном этапе карусели ещё нет на странице (в DOM-дереве) и ширина равна 0
      this.slideWidth = this.carouselInner.offsetWidth;

      this.carouselInner.dataset.index = ++this.numberSlide;
      this.carouselInner.style.transform = `translateX(-${this.slideWidth * this.carouselInner.dataset.index}px)`;

      this.carouselInner.dataset.transform = `${this.slideWidth * this.carouselInner.dataset.index}`;

      if (this.carouselInner.dataset.index === String(this.total)) {
        this.rightArrow.style.display = 'none';
      } else {
        this.leftArrow.style.display = '';
      }
    });

    this.leftArrow.addEventListener('click', (event) => {
      // Ширину надо высчитывать в момент клика т.к. на данном этапе карусели ещё нет на странице (в DOM-дереве) и ширина равна 0
      this.slideWidth = this.carouselInner.offsetWidth;

      this.carouselInner.dataset.index = --this.numberSlide;

      this.carouselInner.style.transform = `translateX(-${this.carouselInner.dataset.transform - this.slideWidth}px)`; // slideWidth = 988
      this.carouselInner.dataset.transform = `${ this.carouselInner.dataset.transform - this.slideWidth }`;

      if (this.carouselInner.dataset.index === '0') {
        this.leftArrow.style.display = 'none';
      } else {
        this.rightArrow.style.display = '';
      }
    });

    // addProduct
    this.carouselSlide.forEach((item, index) => {
      item.addEventListener('click', (event) => {
        this.addButton = event.target.closest('.carousel__button');

        if (this.addButton) {
          this.productAddEvent = new CustomEvent("product-add", {
            bubbles: true,
            detail: item.dataset.id
          });
          this.addButton.dispatchEvent(this.productAddEvent);
        }
      });

      item.addEventListener("product-add", (event) => {});
    });
  }
}
