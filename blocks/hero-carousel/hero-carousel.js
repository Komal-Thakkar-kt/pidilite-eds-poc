import Swiper from './swiper-bundle.min.js';
// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

export default function decorateCarousel(block) {
  block.classList.add('swiper');

  const swiperWrapper = document.createElement('div');
  swiperWrapper.classList.add('swiper-wrapper');

  const swiperPagination = document.createElement('div');
  swiperPagination.classList.add('swiper-pagination');

  Array.from(block.children).forEach((row) => {
    row.classList.add('swiper-slide');
    swiperWrapper.append(row);
  });

  block.append(swiperWrapper);
  block.append(swiperPagination);

  const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      // dynamicBullets: true,
    },
    effect: 'fade', // Enable the fade effect
    fadeEffect: {
    crossFade: true, // Optional: Enable crossfade for smoother transition
    },
    // wrapperClass:"swiper-wrapper",
    loop: true,
  });

  Swiper(block, swiper);
}
