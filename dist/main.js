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
function navbar(screen) {
  var navContainer = document.querySelector('.navbar');
  navContainer.innerHTML = '';

  if (screen < 1280) {
    navContainer.innerHTML = "\n        <div class='navbarWrapper'>\n            <div class='menu-icon'></div>\n            <div class='menu-logo'></div>\n            <div class='signinText'>SIGN IN</div>\n        </div>\n        <div class='navbarContent'>\n            <div>NEW</div>\n            <div>OUR PRODUCTS</div>\n            <div>BRANDS</div>\n        </div>\n        <div class='menu-icons-mobile'>\n            <div class='imgBasket'></div>\n            <div class='imgSearch'></div>\n            <div class='imgLangMobile'></div>\n        </div>\n        ";
    var menu = document.querySelector('.menu-icon');
    var nav = document.querySelector('.navbar');
    var logo = document.querySelector('.menu-logo');
    var text = document.querySelector('.signinText');
    var navContent = document.querySelector('.navbarContent');
    var icons = document.querySelector('.menu-icons-mobile');
    menu.addEventListener('click', function () {
      menu.classList.toggle('menuOpen');
      nav.classList.toggle('menuOpen');
      logo.classList.toggle('menuOpen');
      text.classList.toggle('menuOpen');
      navContent.classList.toggle('menuOpen');
      icons.classList.toggle('menuOpen');
    });
  } else {
    //create image part
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
  }

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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/black_arrow.png */ "./src/images/black_arrow.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/white_menu.png */ "./src/images/white_menu.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/blue_menu.png */ "./src/images/blue_menu.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/black_basket.png */ "./src/images/black_basket.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/black_search.png */ "./src/images/black_search.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../images/eng_flag.png */ "./src/images/eng_flag.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../images/white_logo.png */ "./src/images/white_logo.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../images/black_logo.png */ "./src/images/black_logo.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../images/logo.png */ "./src/images/logo.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../images/arrow.png */ "./src/images/arrow.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../images/search.png */ "./src/images/search.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../images/basket.png */ "./src/images/basket.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../images/background_1.png */ "./src/images/background_1.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ../images/background_2.png */ "./src/images/background_2.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ../images/mobile_scroll.png */ "./src/images/mobile_scroll.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ../images/product.png */ "./src/images/product.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ../images/dram.png */ "./src/images/dram.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ../images/stars.png */ "./src/images/stars.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ../images/whoWeAre.png */ "./src/images/whoWeAre.png"), __webpack_require__.b);
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
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_14___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_15___);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_16___);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_17___);
var ___CSS_LOADER_URL_REPLACEMENT_18___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_18___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n    padding: 0;\r\n    margin:0;\r\n    font-family: 'Roboto';\r\n    font-style: normal;\r\n    box-sizing: border-box;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.warning {\r\n    width: 100%;\r\n    height: 118px;\r\n    background: #3E3E3E;\r\n    color: #FFFFFF;\r\n    font-weight: 400;\r\n    font-size: 18px;\r\n    line-height: 21px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-end;\r\n    text-align: center;\r\n}\r\n\r\n.warning span {\r\n    width: 287px;\r\n    height: 63px;\r\n}\r\n\r\n.navbar {\r\n    width: 84%;\r\n    height: 60px;\r\n    margin: 30px;\r\n    position: absolute;\r\n    z-index: 500000;\r\n    display: flex;\r\n    flex-direction: column;\r\n    transition: all 1s linear;\r\n}\r\n.navbarContent {\r\n     display: none;\r\n     margin: auto;\r\n }\r\n\r\n .navbarWrapper {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n }\r\n\r\n .navbarContent div {\r\n     width: 100%;\r\n     color: #000000;\r\n     display: flex;\r\n     align-items: center;\r\n     height: 50px;\r\n     font-weight: bold;\r\n     background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n     background-repeat: no-repeat;\r\n     background-position: 100% 50%;\r\n     cursor: pointer;\r\n }\r\n\r\n.navbarContent.menuOpen {\r\n    display: block;\r\n    width: 90%;\r\n    height: 100px;\r\n    margin-top: 120px;\r\n}\r\n.navbar.menuOpen {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background-color:  #E5E5E5;\r\n    margin: 0;\r\n    align-items: flex-start;\r\n    /* padding: 30px; */\r\n    transition: height 1s linear;\r\n}\r\n\r\n.menu-icon {\r\n    width: 44px;\r\n    height: 44px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    cursor: pointer\r\n}\r\n\r\n.menu-icon.menuOpen {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n    margin: 30px;\r\n} \r\n\r\n.menu-icons-mobile {\r\n  display: none;  \r\n  margin: auto\r\n}\r\n\r\n.menu-icons-mobile .imgBasket {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n}\r\n\r\n.menu-icons-mobile .imgSearch {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n    margin-left: 0px;\r\n}\r\n.imgLangMobile {\r\n    width: 50px;\r\n    height: 36px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.menu-icons-mobile.menuOpen {\r\n    margin-top: 100px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: 300px;\r\n    height: 100px;\r\n}\r\n\r\n.menu-logo {\r\n    width: 154px;\r\n    height: 64px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    margin-left: 5px;\r\n}\r\n\r\n.menu-logo.menuOpen {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");\r\n}\r\n\r\n.signinText.menuOpen {\r\n    opacity: 0;\r\n}\r\n\r\n.logoImg {\r\n    width: 267px;\r\n    height: 111px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ");\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\nul {\r\n    display: flex;\r\n    width: 600px;\r\n    justify-content: center;\r\n    align-items: flex-end;\r\n}\r\nul li {\r\n  list-style-type: none;\r\n  font-family: Bebas Neue;\r\n  color: #FFFFFF;\r\n  cursor: pointer;\r\n  margin-left: 20px;\r\n  font-size: 20px;\r\n}\r\n\r\nul li::after {\r\n   content: url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ");\r\n   padding-left: 5px\r\n}\r\n\r\n.signinSearchLangWrapper {\r\n    width: 400px;\r\n    height: 100px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.imgLang {\r\n    width: 50px;\r\n    height: 36px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ");\r\n    background-size: 36px 36px, 10px 5px;\r\n    background-repeat: no-repeat no-repeat;\r\n    background-position: 0% 0%, 100% 50%;\r\n}\r\n\r\n.signinText {\r\n    color: #FFFFFF;\r\n    line-height: 11px;\r\n    font-size: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.signinText::after {\r\n    position: absolute;\r\n    content: '';\r\n    width: 40px;\r\n    height: 1px;\r\n    background-color: #5184E5;\r\n    margin-top: 20px;\r\n    margin-left: -72px\r\n}\r\n\r\n.imgSearch {\r\n    width: 29px;\r\n    height: 29px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ");\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    margin-left: 30px;\r\n}\r\n\r\n.imgBasket {\r\n    width: 29px;\r\n    height: 29px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ");\r\n    background-size: contain;\r\n    margin-left: 30px;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.swiper-container-1 {\r\n    width: 100%;\r\n    height: 100vh;\r\n    position: relative;\r\n}\r\n\r\n\r\n.swiper-slide {\r\n    font-size: 18px;\r\n    color: #fff;\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    padding: 40px 0px;\r\n}\r\n\r\n.parallax-bg {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    height: 100%;\r\n    -webkit-background-size: cover;\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n.swiper-slide .title {\r\n    font-size: 30px;\r\n    font-weight: normal;\r\n    margin-top: 256px;\r\n    text-align: center;\r\n}\r\n\r\n.swiper-slide .subtitle {\r\n    font-size: 50px;\r\n    font-weight: 700;\r\n    text-align: center;\r\n    width: 193px;\r\n    margin: auto;\r\n    line-height: -5px;\r\n}\r\n\r\n.swiper-slide .text {\r\n    font-size: 14px;\r\n    max-width: 400px;\r\n    line-height: 1.3;\r\n}\r\n.swiper-pagination {\r\n    display: flex;\r\n    margin-left: 50px;\r\n    margin-bottom: 10vh;\r\n}\r\n\r\n.swiper-pagination-bullet {\r\n      width: 23px;\r\n      height: 23px;\r\n      background: #3E3E3E;\r\n      border: 0.5px solid #FFFFFF\r\n}\r\n\r\n.swiper-pagination-bullet-active {\r\n      background: #5184E5;\r\n      border: 0.5px solid #5184E5;\r\n}\r\n\r\n.slide1 {\r\n      background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ");\r\n      background-size: cover;\r\n      background-repeat: no-repeat;\r\n      background-position: 45% 40% ;\r\n  }\r\n.slide2 {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ");\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: 55% 40% ;\r\n}\r\n\r\n.slide3 {\r\n    background: gray;\r\n}\r\n\r\n.secondSlideContent {\r\n    width: 331px;\r\n    margin: 188px auto;\r\n}\r\n.secondSlideContent div:nth-child(1) {\r\n    width: 100%;\r\n    line-height: 40px;\r\n    font-size: 30px;\r\n}\r\n\r\n.secondSlideContent div:nth-child(2) {\r\n    width: 100%;\r\n    font-size: 22px;\r\n    font-weight: 200;\r\n    line-height: 24px;\r\n    opacity: 1;\r\n    text-align: center;\r\n}\r\n\r\n.secondSlideContent div:nth-child(3) button{\r\n   width: 100%;\r\n   height: 54px;\r\n   color: #FFFFFF;\r\n   background: #5184E5;\r\n   border-radius: 15px;\r\n   outline: none;\r\n   border: none;\r\n   font-size: 18px;\r\n   text-transform: uppercase;\r\n   cursor: pointer;\r\n   margin-top: 20px;\r\n}\r\n\r\n.secondSlideContent div:nth-child(3) input{\r\n    width: 100%;\r\n    height: 54px;\r\n    background: #776868;\r\n    border-radius: 15px;\r\n    border: none;\r\n    margin-top: 20px\r\n }\r\n\r\n input::placeholder {\r\n    font-weight: 400;\r\n    font-size: 18px;\r\n    line-height: 21px;\r\n    color: #C1C1C1;\r\n    margin: 30px;\r\n }\r\n .scroll {\r\n     position: absolute;\r\n     width: 14px;\r\n     height: 15px;\r\n     margin-top: -100px;\r\n     z-index: 200000;\r\n     background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ");\r\n     background-size: contain;\r\n     background-repeat: no-repeat;\r\n     cursor: pointer;\r\n     margin-left: 50%;\r\n     animation: scroll 1.5s infinite linear;\r\n }\r\n\r\n @keyframes scroll {\r\n     from {\r\n         margin-top: -100px;\r\n     }\r\n\r\n     to {\r\n        margin-top: -50px;\r\n     }\r\n }\r\n\r\n .swiper-container-2 {\r\n    width: 100%;\r\n    height: 673px;\r\n    position: relative;\r\n}\r\n\r\n.product {\r\n    height: 530px\r\n}\r\n\r\n.swiper-wrapper {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 85%;\r\n}\r\n\r\n.our-products {\r\n    width: 95.5%;\r\n    height: 673px;\r\n    margin: auto;\r\n    margin-top: 100px\r\n}\r\n\r\n.product-title {\r\n    font-family: 'Bebas Neue';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 30px;\r\n    line-height: 48px;\r\n    margin-left: 50px\r\n}\r\n\r\n.swiper-button-next, .swiper-button-prev {\r\n    width: 50px;\r\n    height: 50px;\r\n    color: #B3B3B3;\r\n}\r\n\r\n.slideImg {\r\n    width: 250px;\r\n    height: 350px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + ");\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    margin: auto;\r\n}\r\n\r\n.second {\r\n    margin: auto;\r\n}\r\n\r\n.productTitle {\r\n    color: #4B4B4B;\r\n    font-size: 24px;\r\n    line-height: 10px;\r\n    margin-left: 25px;\r\n}\r\n\r\n.productPrice {\r\n    color: #4B4B4B;\r\n    font-size: 24px;\r\n    line-height: 10px;\r\n}\r\n\r\n.productPrice::before {\r\n    content: url(" + ___CSS_LOADER_URL_REPLACEMENT_16___ + ");\r\n    width: 10px;\r\n    height: 10px;\r\n    margin: 0px 5px 0px 25px;\r\n}\r\n\r\n.starsImg {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_17___ + ");\r\n    width: 88px;\r\n    height: 16px;\r\n    background-size: cover;\r\n    margin-left: 25px;\r\n}\r\n\r\n.about {\r\n  width: 91%;\r\n  margin: auto;\r\n}\r\n\r\n.aboutImg {\r\n    width: 50%;\r\n    height: 600px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_18___ + ");\r\n    background-size: contain;\r\n    background-repeat: no-repeat\r\n}\r\n\r\n.aboutTitle {\r\n   color: #000000;\r\n   font-family: 'Bebas Neue';\r\n   font-size: 30px;\r\n   font-weight: 700;\r\n}\r\n.aboutWrapper {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.aboutContent {\r\n    width: 50%;\r\n    font-size: 28px;\r\n    padding-left: 50px;\r\n    color: #727272;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\n.archived {\r\n    width: 88%;\r\n    margin: auto;\r\n    height: 379px;\r\n    background: red;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: end;\r\n}\r\n\r\n.item {\r\n    width: 329px;\r\n    height: 279px;\r\n    background: gray;\r\n}\r\n\r\n\r\n@media only screen and (min-width: 1280px) {\r\n    .navbar {\r\n        flex-direction: row;\r\n    }\r\n    .warning {\r\n       height: 40px;\r\n    }\r\n\r\n    .secondSlideContent {\r\n        width: 557px;\r\n        margin-top: 40vh;\r\n        padding-left: 50px;\r\n    }\r\n\r\n    .secondSlideContent div:nth-child(1) {\r\n        width: 485px;\r\n        line-height: 40px;\r\n        font-size: 40px;\r\n    }\r\n\r\n    \r\n    .secondSlideContent div:nth-child(2) {\r\n        width: 100%;\r\n        font-size: 22px;\r\n        font-weight: 200;\r\n        line-height: 24px;\r\n        opacity: 0.9;\r\n        text-align: center;\r\n    }\r\n\r\n    .secondSlideContent div:nth-child(3) button{\r\n    width: 202px;\r\n    }\r\n    .secondSlideContent div:nth-child(3) input{\r\n        width: 304px;\r\n    }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"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","sourcesContent":["body {\r\n    padding: 0;\r\n    margin:0;\r\n    font-family: 'Roboto';\r\n    font-style: normal;\r\n    box-sizing: border-box;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.warning {\r\n    width: 100%;\r\n    height: 118px;\r\n    background: #3E3E3E;\r\n    color: #FFFFFF;\r\n    font-weight: 400;\r\n    font-size: 18px;\r\n    line-height: 21px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-end;\r\n    text-align: center;\r\n}\r\n\r\n.warning span {\r\n    width: 287px;\r\n    height: 63px;\r\n}\r\n\r\n.navbar {\r\n    width: 84%;\r\n    height: 60px;\r\n    margin: 30px;\r\n    position: absolute;\r\n    z-index: 500000;\r\n    display: flex;\r\n    flex-direction: column;\r\n    transition: all 1s linear;\r\n}\r\n.navbarContent {\r\n     display: none;\r\n     margin: auto;\r\n }\r\n\r\n .navbarWrapper {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n }\r\n\r\n .navbarContent div {\r\n     width: 100%;\r\n     color: #000000;\r\n     display: flex;\r\n     align-items: center;\r\n     height: 50px;\r\n     font-weight: bold;\r\n     background-image: url('../images/black_arrow.png');\r\n     background-repeat: no-repeat;\r\n     background-position: 100% 50%;\r\n     cursor: pointer;\r\n }\r\n\r\n.navbarContent.menuOpen {\r\n    display: block;\r\n    width: 90%;\r\n    height: 100px;\r\n    margin-top: 120px;\r\n}\r\n.navbar.menuOpen {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background-color:  #E5E5E5;\r\n    margin: 0;\r\n    align-items: flex-start;\r\n    /* padding: 30px; */\r\n    transition: height 1s linear;\r\n}\r\n\r\n.menu-icon {\r\n    width: 44px;\r\n    height: 44px;\r\n    background-image: url('../images/white_menu.png');\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    cursor: pointer\r\n}\r\n\r\n.menu-icon.menuOpen {\r\n    background-image: url('../images/blue_menu.png');\r\n    margin: 30px;\r\n} \r\n\r\n.menu-icons-mobile {\r\n  display: none;  \r\n  margin: auto\r\n}\r\n\r\n.menu-icons-mobile .imgBasket {\r\n    background-image: url('../images/black_basket.png');\r\n}\r\n\r\n.menu-icons-mobile .imgSearch {\r\n    background-image: url('../images/black_search.png');\r\n    margin-left: 0px;\r\n}\r\n.imgLangMobile {\r\n    width: 50px;\r\n    height: 36px;\r\n    background-image: url('../images/eng_flag.png');\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.menu-icons-mobile.menuOpen {\r\n    margin-top: 100px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: 300px;\r\n    height: 100px;\r\n}\r\n\r\n.menu-logo {\r\n    width: 154px;\r\n    height: 64px;\r\n    background-image: url('../images/white_logo.png');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    margin-left: 5px;\r\n}\r\n\r\n.menu-logo.menuOpen {\r\n    background-image: url('../images/black_logo.png');\r\n}\r\n\r\n.signinText.menuOpen {\r\n    opacity: 0;\r\n}\r\n\r\n.logoImg {\r\n    width: 267px;\r\n    height: 111px;\r\n    background-image: url('../images/logo.png');\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\nul {\r\n    display: flex;\r\n    width: 600px;\r\n    justify-content: center;\r\n    align-items: flex-end;\r\n}\r\nul li {\r\n  list-style-type: none;\r\n  font-family: Bebas Neue;\r\n  color: #FFFFFF;\r\n  cursor: pointer;\r\n  margin-left: 20px;\r\n  font-size: 20px;\r\n}\r\n\r\nul li::after {\r\n   content: url('../images/arrow.png');\r\n   padding-left: 5px\r\n}\r\n\r\n.signinSearchLangWrapper {\r\n    width: 400px;\r\n    height: 100px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.imgLang {\r\n    width: 50px;\r\n    height: 36px;\r\n    background-image: url('../images/eng_flag.png'), url('../images/arrow.png');\r\n    background-size: 36px 36px, 10px 5px;\r\n    background-repeat: no-repeat no-repeat;\r\n    background-position: 0% 0%, 100% 50%;\r\n}\r\n\r\n.signinText {\r\n    color: #FFFFFF;\r\n    line-height: 11px;\r\n    font-size: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.signinText::after {\r\n    position: absolute;\r\n    content: '';\r\n    width: 40px;\r\n    height: 1px;\r\n    background-color: #5184E5;\r\n    margin-top: 20px;\r\n    margin-left: -72px\r\n}\r\n\r\n.imgSearch {\r\n    width: 29px;\r\n    height: 29px;\r\n    background-image: url('../images/search.png');\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    margin-left: 30px;\r\n}\r\n\r\n.imgBasket {\r\n    width: 29px;\r\n    height: 29px;\r\n    background-image: url('../images/basket.png');\r\n    background-size: contain;\r\n    margin-left: 30px;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.swiper-container-1 {\r\n    width: 100%;\r\n    height: 100vh;\r\n    position: relative;\r\n}\r\n\r\n\r\n.swiper-slide {\r\n    font-size: 18px;\r\n    color: #fff;\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    padding: 40px 0px;\r\n}\r\n\r\n.parallax-bg {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    height: 100%;\r\n    -webkit-background-size: cover;\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n.swiper-slide .title {\r\n    font-size: 30px;\r\n    font-weight: normal;\r\n    margin-top: 256px;\r\n    text-align: center;\r\n}\r\n\r\n.swiper-slide .subtitle {\r\n    font-size: 50px;\r\n    font-weight: 700;\r\n    text-align: center;\r\n    width: 193px;\r\n    margin: auto;\r\n    line-height: -5px;\r\n}\r\n\r\n.swiper-slide .text {\r\n    font-size: 14px;\r\n    max-width: 400px;\r\n    line-height: 1.3;\r\n}\r\n.swiper-pagination {\r\n    display: flex;\r\n    margin-left: 50px;\r\n    margin-bottom: 10vh;\r\n}\r\n\r\n.swiper-pagination-bullet {\r\n      width: 23px;\r\n      height: 23px;\r\n      background: #3E3E3E;\r\n      border: 0.5px solid #FFFFFF\r\n}\r\n\r\n.swiper-pagination-bullet-active {\r\n      background: #5184E5;\r\n      border: 0.5px solid #5184E5;\r\n}\r\n\r\n.slide1 {\r\n      background-image: url('../images/background_1.png');\r\n      background-size: cover;\r\n      background-repeat: no-repeat;\r\n      background-position: 45% 40% ;\r\n  }\r\n.slide2 {\r\n    background-image: url('../images/background_2.png');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: 55% 40% ;\r\n}\r\n\r\n.slide3 {\r\n    background: gray;\r\n}\r\n\r\n.secondSlideContent {\r\n    width: 331px;\r\n    margin: 188px auto;\r\n}\r\n.secondSlideContent div:nth-child(1) {\r\n    width: 100%;\r\n    line-height: 40px;\r\n    font-size: 30px;\r\n}\r\n\r\n.secondSlideContent div:nth-child(2) {\r\n    width: 100%;\r\n    font-size: 22px;\r\n    font-weight: 200;\r\n    line-height: 24px;\r\n    opacity: 1;\r\n    text-align: center;\r\n}\r\n\r\n.secondSlideContent div:nth-child(3) button{\r\n   width: 100%;\r\n   height: 54px;\r\n   color: #FFFFFF;\r\n   background: #5184E5;\r\n   border-radius: 15px;\r\n   outline: none;\r\n   border: none;\r\n   font-size: 18px;\r\n   text-transform: uppercase;\r\n   cursor: pointer;\r\n   margin-top: 20px;\r\n}\r\n\r\n.secondSlideContent div:nth-child(3) input{\r\n    width: 100%;\r\n    height: 54px;\r\n    background: #776868;\r\n    border-radius: 15px;\r\n    border: none;\r\n    margin-top: 20px\r\n }\r\n\r\n input::placeholder {\r\n    font-weight: 400;\r\n    font-size: 18px;\r\n    line-height: 21px;\r\n    color: #C1C1C1;\r\n    margin: 30px;\r\n }\r\n .scroll {\r\n     position: absolute;\r\n     width: 14px;\r\n     height: 15px;\r\n     margin-top: -100px;\r\n     z-index: 200000;\r\n     background-image: url('../images/mobile_scroll.png');\r\n     background-size: contain;\r\n     background-repeat: no-repeat;\r\n     cursor: pointer;\r\n     margin-left: 50%;\r\n     animation: scroll 1.5s infinite linear;\r\n }\r\n\r\n @keyframes scroll {\r\n     from {\r\n         margin-top: -100px;\r\n     }\r\n\r\n     to {\r\n        margin-top: -50px;\r\n     }\r\n }\r\n\r\n .swiper-container-2 {\r\n    width: 100%;\r\n    height: 673px;\r\n    position: relative;\r\n}\r\n\r\n.product {\r\n    height: 530px\r\n}\r\n\r\n.swiper-wrapper {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 85%;\r\n}\r\n\r\n.our-products {\r\n    width: 95.5%;\r\n    height: 673px;\r\n    margin: auto;\r\n    margin-top: 100px\r\n}\r\n\r\n.product-title {\r\n    font-family: 'Bebas Neue';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 30px;\r\n    line-height: 48px;\r\n    margin-left: 50px\r\n}\r\n\r\n.swiper-button-next, .swiper-button-prev {\r\n    width: 50px;\r\n    height: 50px;\r\n    color: #B3B3B3;\r\n}\r\n\r\n.slideImg {\r\n    width: 250px;\r\n    height: 350px;\r\n    background-image: url(../images/product.png);\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    margin: auto;\r\n}\r\n\r\n.second {\r\n    margin: auto;\r\n}\r\n\r\n.productTitle {\r\n    color: #4B4B4B;\r\n    font-size: 24px;\r\n    line-height: 10px;\r\n    margin-left: 25px;\r\n}\r\n\r\n.productPrice {\r\n    color: #4B4B4B;\r\n    font-size: 24px;\r\n    line-height: 10px;\r\n}\r\n\r\n.productPrice::before {\r\n    content: url('../images/dram.png');\r\n    width: 10px;\r\n    height: 10px;\r\n    margin: 0px 5px 0px 25px;\r\n}\r\n\r\n.starsImg {\r\n    background-image: url(../images/stars.png);\r\n    width: 88px;\r\n    height: 16px;\r\n    background-size: cover;\r\n    margin-left: 25px;\r\n}\r\n\r\n.about {\r\n  width: 91%;\r\n  margin: auto;\r\n}\r\n\r\n.aboutImg {\r\n    width: 50%;\r\n    height: 600px;\r\n    background-image: url(../images/whoWeAre.png);\r\n    background-size: contain;\r\n    background-repeat: no-repeat\r\n}\r\n\r\n.aboutTitle {\r\n   color: #000000;\r\n   font-family: 'Bebas Neue';\r\n   font-size: 30px;\r\n   font-weight: 700;\r\n}\r\n.aboutWrapper {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.aboutContent {\r\n    width: 50%;\r\n    font-size: 28px;\r\n    padding-left: 50px;\r\n    color: #727272;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\n.archived {\r\n    width: 88%;\r\n    margin: auto;\r\n    height: 379px;\r\n    background: red;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: end;\r\n}\r\n\r\n.item {\r\n    width: 329px;\r\n    height: 279px;\r\n    background: gray;\r\n}\r\n\r\n\r\n@media only screen and (min-width: 1280px) {\r\n    .navbar {\r\n        flex-direction: row;\r\n    }\r\n    .warning {\r\n       height: 40px;\r\n    }\r\n\r\n    .secondSlideContent {\r\n        width: 557px;\r\n        margin-top: 40vh;\r\n        padding-left: 50px;\r\n    }\r\n\r\n    .secondSlideContent div:nth-child(1) {\r\n        width: 485px;\r\n        line-height: 40px;\r\n        font-size: 40px;\r\n    }\r\n\r\n    \r\n    .secondSlideContent div:nth-child(2) {\r\n        width: 100%;\r\n        font-size: 22px;\r\n        font-weight: 200;\r\n        line-height: 24px;\r\n        opacity: 0.9;\r\n        text-align: center;\r\n    }\r\n\r\n    .secondSlideContent div:nth-child(3) button{\r\n    width: 202px;\r\n    }\r\n    .secondSlideContent div:nth-child(3) input{\r\n        width: 304px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/images/black_arrow.png":
/*!************************************!*\
  !*** ./src/images/black_arrow.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ac96c0980ab74d74091f.png";

/***/ }),

