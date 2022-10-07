import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides.map(elem => elem);

    this.#renderCarousel();
    this.#moveSlide();
  }

  #renderCarousel(){

  this.elem = createElement(`<div class="carousel">
  <div class="carousel__arrow carousel__arrow_right">
    <img src="/assets/images/icons/angle-icon.svg" alt="icon">
  </div>
  <div class="carousel__arrow carousel__arrow_left">
    <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
  </div>
  </div>`);

  let carousel_inner= document.createElement('div');
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

  const carouselBtn = this.elem.querySelectorAll(".carousel__button");

    carouselBtn.forEach((btn) => {
      btn.addEventListener("click", this.#addEvent);
    });
}

  #moveSlide() {
    let buttonLeft =  this.elem.querySelector('.carousel__arrow_left');
    let buttonRight =  this.elem.querySelector('.carousel__arrow_right');
    let allSlide =  this.elem.querySelector('.carousel__inner');
    let widthSlide =  this.elem.querySelector('.carousel__slide');
    
    let slide = 0;

    buttonLeft.style.display = 'none';
    let lengthArraySlide = this.slides.length

    this.elem.onclick = function(event) {
      let target = event.target;
      let div = target.closest('div'); 

      if (div.classList.contains('carousel__arrow_right')) { 
          slide += 1;
          allSlide.style.transform = `translateX(${-slide*widthSlide.offsetWidth}px)`;
          buttonLeft.style.display = '';
      }
  
      if (div.classList.contains(`carousel__arrow_left`) ) { 
            slide -= 1;
            allSlide.style.transform = `translateX(${-slide*widthSlide.offsetWidth}px)`;
            buttonRight.style.display = ''
          }
      if (slide >= lengthArraySlide-1) { 
        buttonRight.style.display = 'none';
      }
      if (slide <= 0) {
        buttonLeft.style.display = 'none';
      }
    }
  }

  #addEvent = (e) => {
    const slide = e.target.closest(".carousel__slide");
    const productId = slide.dataset.id;

    const event = new CustomEvent("product-add", {
      detail: productId,
      bubbles: true,
    });
    this.elem.querySelector(".carousel__button").dispatchEvent(event);
  };

}
