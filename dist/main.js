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
    navContainer.innerHTML = "\n        <div class='logoImg'></div>\n        <ul>\n           <a><li>NEW</li></a>\n           <a href = './product.html'><li>OUR PRODUCTS</li></a>\n           <a><li>BRANDS</li></a>\n        </ul>\n        <div class='signinSearchLangWrapper'>\n           <div class='imgLang'></div>\n           <div class='signinText'>SIGN IN</div>\n           <div class='imgSearch'></div>\n           <div class='imgBasket'></div>\n        </div>\n      ";
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
    img.className = item.img;
    var title = document.createElement('div');
    title.innerHTML = item.title;
    title.className = 'itemTitle';
    var count = document.createElement('div');
    count.innerHTML = item.count;
    count.className = 'itemCount';
    div.append(img);
    div.append(title);
    div.append(count);
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
function createSlide(data, screen) {
  var container = document.querySelector('.second');
  data.forEach(function (item, index) {
    var div = document.createElement('div');

    if (index) {
      div.className = "swiper-slide product adjust";
    } else {
      if (screen < 700) {
        console.log('mj');
        div.className = "swiper-slide product adjustMinMob";
      } else {
        div.className = "swiper-slide product adjustMin";
      }
    }

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
var ___CSS_LOADER_URL_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ../images/vapester.png */ "./src/images/vapester.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ../images/cigarette.png */ "./src/images/cigarette.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ../images/flavor.png */ "./src/images/flavor.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ../images/combo.png */ "./src/images/combo.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ../images/scroll.png */ "./src/images/scroll.png"), __webpack_require__.b);
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
var ___CSS_LOADER_URL_REPLACEMENT_19___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_19___);
var ___CSS_LOADER_URL_REPLACEMENT_20___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_20___);
var ___CSS_LOADER_URL_REPLACEMENT_21___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_21___);
var ___CSS_LOADER_URL_REPLACEMENT_22___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_22___);
var ___CSS_LOADER_URL_REPLACEMENT_23___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_23___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n    padding: 0;\r\n    margin:0;\r\n    font-family: 'Roboto';\r\n    font-style: normal;\r\n    box-sizing: border-box;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.warning {\r\n    width: 100%;\r\n    height: 118px;\r\n    background: #3E3E3E;\r\n    color: #FFFFFF;\r\n    font-weight: 400;\r\n    font-size: 18px;\r\n    line-height: 21px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-end;\r\n    text-align: center;\r\n}\r\n\r\n.warning span {\r\n    width: 287px;\r\n    height: 63px;\r\n}\r\n\r\n.navbar {\r\n    width: 84%;\r\n    height: 60px;\r\n    margin: 30px;\r\n    position: absolute;\r\n    z-index: 500000;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.navbarContent {\r\n     display: none;\r\n     margin: auto;\r\n }\r\n\r\n .navbarWrapper {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n }\r\n\r\n .navbarContent div {\r\n     width: 100%;\r\n     color: #000000;\r\n     display: flex;\r\n     align-items: center;\r\n     height: 50px;\r\n     font-weight: bold;\r\n     background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n     background-repeat: no-repeat;\r\n     background-position: 100% 50%;\r\n     cursor: pointer;\r\n }\r\n\r\n.navbarContent.menuOpen {\r\n    display: block;\r\n    width: 90%;\r\n    height: 100px;\r\n    margin-top: 120px;\r\n}\r\n.navbar.menuOpen {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background-color:  #E5E5E5;\r\n    margin: 0;\r\n    align-items: flex-start;\r\n    /* padding: 30px; */\r\n    transition: height 1s linear;\r\n}\r\n\r\n.menu-icon {\r\n    width: 44px;\r\n    height: 44px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    cursor: pointer\r\n}\r\n\r\n.menu-icon.menuOpen {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n    margin: 30px;\r\n} \r\n\r\n.menu-icons-mobile {\r\n  display: none;  \r\n  margin: auto\r\n}\r\n\r\n.menu-icons-mobile .imgBasket {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n}\r\n\r\n.menu-icons-mobile .imgSearch {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n    margin-left: 0px;\r\n}\r\n.imgLangMobile {\r\n    width: 50px;\r\n    height: 36px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.menu-icons-mobile.menuOpen {\r\n    margin-top: 100px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: 300px;\r\n    height: 100px;\r\n}\r\n\r\n.menu-logo {\r\n    width: 154px;\r\n    height: 64px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    margin-left: 5px;\r\n}\r\n\r\n.menu-logo.menuOpen {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");\r\n}\r\n\r\n.signinText.menuOpen {\r\n    opacity: 0;\r\n}\r\n\r\n.logoImg {\r\n    width: 267px;\r\n    height: 111px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ");\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\nul {\r\n    display: flex;\r\n    width: 600px;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\nul li {\r\n  list-style-type: none;\r\n  font-family: Bebas Neue;\r\n  color: #FFFFFF;\r\n  cursor: pointer;\r\n  margin-left: 20px;\r\n  font-size: 20px;\r\n}\r\n\r\nul li::after {\r\n   content: url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ");\r\n   padding-left: 5px\r\n}\r\n\r\n.signinSearchLangWrapper {\r\n    width: 400px;\r\n    height: 100px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.imgLang {\r\n    width: 50px;\r\n    height: 36px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ");\r\n    background-size: 36px 36px, 10px 5px;\r\n    background-repeat: no-repeat no-repeat;\r\n    background-position: 0% 0%, 100% 50%;\r\n}\r\n\r\n.signinText {\r\n    color: #FFFFFF;\r\n    line-height: 11px;\r\n    font-size: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.signinText::after {\r\n    position: absolute;\r\n    content: '';\r\n    width: 40px;\r\n    height: 1px;\r\n    background-color: #5184E5;\r\n    margin-top: 20px;\r\n    margin-left: -72px\r\n}\r\n\r\n.imgSearch {\r\n    width: 29px;\r\n    height: 29px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ");\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    margin-left: 30px;\r\n}\r\n\r\n.imgBasket {\r\n    width: 29px;\r\n    height: 29px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ");\r\n    background-size: contain;\r\n    margin-left: 30px;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.swiper-container-1 {\r\n    width: 100%;\r\n    height: 100vh;\r\n    position: relative;\r\n}\r\n\r\n\r\n.swiper-slide {\r\n    font-size: 18px;\r\n    color: #fff;\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    padding: 40px 0px;\r\n}\r\n\r\n.parallax-bg {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    height: 100%;\r\n    -webkit-background-size: cover;\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n.swiper-slide .title {\r\n    font-size: 30px;\r\n    font-weight: normal;\r\n    margin-top: 256px;\r\n    text-align: center;\r\n}\r\n\r\n.swiper-slide .subtitle {\r\n    font-size: 50px;\r\n    font-weight: 700;\r\n    text-align: center;\r\n    width: 193px;\r\n    margin: auto;\r\n    line-height: -5px;\r\n}\r\n\r\n.swiper-slide .text {\r\n    font-size: 14px;\r\n    max-width: 400px;\r\n    line-height: 1.3;\r\n}\r\n.swiper-pagination {\r\n    display: flex;\r\n    margin-left: 50px;\r\n    margin-bottom: 10vh;\r\n}\r\n\r\n.swiper-pagination-bullet {\r\n      width: 23px;\r\n      height: 23px;\r\n      background: #3E3E3E;\r\n      border: 0.5px solid #FFFFFF\r\n}\r\n\r\n.swiper-pagination-bullet-active {\r\n      background: #5184E5;\r\n      border: 0.5px solid #5184E5;\r\n}\r\n\r\n.slide1 {\r\n      background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ");\r\n      background-size: cover;\r\n      background-repeat: no-repeat;\r\n      background-position: 45% 40% ;\r\n  }\r\n.slide2 {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ");\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: 55% 40% ;\r\n}\r\n\r\n.slide3 {\r\n    background: gray;\r\n}\r\n\r\n.secondSlideContent {\r\n    width: 331px;\r\n    margin: 188px auto;\r\n}\r\n.secondSlideContent div:nth-child(1) {\r\n    width: 100%;\r\n    line-height: 40px;\r\n    font-size: 30px;\r\n}\r\n\r\n.secondSlideContent div:nth-child(2) {\r\n    width: 100%;\r\n    font-size: 22px;\r\n    font-weight: 200;\r\n    line-height: 24px;\r\n    opacity: 1;\r\n    text-align: center;\r\n}\r\n\r\n.secondSlideContent div:nth-child(3) button{\r\n   width: 100%;\r\n   height: 54px;\r\n   color: #FFFFFF;\r\n   background: #5184E5;\r\n   border-radius: 15px;\r\n   outline: none;\r\n   border: none;\r\n   font-size: 18px;\r\n   text-transform: uppercase;\r\n   cursor: pointer;\r\n   margin-top: 20px;\r\n}\r\n\r\n.secondSlideContent div:nth-child(3) input{\r\n    width: 100%;\r\n    height: 54px;\r\n    background: #776868;\r\n    border-radius: 15px;\r\n    border: none;\r\n    margin-top: 20px\r\n }\r\n\r\n input::placeholder {\r\n    font-weight: 400;\r\n    font-size: 18px;\r\n    line-height: 21px;\r\n    color: #C1C1C1;\r\n    margin: 30px;\r\n }\r\n .scroll {\r\n     position: absolute;\r\n     width: 14px;\r\n     height: 15px;\r\n     margin-top: -100px;\r\n     z-index: 200000;\r\n     background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ");\r\n     background-size: contain;\r\n     background-repeat: no-repeat;\r\n     cursor: pointer;\r\n     margin-left: 50%;\r\n     animation: scroll 1.5s infinite linear;\r\n }\r\n\r\n @keyframes scroll {\r\n     from {\r\n         margin-top: -100px;\r\n     }\r\n\r\n     to {\r\n        margin-top: -50px;\r\n     }\r\n }\r\n\r\n .swiper-container-2 {\r\n    width: 100%;\r\n    height: 570px;\r\n    position: relative;\r\n}\r\n\r\n.product {\r\n    height: 530px;\r\n    min-width: 148px;\r\n    max-width: 148px;\r\n}\r\n\r\n.adjust {\r\n    margin-left: 120px;\r\n}\r\n.adjustMinMob {\r\n    margin-left: 10px;\r\n}\r\n\r\n.adjustMin {\r\n    margin-left: -60px;\r\n}\r\n.swiper-wrapper {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 85%;\r\n}\r\n\r\n.our-products {\r\n    width: 95.5%;\r\n    height: 673px;\r\n    margin: auto;\r\n    margin-top: 100px\r\n}\r\n\r\n.product-title {\r\n    font-family: 'Bebas Neue';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 30px;\r\n    line-height: 48px;\r\n    margin-left: 50px;\r\n    text-align: center;\r\n}\r\n\r\n.swiper-button-next, .swiper-button-prev {\r\n    width: 50px;\r\n    height: 50px;\r\n    color: #B3B3B3;\r\n    display: none;\r\n}\r\n\r\n.slideImg {\r\n    width: 273px;\r\n    height: 350px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + ");\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    margin: auto;\r\n}\r\n\r\n.second {\r\n    margin: auto;\r\n}\r\n\r\n.productTitle {\r\n    color: #4B4B4B;\r\n    font-size: 16px;\r\n    line-height: 10px;\r\n    margin-left: 25px;\r\n}\r\n\r\n.productPrice {\r\n    color: #4B4B4B;\r\n    font-size: 16px;\r\n    line-height: 10px;\r\n}\r\n\r\n.productPrice::before {\r\n    content: url(" + ___CSS_LOADER_URL_REPLACEMENT_16___ + ");\r\n    width: 10px;\r\n    height: 10px;\r\n    margin: 0px 5px 0px 25px;\r\n}\r\n\r\n.starsImg {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_17___ + ");\r\n    width: 88px;\r\n    height: 16px;\r\n    background-size: cover;\r\n    margin-left: 25px;\r\n}\r\n\r\n.about {\r\n  width: 92%;\r\n  margin: auto;\r\n}\r\n\r\n.aboutImg {\r\n    width: 361px;\r\n    min-height: 248px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_18___ + ");\r\n    background-size: 100% 100%;\r\n    background-repeat: no-repeat;\r\n    margin: auto\r\n}\r\n\r\n.aboutTitle {\r\n   color: #000000;\r\n   font-family: 'Bebas Neue';\r\n   font-size: 30px;\r\n   font-weight: 700;\r\n}\r\n.aboutWrapper {\r\n    width: 100%;\r\n}\r\n.aboutContent {\r\n    width: 84%;\r\n    font-size: 14px;\r\n    color: #727272;\r\n    margin: auto;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\n.archived {\r\n    width: 84.6%;\r\n    margin: 25px auto;\r\n    height: 360px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n}\r\n\r\n.archived-title {\r\n    width: 84.6%;\r\n    font-family: 'Bebas Neue';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 25px;\r\n    line-height: 48px;\r\n    color: #000000;\r\n    margin: 25px auto 0px auto;\r\n    text-align: center;\r\n}\r\n\r\n.item {\r\n    width: 44.5%;\r\n    height: 168px;\r\n    text-align: center;\r\n    background: #FFFFFF;\r\n    border: 1px solid #B2B2B2;\r\n}\r\n\r\n.vapester {\r\n    margin: 25px auto 20px auto;\r\n    width: 58px;\r\n    height: 53px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_19___ + ");\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.cigarette {\r\n    margin: 25px auto 20px auto;\r\n    width: 46px;\r\n    height: 46px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_20___ + ");\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.flavor {\r\n    margin: 25px auto 20px auto;\r\n    width: 40px;\r\n    height: 40px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_21___ + ");\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.combo {\r\n    margin: 25px auto 20px auto;\r\n    width: 50px;\r\n    height: 46px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_22___ + ");\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.footer {\r\n    width: 100%;\r\n    height: 300px\r\n}\r\n\r\n\r\n@media only screen and (min-width: 1200px) {\r\n    .productTitle, .productPrice {\r\n        font-size: 24px;\r\n    }\r\n    \r\n    .about {\r\n        width: 84.6%;   \r\n    }\r\n\r\n    .product {\r\n        height: 530px;\r\n        min-width: unset;\r\n        max-width: unset;\r\n    }\r\n    \r\n    .adjust {\r\n        margin-left: 0px;\r\n    }\r\n    .adjustMinMob {\r\n        margin-left: 0px;\r\n    }\r\n    \r\n    .adjustMin {\r\n        margin-left: 0px;\r\n    }\r\n\r\n    .slideImg {\r\n        width: 250px;\r\n    }\r\n\r\n    .swiper-button-next, .swiper-button-prev {\r\n        display: block;\r\n    }\r\n\r\n    .aboutImg {\r\n        width: 50%;\r\n        height: 400px\r\n    } \r\n    .aboutContent {\r\n        width: 50%;\r\n        font-size: 24px;\r\n        padding-left: 20px;\r\n        box-sizing: border-box;\r\n    }\r\n    .item {\r\n        width: 20%;\r\n        height: 200px;\r\n    }\r\n    .archived {\r\n        flex-wrap: nowrap;\r\n        height: 200px;\r\n        justify-content: space-between;\r\n    }\r\n    .archived-title {\r\n        text-align: left;\r\n        font-size: 30px;\r\n    }\r\n    .vapester, .combo, .flavor, .cigarette {\r\n        margin-top: 40px\r\n    }\r\n    .itemCount {\r\n        padding-top: 5px\r\n    }\r\n    .scroll {\r\n        background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_23___ + ");\r\n        width: 20px;\r\n        background-size: cover;\r\n        height: 55px;\r\n    }\r\n\r\n    @keyframes scroll {\r\n        from {\r\n             margin-top: -150px;\r\n        }\r\n       \r\n        to {\r\n            margin-top: -100px;\r\n        }\r\n    }\r\n    \r\n    .navbar {\r\n        flex-direction: row;\r\n        margin: 45px 8%;\r\n        height: 111px;\r\n    }\r\n    .warning {\r\n       height: 40px;\r\n       align-items: center;\r\n    }\r\n\r\n    .signinSearchLangWrapper {\r\n        height: 111px;\r\n        width: 310px\r\n    }\r\n\r\n    .signinText {\r\n        margin-left: 20px;\r\n    }\r\n    .warning span {\r\n        width: 100%;\r\n        height: 20px;    \r\n    }\r\n\r\n    .swiper-slide .title {\r\n        font-size: 30px;\r\n        font-weight: normal;\r\n        margin-top: 60vh;\r\n        text-align: left;\r\n        margin-left: 45px;\r\n    }\r\n    \r\n    .swiper-slide .subtitle {\r\n        font-size: 50px;\r\n        font-weight: 700;\r\n        text-align: left;\r\n        width: auto;\r\n        margin: auto 45px;\r\n    }\r\n\r\n    .secondSlideContent {\r\n        width: 557px;\r\n        margin-top: 40vh;\r\n        margin: 256px 45px;\r\n        /* padding-left: 50px; */\r\n    }\r\n\r\n    .secondSlideContent div:nth-child(1) {\r\n        width: 485px;\r\n        line-height: 40px;\r\n        font-size: 40px;\r\n        text-align: center;\r\n    }\r\n\r\n    \r\n    .secondSlideContent div:nth-child(2) {\r\n        width: 89%;\r\n        font-size: 22px;\r\n        font-weight: 200;\r\n        line-height: 24px;\r\n        opacity: 0.9;\r\n        padding-top: 10px;\r\n        text-align: center;\r\n    }\r\n\r\n    .secondSlideContent div:nth-child(3) button{\r\n        width: 202px;\r\n    }\r\n    .secondSlideContent div:nth-child(3) input{\r\n        width: 304px;\r\n    }\r\n\r\n    .aboutWrapper {\r\n        display: flex;\r\n    }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"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","sourcesContent":["body {\r\n    padding: 0;\r\n    margin:0;\r\n    font-family: 'Roboto';\r\n    font-style: normal;\r\n    box-sizing: border-box;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.warning {\r\n    width: 100%;\r\n    height: 118px;\r\n    background: #3E3E3E;\r\n    color: #FFFFFF;\r\n    font-weight: 400;\r\n    font-size: 18px;\r\n    line-height: 21px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-end;\r\n    text-align: center;\r\n}\r\n\r\n.warning span {\r\n    width: 287px;\r\n    height: 63px;\r\n}\r\n\r\n.navbar {\r\n    width: 84%;\r\n    height: 60px;\r\n    margin: 30px;\r\n    position: absolute;\r\n    z-index: 500000;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.navbarContent {\r\n     display: none;\r\n     margin: auto;\r\n }\r\n\r\n .navbarWrapper {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n }\r\n\r\n .navbarContent div {\r\n     width: 100%;\r\n     color: #000000;\r\n     display: flex;\r\n     align-items: center;\r\n     height: 50px;\r\n     font-weight: bold;\r\n     background-image: url('../images/black_arrow.png');\r\n     background-repeat: no-repeat;\r\n     background-position: 100% 50%;\r\n     cursor: pointer;\r\n }\r\n\r\n.navbarContent.menuOpen {\r\n    display: block;\r\n    width: 90%;\r\n    height: 100px;\r\n    margin-top: 120px;\r\n}\r\n.navbar.menuOpen {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background-color:  #E5E5E5;\r\n    margin: 0;\r\n    align-items: flex-start;\r\n    /* padding: 30px; */\r\n    transition: height 1s linear;\r\n}\r\n\r\n.menu-icon {\r\n    width: 44px;\r\n    height: 44px;\r\n    background-image: url('../images/white_menu.png');\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    cursor: pointer\r\n}\r\n\r\n.menu-icon.menuOpen {\r\n    background-image: url('../images/blue_menu.png');\r\n    margin: 30px;\r\n} \r\n\r\n.menu-icons-mobile {\r\n  display: none;  \r\n  margin: auto\r\n}\r\n\r\n.menu-icons-mobile .imgBasket {\r\n    background-image: url('../images/black_basket.png');\r\n}\r\n\r\n.menu-icons-mobile .imgSearch {\r\n    background-image: url('../images/black_search.png');\r\n    margin-left: 0px;\r\n}\r\n.imgLangMobile {\r\n    width: 50px;\r\n    height: 36px;\r\n    background-image: url('../images/eng_flag.png');\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.menu-icons-mobile.menuOpen {\r\n    margin-top: 100px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: 300px;\r\n    height: 100px;\r\n}\r\n\r\n.menu-logo {\r\n    width: 154px;\r\n    height: 64px;\r\n    background-image: url('../images/white_logo.png');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    margin-left: 5px;\r\n}\r\n\r\n.menu-logo.menuOpen {\r\n    background-image: url('../images/black_logo.png');\r\n}\r\n\r\n.signinText.menuOpen {\r\n    opacity: 0;\r\n}\r\n\r\n.logoImg {\r\n    width: 267px;\r\n    height: 111px;\r\n    background-image: url('../images/logo.png');\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\nul {\r\n    display: flex;\r\n    width: 600px;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\nul li {\r\n  list-style-type: none;\r\n  font-family: Bebas Neue;\r\n  color: #FFFFFF;\r\n  cursor: pointer;\r\n  margin-left: 20px;\r\n  font-size: 20px;\r\n}\r\n\r\nul li::after {\r\n   content: url('../images/arrow.png');\r\n   padding-left: 5px\r\n}\r\n\r\n.signinSearchLangWrapper {\r\n    width: 400px;\r\n    height: 100px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.imgLang {\r\n    width: 50px;\r\n    height: 36px;\r\n    background-image: url('../images/eng_flag.png'), url('../images/arrow.png');\r\n    background-size: 36px 36px, 10px 5px;\r\n    background-repeat: no-repeat no-repeat;\r\n    background-position: 0% 0%, 100% 50%;\r\n}\r\n\r\n.signinText {\r\n    color: #FFFFFF;\r\n    line-height: 11px;\r\n    font-size: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.signinText::after {\r\n    position: absolute;\r\n    content: '';\r\n    width: 40px;\r\n    height: 1px;\r\n    background-color: #5184E5;\r\n    margin-top: 20px;\r\n    margin-left: -72px\r\n}\r\n\r\n.imgSearch {\r\n    width: 29px;\r\n    height: 29px;\r\n    background-image: url('../images/search.png');\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    margin-left: 30px;\r\n}\r\n\r\n.imgBasket {\r\n    width: 29px;\r\n    height: 29px;\r\n    background-image: url('../images/basket.png');\r\n    background-size: contain;\r\n    margin-left: 30px;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.swiper-container-1 {\r\n    width: 100%;\r\n    height: 100vh;\r\n    position: relative;\r\n}\r\n\r\n\r\n.swiper-slide {\r\n    font-size: 18px;\r\n    color: #fff;\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    padding: 40px 0px;\r\n}\r\n\r\n.parallax-bg {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    height: 100%;\r\n    -webkit-background-size: cover;\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n.swiper-slide .title {\r\n    font-size: 30px;\r\n    font-weight: normal;\r\n    margin-top: 256px;\r\n    text-align: center;\r\n}\r\n\r\n.swiper-slide .subtitle {\r\n    font-size: 50px;\r\n    font-weight: 700;\r\n    text-align: center;\r\n    width: 193px;\r\n    margin: auto;\r\n    line-height: -5px;\r\n}\r\n\r\n.swiper-slide .text {\r\n    font-size: 14px;\r\n    max-width: 400px;\r\n    line-height: 1.3;\r\n}\r\n.swiper-pagination {\r\n    display: flex;\r\n    margin-left: 50px;\r\n    margin-bottom: 10vh;\r\n}\r\n\r\n.swiper-pagination-bullet {\r\n      width: 23px;\r\n      height: 23px;\r\n      background: #3E3E3E;\r\n      border: 0.5px solid #FFFFFF\r\n}\r\n\r\n.swiper-pagination-bullet-active {\r\n      background: #5184E5;\r\n      border: 0.5px solid #5184E5;\r\n}\r\n\r\n.slide1 {\r\n      background-image: url('../images/background_1.png');\r\n      background-size: cover;\r\n      background-repeat: no-repeat;\r\n      background-position: 45% 40% ;\r\n  }\r\n.slide2 {\r\n    background-image: url('../images/background_2.png');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: 55% 40% ;\r\n}\r\n\r\n.slide3 {\r\n    background: gray;\r\n}\r\n\r\n.secondSlideContent {\r\n    width: 331px;\r\n    margin: 188px auto;\r\n}\r\n.secondSlideContent div:nth-child(1) {\r\n    width: 100%;\r\n    line-height: 40px;\r\n    font-size: 30px;\r\n}\r\n\r\n.secondSlideContent div:nth-child(2) {\r\n    width: 100%;\r\n    font-size: 22px;\r\n    font-weight: 200;\r\n    line-height: 24px;\r\n    opacity: 1;\r\n    text-align: center;\r\n}\r\n\r\n.secondSlideContent div:nth-child(3) button{\r\n   width: 100%;\r\n   height: 54px;\r\n   color: #FFFFFF;\r\n   background: #5184E5;\r\n   border-radius: 15px;\r\n   outline: none;\r\n   border: none;\r\n   font-size: 18px;\r\n   text-transform: uppercase;\r\n   cursor: pointer;\r\n   margin-top: 20px;\r\n}\r\n\r\n.secondSlideContent div:nth-child(3) input{\r\n    width: 100%;\r\n    height: 54px;\r\n    background: #776868;\r\n    border-radius: 15px;\r\n    border: none;\r\n    margin-top: 20px\r\n }\r\n\r\n input::placeholder {\r\n    font-weight: 400;\r\n    font-size: 18px;\r\n    line-height: 21px;\r\n    color: #C1C1C1;\r\n    margin: 30px;\r\n }\r\n .scroll {\r\n     position: absolute;\r\n     width: 14px;\r\n     height: 15px;\r\n     margin-top: -100px;\r\n     z-index: 200000;\r\n     background-image: url('../images/mobile_scroll.png');\r\n     background-size: contain;\r\n     background-repeat: no-repeat;\r\n     cursor: pointer;\r\n     margin-left: 50%;\r\n     animation: scroll 1.5s infinite linear;\r\n }\r\n\r\n @keyframes scroll {\r\n     from {\r\n         margin-top: -100px;\r\n     }\r\n\r\n     to {\r\n        margin-top: -50px;\r\n     }\r\n }\r\n\r\n .swiper-container-2 {\r\n    width: 100%;\r\n    height: 570px;\r\n    position: relative;\r\n}\r\n\r\n.product {\r\n    height: 530px;\r\n    min-width: 148px;\r\n    max-width: 148px;\r\n}\r\n\r\n.adjust {\r\n    margin-left: 120px;\r\n}\r\n.adjustMinMob {\r\n    margin-left: 10px;\r\n}\r\n\r\n.adjustMin {\r\n    margin-left: -60px;\r\n}\r\n.swiper-wrapper {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 85%;\r\n}\r\n\r\n.our-products {\r\n    width: 95.5%;\r\n    height: 673px;\r\n    margin: auto;\r\n    margin-top: 100px\r\n}\r\n\r\n.product-title {\r\n    font-family: 'Bebas Neue';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 30px;\r\n    line-height: 48px;\r\n    margin-left: 50px;\r\n    text-align: center;\r\n}\r\n\r\n.swiper-button-next, .swiper-button-prev {\r\n    width: 50px;\r\n    height: 50px;\r\n    color: #B3B3B3;\r\n    display: none;\r\n}\r\n\r\n.slideImg {\r\n    width: 273px;\r\n    height: 350px;\r\n    background-image: url(../images/product.png);\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    margin: auto;\r\n}\r\n\r\n.second {\r\n    margin: auto;\r\n}\r\n\r\n.productTitle {\r\n    color: #4B4B4B;\r\n    font-size: 16px;\r\n    line-height: 10px;\r\n    margin-left: 25px;\r\n}\r\n\r\n.productPrice {\r\n    color: #4B4B4B;\r\n    font-size: 16px;\r\n    line-height: 10px;\r\n}\r\n\r\n.productPrice::before {\r\n    content: url('../images/dram.png');\r\n    width: 10px;\r\n    height: 10px;\r\n    margin: 0px 5px 0px 25px;\r\n}\r\n\r\n.starsImg {\r\n    background-image: url(../images/stars.png);\r\n    width: 88px;\r\n    height: 16px;\r\n    background-size: cover;\r\n    margin-left: 25px;\r\n}\r\n\r\n.about {\r\n  width: 92%;\r\n  margin: auto;\r\n}\r\n\r\n.aboutImg {\r\n    width: 361px;\r\n    min-height: 248px;\r\n    background-image: url(../images/whoWeAre.png);\r\n    background-size: 100% 100%;\r\n    background-repeat: no-repeat;\r\n    margin: auto\r\n}\r\n\r\n.aboutTitle {\r\n   color: #000000;\r\n   font-family: 'Bebas Neue';\r\n   font-size: 30px;\r\n   font-weight: 700;\r\n}\r\n.aboutWrapper {\r\n    width: 100%;\r\n}\r\n.aboutContent {\r\n    width: 84%;\r\n    font-size: 14px;\r\n    color: #727272;\r\n    margin: auto;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\n.archived {\r\n    width: 84.6%;\r\n    margin: 25px auto;\r\n    height: 360px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n}\r\n\r\n.archived-title {\r\n    width: 84.6%;\r\n    font-family: 'Bebas Neue';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 25px;\r\n    line-height: 48px;\r\n    color: #000000;\r\n    margin: 25px auto 0px auto;\r\n    text-align: center;\r\n}\r\n\r\n.item {\r\n    width: 44.5%;\r\n    height: 168px;\r\n    text-align: center;\r\n    background: #FFFFFF;\r\n    border: 1px solid #B2B2B2;\r\n}\r\n\r\n.vapester {\r\n    margin: 25px auto 20px auto;\r\n    width: 58px;\r\n    height: 53px;\r\n    background-image: url('../images/vapester.png');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.cigarette {\r\n    margin: 25px auto 20px auto;\r\n    width: 46px;\r\n    height: 46px;\r\n    background-image: url('../images/cigarette.png');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.flavor {\r\n    margin: 25px auto 20px auto;\r\n    width: 40px;\r\n    height: 40px;\r\n    background-image: url('../images/flavor.png');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.combo {\r\n    margin: 25px auto 20px auto;\r\n    width: 50px;\r\n    height: 46px;\r\n    background-image: url('../images/combo.png');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.footer {\r\n    width: 100%;\r\n    height: 300px\r\n}\r\n\r\n\r\n@media only screen and (min-width: 1200px) {\r\n    .productTitle, .productPrice {\r\n        font-size: 24px;\r\n    }\r\n    \r\n    .about {\r\n        width: 84.6%;   \r\n    }\r\n\r\n    .product {\r\n        height: 530px;\r\n        min-width: unset;\r\n        max-width: unset;\r\n    }\r\n    \r\n    .adjust {\r\n        margin-left: 0px;\r\n    }\r\n    .adjustMinMob {\r\n        margin-left: 0px;\r\n    }\r\n    \r\n    .adjustMin {\r\n        margin-left: 0px;\r\n    }\r\n\r\n    .slideImg {\r\n        width: 250px;\r\n    }\r\n\r\n    .swiper-button-next, .swiper-button-prev {\r\n        display: block;\r\n    }\r\n\r\n    .aboutImg {\r\n        width: 50%;\r\n        height: 400px\r\n    } \r\n    .aboutContent {\r\n        width: 50%;\r\n        font-size: 24px;\r\n        padding-left: 20px;\r\n        box-sizing: border-box;\r\n    }\r\n    .item {\r\n        width: 20%;\r\n        height: 200px;\r\n    }\r\n    .archived {\r\n        flex-wrap: nowrap;\r\n        height: 200px;\r\n        justify-content: space-between;\r\n    }\r\n    .archived-title {\r\n        text-align: left;\r\n        font-size: 30px;\r\n    }\r\n    .vapester, .combo, .flavor, .cigarette {\r\n        margin-top: 40px\r\n    }\r\n    .itemCount {\r\n        padding-top: 5px\r\n    }\r\n    .scroll {\r\n        background-image: url('../images/scroll.png');\r\n        width: 20px;\r\n        background-size: cover;\r\n        height: 55px;\r\n    }\r\n\r\n    @keyframes scroll {\r\n        from {\r\n             margin-top: -150px;\r\n        }\r\n       \r\n        to {\r\n            margin-top: -100px;\r\n        }\r\n    }\r\n    \r\n    .navbar {\r\n        flex-direction: row;\r\n        margin: 45px 8%;\r\n        height: 111px;\r\n    }\r\n    .warning {\r\n       height: 40px;\r\n       align-items: center;\r\n    }\r\n\r\n    .signinSearchLangWrapper {\r\n        height: 111px;\r\n        width: 310px\r\n    }\r\n\r\n    .signinText {\r\n        margin-left: 20px;\r\n    }\r\n    .warning span {\r\n        width: 100%;\r\n        height: 20px;    \r\n    }\r\n\r\n    .swiper-slide .title {\r\n        font-size: 30px;\r\n        font-weight: normal;\r\n        margin-top: 60vh;\r\n        text-align: left;\r\n        margin-left: 45px;\r\n    }\r\n    \r\n    .swiper-slide .subtitle {\r\n        font-size: 50px;\r\n        font-weight: 700;\r\n        text-align: left;\r\n        width: auto;\r\n        margin: auto 45px;\r\n    }\r\n\r\n    .secondSlideContent {\r\n        width: 557px;\r\n        margin-top: 40vh;\r\n        margin: 256px 45px;\r\n        /* padding-left: 50px; */\r\n    }\r\n\r\n    .secondSlideContent div:nth-child(1) {\r\n        width: 485px;\r\n        line-height: 40px;\r\n        font-size: 40px;\r\n        text-align: center;\r\n    }\r\n\r\n    \r\n    .secondSlideContent div:nth-child(2) {\r\n        width: 89%;\r\n        font-size: 22px;\r\n        font-weight: 200;\r\n        line-height: 24px;\r\n        opacity: 0.9;\r\n        padding-top: 10px;\r\n        text-align: center;\r\n    }\r\n\r\n    .secondSlideContent div:nth-child(3) button{\r\n        width: 202px;\r\n    }\r\n    .secondSlideContent div:nth-child(3) input{\r\n        width: 304px;\r\n    }\r\n\r\n    .aboutWrapper {\r\n        display: flex;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/images/cigarette.png":
/*!**********************************!*\
  !*** ./src/images/cigarette.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "774ca4362ada14b5ac35.png";

/***/ }),