/***/ "./src/images/black_basket.png":
/*!*************************************!*\
  !*** ./src/images/black_basket.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eb6eb61e5a130c1b2779.png";

/***/ }),

/***/ "./src/images/black_logo.png":
/*!***********************************!*\
  !*** ./src/images/black_logo.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c4ce7b9a2d854565260b.png";

/***/ }),

/***/ "./src/images/black_search.png":
/*!*************************************!*\
  !*** ./src/images/black_search.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "54e945374af162acb48a.png";

/***/ }),

/***/ "./src/images/blue_menu.png":
/*!**********************************!*\
  !*** ./src/images/blue_menu.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eaa058df794dcf90bb7b.png";

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
});
(0,_components_navbar__WEBPACK_IMPORTED_MODULE_1__["default"])(window.innerWidth);
window.addEventListener('resize', function () {
  (0,_components_navbar__WEBPACK_IMPORTED_MODULE_1__["default"])(window.innerWidth);
});
(0,_components_renderItems__WEBPACK_IMPORTED_MODULE_4__["default"])(_components_assets_constant__WEBPACK_IMPORTED_MODULE_2__.data.archived);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFFBQVEsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSwrQkFBK0IsbUJBQW1CLGlCQUFpQiw4QkFBOEIsMkJBQTJCLCtCQUErQiwyQkFBMkIsS0FBSyxrQkFBa0Isb0JBQW9CLHNCQUFzQiw0QkFBNEIsdUJBQXVCLHlCQUF5Qix3QkFBd0IsMEJBQTBCLHNCQUFzQixnQ0FBZ0MsOEJBQThCLDJCQUEyQixLQUFLLHVCQUF1QixxQkFBcUIscUJBQXFCLEtBQUssaUJBQWlCLG1CQUFtQixxQkFBcUIscUJBQXFCLDJCQUEyQix3QkFBd0Isc0JBQXNCLCtCQUErQixrQ0FBa0MsS0FBSyxvQkFBb0IsdUJBQXVCLHNCQUFzQixNQUFNLHlCQUF5QixvQkFBb0Isc0JBQXNCLHVDQUF1Qyw0QkFBNEIsTUFBTSw2QkFBNkIscUJBQXFCLHdCQUF3Qix1QkFBdUIsNkJBQTZCLHNCQUFzQiwyQkFBMkIsNERBQTRELHNDQUFzQyx1Q0FBdUMseUJBQXlCLE1BQU0saUNBQWlDLHVCQUF1QixtQkFBbUIsc0JBQXNCLDBCQUEwQixLQUFLLHNCQUFzQixvQkFBb0Isc0JBQXNCLG1DQUFtQyxrQkFBa0IsZ0NBQWdDLDBCQUEwQix1Q0FBdUMsS0FBSyxvQkFBb0Isb0JBQW9CLHFCQUFxQiwwREFBMEQsaUNBQWlDLHFDQUFxQyw0QkFBNEIsNkJBQTZCLHlEQUF5RCxxQkFBcUIsTUFBTSw0QkFBNEIsc0JBQXNCLHVCQUF1Qix1Q0FBdUMsNERBQTRELEtBQUssdUNBQXVDLDREQUE0RCx5QkFBeUIsS0FBSyxvQkFBb0Isb0JBQW9CLHFCQUFxQix3REFBd0QscUNBQXFDLEtBQUsscUNBQXFDLDBCQUEwQixzQkFBc0IsdUNBQXVDLDRCQUE0QixxQkFBcUIsc0JBQXNCLEtBQUssb0JBQW9CLHFCQUFxQixxQkFBcUIsMERBQTBELCtCQUErQixxQ0FBcUMseUJBQXlCLEtBQUssNkJBQTZCLDBEQUEwRCxLQUFLLDhCQUE4QixtQkFBbUIsS0FBSyxrQkFBa0IscUJBQXFCLHNCQUFzQixvREFBb0QsaUNBQWlDLHFDQUFxQyxLQUFLLFlBQVksc0JBQXNCLHFCQUFxQixnQ0FBZ0MsOEJBQThCLEtBQUssV0FBVyw0QkFBNEIsOEJBQThCLHFCQUFxQixzQkFBc0Isd0JBQXdCLHNCQUFzQixLQUFLLHNCQUFzQiwyQ0FBMkMsNkJBQTZCLGtDQUFrQyxxQkFBcUIsc0JBQXNCLHNCQUFzQiw0QkFBNEIsS0FBSyxrQkFBa0Isb0JBQW9CLHFCQUFxQixvRkFBb0YsNkNBQTZDLCtDQUErQyw2Q0FBNkMsS0FBSyxxQkFBcUIsdUJBQXVCLDBCQUEwQix3QkFBd0Isd0JBQXdCLEtBQUssNEJBQTRCLDJCQUEyQixvQkFBb0Isb0JBQW9CLG9CQUFvQixrQ0FBa0MseUJBQXlCLCtCQUErQixvQkFBb0Isb0JBQW9CLHFCQUFxQixzREFBc0QsaUNBQWlDLHFDQUFxQywwQkFBMEIsS0FBSyxvQkFBb0Isb0JBQW9CLHFCQUFxQixzREFBc0QsaUNBQWlDLDBCQUEwQixxQ0FBcUMsS0FBSyw2QkFBNkIsb0JBQW9CLHNCQUFzQiwyQkFBMkIsS0FBSywyQkFBMkIsd0JBQXdCLG9CQUFvQix1Q0FBdUMsK0JBQStCLDBCQUEwQixLQUFLLHNCQUFzQiwyQkFBMkIsZ0JBQWdCLGVBQWUscUJBQXFCLHVDQUF1QywrQkFBK0Isb0NBQW9DLEtBQUssOEJBQThCLHdCQUF3Qiw0QkFBNEIsMEJBQTBCLDJCQUEyQixLQUFLLGlDQUFpQyx3QkFBd0IseUJBQXlCLDJCQUEyQixxQkFBcUIscUJBQXFCLDBCQUEwQixLQUFLLDZCQUE2Qix3QkFBd0IseUJBQXlCLHlCQUF5QixLQUFLLHdCQUF3QixzQkFBc0IsMEJBQTBCLDRCQUE0QixLQUFLLG1DQUFtQyxzQkFBc0IsdUJBQXVCLDhCQUE4QiwwQ0FBMEMsMENBQTBDLDhCQUE4QixzQ0FBc0MsS0FBSyxpQkFBaUIsOERBQThELGlDQUFpQyx1Q0FBdUMsd0NBQXdDLE9BQU8sYUFBYSw0REFBNEQsK0JBQStCLHFDQUFxQyxzQ0FBc0MsS0FBSyxpQkFBaUIseUJBQXlCLEtBQUssNkJBQTZCLHFCQUFxQiwyQkFBMkIsS0FBSywwQ0FBMEMsb0JBQW9CLDBCQUEwQix3QkFBd0IsS0FBSyw4Q0FBOEMsb0JBQW9CLHdCQUF3Qix5QkFBeUIsMEJBQTBCLG1CQUFtQiwyQkFBMkIsS0FBSyxvREFBb0QsbUJBQW1CLG9CQUFvQixzQkFBc0IsMkJBQTJCLDJCQUEyQixxQkFBcUIsb0JBQW9CLHVCQUF1QixpQ0FBaUMsdUJBQXVCLHdCQUF3QixLQUFLLG1EQUFtRCxvQkFBb0IscUJBQXFCLDRCQUE0Qiw0QkFBNEIscUJBQXFCLDhCQUE4Qiw2QkFBNkIseUJBQXlCLHdCQUF3QiwwQkFBMEIsdUJBQXVCLHFCQUFxQixNQUFNLGNBQWMsNEJBQTRCLHFCQUFxQixzQkFBc0IsNEJBQTRCLHlCQUF5Qiw4REFBOEQsa0NBQWtDLHNDQUFzQyx5QkFBeUIsMEJBQTBCLGdEQUFnRCxNQUFNLDRCQUE0QixlQUFlLGdDQUFnQyxVQUFVLGlCQUFpQiw4QkFBOEIsVUFBVSxNQUFNLDhCQUE4QixvQkFBb0Isc0JBQXNCLDJCQUEyQixLQUFLLGtCQUFrQiwwQkFBMEIseUJBQXlCLHNCQUFzQiw0QkFBNEIsbUJBQW1CLEtBQUssdUJBQXVCLHFCQUFxQixzQkFBc0IscUJBQXFCLDhCQUE4Qix3QkFBd0Isa0NBQWtDLDJCQUEyQix5QkFBeUIsd0JBQXdCLDBCQUEwQiw4QkFBOEIsa0RBQWtELG9CQUFvQixxQkFBcUIsdUJBQXVCLEtBQUssbUJBQW1CLHFCQUFxQixzQkFBc0IscURBQXFELCtCQUErQixxQ0FBcUMscUJBQXFCLEtBQUssaUJBQWlCLHFCQUFxQixLQUFLLHVCQUF1Qix1QkFBdUIsd0JBQXdCLDBCQUEwQiwwQkFBMEIsS0FBSyx1QkFBdUIsdUJBQXVCLHdCQUF3QiwwQkFBMEIsS0FBSywrQkFBK0IsMkNBQTJDLG9CQUFvQixxQkFBcUIsaUNBQWlDLEtBQUssbUJBQW1CLG1EQUFtRCxvQkFBb0IscUJBQXFCLCtCQUErQiwwQkFBMEIsS0FBSyxnQkFBZ0IsaUJBQWlCLG1CQUFtQixLQUFLLG1CQUFtQixtQkFBbUIsc0JBQXNCLHNEQUFzRCxpQ0FBaUMseUNBQXlDLHFCQUFxQixzQkFBc0IsaUNBQWlDLHVCQUF1Qix3QkFBd0IsS0FBSyxtQkFBbUIsb0JBQW9CLHNCQUFzQiw0QkFBNEIsS0FBSyxtQkFBbUIsbUJBQW1CLHdCQUF3QiwyQkFBMkIsdUJBQXVCLEtBQUssV0FBVyw4QkFBOEIsS0FBSyxtQkFBbUIsbUJBQW1CLHFCQUFxQixzQkFBc0Isd0JBQXdCLHNCQUFzQixzQ0FBc0MseUJBQXlCLEtBQUssZUFBZSxxQkFBcUIsc0JBQXNCLHlCQUF5QixLQUFLLHdEQUF3RCxpQkFBaUIsZ0NBQWdDLFNBQVMsa0JBQWtCLHdCQUF3QixTQUFTLGlDQUFpQyx5QkFBeUIsNkJBQTZCLCtCQUErQixTQUFTLGtEQUFrRCx5QkFBeUIsOEJBQThCLDRCQUE0QixTQUFTLDBEQUEwRCx3QkFBd0IsNEJBQTRCLDZCQUE2Qiw4QkFBOEIseUJBQXlCLCtCQUErQixTQUFTLHdEQUF3RCxxQkFBcUIsU0FBUyxtREFBbUQseUJBQXlCLFNBQVMsS0FBSyx1QkFBdUI7QUFDcDgxQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQzlDMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDNUJhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBc0c7QUFDdEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUlnRDtBQUN4RSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNmQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSU0sTUFBTSxHQUFHLElBQUlDLE1BQUosQ0FBVyxxQkFBWCxFQUFrQztFQUMzQ0MsS0FBSyxFQUFFLEdBRG9DO0VBRTNDQyxRQUFRLEVBQUUsSUFGaUM7RUFHM0NDLFVBQVUsRUFBRTtJQUNWQyxFQUFFLEVBQUUsb0JBRE07SUFFVkMsU0FBUyxFQUFFO0VBRkQ7QUFIK0IsQ0FBbEMsQ0FBYjtBQVFFWiw4REFBVyxDQUFDOUMsc0VBQUQsQ0FBWDtBQUNBLElBQUkyRCxPQUFPLEdBQUcsSUFBSU4sTUFBSixDQUFXLHFCQUFYLEVBQWtDO0VBQzlDTyxhQUFhLEVBQUUsQ0FEK0I7RUFFOUNDLFlBQVksRUFBRSxFQUZnQztFQUc5Q0MsY0FBYyxFQUFFLENBSDhCO0VBSTlDQyxJQUFJLEVBQUUsSUFKd0M7RUFLOUM7RUFDQUMsc0JBQXNCLEVBQUUsSUFOc0I7RUFPOUNDLFVBQVUsRUFBRTtJQUNWQyxNQUFNLEVBQUUscUJBREU7SUFFVkMsTUFBTSxFQUFFO0VBRkU7QUFQa0MsQ0FBbEMsQ0FBZDtBQWNGM0QsOERBQU0sQ0FBQzRELE1BQU0sQ0FBQ0MsVUFBUixDQUFOO0FBQ0FELE1BQU0sQ0FBQ2hELGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQUk7RUFDcENaLDhEQUFNLENBQUM0RCxNQUFNLENBQUNDLFVBQVIsQ0FBTjtBQUNELENBRkQ7QUFHQWxCLG1FQUFXLENBQUNuRCxzRUFBRCxDQUFYLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRwbGV4Ly4vc3JjL2pzL2NvbXBvbmVudHMvYXNzZXRzL2NvbnN0YW50LmpzIiwid2VicGFjazovL3dpdHBsZXgvLi9zcmMvanMvY29tcG9uZW50cy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vd2l0cGxleC8uL3NyYy9qcy9jb21wb25lbnRzL3JlbmRlckl0ZW1zLmpzIiwid2VicGFjazovL3dpdHBsZXgvLi9zcmMvanMvY29tcG9uZW50cy9zbGlkZXMuanMiLCJ3ZWJwYWNrOi8vd2l0cGxleC8uL3NyYy9jc3MvaW5kZXguY3NzIiwid2VicGFjazovL3dpdHBsZXgvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dpdHBsZXgvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dpdHBsZXgvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93aXRwbGV4Ly4vc3JjL2Nzcy9pbmRleC5jc3M/ZjdlYSIsIndlYnBhY2s6Ly93aXRwbGV4Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dpdHBsZXgvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dpdHBsZXgvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2l0cGxleC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93aXRwbGV4Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2l0cGxleC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dpdHBsZXgvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2l0cGxleC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93aXRwbGV4L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93aXRwbGV4L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2l0cGxleC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dpdHBsZXgvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93aXRwbGV4L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dpdHBsZXgvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2l0cGxleC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2l0cGxleC8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGNvbnN0IGRhdGE9e1xyXG4gICAgcHJvZHVjdHM6W1xyXG4gICAge1xyXG4gICAgICAgIGltZzogJ3Byb2R1Y3QnLFxyXG4gICAgICAgIHRpdGxlOiAnRUxGIEJBUiBSRiA3MDAnLFxyXG4gICAgICAgIHByaWNlOiA3MDAwLFxyXG4gICAgICAgIHN0YXJzOiAnc3RhcnMnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGltZzogJ3Byb2R1Y3QnLFxyXG4gICAgICAgIHRpdGxlOiAnRUxGIEJBUiBSRiA2MDAnLFxyXG4gICAgICAgIHByaWNlOiA2MDAwLFxyXG4gICAgICAgIHN0YXJzOiAnc3RhcnMnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGltZzogJ3Byb2R1Y3QnLFxyXG4gICAgICAgIHRpdGxlOiAnRUxGIEJBUiBSRiA1MDAnLFxyXG4gICAgICAgIHByaWNlOiA1MDAwLFxyXG4gICAgICAgIHN0YXJzOiAnc3RhcnMnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGltZzogJ3Byb2R1Y3QnLFxyXG4gICAgICAgIHRpdGxlOiAnRUxGIEJBUiBSRiA0MDAnLFxyXG4gICAgICAgIHByaWNlOiA0MDAwLFxyXG4gICAgICAgIHN0YXJzOiAnc3RhcnMnXHJcbiAgICB9XHJcbl0sXHJcbiAgICBhcmNoaXZlZDogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOiAndmFwZXN0ZXInLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1ZBUEVTVEVSUycsXHJcbiAgICAgICAgICAgIGNvdW50OiAxNTY1LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWc6ICdjaWdhcmV0dGUnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0NJR0FSRVRURVMgU0FWRUQnLFxyXG4gICAgICAgICAgICBjb3VudDogNzU4LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWc6ICdmbGF2b3InLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1BSRS1NQURFIEZMQVZPUlMnLFxyXG4gICAgICAgICAgICBjb3VudDogMjk4MyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOiAnY29tYm8nLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0NVU1RPTSBDT01CT1MnLFxyXG4gICAgICAgICAgICBjb3VudDogMTI0LFxyXG5cclxuICAgICAgICB9XHJcbiAgICBdXHJcbn0iLCJcclxuZnVuY3Rpb24gbmF2YmFyKHNjcmVlbikge1xyXG4gICAgY29uc3QgbmF2Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcicpO1xyXG4gICAgbmF2Q29udGFpbmVyLmlubmVySFRNTD0nJztcclxuXHJcbiAgICBpZiAoc2NyZWVuPDEyODApIHtcclxuXHJcbiAgICAgICAgbmF2Q29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPSduYXZiYXJXcmFwcGVyJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nbWVudS1pY29uJz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nbWVudS1sb2dvJz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nc2lnbmluVGV4dCc+U0lHTiBJTjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9J25hdmJhckNvbnRlbnQnPlxyXG4gICAgICAgICAgICA8ZGl2Pk5FVzwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2Pk9VUiBQUk9EVUNUUzwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PkJSQU5EUzwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9J21lbnUtaWNvbnMtbW9iaWxlJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0naW1nQmFza2V0Jz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0naW1nU2VhcmNoJz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0naW1nTGFuZ01vYmlsZSc+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtaWNvbicpO1xyXG4gICAgICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXInKTtcclxuICAgICAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtbG9nbycpO1xyXG4gICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lnbmluVGV4dCcpO1xyXG4gICAgICAgIGNvbnN0IG5hdkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyQ29udGVudCcpO1xyXG4gICAgICAgIGNvbnN0IGljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtaWNvbnMtbW9iaWxlJyk7XHJcblxyXG4gICAgICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudU9wZW4nKTtcclxuICAgICAgICAgICAgbmF2LmNsYXNzTGlzdC50b2dnbGUoJ21lbnVPcGVuJyk7XHJcbiAgICAgICAgICAgIGxvZ28uY2xhc3NMaXN0LnRvZ2dsZSgnbWVudU9wZW4nKTtcclxuICAgICAgICAgICAgdGV4dC5jbGFzc0xpc3QudG9nZ2xlKCdtZW51T3BlbicpO1xyXG4gICAgICAgICAgICBuYXZDb250ZW50LmNsYXNzTGlzdC50b2dnbGUoJ21lbnVPcGVuJyk7XHJcbiAgICAgICAgICAgIGljb25zLmNsYXNzTGlzdC50b2dnbGUoJ21lbnVPcGVuJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAgLy9jcmVhdGUgaW1hZ2UgcGFydFxyXG4gICAgY29uc3QgaW1nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpbWdEaXYuY2xhc3NOYW1lID0gJ2xvZ29JbWcnO1xyXG4gICAgLy8gY3JlYXRlIHVsXHJcbiAgICBjb25zdCBsaXN0PVsnTkVXJywnT1VSIFBST0RVQ1RTJywgJ0JSQU5EUyddO1xyXG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgZm9yIChsZXQgaT0wOyBpPGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgIGEuc2V0QXR0cmlidXRlKCdocmVmJywgJy4vcHJvZHVjdC5odG1sJyk7XHJcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBsaS5pbm5lckhUTUw9bGlzdFtpXVxyXG4gICAgICAgIGEuYXBwZW5kKGxpKTtcclxuICAgICAgICB1bC5hcHBlbmQoYSlcclxuICAgIH1cclxuXHJcbiAgICAvL2NyZWF0ZSBzZWFyY2ggcGFydFxyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXYuY2xhc3NOYW1lPSdzaWduaW5TZWFyY2hMYW5nV3JhcHBlcic7XHJcbiAgICBjb25zdCBpbWdMYW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpbWdMYW5nLmNsYXNzTmFtZT0naW1nTGFuZyc7XHJcbiAgICBkaXYuYXBwZW5kKGltZ0xhbmcpO1xyXG5cclxuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBzcGFuLmNsYXNzTmFtZT0nc2lnbmluVGV4dCdcclxuICAgIHNwYW4uaW5uZXJIVE1MPSdTSUdOIElOJ1xyXG4gICAgZGl2LmFwcGVuZChzcGFuKTtcclxuXHJcbiAgICBjb25zdCBpbWdTZWFyY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGltZ1NlYXJjaC5jbGFzc05hbWU9J2ltZ1NlYXJjaCc7XHJcbiAgICBkaXYuYXBwZW5kKGltZ1NlYXJjaCk7XHJcbiAgICBjb25zdCBpbWdCYXNrZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGltZ0Jhc2tldC5jbGFzc05hbWU9J2ltZ0Jhc2tldCc7XHJcbiAgICBkaXYuYXBwZW5kKGltZ0Jhc2tldCk7XHJcblxyXG5cclxuICAgIG5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWdEaXYpO1xyXG4gICAgbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKHVsKTtcclxuICAgIG5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgfVxyXG4gXHJcblxyXG4gICAgcmV0dXJuIG5hdkNvbnRhaW5lcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmF2YmFyO1xyXG4iLCJcclxuXHJcbmZ1bmN0aW9uIHJlbmRlciAoZGF0YSkge1xyXG4gICBjb25zdCBhcmNoaXZlZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcmNoaXZlZCcpO1xyXG5cclxuICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGRpdi5jbGFzc05hbWUgPSAnaXRlbSc7XHJcbiAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBpbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCguLi8uLi9pbWFnZXMvdmFwZXN0ZXIucG5nKWBcclxuICAgICAgZGl2LmFwcGVuZChpbWcpO1xyXG4gICAgICBhcmNoaXZlZENvbnRhaW5lci5hcHBlbmQoZGl2KTtcclxuICAgfSk7XHJcblxyXG4gICByZXR1cm4gYXJjaGl2ZWRDb250YWluZXI7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZW5kZXI7XHJcbiIsIlxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTbGlkZSAoZGF0YSkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY29uZCcpO1xyXG4gICAgZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRpdi5jbGFzc05hbWUgPSBcInN3aXBlci1zbGlkZSBwcm9kdWN0XCI7XHJcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaW1nLmNsYXNzTmFtZSA9ICdzbGlkZUltZyc7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdFRpdGxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBwcm9kdWN0VGl0bGUuY2xhc3NOYW1lID0gJ3Byb2R1Y3RUaXRsZSc7XHJcbiAgICAgICAgcHJvZHVjdFRpdGxlLmlubmVySFRNTD1pdGVtLnRpdGxlO1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RQcmljZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgcHJvZHVjdFByaWNlLmNsYXNzTmFtZT0ncHJvZHVjdFByaWNlJztcclxuICAgICAgICBwcm9kdWN0UHJpY2UuaW5uZXJIVE1MPWl0ZW0ucHJpY2U7XHJcbiAgICAgICAgY29uc3Qgc3RhcnNJbWc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBzdGFyc0ltZy5jbGFzc05hbWU9J3N0YXJzSW1nJztcclxuXHJcbiAgICAgICAgZGl2LmFwcGVuZChpbWcpO1xyXG4gICAgICAgIGRpdi5hcHBlbmQocHJvZHVjdFRpdGxlKTtcclxuICAgICAgICBkaXYuYXBwZW5kKHByb2R1Y3RQcmljZSk7XHJcbiAgICAgICAgZGl2LmFwcGVuZChzdGFyc0ltZyk7XHJcblxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoZGl2KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjb250YWluZXI7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTbGlkZTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2JsYWNrX2Fycm93LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy93aGl0ZV9tZW51LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9ibHVlX21lbnUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2JsYWNrX2Jhc2tldC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvYmxhY2tfc2VhcmNoLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9lbmdfZmxhZy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvd2hpdGVfbG9nby5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvYmxhY2tfbG9nby5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvbG9nby5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvYXJyb3cucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9zZWFyY2gucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzExX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9iYXNrZXQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEyX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9iYWNrZ3JvdW5kXzEucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEzX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9iYWNrZ3JvdW5kXzIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE0X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9tb2JpbGVfc2Nyb2xsLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvcHJvZHVjdC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTZfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2RyYW0ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE3X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9zdGFycy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMThfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3dob1dlQXJlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzhfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzlfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF85X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzExX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEyX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEzX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE0X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE1X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE2X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE3X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE4X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46MDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLndhcm5pbmcge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMThweDtcXHJcXG4gICAgYmFja2dyb3VuZDogIzNFM0UzRTtcXHJcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLndhcm5pbmcgc3BhbiB7XFxyXFxuICAgIHdpZHRoOiAyODdweDtcXHJcXG4gICAgaGVpZ2h0OiA2M3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHtcXHJcXG4gICAgd2lkdGg6IDg0JTtcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICBtYXJnaW46IDMwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgei1pbmRleDogNTAwMDAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgbGluZWFyO1xcclxcbn1cXHJcXG4ubmF2YmFyQ29udGVudCB7XFxyXFxuICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgbWFyZ2luOiBhdXRvO1xcclxcbiB9XFxyXFxuXFxyXFxuIC5uYXZiYXJXcmFwcGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gfVxcclxcblxcclxcbiAubmF2YmFyQ29udGVudCBkaXYge1xcclxcbiAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICBjb2xvcjogIzAwMDAwMDtcXHJcXG4gICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xcclxcbiAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiB9XFxyXFxuXFxyXFxuLm5hdmJhckNvbnRlbnQubWVudU9wZW4ge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTIwcHg7XFxyXFxufVxcclxcbi5uYXZiYXIubWVudU9wZW4ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICNFNUU1RTU7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIC8qIHBhZGRpbmc6IDMwcHg7ICovXFxyXFxuICAgIHRyYW5zaXRpb246IGhlaWdodCAxcyBsaW5lYXI7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWljb24ge1xcclxcbiAgICB3aWR0aDogNDRweDtcXHJcXG4gICAgaGVpZ2h0OiA0NHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlclxcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pY29uLm1lbnVPcGVuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXHJcXG4gICAgbWFyZ2luOiAzMHB4O1xcclxcbn0gXFxyXFxuXFxyXFxuLm1lbnUtaWNvbnMtbW9iaWxlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7ICBcXHJcXG4gIG1hcmdpbjogYXV0b1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pY29ucy1tb2JpbGUgLmltZ0Jhc2tldCB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWljb25zLW1vYmlsZSAuaW1nU2VhcmNoIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcXHJcXG59XFxyXFxuLmltZ0xhbmdNb2JpbGUge1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAzNnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pY29ucy1tb2JpbGUubWVudU9wZW4ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWxvZ28ge1xcclxcbiAgICB3aWR0aDogMTU0cHg7XFxyXFxuICAgIGhlaWdodDogNjRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtbG9nby5tZW51T3BlbiB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcbi5zaWduaW5UZXh0Lm1lbnVPcGVuIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ29JbWcge1xcclxcbiAgICB3aWR0aDogMjY3cHg7XFxyXFxuICAgIGhlaWdodDogMTExcHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogNjAwcHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxufVxcclxcbnVsIGxpIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBCZWJhcyBOZXVlO1xcclxcbiAgY29sb3I6ICNGRkZGRkY7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxudWwgbGk6OmFmdGVyIHtcXHJcXG4gICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19fICsgXCIpO1xcclxcbiAgIHBhZGRpbmctbGVmdDogNXB4XFxyXFxufVxcclxcblxcclxcbi5zaWduaW5TZWFyY2hMYW5nV3JhcHBlciB7XFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmltZ0xhbmcge1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAzNnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDM2cHggMzZweCwgMTBweCA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAwJSwgMTAwJSA1MCU7XFxyXFxufVxcclxcblxcclxcbi5zaWduaW5UZXh0IHtcXHJcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxMXB4O1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ25pblRleHQ6OmFmdGVyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE4NEU1O1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTcycHhcXHJcXG59XFxyXFxuXFxyXFxuLmltZ1NlYXJjaCB7XFxyXFxuICAgIHdpZHRoOiAyOXB4O1xcclxcbiAgICBoZWlnaHQ6IDI5cHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEwX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nQmFza2V0IHtcXHJcXG4gICAgd2lkdGg6IDI5cHg7XFxyXFxuICAgIGhlaWdodDogMjlweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTFfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi5zd2lwZXItY29udGFpbmVyLTEge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc3dpcGVyLXNsaWRlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBwYWRkaW5nOiA0MHB4IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhcmFsbGF4LWJnIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zd2lwZXItc2xpZGUgLnRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyNTZweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc3dpcGVyLXNsaWRlIC5zdWJ0aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTkzcHg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgbGluZS1oZWlnaHQ6IC01cHg7XFxyXFxufVxcclxcblxcclxcbi5zd2lwZXItc2xpZGUgLnRleHQge1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XFxyXFxufVxcclxcbi5zd2lwZXItcGFnaW5hdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcXHJcXG4gICAgICB3aWR0aDogMjNweDtcXHJcXG4gICAgICBoZWlnaHQ6IDIzcHg7XFxyXFxuICAgICAgYmFja2dyb3VuZDogIzNFM0UzRTtcXHJcXG4gICAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNGRkZGRkZcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xcclxcbiAgICAgIGJhY2tncm91bmQ6ICM1MTg0RTU7XFxyXFxuICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjNTE4NEU1O1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGUxIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMl9fXyArIFwiKTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDUlIDQwJSA7XFxyXFxuICB9XFxyXFxuLnNsaWRlMiB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEzX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1NSUgNDAlIDtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlMyB7XFxyXFxuICAgIGJhY2tncm91bmQ6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmRTbGlkZUNvbnRlbnQge1xcclxcbiAgICB3aWR0aDogMzMxcHg7XFxyXFxuICAgIG1hcmdpbjogMTg4cHggYXV0bztcXHJcXG59XFxyXFxuLnNlY29uZFNsaWRlQ29udGVudCBkaXY6bnRoLWNoaWxkKDEpIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmRTbGlkZUNvbnRlbnQgZGl2Om50aC1jaGlsZCgyKSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmRTbGlkZUNvbnRlbnQgZGl2Om50aC1jaGlsZCgzKSBidXR0b257XFxyXFxuICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgaGVpZ2h0OiA1NHB4O1xcclxcbiAgIGNvbG9yOiAjRkZGRkZGO1xcclxcbiAgIGJhY2tncm91bmQ6ICM1MTg0RTU7XFxyXFxuICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICBvdXRsaW5lOiBub25lO1xcclxcbiAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZFNsaWRlQ29udGVudCBkaXY6bnRoLWNoaWxkKDMpIGlucHV0e1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA1NHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNzc2ODY4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHhcXHJcXG4gfVxcclxcblxcclxcbiBpbnB1dDo6cGxhY2Vob2xkZXIge1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xcclxcbiAgICBjb2xvcjogI0MxQzFDMTtcXHJcXG4gICAgbWFyZ2luOiAzMHB4O1xcclxcbiB9XFxyXFxuIC5zY3JvbGwge1xcclxcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgd2lkdGg6IDE0cHg7XFxyXFxuICAgICBoZWlnaHQ6IDE1cHg7XFxyXFxuICAgICBtYXJnaW4tdG9wOiAtMTAwcHg7XFxyXFxuICAgICB6LWluZGV4OiAyMDAwMDA7XFxyXFxuICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNF9fXyArIFwiKTtcXHJcXG4gICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICBtYXJnaW4tbGVmdDogNTAlO1xcclxcbiAgICAgYW5pbWF0aW9uOiBzY3JvbGwgMS41cyBpbmZpbml0ZSBsaW5lYXI7XFxyXFxuIH1cXHJcXG5cXHJcXG4gQGtleWZyYW1lcyBzY3JvbGwge1xcclxcbiAgICAgZnJvbSB7XFxyXFxuICAgICAgICAgbWFyZ2luLXRvcDogLTEwMHB4O1xcclxcbiAgICAgfVxcclxcblxcclxcbiAgICAgdG8ge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogLTUwcHg7XFxyXFxuICAgICB9XFxyXFxuIH1cXHJcXG5cXHJcXG4gLnN3aXBlci1jb250YWluZXItMiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDY3M3B4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0IHtcXHJcXG4gICAgaGVpZ2h0OiA1MzBweFxcclxcbn1cXHJcXG5cXHJcXG4uc3dpcGVyLXdyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogODUlO1xcclxcbn1cXHJcXG5cXHJcXG4ub3VyLXByb2R1Y3RzIHtcXHJcXG4gICAgd2lkdGg6IDk1LjUlO1xcclxcbiAgICBoZWlnaHQ6IDY3M3B4O1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwMHB4XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0LXRpdGxlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdCZWJhcyBOZXVlJztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogNTBweFxcclxcbn1cXHJcXG5cXHJcXG4uc3dpcGVyLWJ1dHRvbi1uZXh0LCAuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgY29sb3I6ICNCM0IzQjM7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZUltZyB7XFxyXFxuICAgIHdpZHRoOiAyNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAzNTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTVfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZCB7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnByb2R1Y3RUaXRsZSB7XFxyXFxuICAgIGNvbG9yOiAjNEI0QjRCO1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2R1Y3RQcmljZSB7XFxyXFxuICAgIGNvbG9yOiAjNEI0QjRCO1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdFByaWNlOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNl9fXyArIFwiKTtcXHJcXG4gICAgd2lkdGg6IDEwcHg7XFxyXFxuICAgIGhlaWdodDogMTBweDtcXHJcXG4gICAgbWFyZ2luOiAwcHggNXB4IDBweCAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnNJbWcge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xN19fXyArIFwiKTtcXHJcXG4gICAgd2lkdGg6IDg4cHg7XFxyXFxuICAgIGhlaWdodDogMTZweDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5hYm91dCB7XFxyXFxuICB3aWR0aDogOTElO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXRJbWcge1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBoZWlnaHQ6IDYwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOF9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0XFxyXFxufVxcclxcblxcclxcbi5hYm91dFRpdGxlIHtcXHJcXG4gICBjb2xvcjogIzAwMDAwMDtcXHJcXG4gICBmb250LWZhbWlseTogJ0JlYmFzIE5ldWUnO1xcclxcbiAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG4uYWJvdXRXcmFwcGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5hYm91dENvbnRlbnQge1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBmb250LXNpemU6IDI4cHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcXHJcXG4gICAgY29sb3I6ICM3MjcyNzI7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5hcmNoaXZlZCB7XFxyXFxuICAgIHdpZHRoOiA4OCU7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiAzNzlweDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmVkO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0ge1xcclxcbiAgICB3aWR0aDogMzI5cHg7XFxyXFxuICAgIGhlaWdodDogMjc5cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IGdyYXk7XFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSB7XFxyXFxuICAgIC5uYXZiYXIge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgfVxcclxcbiAgICAud2FybmluZyB7XFxyXFxuICAgICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2Vjb25kU2xpZGVDb250ZW50IHtcXHJcXG4gICAgICAgIHdpZHRoOiA1NTdweDtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDQwdmg7XFxyXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNlY29uZFNsaWRlQ29udGVudCBkaXY6bnRoLWNoaWxkKDEpIHtcXHJcXG4gICAgICAgIHdpZHRoOiA0ODVweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIFxcclxcbiAgICAuc2Vjb25kU2xpZGVDb250ZW50IGRpdjpudGgtY2hpbGQoMikge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogMjAwO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwLjk7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNlY29uZFNsaWRlQ29udGVudCBkaXY6bnRoLWNoaWxkKDMpIGJ1dHRvbntcXHJcXG4gICAgd2lkdGg6IDIwMnB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5zZWNvbmRTbGlkZUNvbnRlbnQgZGl2Om50aC1jaGlsZCgzKSBpbnB1dHtcXHJcXG4gICAgICAgIHdpZHRoOiAzMDRweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixRQUFRO0lBQ1IscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixZ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ekIsZUFBZTtHQUNmLGdCQUFnQjtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7O0FBR0E7SUFDSTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO09BQ0csWUFBWTtJQUNmOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLGVBQWU7SUFDbkI7OztJQUdBO1FBQ0ksV0FBVztRQUNYLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLFlBQVk7UUFDWixrQkFBa0I7SUFDdEI7O0lBRUE7SUFDQSxZQUFZO0lBQ1o7SUFDQTtRQUNJLFlBQVk7SUFDaEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOjA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi53YXJuaW5nIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTE4cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMzRTNFM0U7XFxyXFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi53YXJuaW5nIHNwYW4ge1xcclxcbiAgICB3aWR0aDogMjg3cHg7XFxyXFxuICAgIGhlaWdodDogNjNweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICAgIHdpZHRoOiA4NCU7XFxyXFxuICAgIGhlaWdodDogNjBweDtcXHJcXG4gICAgbWFyZ2luOiAzMHB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IDUwMDAwMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGxpbmVhcjtcXHJcXG59XFxyXFxuLm5hdmJhckNvbnRlbnQge1xcclxcbiAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgIG1hcmdpbjogYXV0bztcXHJcXG4gfVxcclxcblxcclxcbiAubmF2YmFyV3JhcHBlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuIH1cXHJcXG5cXHJcXG4gLm5hdmJhckNvbnRlbnQgZGl2IHtcXHJcXG4gICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgY29sb3I6ICMwMDAwMDA7XFxyXFxuICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvYmxhY2tfYXJyb3cucG5nJyk7XFxyXFxuICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XFxyXFxuICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuIH1cXHJcXG5cXHJcXG4ubmF2YmFyQ29udGVudC5tZW51T3BlbiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMjBweDtcXHJcXG59XFxyXFxuLm5hdmJhci5tZW51T3BlbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgI0U1RTVFNTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgLyogcGFkZGluZzogMzBweDsgKi9cXHJcXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDFzIGxpbmVhcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaWNvbiB7XFxyXFxuICAgIHdpZHRoOiA0NHB4O1xcclxcbiAgICBoZWlnaHQ6IDQ0cHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL3doaXRlX21lbnUucG5nJyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyXFxyXFxufVxcclxcblxcclxcbi5tZW51LWljb24ubWVudU9wZW4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9ibHVlX21lbnUucG5nJyk7XFxyXFxuICAgIG1hcmdpbjogMzBweDtcXHJcXG59IFxcclxcblxcclxcbi5tZW51LWljb25zLW1vYmlsZSB7XFxyXFxuICBkaXNwbGF5OiBub25lOyAgXFxyXFxuICBtYXJnaW46IGF1dG9cXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaWNvbnMtbW9iaWxlIC5pbWdCYXNrZXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9ibGFja19iYXNrZXQucG5nJyk7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWljb25zLW1vYmlsZSAuaW1nU2VhcmNoIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvYmxhY2tfc2VhcmNoLnBuZycpO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xcclxcbn1cXHJcXG4uaW1nTGFuZ01vYmlsZSB7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDM2cHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2VuZ19mbGFnLnBuZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pY29ucy1tb2JpbGUubWVudU9wZW4ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWxvZ28ge1xcclxcbiAgICB3aWR0aDogMTU0cHg7XFxyXFxuICAgIGhlaWdodDogNjRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvd2hpdGVfbG9nby5wbmcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtbG9nby5tZW51T3BlbiB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2JsYWNrX2xvZ28ucG5nJyk7XFxyXFxufVxcclxcblxcclxcbi5zaWduaW5UZXh0Lm1lbnVPcGVuIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ29JbWcge1xcclxcbiAgICB3aWR0aDogMjY3cHg7XFxyXFxuICAgIGhlaWdodDogMTExcHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2xvZ28ucG5nJyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogNjAwcHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxufVxcclxcbnVsIGxpIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBCZWJhcyBOZXVlO1xcclxcbiAgY29sb3I6ICNGRkZGRkY7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxudWwgbGk6OmFmdGVyIHtcXHJcXG4gICBjb250ZW50OiB1cmwoJy4uL2ltYWdlcy9hcnJvdy5wbmcnKTtcXHJcXG4gICBwYWRkaW5nLWxlZnQ6IDVweFxcclxcbn1cXHJcXG5cXHJcXG4uc2lnbmluU2VhcmNoTGFuZ1dyYXBwZXIge1xcclxcbiAgICB3aWR0aDogNDAwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pbWdMYW5nIHtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogMzZweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvZW5nX2ZsYWcucG5nJyksIHVybCgnLi4vaW1hZ2VzL2Fycm93LnBuZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDM2cHggMzZweCwgMTBweCA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAwJSwgMTAwJSA1MCU7XFxyXFxufVxcclxcblxcclxcbi5zaWduaW5UZXh0IHtcXHJcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxMXB4O1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ25pblRleHQ6OmFmdGVyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE4NEU1O1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTcycHhcXHJcXG59XFxyXFxuXFxyXFxuLmltZ1NlYXJjaCB7XFxyXFxuICAgIHdpZHRoOiAyOXB4O1xcclxcbiAgICBoZWlnaHQ6IDI5cHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL3NlYXJjaC5wbmcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmltZ0Jhc2tldCB7XFxyXFxuICAgIHdpZHRoOiAyOXB4O1xcclxcbiAgICBoZWlnaHQ6IDI5cHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2Jhc2tldC5wbmcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXBlci1jb250YWluZXItMSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5zd2lwZXItc2xpZGUge1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIHBhZGRpbmc6IDQwcHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFyYWxsYXgtYmcge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXBlci1zbGlkZSAudGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIG1hcmdpbi10b3A6IDI1NnB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zd2lwZXItc2xpZGUgLnN1YnRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxOTNweDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBsaW5lLWhlaWdodDogLTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXBlci1zbGlkZSAudGV4dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuMztcXHJcXG59XFxyXFxuLnN3aXBlci1wYWdpbmF0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwdmg7XFxyXFxufVxcclxcblxcclxcbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xcclxcbiAgICAgIHdpZHRoOiAyM3B4O1xcclxcbiAgICAgIGhlaWdodDogMjNweDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiAjM0UzRTNFO1xcclxcbiAgICAgIGJvcmRlcjogMC41cHggc29saWQgI0ZGRkZGRlxcclxcbn1cXHJcXG5cXHJcXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XFxyXFxuICAgICAgYmFja2dyb3VuZDogIzUxODRFNTtcXHJcXG4gICAgICBib3JkZXI6IDAuNXB4IHNvbGlkICM1MTg0RTU7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZTEge1xcclxcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2JhY2tncm91bmRfMS5wbmcnKTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDUlIDQwJSA7XFxyXFxuICB9XFxyXFxuLnNsaWRlMiB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2JhY2tncm91bmRfMi5wbmcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTUlIDQwJSA7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZTMge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kU2xpZGVDb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDMzMXB4O1xcclxcbiAgICBtYXJnaW46IDE4OHB4IGF1dG87XFxyXFxufVxcclxcbi5zZWNvbmRTbGlkZUNvbnRlbnQgZGl2Om50aC1jaGlsZCgxKSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBsaW5lLWhlaWdodDogNDBweDtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kU2xpZGVDb250ZW50IGRpdjpudGgtY2hpbGQoMikge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICBmb250LXdlaWdodDogMjAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMjRweDtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kU2xpZGVDb250ZW50IGRpdjpudGgtY2hpbGQoMykgYnV0dG9ue1xcclxcbiAgIHdpZHRoOiAxMDAlO1xcclxcbiAgIGhlaWdodDogNTRweDtcXHJcXG4gICBjb2xvcjogI0ZGRkZGRjtcXHJcXG4gICBiYWNrZ3JvdW5kOiAjNTE4NEU1O1xcclxcbiAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICBib3JkZXI6IG5vbmU7XFxyXFxuICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmRTbGlkZUNvbnRlbnQgZGl2Om50aC1jaGlsZCgzKSBpbnB1dHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNTRweDtcXHJcXG4gICAgYmFja2dyb3VuZDogIzc3Njg2ODtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4XFxyXFxuIH1cXHJcXG5cXHJcXG4gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjFweDtcXHJcXG4gICAgY29sb3I6ICNDMUMxQzE7XFxyXFxuICAgIG1hcmdpbjogMzBweDtcXHJcXG4gfVxcclxcbiAuc2Nyb2xsIHtcXHJcXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgIHdpZHRoOiAxNHB4O1xcclxcbiAgICAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgICAgbWFyZ2luLXRvcDogLTEwMHB4O1xcclxcbiAgICAgei1pbmRleDogMjAwMDAwO1xcclxcbiAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvbW9iaWxlX3Njcm9sbC5wbmcnKTtcXHJcXG4gICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICBtYXJnaW4tbGVmdDogNTAlO1xcclxcbiAgICAgYW5pbWF0aW9uOiBzY3JvbGwgMS41cyBpbmZpbml0ZSBsaW5lYXI7XFxyXFxuIH1cXHJcXG5cXHJcXG4gQGtleWZyYW1lcyBzY3JvbGwge1xcclxcbiAgICAgZnJvbSB7XFxyXFxuICAgICAgICAgbWFyZ2luLXRvcDogLTEwMHB4O1xcclxcbiAgICAgfVxcclxcblxcclxcbiAgICAgdG8ge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogLTUwcHg7XFxyXFxuICAgICB9XFxyXFxuIH1cXHJcXG5cXHJcXG4gLnN3aXBlci1jb250YWluZXItMiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDY3M3B4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0IHtcXHJcXG4gICAgaGVpZ2h0OiA1MzBweFxcclxcbn1cXHJcXG5cXHJcXG4uc3dpcGVyLXdyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogODUlO1xcclxcbn1cXHJcXG5cXHJcXG4ub3VyLXByb2R1Y3RzIHtcXHJcXG4gICAgd2lkdGg6IDk1LjUlO1xcclxcbiAgICBoZWlnaHQ6IDY3M3B4O1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwMHB4XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0LXRpdGxlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdCZWJhcyBOZXVlJztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogNTBweFxcclxcbn1cXHJcXG5cXHJcXG4uc3dpcGVyLWJ1dHRvbi1uZXh0LCAuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgY29sb3I6ICNCM0IzQjM7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZUltZyB7XFxyXFxuICAgIHdpZHRoOiAyNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAzNTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltYWdlcy9wcm9kdWN0LnBuZyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZCB7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnByb2R1Y3RUaXRsZSB7XFxyXFxuICAgIGNvbG9yOiAjNEI0QjRCO1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2R1Y3RQcmljZSB7XFxyXFxuICAgIGNvbG9yOiAjNEI0QjRCO1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdFByaWNlOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiB1cmwoJy4uL2ltYWdlcy9kcmFtLnBuZycpO1xcclxcbiAgICB3aWR0aDogMTBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMHB4O1xcclxcbiAgICBtYXJnaW46IDBweCA1cHggMHB4IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5zdGFyc0ltZyB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWFnZXMvc3RhcnMucG5nKTtcXHJcXG4gICAgd2lkdGg6IDg4cHg7XFxyXFxuICAgIGhlaWdodDogMTZweDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5hYm91dCB7XFxyXFxuICB3aWR0aDogOTElO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXRJbWcge1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBoZWlnaHQ6IDYwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1hZ2VzL3dob1dlQXJlLnBuZyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdFxcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXRUaXRsZSB7XFxyXFxuICAgY29sb3I6ICMwMDAwMDA7XFxyXFxuICAgZm9udC1mYW1pbHk6ICdCZWJhcyBOZXVlJztcXHJcXG4gICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuLmFib3V0V3JhcHBlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uYWJvdXRDb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxyXFxuICAgIGNvbG9yOiAjNzI3MjcyO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYXJjaGl2ZWQge1xcclxcbiAgICB3aWR0aDogODglO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGhlaWdodDogMzc5cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJlZDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxyXFxufVxcclxcblxcclxcbi5pdGVtIHtcXHJcXG4gICAgd2lkdGg6IDMyOXB4O1xcclxcbiAgICBoZWlnaHQ6IDI3OXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkge1xcclxcbiAgICAubmF2YmFyIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIH1cXHJcXG4gICAgLndhcm5pbmcge1xcclxcbiAgICAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNlY29uZFNsaWRlQ29udGVudCB7XFxyXFxuICAgICAgICB3aWR0aDogNTU3cHg7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiA0MHZoO1xcclxcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zZWNvbmRTbGlkZUNvbnRlbnQgZGl2Om50aC1jaGlsZCgxKSB7XFxyXFxuICAgICAgICB3aWR0aDogNDg1cHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBcXHJcXG4gICAgLnNlY29uZFNsaWRlQ29udGVudCBkaXY6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbiAgICAgICAgb3BhY2l0eTogMC45O1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zZWNvbmRTbGlkZUNvbnRlbnQgZGl2Om50aC1jaGlsZCgzKSBidXR0b257XFxyXFxuICAgIHdpZHRoOiAyMDJweDtcXHJcXG4gICAgfVxcclxcbiAgICAuc2Vjb25kU2xpZGVDb250ZW50IGRpdjpudGgtY2hpbGQoMykgaW5wdXR7XFxyXFxuICAgICAgICB3aWR0aDogMzA0cHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4uL2Nzcy9pbmRleC5jc3MnO1xyXG5pbXBvcnQgbmF2YmFyIGZyb20gJy4vY29tcG9uZW50cy9uYXZiYXInO1xyXG5pbXBvcnQge2RhdGF9IGZyb20gJy4vY29tcG9uZW50cy9hc3NldHMvY29uc3RhbnQnO1xyXG5pbXBvcnQgY3JlYXRlU2xpZGUgZnJvbSAnLi9jb21wb25lbnRzL3NsaWRlcyc7XHJcbmltcG9ydCByZW5kZXJJdGVtcyBmcm9tICcuL2NvbXBvbmVudHMvcmVuZGVySXRlbXMnO1xyXG5pbXBvcnQgJy4uL2ltYWdlcy93aG9XZUFyZS5wbmcnXHJcblxyXG52YXIgc3dpcGVyID0gbmV3IFN3aXBlcihcIi5zd2lwZXItY29udGFpbmVyLTFcIiwge1xyXG4gICAgc3BlZWQ6IDYwMCxcclxuICAgIHBhcmFsbGF4OiB0cnVlLFxyXG4gICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICBlbDogXCIuc3dpcGVyLXBhZ2luYXRpb25cIixcclxuICAgICAgY2xpY2thYmxlOiB0cnVlXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGNyZWF0ZVNsaWRlKGRhdGEucHJvZHVjdHMpO1xyXG4gIHZhciBzd2lwZXIxID0gbmV3IFN3aXBlcihcIi5zd2lwZXItY29udGFpbmVyLTJcIiwge1xyXG4gICAgc2xpZGVzUGVyVmlldzogNSxcclxuICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICBzbGlkZXNQZXJHcm91cDogNSxcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICAvLyBtb3VzZXdoZWVsOiB0cnVlLFxyXG4gICAgbG9vcEZpbGxHcm91cFdpdGhCbGFuazogdHJ1ZSxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgbmV4dEVsOiBcIi5zd2lwZXItYnV0dG9uLW5leHRcIixcclxuICAgICAgcHJldkVsOiBcIi5zd2lwZXItYnV0dG9uLXByZXZcIixcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG5cclxubmF2YmFyKHdpbmRvdy5pbm5lcldpZHRoKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpPT57XHJcbiAgbmF2YmFyKHdpbmRvdy5pbm5lcldpZHRoKTtcclxufSk7XHJcbnJlbmRlckl0ZW1zKGRhdGEuYXJjaGl2ZWQpO1xyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiZGF0YSIsInByb2R1Y3RzIiwiaW1nIiwidGl0bGUiLCJwcmljZSIsInN0YXJzIiwiYXJjaGl2ZWQiLCJjb3VudCIsIm5hdmJhciIsInNjcmVlbiIsIm5hdkNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsIm1lbnUiLCJuYXYiLCJsb2dvIiwidGV4dCIsIm5hdkNvbnRlbnQiLCJpY29ucyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJpbWdEaXYiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwibGlzdCIsInVsIiwiaSIsImxlbmd0aCIsImEiLCJzZXRBdHRyaWJ1dGUiLCJsaSIsImFwcGVuZCIsImRpdiIsImltZ0xhbmciLCJzcGFuIiwiaW1nU2VhcmNoIiwiaW1nQmFza2V0IiwiYXBwZW5kQ2hpbGQiLCJyZW5kZXIiLCJhcmNoaXZlZENvbnRhaW5lciIsImZvckVhY2giLCJpdGVtIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjcmVhdGVTbGlkZSIsImNvbnRhaW5lciIsInByb2R1Y3RUaXRsZSIsInByb2R1Y3RQcmljZSIsInN0YXJzSW1nIiwicmVuZGVySXRlbXMiLCJzd2lwZXIiLCJTd2lwZXIiLCJzcGVlZCIsInBhcmFsbGF4IiwicGFnaW5hdGlvbiIsImVsIiwiY2xpY2thYmxlIiwic3dpcGVyMSIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJzbGlkZXNQZXJHcm91cCIsImxvb3AiLCJsb29wRmlsbEdyb3VwV2l0aEJsYW5rIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsIndpbmRvdyIsImlubmVyV2lkdGgiXSwic291cmNlUm9vdCI6IiJ9