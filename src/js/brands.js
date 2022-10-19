import navbar from './components/navbar';
import footer from './components/footer';
import {data} from './components/assets/constant';
import '../css/index.css';
import kaliony from '../images/kaliony.png';
import aspire from '../images/aspire.png';
import smok from '../images/smok.png';
import innokin from '../images/innokin.png';
import vaporesso  from '../images/vaporesso.png';
import elfbar from '../images/elfbar.png';
import vladdin from '../images/vladdin.png';
import unik from '../images/unik.png';


const images = [aspire, kaliony, smok, innokin, vaporesso, elfbar, vladdin, unik];

navbar(window.innerWidth, 'brands');
footer(window.innerWidth);

window.addEventListener('resize', ()=>{
  navbar(window.innerWidth, 'brands');
  footer(window.innerWidth);
});


const brands = document.querySelector('.brand-container');

data.brands.forEach(function(brand, index) {
    const div = document.createElement('div');
    div.className = 'brand-item';

    const img = document.createElement('img');
    img.src = images[index];
    img.className = 'brand-image';

    const p = document.createElement('p');
    p.className = 'brand-title';
    p.innerHTML = brand.title;

    const span = document.createElement('div');
    span.className = 'brand-text';
    span.innerHTML = brand.desc;

    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);
    brands.appendChild(div);
})



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


const search = document.querySelector('.search-close');
const searchContainer = document.querySelector('.searchContainer');
search.addEventListener('click', ()=>{
    searchContainer.classList.remove('open');
})