/***/ "./src/images/combo.png":
/*!******************************!*\
  !*** ./src/images/combo.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3f65ae1353423d3ea44c.png";

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

/***/ "./src/images/flavor.png":
/*!*******************************!*\
  !*** ./src/images/flavor.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e1855320550d07c5811d.png";

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

/***/ "./src/images/vapester.png":
/*!*********************************!*\
  !*** ./src/images/vapester.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cfccc203fed046088729.png";

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





(0,_components_navbar__WEBPACK_IMPORTED_MODULE_1__["default"])(window.innerWidth);
window.addEventListener('resize', function () {
  (0,_components_navbar__WEBPACK_IMPORTED_MODULE_1__["default"])(window.innerWidth); // createSlide(data.products, window.innerWidth);
});
(0,_components_renderItems__WEBPACK_IMPORTED_MODULE_4__["default"])(_components_assets_constant__WEBPACK_IMPORTED_MODULE_2__.data.archived);
var swiper = new Swiper(".swiper-container-1", {
  speed: 600,
  parallax: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
(0,_components_slides__WEBPACK_IMPORTED_MODULE_3__["default"])(_components_assets_constant__WEBPACK_IMPORTED_MODULE_2__.data.products, window.innerWidth);
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNPLElBQU1BLElBQUksR0FBQztFQUNkQyxRQUFRLEVBQUMsQ0FDVDtJQUNJQyxHQUFHLEVBQUUsU0FEVDtJQUVJQyxLQUFLLEVBQUUsZ0JBRlg7SUFHSUMsS0FBSyxFQUFFLElBSFg7SUFJSUMsS0FBSyxFQUFFO0VBSlgsQ0FEUyxFQU9UO0lBQ0lILEdBQUcsRUFBRSxTQURUO0lBRUlDLEtBQUssRUFBRSxnQkFGWDtJQUdJQyxLQUFLLEVBQUUsSUFIWDtJQUlJQyxLQUFLLEVBQUU7RUFKWCxDQVBTLEVBYVQ7SUFDSUgsR0FBRyxFQUFFLFNBRFQ7SUFFSUMsS0FBSyxFQUFFLGdCQUZYO0lBR0lDLEtBQUssRUFBRSxJQUhYO0lBSUlDLEtBQUssRUFBRTtFQUpYLENBYlMsRUFtQlQ7SUFDSUgsR0FBRyxFQUFFLFNBRFQ7SUFFSUMsS0FBSyxFQUFFLGdCQUZYO0lBR0lDLEtBQUssRUFBRSxJQUhYO0lBSUlDLEtBQUssRUFBRTtFQUpYLENBbkJTLENBREs7RUEyQmRDLFFBQVEsRUFBRSxDQUNOO0lBQ0lKLEdBQUcsRUFBRSxVQURUO0lBRUlDLEtBQUssRUFBRSxXQUZYO0lBR0lJLEtBQUssRUFBRTtFQUhYLENBRE0sRUFNTjtJQUNJTCxHQUFHLEVBQUUsV0FEVDtJQUVJQyxLQUFLLEVBQUUsa0JBRlg7SUFHSUksS0FBSyxFQUFFO0VBSFgsQ0FOTSxFQVdOO0lBQ0lMLEdBQUcsRUFBRSxRQURUO0lBRUlDLEtBQUssRUFBRSxrQkFGWDtJQUdJSSxLQUFLLEVBQUU7RUFIWCxDQVhNLEVBZ0JOO0lBQ0lMLEdBQUcsRUFBRSxPQURUO0lBRUlDLEtBQUssRUFBRSxlQUZYO0lBR0lJLEtBQUssRUFBRTtFQUhYLENBaEJNO0FBM0JJLENBQVg7Ozs7Ozs7Ozs7Ozs7O0FDQVAsU0FBU0MsTUFBVCxDQUFnQkMsTUFBaEIsRUFBd0I7RUFDcEIsSUFBTUMsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBckI7RUFDQUYsWUFBWSxDQUFDRyxTQUFiLEdBQXVCLEVBQXZCOztFQUVBLElBQUlKLE1BQU0sR0FBQyxJQUFYLEVBQWlCO0lBRWJDLFlBQVksQ0FBQ0csU0FBYjtJQWlCQSxJQUFNQyxJQUFJLEdBQUdILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixZQUF2QixDQUFiO0lBQ0EsSUFBTUcsR0FBRyxHQUFHSixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBWjtJQUNBLElBQU1JLElBQUksR0FBR0wsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLENBQWI7SUFDQSxJQUFNSyxJQUFJLEdBQUdOLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixhQUF2QixDQUFiO0lBQ0EsSUFBTU0sVUFBVSxHQUFHUCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQW5CO0lBQ0EsSUFBTU8sS0FBSyxHQUFHUixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsb0JBQXZCLENBQWQ7SUFFQUUsSUFBSSxDQUFDTSxnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFNO01BQ2pDTixJQUFJLENBQUNPLFNBQUwsQ0FBZUMsTUFBZixDQUFzQixVQUF0QjtNQUNBUCxHQUFHLENBQUNNLFNBQUosQ0FBY0MsTUFBZCxDQUFxQixVQUFyQjtNQUNBTixJQUFJLENBQUNLLFNBQUwsQ0FBZUMsTUFBZixDQUFzQixVQUF0QjtNQUNBTCxJQUFJLENBQUNJLFNBQUwsQ0FBZUMsTUFBZixDQUFzQixVQUF0QjtNQUNBSixVQUFVLENBQUNHLFNBQVgsQ0FBcUJDLE1BQXJCLENBQTRCLFVBQTVCO01BQ0FILEtBQUssQ0FBQ0UsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUIsVUFBdkI7SUFDSCxDQVBEO0VBU0gsQ0FuQ0QsTUFtQ087SUFDTFosWUFBWSxDQUFDRyxTQUFiO0VBY0Q7O0VBR0QsT0FBT0gsWUFBUDtBQUNIOztBQUVELGlFQUFlRixNQUFmOzs7Ozs7Ozs7Ozs7OztBQzNEQSxTQUFTZSxNQUFULENBQWlCdkIsSUFBakIsRUFBdUI7RUFDcEIsSUFBTXdCLGlCQUFpQixHQUFHYixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBMUI7RUFFQVosSUFBSSxDQUFDeUIsT0FBTCxDQUFhLFVBQVNDLElBQVQsRUFBZTtJQUN6QixJQUFNQyxHQUFHLEdBQUdoQixRQUFRLENBQUNpQixhQUFULENBQXVCLEtBQXZCLENBQVo7SUFDQUQsR0FBRyxDQUFDRSxTQUFKLEdBQWdCLE1BQWhCO0lBQ0EsSUFBTTNCLEdBQUcsR0FBR1MsUUFBUSxDQUFDaUIsYUFBVCxDQUF1QixLQUF2QixDQUFaO0lBQ0ExQixHQUFHLENBQUMyQixTQUFKLEdBQWdCSCxJQUFJLENBQUN4QixHQUFyQjtJQUNBLElBQU1DLEtBQUssR0FBR1EsUUFBUSxDQUFDaUIsYUFBVCxDQUF1QixLQUF2QixDQUFkO0lBQ0F6QixLQUFLLENBQUNVLFNBQU4sR0FBa0JhLElBQUksQ0FBQ3ZCLEtBQXZCO0lBQ0FBLEtBQUssQ0FBQzBCLFNBQU4sR0FBa0IsV0FBbEI7SUFDQSxJQUFNdEIsS0FBSyxHQUFHSSxRQUFRLENBQUNpQixhQUFULENBQXVCLEtBQXZCLENBQWQ7SUFDQXJCLEtBQUssQ0FBQ00sU0FBTixHQUFrQmEsSUFBSSxDQUFDbkIsS0FBdkI7SUFDQUEsS0FBSyxDQUFDc0IsU0FBTixHQUFrQixXQUFsQjtJQUVBRixHQUFHLENBQUNHLE1BQUosQ0FBVzVCLEdBQVg7SUFDQXlCLEdBQUcsQ0FBQ0csTUFBSixDQUFXM0IsS0FBWDtJQUNBd0IsR0FBRyxDQUFDRyxNQUFKLENBQVd2QixLQUFYO0lBQ0FpQixpQkFBaUIsQ0FBQ00sTUFBbEIsQ0FBeUJILEdBQXpCO0VBQ0YsQ0FoQkQ7RUFrQkEsT0FBT0gsaUJBQVA7QUFFRjs7QUFFRCxpRUFBZUQsTUFBZjs7Ozs7Ozs7Ozs7Ozs7QUN2QkEsU0FBU1EsV0FBVCxDQUFzQi9CLElBQXRCLEVBQTRCUyxNQUE1QixFQUFvQztFQUVoQyxJQUFNdUIsU0FBUyxHQUFHckIsUUFBUSxDQUFDQyxhQUFULENBQXVCLFNBQXZCLENBQWxCO0VBQ0FaLElBQUksQ0FBQ3lCLE9BQUwsQ0FBYSxVQUFDQyxJQUFELEVBQU9PLEtBQVAsRUFBaUI7SUFDMUIsSUFBTU4sR0FBRyxHQUFHaEIsUUFBUSxDQUFDaUIsYUFBVCxDQUF1QixLQUF2QixDQUFaOztJQUNBLElBQUlLLEtBQUosRUFBVztNQUNQTixHQUFHLENBQUNFLFNBQUosR0FBZ0IsNkJBQWhCO0lBQ0gsQ0FGRCxNQUVPO01BQ0gsSUFBSXBCLE1BQU0sR0FBQyxHQUFYLEVBQWdCO1FBQ1p5QixPQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaO1FBQ0FSLEdBQUcsQ0FBQ0UsU0FBSixHQUFnQixtQ0FBaEI7TUFDSCxDQUhELE1BR087UUFDSEYsR0FBRyxDQUFDRSxTQUFKLEdBQWdCLGdDQUFoQjtNQUNIO0lBRUo7O0lBQ0QsSUFBTTNCLEdBQUcsR0FBR1MsUUFBUSxDQUFDaUIsYUFBVCxDQUF1QixLQUF2QixDQUFaO0lBQ0ExQixHQUFHLENBQUMyQixTQUFKLEdBQWdCLFVBQWhCO0lBQ0EsSUFBTU8sWUFBWSxHQUFDekIsUUFBUSxDQUFDaUIsYUFBVCxDQUF1QixHQUF2QixDQUFuQjtJQUNBUSxZQUFZLENBQUNQLFNBQWIsR0FBeUIsY0FBekI7SUFDQU8sWUFBWSxDQUFDdkIsU0FBYixHQUF1QmEsSUFBSSxDQUFDdkIsS0FBNUI7SUFDQSxJQUFNa0MsWUFBWSxHQUFDMUIsUUFBUSxDQUFDaUIsYUFBVCxDQUF1QixHQUF2QixDQUFuQjtJQUNBUyxZQUFZLENBQUNSLFNBQWIsR0FBdUIsY0FBdkI7SUFDQVEsWUFBWSxDQUFDeEIsU0FBYixHQUF1QmEsSUFBSSxDQUFDdEIsS0FBNUI7SUFDQSxJQUFNa0MsUUFBUSxHQUFDM0IsUUFBUSxDQUFDaUIsYUFBVCxDQUF1QixLQUF2QixDQUFmO0lBQ0FVLFFBQVEsQ0FBQ1QsU0FBVCxHQUFtQixVQUFuQjtJQUVBRixHQUFHLENBQUNHLE1BQUosQ0FBVzVCLEdBQVg7SUFDQXlCLEdBQUcsQ0FBQ0csTUFBSixDQUFXTSxZQUFYO0lBQ0FULEdBQUcsQ0FBQ0csTUFBSixDQUFXTyxZQUFYO0lBQ0FWLEdBQUcsQ0FBQ0csTUFBSixDQUFXUSxRQUFYO0lBRUFOLFNBQVMsQ0FBQ0YsTUFBVixDQUFpQkgsR0FBakI7RUFDSCxDQTlCRDtFQWdDQSxPQUFPSyxTQUFQO0FBRUg7O0FBRUQsaUVBQWVELFdBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLDhIQUE0QztBQUN4Riw0Q0FBNEMsNEhBQTJDO0FBQ3ZGLDRDQUE0QywwSEFBMEM7QUFDdEYsNENBQTRDLGdJQUE2QztBQUN6Riw0Q0FBNEMsZ0lBQTZDO0FBQ3pGLDRDQUE0Qyx3SEFBeUM7QUFDckYsNENBQTRDLDRIQUEyQztBQUN2Riw0Q0FBNEMsNEhBQTJDO0FBQ3ZGLDRDQUE0QyxnSEFBcUM7QUFDakYsNENBQTRDLGtIQUFzQztBQUNsRiw2Q0FBNkMsb0hBQXVDO0FBQ3BGLDZDQUE2QyxvSEFBdUM7QUFDcEYsNkNBQTZDLGdJQUE2QztBQUMxRiw2Q0FBNkMsZ0lBQTZDO0FBQzFGLDZDQUE2QyxrSUFBOEM7QUFDM0YsNkNBQTZDLHNIQUF3QztBQUNyRiw2Q0FBNkMsZ0hBQXFDO0FBQ2xGLDZDQUE2QyxrSEFBc0M7QUFDbkYsNkNBQTZDLHdIQUF5QztBQUN0Riw2Q0FBNkMsd0hBQXlDO0FBQ3RGLDZDQUE2QywwSEFBMEM7QUFDdkYsNkNBQTZDLG9IQUF1QztBQUNwRiw2Q0FBNkMsa0hBQXNDO0FBQ25GLDZDQUE2QyxvSEFBdUM7QUFDcEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RSwwQ0FBMEMsc0ZBQStCO0FBQ3pFLDBDQUEwQyxzRkFBK0I7QUFDekUsMENBQTBDLHNGQUErQjtBQUN6RTtBQUNBLGdEQUFnRCxtQkFBbUIsaUJBQWlCLDhCQUE4QiwyQkFBMkIsK0JBQStCLDJCQUEyQixLQUFLLGtCQUFrQixvQkFBb0Isc0JBQXNCLDRCQUE0Qix1QkFBdUIseUJBQXlCLHdCQUF3QiwwQkFBMEIsc0JBQXNCLGdDQUFnQyw4QkFBOEIsMkJBQTJCLEtBQUssdUJBQXVCLHFCQUFxQixxQkFBcUIsS0FBSyxpQkFBaUIsbUJBQW1CLHFCQUFxQixxQkFBcUIsMkJBQTJCLHdCQUF3QixzQkFBc0IsK0JBQStCLEtBQUssb0JBQW9CLHVCQUF1QixzQkFBc0IsTUFBTSx5QkFBeUIsb0JBQW9CLHNCQUFzQix1Q0FBdUMsNEJBQTRCLE1BQU0sNkJBQTZCLHFCQUFxQix3QkFBd0IsdUJBQXVCLDZCQUE2QixzQkFBc0IsMkJBQTJCLDJFQUEyRSxzQ0FBc0MsdUNBQXVDLHlCQUF5QixNQUFNLGlDQUFpQyx1QkFBdUIsbUJBQW1CLHNCQUFzQiwwQkFBMEIsS0FBSyxzQkFBc0Isb0JBQW9CLHNCQUFzQixtQ0FBbUMsa0JBQWtCLGdDQUFnQywwQkFBMEIsdUNBQXVDLEtBQUssb0JBQW9CLG9CQUFvQixxQkFBcUIsMEVBQTBFLGlDQUFpQyxxQ0FBcUMsNEJBQTRCLDZCQUE2QiwwRUFBMEUscUJBQXFCLE1BQU0sNEJBQTRCLHNCQUFzQix1QkFBdUIsdUNBQXVDLDBFQUEwRSxLQUFLLHVDQUF1QywwRUFBMEUseUJBQXlCLEtBQUssb0JBQW9CLG9CQUFvQixxQkFBcUIsMEVBQTBFLHFDQUFxQyxLQUFLLHFDQUFxQywwQkFBMEIsc0JBQXNCLHVDQUF1Qyw0QkFBNEIscUJBQXFCLHNCQUFzQixLQUFLLG9CQUFvQixxQkFBcUIscUJBQXFCLDBFQUEwRSwrQkFBK0IscUNBQXFDLHlCQUF5QixLQUFLLDZCQUE2QiwwRUFBMEUsS0FBSyw4QkFBOEIsbUJBQW1CLEtBQUssa0JBQWtCLHFCQUFxQixzQkFBc0IsMEVBQTBFLGlDQUFpQyxxQ0FBcUMsS0FBSyxZQUFZLHNCQUFzQixxQkFBcUIsZ0NBQWdDLDRCQUE0QixLQUFLLFdBQVcsNEJBQTRCLDhCQUE4QixxQkFBcUIsc0JBQXNCLHdCQUF3QixzQkFBc0IsS0FBSyxzQkFBc0IsZ0VBQWdFLDZCQUE2QixrQ0FBa0MscUJBQXFCLHNCQUFzQixzQkFBc0IsNEJBQTRCLEtBQUssa0JBQWtCLG9CQUFvQixxQkFBcUIsMkhBQTJILDZDQUE2QywrQ0FBK0MsNkNBQTZDLEtBQUsscUJBQXFCLHVCQUF1QiwwQkFBMEIsd0JBQXdCLHdCQUF3QixLQUFLLDRCQUE0QiwyQkFBMkIsb0JBQW9CLG9CQUFvQixvQkFBb0Isa0NBQWtDLHlCQUF5QiwrQkFBK0Isb0JBQW9CLG9CQUFvQixxQkFBcUIsMkVBQTJFLGlDQUFpQyxxQ0FBcUMsMEJBQTBCLEtBQUssb0JBQW9CLG9CQUFvQixxQkFBcUIsMkVBQTJFLGlDQUFpQywwQkFBMEIscUNBQXFDLEtBQUssNkJBQTZCLG9CQUFvQixzQkFBc0IsMkJBQTJCLEtBQUssMkJBQTJCLHdCQUF3QixvQkFBb0IsdUNBQXVDLCtCQUErQiwwQkFBMEIsS0FBSyxzQkFBc0IsMkJBQTJCLGdCQUFnQixlQUFlLHFCQUFxQix1Q0FBdUMsK0JBQStCLG9DQUFvQyxLQUFLLDhCQUE4Qix3QkFBd0IsNEJBQTRCLDBCQUEwQiwyQkFBMkIsS0FBSyxpQ0FBaUMsd0JBQXdCLHlCQUF5QiwyQkFBMkIscUJBQXFCLHFCQUFxQiwwQkFBMEIsS0FBSyw2QkFBNkIsd0JBQXdCLHlCQUF5Qix5QkFBeUIsS0FBSyx3QkFBd0Isc0JBQXNCLDBCQUEwQiw0QkFBNEIsS0FBSyxtQ0FBbUMsc0JBQXNCLHVCQUF1Qiw4QkFBOEIsMENBQTBDLDBDQUEwQyw4QkFBOEIsc0NBQXNDLEtBQUssaUJBQWlCLDZFQUE2RSxpQ0FBaUMsdUNBQXVDLHdDQUF3QyxPQUFPLGFBQWEsMkVBQTJFLCtCQUErQixxQ0FBcUMsc0NBQXNDLEtBQUssaUJBQWlCLHlCQUF5QixLQUFLLDZCQUE2QixxQkFBcUIsMkJBQTJCLEtBQUssMENBQTBDLG9CQUFvQiwwQkFBMEIsd0JBQXdCLEtBQUssOENBQThDLG9CQUFvQix3QkFBd0IseUJBQXlCLDBCQUEwQixtQkFBbUIsMkJBQTJCLEtBQUssb0RBQW9ELG1CQUFtQixvQkFBb0Isc0JBQXNCLDJCQUEyQiwyQkFBMkIscUJBQXFCLG9CQUFvQix1QkFBdUIsaUNBQWlDLHVCQUF1Qix3QkFBd0IsS0FBSyxtREFBbUQsb0JBQW9CLHFCQUFxQiw0QkFBNEIsNEJBQTRCLHFCQUFxQiw4QkFBOEIsNkJBQTZCLHlCQUF5Qix3QkFBd0IsMEJBQTBCLHVCQUF1QixxQkFBcUIsTUFBTSxjQUFjLDRCQUE0QixxQkFBcUIsc0JBQXNCLDRCQUE0Qix5QkFBeUIsNEVBQTRFLGtDQUFrQyxzQ0FBc0MseUJBQXlCLDBCQUEwQixnREFBZ0QsTUFBTSw0QkFBNEIsZUFBZSxnQ0FBZ0MsVUFBVSxpQkFBaUIsOEJBQThCLFVBQVUsTUFBTSw4QkFBOEIsb0JBQW9CLHNCQUFzQiwyQkFBMkIsS0FBSyxrQkFBa0Isc0JBQXNCLHlCQUF5Qix5QkFBeUIsS0FBSyxpQkFBaUIsMkJBQTJCLEtBQUssbUJBQW1CLDBCQUEwQixLQUFLLG9CQUFvQiwyQkFBMkIsS0FBSyxxQkFBcUIsc0JBQXNCLDRCQUE0QixtQkFBbUIsS0FBSyx1QkFBdUIscUJBQXFCLHNCQUFzQixxQkFBcUIsOEJBQThCLHdCQUF3QixrQ0FBa0MsMkJBQTJCLHlCQUF5Qix3QkFBd0IsMEJBQTBCLDBCQUEwQiwyQkFBMkIsS0FBSyxrREFBa0Qsb0JBQW9CLHFCQUFxQix1QkFBdUIsc0JBQXNCLEtBQUssbUJBQW1CLHFCQUFxQixzQkFBc0IsMkVBQTJFLCtCQUErQixxQ0FBcUMscUJBQXFCLEtBQUssaUJBQWlCLHFCQUFxQixLQUFLLHVCQUF1Qix1QkFBdUIsd0JBQXdCLDBCQUEwQiwwQkFBMEIsS0FBSyx1QkFBdUIsdUJBQXVCLHdCQUF3QiwwQkFBMEIsS0FBSywrQkFBK0Isa0VBQWtFLG9CQUFvQixxQkFBcUIsaUNBQWlDLEtBQUssbUJBQW1CLDJFQUEyRSxvQkFBb0IscUJBQXFCLCtCQUErQiwwQkFBMEIsS0FBSyxnQkFBZ0IsaUJBQWlCLG1CQUFtQixLQUFLLG1CQUFtQixxQkFBcUIsMEJBQTBCLDJFQUEyRSxtQ0FBbUMscUNBQXFDLHlCQUF5QixxQkFBcUIsc0JBQXNCLGlDQUFpQyx1QkFBdUIsd0JBQXdCLEtBQUssbUJBQW1CLG9CQUFvQixLQUFLLG1CQUFtQixtQkFBbUIsd0JBQXdCLHVCQUF1QixxQkFBcUIsS0FBSyxXQUFXLDhCQUE4QixLQUFLLG1CQUFtQixxQkFBcUIsMEJBQTBCLHNCQUFzQixzQkFBc0Isd0JBQXdCLDRCQUE0QixzQ0FBc0MsS0FBSyx5QkFBeUIscUJBQXFCLGtDQUFrQywyQkFBMkIseUJBQXlCLHdCQUF3QiwwQkFBMEIsdUJBQXVCLG1DQUFtQywyQkFBMkIsS0FBSyxlQUFlLHFCQUFxQixzQkFBc0IsMkJBQTJCLDRCQUE0QixrQ0FBa0MsS0FBSyxtQkFBbUIsb0NBQW9DLG9CQUFvQixxQkFBcUIsMkVBQTJFLCtCQUErQixxQ0FBcUMsS0FBSyxvQkFBb0Isb0NBQW9DLG9CQUFvQixxQkFBcUIsMkVBQTJFLCtCQUErQixxQ0FBcUMsS0FBSyxpQkFBaUIsb0NBQW9DLG9CQUFvQixxQkFBcUIsMkVBQTJFLCtCQUErQixxQ0FBcUMsS0FBSyxnQkFBZ0Isb0NBQW9DLG9CQUFvQixxQkFBcUIsMkVBQTJFLCtCQUErQixxQ0FBcUMsS0FBSyxpQkFBaUIsb0JBQW9CLDBCQUEwQix3REFBd0Qsc0NBQXNDLDRCQUE0QixTQUFTLHdCQUF3Qiw0QkFBNEIsU0FBUyxzQkFBc0IsMEJBQTBCLDZCQUE2Qiw2QkFBNkIsU0FBUyx5QkFBeUIsNkJBQTZCLFNBQVMsdUJBQXVCLDZCQUE2QixTQUFTLDRCQUE0Qiw2QkFBNkIsU0FBUyx1QkFBdUIseUJBQXlCLFNBQVMsc0RBQXNELDJCQUEyQixTQUFTLHVCQUF1Qix1QkFBdUIsbUNBQW1DLHVCQUF1Qix1QkFBdUIsNEJBQTRCLCtCQUErQixtQ0FBbUMsU0FBUyxlQUFlLHVCQUF1QiwwQkFBMEIsU0FBUyxtQkFBbUIsOEJBQThCLDBCQUEwQiwyQ0FBMkMsU0FBUyx5QkFBeUIsNkJBQTZCLDRCQUE0QixTQUFTLGdEQUFnRCxxQ0FBcUMsb0JBQW9CLHFDQUFxQyxpQkFBaUIsK0VBQStFLHdCQUF3QixtQ0FBbUMseUJBQXlCLFNBQVMsK0JBQStCLGtCQUFrQixvQ0FBb0MsYUFBYSwyQkFBMkIsbUNBQW1DLGFBQWEsU0FBUyx5QkFBeUIsZ0NBQWdDLDRCQUE0QiwwQkFBMEIsU0FBUyxrQkFBa0Isd0JBQXdCLCtCQUErQixTQUFTLHNDQUFzQywwQkFBMEIsaUNBQWlDLHlCQUF5Qiw4QkFBOEIsU0FBUyx1QkFBdUIsd0JBQXdCLDZCQUE2QixTQUFTLGtDQUFrQyw0QkFBNEIsZ0NBQWdDLDZCQUE2Qiw2QkFBNkIsOEJBQThCLFNBQVMseUNBQXlDLDRCQUE0Qiw2QkFBNkIsNkJBQTZCLHdCQUF3Qiw4QkFBOEIsU0FBUyxpQ0FBaUMseUJBQXlCLDZCQUE2QiwrQkFBK0IsbUNBQW1DLFdBQVcsa0RBQWtELHlCQUF5Qiw4QkFBOEIsNEJBQTRCLCtCQUErQixTQUFTLDBEQUEwRCx1QkFBdUIsNEJBQTRCLDZCQUE2Qiw4QkFBOEIseUJBQXlCLDhCQUE4QiwrQkFBK0IsU0FBUyx3REFBd0QseUJBQXlCLFNBQVMsbURBQW1ELHlCQUF5QixTQUFTLDJCQUEyQiwwQkFBMEIsU0FBUyxLQUFLLFdBQVcsb0ZBQW9GLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLEtBQUssT0FBTyxLQUFLLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxLQUFLLEtBQUssS0FBSyxL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RUFFM0NDLFFBQVEsRUFBRSxJQUZpQztFQUczQ0MsVUFBVSxFQUFFO0lBQ1ZDLEVBQUUsRUFBRSxvQkFETTtJQUVWQyxTQUFTLEVBQUU7RUFGRDtBQUgrQixDQUFsQyxDQUFiO0FBUUVqQiw4REFBVyxDQUFDL0Isc0VBQUQsRUFBZ0J3QyxNQUFNLENBQUNDLFVBQXZCLENBQVg7QUFDQSxJQUFJUSxPQUFPLEdBQUcsSUFBSU4sTUFBSixDQUFXLHFCQUFYLEVBQWtDO0VBQzlDTyxhQUFhLEVBQUUsQ0FEK0I7RUFFOUNDLFlBQVksRUFBRSxFQUZnQztFQUc5Q0MsY0FBYyxFQUFFLENBSDhCO0VBSTlDQyxJQUFJLEVBQUUsSUFKd0M7RUFLOUM7RUFDQUMsc0JBQXNCLEVBQUUsSUFOc0I7RUFPOUNDLFVBQVUsRUFBRTtJQUNWQyxNQUFNLEVBQUUscUJBREU7SUFFVkMsTUFBTSxFQUFFO0VBRkU7QUFQa0MsQ0FBbEMsQ0FBZCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2l0cGxleC8uL3NyYy9qcy9jb21wb25lbnRzL2Fzc2V0cy9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly93aXRwbGV4Ly4vc3JjL2pzL2NvbXBvbmVudHMvbmF2YmFyLmpzIiwid2VicGFjazovL3dpdHBsZXgvLi9zcmMvanMvY29tcG9uZW50cy9yZW5kZXJJdGVtcy5qcyIsIndlYnBhY2s6Ly93aXRwbGV4Ly4vc3JjL2pzL2NvbXBvbmVudHMvc2xpZGVzLmpzIiwid2VicGFjazovL3dpdHBsZXgvLi9zcmMvY3NzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly93aXRwbGV4Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93aXRwbGV4Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93aXRwbGV4Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2l0cGxleC8uL3NyYy9jc3MvaW5kZXguY3NzP2Y3ZWEiLCJ3ZWJwYWNrOi8vd2l0cGxleC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93aXRwbGV4Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93aXRwbGV4Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dpdHBsZXgvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2l0cGxleC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dpdHBsZXgvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93aXRwbGV4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dpdHBsZXgvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2l0cGxleC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2l0cGxleC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dpdHBsZXgvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93aXRwbGV4L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2l0cGxleC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93aXRwbGV4L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dpdHBsZXgvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dpdHBsZXgvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBjb25zdCBkYXRhPXtcclxuICAgIHByb2R1Y3RzOltcclxuICAgIHtcclxuICAgICAgICBpbWc6ICdwcm9kdWN0JyxcclxuICAgICAgICB0aXRsZTogJ0VMRiBCQVIgUkYgNzAwJyxcclxuICAgICAgICBwcmljZTogNzAwMCxcclxuICAgICAgICBzdGFyczogJ3N0YXJzJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbWc6ICdwcm9kdWN0JyxcclxuICAgICAgICB0aXRsZTogJ0VMRiBCQVIgUkYgNjAwJyxcclxuICAgICAgICBwcmljZTogNjAwMCxcclxuICAgICAgICBzdGFyczogJ3N0YXJzJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbWc6ICdwcm9kdWN0JyxcclxuICAgICAgICB0aXRsZTogJ0VMRiBCQVIgUkYgNTAwJyxcclxuICAgICAgICBwcmljZTogNTAwMCxcclxuICAgICAgICBzdGFyczogJ3N0YXJzJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbWc6ICdwcm9kdWN0JyxcclxuICAgICAgICB0aXRsZTogJ0VMRiBCQVIgUkYgNDAwJyxcclxuICAgICAgICBwcmljZTogNDAwMCxcclxuICAgICAgICBzdGFyczogJ3N0YXJzJ1xyXG4gICAgfVxyXG5dLFxyXG4gICAgYXJjaGl2ZWQ6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltZzogJ3ZhcGVzdGVyJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdWQVBFU1RFUlMnLFxyXG4gICAgICAgICAgICBjb3VudDogMTU2NSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOiAnY2lnYXJldHRlJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdDSUdBUkVUVEVTIFNBVkVEJyxcclxuICAgICAgICAgICAgY291bnQ6IDc1OCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOiAnZmxhdm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdQUkUtTUFERSBGTEFWT1JTJyxcclxuICAgICAgICAgICAgY291bnQ6IDI5ODMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltZzogJ2NvbWJvJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdDVVNUT00gQ09NQk9TJyxcclxuICAgICAgICAgICAgY291bnQ6IDEyNCxcclxuXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59IiwiXHJcbmZ1bmN0aW9uIG5hdmJhcihzY3JlZW4pIHtcclxuICAgIGNvbnN0IG5hdkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXInKTtcclxuICAgIG5hdkNvbnRhaW5lci5pbm5lckhUTUw9Jyc7XHJcblxyXG4gICAgaWYgKHNjcmVlbjwxMjgwKSB7XHJcblxyXG4gICAgICAgIG5hdkNvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz0nbmF2YmFyV3JhcHBlcic+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J21lbnUtaWNvbic+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J21lbnUtbG9nbyc+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3NpZ25pblRleHQnPlNJR04gSU48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPSduYXZiYXJDb250ZW50Jz5cclxuICAgICAgICAgICAgPGRpdj5ORVc8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5PVVIgUFJPRFVDVFM8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5CUkFORFM8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPSdtZW51LWljb25zLW1vYmlsZSc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ltZ0Jhc2tldCc+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ltZ1NlYXJjaCc+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ltZ0xhbmdNb2JpbGUnPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWljb24nKTtcclxuICAgICAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyJyk7XHJcbiAgICAgICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWxvZ28nKTtcclxuICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZ25pblRleHQnKTtcclxuICAgICAgICBjb25zdCBuYXZDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhckNvbnRlbnQnKTtcclxuICAgICAgICBjb25zdCBpY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWljb25zLW1vYmlsZScpO1xyXG5cclxuICAgICAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ21lbnVPcGVuJyk7XHJcbiAgICAgICAgICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKCdtZW51T3BlbicpO1xyXG4gICAgICAgICAgICBsb2dvLmNsYXNzTGlzdC50b2dnbGUoJ21lbnVPcGVuJyk7XHJcbiAgICAgICAgICAgIHRleHQuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudU9wZW4nKTtcclxuICAgICAgICAgICAgbmF2Q29udGVudC5jbGFzc0xpc3QudG9nZ2xlKCdtZW51T3BlbicpO1xyXG4gICAgICAgICAgICBpY29ucy5jbGFzc0xpc3QudG9nZ2xlKCdtZW51T3BlbicpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5hdkNvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz0nbG9nb0ltZyc+PC9kaXY+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgIDxhPjxsaT5ORVc8L2xpPjwvYT5cclxuICAgICAgICAgICA8YSBocmVmID0gJy4vcHJvZHVjdC5odG1sJz48bGk+T1VSIFBST0RVQ1RTPC9saT48L2E+XHJcbiAgICAgICAgICAgPGE+PGxpPkJSQU5EUzwvbGk+PC9hPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0nc2lnbmluU2VhcmNoTGFuZ1dyYXBwZXInPlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3M9J2ltZ0xhbmcnPjwvZGl2PlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3M9J3NpZ25pblRleHQnPlNJR04gSU48L2Rpdj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzPSdpbWdTZWFyY2gnPjwvZGl2PlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3M9J2ltZ0Jhc2tldCc+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIGA7XHJcbiAgICB9XHJcbiBcclxuXHJcbiAgICByZXR1cm4gbmF2Q29udGFpbmVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuYXZiYXI7XHJcbiIsIlxyXG5cclxuZnVuY3Rpb24gcmVuZGVyIChkYXRhKSB7XHJcbiAgIGNvbnN0IGFyY2hpdmVkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFyY2hpdmVkJyk7XHJcblxyXG4gICBkYXRhLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgZGl2LmNsYXNzTmFtZSA9ICdpdGVtJztcclxuICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGltZy5jbGFzc05hbWUgPSBpdGVtLmltZztcclxuICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgdGl0bGUuaW5uZXJIVE1MID0gaXRlbS50aXRsZTtcclxuICAgICAgdGl0bGUuY2xhc3NOYW1lID0gJ2l0ZW1UaXRsZSc7XHJcbiAgICAgIGNvbnN0IGNvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGNvdW50LmlubmVySFRNTCA9IGl0ZW0uY291bnQ7XHJcbiAgICAgIGNvdW50LmNsYXNzTmFtZSA9ICdpdGVtQ291bnQnXHJcblxyXG4gICAgICBkaXYuYXBwZW5kKGltZyk7XHJcbiAgICAgIGRpdi5hcHBlbmQodGl0bGUpO1xyXG4gICAgICBkaXYuYXBwZW5kKGNvdW50KTtcclxuICAgICAgYXJjaGl2ZWRDb250YWluZXIuYXBwZW5kKGRpdik7XHJcbiAgIH0pO1xyXG5cclxuICAgcmV0dXJuIGFyY2hpdmVkQ29udGFpbmVyO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyO1xyXG4iLCJcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU2xpZGUgKGRhdGEsIHNjcmVlbikge1xyXG4gICAgXHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Vjb25kJyk7XHJcbiAgICBkYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaWYgKGluZGV4KSB7XHJcbiAgICAgICAgICAgIGRpdi5jbGFzc05hbWUgPSBcInN3aXBlci1zbGlkZSBwcm9kdWN0IGFkanVzdFwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChzY3JlZW48NzAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbWonKVxyXG4gICAgICAgICAgICAgICAgZGl2LmNsYXNzTmFtZSA9IFwic3dpcGVyLXNsaWRlIHByb2R1Y3QgYWRqdXN0TWluTW9iXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkaXYuY2xhc3NOYW1lID0gXCJzd2lwZXItc2xpZGUgcHJvZHVjdCBhZGp1c3RNaW5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaW1nLmNsYXNzTmFtZSA9ICdzbGlkZUltZyc7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdFRpdGxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBwcm9kdWN0VGl0bGUuY2xhc3NOYW1lID0gJ3Byb2R1Y3RUaXRsZSc7XHJcbiAgICAgICAgcHJvZHVjdFRpdGxlLmlubmVySFRNTD1pdGVtLnRpdGxlO1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RQcmljZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgcHJvZHVjdFByaWNlLmNsYXNzTmFtZT0ncHJvZHVjdFByaWNlJztcclxuICAgICAgICBwcm9kdWN0UHJpY2UuaW5uZXJIVE1MPWl0ZW0ucHJpY2U7XHJcbiAgICAgICAgY29uc3Qgc3RhcnNJbWc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBzdGFyc0ltZy5jbGFzc05hbWU9J3N0YXJzSW1nJztcclxuXHJcbiAgICAgICAgZGl2LmFwcGVuZChpbWcpO1xyXG4gICAgICAgIGRpdi5hcHBlbmQocHJvZHVjdFRpdGxlKTtcclxuICAgICAgICBkaXYuYXBwZW5kKHByb2R1Y3RQcmljZSk7XHJcbiAgICAgICAgZGl2LmFwcGVuZChzdGFyc0ltZyk7XHJcblxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoZGl2KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjb250YWluZXI7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTbGlkZTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2JsYWNrX2Fycm93LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy93aGl0ZV9tZW51LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9ibHVlX21lbnUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2JsYWNrX2Jhc2tldC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvYmxhY2tfc2VhcmNoLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9lbmdfZmxhZy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvd2hpdGVfbG9nby5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvYmxhY2tfbG9nby5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvbG9nby5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvYXJyb3cucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9zZWFyY2gucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzExX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9iYXNrZXQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEyX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9iYWNrZ3JvdW5kXzEucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEzX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9iYWNrZ3JvdW5kXzIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE0X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9tb2JpbGVfc2Nyb2xsLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvcHJvZHVjdC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTZfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2RyYW0ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE3X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9zdGFycy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMThfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3dob1dlQXJlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xOV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvdmFwZXN0ZXIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIwX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9jaWdhcmV0dGUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIxX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9mbGF2b3IucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIyX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9jb21iby5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjNfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3Njcm9sbC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xN19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMThfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xOF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTlfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xOV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOjA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi53YXJuaW5nIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTE4cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMzRTNFM0U7XFxyXFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi53YXJuaW5nIHNwYW4ge1xcclxcbiAgICB3aWR0aDogMjg3cHg7XFxyXFxuICAgIGhlaWdodDogNjNweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICAgIHdpZHRoOiA4NCU7XFxyXFxuICAgIGhlaWdodDogNjBweDtcXHJcXG4gICAgbWFyZ2luOiAzMHB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IDUwMDAwMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLm5hdmJhckNvbnRlbnQge1xcclxcbiAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgIG1hcmdpbjogYXV0bztcXHJcXG4gfVxcclxcblxcclxcbiAubmF2YmFyV3JhcHBlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuIH1cXHJcXG5cXHJcXG4gLm5hdmJhckNvbnRlbnQgZGl2IHtcXHJcXG4gICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgY29sb3I6ICMwMDAwMDA7XFxyXFxuICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTtcXHJcXG4gICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gfVxcclxcblxcclxcbi5uYXZiYXJDb250ZW50Lm1lbnVPcGVuIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEyMHB4O1xcclxcbn1cXHJcXG4ubmF2YmFyLm1lbnVPcGVuIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICAjRTVFNUU1O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICAvKiBwYWRkaW5nOiAzMHB4OyAqL1xcclxcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMXMgbGluZWFyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pY29uIHtcXHJcXG4gICAgd2lkdGg6IDQ0cHg7XFxyXFxuICAgIGhlaWdodDogNDRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXJcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaWNvbi5tZW51T3BlbiB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxyXFxuICAgIG1hcmdpbjogMzBweDtcXHJcXG59IFxcclxcblxcclxcbi5tZW51LWljb25zLW1vYmlsZSB7XFxyXFxuICBkaXNwbGF5OiBub25lOyAgXFxyXFxuICBtYXJnaW46IGF1dG9cXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaWNvbnMtbW9iaWxlIC5pbWdCYXNrZXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pY29ucy1tb2JpbGUgLmltZ1NlYXJjaCB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XFxyXFxufVxcclxcbi5pbWdMYW5nTW9iaWxlIHtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogMzZweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaWNvbnMtbW9iaWxlLm1lbnVPcGVuIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1sb2dvIHtcXHJcXG4gICAgd2lkdGg6IDE1NHB4O1xcclxcbiAgICBoZWlnaHQ6IDY0cHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWxvZ28ubWVudU9wZW4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbmluVGV4dC5tZW51T3BlbiB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbi5sb2dvSW1nIHtcXHJcXG4gICAgd2lkdGg6IDI2N3B4O1xcclxcbiAgICBoZWlnaHQ6IDExMXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84X19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDYwMHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxudWwgbGkge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6IEJlYmFzIE5ldWU7XFxyXFxuICBjb2xvcjogI0ZGRkZGRjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG51bCBsaTo6YWZ0ZXIge1xcclxcbiAgIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzlfX18gKyBcIik7XFxyXFxuICAgcGFkZGluZy1sZWZ0OiA1cHhcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ25pblNlYXJjaExhbmdXcmFwcGVyIHtcXHJcXG4gICAgd2lkdGg6IDQwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nTGFuZyB7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDM2cHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gKyBcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzlfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMzZweCAzNnB4LCAxMHB4IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDAlLCAxMDAlIDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ25pblRleHQge1xcclxcbiAgICBjb2xvcjogI0ZGRkZGRjtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDExcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbmluVGV4dDo6YWZ0ZXIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MTg0RTU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtNzJweFxcclxcbn1cXHJcXG5cXHJcXG4uaW1nU2VhcmNoIHtcXHJcXG4gICAgd2lkdGg6IDI5cHg7XFxyXFxuICAgIGhlaWdodDogMjlweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbWdCYXNrZXQge1xcclxcbiAgICB3aWR0aDogMjlweDtcXHJcXG4gICAgaGVpZ2h0OiAyOXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMV9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXBlci1jb250YWluZXItMSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5zd2lwZXItc2xpZGUge1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIHBhZGRpbmc6IDQwcHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFyYWxsYXgtYmcge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXBlci1zbGlkZSAudGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIG1hcmdpbi10b3A6IDI1NnB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zd2lwZXItc2xpZGUgLnN1YnRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxOTNweDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBsaW5lLWhlaWdodDogLTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXBlci1zbGlkZSAudGV4dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuMztcXHJcXG59XFxyXFxuLnN3aXBlci1wYWdpbmF0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwdmg7XFxyXFxufVxcclxcblxcclxcbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xcclxcbiAgICAgIHdpZHRoOiAyM3B4O1xcclxcbiAgICAgIGhlaWdodDogMjNweDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiAjM0UzRTNFO1xcclxcbiAgICAgIGJvcmRlcjogMC41cHggc29saWQgI0ZGRkZGRlxcclxcbn1cXHJcXG5cXHJcXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XFxyXFxuICAgICAgYmFja2dyb3VuZDogIzUxODRFNTtcXHJcXG4gICAgICBib3JkZXI6IDAuNXB4IHNvbGlkICM1MTg0RTU7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZTEge1xcclxcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEyX19fICsgXCIpO1xcclxcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0NSUgNDAlIDtcXHJcXG4gIH1cXHJcXG4uc2xpZGUyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTNfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDU1JSA0MCUgO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGUzIHtcXHJcXG4gICAgYmFja2dyb3VuZDogZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZFNsaWRlQ29udGVudCB7XFxyXFxuICAgIHdpZHRoOiAzMzFweDtcXHJcXG4gICAgbWFyZ2luOiAxODhweCBhdXRvO1xcclxcbn1cXHJcXG4uc2Vjb25kU2xpZGVDb250ZW50IGRpdjpudGgtY2hpbGQoMSkge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZFNsaWRlQ29udGVudCBkaXY6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZFNsaWRlQ29udGVudCBkaXY6bnRoLWNoaWxkKDMpIGJ1dHRvbntcXHJcXG4gICB3aWR0aDogMTAwJTtcXHJcXG4gICBoZWlnaHQ6IDU0cHg7XFxyXFxuICAgY29sb3I6ICNGRkZGRkY7XFxyXFxuICAgYmFja2dyb3VuZDogIzUxODRFNTtcXHJcXG4gICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgYm9yZGVyOiBub25lO1xcclxcbiAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kU2xpZGVDb250ZW50IGRpdjpudGgtY2hpbGQoMykgaW5wdXR7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDU0cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM3NzY4Njg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweFxcclxcbiB9XFxyXFxuXFxyXFxuIGlucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XFxyXFxuICAgIGNvbG9yOiAjQzFDMUMxO1xcclxcbiAgICBtYXJnaW46IDMwcHg7XFxyXFxuIH1cXHJcXG4gLnNjcm9sbCB7XFxyXFxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICB3aWR0aDogMTRweDtcXHJcXG4gICAgIGhlaWdodDogMTVweDtcXHJcXG4gICAgIG1hcmdpbi10b3A6IC0xMDBweDtcXHJcXG4gICAgIHotaW5kZXg6IDIwMDAwMDtcXHJcXG4gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE0X19fICsgXCIpO1xcclxcbiAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgIG1hcmdpbi1sZWZ0OiA1MCU7XFxyXFxuICAgICBhbmltYXRpb246IHNjcm9sbCAxLjVzIGluZmluaXRlIGxpbmVhcjtcXHJcXG4gfVxcclxcblxcclxcbiBAa2V5ZnJhbWVzIHNjcm9sbCB7XFxyXFxuICAgICBmcm9tIHtcXHJcXG4gICAgICAgICBtYXJnaW4tdG9wOiAtMTAwcHg7XFxyXFxuICAgICB9XFxyXFxuXFxyXFxuICAgICB0byB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAtNTBweDtcXHJcXG4gICAgIH1cXHJcXG4gfVxcclxcblxcclxcbiAuc3dpcGVyLWNvbnRhaW5lci0yIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNTcwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2R1Y3Qge1xcclxcbiAgICBoZWlnaHQ6IDUzMHB4O1xcclxcbiAgICBtaW4td2lkdGg6IDE0OHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDE0OHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRqdXN0IHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xcclxcbn1cXHJcXG4uYWRqdXN0TWluTW9iIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5hZGp1c3RNaW4ge1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTYwcHg7XFxyXFxufVxcclxcbi5zd2lwZXItd3JhcHBlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiA4NSU7XFxyXFxufVxcclxcblxcclxcbi5vdXItcHJvZHVjdHMge1xcclxcbiAgICB3aWR0aDogOTUuNSU7XFxyXFxuICAgIGhlaWdodDogNjczcHg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgbWFyZ2luLXRvcDogMTAwcHhcXHJcXG59XFxyXFxuXFxyXFxuLnByb2R1Y3QtdGl0bGUge1xcclxcbiAgICBmb250LWZhbWlseTogJ0JlYmFzIE5ldWUnO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDQ4cHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zd2lwZXItYnV0dG9uLW5leHQsIC5zd2lwZXItYnV0dG9uLXByZXYge1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBjb2xvcjogI0IzQjNCMztcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlSW1nIHtcXHJcXG4gICAgd2lkdGg6IDI3M3B4O1xcclxcbiAgICBoZWlnaHQ6IDM1MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNV9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kIHtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdFRpdGxlIHtcXHJcXG4gICAgY29sb3I6ICM0QjRCNEI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdFByaWNlIHtcXHJcXG4gICAgY29sb3I6ICM0QjRCNEI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0UHJpY2U6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE2X19fICsgXCIpO1xcclxcbiAgICB3aWR0aDogMTBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMHB4O1xcclxcbiAgICBtYXJnaW46IDBweCA1cHggMHB4IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5zdGFyc0ltZyB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE3X19fICsgXCIpO1xcclxcbiAgICB3aWR0aDogODhweDtcXHJcXG4gICAgaGVpZ2h0OiAxNnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0IHtcXHJcXG4gIHdpZHRoOiA5MiU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5hYm91dEltZyB7XFxyXFxuICAgIHdpZHRoOiAzNjFweDtcXHJcXG4gICAgbWluLWhlaWdodDogMjQ4cHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE4X19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvXFxyXFxufVxcclxcblxcclxcbi5hYm91dFRpdGxlIHtcXHJcXG4gICBjb2xvcjogIzAwMDAwMDtcXHJcXG4gICBmb250LWZhbWlseTogJ0JlYmFzIE5ldWUnO1xcclxcbiAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG4uYWJvdXRXcmFwcGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi5hYm91dENvbnRlbnQge1xcclxcbiAgICB3aWR0aDogODQlO1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGNvbG9yOiAjNzI3MjcyO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5hcmNoaXZlZCB7XFxyXFxuICAgIHdpZHRoOiA4NC42JTtcXHJcXG4gICAgbWFyZ2luOiAyNXB4IGF1dG87XFxyXFxuICAgIGhlaWdodDogMzYwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbi5hcmNoaXZlZC10aXRsZSB7XFxyXFxuICAgIHdpZHRoOiA4NC42JTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdCZWJhcyBOZXVlJztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xcclxcbiAgICBjb2xvcjogIzAwMDAwMDtcXHJcXG4gICAgbWFyZ2luOiAyNXB4IGF1dG8gMHB4IGF1dG87XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0ge1xcclxcbiAgICB3aWR0aDogNDQuNSU7XFxyXFxuICAgIGhlaWdodDogMTY4cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0IyQjJCMjtcXHJcXG59XFxyXFxuXFxyXFxuLnZhcGVzdGVyIHtcXHJcXG4gICAgbWFyZ2luOiAyNXB4IGF1dG8gMjBweCBhdXRvO1xcclxcbiAgICB3aWR0aDogNThweDtcXHJcXG4gICAgaGVpZ2h0OiA1M3B4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOV9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuLmNpZ2FyZXR0ZSB7XFxyXFxuICAgIG1hcmdpbjogMjVweCBhdXRvIDIwcHggYXV0bztcXHJcXG4gICAgd2lkdGg6IDQ2cHg7XFxyXFxuICAgIGhlaWdodDogNDZweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjBfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi5mbGF2b3Ige1xcclxcbiAgICBtYXJnaW46IDI1cHggYXV0byAyMHB4IGF1dG87XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIxX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tYm8ge1xcclxcbiAgICBtYXJnaW46IDI1cHggYXV0byAyMHB4IGF1dG87XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQ2cHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIyX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMzAwcHhcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcXHJcXG4gICAgLnByb2R1Y3RUaXRsZSwgLnByb2R1Y3RQcmljZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5hYm91dCB7XFxyXFxuICAgICAgICB3aWR0aDogODQuNiU7ICAgXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2R1Y3Qge1xcclxcbiAgICAgICAgaGVpZ2h0OiA1MzBweDtcXHJcXG4gICAgICAgIG1pbi13aWR0aDogdW5zZXQ7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IHVuc2V0O1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAuYWRqdXN0IHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmFkanVzdE1pbk1vYiB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAuYWRqdXN0TWluIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNsaWRlSW1nIHtcXHJcXG4gICAgICAgIHdpZHRoOiAyNTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc3dpcGVyLWJ1dHRvbi1uZXh0LCAuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hYm91dEltZyB7XFxyXFxuICAgICAgICB3aWR0aDogNTAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiA0MDBweFxcclxcbiAgICB9IFxcclxcbiAgICAuYWJvdXRDb250ZW50IHtcXHJcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICB9XFxyXFxuICAgIC5pdGVtIHtcXHJcXG4gICAgICAgIHdpZHRoOiAyMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5hcmNoaXZlZCB7XFxyXFxuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gICAgICAgIGhlaWdodDogMjAwcHg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIH1cXHJcXG4gICAgLmFyY2hpdmVkLXRpdGxlIHtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgICAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLnZhcGVzdGVyLCAuY29tYm8sIC5mbGF2b3IsIC5jaWdhcmV0dGUge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweFxcclxcbiAgICB9XFxyXFxuICAgIC5pdGVtQ291bnQge1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDVweFxcclxcbiAgICB9XFxyXFxuICAgIC5zY3JvbGwge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjNfX18gKyBcIik7XFxyXFxuICAgICAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgICAgICBoZWlnaHQ6IDU1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQGtleWZyYW1lcyBzY3JvbGwge1xcclxcbiAgICAgICAgZnJvbSB7XFxyXFxuICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xNTBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgXFxyXFxuICAgICAgICB0byB7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTEwMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAubmF2YmFyIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgICBtYXJnaW46IDQ1cHggOCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDExMXB4O1xcclxcbiAgICB9XFxyXFxuICAgIC53YXJuaW5nIHtcXHJcXG4gICAgICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zaWduaW5TZWFyY2hMYW5nV3JhcHBlciB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDExMXB4O1xcclxcbiAgICAgICAgd2lkdGg6IDMxMHB4XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpZ25pblRleHQge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLndhcm5pbmcgc3BhbiB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMjBweDsgICAgXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnN3aXBlci1zbGlkZSAudGl0bGUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDYwdmg7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQ1cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5zd2lwZXItc2xpZGUgLnN1YnRpdGxlIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICAgICAgd2lkdGg6IGF1dG87XFxyXFxuICAgICAgICBtYXJnaW46IGF1dG8gNDVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2Vjb25kU2xpZGVDb250ZW50IHtcXHJcXG4gICAgICAgIHdpZHRoOiA1NTdweDtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDQwdmg7XFxyXFxuICAgICAgICBtYXJnaW46IDI1NnB4IDQ1cHg7XFxyXFxuICAgICAgICAvKiBwYWRkaW5nLWxlZnQ6IDUwcHg7ICovXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNlY29uZFNsaWRlQ29udGVudCBkaXY6bnRoLWNoaWxkKDEpIHtcXHJcXG4gICAgICAgIHdpZHRoOiA0ODVweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIFxcclxcbiAgICAuc2Vjb25kU2xpZGVDb250ZW50IGRpdjpudGgtY2hpbGQoMikge1xcclxcbiAgICAgICAgd2lkdGg6IDg5JTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDAuOTtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zZWNvbmRTbGlkZUNvbnRlbnQgZGl2Om50aC1jaGlsZCgzKSBidXR0b257XFxyXFxuICAgICAgICB3aWR0aDogMjAycHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLnNlY29uZFNsaWRlQ29udGVudCBkaXY6bnRoLWNoaWxkKDMpIGlucHV0e1xcclxcbiAgICAgICAgd2lkdGg6IDMwNHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hYm91dFdyYXBwZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixRQUFRO0lBQ1IscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7S0FDSyxhQUFhO0tBQ2IsWUFBWTtDQUNoQjs7Q0FFQTtJQUNHLFdBQVc7SUFDWCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtDQUN0Qjs7Q0FFQTtLQUNJLFdBQVc7S0FDWCxjQUFjO0tBQ2QsYUFBYTtLQUNiLG1CQUFtQjtLQUNuQixZQUFZO0tBQ1osaUJBQWlCO0tBQ2pCLHlEQUFrRDtLQUNsRCw0QkFBNEI7S0FDNUIsNkJBQTZCO0tBQzdCLGVBQWU7Q0FDbkI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2QsVUFBVTtJQUNWLGFBQWE7SUFDYixpQkFB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akI7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2IsOEJBQThCO0lBQ2xDO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsZUFBZTtJQUNuQjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0ksMERBQTZDO1FBQzdDLFdBQVc7UUFDWCxzQkFBc0I7UUFDdEIsWUFBWTtJQUNoQjs7SUFFQTtRQUNJO2FBQ0ssa0JBQWtCO1FBQ3ZCOztRQUVBO1lBQ0ksa0JBQWtCO1FBQ3RCO0lBQ0o7O0lBRUE7UUFDSSxtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLGFBQWE7SUFDakI7SUFDQTtPQUNHLFlBQVk7T0FDWixtQkFBbUI7SUFDdEI7O0lBRUE7UUFDSSxhQUFhO1FBQ2I7SUFDSjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsV0FBVztRQUNYLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLHdCQUF3QjtJQUM1Qjs7SUFFQTtRQUNJLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGtCQUFrQjtJQUN0Qjs7O0lBR0E7UUFDSSxVQUFVO1FBQ1YsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46MDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLndhcm5pbmcge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMThweDtcXHJcXG4gICAgYmFja2dyb3VuZDogIzNFM0UzRTtcXHJcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLndhcm5pbmcgc3BhbiB7XFxyXFxuICAgIHdpZHRoOiAyODdweDtcXHJcXG4gICAgaGVpZ2h0OiA2M3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHtcXHJcXG4gICAgd2lkdGg6IDg0JTtcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICBtYXJnaW46IDMwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgei1pbmRleDogNTAwMDAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG4ubmF2YmFyQ29udGVudCB7XFxyXFxuICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgbWFyZ2luOiBhdXRvO1xcclxcbiB9XFxyXFxuXFxyXFxuIC5uYXZiYXJXcmFwcGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gfVxcclxcblxcclxcbiAubmF2YmFyQ29udGVudCBkaXYge1xcclxcbiAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICBjb2xvcjogIzAwMDAwMDtcXHJcXG4gICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9ibGFja19hcnJvdy5wbmcnKTtcXHJcXG4gICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTtcXHJcXG4gICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gfVxcclxcblxcclxcbi5uYXZiYXJDb250ZW50Lm1lbnVPcGVuIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEyMHB4O1xcclxcbn1cXHJcXG4ubmF2YmFyLm1lbnVPcGVuIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICAjRTVFNUU1O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICAvKiBwYWRkaW5nOiAzMHB4OyAqL1xcclxcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMXMgbGluZWFyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pY29uIHtcXHJcXG4gICAgd2lkdGg6IDQ0cHg7XFxyXFxuICAgIGhlaWdodDogNDRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvd2hpdGVfbWVudS5wbmcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXJcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaWNvbi5tZW51T3BlbiB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2JsdWVfbWVudS5wbmcnKTtcXHJcXG4gICAgbWFyZ2luOiAzMHB4O1xcclxcbn0gXFxyXFxuXFxyXFxuLm1lbnUtaWNvbnMtbW9iaWxlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7ICBcXHJcXG4gIG1hcmdpbjogYXV0b1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pY29ucy1tb2JpbGUgLmltZ0Jhc2tldCB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2JsYWNrX2Jhc2tldC5wbmcnKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaWNvbnMtbW9iaWxlIC5pbWdTZWFyY2gge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9ibGFja19zZWFyY2gucG5nJyk7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XFxyXFxufVxcclxcbi5pbWdMYW5nTW9iaWxlIHtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogMzZweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvZW5nX2ZsYWcucG5nJyk7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWljb25zLW1vYmlsZS5tZW51T3BlbiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtbG9nbyB7XFxyXFxuICAgIHdpZHRoOiAxNTRweDtcXHJcXG4gICAgaGVpZ2h0OiA2NHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy93aGl0ZV9sb2dvLnBuZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1sb2dvLm1lbnVPcGVuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvYmxhY2tfbG9nby5wbmcnKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ25pblRleHQubWVudU9wZW4ge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nb0ltZyB7XFxyXFxuICAgIHdpZHRoOiAyNjdweDtcXHJcXG4gICAgaGVpZ2h0OiAxMTFweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvbG9nby5wbmcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHdpZHRoOiA2MDBweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbnVsIGxpIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBCZWJhcyBOZXVlO1xcclxcbiAgY29sb3I6ICNGRkZGRkY7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxudWwgbGk6OmFmdGVyIHtcXHJcXG4gICBjb250ZW50OiB1cmwoJy4uL2ltYWdlcy9hcnJvdy5wbmcnKTtcXHJcXG4gICBwYWRkaW5nLWxlZnQ6IDVweFxcclxcbn1cXHJcXG5cXHJcXG4uc2lnbmluU2VhcmNoTGFuZ1dyYXBwZXIge1xcclxcbiAgICB3aWR0aDogNDAwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pbWdMYW5nIHtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogMzZweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvZW5nX2ZsYWcucG5nJyksIHVybCgnLi4vaW1hZ2VzL2Fycm93LnBuZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDM2cHggMzZweCwgMTBweCA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAwJSwgMTAwJSA1MCU7XFxyXFxufVxcclxcblxcclxcbi5zaWduaW5UZXh0IHtcXHJcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxMXB4O1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ25pblRleHQ6OmFmdGVyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE4NEU1O1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTcycHhcXHJcXG59XFxyXFxuXFxyXFxuLmltZ1NlYXJjaCB7XFxyXFxuICAgIHdpZHRoOiAyOXB4O1xcclxcbiAgICBoZWlnaHQ6IDI5cHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL3NlYXJjaC5wbmcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmltZ0Jhc2tldCB7XFxyXFxuICAgIHdpZHRoOiAyOXB4O1xcclxcbiAgICBoZWlnaHQ6IDI5cHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2Jhc2tldC5wbmcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXBlci1jb250YWluZXItMSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5zd2lwZXItc2xpZGUge1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIHBhZGRpbmc6IDQwcHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFyYWxsYXgtYmcge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXBlci1zbGlkZSAudGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIG1hcmdpbi10b3A6IDI1NnB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zd2lwZXItc2xpZGUgLnN1YnRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxOTNweDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBsaW5lLWhlaWdodDogLTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXBlci1zbGlkZSAudGV4dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuMztcXHJcXG59XFxyXFxuLnN3aXBlci1wYWdpbmF0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwdmg7XFxyXFxufVxcclxcblxcclxcbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xcclxcbiAgICAgIHdpZHRoOiAyM3B4O1xcclxcbiAgICAgIGhlaWdodDogMjNweDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiAjM0UzRTNFO1xcclxcbiAgICAgIGJvcmRlcjogMC41cHggc29saWQgI0ZGRkZGRlxcclxcbn1cXHJcXG5cXHJcXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XFxyXFxuICAgICAgYmFja2dyb3VuZDogIzUxODRFNTtcXHJcXG4gICAgICBib3JkZXI6IDAuNXB4IHNvbGlkICM1MTg0RTU7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZTEge1xcclxcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2JhY2tncm91bmRfMS5wbmcnKTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDUlIDQwJSA7XFxyXFxuICB9XFxyXFxuLnNsaWRlMiB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2JhY2tncm91bmRfMi5wbmcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTUlIDQwJSA7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZTMge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kU2xpZGVDb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDMzMXB4O1xcclxcbiAgICBtYXJnaW46IDE4OHB4IGF1dG87XFxyXFxufVxcclxcbi5zZWNvbmRTbGlkZUNvbnRlbnQgZGl2Om50aC1jaGlsZCgxKSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBsaW5lLWhlaWdodDogNDBweDtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kU2xpZGVDb250ZW50IGRpdjpudGgtY2hpbGQoMikge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICBmb250LXdlaWdodDogMjAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMjRweDtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kU2xpZGVDb250ZW50IGRpdjpudGgtY2hpbGQoMykgYnV0dG9ue1xcclxcbiAgIHdpZHRoOiAxMDAlO1xcclxcbiAgIGhlaWdodDogNTRweDtcXHJcXG4gICBjb2xvcjogI0ZGRkZGRjtcXHJcXG4gICBiYWNrZ3JvdW5kOiAjNTE4NEU1O1xcclxcbiAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICBib3JkZXI6IG5vbmU7XFxyXFxuICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmRTbGlkZUNvbnRlbnQgZGl2Om50aC1jaGlsZCgzKSBpbnB1dHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNTRweDtcXHJcXG4gICAgYmFja2dyb3VuZDogIzc3Njg2ODtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4XFxyXFxuIH1cXHJcXG5cXHJcXG4gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjFweDtcXHJcXG4gICAgY29sb3I6ICNDMUMxQzE7XFxyXFxuICAgIG1hcmdpbjogMzBweDtcXHJcXG4gfVxcclxcbiAuc2Nyb2xsIHtcXHJcXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgIHdpZHRoOiAxNHB4O1xcclxcbiAgICAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgICAgbWFyZ2luLXRvcDogLTEwMHB4O1xcclxcbiAgICAgei1pbmRleDogMjAwMDAwO1xcclxcbiAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvbW9iaWxlX3Njcm9sbC5wbmcnKTtcXHJcXG4gICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICBtYXJnaW4tbGVmdDogNTAlO1xcclxcbiAgICAgYW5pbWF0aW9uOiBzY3JvbGwgMS41cyBpbmZpbml0ZSBsaW5lYXI7XFxyXFxuIH1cXHJcXG5cXHJcXG4gQGtleWZyYW1lcyBzY3JvbGwge1xcclxcbiAgICAgZnJvbSB7XFxyXFxuICAgICAgICAgbWFyZ2luLXRvcDogLTEwMHB4O1xcclxcbiAgICAgfVxcclxcblxcclxcbiAgICAgdG8ge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogLTUwcHg7XFxyXFxuICAgICB9XFxyXFxuIH1cXHJcXG5cXHJcXG4gLnN3aXBlci1jb250YWluZXItMiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDU3MHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0IHtcXHJcXG4gICAgaGVpZ2h0OiA1MzBweDtcXHJcXG4gICAgbWluLXdpZHRoOiAxNDhweDtcXHJcXG4gICAgbWF4LXdpZHRoOiAxNDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkanVzdCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMjBweDtcXHJcXG59XFxyXFxuLmFkanVzdE1pbk1vYiB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRqdXN0TWluIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC02MHB4O1xcclxcbn1cXHJcXG4uc3dpcGVyLXdyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogODUlO1xcclxcbn1cXHJcXG5cXHJcXG4ub3VyLXByb2R1Y3RzIHtcXHJcXG4gICAgd2lkdGg6IDk1LjUlO1xcclxcbiAgICBoZWlnaHQ6IDY3M3B4O1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwMHB4XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0LXRpdGxlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdCZWJhcyBOZXVlJztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc3dpcGVyLWJ1dHRvbi1uZXh0LCAuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgY29sb3I6ICNCM0IzQjM7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZUltZyB7XFxyXFxuICAgIHdpZHRoOiAyNzNweDtcXHJcXG4gICAgaGVpZ2h0OiAzNTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltYWdlcy9wcm9kdWN0LnBuZyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZCB7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnByb2R1Y3RUaXRsZSB7XFxyXFxuICAgIGNvbG9yOiAjNEI0QjRCO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2R1Y3RQcmljZSB7XFxyXFxuICAgIGNvbG9yOiAjNEI0QjRCO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdFByaWNlOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiB1cmwoJy4uL2ltYWdlcy9kcmFtLnBuZycpO1xcclxcbiAgICB3aWR0aDogMTBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMHB4O1xcclxcbiAgICBtYXJnaW46IDBweCA1cHggMHB4IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5zdGFyc0ltZyB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWFnZXMvc3RhcnMucG5nKTtcXHJcXG4gICAgd2lkdGg6IDg4cHg7XFxyXFxuICAgIGhlaWdodDogMTZweDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5hYm91dCB7XFxyXFxuICB3aWR0aDogOTIlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXRJbWcge1xcclxcbiAgICB3aWR0aDogMzYxcHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDI0OHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1hZ2VzL3dob1dlQXJlLnBuZyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBtYXJnaW46IGF1dG9cXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0VGl0bGUge1xcclxcbiAgIGNvbG9yOiAjMDAwMDAwO1xcclxcbiAgIGZvbnQtZmFtaWx5OiAnQmViYXMgTmV1ZSc7XFxyXFxuICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcbi5hYm91dFdyYXBwZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLmFib3V0Q29udGVudCB7XFxyXFxuICAgIHdpZHRoOiA4NCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgY29sb3I6ICM3MjcyNzI7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFyY2hpdmVkIHtcXHJcXG4gICAgd2lkdGg6IDg0LjYlO1xcclxcbiAgICBtYXJnaW46IDI1cHggYXV0bztcXHJcXG4gICAgaGVpZ2h0OiAzNjBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmFyY2hpdmVkLXRpdGxlIHtcXHJcXG4gICAgd2lkdGg6IDg0LjYlO1xcclxcbiAgICBmb250LWZhbWlseTogJ0JlYmFzIE5ldWUnO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDQ4cHg7XFxyXFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcclxcbiAgICBtYXJnaW46IDI1cHggYXV0byAwcHggYXV0bztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbSB7XFxyXFxuICAgIHdpZHRoOiA0NC41JTtcXHJcXG4gICAgaGVpZ2h0OiAxNjhweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQjJCMkIyO1xcclxcbn1cXHJcXG5cXHJcXG4udmFwZXN0ZXIge1xcclxcbiAgICBtYXJnaW46IDI1cHggYXV0byAyMHB4IGF1dG87XFxyXFxuICAgIHdpZHRoOiA1OHB4O1xcclxcbiAgICBoZWlnaHQ6IDUzcHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL3ZhcGVzdGVyLnBuZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4uY2lnYXJldHRlIHtcXHJcXG4gICAgbWFyZ2luOiAyNXB4IGF1dG8gMjBweCBhdXRvO1xcclxcbiAgICB3aWR0aDogNDZweDtcXHJcXG4gICAgaGVpZ2h0OiA0NnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9jaWdhcmV0dGUucG5nJyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi5mbGF2b3Ige1xcclxcbiAgICBtYXJnaW46IDI1cHggYXV0byAyMHB4IGF1dG87XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2ZsYXZvci5wbmcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbWJvIHtcXHJcXG4gICAgbWFyZ2luOiAyNXB4IGF1dG8gMjBweCBhdXRvO1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgaGVpZ2h0OiA0NnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9jb21iby5wbmcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDMwMHB4XFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxyXFxuICAgIC5wcm9kdWN0VGl0bGUsIC5wcm9kdWN0UHJpY2Uge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAuYWJvdXQge1xcclxcbiAgICAgICAgd2lkdGg6IDg0LjYlOyAgIFxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9kdWN0IHtcXHJcXG4gICAgICAgIGhlaWdodDogNTMwcHg7XFxyXFxuICAgICAgICBtaW4td2lkdGg6IHVuc2V0O1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiB1bnNldDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLmFkanVzdCB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5hZGp1c3RNaW5Nb2Ige1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLmFkanVzdE1pbiB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zbGlkZUltZyB7XFxyXFxuICAgICAgICB3aWR0aDogMjUwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnN3aXBlci1idXR0b24tbmV4dCwgLnN3aXBlci1idXR0b24tcHJldiB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYWJvdXRJbWcge1xcclxcbiAgICAgICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgICAgIGhlaWdodDogNDAwcHhcXHJcXG4gICAgfSBcXHJcXG4gICAgLmFib3V0Q29udGVudCB7XFxyXFxuICAgICAgICB3aWR0aDogNTAlO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgfVxcclxcbiAgICAuaXRlbSB7XFxyXFxuICAgICAgICB3aWR0aDogMjAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuYXJjaGl2ZWQge1xcclxcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB9XFxyXFxuICAgIC5hcmNoaXZlZC10aXRsZSB7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC52YXBlc3RlciwgLmNvbWJvLCAuZmxhdm9yLCAuY2lnYXJldHRlIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHhcXHJcXG4gICAgfVxcclxcbiAgICAuaXRlbUNvdW50IHtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHhcXHJcXG4gICAgfVxcclxcbiAgICAuc2Nyb2xsIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL3Njcm9sbC5wbmcnKTtcXHJcXG4gICAgICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgICAgIGhlaWdodDogNTVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAa2V5ZnJhbWVzIHNjcm9sbCB7XFxyXFxuICAgICAgICBmcm9tIHtcXHJcXG4gICAgICAgICAgICAgbWFyZ2luLXRvcDogLTE1MHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICBcXHJcXG4gICAgICAgIHRvIHtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTAwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5uYXZiYXIge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICAgIG1hcmdpbjogNDVweCA4JTtcXHJcXG4gICAgICAgIGhlaWdodDogMTExcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLndhcm5pbmcge1xcclxcbiAgICAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpZ25pblNlYXJjaExhbmdXcmFwcGVyIHtcXHJcXG4gICAgICAgIGhlaWdodDogMTExcHg7XFxyXFxuICAgICAgICB3aWR0aDogMzEwcHhcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2lnbmluVGV4dCB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gICAgfVxcclxcbiAgICAud2FybmluZyBzcGFuIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAyMHB4OyAgICBcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc3dpcGVyLXNsaWRlIC50aXRsZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogNjB2aDtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogNDVweDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLnN3aXBlci1zbGlkZSAuc3VidGl0bGUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgICAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgICAgIG1hcmdpbjogYXV0byA0NXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zZWNvbmRTbGlkZUNvbnRlbnQge1xcclxcbiAgICAgICAgd2lkdGg6IDU1N3B4O1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogNDB2aDtcXHJcXG4gICAgICAgIG1hcmdpbjogMjU2cHggNDVweDtcXHJcXG4gICAgICAgIC8qIHBhZGRpbmctbGVmdDogNTBweDsgKi9cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2Vjb25kU2xpZGVDb250ZW50IGRpdjpudGgtY2hpbGQoMSkge1xcclxcbiAgICAgICAgd2lkdGg6IDQ4NXB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgXFxyXFxuICAgIC5zZWNvbmRTbGlkZUNvbnRlbnQgZGl2Om50aC1jaGlsZCgyKSB7XFxyXFxuICAgICAgICB3aWR0aDogODklO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbiAgICAgICAgb3BhY2l0eTogMC45O1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNlY29uZFNsaWRlQ29udGVudCBkaXY6bnRoLWNoaWxkKDMpIGJ1dHRvbntcXHJcXG4gICAgICAgIHdpZHRoOiAyMDJweDtcXHJcXG4gICAgfVxcclxcbiAgICAuc2Vjb25kU2xpZGVDb250ZW50IGRpdjpudGgtY2hpbGQoMykgaW5wdXR7XFxyXFxuICAgICAgICB3aWR0aDogMzA0cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmFib3V0V3JhcHBlciB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuLi9jc3MvaW5kZXguY3NzJztcclxuaW1wb3J0IG5hdmJhciBmcm9tICcuL2NvbXBvbmVudHMvbmF2YmFyJztcclxuaW1wb3J0IHtkYXRhfSBmcm9tICcuL2NvbXBvbmVudHMvYXNzZXRzL2NvbnN0YW50JztcclxuaW1wb3J0IGNyZWF0ZVNsaWRlIGZyb20gJy4vY29tcG9uZW50cy9zbGlkZXMnO1xyXG5pbXBvcnQgcmVuZGVySXRlbXMgZnJvbSAnLi9jb21wb25lbnRzL3JlbmRlckl0ZW1zJztcclxuXHJcbm5hdmJhcih3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKT0+e1xyXG4gIG5hdmJhcih3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgLy8gY3JlYXRlU2xpZGUoZGF0YS5wcm9kdWN0cywgd2luZG93LmlubmVyV2lkdGgpO1xyXG59KTtcclxucmVuZGVySXRlbXMoZGF0YS5hcmNoaXZlZCk7XHJcblxyXG52YXIgc3dpcGVyID0gbmV3IFN3aXBlcihcIi5zd2lwZXItY29udGFpbmVyLTFcIiwge1xyXG4gICAgc3BlZWQ6IDYwMCxcclxuICAgIHBhcmFsbGF4OiB0cnVlLFxyXG4gICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICBlbDogXCIuc3dpcGVyLXBhZ2luYXRpb25cIixcclxuICAgICAgY2xpY2thYmxlOiB0cnVlXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGNyZWF0ZVNsaWRlKGRhdGEucHJvZHVjdHMsIHdpbmRvdy5pbm5lcldpZHRoKTtcclxuICB2YXIgc3dpcGVyMSA9IG5ldyBTd2lwZXIoXCIuc3dpcGVyLWNvbnRhaW5lci0yXCIsIHtcclxuICAgIHNsaWRlc1BlclZpZXc6IDUsXHJcbiAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgc2xpZGVzUGVyR3JvdXA6IDUsXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgLy8gbW91c2V3aGVlbDogdHJ1ZSxcclxuICAgIGxvb3BGaWxsR3JvdXBXaXRoQmxhbms6IHRydWUsXHJcbiAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgIG5leHRFbDogXCIuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXHJcbiAgICAgIHByZXZFbDogXCIuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiZGF0YSIsInByb2R1Y3RzIiwiaW1nIiwidGl0bGUiLCJwcmljZSIsInN0YXJzIiwiYXJjaGl2ZWQiLCJjb3VudCIsIm5hdmJhciIsInNjcmVlbiIsIm5hdkNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsIm1lbnUiLCJuYXYiLCJsb2dvIiwidGV4dCIsIm5hdkNvbnRlbnQiLCJpY29ucyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJyZW5kZXIiLCJhcmNoaXZlZENvbnRhaW5lciIsImZvckVhY2giLCJpdGVtIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImFwcGVuZCIsImNyZWF0ZVNsaWRlIiwiY29udGFpbmVyIiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwicHJvZHVjdFRpdGxlIiwicHJvZHVjdFByaWNlIiwic3RhcnNJbWciLCJyZW5kZXJJdGVtcyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJzd2lwZXIiLCJTd2lwZXIiLCJzcGVlZCIsInBhcmFsbGF4IiwicGFnaW5hdGlvbiIsImVsIiwiY2xpY2thYmxlIiwic3dpcGVyMSIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJzbGlkZXNQZXJHcm91cCIsImxvb3AiLCJsb29wRmlsbEdyb3VwV2l0aEJsYW5rIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCJdLCJzb3VyY2VSb290IjoiIn0=