import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides.map(elem => elem);
    
    this.#renderCarousel();

    this.#moveSlide();
  }

  #renderCarousel() {

  let container = document.querySelector('.container');

  this.elem = createElement(`<div class="carousel">
  <div class="carousel__arrow carousel__arrow_right">
    <img src="/assets/images/icons/angle-icon.svg" alt="icon">
  </div>
  <div class="carousel__arrow carousel__arrow_left">
    <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
  </div>
  </div>`);

  container.append(this.elem);

  let carousel_inner = document.createElement('div');
  carousel_inner.className = "carousel__inner";
  this.elem.append(carousel_inner);
  

  for (let slide of this.slides) {
    let temp = createElement(
    `<div class="carousel__slide" data-id="${slide.id}">
        <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${(slide.price).toFixed(2)}</span>
          <div class="carousel__title">${slide.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
  `);

  carousel_inner.append(temp);
  }
}

  #moveSlide() {
    let buttonLeft = document.querySelector('.carousel__arrow_left');
    let buttonRight = document.querySelector('.carousel__arrow_right');
    let allSlide = document.querySelector('.carousel__inner');
    let widthSlide = document.querySelector('.carousel__slide').offsetWidth;
  
    let slide = 0;
    
    buttonLeft.style.display = 'none';
  
    this.elem.onclick = function({ target }) {
      let div = target.closest('div'); 
  
      if (div.classList.contains('carousel__arrow_right')) { 
          slide += 1;
          allSlide.style.transform = `translateX(${-slide*widthSlide}px)`;
          buttonLeft.style.display = '';
      }
  
      if (div.classList.contains(`carousel__arrow_left`) ) { 
            slide -= 1;
            allSlide.style.transform = `translateX(${-slide*widthSlide}px)`;
            buttonRight.style.display = ''
          }  
  
      if (slide >=3 ) { 
        buttonRight.style.display = 'none';
      }
      if (slide <= 0) {
        buttonLeft.style.display = 'none';
      }
    }
  }

}
