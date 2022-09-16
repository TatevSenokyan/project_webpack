/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/assets/constant.js":
/*!**********************************************!*\
  !*** ./src/js/components/assets/constant.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
var data = {
  products: [{
    img: 'product',
    title: 'ELF BAR RF 700',
    price: 7000,
    stars: 'stars'
  }, {
    img: 'product',
    title: 'ELF BAR RF 600',
    price: 6000,
    stars: 'stars'
  }, {
    img: 'product',
    title: 'ELF BAR RF 500',
    price: 5000,
    stars: 'stars'
  }, {
    img: 'product',
    title: 'ELF BAR RF 400',
    price: 4000,
    stars: 'stars'
  }],
  archived: [{
    img: 'vapester',
    title: 'VAPESTERS',
    count: 1565
  }, {
    img: 'cigarette',
    title: 'CIGARETTES SAVED',
    count: 758
  }, {
    img: 'flavor',
    title: 'PRE-MADE FLAVORS',
    count: 2983
  }, {
    img: 'combo',
    title: 'CUSTOM COMBOS',
    count: 124
  }]
};

/***/ }),

/***/ "./src/js/components/navbar.js":
/*!*************************************!*\
  !*** ./src/js/components/navbar.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function navbar() {
  var navContainer = document.querySelector('.navbar'); //create image part

  var imgDiv = document.createElement('div');
  imgDiv.className = 'logoImg'; // create ul

  var list = ['NEW', 'OUR PRODUCTS', 'BRANDS'];
  var ul = document.createElement('ul');

  for (var i = 0; i < list.length; i++) {
    var a = document.createElement('a');
    a.setAttribute('href', './product.html');
    var li = document.createElement('li');
    li.innerHTML = list[i];
    a.append(li);
    ul.append(a);
  } //create search part


  var div = document.createElement('div');
  div.className = 'signinSearchLangWrapper';
  var imgLang = document.createElement('div');
  imgLang.className = 'imgLang';
  div.append(imgLang);
  var span = document.createElement('span');
  span.className = 'signinText';
  span.innerHTML = 'SIGN IN';
  div.append(span);
  var imgSearch = document.createElement('div');
  imgSearch.className = 'imgSearch';
  div.append(imgSearch);
  var imgBasket = document.createElement('div');
  imgBasket.className = 'imgBasket';
  div.append(imgBasket);
  navContainer.appendChild(imgDiv);
  navContainer.appendChild(ul);
  navContainer.appendChild(div);
  return navContainer;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navbar);

/***/ }),

/***/ "./src/js/components/renderItems.js":
/*!******************************************!*\
  !*** ./src/js/components/renderItems.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function render(data) {
  var archivedContainer = document.querySelector('.archived');
  data.forEach(function (item) {
    var div = document.createElement('div');
    div.className = 'item';
    var img = document.createElement('div');
    img.style.backgroundImage = "url(../../images/vapester.png)";
    div.append(img);
    archivedContainer.append(div);
  });
  return archivedContainer;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);

/***/ }),

