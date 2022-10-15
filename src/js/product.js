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


const productContainer = document.querySelector('.productContainer');

data.productList.forEach(function(item) {
    const product = document.createElement('div');
    product.className = 'productItem';

    const img = document.createElement('div');
    img.className = 'product-image';

    const ref = document.createElement('a');
    ref.setAttribute('href', './productpage.html');
    ref.appendChild(img);

    const title =  document.createElement('div');
    title.className = 'productTitle product-page-title';
    title.innerHTML = item.title;

    const price =  document.createElement('div');
    price.className = 'productPrice product-page-price';
    price.innerHTML = item.price;

    const stars =  document.createElement('div');
    stars.className = 'starsImg product-page-stars';

    product.appendChild(ref);
    product.appendChild(title);
    product.appendChild(price);
    product.appendChild(stars);
    productContainer.appendChild(product);
});


const images = document.querySelectorAll('.product-image');
images.forEach((img, index) => {
  img.addEventListener('click', ()=>{
    console.log(JSON.stringify(data.productList[index]))
  })
})



// first filter

const firstFilter = document.querySelector('.filter-first-div');
const firstFilterContainer = document.querySelector('.filter-first');
const filterFirstItems = document.querySelector('.filter-first-items');
const firstItems = document.querySelectorAll('.filter-first-items div div');

firstFilter.addEventListener('click', ()=>{
  firstFilter.classList.toggle('open');
  firstFilterContainer.classList.toggle('open');
  filterFirstItems.classList.toggle('open');
});

firstItems.forEach(function(item, index) {
    item.addEventListener('click', ()=>{
      if (item.classList.contains('clicked')) {
          item.classList.remove('clicked');
          item.style.background = '#CCCCCC';
      } else {
        item.classList.add('clicked');
        item.style.background = '#5184E5';
      }
    })
});


// second filter

const secondFilter = document.querySelector('.filter-second-div');
const secondFilterContainer = document.querySelector('.filter-second');
const filterSecondItems = document.querySelector('.filter-second-items');
const secondItems = document.querySelectorAll('.filter-second-items div div');

secondFilter.addEventListener('click', ()=>{
  secondFilter.classList.toggle('open');
  secondFilterContainer.classList.toggle('open');
  filterSecondItems.classList.toggle('open');
});

secondItems.forEach(function(item, index) {
    item.addEventListener('click', ()=>{
      if (item.classList.contains('clicked')) {
          item.classList.remove('clicked');
          item.style.background = '#CCCCCC';
      } else {
        item.classList.add('clicked');
        item.style.background = '#5184E5';
      }
    })
});


// third filter


const thirdFilter = document.querySelector('.filter-third-div');
const thirdFilterContainer = document.querySelector('.filter-third');
const filterThirdItems = document.querySelector('.filter-third-items');
const thirdItems = document.querySelectorAll('.filter-third-items div div');

thirdFilter.addEventListener('click', ()=>{
  thirdFilter.classList.toggle('open');
  thirdFilterContainer.classList.toggle('open');
  filterThirdItems.classList.toggle('open');
});

thirdItems.forEach(function(item, index) {
    item.addEventListener('click', ()=>{
      if (item.classList.contains('clicked')) {
          item.classList.remove('clicked');
          item.style.background = '#CCCCCC';
      } else {
        item.classList.add('clicked');
        item.style.background = '#5184E5';
      }
    })
});


// forth filter

const forthFilter = document.querySelector('.filter-forth-div');
const forthFilterContainer = document.querySelector('.filter-forth');
const filterForthItems = document.querySelector('.filter-forth-items');
const forthItems = document.querySelectorAll('.filter-forth-items div div');

forthFilter.addEventListener('click', ()=>{
  forthFilter.classList.toggle('open');
  forthFilterContainer.classList.toggle('open');
  filterForthItems.classList.toggle('open');
});

forthItems.forEach(function(item, index) {
    item.addEventListener('click', ()=>{
      if (item.classList.contains('clicked')) {
          item.classList.remove('clicked');
          item.style.background = '#CCCCCC';
      } else {
        item.classList.add('clicked');
        item.style.background = '#5184E5';
      }
    })
});