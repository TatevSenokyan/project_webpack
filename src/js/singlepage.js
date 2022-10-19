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


const close = document.querySelector('.close-icon');
const login = document.querySelector('.login');
close.addEventListener('click', ()=>{
    login.classList.remove('open');
})

const signup = document.querySelector('.signup');
const signupp = document.querySelector('.signupp');
signup.addEventListener('click', ()=>{
    login.classList.remove('open');
    signupp.classList.add('open');
})


const closeSignup = document.querySelector('.close-icon-signup');
closeSignup.addEventListener('click', ()=>{
  signupp.classList.remove('open');
})

const signin = document.querySelector('.signin');

signin.addEventListener('click', ()=>{
  login.classList.add('open');
  signupp.classList.remove('open');
})


const product = JSON.parse(localStorage.getItem('selectedProduct'));
const title = document.querySelector('.selected-product-title');
const text = document.querySelector('.selected-product-text');
const price = document.querySelector('.selected-product-price');

title.innerHTML = product.title;
text.innerHTML = product.desc;
price.innerHTML = product.price;



const search = document.querySelector('.search-close');
const searchContainer = document.querySelector('.searchContainer');
search.addEventListener('click', ()=>{
    searchContainer.classList.remove('open');
})