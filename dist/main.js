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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/logo.png */ "./src/images/logo.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/arrow.png */ "./src/images/arrow.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/eng_flag.png */ "./src/images/eng_flag.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/search.png */ "./src/images/search.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/basket.png */ "./src/images/basket.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../images/background_1.png */ "./src/images/background_1.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../images/background_2.png */ "./src/images/background_2.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../images/scroll.png */ "./src/images/scroll.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../images/product.png */ "./src/images/product.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../images/dram.png */ "./src/images/dram.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../images/stars.png */ "./src/images/stars.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../images/whoWeAre.png */ "./src/images/whoWeAre.png"), __webpack_require__.b);
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    padding: 0;\n    margin:0;\n    font-family: 'Roboto';\n    font-style: normal;\n    box-sizing: border-box;\n    overflow-x: hidden;\n}\n\n.warning {\n    width: 100%;\n    height: 40px;\n    background: #3E3E3E;\n    color: #FFFFFF;\n    font-weight: 400;\n    font-size: 18px;\n    line-height: 21px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.navbar {\n    width: 90%;\n    height: 111px;\n    margin: 100px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    position: absolute;\n    z-index: 500000;\n}\n\n.logoImg {\n    width: 267px;\n    height: 111px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: contain;\n    background-repeat: no-repeat;\n}\n\nul {\n    display: flex;\n    width: 600px;\n    justify-content: center;\n}\nul li {\n  list-style-type: none;\n  font-family: Bebas Neue;\n  color: #FFFFFF;\n  cursor: pointer;\n  margin-left: 20px;\n  font-size: 20px;\n}\n\nul li::after {\n   content: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n   padding-left: 5px\n}\n\n.signinSearchLangWrapper {\n    width: 400px;\n    height: 100px;\n    display: flex;\n    align-items: center;\n}\n\n.imgLang {\n    width: 50px;\n    height: 36px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size: 36px 36px, 10px 5px;\n    background-repeat: no-repeat no-repeat;\n    background-position: 0% 0%, 100% 50%;\n}\n\n.signinText {\n    margin-left: 34px;\n    color: #FFFFFF;\n    line-height: 11px;\n    font-size: 20px;\n    cursor: pointer;\n}\n\n.signinText::after {\n    position: absolute;\n    content: '';\n    width: 40px;\n    height: 1px;\n    background-color: #5184E5;\n    margin-top: 20px;\n    margin-left: -72px\n}\n\n.imgSearch {\n    width: 29px;\n    height: 29px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-size: contain;\n    background-repeat: no-repeat;\n    margin-left: 30px;\n}\n\n.imgBasket {\n    width: 29px;\n    height: 29px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n    background-size: contain;\n    margin-left: 30px;\n    background-repeat: no-repeat;\n}\n\n.swiper-container-1 {\n    width: 100%;\n    height: 100vh;\n    position: relative;\n}\n\n\n.swiper-slide {\n    font-size: 18px;\n    color: #fff;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    padding: 40px 0px;\n}\n\n.parallax-bg {\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 100%;\n    -webkit-background-size: cover;\n    background-size: cover;\n    background-position: center;\n}\n\n.swiper-slide .title {\n    font-size: 21px;\n    font-weight: normal;\n    margin-top: 65vh;\n    padding-left: 60px\n}\n\n.swiper-slide .subtitle {\n    font-size: 44px;\n    font-weight: 700;\n    padding-left: 60px\n}\n\n.swiper-slide .text {\n    font-size: 14px;\n    max-width: 400px;\n    line-height: 1.3;\n}\n.swiper-pagination {\n    display: flex;\n    margin-left: 50px;\n    margin-bottom: 10vh;\n}\n\n.swiper-pagination-bullet {\n      width: 23px;\n      height: 23px;\n      background: #3E3E3E;\n      border: 0.5px solid #FFFFFF\n}\n\n.swiper-pagination-bullet-active {\n      background: #5184E5;\n      border: 0.5px solid #5184E5;\n}\n\n.slide1 {\n      background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n      background-size: cover;\n  }\n.slide2 {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n    background-size: cover;\n}\n\n.slide3 {\n    background: gray;\n}\n\n.secondSlideContent {\n    width: 557px;\n    margin-top: 40vh;\n    padding-left: 50px;\n}\n.secondSlideContent div:nth-child(1) {\n    width: 485px;\n    line-height: 40px;\n    font-size: 40px;\n}\n\n.secondSlideContent div:nth-child(2) {\n    width: 100%;\n    font-size: 24px;\n    font-weight: 200;\n    line-height: 24px;\n    opacity: 0.9;\n}\n\n.secondSlideContent div:nth-child(3) button{\n   width: 202px;\n   height: 54px;\n   color: #FFFFFF;\n   background: #5184E5;\n   border-radius: 15px;\n   outline: none;\n   border: none;\n   font-size: 18px;\n   text-transform: uppercase;\n   cursor: pointer;\n   margin-top: 20px;\n}\n\n.secondSlideContent div:nth-child(3) input{\n    width: 304px;\n    height: 54px;\n    background: #776868;\n    border-radius: 15px;\n    border: none;\n    margin-top: 20px\n }\n\n input::placeholder {\n    font-weight: 400;\n    font-size: 18px;\n    line-height: 21px;\n    color: #C1C1C1;\n    margin: 30px;\n }\n .scroll {\n     position: absolute;\n     width: 33px;\n     height: 82px;\n     margin-top: -100px;\n     z-index: 200000;\n     background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");\n     background-size: contain;\n     background-repeat: no-repeat;\n     cursor: pointer;\n     margin-left: 50%;\n }\n\n .swiper-container-2 {\n    width: 100%;\n    height: 673px;\n    position: relative;\n}\n\n.product {\n    height: 530px\n}\n\n.swiper-wrapper {\n    display: flex;\n    align-items: center;\n    width: 85%;\n}\n\n.our-products {\n    width: 95.5%;\n    height: 673px;\n    margin: auto;\n    margin-top: 100px\n}\n\n.product-title {\n    font-family: 'Bebas Neue';\n    font-style: normal;\n    font-weight: 700;\n    font-size: 30px;\n    line-height: 48px;\n    margin-left: 50px\n}\n\n.swiper-button-next, .swiper-button-prev {\n    width: 50px;\n    height: 50px;\n    color: #B3B3B3;\n}\n\n.slideImg {\n    width: 250px;\n    height: 350px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    margin: auto;\n}\n\n.second {\n    margin: auto;\n}\n\n.productTitle {\n    color: #4B4B4B;\n    font-size: 24px;\n    line-height: 10px;\n    margin-left: 25px;\n}\n\n.productPrice {\n    color: #4B4B4B;\n    font-size: 24px;\n    line-height: 10px;\n}\n\n.productPrice::before {\n    content: url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ");\n    width: 10px;\n    height: 10px;\n    margin: 0px 5px 0px 25px;\n}\n\n.starsImg {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ");\n    width: 88px;\n    height: 16px;\n    background-size: cover;\n    margin-left: 25px;\n}\n\n.about {\n  width: 91%;\n  margin: auto;\n}\n\n.aboutImg {\n    width: 50%;\n    height: 600px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ");\n    background-size: contain;\n    background-repeat: no-repeat\n}\n\n.aboutTitle {\n   color: #000000;\n   font-family: 'Bebas Neue';\n   font-size: 30px;\n   font-weight: 700;\n}\n.aboutWrapper {\n    width: 100%;\n    display: flex;\n    align-items: center;\n}\n.aboutContent {\n    width: 50%;\n    font-size: 28px;\n    padding-left: 50px;\n    color: #727272;\n}\n\na {\n    text-decoration: none;\n}\n\n.archived {\n    width: 88%;\n    margin: auto;\n    height: 379px;\n    background: red;\n    display: flex;\n    justify-content: space-around;\n    align-items: end;\n}\n\n.item {\n    width: 329px;\n    height: 279px;\n    background: gray;\n}\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"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","sourcesContent":["body {\n    padding: 0;\n    margin:0;\n    font-family: 'Roboto';\n    font-style: normal;\n    box-sizing: border-box;\n    overflow-x: hidden;\n}\n\n.warning {\n    width: 100%;\n    height: 40px;\n    background: #3E3E3E;\n    color: #FFFFFF;\n    font-weight: 400;\n    font-size: 18px;\n    line-height: 21px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.navbar {\n    width: 90%;\n    height: 111px;\n    margin: 100px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    position: absolute;\n    z-index: 500000;\n}\n\n.logoImg {\n    width: 267px;\n    height: 111px;\n    background-image: url('../images/logo.png');\n    background-size: contain;\n    background-repeat: no-repeat;\n}\n\nul {\n    display: flex;\n    width: 600px;\n    justify-content: center;\n}\nul li {\n  list-style-type: none;\n  font-family: Bebas Neue;\n  color: #FFFFFF;\n  cursor: pointer;\n  margin-left: 20px;\n  font-size: 20px;\n}\n\nul li::after {\n   content: url('../images/arrow.png');\n   padding-left: 5px\n}\n\n.signinSearchLangWrapper {\n    width: 400px;\n    height: 100px;\n    display: flex;\n    align-items: center;\n}\n\n.imgLang {\n    width: 50px;\n    height: 36px;\n    background-image: url('../images/eng_flag.png'), url('../images/arrow.png');\n    background-size: 36px 36px, 10px 5px;\n    background-repeat: no-repeat no-repeat;\n    background-position: 0% 0%, 100% 50%;\n}\n\n.signinText {\n    margin-left: 34px;\n    color: #FFFFFF;\n    line-height: 11px;\n    font-size: 20px;\n    cursor: pointer;\n}\n\n.signinText::after {\n    position: absolute;\n    content: '';\n    width: 40px;\n    height: 1px;\n    background-color: #5184E5;\n    margin-top: 20px;\n    margin-left: -72px\n}\n\n.imgSearch {\n    width: 29px;\n    height: 29px;\n    background-image: url('../images/search.png');\n    background-size: contain;\n    background-repeat: no-repeat;\n    margin-left: 30px;\n}\n\n.imgBasket {\n    width: 29px;\n    height: 29px;\n    background-image: url('../images/basket.png');\n    background-size: contain;\n    margin-left: 30px;\n    background-repeat: no-repeat;\n}\n\n.swiper-container-1 {\n    width: 100%;\n    height: 100vh;\n    position: relative;\n}\n\n\n.swiper-slide {\n    font-size: 18px;\n    color: #fff;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    padding: 40px 0px;\n}\n\n.parallax-bg {\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 100%;\n    -webkit-background-size: cover;\n    background-size: cover;\n    background-position: center;\n}\n\n.swiper-slide .title {\n    font-size: 21px;\n    font-weight: normal;\n    margin-top: 65vh;\n    padding-left: 60px\n}\n\n.swiper-slide .subtitle {\n    font-size: 44px;\n    font-weight: 700;\n    padding-left: 60px\n}\n\n.swiper-slide .text {\n    font-size: 14px;\n    max-width: 400px;\n    line-height: 1.3;\n}\n.swiper-pagination {\n    display: flex;\n    margin-left: 50px;\n    margin-bottom: 10vh;\n}\n\n.swiper-pagination-bullet {\n      width: 23px;\n      height: 23px;\n      background: #3E3E3E;\n      border: 0.5px solid #FFFFFF\n}\n\n.swiper-pagination-bullet-active {\n      background: #5184E5;\n      border: 0.5px solid #5184E5;\n}\n\n.slide1 {\n      background-image: url('../images/background_1.png');\n      background-size: cover;\n  }\n.slide2 {\n    background-image: url('../images/background_2.png');\n    background-size: cover;\n}\n\n.slide3 {\n    background: gray;\n}\n\n.secondSlideContent {\n    width: 557px;\n    margin-top: 40vh;\n    padding-left: 50px;\n}\n.secondSlideContent div:nth-child(1) {\n    width: 485px;\n    line-height: 40px;\n    font-size: 40px;\n}\n\n.secondSlideContent div:nth-child(2) {\n    width: 100%;\n    font-size: 24px;\n    font-weight: 200;\n    line-height: 24px;\n    opacity: 0.9;\n}\n\n.secondSlideContent div:nth-child(3) button{\n   width: 202px;\n   height: 54px;\n   color: #FFFFFF;\n   background: #5184E5;\n   border-radius: 15px;\n   outline: none;\n   border: none;\n   font-size: 18px;\n   text-transform: uppercase;\n   cursor: pointer;\n   margin-top: 20px;\n}\n\n.secondSlideContent div:nth-child(3) input{\n    width: 304px;\n    height: 54px;\n    background: #776868;\n    border-radius: 15px;\n    border: none;\n    margin-top: 20px\n }\n\n input::placeholder {\n    font-weight: 400;\n    font-size: 18px;\n    line-height: 21px;\n    color: #C1C1C1;\n    margin: 30px;\n }\n .scroll {\n     position: absolute;\n     width: 33px;\n     height: 82px;\n     margin-top: -100px;\n     z-index: 200000;\n     background-image: url('../images/scroll.png');\n     background-size: contain;\n     background-repeat: no-repeat;\n     cursor: pointer;\n     margin-left: 50%;\n }\n\n .swiper-container-2 {\n    width: 100%;\n    height: 673px;\n    position: relative;\n}\n\n.product {\n    height: 530px\n}\n\n.swiper-wrapper {\n    display: flex;\n    align-items: center;\n    width: 85%;\n}\n\n.our-products {\n    width: 95.5%;\n    height: 673px;\n    margin: auto;\n    margin-top: 100px\n}\n\n.product-title {\n    font-family: 'Bebas Neue';\n    font-style: normal;\n    font-weight: 700;\n    font-size: 30px;\n    line-height: 48px;\n    margin-left: 50px\n}\n\n.swiper-button-next, .swiper-button-prev {\n    width: 50px;\n    height: 50px;\n    color: #B3B3B3;\n}\n\n.slideImg {\n    width: 250px;\n    height: 350px;\n    background-image: url(../images/product.png);\n    background-size: cover;\n    background-repeat: no-repeat;\n    margin: auto;\n}\n\n.second {\n    margin: auto;\n}\n\n.productTitle {\n    color: #4B4B4B;\n    font-size: 24px;\n    line-height: 10px;\n    margin-left: 25px;\n}\n\n.productPrice {\n    color: #4B4B4B;\n    font-size: 24px;\n    line-height: 10px;\n}\n\n.productPrice::before {\n    content: url('../images/dram.png');\n    width: 10px;\n    height: 10px;\n    margin: 0px 5px 0px 25px;\n}\n\n.starsImg {\n    background-image: url(../images/stars.png);\n    width: 88px;\n    height: 16px;\n    background-size: cover;\n    margin-left: 25px;\n}\n\n.about {\n  width: 91%;\n  margin: auto;\n}\n\n.aboutImg {\n    width: 50%;\n    height: 600px;\n    background-image: url(../images/whoWeAre.png);\n    background-size: contain;\n    background-repeat: no-repeat\n}\n\n.aboutTitle {\n   color: #000000;\n   font-family: 'Bebas Neue';\n   font-size: 30px;\n   font-weight: 700;\n}\n.aboutWrapper {\n    width: 100%;\n    display: flex;\n    align-items: center;\n}\n.aboutContent {\n    width: 50%;\n    font-size: 28px;\n    padding-left: 50px;\n    color: #727272;\n}\n\na {\n    text-decoration: none;\n}\n\n.archived {\n    width: 88%;\n    margin: auto;\n    height: 379px;\n    background: red;\n    display: flex;\n    justify-content: space-around;\n    align-items: end;\n}\n\n.item {\n    width: 329px;\n    height: 279px;\n    background: gray;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/images/product.png":
/*!********************************!*\
  !*** ./src/images/product.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e334b08c6d80f71426b6.png";

/***/ }),

