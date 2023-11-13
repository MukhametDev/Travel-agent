import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let swiper1, swiper2, swiper3, horizontalSwiper;

const config = {
    direction: 'vertical',
    slidesPerView: 'auto',
    // slidesPerView: 4,
    spaceBetween: 32,
    loop: true,
    grabCursor: true,
    ally: false,
    freeMode: true,
    speed: 2000,
    autoplay: {
        delay: 0.5,
        disableOnInteraction: false,
    },
}
const configHorizontal = {
    direction: 'horizontal',
    slidesPerView: 2,
    spaceBetween: 32,
    // loop: true,
    grabCursor: true,
    ally: false,
    freeMode: true,
    speed: 2000,
    autoplay: {
        delay: 0.5,
        disableOnInteraction: false,
    },
}

const breakpoints = window.matchMedia('(max-width:1023px)');

const breakpointChecker = function () {
    if (breakpoints.matches === true) {
        horizontalSwiper = new Swiper('#testimonials-horizontal-swiper', configHorizontal);
        if (swiper1 !== undefined) swiper1.destroy(true, true);
        if (swiper2 !== undefined) swiper2.destroy(true, true);
        if (swiper3 !== undefined) swiper3.destroy(true, true);
        return;
    }
    else if (breakpoints.matches === false) {
        swiper1 = new Swiper('#testimonials-col-1', config);
        swiper2 = new Swiper('#testimonials-col-2', config);
        swiper3 = new Swiper('#testimonials-col-3', config);
        if (horizontalSwiper !== undefined) horizontalSwiper.destroy(true, true);
        return;
    }
};

breakpointChecker();