/***/ "./src/js/components/slides.js":
/*!*************************************!*\
  !*** ./src/js/components/slides.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createSlide(data) {
  var container = document.querySelector('.second');
  data.forEach(function (item) {
    var div = document.createElement('div');
    div.className = "swiper-slide product";
    var img = document.createElement('div');
    img.className = 'slideImg';
    var productTitle = document.createElement('p');
    productTitle.className = 'productTitle';
    productTitle.innerHTML = item.title;
    var productPrice = document.createElement('p');
    productPrice.className = 'productPrice';
    productPrice.innerHTML = item.price;
    var starsImg = document.createElement('div');
    starsImg.className = 'starsImg';
    div.append(img);
    div.append(productTitle);
    div.append(productPrice);
    div.append(starsImg);
    container.append(div);
  });
  return container;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSlide);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/white_menu.png */ "./src/images/white_menu.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/white_logo.png */ "./src/images/white_logo.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/logo.png */ "./src/images/logo.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/arrow.png */ "./src/images/arrow.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/eng_flag.png */ "./src/images/eng_flag.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../images/search.png */ "./src/images/search.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../images/basket.png */ "./src/images/basket.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../images/background_1.png */ "./src/images/background_1.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../images/background_2.png */ "./src/images/background_2.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../images/mobile_scroll.png */ "./src/images/mobile_scroll.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../images/product.png */ "./src/images/product.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../images/dram.png */ "./src/images/dram.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../images/stars.png */ "./src/images/stars.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ../images/whoWeAre.png */ "./src/images/whoWeAre.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_13___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n    padding: 0;\r\n    margin:0;\r\n    font-family: 'Roboto';\r\n    font-style: normal;\r\n    box-sizing: border-box;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.warning {\r\n    width: 100%;\r\n    height: 118px;\r\n    background: #3E3E3E;\r\n    color: #FFFFFF;\r\n    font-weight: 400;\r\n    font-size: 18px;\r\n    line-height: 21px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-end;\r\n    text-align: center;\r\n}\r\n\r\n.warning span {\r\n    width: 287px;\r\n    height: 63px;\r\n}\r\n\r\n.navbar {\r\n    width: 84%;\r\n    height: 60px;\r\n    margin: 30px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    position: absolute;\r\n    z-index: 500000;\r\n}\r\n\r\n.menu-icon {\r\n    width: 44px;\r\n    height: 44px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    align-self:center;\r\n    cursor: pointer\r\n}\r\n\r\n.menu-logo {\r\n    width: 154px;\r\n    height: 64px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    margin-left: 5px;\r\n}\r\n\r\n.logoImg {\r\n    width: 267px;\r\n    height: 111px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\nul {\r\n    display: flex;\r\n    width: 600px;\r\n    justify-content: center;\r\n}\r\nul li {\r\n  list-style-type: none;\r\n  font-family: Bebas Neue;\r\n  color: #FFFFFF;\r\n  cursor: pointer;\r\n  margin-left: 20px;\r\n  font-size: 20px;\r\n}\r\n\r\nul li::after {\r\n   content: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n   padding-left: 5px\r\n}\r\n\r\n.signinSearchLangWrapper {\r\n    width: 400px;\r\n    height: 100px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.imgLang {\r\n    width: 50px;\r\n    height: 36px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n    background-size: 36px 36px, 10px 5px;\r\n    background-repeat: no-repeat no-repeat;\r\n    background-position: 0% 0%, 100% 50%;\r\n}\r\n\r\n.signinText {\r\n    color: #FFFFFF;\r\n    line-height: 11px;\r\n    font-size: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.signinText::after {\r\n    position: absolute;\r\n    content: '';\r\n    width: 40px;\r\n    height: 1px;\r\n    background-color: #5184E5;\r\n    margin-top: 20px;\r\n    margin-left: -72px\r\n}\r\n\r\n.imgSearch {\r\n    width: 29px;\r\n    height: 29px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    margin-left: 30px;\r\n}\r\n\r\n.imgBasket {\r\n    width: 29px;\r\n    height: 29px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\r\n    background-size: contain;\r\n    margin-left: 30px;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.swiper-container-1 {\r\n    width: 100%;\r\n    height: 100vh;\r\n    position: relative;\r\n}\r\n\r\n\r\n.swiper-slide {\r\n    font-size: 18px;\r\n    color: #fff;\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    padding: 40px 0px;\r\n}\r\n\r\n.parallax-bg {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    height: 100%;\r\n    -webkit-background-size: cover;\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n.swiper-slide .title {\r\n    font-size: 30px;\r\n    font-weight: normal;\r\n    margin-top: 256px;\r\n    text-align: center;\r\n}\r\n\r\n.swiper-slide .subtitle {\r\n    font-size: 50px;\r\n    font-weight: 700;\r\n    text-align: center;\r\n    width: 193px;\r\n    margin: auto;\r\n    line-height: -5px;\r\n}\r\n\r\n.swiper-slide .text {\r\n    font-size: 14px;\r\n    max-width: 400px;\r\n    line-height: 1.3;\r\n}\r\n.swiper-pagination {\r\n    display: flex;\r\n    margin-left: 50px;\r\n    margin-bottom: 10vh;\r\n}\r\n\r\n.swiper-pagination-bullet {\r\n      width: 23px;\r\n      height: 23px;\r\n      background: #3E3E3E;\r\n      border: 0.5px solid #FFFFFF\r\n}\r\n\r\n.swiper-pagination-bullet-active {\r\n      background: #5184E5;\r\n      border: 0.5px solid #5184E5;\r\n}\r\n\r\n.slide1 {\r\n      background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");\r\n      background-size: cover;\r\n      background-repeat: no-repeat;\r\n      background-position: 45% 40% ;\r\n  }\r\n.slide2 {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ");\r\n    background-size: cover;\r\n}\r\n\r\n.slide3 {\r\n    background: gray;\r\n}\r\n\r\n.secondSlideContent {\r\n    width: 557px;\r\n    margin-top: 40vh;\r\n    padding-left: 50px;\r\n}\r\n.secondSlideContent div:nth-child(1) {\r\n    width: 485px;\r\n    line-height: 40px;\r\n    font-size: 40px;\r\n}\r\n\r\n.secondSlideContent div:nth-child(2) {\r\n    width: 100%;\r\n    font-size: 24px;\r\n    font-weight: 200;\r\n    line-height: 24px;\r\n    opacity: 0.9;\r\n}\r\n\r\n.secondSlideContent div:nth-child(3) button{\r\n   width: 202px;\r\n   height: 54px;\r\n   color: #FFFFFF;\r\n   background: #5184E5;\r\n   border-radius: 15px;\r\n   outline: none;\r\n   border: none;\r\n   font-size: 18px;\r\n   text-transform: uppercase;\r\n   cursor: pointer;\r\n   margin-top: 20px;\r\n}\r\n\r\n.secondSlideContent div:nth-child(3) input{\r\n    width: 304px;\r\n    height: 54px;\r\n    background: #776868;\r\n    border-radius: 15px;\r\n    border: none;\r\n    margin-top: 20px\r\n }\r\n\r\n input::placeholder {\r\n    font-weight: 400;\r\n    font-size: 18px;\r\n    line-height: 21px;\r\n    color: #C1C1C1;\r\n    margin: 30px;\r\n }\r\n .scroll {\r\n     position: absolute;\r\n     width: 14px;\r\n     height: 15px;\r\n     margin-top: -100px;\r\n     z-index: 200000;\r\n     background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ");\r\n     background-size: contain;\r\n     background-repeat: no-repeat;\r\n     cursor: pointer;\r\n     margin-left: 50%;\r\n     animation: scroll 1.5s infinite linear;\r\n }\r\n\r\n @keyframes scroll {\r\n     from {\r\n         margin-top: -100px;\r\n     }\r\n\r\n     to {\r\n        margin-top: -50px;\r\n     }\r\n }\r\n\r\n .swiper-container-2 {\r\n    width: 100%;\r\n    height: 673px;\r\n    position: relative;\r\n}\r\n\r\n.product {\r\n    height: 530px\r\n}\r\n\r\n.swiper-wrapper {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 85%;\r\n}\r\n\r\n.our-products {\r\n    width: 95.5%;\r\n    height: 673px;\r\n    margin: auto;\r\n    margin-top: 100px\r\n}\r\n\r\n.product-title {\r\n    font-family: 'Bebas Neue';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 30px;\r\n    line-height: 48px;\r\n    margin-left: 50px\r\n}\r\n\r\n.swiper-button-next, .swiper-button-prev {\r\n    width: 50px;\r\n    height: 50px;\r\n    color: #B3B3B3;\r\n}\r\n\r\n.slideImg {\r\n    width: 250px;\r\n    height: 350px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ");\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    margin: auto;\r\n}\r\n\r\n.second {\r\n    margin: auto;\r\n}\r\n\r\n.productTitle {\r\n    color: #4B4B4B;\r\n    font-size: 24px;\r\n    line-height: 10px;\r\n    margin-left: 25px;\r\n}\r\n\r\n.productPrice {\r\n    color: #4B4B4B;\r\n    font-size: 24px;\r\n    line-height: 10px;\r\n}\r\n\r\n.productPrice::before {\r\n    content: url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ");\r\n    width: 10px;\r\n    height: 10px;\r\n    margin: 0px 5px 0px 25px;\r\n}\r\n\r\n.starsImg {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ");\r\n    width: 88px;\r\n    height: 16px;\r\n    background-size: cover;\r\n    margin-left: 25px;\r\n}\r\n\r\n.about {\r\n  width: 91%;\r\n  margin: auto;\r\n}\r\n\r\n.aboutImg {\r\n    width: 50%;\r\n    height: 600px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ");\r\n    background-size: contain;\r\n    background-repeat: no-repeat\r\n}\r\n\r\n.aboutTitle {\r\n   color: #000000;\r\n   font-family: 'Bebas Neue';\r\n   font-size: 30px;\r\n   font-weight: 700;\r\n}\r\n.aboutWrapper {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.aboutContent {\r\n    width: 50%;\r\n    font-size: 28px;\r\n    padding-left: 50px;\r\n    color: #727272;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\n.archived {\r\n    width: 88%;\r\n    margin: auto;\r\n    height: 379px;\r\n    background: red;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: end;\r\n}\r\n\r\n.item {\r\n    width: 329px;\r\n    height: 279px;\r\n    background: gray;\r\n}\r\n\r\n\r\n@media only screen and (min-width: 1280px) {\r\n    .warning {\r\n       height: 40px;\r\n    }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"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","sourcesContent":["body {\r\n    padding: 0;\r\n    margin:0;\r\n    font-family: 'Roboto';\r\n    font-style: normal;\r\n    box-sizing: border-box;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.warning {\r\n    width: 100%;\r\n    height: 118px;\r\n    background: #3E3E3E;\r\n    color: #FFFFFF;\r\n    font-weight: 400;\r\n    font-size: 18px;\r\n    line-height: 21px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-end;\r\n    text-align: center;\r\n}\r\n\r\n.warning span {\r\n    width: 287px;\r\n    height: 63px;\r\n}\r\n\r\n.navbar {\r\n    width: 84%;\r\n    height: 60px;\r\n    margin: 30px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    position: absolute;\r\n    z-index: 500000;\r\n}\r\n\r\n.menu-icon {\r\n    width: 44px;\r\n    height: 44px;\r\n    background-image: url('../images/white_menu.png');\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    align-self:center;\r\n    cursor: pointer\r\n}\r\n\r\n.menu-logo {\r\n    width: 154px;\r\n    height: 64px;\r\n    background-image: url('../images/white_logo.png');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    margin-left: 5px;\r\n}\r\n\r\n.logoImg {\r\n    width: 267px;\r\n    height: 111px;\r\n    background-image: url('../images/logo.png');\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\nul {\r\n    display: flex;\r\n    width: 600px;\r\n    justify-content: center;\r\n}\r\nul li {\r\n  list-style-type: none;\r\n  font-family: Bebas Neue;\r\n  color: #FFFFFF;\r\n  cursor: pointer;\r\n  margin-left: 20px;\r\n  font-size: 20px;\r\n}\r\n\r\nul li::after {\r\n   content: url('../images/arrow.png');\r\n   padding-left: 5px\r\n}\r\n\r\n.signinSearchLangWrapper {\r\n    width: 400px;\r\n    height: 100px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.imgLang {\r\n    width: 50px;\r\n    height: 36px;\r\n    background-image: url('../images/eng_flag.png'), url('../images/arrow.png');\r\n    background-size: 36px 36px, 10px 5px;\r\n    background-repeat: no-repeat no-repeat;\r\n    background-position: 0% 0%, 100% 50%;\r\n}\r\n\r\n.signinText {\r\n    color: #FFFFFF;\r\n    line-height: 11px;\r\n    font-size: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.signinText::after {\r\n    position: absolute;\r\n    content: '';\r\n    width: 40px;\r\n    height: 1px;\r\n    background-color: #5184E5;\r\n    margin-top: 20px;\r\n    margin-left: -72px\r\n}\r\n\r\n.imgSearch {\r\n    width: 29px;\r\n    height: 29px;\r\n    background-image: url('../images/search.png');\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    margin-left: 30px;\r\n}\r\n\r\n.imgBasket {\r\n    width: 29px;\r\n    height: 29px;\r\n    background-image: url('../images/basket.png');\r\n    background-size: contain;\r\n    margin-left: 30px;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.swiper-container-1 {\r\n    width: 100%;\r\n    height: 100vh;\r\n    position: relative;\r\n}\r\n\r\n\r\n.swiper-slide {\r\n    font-size: 18px;\r\n    color: #fff;\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    padding: 40px 0px;\r\n}\r\n\r\n.parallax-bg {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    height: 100%;\r\n    -webkit-background-size: cover;\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n.swiper-slide .title {\r\n    font-size: 30px;\r\n    font-weight: normal;\r\n    margin-top: 256px;\r\n    text-align: center;\r\n}\r\n\r\n.swiper-slide .subtitle {\r\n    font-size: 50px;\r\n    font-weight: 700;\r\n    text-align: center;\r\n    width: 193px;\r\n    margin: auto;\r\n    line-height: -5px;\r\n}\r\n\r\n.swiper-slide .text {\r\n    font-size: 14px;\r\n    max-width: 400px;\r\n    line-height: 1.3;\r\n}\r\n.swiper-pagination {\r\n    display: flex;\r\n    margin-left: 50px;\r\n    margin-bottom: 10vh;\r\n}\r\n\r\n.swiper-pagination-bullet {\r\n      width: 23px;\r\n      height: 23px;\r\n      background: #3E3E3E;\r\n      border: 0.5px solid #FFFFFF\r\n}\r\n\r\n.swiper-pagination-bullet-active {\r\n      background: #5184E5;\r\n      border: 0.5px solid #5184E5;\r\n}\r\n\r\n.slide1 {\r\n      background-image: url('../images/background_1.png');\r\n      background-size: cover;\r\n      background-repeat: no-repeat;\r\n      background-position: 45% 40% ;\r\n  }\r\n.slide2 {\r\n    background-image: url('../images/background_2.png');\r\n    background-size: cover;\r\n}\r\n\r\n.slide3 {\r\n    background: gray;\r\n}\r\n\r\n.secondSlideContent {\r\n    width: 557px;\r\n    margin-top: 40vh;\r\n    padding-left: 50px;\r\n}\r\n.secondSlideContent div:nth-child(1) {\r\n    width: 485px;\r\n    line-height: 40px;\r\n    font-size: 40px;\r\n}\r\n\r\n.secondSlideContent div:nth-child(2) {\r\n    width: 100%;\r\n    font-size: 24px;\r\n    font-weight: 200;\r\n    line-height: 24px;\r\n    opacity: 0.9;\r\n}\r\n\r\n.secondSlideContent div:nth-child(3) button{\r\n   width: 202px;\r\n   height: 54px;\r\n   color: #FFFFFF;\r\n   background: #5184E5;\r\n   border-radius: 15px;\r\n   outline: none;\r\n   border: none;\r\n   font-size: 18px;\r\n   text-transform: uppercase;\r\n   cursor: pointer;\r\n   margin-top: 20px;\r\n}\r\n\r\n.secondSlideContent div:nth-child(3) input{\r\n    width: 304px;\r\n    height: 54px;\r\n    background: #776868;\r\n    border-radius: 15px;\r\n    border: none;\r\n    margin-top: 20px\r\n }\r\n\r\n input::placeholder {\r\n    font-weight: 400;\r\n    font-size: 18px;\r\n    line-height: 21px;\r\n    color: #C1C1C1;\r\n    margin: 30px;\r\n }\r\n .scroll {\r\n     position: absolute;\r\n     width: 14px;\r\n     height: 15px;\r\n     margin-top: -100px;\r\n     z-index: 200000;\r\n     background-image: url('../images/mobile_scroll.png');\r\n     background-size: contain;\r\n     background-repeat: no-repeat;\r\n     cursor: pointer;\r\n     margin-left: 50%;\r\n     animation: scroll 1.5s infinite linear;\r\n }\r\n\r\n @keyframes scroll {\r\n     from {\r\n         margin-top: -100px;\r\n     }\r\n\r\n     to {\r\n        margin-top: -50px;\r\n     }\r\n }\r\n\r\n .swiper-container-2 {\r\n    width: 100%;\r\n    height: 673px;\r\n    position: relative;\r\n}\r\n\r\n.product {\r\n    height: 530px\r\n}\r\n\r\n.swiper-wrapper {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 85%;\r\n}\r\n\r\n.our-products {\r\n    width: 95.5%;\r\n    height: 673px;\r\n    margin: auto;\r\n    margin-top: 100px\r\n}\r\n\r\n.product-title {\r\n    font-family: 'Bebas Neue';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 30px;\r\n    line-height: 48px;\r\n    margin-left: 50px\r\n}\r\n\r\n.swiper-button-next, .swiper-button-prev {\r\n    width: 50px;\r\n    height: 50px;\r\n    color: #B3B3B3;\r\n}\r\n\r\n.slideImg {\r\n    width: 250px;\r\n    height: 350px;\r\n    background-image: url(../images/product.png);\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    margin: auto;\r\n}\r\n\r\n.second {\r\n    margin: auto;\r\n}\r\n\r\n.productTitle {\r\n    color: #4B4B4B;\r\n    font-size: 24px;\r\n    line-height: 10px;\r\n    margin-left: 25px;\r\n}\r\n\r\n.productPrice {\r\n    color: #4B4B4B;\r\n    font-size: 24px;\r\n    line-height: 10px;\r\n}\r\n\r\n.productPrice::before {\r\n    content: url('../images/dram.png');\r\n    width: 10px;\r\n    height: 10px;\r\n    margin: 0px 5px 0px 25px;\r\n}\r\n\r\n.starsImg {\r\n    background-image: url(../images/stars.png);\r\n    width: 88px;\r\n    height: 16px;\r\n    background-size: cover;\r\n    margin-left: 25px;\r\n}\r\n\r\n.about {\r\n  width: 91%;\r\n  margin: auto;\r\n}\r\n\r\n.aboutImg {\r\n    width: 50%;\r\n    height: 600px;\r\n    background-image: url(../images/whoWeAre.png);\r\n    background-size: contain;\r\n    background-repeat: no-repeat\r\n}\r\n\r\n.aboutTitle {\r\n   color: #000000;\r\n   font-family: 'Bebas Neue';\r\n   font-size: 30px;\r\n   font-weight: 700;\r\n}\r\n.aboutWrapper {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.aboutContent {\r\n    width: 50%;\r\n    font-size: 28px;\r\n    padding-left: 50px;\r\n    color: #727272;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\n.archived {\r\n    width: 88%;\r\n    margin: auto;\r\n    height: 379px;\r\n    background: red;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: end;\r\n}\r\n\r\n.item {\r\n    width: 329px;\r\n    height: 279px;\r\n    background: gray;\r\n}\r\n\r\n\r\n@media only screen and (min-width: 1280px) {\r\n    .warning {\r\n       height: 40px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/images/arrow.png":
/*!******************************!*\
  !*** ./src/images/arrow.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "649f5b73fcde5a02184d.png";

/***/ }),