/***/ "./src/images/scroll.png":
/*!*******************************!*\
  !*** ./src/images/scroll.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb4a0e7d7e3ffd72fe6f.png";

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
});
(0,_components_navbar__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_components_renderItems__WEBPACK_IMPORTED_MODULE_4__["default"])(_components_assets_constant__WEBPACK_IMPORTED_MODULE_2__.data.archived);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXVCLEdBQUcsV0FBVyxtQkFBbUIsb0JBQW9CLHVCQUF1QixHQUFHLFNBQVMsb0ZBQW9GLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGdDQUFnQyxpQkFBaUIsZUFBZSw0QkFBNEIseUJBQXlCLDZCQUE2Qix5QkFBeUIsR0FBRyxjQUFjLGtCQUFrQixtQkFBbUIsMEJBQTBCLHFCQUFxQix1QkFBdUIsc0JBQXNCLHdCQUF3QixvQkFBb0IsOEJBQThCLDBCQUEwQixHQUFHLGFBQWEsaUJBQWlCLG9CQUFvQixvQkFBb0Isb0JBQW9CLHFDQUFxQywwQkFBMEIseUJBQXlCLHNCQUFzQixHQUFHLGNBQWMsbUJBQW1CLG9CQUFvQixrREFBa0QsK0JBQStCLG1DQUFtQyxHQUFHLFFBQVEsb0JBQW9CLG1CQUFtQiw4QkFBOEIsR0FBRyxTQUFTLDBCQUEwQiw0QkFBNEIsbUJBQW1CLG9CQUFvQixzQkFBc0Isb0JBQW9CLEdBQUcsa0JBQWtCLHlDQUF5Qyx5QkFBeUIsOEJBQThCLG1CQUFtQixvQkFBb0Isb0JBQW9CLDBCQUEwQixHQUFHLGNBQWMsa0JBQWtCLG1CQUFtQixrRkFBa0YsMkNBQTJDLDZDQUE2QywyQ0FBMkMsR0FBRyxpQkFBaUIsd0JBQXdCLHFCQUFxQix3QkFBd0Isc0JBQXNCLHNCQUFzQixHQUFHLHdCQUF3Qix5QkFBeUIsa0JBQWtCLGtCQUFrQixrQkFBa0IsZ0NBQWdDLHVCQUF1QiwyQkFBMkIsZ0JBQWdCLGtCQUFrQixtQkFBbUIsb0RBQW9ELCtCQUErQixtQ0FBbUMsd0JBQXdCLEdBQUcsZ0JBQWdCLGtCQUFrQixtQkFBbUIsb0RBQW9ELCtCQUErQix3QkFBd0IsbUNBQW1DLEdBQUcseUJBQXlCLGtCQUFrQixvQkFBb0IseUJBQXlCLEdBQUcscUJBQXFCLHNCQUFzQixrQkFBa0IscUNBQXFDLDZCQUE2Qix3QkFBd0IsR0FBRyxrQkFBa0IseUJBQXlCLGNBQWMsYUFBYSxtQkFBbUIscUNBQXFDLDZCQUE2QixrQ0FBa0MsR0FBRywwQkFBMEIsc0JBQXNCLDBCQUEwQix1QkFBdUIsMkJBQTJCLDZCQUE2QixzQkFBc0IsdUJBQXVCLDJCQUEyQix5QkFBeUIsc0JBQXNCLHVCQUF1Qix1QkFBdUIsR0FBRyxzQkFBc0Isb0JBQW9CLHdCQUF3QiwwQkFBMEIsR0FBRywrQkFBK0Isb0JBQW9CLHFCQUFxQiw0QkFBNEIsc0NBQXNDLHNDQUFzQyw0QkFBNEIsb0NBQW9DLEdBQUcsYUFBYSw0REFBNEQsK0JBQStCLEtBQUssV0FBVywwREFBMEQsNkJBQTZCLEdBQUcsYUFBYSx1QkFBdUIsR0FBRyx5QkFBeUIsbUJBQW1CLHVCQUF1Qix5QkFBeUIsR0FBRyx3Q0FBd0MsbUJBQW1CLHdCQUF3QixzQkFBc0IsR0FBRywwQ0FBMEMsa0JBQWtCLHNCQUFzQix1QkFBdUIsd0JBQXdCLG1CQUFtQixHQUFHLGdEQUFnRCxrQkFBa0Isa0JBQWtCLG9CQUFvQix5QkFBeUIseUJBQXlCLG1CQUFtQixrQkFBa0IscUJBQXFCLCtCQUErQixxQkFBcUIsc0JBQXNCLEdBQUcsK0NBQStDLG1CQUFtQixtQkFBbUIsMEJBQTBCLDBCQUEwQixtQkFBbUIsMEJBQTBCLHlCQUF5Qix1QkFBdUIsc0JBQXNCLHdCQUF3QixxQkFBcUIsbUJBQW1CLElBQUksWUFBWSwwQkFBMEIsbUJBQW1CLG9CQUFvQiwwQkFBMEIsdUJBQXVCLHFEQUFxRCxnQ0FBZ0Msb0NBQW9DLHVCQUF1Qix3QkFBd0IsSUFBSSwwQkFBMEIsa0JBQWtCLG9CQUFvQix5QkFBeUIsR0FBRyxjQUFjLHNCQUFzQixxQkFBcUIsb0JBQW9CLDBCQUEwQixpQkFBaUIsR0FBRyxtQkFBbUIsbUJBQW1CLG9CQUFvQixtQkFBbUIsMEJBQTBCLG9CQUFvQixnQ0FBZ0MseUJBQXlCLHVCQUF1QixzQkFBc0Isd0JBQXdCLDBCQUEwQiw4Q0FBOEMsa0JBQWtCLG1CQUFtQixxQkFBcUIsR0FBRyxlQUFlLG1CQUFtQixvQkFBb0IsbURBQW1ELDZCQUE2QixtQ0FBbUMsbUJBQW1CLEdBQUcsYUFBYSxtQkFBbUIsR0FBRyxtQkFBbUIscUJBQXFCLHNCQUFzQix3QkFBd0Isd0JBQXdCLEdBQUcsbUJBQW1CLHFCQUFxQixzQkFBc0Isd0JBQXdCLEdBQUcsMkJBQTJCLHlDQUF5QyxrQkFBa0IsbUJBQW1CLCtCQUErQixHQUFHLGVBQWUsaURBQWlELGtCQUFrQixtQkFBbUIsNkJBQTZCLHdCQUF3QixHQUFHLFlBQVksZUFBZSxpQkFBaUIsR0FBRyxlQUFlLGlCQUFpQixvQkFBb0Isb0RBQW9ELCtCQUErQixxQ0FBcUMsaUJBQWlCLG9CQUFvQiwrQkFBK0IscUJBQXFCLHNCQUFzQixHQUFHLGlCQUFpQixrQkFBa0Isb0JBQW9CLDBCQUEwQixHQUFHLGlCQUFpQixpQkFBaUIsc0JBQXNCLHlCQUF5QixxQkFBcUIsR0FBRyxPQUFPLDRCQUE0QixHQUFHLGVBQWUsaUJBQWlCLG1CQUFtQixvQkFBb0Isc0JBQXNCLG9CQUFvQixvQ0FBb0MsdUJBQXVCLEdBQUcsV0FBVyxtQkFBbUIsb0JBQW9CLHVCQUF1QixHQUFHLHFCQUFxQjtBQUM1K2hCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDaEMxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0RBQW9EOztBQUVwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM1QmE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUFzRztBQUN0RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSWdEO0FBQ3hFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlNLE1BQU0sR0FBRyxJQUFJQyxNQUFKLENBQVcscUJBQVgsRUFBa0M7RUFDM0NDLEtBQUssRUFBRSxHQURvQztFQUUzQ0MsUUFBUSxFQUFFLElBRmlDO0VBRzNDQyxVQUFVLEVBQUU7SUFDVkMsRUFBRSxFQUFFLG9CQURNO0lBRVZDLFNBQVMsRUFBRTtFQUZEO0FBSCtCLENBQWxDLENBQWI7QUFRRVosOERBQVcsQ0FBQ3BDLHNFQUFELENBQVg7QUFDQSxJQUFJaUQsT0FBTyxHQUFHLElBQUlOLE1BQUosQ0FBVyxxQkFBWCxFQUFrQztFQUM5Q08sYUFBYSxFQUFFLENBRCtCO0VBRTlDQyxZQUFZLEVBQUUsRUFGZ0M7RUFHOUNDLGNBQWMsRUFBRSxDQUg4QjtFQUk5Q0MsSUFBSSxFQUFFLElBSndDO0VBSzlDO0VBQ0FDLHNCQUFzQixFQUFFLElBTnNCO0VBTzlDQyxVQUFVLEVBQUU7SUFDVkMsTUFBTSxFQUFFLHFCQURFO0lBRVZDLE1BQU0sRUFBRTtFQUZFO0FBUGtDLENBQWxDLENBQWQ7QUFjRmpELDhEQUFNO0FBQ05pQyxtRUFBVyxDQUFDekMsc0VBQUQsQ0FBWCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2l0cGxleC8uL3NyYy9qcy9jb21wb25lbnRzL2Fzc2V0cy9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly93aXRwbGV4Ly4vc3JjL2pzL2NvbXBvbmVudHMvbmF2YmFyLmpzIiwid2VicGFjazovL3dpdHBsZXgvLi9zcmMvanMvY29tcG9uZW50cy9yZW5kZXJJdGVtcy5qcyIsIndlYnBhY2s6Ly93aXRwbGV4Ly4vc3JjL2pzL2NvbXBvbmVudHMvc2xpZGVzLmpzIiwid2VicGFjazovL3dpdHBsZXgvLi9zcmMvY3NzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly93aXRwbGV4Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93aXRwbGV4Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93aXRwbGV4Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2l0cGxleC8uL3NyYy9jc3MvaW5kZXguY3NzP2Y3ZWEiLCJ3ZWJwYWNrOi8vd2l0cGxleC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93aXRwbGV4Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93aXRwbGV4Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dpdHBsZXgvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2l0cGxleC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dpdHBsZXgvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93aXRwbGV4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dpdHBsZXgvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2l0cGxleC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2l0cGxleC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dpdHBsZXgvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93aXRwbGV4L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2l0cGxleC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93aXRwbGV4L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dpdHBsZXgvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dpdHBsZXgvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY29uc3QgZGF0YT17XG4gICAgcHJvZHVjdHM6W1xuICAgIHtcbiAgICAgICAgaW1nOiAncHJvZHVjdCcsXG4gICAgICAgIHRpdGxlOiAnRUxGIEJBUiBSRiA3MDAnLFxuICAgICAgICBwcmljZTogNzAwMCxcbiAgICAgICAgc3RhcnM6ICdzdGFycydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW1nOiAncHJvZHVjdCcsXG4gICAgICAgIHRpdGxlOiAnRUxGIEJBUiBSRiA2MDAnLFxuICAgICAgICBwcmljZTogNjAwMCxcbiAgICAgICAgc3RhcnM6ICdzdGFycydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW1nOiAncHJvZHVjdCcsXG4gICAgICAgIHRpdGxlOiAnRUxGIEJBUiBSRiA1MDAnLFxuICAgICAgICBwcmljZTogNTAwMCxcbiAgICAgICAgc3RhcnM6ICdzdGFycydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW1nOiAncHJvZHVjdCcsXG4gICAgICAgIHRpdGxlOiAnRUxGIEJBUiBSRiA0MDAnLFxuICAgICAgICBwcmljZTogNDAwMCxcbiAgICAgICAgc3RhcnM6ICdzdGFycydcbiAgICB9XG5dLFxuICAgIGFyY2hpdmVkOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGltZzogJ3ZhcGVzdGVyJyxcbiAgICAgICAgICAgIHRpdGxlOiAnVkFQRVNURVJTJyxcbiAgICAgICAgICAgIGNvdW50OiAxNTY1LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpbWc6ICdjaWdhcmV0dGUnLFxuICAgICAgICAgICAgdGl0bGU6ICdDSUdBUkVUVEVTIFNBVkVEJyxcbiAgICAgICAgICAgIGNvdW50OiA3NTgsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGltZzogJ2ZsYXZvcicsXG4gICAgICAgICAgICB0aXRsZTogJ1BSRS1NQURFIEZMQVZPUlMnLFxuICAgICAgICAgICAgY291bnQ6IDI5ODMsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGltZzogJ2NvbWJvJyxcbiAgICAgICAgICAgIHRpdGxlOiAnQ1VTVE9NIENPTUJPUycsXG4gICAgICAgICAgICBjb3VudDogMTI0LFxuXG4gICAgICAgIH1cbiAgICBdXG59IiwiXG5mdW5jdGlvbiBuYXZiYXIoKSB7XG4gICAgY29uc3QgbmF2Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcicpO1xuICAgIC8vY3JlYXRlIGltYWdlIHBhcnRcbiAgICBjb25zdCBpbWdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWdEaXYuY2xhc3NOYW1lID0gJ2xvZ29JbWcnO1xuICAgIC8vIGNyZWF0ZSB1bFxuICAgIGNvbnN0IGxpc3Q9WydORVcnLCdPVVIgUFJPRFVDVFMnLCAnQlJBTkRTJ107XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGZvciAobGV0IGk9MDsgaTxsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGEuc2V0QXR0cmlidXRlKCdocmVmJywgJy4vcHJvZHVjdC5odG1sJyk7XG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpLmlubmVySFRNTD1saXN0W2ldXG4gICAgICAgIGEuYXBwZW5kKGxpKTtcbiAgICAgICAgdWwuYXBwZW5kKGEpXG4gICAgfVxuXG4gICAgLy9jcmVhdGUgc2VhcmNoIHBhcnRcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NOYW1lPSdzaWduaW5TZWFyY2hMYW5nV3JhcHBlcic7XG4gICAgY29uc3QgaW1nTGFuZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltZ0xhbmcuY2xhc3NOYW1lPSdpbWdMYW5nJztcbiAgICBkaXYuYXBwZW5kKGltZ0xhbmcpO1xuXG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzcGFuLmNsYXNzTmFtZT0nc2lnbmluVGV4dCdcbiAgICBzcGFuLmlubmVySFRNTD0nU0lHTiBJTidcbiAgICBkaXYuYXBwZW5kKHNwYW4pO1xuXG4gICAgY29uc3QgaW1nU2VhcmNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1nU2VhcmNoLmNsYXNzTmFtZT0naW1nU2VhcmNoJztcbiAgICBkaXYuYXBwZW5kKGltZ1NlYXJjaCk7XG4gICAgY29uc3QgaW1nQmFza2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1nQmFza2V0LmNsYXNzTmFtZT0naW1nQmFza2V0JztcbiAgICBkaXYuYXBwZW5kKGltZ0Jhc2tldCk7XG5cblxuICAgIG5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWdEaXYpO1xuICAgIG5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZCh1bCk7XG4gICAgbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG5cbiAgICByZXR1cm4gbmF2Q29udGFpbmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBuYXZiYXI7XG4iLCJcblxuZnVuY3Rpb24gcmVuZGVyIChkYXRhKSB7XG4gICBjb25zdCBhcmNoaXZlZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcmNoaXZlZCcpO1xuXG4gICBkYXRhLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkaXYuY2xhc3NOYW1lID0gJ2l0ZW0nO1xuICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBpbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCguLi8uLi9pbWFnZXMvdmFwZXN0ZXIucG5nKWBcbiAgICAgIGRpdi5hcHBlbmQoaW1nKTtcbiAgICAgIGFyY2hpdmVkQ29udGFpbmVyLmFwcGVuZChkaXYpO1xuICAgfSk7XG5cbiAgIHJldHVybiBhcmNoaXZlZENvbnRhaW5lcjtcblxufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXI7XG4iLCJcblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVNsaWRlIChkYXRhKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY29uZCcpO1xuICAgIGRhdGEuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5jbGFzc05hbWUgPSBcInN3aXBlci1zbGlkZSBwcm9kdWN0XCI7XG4gICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpbWcuY2xhc3NOYW1lID0gJ3NsaWRlSW1nJztcbiAgICAgICAgY29uc3QgcHJvZHVjdFRpdGxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcHJvZHVjdFRpdGxlLmNsYXNzTmFtZSA9ICdwcm9kdWN0VGl0bGUnO1xuICAgICAgICBwcm9kdWN0VGl0bGUuaW5uZXJIVE1MPWl0ZW0udGl0bGU7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RQcmljZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHByb2R1Y3RQcmljZS5jbGFzc05hbWU9J3Byb2R1Y3RQcmljZSc7XG4gICAgICAgIHByb2R1Y3RQcmljZS5pbm5lckhUTUw9aXRlbS5wcmljZTtcbiAgICAgICAgY29uc3Qgc3RhcnNJbWc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgc3RhcnNJbWcuY2xhc3NOYW1lPSdzdGFyc0ltZyc7XG5cbiAgICAgICAgZGl2LmFwcGVuZChpbWcpO1xuICAgICAgICBkaXYuYXBwZW5kKHByb2R1Y3RUaXRsZSk7XG4gICAgICAgIGRpdi5hcHBlbmQocHJvZHVjdFByaWNlKTtcbiAgICAgICAgZGl2LmFwcGVuZChzdGFyc0ltZyk7XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChkaXYpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTbGlkZTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2xvZ28ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2Fycm93LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9lbmdfZmxhZy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvc2VhcmNoLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9iYXNrZXQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2JhY2tncm91bmRfMS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvYmFja2dyb3VuZF8yLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9zY3JvbGwucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzhfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3Byb2R1Y3QucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzlfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2RyYW0ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9zdGFycy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTFfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3dob1dlQXJlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzhfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzlfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF85X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzExX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46MDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLndhcm5pbmcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjM0UzRTNFO1xcbiAgICBjb2xvcjogI0ZGRkZGRjtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBsaW5lLWhlaWdodDogMjFweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBoZWlnaHQ6IDExMXB4O1xcbiAgICBtYXJnaW46IDEwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogNTAwMDAwO1xcbn1cXG5cXG4ubG9nb0ltZyB7XFxuICAgIHdpZHRoOiAyNjdweDtcXG4gICAgaGVpZ2h0OiAxMTFweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG51bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbnVsIGxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBCZWJhcyBOZXVlO1xcbiAgY29sb3I6ICNGRkZGRkY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxudWwgbGk6OmFmdGVyIHtcXG4gICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgIHBhZGRpbmctbGVmdDogNXB4XFxufVxcblxcbi5zaWduaW5TZWFyY2hMYW5nV3JhcHBlciB7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmltZ0xhbmcge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiAzNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDM2cHggMzZweCwgMTBweCA1cHg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAwJSwgMTAwJSA1MCU7XFxufVxcblxcbi5zaWduaW5UZXh0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDM0cHg7XFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICBsaW5lLWhlaWdodDogMTFweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaWduaW5UZXh0OjphZnRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUxODRFNTtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC03MnB4XFxufVxcblxcbi5pbWdTZWFyY2gge1xcbiAgICB3aWR0aDogMjlweDtcXG4gICAgaGVpZ2h0OiAyOXB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbn1cXG5cXG4uaW1nQmFza2V0IHtcXG4gICAgd2lkdGg6IDI5cHg7XFxuICAgIGhlaWdodDogMjlweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLnN3aXBlci1jb250YWluZXItMSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcblxcbi5zd2lwZXItc2xpZGUge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDQwcHggMHB4O1xcbn1cXG5cXG4ucGFyYWxsYXgtYmcge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuXFxuLnN3aXBlci1zbGlkZSAudGl0bGUge1xcbiAgICBmb250LXNpemU6IDIxcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIG1hcmdpbi10b3A6IDY1dmg7XFxuICAgIHBhZGRpbmctbGVmdDogNjBweFxcbn1cXG5cXG4uc3dpcGVyLXNsaWRlIC5zdWJ0aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogNDRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4XFxufVxcblxcbi5zd2lwZXItc2xpZGUgLnRleHQge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XFxufVxcbi5zd2lwZXItcGFnaW5hdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHZoO1xcbn1cXG5cXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcXG4gICAgICB3aWR0aDogMjNweDtcXG4gICAgICBoZWlnaHQ6IDIzcHg7XFxuICAgICAgYmFja2dyb3VuZDogIzNFM0UzRTtcXG4gICAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNGRkZGRkZcXG59XFxuXFxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xcbiAgICAgIGJhY2tncm91bmQ6ICM1MTg0RTU7XFxuICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjNTE4NEU1O1xcbn1cXG5cXG4uc2xpZGUxIHtcXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpO1xcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICB9XFxuLnNsaWRlMiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5zbGlkZTMge1xcbiAgICBiYWNrZ3JvdW5kOiBncmF5O1xcbn1cXG5cXG4uc2Vjb25kU2xpZGVDb250ZW50IHtcXG4gICAgd2lkdGg6IDU1N3B4O1xcbiAgICBtYXJnaW4tdG9wOiA0MHZoO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxufVxcbi5zZWNvbmRTbGlkZUNvbnRlbnQgZGl2Om50aC1jaGlsZCgxKSB7XFxuICAgIHdpZHRoOiA0ODVweDtcXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLnNlY29uZFNsaWRlQ29udGVudCBkaXY6bnRoLWNoaWxkKDIpIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG59XFxuXFxuLnNlY29uZFNsaWRlQ29udGVudCBkaXY6bnRoLWNoaWxkKDMpIGJ1dHRvbntcXG4gICB3aWR0aDogMjAycHg7XFxuICAgaGVpZ2h0OiA1NHB4O1xcbiAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgIGJhY2tncm91bmQ6ICM1MTg0RTU7XFxuICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICBvdXRsaW5lOiBub25lO1xcbiAgIGJvcmRlcjogbm9uZTtcXG4gICBmb250LXNpemU6IDE4cHg7XFxuICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLnNlY29uZFNsaWRlQ29udGVudCBkaXY6bnRoLWNoaWxkKDMpIGlucHV0e1xcbiAgICB3aWR0aDogMzA0cHg7XFxuICAgIGhlaWdodDogNTRweDtcXG4gICAgYmFja2dyb3VuZDogIzc3Njg2ODtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4XFxuIH1cXG5cXG4gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBsaW5lLWhlaWdodDogMjFweDtcXG4gICAgY29sb3I6ICNDMUMxQzE7XFxuICAgIG1hcmdpbjogMzBweDtcXG4gfVxcbiAuc2Nyb2xsIHtcXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgIHdpZHRoOiAzM3B4O1xcbiAgICAgaGVpZ2h0OiA4MnB4O1xcbiAgICAgbWFyZ2luLXRvcDogLTEwMHB4O1xcbiAgICAgei1pbmRleDogMjAwMDAwO1xcbiAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fXyArIFwiKTtcXG4gICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICBtYXJnaW4tbGVmdDogNTAlO1xcbiB9XFxuXFxuIC5zd2lwZXItY29udGFpbmVyLTIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA2NzNweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucHJvZHVjdCB7XFxuICAgIGhlaWdodDogNTMwcHhcXG59XFxuXFxuLnN3aXBlci13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDg1JTtcXG59XFxuXFxuLm91ci1wcm9kdWN0cyB7XFxuICAgIHdpZHRoOiA5NS41JTtcXG4gICAgaGVpZ2h0OiA2NzNweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweFxcbn1cXG5cXG4ucHJvZHVjdC10aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQmViYXMgTmV1ZSc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBsaW5lLWhlaWdodDogNDhweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHhcXG59XFxuXFxuLnN3aXBlci1idXR0b24tbmV4dCwgLnN3aXBlci1idXR0b24tcHJldiB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGNvbG9yOiAjQjNCM0IzO1xcbn1cXG5cXG4uc2xpZGVJbWcge1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogMzUwcHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLnNlY29uZCB7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLnByb2R1Y3RUaXRsZSB7XFxuICAgIGNvbG9yOiAjNEI0QjRCO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcXG59XFxuXFxuLnByb2R1Y3RQcmljZSB7XFxuICAgIGNvbG9yOiAjNEI0QjRCO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xcbn1cXG5cXG4ucHJvZHVjdFByaWNlOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19fICsgXCIpO1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBtYXJnaW46IDBweCA1cHggMHB4IDI1cHg7XFxufVxcblxcbi5zdGFyc0ltZyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEwX19fICsgXCIpO1xcbiAgICB3aWR0aDogODhweDtcXG4gICAgaGVpZ2h0OiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcXG59XFxuXFxuLmFib3V0IHtcXG4gIHdpZHRoOiA5MSU7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5hYm91dEltZyB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzExX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXRcXG59XFxuXFxuLmFib3V0VGl0bGUge1xcbiAgIGNvbG9yOiAjMDAwMDAwO1xcbiAgIGZvbnQtZmFtaWx5OiAnQmViYXMgTmV1ZSc7XFxuICAgZm9udC1zaXplOiAzMHB4O1xcbiAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5hYm91dFdyYXBwZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmFib3V0Q29udGVudCB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbiAgICBjb2xvcjogIzcyNzI3MjtcXG59XFxuXFxuYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmFyY2hpdmVkIHtcXG4gICAgd2lkdGg6IDg4JTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBoZWlnaHQ6IDM3OXB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcbn1cXG5cXG4uaXRlbSB7XFxuICAgIHdpZHRoOiAzMjlweDtcXG4gICAgaGVpZ2h0OiAyNzlweDtcXG4gICAgYmFja2dyb3VuZDogZ3JheTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxVQUFVO0lBQ1YsUUFBUTtJQUNSLHFC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RSxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYiwwREFBNkM7SUFDN0Msd0JBQXdCO0lBQ3hCO0FBQ0o7O0FBRUE7R0FDRyxjQUFjO0dBQ2QseUJBQXlCO0dBQ3pCLGVBQWU7R0FDZixnQkFBZ0I7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjowO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4ud2FybmluZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJhY2tncm91bmQ6ICMzRTNFM0U7XFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5hdmJhciB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGhlaWdodDogMTExcHg7XFxuICAgIG1hcmdpbjogMTAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiA1MDAwMDA7XFxufVxcblxcbi5sb2dvSW1nIHtcXG4gICAgd2lkdGg6IDI2N3B4O1xcbiAgICBoZWlnaHQ6IDExMXB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9sb2dvLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbnVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxudWwgbGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IEJlYmFzIE5ldWU7XFxuICBjb2xvcjogI0ZGRkZGRjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG51bCBsaTo6YWZ0ZXIge1xcbiAgIGNvbnRlbnQ6IHVybCgnLi4vaW1hZ2VzL2Fycm93LnBuZycpO1xcbiAgIHBhZGRpbmctbGVmdDogNXB4XFxufVxcblxcbi5zaWduaW5TZWFyY2hMYW5nV3JhcHBlciB7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmltZ0xhbmcge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiAzNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9lbmdfZmxhZy5wbmcnKSwgdXJsKCcuLi9pbWFnZXMvYXJyb3cucG5nJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMzZweCAzNnB4LCAxMHB4IDVweDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDAlLCAxMDAlIDUwJTtcXG59XFxuXFxuLnNpZ25pblRleHQge1xcbiAgICBtYXJnaW4tbGVmdDogMzRweDtcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxuICAgIGxpbmUtaGVpZ2h0OiAxMXB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNpZ25pblRleHQ6OmFmdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE4NEU1O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogLTcycHhcXG59XFxuXFxuLmltZ1NlYXJjaCB7XFxuICAgIHdpZHRoOiAyOXB4O1xcbiAgICBoZWlnaHQ6IDI5cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL3NlYXJjaC5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXG59XFxuXFxuLmltZ0Jhc2tldCB7XFxuICAgIHdpZHRoOiAyOXB4O1xcbiAgICBoZWlnaHQ6IDI5cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2Jhc2tldC5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLnN3aXBlci1jb250YWluZXItMSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcblxcbi5zd2lwZXItc2xpZGUge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDQwcHggMHB4O1xcbn1cXG5cXG4ucGFyYWxsYXgtYmcge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuXFxuLnN3aXBlci1zbGlkZSAudGl0bGUge1xcbiAgICBmb250LXNpemU6IDIxcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIG1hcmdpbi10b3A6IDY1dmg7XFxuICAgIHBhZGRpbmctbGVmdDogNjBweFxcbn1cXG5cXG4uc3dpcGVyLXNsaWRlIC5zdWJ0aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogNDRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4XFxufVxcblxcbi5zd2lwZXItc2xpZGUgLnRleHQge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XFxufVxcbi5zd2lwZXItcGFnaW5hdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHZoO1xcbn1cXG5cXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcXG4gICAgICB3aWR0aDogMjNweDtcXG4gICAgICBoZWlnaHQ6IDIzcHg7XFxuICAgICAgYmFja2dyb3VuZDogIzNFM0UzRTtcXG4gICAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNGRkZGRkZcXG59XFxuXFxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xcbiAgICAgIGJhY2tncm91bmQ6ICM1MTg0RTU7XFxuICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjNTE4NEU1O1xcbn1cXG5cXG4uc2xpZGUxIHtcXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9iYWNrZ3JvdW5kXzEucG5nJyk7XFxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIH1cXG4uc2xpZGUyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvYmFja2dyb3VuZF8yLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uc2xpZGUzIHtcXG4gICAgYmFja2dyb3VuZDogZ3JheTtcXG59XFxuXFxuLnNlY29uZFNsaWRlQ29udGVudCB7XFxuICAgIHdpZHRoOiA1NTdweDtcXG4gICAgbWFyZ2luLXRvcDogNDB2aDtcXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbn1cXG4uc2Vjb25kU2xpZGVDb250ZW50IGRpdjpudGgtY2hpbGQoMSkge1xcbiAgICB3aWR0aDogNDg1cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi5zZWNvbmRTbGlkZUNvbnRlbnQgZGl2Om50aC1jaGlsZCgyKSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgICBvcGFjaXR5OiAwLjk7XFxufVxcblxcbi5zZWNvbmRTbGlkZUNvbnRlbnQgZGl2Om50aC1jaGlsZCgzKSBidXR0b257XFxuICAgd2lkdGg6IDIwMnB4O1xcbiAgIGhlaWdodDogNTRweDtcXG4gICBjb2xvcjogI0ZGRkZGRjtcXG4gICBiYWNrZ3JvdW5kOiAjNTE4NEU1O1xcbiAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgb3V0bGluZTogbm9uZTtcXG4gICBib3JkZXI6IG5vbmU7XFxuICAgZm9udC1zaXplOiAxOHB4O1xcbiAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5zZWNvbmRTbGlkZUNvbnRlbnQgZGl2Om50aC1jaGlsZCgzKSBpbnB1dHtcXG4gICAgd2lkdGg6IDMwNHB4O1xcbiAgICBoZWlnaHQ6IDU0cHg7XFxuICAgIGJhY2tncm91bmQ6ICM3NzY4Njg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luLXRvcDogMjBweFxcbiB9XFxuXFxuIGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XFxuICAgIGNvbG9yOiAjQzFDMUMxO1xcbiAgICBtYXJnaW46IDMwcHg7XFxuIH1cXG4gLnNjcm9sbCB7XFxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICB3aWR0aDogMzNweDtcXG4gICAgIGhlaWdodDogODJweDtcXG4gICAgIG1hcmdpbi10b3A6IC0xMDBweDtcXG4gICAgIHotaW5kZXg6IDIwMDAwMDtcXG4gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL3Njcm9sbC5wbmcnKTtcXG4gICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICBtYXJnaW4tbGVmdDogNTAlO1xcbiB9XFxuXFxuIC5zd2lwZXItY29udGFpbmVyLTIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA2NzNweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucHJvZHVjdCB7XFxuICAgIGhlaWdodDogNTMwcHhcXG59XFxuXFxuLnN3aXBlci13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDg1JTtcXG59XFxuXFxuLm91ci1wcm9kdWN0cyB7XFxuICAgIHdpZHRoOiA5NS41JTtcXG4gICAgaGVpZ2h0OiA2NzNweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweFxcbn1cXG5cXG4ucHJvZHVjdC10aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQmViYXMgTmV1ZSc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBsaW5lLWhlaWdodDogNDhweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHhcXG59XFxuXFxuLnN3aXBlci1idXR0b24tbmV4dCwgLnN3aXBlci1idXR0b24tcHJldiB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGNvbG9yOiAjQjNCM0IzO1xcbn1cXG5cXG4uc2xpZGVJbWcge1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogMzUwcHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWFnZXMvcHJvZHVjdC5wbmcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5zZWNvbmQge1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5wcm9kdWN0VGl0bGUge1xcbiAgICBjb2xvcjogIzRCNEI0QjtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBsaW5lLWhlaWdodDogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XFxufVxcblxcbi5wcm9kdWN0UHJpY2Uge1xcbiAgICBjb2xvcjogIzRCNEI0QjtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBsaW5lLWhlaWdodDogMTBweDtcXG59XFxuXFxuLnByb2R1Y3RQcmljZTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogdXJsKCcuLi9pbWFnZXMvZHJhbS5wbmcnKTtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgbWFyZ2luOiAwcHggNXB4IDBweCAyNXB4O1xcbn1cXG5cXG4uc3RhcnNJbWcge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1hZ2VzL3N0YXJzLnBuZyk7XFxuICAgIHdpZHRoOiA4OHB4O1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xcbn1cXG5cXG4uYWJvdXQge1xcbiAgd2lkdGg6IDkxJTtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmFib3V0SW1nIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiA2MDBweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltYWdlcy93aG9XZUFyZS5wbmcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXRcXG59XFxuXFxuLmFib3V0VGl0bGUge1xcbiAgIGNvbG9yOiAjMDAwMDAwO1xcbiAgIGZvbnQtZmFtaWx5OiAnQmViYXMgTmV1ZSc7XFxuICAgZm9udC1zaXplOiAzMHB4O1xcbiAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5hYm91dFdyYXBwZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmFib3V0Q29udGVudCB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbiAgICBjb2xvcjogIzcyNzI3MjtcXG59XFxuXFxuYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmFyY2hpdmVkIHtcXG4gICAgd2lkdGg6IDg4JTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBoZWlnaHQ6IDM3OXB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcbn1cXG5cXG4uaXRlbSB7XFxuICAgIHdpZHRoOiAzMjlweDtcXG4gICAgaGVpZ2h0OiAyNzlweDtcXG4gICAgYmFja2dyb3VuZDogZ3JheTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4uL2Nzcy9pbmRleC5jc3MnO1xuaW1wb3J0IG5hdmJhciBmcm9tICcuL2NvbXBvbmVudHMvbmF2YmFyJztcbmltcG9ydCB7ZGF0YX0gZnJvbSAnLi9jb21wb25lbnRzL2Fzc2V0cy9jb25zdGFudCc7XG5pbXBvcnQgY3JlYXRlU2xpZGUgZnJvbSAnLi9jb21wb25lbnRzL3NsaWRlcyc7XG5pbXBvcnQgcmVuZGVySXRlbXMgZnJvbSAnLi9jb21wb25lbnRzL3JlbmRlckl0ZW1zJztcbmltcG9ydCAnLi4vaW1hZ2VzL3dob1dlQXJlLnBuZydcblxudmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoXCIuc3dpcGVyLWNvbnRhaW5lci0xXCIsIHtcbiAgICBzcGVlZDogNjAwLFxuICAgIHBhcmFsbGF4OiB0cnVlLFxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgIGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvblwiLFxuICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgfSxcbiAgfSk7XG4gIGNyZWF0ZVNsaWRlKGRhdGEucHJvZHVjdHMpO1xuICB2YXIgc3dpcGVyMSA9IG5ldyBTd2lwZXIoXCIuc3dpcGVyLWNvbnRhaW5lci0yXCIsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiA1LFxuICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgc2xpZGVzUGVyR3JvdXA6IDUsXG4gICAgbG9vcDogdHJ1ZSxcbiAgICAvLyBtb3VzZXdoZWVsOiB0cnVlLFxuICAgIGxvb3BGaWxsR3JvdXBXaXRoQmxhbms6IHRydWUsXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgbmV4dEVsOiBcIi5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICAgIHByZXZFbDogXCIuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXG4gICAgfSxcbiAgfSk7XG5cblxubmF2YmFyKCk7XG5yZW5kZXJJdGVtcyhkYXRhLmFyY2hpdmVkKTtcbiJdLCJuYW1lcyI6WyJkYXRhIiwicHJvZHVjdHMiLCJpbWciLCJ0aXRsZSIsInByaWNlIiwic3RhcnMiLCJhcmNoaXZlZCIsImNvdW50IiwibmF2YmFyIiwibmF2Q29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW1nRGl2IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImxpc3QiLCJ1bCIsImkiLCJsZW5ndGgiLCJhIiwic2V0QXR0cmlidXRlIiwibGkiLCJpbm5lckhUTUwiLCJhcHBlbmQiLCJkaXYiLCJpbWdMYW5nIiwic3BhbiIsImltZ1NlYXJjaCIsImltZ0Jhc2tldCIsImFwcGVuZENoaWxkIiwicmVuZGVyIiwiYXJjaGl2ZWRDb250YWluZXIiLCJmb3JFYWNoIiwiaXRlbSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiY3JlYXRlU2xpZGUiLCJjb250YWluZXIiLCJwcm9kdWN0VGl0bGUiLCJwcm9kdWN0UHJpY2UiLCJzdGFyc0ltZyIsInJlbmRlckl0ZW1zIiwic3dpcGVyIiwiU3dpcGVyIiwic3BlZWQiLCJwYXJhbGxheCIsInBhZ2luYXRpb24iLCJlbCIsImNsaWNrYWJsZSIsInN3aXBlcjEiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwic2xpZGVzUGVyR3JvdXAiLCJsb29wIiwibG9vcEZpbGxHcm91cFdpdGhCbGFuayIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiXSwic291cmNlUm9vdCI6IiJ9