function initCarousel() {

  let buttonLeft = document.querySelector('.carousel__arrow_left');
  let buttonRight = document.querySelector('.carousel__arrow_right');
  let allSlide = document.querySelector('.carousel__inner');
  let widthSlide = document.querySelector('.carousel__slide').offsetWidth;
  let carousel = document.querySelector('.carousel')

  let slide = 0;
  
  buttonLeft.style.display = 'none'

  carousel.onclick = function({ target }) {
    let div = target.closest('div'); 

    if (div.classList.contains('carousel__arrow_right')) { 
        slide += 1;
        allSlide.style.transform = `translateX(${-slide*widthSlide}px)`;
        buttonLeft.style.display = ''
    }

    if (div.classList.contains(`carousel__arrow_left`) ) { 
          slide -= 1;
          allSlide.style.transform = `translateX(${-slide*widthSlide}px)`;
          buttonRight.style.display = ''
        }  

    if (slide >=3 ) { 
      buttonRight.style.display = 'none'
    }
    if (slide <= 0) {
      buttonLeft.style.display = 'none'
    }
  }
}