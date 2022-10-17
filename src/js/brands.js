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