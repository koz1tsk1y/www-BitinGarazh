import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';

export function swiperInit() {
  new Swiper('.hero-section__slider', {
    modules: [Pagination, Autoplay],
    loop: true,
    speed: 600,

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}
