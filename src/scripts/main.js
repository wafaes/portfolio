// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
import '../style/style.scss';

console.log('ola');

/*const swiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
  },
});*/

const swiper = new Swiper('.swiper', {
  loop: true, // Habilita el ciclo infinito
  slidesPerView: 1, // Número de slides visibles a la vez
  spaceBetween: 10, // Espacio entre los slides
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true
  }
});


