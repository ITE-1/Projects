
const sliderItem = document.querySelectorAll('.aboutme__slider-item'),
    sliderNext = document.querySelector('.aboutme__slider-right'),
    sliderPrev = document.querySelector('.aboutme__slider-left'),
    sliderField = document.querySelector('.aboutme__slider__inner'),
    sliderWrapper = document.querySelector('.aboutme__slider__wrapper'),
    width = window.getComputedStyle(sliderWrapper).width;
   const total = document.querySelector('#total'),
    current = document.querySelector('#current');

    let offset = 0;
    let indexSlider = 1;

    if (sliderItem.length < 10) {
        total.textContent = `0${sliderItem.length}`;
        current.textContent = `0${indexSlider}`;
    } else {
        total.textContent = sliderItem.length;
        current.textContent = indexSlider;
    }
    sliderNext.addEventListener('click', () => {
        if (offset == +width.slice(0, width.length - 2) * (sliderItem.length -1)) {
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2);
        }
        sliderField.style.transform = `translateX(-${offset}px)`;

        if(indexSlider == sliderItem.length) {
            indexSlider = 1;
        } else {
            indexSlider++;
        }

        if(sliderItem.length < 10) {
            current.textContent = `0${indexSlider}`;
        } else {
            current.textContent = indexSlider;
        }
    })
    sliderPrev.addEventListener('click', () => {
        if (offset === 0) {
            offset = +width.slice(0, width.length - 2) * (sliderItem.length -1);
        } else {
            offset -= +width.slice(0, width.length - 2);
        }
        sliderField.style.transform = `translateX(-${offset}px)`;

            if(indexSlider === 1) {
                indexSlider = sliderItem.length;
            } else {
                indexSlider--;
            }
            if(indexSlider === 0) { 
                indexSlider = sliderItem.length;
            }

        if(sliderItem.length < 10) {
            current.textContent = `0${indexSlider}`;
        } else {
            current.textContent = indexSlider;
        }
    })

    // console.log(sliderItem, sliderNext, sliderPrev);
    // let indexSlider = 1;

    // if (sliderItem.length < 10) {
    //     total.textContent = `0${sliderItem.length}`;
    // } else {
    //     total.textContent = sliderItem.length;
    // }
    // hideSlides(indexSlider);
    // function hideSlides(n) {
    //     if ( n > sliderItem.length ) {
    //         indexSlider = 1;
    //     }
    //     if (n < 1) {
    //         indexSlider = sliderItem.length;
    //     }

    //     sliderItem.forEach(element => {
    //         element.style.display = 'none';
    //     })
    //     sliderItem[indexSlider - 1].style.display = 'block';
        
    // if (sliderItem.length < 10) {
    //     current.textContent = `0${indexSlider}`;
    // } else {
    //     current.textContent = indexSlider;
    // }
    // }
    // function plusSlides(n) {
    //     hideSlides(indexSlider += n);
    // }
    // sliderNext.addEventListener('click', () => {
    //     plusSlides(+1);
    // })
    // sliderPrev.addEventListener('click', () => {
    //     plusSlides(-1);
    // })