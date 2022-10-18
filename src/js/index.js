import '../css/index.css';
import navbar from './components/navbar';
import footer from './components/footer';
import {data} from './components/assets/constant';
import createSlide from './components/slides';
import renderItems from './components/renderItems';

navbar(window.innerWidth, 'Home');
footer(window.innerWidth);
window.addEventListener('resize', ()=>{
  navbar(window.innerWidth);
  footer(window.innerWidth);
  // createSlide(data.products, window.innerWidth);
});
renderItems(data.archived);

var swiper = new Swiper(".swiper-container-1", {
    speed: 600,
    parallax: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
  });
  createSlide(data.products, window.innerWidth);
  var swiper1 = new Swiper(".swiper-container-2", {
    slidesPerView: 5,
    spaceBetween: 30,
    slidesPerGroup: 5,
    loop: true,
    // mousewheel: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  const close = document.querySelector('.close-icon');
  const login = document.querySelector('.login');
  close.addEventListener('click', ()=>{
      login.classList.remove('open');
  })










