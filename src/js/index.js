import '../css/index.css';
import navbar from './components/navbar';
import {data} from './components/assets/constant';
import createSlide from './components/slides';
import renderItems from './components/renderItems';
import '../images/whoWeAre.png'

var swiper = new Swiper(".swiper-container-1", {
    speed: 600,
    parallax: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
  });
  createSlide(data.products);
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


navbar(window.innerWidth);
window.addEventListener('resize', ()=>{
  navbar(window.innerWidth);
});
renderItems(data.archived);