/***/ "./src/images/background_1.png":
/*!*************************************!*\
  !*** ./src/images/background_1.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "09951e8c89c6cc337ff4.png";

/***/ }),

/***/ "./src/images/background_2.png":
/*!*************************************!*\
  !*** ./src/images/background_2.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b776322263745a57e2b6.png";

/***/ }),

/***/ "./src/images/basket.png":
/*!*******************************!*\
  !*** ./src/images/basket.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3885a065b8eedc849e9d.png";

/***/ }),

/***/ "./src/images/dram.png":
/*!*****************************!*\
  !*** ./src/images/dram.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "217d3e588137bb6a9a47.png";

/***/ }),

/***/ "./src/images/eng_flag.png":
/*!*********************************!*\
  !*** ./src/images/eng_flag.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "956e5d5ca23a6a3f9641.png";

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "469ef8903d6acddb0463.png";

/***/ }),

/***/ "./src/images/mobile_scroll.png":
/*!**************************************!*\
  !*** ./src/images/mobile_scroll.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "467af80ee9853f0f6123.png";

/***/ }),

/***/ "./src/images/product.png":
/*!********************************!*\
  !*** ./src/images/product.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e334b08c6d80f71426b6.png";

/***/ }),

/***/ "./src/images/search.png":
/*!*******************************!*\
  !*** ./src/images/search.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7b5b7a97921003192665.png";

/***/ }),

