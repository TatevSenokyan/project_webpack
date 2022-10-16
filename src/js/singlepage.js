import '../css/index.css';
import navbar from './components/navbar';
import footer from './components/footer';
import {data} from './components/assets/constant';


navbar(window.innerWidth, 'product');
footer(window.innerWidth);

window.addEventListener('resize', ()=>{
  navbar(window.innerWidth, 'product');
  footer(window.innerWidth);
});


const product = JSON.parse(localStorage.getItem('selectedProduct'));
const title = document.querySelector('.selected-product-title');
const text = document.querySelector('.selected-product-text');
const price = document.querySelector('.selected-product-price');

title.innerHTML = product.title;
text.innerHTML = product.desc;
price.innerHTML = product.price;
