import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiperPopular() {
    console.log('hello')
    const swiper = new Swiper('#swiper__popular', {
        slidesPerView: 4,
        spaceBetween: checkValue(),
        navigation: {
            prevEl: '#sliderPrev',
            nextEl: '#sliderNext',
        },
        breakpoints:{
            320:{
                slidesPerView:1,
                spaceBetween: 10,
            },
            425:{
                slidesPerView:2,
                spaceBetween: 20,
            },
            768:{
                slidesPerView:4,
                spaceBetween: 40,
            }
        }
    });
}

function checkValue() {
    if (window.screen.width < 1242) {
        return 16;
    }else if(window.screen.width < 780){
        return 6
    }
    return 32;
}
export default swiperPopular;