/***/ "./src/images/stars.png":
/*!******************************!*\
  !*** ./src/images/stars.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e09e185728ffc7ba35c4.png";

/***/ }),

/***/ "./src/images/white_logo.png":
/*!***********************************!*\
  !*** ./src/images/white_logo.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "02cd7afe5d1cc659e3d8.png";

/***/ }),

/***/ "./src/images/white_menu.png":
/*!***********************************!*\
  !*** ./src/images/white_menu.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a55e85d22b98ed36954c.png";

/***/ }),

/***/ "./src/images/whoWeAre.png":
/*!*********************************!*\
  !*** ./src/images/whoWeAre.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b9cd4d977a062f66adae.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.css */ "./src/css/index.css");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar */ "./src/js/components/navbar.js");
/* harmony import */ var _components_assets_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/assets/constant */ "./src/js/components/assets/constant.js");
/* harmony import */ var _components_slides__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/slides */ "./src/js/components/slides.js");
/* harmony import */ var _components_renderItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/renderItems */ "./src/js/components/renderItems.js");
/* harmony import */ var _images_whoWeAre_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/whoWeAre.png */ "./src/images/whoWeAre.png");






var swiper = new Swiper(".swiper-container-1", {
  speed: 600,
  parallax: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
(0,_components_slides__WEBPACK_IMPORTED_MODULE_3__["default"])(_components_assets_constant__WEBPACK_IMPORTED_MODULE_2__.data.products);
var swiper1 = new Swiper(".swiper-container-2", {
  slidesPerView: 5,
  spaceBetween: 30,
  slidesPerGroup: 5,
  loop: true,
  // mousewheel: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
}); // navbar();

(0,_components_renderItems__WEBPACK_IMPORTED_MODULE_4__["default"])(_components_assets_constant__WEBPACK_IMPORTED_MODULE_2__.data.archived);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFL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QUNwQyxzRUFBRCxDQUFYO0FBQ0EsSUFBSWlELE9BQU8sR0FBRyxJQUFJTixNQUFKLENBQVcscUJBQVgsRUFBa0M7RUFDOUNPLGFBQWEsRUFBRSxDQUQrQjtFQUU5Q0MsWUFBWSxFQUFFLEVBRmdDO0VBRzlDQyxjQUFjLEVBQUUsQ0FIOEI7RUFJOUNDLElBQUksRUFBRSxJQUp3QztFQUs5QztFQUNBQyxzQkFBc0IsRUFBRSxJQU5zQjtFQU85Q0MsVUFBVSxFQUFFO0lBQ1ZDLE1BQU0sRUFBRSxxQkFERTtJQUVWQyxNQUFNLEVBQUU7RUFGRTtBQVBrQyxDQUFsQyxDQUFkLEVBY0Y7O0FBQ0FoQixtRUFBVyxDQUFDekMsc0VBQUQsQ0FBWCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2l0cGxleC8uL3NyYy9qcy9jb21wb25lbnRzL2Fzc2V0cy9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly93aXRwbGV4Ly4vc3JjL2pzL2NvbXBvbmVudHMvbmF2YmFyLmpzIiwid2VicGFjazovL3dpdHBsZXgvLi9zcmMvanMvY29tcG9uZW50cy9yZW5kZXJJdGVtcy5qcyIsIndlYnBhY2s6Ly93aXRwbGV4Ly4vc3JjL2pzL2NvbXBvbmVudHMvc2xpZGVzLmpzIiwid2VicGFjazovL3dpdHBsZXgvLi9zcmMvY3NzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly93aXRwbGV4Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93aXRwbGV4Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93aXRwbGV4Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2l0cGxleC8uL3NyYy9jc3MvaW5kZXguY3NzP2Y3ZWEiLCJ3ZWJwYWNrOi8vd2l0cGxleC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93aXRwbGV4Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93aXRwbGV4Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dpdHBsZXgvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2l0cGxleC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dpdHBsZXgvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93aXRwbGV4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dpdHBsZXgvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2l0cGxleC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2l0cGxleC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dpdHBsZXgvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93aXRwbGV4L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2l0cGxleC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93aXRwbGV4L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dpdHBsZXgvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dpdHBsZXgvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBjb25zdCBkYXRhPXtcclxuICAgIHByb2R1Y3RzOltcclxuICAgIHtcclxuICAgICAgICBpbWc6ICdwcm9kdWN0JyxcclxuICAgICAgICB0aXRsZTogJ0VMRiBCQVIgUkYgNzAwJyxcclxuICAgICAgICBwcmljZTogNzAwMCxcclxuICAgICAgICBzdGFyczogJ3N0YXJzJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbWc6ICdwcm9kdWN0JyxcclxuICAgICAgICB0aXRsZTogJ0VMRiBCQVIgUkYgNjAwJyxcclxuICAgICAgICBwcmljZTogNjAwMCxcclxuICAgICAgICBzdGFyczogJ3N0YXJzJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbWc6ICdwcm9kdWN0JyxcclxuICAgICAgICB0aXRsZTogJ0VMRiBCQVIgUkYgNTAwJyxcclxuICAgICAgICBwcmljZTogNTAwMCxcclxuICAgICAgICBzdGFyczogJ3N0YXJzJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbWc6ICdwcm9kdWN0JyxcclxuICAgICAgICB0aXRsZTogJ0VMRiBCQVIgUkYgNDAwJyxcclxuICAgICAgICBwcmljZTogNDAwMCxcclxuICAgICAgICBzdGFyczogJ3N0YXJzJ1xyXG4gICAgfVxyXG5dLFxyXG4gICAgYXJjaGl2ZWQ6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltZzogJ3ZhcGVzdGVyJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdWQVBFU1RFUlMnLFxyXG4gICAgICAgICAgICBjb3VudDogMTU2NSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOiAnY2lnYXJldHRlJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdDSUdBUkVUVEVTIFNBVkVEJyxcclxuICAgICAgICAgICAgY291bnQ6IDc1OCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOiAnZmxhdm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdQUkUtTUFERSBGTEFWT1JTJyxcclxuICAgICAgICAgICAgY291bnQ6IDI5ODMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltZzogJ2NvbWJvJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdDVVNUT00gQ09NQk9TJyxcclxuICAgICAgICAgICAgY291bnQ6IDEyNCxcclxuXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59IiwiXHJcbmZ1bmN0aW9uIG5hdmJhcigpIHtcclxuICAgIGNvbnN0IG5hdkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXInKTtcclxuICAgIC8vY3JlYXRlIGltYWdlIHBhcnRcclxuICAgIGNvbnN0IGltZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaW1nRGl2LmNsYXNzTmFtZSA9ICdsb2dvSW1nJztcclxuICAgIC8vIGNyZWF0ZSB1bFxyXG4gICAgY29uc3QgbGlzdD1bJ05FVycsJ09VUiBQUk9EVUNUUycsICdCUkFORFMnXTtcclxuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIGZvciAobGV0IGk9MDsgaTxsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICBhLnNldEF0dHJpYnV0ZSgnaHJlZicsICcuL3Byb2R1Y3QuaHRtbCcpO1xyXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgbGkuaW5uZXJIVE1MPWxpc3RbaV1cclxuICAgICAgICBhLmFwcGVuZChsaSk7XHJcbiAgICAgICAgdWwuYXBwZW5kKGEpXHJcbiAgICB9XHJcblxyXG4gICAgLy9jcmVhdGUgc2VhcmNoIHBhcnRcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2LmNsYXNzTmFtZT0nc2lnbmluU2VhcmNoTGFuZ1dyYXBwZXInO1xyXG4gICAgY29uc3QgaW1nTGFuZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaW1nTGFuZy5jbGFzc05hbWU9J2ltZ0xhbmcnO1xyXG4gICAgZGl2LmFwcGVuZChpbWdMYW5nKTtcclxuXHJcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgc3Bhbi5jbGFzc05hbWU9J3NpZ25pblRleHQnXHJcbiAgICBzcGFuLmlubmVySFRNTD0nU0lHTiBJTidcclxuICAgIGRpdi5hcHBlbmQoc3Bhbik7XHJcblxyXG4gICAgY29uc3QgaW1nU2VhcmNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpbWdTZWFyY2guY2xhc3NOYW1lPSdpbWdTZWFyY2gnO1xyXG4gICAgZGl2LmFwcGVuZChpbWdTZWFyY2gpO1xyXG4gICAgY29uc3QgaW1nQmFza2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpbWdCYXNrZXQuY2xhc3NOYW1lPSdpbWdCYXNrZXQnO1xyXG4gICAgZGl2LmFwcGVuZChpbWdCYXNrZXQpO1xyXG5cclxuXHJcbiAgICBuYXZDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nRGl2KTtcclxuICAgIG5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZCh1bCk7XHJcbiAgICBuYXZDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbiAgICByZXR1cm4gbmF2Q29udGFpbmVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuYXZiYXI7XHJcbiIsIlxyXG5cclxuZnVuY3Rpb24gcmVuZGVyIChkYXRhKSB7XHJcbiAgIGNvbnN0IGFyY2hpdmVkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFyY2hpdmVkJyk7XHJcblxyXG4gICBkYXRhLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgZGl2LmNsYXNzTmFtZSA9ICdpdGVtJztcclxuICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKC4uLy4uL2ltYWdlcy92YXBlc3Rlci5wbmcpYFxyXG4gICAgICBkaXYuYXBwZW5kKGltZyk7XHJcbiAgICAgIGFyY2hpdmVkQ29udGFpbmVyLmFwcGVuZChkaXYpO1xyXG4gICB9KTtcclxuXHJcbiAgIHJldHVybiBhcmNoaXZlZENvbnRhaW5lcjtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlbmRlcjtcclxuIiwiXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVNsaWRlIChkYXRhKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Vjb25kJyk7XHJcbiAgICBkYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2LmNsYXNzTmFtZSA9IFwic3dpcGVyLXNsaWRlIHByb2R1Y3RcIjtcclxuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBpbWcuY2xhc3NOYW1lID0gJ3NsaWRlSW1nJztcclxuICAgICAgICBjb25zdCBwcm9kdWN0VGl0bGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHByb2R1Y3RUaXRsZS5jbGFzc05hbWUgPSAncHJvZHVjdFRpdGxlJztcclxuICAgICAgICBwcm9kdWN0VGl0bGUuaW5uZXJIVE1MPWl0ZW0udGl0bGU7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdFByaWNlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBwcm9kdWN0UHJpY2UuY2xhc3NOYW1lPSdwcm9kdWN0UHJpY2UnO1xyXG4gICAgICAgIHByb2R1Y3RQcmljZS5pbm5lckhUTUw9aXRlbS5wcmljZTtcclxuICAgICAgICBjb25zdCBzdGFyc0ltZz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHN0YXJzSW1nLmNsYXNzTmFtZT0nc3RhcnNJbWcnO1xyXG5cclxuICAgICAgICBkaXYuYXBwZW5kKGltZyk7XHJcbiAgICAgICAgZGl2LmFwcGVuZChwcm9kdWN0VGl0bGUpO1xyXG4gICAgICAgIGRpdi5hcHBlbmQocHJvZHVjdFByaWNlKTtcclxuICAgICAgICBkaXYuYXBwZW5kKHN0YXJzSW1nKTtcclxuXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChkaXYpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNsaWRlOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvd2hpdGVfbWVudS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvd2hpdGVfbG9nby5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvbG9nby5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvYXJyb3cucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2VuZ19mbGFnLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9zZWFyY2gucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2Jhc2tldC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvYmFja2dyb3VuZF8xLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9iYWNrZ3JvdW5kXzIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzlfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL21vYmlsZV9zY3JvbGwucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9wcm9kdWN0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvZHJhbS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTJfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3N0YXJzLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xM19fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvd2hvV2VBcmUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzlfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzExX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEyX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEzX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjowO1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ud2FybmluZyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDExOHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjM0UzRTNFO1xcclxcbiAgICBjb2xvcjogI0ZGRkZGRjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjFweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ud2FybmluZyBzcGFuIHtcXHJcXG4gICAgd2lkdGg6IDI4N3B4O1xcclxcbiAgICBoZWlnaHQ6IDYzcHg7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIge1xcclxcbiAgICB3aWR0aDogODQlO1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIG1hcmdpbjogMzBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IDUwMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaWNvbiB7XFxyXFxuICAgIHdpZHRoOiA0NHB4O1xcclxcbiAgICBoZWlnaHQ6IDQ0cHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYWxpZ24tc2VsZjpjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlclxcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1sb2dvIHtcXHJcXG4gICAgd2lkdGg6IDE1NHB4O1xcclxcbiAgICBoZWlnaHQ6IDY0cHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5sb2dvSW1nIHtcXHJcXG4gICAgd2lkdGg6IDI2N3B4O1xcclxcbiAgICBoZWlnaHQ6IDExMXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDYwMHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxudWwgbGkge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6IEJlYmFzIE5ldWU7XFxyXFxuICBjb2xvcjogI0ZGRkZGRjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG51bCBsaTo6YWZ0ZXIge1xcclxcbiAgIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxyXFxuICAgcGFkZGluZy1sZWZ0OiA1cHhcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ25pblNlYXJjaExhbmdXcmFwcGVyIHtcXHJcXG4gICAgd2lkdGg6IDQwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nTGFuZyB7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDM2cHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMzZweCAzNnB4LCAxMHB4IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDAlLCAxMDAlIDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ25pblRleHQge1xcclxcbiAgICBjb2xvcjogI0ZGRkZGRjtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDExcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbmluVGV4dDo6YWZ0ZXIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MTg0RTU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtNzJweFxcclxcbn1cXHJcXG5cXHJcXG4uaW1nU2VhcmNoIHtcXHJcXG4gICAgd2lkdGg6IDI5cHg7XFxyXFxuICAgIGhlaWdodDogMjlweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmltZ0Jhc2tldCB7XFxyXFxuICAgIHdpZHRoOiAyOXB4O1xcclxcbiAgICBoZWlnaHQ6IDI5cHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi5zd2lwZXItY29udGFpbmVyLTEge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc3dpcGVyLXNsaWRlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBwYWRkaW5nOiA0MHB4IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhcmFsbGF4LWJnIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zd2lwZXItc2xpZGUgLnRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyNTZweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc3dpcGVyLXNsaWRlIC5zdWJ0aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTkzcHg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgbGluZS1oZWlnaHQ6IC01cHg7XFxyXFxufVxcclxcblxcclxcbi5zd2lwZXItc2xpZGUgLnRleHQge1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XFxyXFxufVxcclxcbi5zd2lwZXItcGFnaW5hdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcXHJcXG4gICAgICB3aWR0aDogMjNweDtcXHJcXG4gICAgICBoZWlnaHQ6IDIzcHg7XFxyXFxuICAgICAgYmFja2dyb3VuZDogIzNFM0UzRTtcXHJcXG4gICAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNGRkZGRkZcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xcclxcbiAgICAgIGJhY2tncm91bmQ6ICM1MTg0RTU7XFxyXFxuICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjNTE4NEU1O1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGUxIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fICsgXCIpO1xcclxcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0NSUgNDAlIDtcXHJcXG4gIH1cXHJcXG4uc2xpZGUyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOF9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlMyB7XFxyXFxuICAgIGJhY2tncm91bmQ6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmRTbGlkZUNvbnRlbnQge1xcclxcbiAgICB3aWR0aDogNTU3cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDQwdmg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcXHJcXG59XFxyXFxuLnNlY29uZFNsaWRlQ29udGVudCBkaXY6bnRoLWNoaWxkKDEpIHtcXHJcXG4gICAgd2lkdGg6IDQ4NXB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogNDBweDtcXHJcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kU2xpZGVDb250ZW50IGRpdjpudGgtY2hpbGQoMikge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBmb250LXdlaWdodDogMjAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMjRweDtcXHJcXG4gICAgb3BhY2l0eTogMC45O1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kU2xpZGVDb250ZW50IGRpdjpudGgtY2hpbGQoMykgYnV0dG9ue1xcclxcbiAgIHdpZHRoOiAyMDJweDtcXHJcXG4gICBoZWlnaHQ6IDU0cHg7XFxyXFxuICAgY29sb3I6ICNGRkZGRkY7XFxyXFxuICAgYmFja2dyb3VuZDogIzUxODRFNTtcXHJcXG4gICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgYm9yZGVyOiBub25lO1xcclxcbiAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kU2xpZGVDb250ZW50IGRpdjpudGgtY2hpbGQoMykgaW5wdXR7XFxyXFxuICAgIHdpZHRoOiAzMDRweDtcXHJcXG4gICAgaGVpZ2h0OiA1NHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNzc2ODY4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHhcXHJcXG4gfVxcclxcblxcclxcbiBpbnB1dDo6cGxhY2Vob2xkZXIge1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xcclxcbiAgICBjb2xvcjogI0MxQzFDMTtcXHJcXG4gICAgbWFyZ2luOiAzMHB4O1xcclxcbiB9XFxyXFxuIC5zY3JvbGwge1xcclxcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgd2lkdGg6IDE0cHg7XFxyXFxuICAgICBoZWlnaHQ6IDE1cHg7XFxyXFxuICAgICBtYXJnaW4tdG9wOiAtMTAwcHg7XFxyXFxuICAgICB6LWluZGV4OiAyMDAwMDA7XFxyXFxuICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19fICsgXCIpO1xcclxcbiAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgIG1hcmdpbi1sZWZ0OiA1MCU7XFxyXFxuICAgICBhbmltYXRpb246IHNjcm9sbCAxLjVzIGluZmluaXRlIGxpbmVhcjtcXHJcXG4gfVxcclxcblxcclxcbiBAa2V5ZnJhbWVzIHNjcm9sbCB7XFxyXFxuICAgICBmcm9tIHtcXHJcXG4gICAgICAgICBtYXJnaW4tdG9wOiAtMTAwcHg7XFxyXFxuICAgICB9XFxyXFxuXFxyXFxuICAgICB0byB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAtNTBweDtcXHJcXG4gICAgIH1cXHJcXG4gfVxcclxcblxcclxcbiAuc3dpcGVyLWNvbnRhaW5lci0yIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNjczcHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2R1Y3Qge1xcclxcbiAgICBoZWlnaHQ6IDUzMHB4XFxyXFxufVxcclxcblxcclxcbi5zd2lwZXItd3JhcHBlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiA4NSU7XFxyXFxufVxcclxcblxcclxcbi5vdXItcHJvZHVjdHMge1xcclxcbiAgICB3aWR0aDogOTUuNSU7XFxyXFxuICAgIGhlaWdodDogNjczcHg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgbWFyZ2luLXRvcDogMTAwcHhcXHJcXG59XFxyXFxuXFxyXFxuLnByb2R1Y3QtdGl0bGUge1xcclxcbiAgICBmb250LWZhbWlseTogJ0JlYmFzIE5ldWUnO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDQ4cHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4XFxyXFxufVxcclxcblxcclxcbi5zd2lwZXItYnV0dG9uLW5leHQsIC5zd2lwZXItYnV0dG9uLXByZXYge1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBjb2xvcjogI0IzQjNCMztcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlSW1nIHtcXHJcXG4gICAgd2lkdGg6IDI1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDM1MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMF9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kIHtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdFRpdGxlIHtcXHJcXG4gICAgY29sb3I6ICM0QjRCNEI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdFByaWNlIHtcXHJcXG4gICAgY29sb3I6ICM0QjRCNEI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0UHJpY2U6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzExX19fICsgXCIpO1xcclxcbiAgICB3aWR0aDogMTBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMHB4O1xcclxcbiAgICBtYXJnaW46IDBweCA1cHggMHB4IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5zdGFyc0ltZyB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEyX19fICsgXCIpO1xcclxcbiAgICB3aWR0aDogODhweDtcXHJcXG4gICAgaGVpZ2h0OiAxNnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0IHtcXHJcXG4gIHdpZHRoOiA5MSU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5hYm91dEltZyB7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGhlaWdodDogNjAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEzX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXRcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0VGl0bGUge1xcclxcbiAgIGNvbG9yOiAjMDAwMDAwO1xcclxcbiAgIGZvbnQtZmFtaWx5OiAnQmViYXMgTmV1ZSc7XFxyXFxuICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcbi5hYm91dFdyYXBwZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmFib3V0Q29udGVudCB7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcclxcbiAgICBjb2xvcjogIzcyNzI3MjtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFyY2hpdmVkIHtcXHJcXG4gICAgd2lkdGg6IDg4JTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IDM3OXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbSB7XFxyXFxuICAgIHdpZHRoOiAzMjlweDtcXHJcXG4gICAgaGVpZ2h0OiAyNzlweDtcXHJcXG4gICAgYmFja2dyb3VuZDogZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIHtcXHJcXG4gICAgLndhcm5pbmcge1xcclxcbiAgICAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxVQUFVO0lBQ1YsUUFBUTtJQUNSLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix5REFBaUQ7SUFDakQsd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakI7QUFDSjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1oseURBQWlEO0lBQ2pELHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYix5REFBMkM7SUFDM0Msd0JBQXdCO0lBQ3hCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osdUJBQXVCO0FBQzNCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLGNBQWM7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QUNiLGVBQWU7SUFDZixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOzs7QUFHQTtJQUNJO09BQ0csWUFBWTtJQUNmO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjowO1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ud2FybmluZyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDExOHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjM0UzRTNFO1xcclxcbiAgICBjb2xvcjogI0ZGRkZGRjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjFweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ud2FybmluZyBzcGFuIHtcXHJcXG4gICAgd2lkdGg6IDI4N3B4O1xcclxcbiAgICBoZWlnaHQ6IDYzcHg7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIge1xcclxcbiAgICB3aWR0aDogODQlO1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIG1hcmdpbjogMzBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IDUwMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaWNvbiB7XFxyXFxuICAgIHdpZHRoOiA0NHB4O1xcclxcbiAgICBoZWlnaHQ6IDQ0cHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL3doaXRlX21lbnUucG5nJyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYWxpZ24tc2VsZjpjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlclxcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1sb2dvIHtcXHJcXG4gICAgd2lkdGg6IDE1NHB4O1xcclxcbiAgICBoZWlnaHQ6IDY0cHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL3doaXRlX2xvZ28ucG5nJyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5sb2dvSW1nIHtcXHJcXG4gICAgd2lkdGg6IDI2N3B4O1xcclxcbiAgICBoZWlnaHQ6IDExMXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9sb2dvLnBuZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDYwMHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxudWwgbGkge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6IEJlYmFzIE5ldWU7XFxyXFxuICBjb2xvcjogI0ZGRkZGRjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG51bCBsaTo6YWZ0ZXIge1xcclxcbiAgIGNvbnRlbnQ6IHVybCgnLi4vaW1hZ2VzL2Fycm93LnBuZycpO1xcclxcbiAgIHBhZGRpbmctbGVmdDogNXB4XFxyXFxufVxcclxcblxcclxcbi5zaWduaW5TZWFyY2hMYW5nV3JhcHBlciB7XFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmltZ0xhbmcge1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAzNnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9lbmdfZmxhZy5wbmcnKSwgdXJsKCcuLi9pbWFnZXMvYXJyb3cucG5nJyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMzZweCAzNnB4LCAxMHB4IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDAlLCAxMDAlIDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ25pblRleHQge1xcclxcbiAgICBjb2xvcjogI0ZGRkZGRjtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDExcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbmluVGV4dDo6YWZ0ZXIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MTg0RTU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtNzJweFxcclxcbn1cXHJcXG5cXHJcXG4uaW1nU2VhcmNoIHtcXHJcXG4gICAgd2lkdGg6IDI5cHg7XFxyXFxuICAgIGhlaWdodDogMjlweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvc2VhcmNoLnBuZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nQmFza2V0IHtcXHJcXG4gICAgd2lkdGg6IDI5cHg7XFxyXFxuICAgIGhlaWdodDogMjlweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvYmFza2V0LnBuZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4uc3dpcGVyLWNvbnRhaW5lci0xIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnN3aXBlci1zbGlkZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgcGFkZGluZzogNDBweCAwcHg7XFxyXFxufVxcclxcblxcclxcbi5wYXJhbGxheC1iZyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc3dpcGVyLXNsaWRlIC50aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjU2cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXBlci1zbGlkZSAuc3VidGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDUwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDE5M3B4O1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAtNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3dpcGVyLXNsaWRlIC50ZXh0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMS4zO1xcclxcbn1cXHJcXG4uc3dpcGVyLXBhZ2luYXRpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XFxyXFxuICAgICAgd2lkdGg6IDIzcHg7XFxyXFxuICAgICAgaGVpZ2h0OiAyM3B4O1xcclxcbiAgICAgIGJhY2tncm91bmQ6ICMzRTNFM0U7XFxyXFxuICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjRkZGRkZGXFxyXFxufVxcclxcblxcclxcbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiAjNTE4NEU1O1xcclxcbiAgICAgIGJvcmRlcjogMC41cHggc29saWQgIzUxODRFNTtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlMSB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvYmFja2dyb3VuZF8xLnBuZycpO1xcclxcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0NSUgNDAlIDtcXHJcXG4gIH1cXHJcXG4uc2xpZGUyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvYmFja2dyb3VuZF8yLnBuZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGUzIHtcXHJcXG4gICAgYmFja2dyb3VuZDogZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZFNsaWRlQ29udGVudCB7XFxyXFxuICAgIHdpZHRoOiA1NTdweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNDB2aDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcclxcbn1cXHJcXG4uc2Vjb25kU2xpZGVDb250ZW50IGRpdjpudGgtY2hpbGQoMSkge1xcclxcbiAgICB3aWR0aDogNDg1cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmRTbGlkZUNvbnRlbnQgZGl2Om50aC1jaGlsZCgyKSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbiAgICBvcGFjaXR5OiAwLjk7XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmRTbGlkZUNvbnRlbnQgZGl2Om50aC1jaGlsZCgzKSBidXR0b257XFxyXFxuICAgd2lkdGg6IDIwMnB4O1xcclxcbiAgIGhlaWdodDogNTRweDtcXHJcXG4gICBjb2xvcjogI0ZGRkZGRjtcXHJcXG4gICBiYWNrZ3JvdW5kOiAjNTE4NEU1O1xcclxcbiAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICBib3JkZXI6IG5vbmU7XFxyXFxuICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmRTbGlkZUNvbnRlbnQgZGl2Om50aC1jaGlsZCgzKSBpbnB1dHtcXHJcXG4gICAgd2lkdGg6IDMwNHB4O1xcclxcbiAgICBoZWlnaHQ6IDU0cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM3NzY4Njg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweFxcclxcbiB9XFxyXFxuXFxyXFxuIGlucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XFxyXFxuICAgIGNvbG9yOiAjQzFDMUMxO1xcclxcbiAgICBtYXJnaW46IDMwcHg7XFxyXFxuIH1cXHJcXG4gLnNjcm9sbCB7XFxyXFxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICB3aWR0aDogMTRweDtcXHJcXG4gICAgIGhlaWdodDogMTVweDtcXHJcXG4gICAgIG1hcmdpbi10b3A6IC0xMDBweDtcXHJcXG4gICAgIHotaW5kZXg6IDIwMDAwMDtcXHJcXG4gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL21vYmlsZV9zY3JvbGwucG5nJyk7XFxyXFxuICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgbWFyZ2luLWxlZnQ6IDUwJTtcXHJcXG4gICAgIGFuaW1hdGlvbjogc2Nyb2xsIDEuNXMgaW5maW5pdGUgbGluZWFyO1xcclxcbiB9XFxyXFxuXFxyXFxuIEBrZXlmcmFtZXMgc2Nyb2xsIHtcXHJcXG4gICAgIGZyb20ge1xcclxcbiAgICAgICAgIG1hcmdpbi10b3A6IC0xMDBweDtcXHJcXG4gICAgIH1cXHJcXG5cXHJcXG4gICAgIHRvIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xcclxcbiAgICAgfVxcclxcbiB9XFxyXFxuXFxyXFxuIC5zd2lwZXItY29udGFpbmVyLTIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA2NzNweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdCB7XFxyXFxuICAgIGhlaWdodDogNTMwcHhcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXBlci13cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDg1JTtcXHJcXG59XFxyXFxuXFxyXFxuLm91ci1wcm9kdWN0cyB7XFxyXFxuICAgIHdpZHRoOiA5NS41JTtcXHJcXG4gICAgaGVpZ2h0OiA2NzNweDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMDBweFxcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdC10aXRsZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQmViYXMgTmV1ZSc7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogNDhweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHhcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXBlci1idXR0b24tbmV4dCwgLnN3aXBlci1idXR0b24tcHJldiB7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGNvbG9yOiAjQjNCM0IzO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVJbWcge1xcclxcbiAgICB3aWR0aDogMjUwcHg7XFxyXFxuICAgIGhlaWdodDogMzUwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWFnZXMvcHJvZHVjdC5wbmcpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmQge1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0VGl0bGUge1xcclxcbiAgICBjb2xvcjogIzRCNEI0QjtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMTBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0UHJpY2Uge1xcclxcbiAgICBjb2xvcjogIzRCNEI0QjtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2R1Y3RQcmljZTo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogdXJsKCcuLi9pbWFnZXMvZHJhbS5wbmcnKTtcXHJcXG4gICAgd2lkdGg6IDEwcHg7XFxyXFxuICAgIGhlaWdodDogMTBweDtcXHJcXG4gICAgbWFyZ2luOiAwcHggNXB4IDBweCAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnNJbWcge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1hZ2VzL3N0YXJzLnBuZyk7XFxyXFxuICAgIHdpZHRoOiA4OHB4O1xcclxcbiAgICBoZWlnaHQ6IDE2cHg7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQge1xcclxcbiAgd2lkdGg6IDkxJTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0SW1nIHtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgaGVpZ2h0OiA2MDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltYWdlcy93aG9XZUFyZS5wbmcpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXRcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0VGl0bGUge1xcclxcbiAgIGNvbG9yOiAjMDAwMDAwO1xcclxcbiAgIGZvbnQtZmFtaWx5OiAnQmViYXMgTmV1ZSc7XFxyXFxuICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcbi5hYm91dFdyYXBwZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmFib3V0Q29udGVudCB7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcclxcbiAgICBjb2xvcjogIzcyNzI3MjtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFyY2hpdmVkIHtcXHJcXG4gICAgd2lkdGg6IDg4JTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IDM3OXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbSB7XFxyXFxuICAgIHdpZHRoOiAzMjlweDtcXHJcXG4gICAgaGVpZ2h0OiAyNzlweDtcXHJcXG4gICAgYmFja2dyb3VuZDogZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIHtcXHJcXG4gICAgLndhcm5pbmcge1xcclxcbiAgICAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4uL2Nzcy9pbmRleC5jc3MnO1xyXG5pbXBvcnQgbmF2YmFyIGZyb20gJy4vY29tcG9uZW50cy9uYXZiYXInO1xyXG5pbXBvcnQge2RhdGF9IGZyb20gJy4vY29tcG9uZW50cy9hc3NldHMvY29uc3RhbnQnO1xyXG5pbXBvcnQgY3JlYXRlU2xpZGUgZnJvbSAnLi9jb21wb25lbnRzL3NsaWRlcyc7XHJcbmltcG9ydCByZW5kZXJJdGVtcyBmcm9tICcuL2NvbXBvbmVudHMvcmVuZGVySXRlbXMnO1xyXG5pbXBvcnQgJy4uL2ltYWdlcy93aG9XZUFyZS5wbmcnXHJcblxyXG52YXIgc3dpcGVyID0gbmV3IFN3aXBlcihcIi5zd2lwZXItY29udGFpbmVyLTFcIiwge1xyXG4gICAgc3BlZWQ6IDYwMCxcclxuICAgIHBhcmFsbGF4OiB0cnVlLFxyXG4gICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICBlbDogXCIuc3dpcGVyLXBhZ2luYXRpb25cIixcclxuICAgICAgY2xpY2thYmxlOiB0cnVlXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGNyZWF0ZVNsaWRlKGRhdGEucHJvZHVjdHMpO1xyXG4gIHZhciBzd2lwZXIxID0gbmV3IFN3aXBlcihcIi5zd2lwZXItY29udGFpbmVyLTJcIiwge1xyXG4gICAgc2xpZGVzUGVyVmlldzogNSxcclxuICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICBzbGlkZXNQZXJHcm91cDogNSxcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICAvLyBtb3VzZXdoZWVsOiB0cnVlLFxyXG4gICAgbG9vcEZpbGxHcm91cFdpdGhCbGFuazogdHJ1ZSxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgbmV4dEVsOiBcIi5zd2lwZXItYnV0dG9uLW5leHRcIixcclxuICAgICAgcHJldkVsOiBcIi5zd2lwZXItYnV0dG9uLXByZXZcIixcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG5cclxuLy8gbmF2YmFyKCk7XHJcbnJlbmRlckl0ZW1zKGRhdGEuYXJjaGl2ZWQpO1xyXG4iXSwibmFtZXMiOlsiZGF0YSIsInByb2R1Y3RzIiwiaW1nIiwidGl0bGUiLCJwcmljZSIsInN0YXJzIiwiYXJjaGl2ZWQiLCJjb3VudCIsIm5hdmJhciIsIm5hdkNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImltZ0RpdiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJsaXN0IiwidWwiLCJpIiwibGVuZ3RoIiwiYSIsInNldEF0dHJpYnV0ZSIsImxpIiwiaW5uZXJIVE1MIiwiYXBwZW5kIiwiZGl2IiwiaW1nTGFuZyIsInNwYW4iLCJpbWdTZWFyY2giLCJpbWdCYXNrZXQiLCJhcHBlbmRDaGlsZCIsInJlbmRlciIsImFyY2hpdmVkQ29udGFpbmVyIiwiZm9yRWFjaCIsIml0ZW0iLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImNyZWF0ZVNsaWRlIiwiY29udGFpbmVyIiwicHJvZHVjdFRpdGxlIiwicHJvZHVjdFByaWNlIiwic3RhcnNJbWciLCJyZW5kZXJJdGVtcyIsInN3aXBlciIsIlN3aXBlciIsInNwZWVkIiwicGFyYWxsYXgiLCJwYWdpbmF0aW9uIiwiZWwiLCJjbGlja2FibGUiLCJzd2lwZXIxIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsInNsaWRlc1Blckdyb3VwIiwibG9vcCIsImxvb3BGaWxsR3JvdXBXaXRoQmxhbmsiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIl0sInNvdXJjZVJvb3QiOiIifQ==