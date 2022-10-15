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

/***/ "./src/js/components/footer.js":
/*!*************************************!*\
  !*** ./src/js/components/footer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function footer(screen) {
  var footerContainer = document.querySelector('.footer');
  footerContainer.innerHTML = '';

  if (screen < 1280) {
    footerContainer.innerHTML = "\n        <div class='footer-logo'></div>\n        <div class='footerWrapper'>\n          <div class='footer-buttons'>\n             <input placeholder=\"    Enter Your Email\"/>\n             <button>Subscribe</button>\n          </div>\n           <div class='footer-item'>Info</div>\n           <div class='info'>\n              <div>Contuct us</div>\n              <div>About us</div>\n              <div>Reviews</div>\n              <div>FAQ</div>\n              <div>Affiliate Program</div>\n           </div>\n           <div class='footer-item'>Help</div>\n           <div class='info'>\n              <div>Shippment Zip Code Check</div>\n              <div>Shipping and Handling </div>\n              <div>Warranty and Returns</div>\n              <div>Payment Options</div>\n           </div>\n           <div class='footer-item'>Policy</div>\n           <div class='info'>\n              <div>Privicy Policy</div>\n              <div>Terms & Conditions</div>\n              <div>Cookies</div>\n              <div>Age Policy</div>\n              <div>Health & Safety</div>\n           </div>\n           <div class='footer-item'>Vapor Blog</div>\n            <div class='info'>\n              <div>Title</div>\n              <div>Title</div>\n              <div>Title</div>\n              <div>Title</div>\n            </div>\n        </div>\n        <div class='footer-icons'>\n            <div class='social-icons'>\n               <div class='facebook'></div>\n               <div class='you-tube'></div>\n               <div class='instagram'></div>\n            </div>\n            <div class='card-icons'>\n                <div class='master'></div>\n                <div class='visa'></div>\n            </div>\n        </div>\n        <div class='copyright'>\n            2022&copy; Copyright 2019  Kaliony UK\n        </div>\n        ";
    var footerItems = document.querySelectorAll('.footer-item');
    var infoArr = document.querySelectorAll('.info');
    footerItems.forEach(function (item, index) {
      var footerSections = [0, 1, 2, 3];
      item.addEventListener('click', function () {
        item.classList.toggle('active');
        infoArr[index].classList.toggle('active');
        delete footerSections[index];
        footerSections.forEach(function (info) {
          footerItems[info].className = 'footer-item';
          infoArr[info].classList.remove('active');
        });
      });
    });
  } else {
    footerContainer.innerHTML = "\n       <div class='footer-container'>\n            <div class='footer-top-part'>\n               <div class='footer-top-logo'></div>\n               <div class='footer-buttons'>\n                  <input placeholder=\"    Enter Your Email\"/>\n                  <button>Subscribe</button>\n               </div>\n               <div class='social-icons'>\n                  <div class='facebook'></div>\n                  <div class='you-tube'></div>\n                  <div class='instagram'></div>\n            </div>\n            </div>\n            <hr class='line'/>\n            <div class='footer-bottom-part'>\n               <div>\n                  <p style='margin-bottom: 50px; font-weight:700;font-size: 24px;'>Info</p>\n                  <p>Contuct us</p>\n                  <p>About us</p>\n                  <p>Reviews</p>\n                  <p>FAQ</p>\n                  <p>Affiliate Program</p>\n               </div>\n               <div>\n                  <p style='margin-bottom: 50px; font-weight:700;font-size: 24px;'>Help</p>\n                  <p>Shippment Zip Code Check</p>\n                  <p>Shipping and Handling </p>\n                  <p>Warranty and Returns</p>\n                  <p>Paymet Options</p>\n               </div>\n               <div>\n                  <p style='margin-bottom: 50px; font-weight:700;font-size: 24px;'>Policy</p>\n                  <p>Privicy Policy</p>\n                  <p>Terms & Conditions</p>\n                  <p>Cookies</p>\n                  <p>Age Policy</p>\n                  <p>Health & Safety</p>\n               </div>\n               <div>\n                  <p style='margin-bottom: 50px; font-weight:700;font-size: 24px;'>Vapor Blog</p>\n                  <p>Title</p>\n                  <p>Title</p>\n                  <p>Title</p>\n                  <p>Title</p>\n                  <p>Title</p>\n               </div>\n            </div>\n            <div class='footer-copyright'>\n               2022 \u24B8 Copyright 2019 Kaliony UK\n            </div>\n      </div>\n       ";
  }

  return footerContainer;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);

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
var ___CSS_LOADER_URL_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ../images/footer_logo.png */ "./src/images/footer_logo.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(/*! ../images/blue_arrow.png */ "./src/images/blue_arrow.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_25___ = new URL(/* asset import */ __webpack_require__(/*! ../images/facebook.png */ "./src/images/facebook.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_26___ = new URL(/* asset import */ __webpack_require__(/*! ../images/you_tube.png */ "./src/images/you_tube.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_27___ = new URL(/* asset import */ __webpack_require__(/*! ../images/instagram.png */ "./src/images/instagram.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_28___ = new URL(/* asset import */ __webpack_require__(/*! ../images/mastercard.png */ "./src/images/mastercard.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_29___ = new URL(/* asset import */ __webpack_require__(/*! ../images/visa.png */ "./src/images/visa.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_30___ = new URL(/* asset import */ __webpack_require__(/*! ../images/scroll.png */ "./src/images/scroll.png"), __webpack_require__.b);
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
var ___CSS_LOADER_URL_REPLACEMENT_24___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_24___);
var ___CSS_LOADER_URL_REPLACEMENT_25___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_25___);
var ___CSS_LOADER_URL_REPLACEMENT_26___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_26___);
var ___CSS_LOADER_URL_REPLACEMENT_27___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_27___);
var ___CSS_LOADER_URL_REPLACEMENT_28___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_28___);
var ___CSS_LOADER_URL_REPLACEMENT_29___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_29___);
var ___CSS_LOADER_URL_REPLACEMENT_30___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_30___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n    padding: 0;\r\n    margin:0;\r\n    font-family: 'Roboto';\r\n    font-style: normal;\r\n    box-sizing: border-box;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.warning {\r\n    width: 100%;\r\n    height: 118px;\r\n    background: #3E3E3E;\r\n    color: #FFFFFF;\r\n    font-weight: 400;\r\n    font-size: 18px;\r\n    line-height: 21px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-end;\r\n    text-align: center;\r\n}\r\n\r\n.warning span {\r\n    width: 287px;\r\n    height: 63px;\r\n}\r\n\r\n.navbar {\r\n    width: 84%;\r\n    height: 60px;\r\n    margin: 30px;\r\n    position: absolute;\r\n    z-index: 500000;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.navbarContent {\r\n     display: none;\r\n     margin: auto;\r\n }\r\n\r\n .navbarWrapper {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n }\r\n\r\n .navbarContent div {\r\n     width: 100%;\r\n     color: #000000;\r\n     display: flex;\r\n     align-items: center;\r\n     height: 50px;\r\n     font-weight: bold;\r\n     background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n     background-repeat: no-repeat;\r\n     background-position: 100% 50%;\r\n     cursor: pointer;\r\n }\r\n\r\n.navbarContent.menuOpen {\r\n    display: block;\r\n    width: 90%;\r\n    height: 100px;\r\n    margin-top: 120px;\r\n}\r\n.navbar.menuOpen {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background-color:  #E5E5E5;\r\n    margin: 0;\r\n    align-items: flex-start;\r\n    /* padding: 30px; */\r\n    transition: height 1s linear;\r\n}\r\n\r\n.menu-icon {\r\n    width: 44px;\r\n    height: 44px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    cursor: pointer\r\n}\r\n\r\n.menu-icon.menuOpen {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n    margin: 30px;\r\n} \r\n\r\n.menu-icons-mobile {\r\n  display: none;  \r\n  margin: auto\r\n}\r\n\r\n.menu-icons-mobile .imgBasket {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n}\r\n\r\n.menu-icons-mobile .imgSearch {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n    margin-left: 0px;\r\n}\r\n.imgLangMobile {\r\n    width: 50px;\r\n    height: 36px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.menu-icons-mobile.menuOpen {\r\n    margin-top: 100px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: 300px;\r\n    height: 100px;\r\n}\r\n\r\n.menu-logo {\r\n    width: 154px;\r\n    height: 64px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    margin-left: 5px;\r\n}\r\n\r\n.menu-logo.menuOpen {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");\r\n}\r\n\r\n.signinText.menuOpen {\r\n    opacity: 0;\r\n}\r\n\r\n.logoImg {\r\n    width: 267px;\r\n    height: 111px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ");\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\nul {\r\n    display: flex;\r\n    width: 600px;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\nul li {\r\n  list-style-type: none;\r\n  font-family: Bebas Neue;\r\n  color: #FFFFFF;\r\n  cursor: pointer;\r\n  margin-left: 20px;\r\n  font-size: 20px;\r\n}\r\n\r\nul li::after {\r\n   content: url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ");\r\n   padding-left: 5px\r\n}\r\n\r\n.signinSearchLangWrapper {\r\n    width: 400px;\r\n    height: 100px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.imgLang {\r\n    width: 50px;\r\n    height: 36px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ");\r\n    background-size: 36px 36px, 10px 5px;\r\n    background-repeat: no-repeat no-repeat;\r\n    background-position: 0% 0%, 100% 50%;\r\n}\r\n\r\n.signinText {\r\n    color: #FFFFFF;\r\n    line-height: 11px;\r\n    font-size: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.signinText::after {\r\n    position: absolute;\r\n    content: '';\r\n    width: 40px;\r\n    height: 1px;\r\n    background-color: #5184E5;\r\n    margin-top: 20px;\r\n    margin-left: -72px\r\n}\r\n\r\n.imgSearch {\r\n    width: 29px;\r\n    height: 29px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ");\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    margin-left: 30px;\r\n}\r\n\r\n.imgBasket {\r\n    width: 29px;\r\n    height: 29px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ");\r\n    background-size: contain;\r\n    margin-left: 30px;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.swiper-container-1 {\r\n    width: 100%;\r\n    height: 100vh;\r\n    position: relative;\r\n}\r\n\r\n\r\n.swiper-slide {\r\n    font-size: 18px;\r\n    color: #fff;\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    padding: 40px 0px;\r\n}\r\n\r\n.parallax-bg {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    height: 100%;\r\n    -webkit-background-size: cover;\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n.swiper-slide .title {\r\n    font-size: 30px;\r\n    font-weight: normal;\r\n    margin-top: 256px;\r\n    text-align: center;\r\n}\r\n\r\n.swiper-slide .subtitle {\r\n    font-size: 50px;\r\n    font-weight: 700;\r\n    text-align: center;\r\n    width: 193px;\r\n    margin: auto;\r\n    line-height: -5px;\r\n}\r\n\r\n.swiper-slide .text {\r\n    font-size: 14px;\r\n    max-width: 400px;\r\n    line-height: 1.3;\r\n}\r\n.swiper-pagination {\r\n    display: flex;\r\n    margin-left: 50px;\r\n    margin-bottom: 10vh;\r\n}\r\n\r\n.swiper-pagination-bullet {\r\n      width: 23px;\r\n      height: 23px;\r\n      background: #3E3E3E;\r\n      border: 0.5px solid #FFFFFF\r\n}\r\n\r\n.swiper-pagination-bullet-active {\r\n      background: #5184E5;\r\n      border: 0.5px solid #5184E5;\r\n}\r\n\r\n.slide1 {\r\n      background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ");\r\n      background-size: cover;\r\n      background-repeat: no-repeat;\r\n      background-position: 45% 40% ;\r\n  }\r\n.slide2 {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ");\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: 55% 40% ;\r\n}\r\n\r\n.slide3 {\r\n    background: gray;\r\n}\r\n\r\n.secondSlideContent {\r\n    width: 331px;\r\n    margin: 188px auto;\r\n}\r\n.secondSlideContent div:nth-child(1) {\r\n    width: 100%;\r\n    line-height: 40px;\r\n    font-size: 30px;\r\n}\r\n\r\n.secondSlideContent div:nth-child(2) {\r\n    width: 100%;\r\n    font-size: 22px;\r\n    font-weight: 200;\r\n    line-height: 24px;\r\n    opacity: 1;\r\n    text-align: center;\r\n}\r\n\r\n.secondSlideContent div:nth-child(3) button{\r\n   width: 100%;\r\n   height: 54px;\r\n   color: #FFFFFF;\r\n   background: #5184E5;\r\n   border-radius: 15px;\r\n   outline: none;\r\n   border: none;\r\n   font-size: 18px;\r\n   text-transform: uppercase;\r\n   cursor: pointer;\r\n   margin-top: 20px;\r\n}\r\n\r\n.secondSlideContent div:nth-child(3) input{\r\n    width: 100%;\r\n    height: 54px;\r\n    background: #776868;\r\n    border-radius: 15px;\r\n    border: none;\r\n    margin-top: 20px\r\n }\r\n\r\n input::placeholder {\r\n    font-weight: 400;\r\n    font-size: 18px;\r\n    line-height: 21px;\r\n    color: #C1C1C1;\r\n    margin: 30px;\r\n }\r\n .scroll {\r\n     position: absolute;\r\n     width: 14px;\r\n     height: 15px;\r\n     margin-top: -100px;\r\n     z-index: 200000;\r\n     background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ");\r\n     background-size: contain;\r\n     background-repeat: no-repeat;\r\n     cursor: pointer;\r\n     margin-left: 50%;\r\n     animation: scroll 1.5s infinite linear;\r\n }\r\n\r\n @keyframes scroll {\r\n     from {\r\n         margin-top: -100px;\r\n     }\r\n\r\n     to {\r\n        margin-top: -50px;\r\n     }\r\n }\r\n\r\n .swiper-container-2 {\r\n    width: 100%;\r\n    height: 570px;\r\n    position: relative;\r\n}\r\n\r\n.product {\r\n    height: 530px;\r\n    min-width: 148px;\r\n    max-width: 148px;\r\n}\r\n\r\n.adjust {\r\n    margin-left: 120px;\r\n}\r\n.adjustMinMob {\r\n    margin-left: 10px;\r\n}\r\n\r\n.adjustMin {\r\n    margin-left: -60px;\r\n}\r\n.swiper-wrapper {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 85%;\r\n}\r\n\r\n.our-products {\r\n    width: 95.5%;\r\n    height: 673px;\r\n    margin: auto;\r\n    margin-top: 100px\r\n}\r\n\r\n.product-title {\r\n    font-family: 'Bebas Neue';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 30px;\r\n    line-height: 48px;\r\n    margin-left: 50px;\r\n    text-align: center;\r\n}\r\n\r\n.swiper-button-next, .swiper-button-prev {\r\n    width: 50px;\r\n    height: 50px;\r\n    color: #B3B3B3;\r\n    display: none;\r\n}\r\n\r\n.slideImg {\r\n    width: 273px;\r\n    height: 350px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + ");\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    margin: auto;\r\n}\r\n\r\n.second {\r\n    margin: auto;\r\n}\r\n\r\n.productTitle {\r\n    color: #4B4B4B;\r\n    font-size: 16px;\r\n    line-height: 10px;\r\n    margin-left: 25px;\r\n}\r\n\r\n.productPrice {\r\n    color: #4B4B4B;\r\n    font-size: 16px;\r\n    line-height: 10px;\r\n}\r\n\r\n.productPrice::before {\r\n    content: url(" + ___CSS_LOADER_URL_REPLACEMENT_16___ + ");\r\n    width: 10px;\r\n    height: 10px;\r\n    margin: 0px 5px 0px 25px;\r\n}\r\n\r\n.starsImg {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_17___ + ");\r\n    width: 88px;\r\n    height: 16px;\r\n    background-size: cover;\r\n    margin-left: 25px;\r\n}\r\n\r\n.about {\r\n  width: 92%;\r\n  margin: auto;\r\n}\r\n\r\n.aboutImg {\r\n    width: 361px;\r\n    min-height: 248px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_18___ + ");\r\n    background-size: 100% 100%;\r\n    background-repeat: no-repeat;\r\n    margin: auto\r\n}\r\n\r\n.aboutTitle {\r\n   color: #000000;\r\n   font-family: 'Bebas Neue';\r\n   font-size: 30px;\r\n   font-weight: 700;\r\n}\r\n.aboutWrapper {\r\n    width: 100%;\r\n}\r\n.aboutContent {\r\n    width: 84%;\r\n    font-size: 14px;\r\n    color: #727272;\r\n    margin: auto;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\n.archived {\r\n    width: 84.6%;\r\n    margin: 25px auto;\r\n    height: 360px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n}\r\n\r\n.archived-title {\r\n    width: 84.6%;\r\n    font-family: 'Bebas Neue';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 25px;\r\n    line-height: 48px;\r\n    color: #000000;\r\n    margin: 25px auto 0px auto;\r\n    text-align: center;\r\n}\r\n\r\n.item {\r\n    width: 44.5%;\r\n    height: 168px;\r\n    text-align: center;\r\n    background: #FFFFFF;\r\n    border: 1px solid #B2B2B2;\r\n}\r\n\r\n.vapester {\r\n    margin: 25px auto 20px auto;\r\n    width: 58px;\r\n    height: 53px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_19___ + ");\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.cigarette {\r\n    margin: 25px auto 20px auto;\r\n    width: 46px;\r\n    height: 46px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_20___ + ");\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.flavor {\r\n    margin: 25px auto 20px auto;\r\n    width: 40px;\r\n    height: 40px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_21___ + ");\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.combo {\r\n    margin: 25px auto 20px auto;\r\n    width: 50px;\r\n    height: 46px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_22___ + ");\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.footer {\r\n    width: 100%;\r\n    padding-top: 20px;\r\n    background: #3E3E3E;\r\n}\r\n\r\n.footer-logo {\r\n    width: 171px;\r\n    height: 71px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_23___ + ");\r\n    margin: auto;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.footerWrapper {\r\n    width: 83.6%;\r\n    margin: auto;\r\n}\r\n.footer-item {\r\n    width: 100%;\r\n    height: 30px;\r\n    color: #FFFFFF;\r\n    font-size: 24px;\r\n    font-family: Roboto;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ");\r\n    background-repeat: no-repeat;\r\n    background-position: 100% 50%;\r\n    margin-top: 10px;\r\n    cursor: pointer\r\n}\r\n\r\n.footer-item.active {\r\n    color: #5184E5;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_24___ + ");\r\n}\r\n\r\n.info {\r\n    color: #FFFFFF;\r\n    font-size: 20px;\r\n    width: 100%;\r\n    text-align: center;\r\n    display: none;\r\n}\r\n.info.active {\r\n    display: block;\r\n}\r\n.info div {\r\n    padding: 5px\r\n}\r\n.footer-buttons {\r\n    width: 100%;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.footer-buttons input {\r\n    width: 100%;\r\n    height: 54px;\r\n    background: #776868;\r\n    border-radius: 15px;\r\n    border: none;\r\n    margin-top: 20px\r\n}\r\n\r\n.footer-buttons input::placeholder {\r\n    font-weight: 400;\r\n    font-size: 18px;\r\n    line-height: 21px;\r\n    color: #C1C1C1;\r\n    margin: 30px;\r\n }\r\n\r\n.footer-buttons button {\r\n    width: 100%;\r\n    height: 54px;\r\n    color: #FFFFFF;\r\n    background: #5184E5;\r\n    border-radius: 15px;\r\n    outline: none;\r\n    border: none;\r\n    font-size: 18px;\r\n    text-transform: uppercase;\r\n    cursor: pointer;\r\n    margin-top: 20px;\r\n}\r\n\r\n.footer-icons {\r\n    width: 326px;\r\n    display: flex;\r\n    margin: 80px auto;\r\n    justify-content: space-between;\r\n}\r\n\r\n.social-icons {\r\n    width: 44.5%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.card-icons {\r\n    width: 32%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.facebook {\r\n    width: 15px;\r\n    height: 28px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_25___ + ");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.you-tube {\r\n    width: 39px;\r\n    height: 28px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_26___ + ");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.instagram {\r\n    width: 32px;\r\n    height: 32px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_27___ + ");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.master {\r\n    width: 45px;\r\n    height: 28px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_28___ + ");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.visa {\r\n    width: 52px;\r\n    height: 20px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_29___ + ");\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n}\r\n\r\n.copyright {\r\n    width: 326px;\r\n    margin: auto;\r\n    font-family: Roboto;\r\n    font-size: 18px;\r\n    color: #FFFFFF;\r\n    text-align: center;\r\n    margin-top: -60px; \r\n}\r\n\r\n@media only screen and (min-width: 1200px) {\r\n    .footer-container {\r\n        width: 86%;\r\n        margin: auto;\r\n    }\r\n/* \r\n    .footer {\r\n        height: 400px\r\n    } */\r\n\r\n    .footer-buttons {\r\n        width: 643px\r\n    }\r\n\r\n    .footer-bottom-part {\r\n        width: 100%;\r\n        margin-top: 50px;\r\n        height: 224px;\r\n        display: flex;\r\n        justify-content: space-between;\r\n    }\r\n\r\n    .footer-bottom-part div:nth-child(1) {\r\n         width: 147px;\r\n         height: 224px;\r\n         color: #FFFFFF;\r\n         font-family: 'Roboto';\r\n         font-style: normal;\r\n         font-weight: 400;\r\n         font-size: 20px;\r\n    }\r\n\r\n     .footer-bottom-part div:nth-child(2) {\r\n        width: 236px;\r\n        height: 191px;\r\n        color: #FFFFFF;\r\n        font-family: 'Roboto';\r\n        font-style: normal;\r\n        font-weight: 400;\r\n        font-size: 20px;\r\n   }\r\n\r\n   .footer-bottom-part div:nth-child(1) {\r\n    width: 147px;\r\n    height: 224px;\r\n    color: #FFFFFF;\r\n    font-family: 'Roboto';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n}\r\n\r\n.footer-bottom-part div:nth-child(3) {\r\n   width: 171px;\r\n   height: 224px;\r\n   color: #FFFFFF;\r\n   font-family: 'Roboto';\r\n   font-style: normal;\r\n   font-weight: 400;\r\n   font-size: 20px;\r\n}\r\n\r\n.footer-copyright {\r\n    width: 100%;\r\n    height: 30px;\r\n    text-align: right;\r\n    font-family: 'Roboto';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 16px;\r\n    line-height: 21px;\r\n    color: #FFFFFF;\r\n    opacity: 0.9;\r\n    margin: 50px 0px 0px 0px\r\n}\r\n\r\n.footer-bottom-part div:nth-child(4) {\r\n    width: 127px;\r\n    height: 191px;\r\n    color: #FFFFFF;\r\n    font-family: 'Roboto';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n }\r\n\r\n    .footer-bottom-part div:nth-child(1) p,\r\n    .footer-bottom-part div:nth-child(2) p,\r\n    .footer-bottom-part div:nth-child(3) p,\r\n    .footer-bottom-part div:nth-child(4) p {\r\n        margin-top: -10px;\r\n    }\r\n\r\n\r\n    .line {\r\n        width: 100%;\r\n        height: 1.33px;\r\n        background: #FFFFFF;\r\n        mix-blend-mode: normal;\r\n        opacity: 0.1;\r\n    }\r\n\r\n    .footer-buttons input{\r\n       width: 366px;\r\n       height: 54px\r\n    }\r\n\r\n    .footer-buttons button{\r\n        width: 260px;\r\n        margin-left: 5px;\r\n        height: 54px\r\n     }\r\n\r\n     .social-icons {\r\n         width: 178.62px;\r\n         height: 29.33px\r\n     }\r\n\r\n\r\n    .footer-top-part {\r\n        width: 100%;\r\n        display: flex;\r\n        justify-content: space-between;\r\n        height: 72px;\r\n        align-items: center;\r\n    }\r\n\r\n    .footer-top-logo {\r\n       width: 171px;\r\n       height: 71px;\r\n       background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_23___ + ");\r\n       background-size: cover;\r\n       background-repeat: no-repeat;\r\n    }\r\n    .productTitle, .productPrice {\r\n        font-size: 24px;\r\n    }\r\n    \r\n    .about {\r\n        width: 84.6%;   \r\n    }\r\n\r\n    .product {\r\n        height: 530px;\r\n        min-width: unset;\r\n        max-width: unset;\r\n    }\r\n    \r\n    .adjust {\r\n        margin-left: 0px;\r\n    }\r\n    .adjustMinMob {\r\n        margin-left: 0px;\r\n    }\r\n    \r\n    .adjustMin {\r\n        margin-left: 0px;\r\n    }\r\n\r\n    .slideImg {\r\n        width: 250px;\r\n    }\r\n\r\n    .swiper-button-next, .swiper-button-prev {\r\n        display: block;\r\n    }\r\n\r\n    .aboutImg {\r\n        width: 50%;\r\n        height: 400px\r\n    } \r\n    .aboutContent {\r\n        width: 50%;\r\n        font-size: 24px;\r\n        padding-left: 20px;\r\n        box-sizing: border-box;\r\n    }\r\n    .item {\r\n        width: 20%;\r\n        height: 200px;\r\n    }\r\n    .archived {\r\n        flex-wrap: nowrap;\r\n        height: 200px;\r\n        justify-content: space-between;\r\n    }\r\n    .archived-title {\r\n        text-align: left;\r\n        font-size: 30px;\r\n    }\r\n    .vapester, .combo, .flavor, .cigarette {\r\n        margin-top: 40px\r\n    }\r\n    .itemCount {\r\n        padding-top: 5px\r\n    }\r\n    .scroll {\r\n        background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_30___ + ");\r\n        width: 20px;\r\n        background-size: cover;\r\n        height: 55px;\r\n    }\r\n\r\n    @keyframes scroll {\r\n        from {\r\n             margin-top: -150px;\r\n        }\r\n       \r\n        to {\r\n            margin-top: -100px;\r\n        }\r\n    }\r\n    \r\n    .navbar {\r\n        flex-direction: row;\r\n        margin: 45px 8%;\r\n        height: 111px;\r\n    }\r\n    .warning {\r\n       height: 40px;\r\n       align-items: center;\r\n    }\r\n\r\n    .signinSearchLangWrapper {\r\n        height: 111px;\r\n        width: 310px\r\n    }\r\n\r\n    .signinText {\r\n        margin-left: 20px;\r\n    }\r\n    .warning span {\r\n        width: 100%;\r\n        height: 20px;    \r\n    }\r\n\r\n    .swiper-slide .title {\r\n        font-size: 30px;\r\n        font-weight: normal;\r\n        margin-top: 60vh;\r\n        text-align: left;\r\n        margin-left: 45px;\r\n    }\r\n    \r\n    .swiper-slide .subtitle {\r\n        font-size: 50px;\r\n        font-weight: 700;\r\n        text-align: left;\r\n        width: auto;\r\n        margin: auto 45px;\r\n    }\r\n\r\n    .secondSlideContent {\r\n        width: 557px;\r\n        margin-top: 40vh;\r\n        margin: 256px 45px;\r\n        /* padding-left: 50px; */\r\n    }\r\n\r\n    .secondSlideContent div:nth-child(1) {\r\n        width: 485px;\r\n        line-height: 40px;\r\n        font-size: 40px;\r\n        text-align: center;\r\n    }\r\n\r\n    \r\n    .secondSlideContent div:nth-child(2) {\r\n        width: 89%;\r\n        font-size: 22px;\r\n        font-weight: 200;\r\n        line-height: 24px;\r\n        opacity: 0.9;\r\n        padding-top: 10px;\r\n        text-align: center;\r\n    }\r\n\r\n    .secondSlideContent div:nth-child(3) button{\r\n        width: 202px;\r\n    }\r\n    .secondSlideContent div:nth-child(3) input{\r\n        width: 304px;\r\n    }\r\n\r\n    .aboutWrapper {\r\n        display: flex;\r\n    }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"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","sourcesContent":["body {\r\n    padding: 0;\r\n    margin:0;\r\n    font-family: 'Roboto';\r\n    font-style: normal;\r\n    box-sizing: border-box;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.warning {\r\n    width: 100%;\r\n    height: 118px;\r\n    background: #3E3E3E;\r\n    color: #FFFFFF;\r\n    font-weight: 400;\r\n    font-size: 18px;\r\n    line-height: 21px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-end;\r\n    text-align: center;\r\n}\r\n\r\n.warning span {\r\n    width: 287px;\r\n    height: 63px;\r\n}\r\n\r\n.navbar {\r\n    width: 84%;\r\n    height: 60px;\r\n    margin: 30px;\r\n    position: absolute;\r\n    z-index: 500000;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.navbarContent {\r\n     display: none;\r\n     margin: auto;\r\n }\r\n\r\n .navbarWrapper {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n }\r\n\r\n .navbarContent div {\r\n     width: 100%;\r\n     color: #000000;\r\n     display: flex;\r\n     align-items: center;\r\n     height: 50px;\r\n     font-weight: bold;\r\n     background-image: url('../images/black_arrow.png');\r\n     background-repeat: no-repeat;\r\n     background-position: 100% 50%;\r\n     cursor: pointer;\r\n }\r\n\r\n.navbarContent.menuOpen {\r\n    display: block;\r\n    width: 90%;\r\n    height: 100px;\r\n    margin-top: 120px;\r\n}\r\n.navbar.menuOpen {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background-color:  #E5E5E5;\r\n    margin: 0;\r\n    align-items: flex-start;\r\n    /* padding: 30px; */\r\n    transition: height 1s linear;\r\n}\r\n\r\n.menu-icon {\r\n    width: 44px;\r\n    height: 44px;\r\n    background-image: url('../images/white_menu.png');\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    cursor: pointer\r\n}\r\n\r\n.menu-icon.menuOpen {\r\n    background-image: url('../images/blue_menu.png');\r\n    margin: 30px;\r\n} \r\n\r\n.menu-icons-mobile {\r\n  display: none;  \r\n  margin: auto\r\n}\r\n\r\n.menu-icons-mobile .imgBasket {\r\n    background-image: url('../images/black_basket.png');\r\n}\r\n\r\n.menu-icons-mobile .imgSearch {\r\n    background-image: url('../images/black_search.png');\r\n    margin-left: 0px;\r\n}\r\n.imgLangMobile {\r\n    width: 50px;\r\n    height: 36px;\r\n    background-image: url('../images/eng_flag.png');\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.menu-icons-mobile.menuOpen {\r\n    margin-top: 100px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: 300px;\r\n    height: 100px;\r\n}\r\n\r\n.menu-logo {\r\n    width: 154px;\r\n    height: 64px;\r\n    background-image: url('../images/white_logo.png');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    margin-left: 5px;\r\n}\r\n\r\n.menu-logo.menuOpen {\r\n    background-image: url('../images/black_logo.png');\r\n}\r\n\r\n.signinText.menuOpen {\r\n    opacity: 0;\r\n}\r\n\r\n.logoImg {\r\n    width: 267px;\r\n    height: 111px;\r\n    background-image: url('../images/logo.png');\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\nul {\r\n    display: flex;\r\n    width: 600px;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\nul li {\r\n  list-style-type: none;\r\n  font-family: Bebas Neue;\r\n  color: #FFFFFF;\r\n  cursor: pointer;\r\n  margin-left: 20px;\r\n  font-size: 20px;\r\n}\r\n\r\nul li::after {\r\n   content: url('../images/arrow.png');\r\n   padding-left: 5px\r\n}\r\n\r\n.signinSearchLangWrapper {\r\n    width: 400px;\r\n    height: 100px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.imgLang {\r\n    width: 50px;\r\n    height: 36px;\r\n    background-image: url('../images/eng_flag.png'), url('../images/arrow.png');\r\n    background-size: 36px 36px, 10px 5px;\r\n    background-repeat: no-repeat no-repeat;\r\n    background-position: 0% 0%, 100% 50%;\r\n}\r\n\r\n.signinText {\r\n    color: #FFFFFF;\r\n    line-height: 11px;\r\n    font-size: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.signinText::after {\r\n    position: absolute;\r\n    content: '';\r\n    width: 40px;\r\n    height: 1px;\r\n    background-color: #5184E5;\r\n    margin-top: 20px;\r\n    margin-left: -72px\r\n}\r\n\r\n.imgSearch {\r\n    width: 29px;\r\n    height: 29px;\r\n    background-image: url('../images/search.png');\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    margin-left: 30px;\r\n}\r\n\r\n.imgBasket {\r\n    width: 29px;\r\n    height: 29px;\r\n    background-image: url('../images/basket.png');\r\n    background-size: contain;\r\n    margin-left: 30px;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.swiper-container-1 {\r\n    width: 100%;\r\n    height: 100vh;\r\n    position: relative;\r\n}\r\n\r\n\r\n.swiper-slide {\r\n    font-size: 18px;\r\n    color: #fff;\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    padding: 40px 0px;\r\n}\r\n\r\n.parallax-bg {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    height: 100%;\r\n    -webkit-background-size: cover;\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n.swiper-slide .title {\r\n    font-size: 30px;\r\n    font-weight: normal;\r\n    margin-top: 256px;\r\n    text-align: center;\r\n}\r\n\r\n.swiper-slide .subtitle {\r\n    font-size: 50px;\r\n    font-weight: 700;\r\n    text-align: center;\r\n    width: 193px;\r\n    margin: auto;\r\n    line-height: -5px;\r\n}\r\n\r\n.swiper-slide .text {\r\n    font-size: 14px;\r\n    max-width: 400px;\r\n    line-height: 1.3;\r\n}\r\n.swiper-pagination {\r\n    display: flex;\r\n    margin-left: 50px;\r\n    margin-bottom: 10vh;\r\n}\r\n\r\n.swiper-pagination-bullet {\r\n      width: 23px;\r\n      height: 23px;\r\n      background: #3E3E3E;\r\n      border: 0.5px solid #FFFFFF\r\n}\r\n\r\n.swiper-pagination-bullet-active {\r\n      background: #5184E5;\r\n      border: 0.5px solid #5184E5;\r\n}\r\n\r\n.slide1 {\r\n      background-image: url('../images/background_1.png');\r\n      background-size: cover;\r\n      background-repeat: no-repeat;\r\n      background-position: 45% 40% ;\r\n  }\r\n.slide2 {\r\n    background-image: url('../images/background_2.png');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: 55% 40% ;\r\n}\r\n\r\n.slide3 {\r\n    background: gray;\r\n}\r\n\r\n.secondSlideContent {\r\n    width: 331px;\r\n    margin: 188px auto;\r\n}\r\n.secondSlideContent div:nth-child(1) {\r\n    width: 100%;\r\n    line-height: 40px;\r\n    font-size: 30px;\r\n}\r\n\r\n.secondSlideContent div:nth-child(2) {\r\n    width: 100%;\r\n    font-size: 22px;\r\n    font-weight: 200;\r\n    line-height: 24px;\r\n    opacity: 1;\r\n    text-align: center;\r\n}\r\n\r\n.secondSlideContent div:nth-child(3) button{\r\n   width: 100%;\r\n   height: 54px;\r\n   color: #FFFFFF;\r\n   background: #5184E5;\r\n   border-radius: 15px;\r\n   outline: none;\r\n   border: none;\r\n   font-size: 18px;\r\n   text-transform: uppercase;\r\n   cursor: pointer;\r\n   margin-top: 20px;\r\n}\r\n\r\n.secondSlideContent div:nth-child(3) input{\r\n    width: 100%;\r\n    height: 54px;\r\n    background: #776868;\r\n    border-radius: 15px;\r\n    border: none;\r\n    margin-top: 20px\r\n }\r\n\r\n input::placeholder {\r\n    font-weight: 400;\r\n    font-size: 18px;\r\n    line-height: 21px;\r\n    color: #C1C1C1;\r\n    margin: 30px;\r\n }\r\n .scroll {\r\n     position: absolute;\r\n     width: 14px;\r\n     height: 15px;\r\n     margin-top: -100px;\r\n     z-index: 200000;\r\n     background-image: url('../images/mobile_scroll.png');\r\n     background-size: contain;\r\n     background-repeat: no-repeat;\r\n     cursor: pointer;\r\n     margin-left: 50%;\r\n     animation: scroll 1.5s infinite linear;\r\n }\r\n\r\n @keyframes scroll {\r\n     from {\r\n         margin-top: -100px;\r\n     }\r\n\r\n     to {\r\n        margin-top: -50px;\r\n     }\r\n }\r\n\r\n .swiper-container-2 {\r\n    width: 100%;\r\n    height: 570px;\r\n    position: relative;\r\n}\r\n\r\n.product {\r\n    height: 530px;\r\n    min-width: 148px;\r\n    max-width: 148px;\r\n}\r\n\r\n.adjust {\r\n    margin-left: 120px;\r\n}\r\n.adjustMinMob {\r\n    margin-left: 10px;\r\n}\r\n\r\n.adjustMin {\r\n    margin-left: -60px;\r\n}\r\n.swiper-wrapper {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 85%;\r\n}\r\n\r\n.our-products {\r\n    width: 95.5%;\r\n    height: 673px;\r\n    margin: auto;\r\n    margin-top: 100px\r\n}\r\n\r\n.product-title {\r\n    font-family: 'Bebas Neue';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 30px;\r\n    line-height: 48px;\r\n    margin-left: 50px;\r\n    text-align: center;\r\n}\r\n\r\n.swiper-button-next, .swiper-button-prev {\r\n    width: 50px;\r\n    height: 50px;\r\n    color: #B3B3B3;\r\n    display: none;\r\n}\r\n\r\n.slideImg {\r\n    width: 273px;\r\n    height: 350px;\r\n    background-image: url(../images/product.png);\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    margin: auto;\r\n}\r\n\r\n.second {\r\n    margin: auto;\r\n}\r\n\r\n.productTitle {\r\n    color: #4B4B4B;\r\n    font-size: 16px;\r\n    line-height: 10px;\r\n    margin-left: 25px;\r\n}\r\n\r\n.productPrice {\r\n    color: #4B4B4B;\r\n    font-size: 16px;\r\n    line-height: 10px;\r\n}\r\n\r\n.productPrice::before {\r\n    content: url('../images/dram.png');\r\n    width: 10px;\r\n    height: 10px;\r\n    margin: 0px 5px 0px 25px;\r\n}\r\n\r\n.starsImg {\r\n    background-image: url(../images/stars.png);\r\n    width: 88px;\r\n    height: 16px;\r\n    background-size: cover;\r\n    margin-left: 25px;\r\n}\r\n\r\n.about {\r\n  width: 92%;\r\n  margin: auto;\r\n}\r\n\r\n.aboutImg {\r\n    width: 361px;\r\n    min-height: 248px;\r\n    background-image: url(../images/whoWeAre.png);\r\n    background-size: 100% 100%;\r\n    background-repeat: no-repeat;\r\n    margin: auto\r\n}\r\n\r\n.aboutTitle {\r\n   color: #000000;\r\n   font-family: 'Bebas Neue';\r\n   font-size: 30px;\r\n   font-weight: 700;\r\n}\r\n.aboutWrapper {\r\n    width: 100%;\r\n}\r\n.aboutContent {\r\n    width: 84%;\r\n    font-size: 14px;\r\n    color: #727272;\r\n    margin: auto;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\n.archived {\r\n    width: 84.6%;\r\n    margin: 25px auto;\r\n    height: 360px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n}\r\n\r\n.archived-title {\r\n    width: 84.6%;\r\n    font-family: 'Bebas Neue';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 25px;\r\n    line-height: 48px;\r\n    color: #000000;\r\n    margin: 25px auto 0px auto;\r\n    text-align: center;\r\n}\r\n\r\n.item {\r\n    width: 44.5%;\r\n    height: 168px;\r\n    text-align: center;\r\n    background: #FFFFFF;\r\n    border: 1px solid #B2B2B2;\r\n}\r\n\r\n.vapester {\r\n    margin: 25px auto 20px auto;\r\n    width: 58px;\r\n    height: 53px;\r\n    background-image: url('../images/vapester.png');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.cigarette {\r\n    margin: 25px auto 20px auto;\r\n    width: 46px;\r\n    height: 46px;\r\n    background-image: url('../images/cigarette.png');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.flavor {\r\n    margin: 25px auto 20px auto;\r\n    width: 40px;\r\n    height: 40px;\r\n    background-image: url('../images/flavor.png');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.combo {\r\n    margin: 25px auto 20px auto;\r\n    width: 50px;\r\n    height: 46px;\r\n    background-image: url('../images/combo.png');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.footer {\r\n    width: 100%;\r\n    padding-top: 20px;\r\n    background: #3E3E3E;\r\n}\r\n\r\n.footer-logo {\r\n    width: 171px;\r\n    height: 71px;\r\n    background-image: url('../images/footer_logo.png');\r\n    margin: auto;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.footerWrapper {\r\n    width: 83.6%;\r\n    margin: auto;\r\n}\r\n.footer-item {\r\n    width: 100%;\r\n    height: 30px;\r\n    color: #FFFFFF;\r\n    font-size: 24px;\r\n    font-family: Roboto;\r\n    background-image: url('../images/arrow.png');\r\n    background-repeat: no-repeat;\r\n    background-position: 100% 50%;\r\n    margin-top: 10px;\r\n    cursor: pointer\r\n}\r\n\r\n.footer-item.active {\r\n    color: #5184E5;\r\n    background-image: url('../images/blue_arrow.png');\r\n}\r\n\r\n.info {\r\n    color: #FFFFFF;\r\n    font-size: 20px;\r\n    width: 100%;\r\n    text-align: center;\r\n    display: none;\r\n}\r\n.info.active {\r\n    display: block;\r\n}\r\n.info div {\r\n    padding: 5px\r\n}\r\n.footer-buttons {\r\n    width: 100%;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.footer-buttons input {\r\n    width: 100%;\r\n    height: 54px;\r\n    background: #776868;\r\n    border-radius: 15px;\r\n    border: none;\r\n    margin-top: 20px\r\n}\r\n\r\n.footer-buttons input::placeholder {\r\n    font-weight: 400;\r\n    font-size: 18px;\r\n    line-height: 21px;\r\n    color: #C1C1C1;\r\n    margin: 30px;\r\n }\r\n\r\n.footer-buttons button {\r\n    width: 100%;\r\n    height: 54px;\r\n    color: #FFFFFF;\r\n    background: #5184E5;\r\n    border-radius: 15px;\r\n    outline: none;\r\n    border: none;\r\n    font-size: 18px;\r\n    text-transform: uppercase;\r\n    cursor: pointer;\r\n    margin-top: 20px;\r\n}\r\n\r\n.footer-icons {\r\n    width: 326px;\r\n    display: flex;\r\n    margin: 80px auto;\r\n    justify-content: space-between;\r\n}\r\n\r\n.social-icons {\r\n    width: 44.5%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.card-icons {\r\n    width: 32%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.facebook {\r\n    width: 15px;\r\n    height: 28px;\r\n    background-image: url('../images/facebook.png');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.you-tube {\r\n    width: 39px;\r\n    height: 28px;\r\n    background-image: url('../images/you_tube.png');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.instagram {\r\n    width: 32px;\r\n    height: 32px;\r\n    background-image: url('../images/instagram.png');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.master {\r\n    width: 45px;\r\n    height: 28px;\r\n    background-image: url('../images/mastercard.png');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.visa {\r\n    width: 52px;\r\n    height: 20px;\r\n    background-image: url('../images/visa.png');\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n}\r\n\r\n.copyright {\r\n    width: 326px;\r\n    margin: auto;\r\n    font-family: Roboto;\r\n    font-size: 18px;\r\n    color: #FFFFFF;\r\n    text-align: center;\r\n    margin-top: -60px; \r\n}\r\n\r\n@media only screen and (min-width: 1200px) {\r\n    .footer-container {\r\n        width: 86%;\r\n        margin: auto;\r\n    }\r\n/* \r\n    .footer {\r\n        height: 400px\r\n    } */\r\n\r\n    .footer-buttons {\r\n        width: 643px\r\n    }\r\n\r\n    .footer-bottom-part {\r\n        width: 100%;\r\n        margin-top: 50px;\r\n        height: 224px;\r\n        display: flex;\r\n        justify-content: space-between;\r\n    }\r\n\r\n    .footer-bottom-part div:nth-child(1) {\r\n         width: 147px;\r\n         height: 224px;\r\n         color: #FFFFFF;\r\n         font-family: 'Roboto';\r\n         font-style: normal;\r\n         font-weight: 400;\r\n         font-size: 20px;\r\n    }\r\n\r\n     .footer-bottom-part div:nth-child(2) {\r\n        width: 236px;\r\n        height: 191px;\r\n        color: #FFFFFF;\r\n        font-family: 'Roboto';\r\n        font-style: normal;\r\n        font-weight: 400;\r\n        font-size: 20px;\r\n   }\r\n\r\n   .footer-bottom-part div:nth-child(1) {\r\n    width: 147px;\r\n    height: 224px;\r\n    color: #FFFFFF;\r\n    font-family: 'Roboto';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n}\r\n\r\n.footer-bottom-part div:nth-child(3) {\r\n   width: 171px;\r\n   height: 224px;\r\n   color: #FFFFFF;\r\n   font-family: 'Roboto';\r\n   font-style: normal;\r\n   font-weight: 400;\r\n   font-size: 20px;\r\n}\r\n\r\n.footer-copyright {\r\n    width: 100%;\r\n    height: 30px;\r\n    text-align: right;\r\n    font-family: 'Roboto';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 16px;\r\n    line-height: 21px;\r\n    color: #FFFFFF;\r\n    opacity: 0.9;\r\n    margin: 50px 0px 0px 0px\r\n}\r\n\r\n.footer-bottom-part div:nth-child(4) {\r\n    width: 127px;\r\n    height: 191px;\r\n    color: #FFFFFF;\r\n    font-family: 'Roboto';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n }\r\n\r\n    .footer-bottom-part div:nth-child(1) p,\r\n    .footer-bottom-part div:nth-child(2) p,\r\n    .footer-bottom-part div:nth-child(3) p,\r\n    .footer-bottom-part div:nth-child(4) p {\r\n        margin-top: -10px;\r\n    }\r\n\r\n\r\n    .line {\r\n        width: 100%;\r\n        height: 1.33px;\r\n        background: #FFFFFF;\r\n        mix-blend-mode: normal;\r\n        opacity: 0.1;\r\n    }\r\n\r\n    .footer-buttons input{\r\n       width: 366px;\r\n       height: 54px\r\n    }\r\n\r\n    .footer-buttons button{\r\n        width: 260px;\r\n        margin-left: 5px;\r\n        height: 54px\r\n     }\r\n\r\n     .social-icons {\r\n         width: 178.62px;\r\n         height: 29.33px\r\n     }\r\n\r\n\r\n    .footer-top-part {\r\n        width: 100%;\r\n        display: flex;\r\n        justify-content: space-between;\r\n        height: 72px;\r\n        align-items: center;\r\n    }\r\n\r\n    .footer-top-logo {\r\n       width: 171px;\r\n       height: 71px;\r\n       background-image: url('../images/footer_logo.png');\r\n       background-size: cover;\r\n       background-repeat: no-repeat;\r\n    }\r\n    .productTitle, .productPrice {\r\n        font-size: 24px;\r\n    }\r\n    \r\n    .about {\r\n        width: 84.6%;   \r\n    }\r\n\r\n    .product {\r\n        height: 530px;\r\n        min-width: unset;\r\n        max-width: unset;\r\n    }\r\n    \r\n    .adjust {\r\n        margin-left: 0px;\r\n    }\r\n    .adjustMinMob {\r\n        margin-left: 0px;\r\n    }\r\n    \r\n    .adjustMin {\r\n        margin-left: 0px;\r\n    }\r\n\r\n    .slideImg {\r\n        width: 250px;\r\n    }\r\n\r\n    .swiper-button-next, .swiper-button-prev {\r\n        display: block;\r\n    }\r\n\r\n    .aboutImg {\r\n        width: 50%;\r\n        height: 400px\r\n    } \r\n    .aboutContent {\r\n        width: 50%;\r\n        font-size: 24px;\r\n        padding-left: 20px;\r\n        box-sizing: border-box;\r\n    }\r\n    .item {\r\n        width: 20%;\r\n        height: 200px;\r\n    }\r\n    .archived {\r\n        flex-wrap: nowrap;\r\n        height: 200px;\r\n        justify-content: space-between;\r\n    }\r\n    .archived-title {\r\n        text-align: left;\r\n        font-size: 30px;\r\n    }\r\n    .vapester, .combo, .flavor, .cigarette {\r\n        margin-top: 40px\r\n    }\r\n    .itemCount {\r\n        padding-top: 5px\r\n    }\r\n    .scroll {\r\n        background-image: url('../images/scroll.png');\r\n        width: 20px;\r\n        background-size: cover;\r\n        height: 55px;\r\n    }\r\n\r\n    @keyframes scroll {\r\n        from {\r\n             margin-top: -150px;\r\n        }\r\n       \r\n        to {\r\n            margin-top: -100px;\r\n        }\r\n    }\r\n    \r\n    .navbar {\r\n        flex-direction: row;\r\n        margin: 45px 8%;\r\n        height: 111px;\r\n    }\r\n    .warning {\r\n       height: 40px;\r\n       align-items: center;\r\n    }\r\n\r\n    .signinSearchLangWrapper {\r\n        height: 111px;\r\n        width: 310px\r\n    }\r\n\r\n    .signinText {\r\n        margin-left: 20px;\r\n    }\r\n    .warning span {\r\n        width: 100%;\r\n        height: 20px;    \r\n    }\r\n\r\n    .swiper-slide .title {\r\n        font-size: 30px;\r\n        font-weight: normal;\r\n        margin-top: 60vh;\r\n        text-align: left;\r\n        margin-left: 45px;\r\n    }\r\n    \r\n    .swiper-slide .subtitle {\r\n        font-size: 50px;\r\n        font-weight: 700;\r\n        text-align: left;\r\n        width: auto;\r\n        margin: auto 45px;\r\n    }\r\n\r\n    .secondSlideContent {\r\n        width: 557px;\r\n        margin-top: 40vh;\r\n        margin: 256px 45px;\r\n        /* padding-left: 50px; */\r\n    }\r\n\r\n    .secondSlideContent div:nth-child(1) {\r\n        width: 485px;\r\n        line-height: 40px;\r\n        font-size: 40px;\r\n        text-align: center;\r\n    }\r\n\r\n    \r\n    .secondSlideContent div:nth-child(2) {\r\n        width: 89%;\r\n        font-size: 22px;\r\n        font-weight: 200;\r\n        line-height: 24px;\r\n        opacity: 0.9;\r\n        padding-top: 10px;\r\n        text-align: center;\r\n    }\r\n\r\n    .secondSlideContent div:nth-child(3) button{\r\n        width: 202px;\r\n    }\r\n    .secondSlideContent div:nth-child(3) input{\r\n        width: 304px;\r\n    }\r\n\r\n    .aboutWrapper {\r\n        display: flex;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/images/blue_arrow.png":
/*!***********************************!*\
  !*** ./src/images/blue_arrow.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1641228674a48f01a9f0.png";

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

/***/ "./src/images/facebook.png":
/*!*********************************!*\
  !*** ./src/images/facebook.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7a9531ec0df2c7aefb6a.png";

/***/ }),

/***/ "./src/images/flavor.png":
/*!*******************************!*\
  !*** ./src/images/flavor.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e1855320550d07c5811d.png";

/***/ }),

/***/ "./src/images/footer_logo.png":
/*!************************************!*\
  !*** ./src/images/footer_logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "694d8924ae66c3ef230a.png";

/***/ }),

/***/ "./src/images/instagram.png":
/*!**********************************!*\
  !*** ./src/images/instagram.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6dc23027de1c1624a088.png";

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "469ef8903d6acddb0463.png";

/***/ }),

/***/ "./src/images/mastercard.png":
/*!***********************************!*\
  !*** ./src/images/mastercard.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "df980a247f401595e09e.png";

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

/***/ "./src/images/visa.png":
/*!*****************************!*\
  !*** ./src/images/visa.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4fb270763cfcd0db5c51.png";

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

/***/ }),

/***/ "./src/images/you_tube.png":
/*!*********************************!*\
  !*** ./src/images/you_tube.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "61ac98b3de84bb3b0411.png";

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
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/footer */ "./src/js/components/footer.js");
/* harmony import */ var _components_assets_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/assets/constant */ "./src/js/components/assets/constant.js");
/* harmony import */ var _components_slides__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/slides */ "./src/js/components/slides.js");
/* harmony import */ var _components_renderItems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/renderItems */ "./src/js/components/renderItems.js");






(0,_components_navbar__WEBPACK_IMPORTED_MODULE_1__["default"])(window.innerWidth);
(0,_components_footer__WEBPACK_IMPORTED_MODULE_2__["default"])(window.innerWidth);
window.addEventListener('resize', function () {
  (0,_components_navbar__WEBPACK_IMPORTED_MODULE_1__["default"])(window.innerWidth);
  (0,_components_footer__WEBPACK_IMPORTED_MODULE_2__["default"])(window.innerWidth); // createSlide(data.products, window.innerWidth);
});
(0,_components_renderItems__WEBPACK_IMPORTED_MODULE_5__["default"])(_components_assets_constant__WEBPACK_IMPORTED_MODULE_3__.data.archived);
var swiper = new Swiper(".swiper-container-1", {
  speed: 600,
  parallax: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
(0,_components_slides__WEBPACK_IMPORTED_MODULE_4__["default"])(_components_assets_constant__WEBPACK_IMPORTED_MODULE_3__.data.products, window.innerWidth);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UywyQkFBMkIsMEJBQTBCLFNBQVMsS0FBSyxXQUFXLG9GQUFvRixVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxPQUFPLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLFFBQVEsWUFBWSxRQUFRLEtB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QTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFiLDhEQUFNLENBQUNxQixNQUFNLENBQUNDLFVBQVIsQ0FBTjtBQUNBekMsOERBQU0sQ0FBQ3dDLE1BQU0sQ0FBQ0MsVUFBUixDQUFOO0FBQ0FELE1BQU0sQ0FBQzNCLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQUk7RUFDcENNLDhEQUFNLENBQUNxQixNQUFNLENBQUNDLFVBQVIsQ0FBTjtFQUNBekMsOERBQU0sQ0FBQ3dDLE1BQU0sQ0FBQ0MsVUFBUixDQUFOLENBRm9DLENBR3BDO0FBQ0QsQ0FKRDtBQUtBRixtRUFBVyxDQUFDL0Msc0VBQUQsQ0FBWDtBQUVBLElBQUlrRCxNQUFNLEdBQUcsSUFBSUMsTUFBSixDQUFXLHFCQUFYLEVBQWtDO0VBQzNDQyxLQUFLLEVBQUUsR0FEb0M7RUFFM0NDLFFBQVEsRUFBRSxJQUZpQztFQUczQ0MsVUFBVSxFQUFFO0lBQ1ZDLEVBQUUsRUFBRSxvQkFETTtJQUVWQyxTQUFTLEVBQUU7RUFGRDtBQUgrQixDQUFsQyxDQUFiO0FBUUVoQiw4REFBVyxDQUFDeEMsc0VBQUQsRUFBZ0JnRCxNQUFNLENBQUNDLFVBQXZCLENBQVg7QUFDQSxJQUFJUSxPQUFPLEdBQUcsSUFBSU4sTUFBSixDQUFXLHFCQUFYLEVBQWtDO0VBQzlDTyxhQUFhLEVBQUUsQ0FEK0I7RUFFOUNDLFlBQVksRUFBRSxFQUZnQztFQUc5Q0MsY0FBYyxFQUFFLENBSDhCO0VBSTlDQyxJQUFJLEVBQUUsSUFKd0M7RUFLOUM7RUFDQUMsc0JBQXNCLEVBQUUsSUFOc0I7RUFPOUNDLFVBQVUsRUFBRTtJQUNWQyxNQUFNLEVBQUUscUJBREU7SUFFVkMsTUFBTSxFQUFFO0VBRkU7QUFQa0MsQ0FBbEMsQ0FBZCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2l0cGxleC8uL3NyYy9qcy9jb21wb25lbnRzL2Fzc2V0cy9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly93aXRwbGV4Ly4vc3JjL2pzL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovL3dpdHBsZXgvLi9zcmMvanMvY29tcG9uZW50cy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vd2l0cGxleC8uL3NyYy9qcy9jb21wb25lbnRzL3JlbmRlckl0ZW1zLmpzIiwid2VicGFjazovL3dpdHBsZXgvLi9zcmMvanMvY29tcG9uZW50cy9zbGlkZXMuanMiLCJ3ZWJwYWNrOi8vd2l0cGxleC8uL3NyYy9jc3MvaW5kZXguY3NzIiwid2VicGFjazovL3dpdHBsZXgvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dpdHBsZXgvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dpdHBsZXgvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93aXRwbGV4Ly4vc3JjL2Nzcy9pbmRleC5jc3M/ZjdlYSIsIndlYnBhY2s6Ly93aXRwbGV4Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dpdHBsZXgvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dpdHBsZXgvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2l0cGxleC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93aXRwbGV4Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2l0cGxleC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dpdHBsZXgvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2l0cGxleC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93aXRwbGV4L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93aXRwbGV4L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2l0cGxleC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dpdHBsZXgvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93aXRwbGV4L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dpdHBsZXgvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2l0cGxleC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2l0cGxleC8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGNvbnN0IGRhdGE9e1xyXG4gICAgcHJvZHVjdHM6W1xyXG4gICAge1xyXG4gICAgICAgIGltZzogJ3Byb2R1Y3QnLFxyXG4gICAgICAgIHRpdGxlOiAnRUxGIEJBUiBSRiA3MDAnLFxyXG4gICAgICAgIHByaWNlOiA3MDAwLFxyXG4gICAgICAgIHN0YXJzOiAnc3RhcnMnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGltZzogJ3Byb2R1Y3QnLFxyXG4gICAgICAgIHRpdGxlOiAnRUxGIEJBUiBSRiA2MDAnLFxyXG4gICAgICAgIHByaWNlOiA2MDAwLFxyXG4gICAgICAgIHN0YXJzOiAnc3RhcnMnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGltZzogJ3Byb2R1Y3QnLFxyXG4gICAgICAgIHRpdGxlOiAnRUxGIEJBUiBSRiA1MDAnLFxyXG4gICAgICAgIHByaWNlOiA1MDAwLFxyXG4gICAgICAgIHN0YXJzOiAnc3RhcnMnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGltZzogJ3Byb2R1Y3QnLFxyXG4gICAgICAgIHRpdGxlOiAnRUxGIEJBUiBSRiA0MDAnLFxyXG4gICAgICAgIHByaWNlOiA0MDAwLFxyXG4gICAgICAgIHN0YXJzOiAnc3RhcnMnXHJcbiAgICB9XHJcbl0sXHJcbiAgICBhcmNoaXZlZDogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOiAndmFwZXN0ZXInLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1ZBUEVTVEVSUycsXHJcbiAgICAgICAgICAgIGNvdW50OiAxNTY1LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWc6ICdjaWdhcmV0dGUnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0NJR0FSRVRURVMgU0FWRUQnLFxyXG4gICAgICAgICAgICBjb3VudDogNzU4LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWc6ICdmbGF2b3InLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1BSRS1NQURFIEZMQVZPUlMnLFxyXG4gICAgICAgICAgICBjb3VudDogMjk4MyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOiAnY29tYm8nLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0NVU1RPTSBDT01CT1MnLFxyXG4gICAgICAgICAgICBjb3VudDogMTI0LFxyXG5cclxuICAgICAgICB9XHJcbiAgICBdXHJcbn0iLCJmdW5jdGlvbiBmb290ZXIoc2NyZWVuKSB7XHJcbiAgICBjb25zdCBmb290ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJyk7XHJcbiAgICBmb290ZXJDb250YWluZXIuaW5uZXJIVE1MPScnO1xyXG5cclxuICAgIGlmIChzY3JlZW48MTI4MCkge1xyXG5cclxuICAgICAgICBmb290ZXJDb250YWluZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9J2Zvb3Rlci1sb2dvJz48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPSdmb290ZXJXcmFwcGVyJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9J2Zvb3Rlci1idXR0b25zJz5cclxuICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIiAgICBFbnRlciBZb3VyIEVtYWlsXCIvPlxyXG4gICAgICAgICAgICAgPGJ1dHRvbj5TdWJzY3JpYmU8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3M9J2Zvb3Rlci1pdGVtJz5JbmZvPC9kaXY+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzcz0naW5mbyc+XHJcbiAgICAgICAgICAgICAgPGRpdj5Db250dWN0IHVzPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5BYm91dCB1czwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+UmV2aWV3czwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+RkFRPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5BZmZpbGlhdGUgUHJvZ3JhbTwvZGl2PlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3M9J2Zvb3Rlci1pdGVtJz5IZWxwPC9kaXY+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzcz0naW5mbyc+XHJcbiAgICAgICAgICAgICAgPGRpdj5TaGlwcG1lbnQgWmlwIENvZGUgQ2hlY2s8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlNoaXBwaW5nIGFuZCBIYW5kbGluZyA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PldhcnJhbnR5IGFuZCBSZXR1cm5zPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5QYXltZW50IE9wdGlvbnM8L2Rpdj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzPSdmb290ZXItaXRlbSc+UG9saWN5PC9kaXY+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzcz0naW5mbyc+XHJcbiAgICAgICAgICAgICAgPGRpdj5Qcml2aWN5IFBvbGljeTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+VGVybXMgJiBDb25kaXRpb25zPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5Db29raWVzPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5BZ2UgUG9saWN5PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5IZWFsdGggJiBTYWZldHk8L2Rpdj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzPSdmb290ZXItaXRlbSc+VmFwb3IgQmxvZzwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdpbmZvJz5cclxuICAgICAgICAgICAgICA8ZGl2PlRpdGxlPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5UaXRsZTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+VGl0bGU8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlRpdGxlPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9J2Zvb3Rlci1pY29ucyc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3NvY2lhbC1pY29ucyc+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZhY2Vib29rJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0neW91LXR1YmUnPjwvZGl2PlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdpbnN0YWdyYW0nPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nY2FyZC1pY29ucyc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdtYXN0ZXInPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndmlzYSc+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9J2NvcHlyaWdodCc+XHJcbiAgICAgICAgICAgIDIwMjImY29weTsgQ29weXJpZ2h0IDIwMTkgIEthbGlvbnkgVUtcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICBjb25zdCBmb290ZXJJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb290ZXItaXRlbScpO1xyXG4gICAgICAgIGNvbnN0IGluZm9BcnIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5mbycpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvb3Rlckl0ZW1zLmZvckVhY2goZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcclxuICAgICAgICAgIGNvbnN0IGZvb3RlclNlY3Rpb25zID0gWzAsIDEsIDIsIDNdO1xyXG4gICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgaW5mb0FycltpbmRleF0uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICBkZWxldGUgZm9vdGVyU2VjdGlvbnNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgZm9vdGVyU2VjdGlvbnMuZm9yRWFjaCgoaW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9vdGVySXRlbXNbaW5mb10uY2xhc3NOYW1lID0gJ2Zvb3Rlci1pdGVtJztcclxuICAgICAgICAgICAgICAgIGluZm9BcnJbaW5mb10uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgIGZvb3RlckNvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICAgICA8ZGl2IGNsYXNzPSdmb290ZXItY29udGFpbmVyJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZm9vdGVyLXRvcC1wYXJ0Jz5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZm9vdGVyLXRvcC1sb2dvJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZm9vdGVyLWJ1dHRvbnMnPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCIgICAgRW50ZXIgWW91ciBFbWFpbFwiLz5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5TdWJzY3JpYmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3NvY2lhbC1pY29ucyc+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZhY2Vib29rJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0neW91LXR1YmUnPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdpbnN0YWdyYW0nPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxociBjbGFzcz0nbGluZScvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdmb290ZXItYm90dG9tLXBhcnQnPlxyXG4gICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT0nbWFyZ2luLWJvdHRvbTogNTBweDsgZm9udC13ZWlnaHQ6NzAwO2ZvbnQtc2l6ZTogMjRweDsnPkluZm88L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPkNvbnR1Y3QgdXM8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPkFib3V0IHVzPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD5SZXZpZXdzPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD5GQVE8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPkFmZmlsaWF0ZSBQcm9ncmFtPC9wPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9J21hcmdpbi1ib3R0b206IDUwcHg7IGZvbnQtd2VpZ2h0OjcwMDtmb250LXNpemU6IDI0cHg7Jz5IZWxwPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD5TaGlwcG1lbnQgWmlwIENvZGUgQ2hlY2s8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlNoaXBwaW5nIGFuZCBIYW5kbGluZyA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPldhcnJhbnR5IGFuZCBSZXR1cm5zPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD5QYXltZXQgT3B0aW9uczwvcD5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPSdtYXJnaW4tYm90dG9tOiA1MHB4OyBmb250LXdlaWdodDo3MDA7Zm9udC1zaXplOiAyNHB4Oyc+UG9saWN5PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD5Qcml2aWN5IFBvbGljeTwvcD5cclxuICAgICAgICAgICAgICAgICAgPHA+VGVybXMgJiBDb25kaXRpb25zPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD5Db29raWVzPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD5BZ2UgUG9saWN5PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD5IZWFsdGggJiBTYWZldHk8L3A+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT0nbWFyZ2luLWJvdHRvbTogNTBweDsgZm9udC13ZWlnaHQ6NzAwO2ZvbnQtc2l6ZTogMjRweDsnPlZhcG9yIEJsb2c8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlRpdGxlPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD5UaXRsZTwvcD5cclxuICAgICAgICAgICAgICAgICAgPHA+VGl0bGU8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlRpdGxlPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD5UaXRsZTwvcD5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdmb290ZXItY29weXJpZ2h0Jz5cclxuICAgICAgICAgICAgICAgMjAyMiDikrggQ29weXJpZ2h0IDIwMTkgS2FsaW9ueSBVS1xyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICBgXHJcbiAgICB9XHJcbiBcclxuXHJcbiAgICByZXR1cm4gZm9vdGVyQ29udGFpbmVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb290ZXI7XHJcbiIsIlxyXG5mdW5jdGlvbiBuYXZiYXIoc2NyZWVuKSB7XHJcbiAgICBjb25zdCBuYXZDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyJyk7XHJcbiAgICBuYXZDb250YWluZXIuaW5uZXJIVE1MPScnO1xyXG5cclxuICAgIGlmIChzY3JlZW48MTI4MCkge1xyXG5cclxuICAgICAgICBuYXZDb250YWluZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9J25hdmJhcldyYXBwZXInPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdtZW51LWljb24nPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdtZW51LWxvZ28nPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdzaWduaW5UZXh0Jz5TSUdOIElOPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0nbmF2YmFyQ29udGVudCc+XHJcbiAgICAgICAgICAgIDxkaXY+TkVXPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+T1VSIFBST0RVQ1RTPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+QlJBTkRTPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0nbWVudS1pY29ucy1tb2JpbGUnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdpbWdCYXNrZXQnPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdpbWdTZWFyY2gnPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdpbWdMYW5nTW9iaWxlJz48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1pY29uJyk7XHJcbiAgICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcicpO1xyXG4gICAgICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1sb2dvJyk7XHJcbiAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWduaW5UZXh0Jyk7XHJcbiAgICAgICAgY29uc3QgbmF2Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXJDb250ZW50Jyk7XHJcbiAgICAgICAgY29uc3QgaWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1pY29ucy1tb2JpbGUnKTtcclxuXHJcbiAgICAgICAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdtZW51T3BlbicpO1xyXG4gICAgICAgICAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudU9wZW4nKTtcclxuICAgICAgICAgICAgbG9nby5jbGFzc0xpc3QudG9nZ2xlKCdtZW51T3BlbicpO1xyXG4gICAgICAgICAgICB0ZXh0LmNsYXNzTGlzdC50b2dnbGUoJ21lbnVPcGVuJyk7XHJcbiAgICAgICAgICAgIG5hdkNvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudU9wZW4nKTtcclxuICAgICAgICAgICAgaWNvbnMuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudU9wZW4nKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuYXZDb250YWluZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9J2xvZ29JbWcnPjwvZGl2PlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgICA8YT48bGk+TkVXPC9saT48L2E+XHJcbiAgICAgICAgICAgPGEgaHJlZiA9ICcuL3Byb2R1Y3QuaHRtbCc+PGxpPk9VUiBQUk9EVUNUUzwvbGk+PC9hPlxyXG4gICAgICAgICAgIDxhPjxsaT5CUkFORFM8L2xpPjwvYT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9J3NpZ25pblNlYXJjaExhbmdXcmFwcGVyJz5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzPSdpbWdMYW5nJz48L2Rpdj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzPSdzaWduaW5UZXh0Jz5TSUdOIElOPC9kaXY+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzcz0naW1nU2VhcmNoJz48L2Rpdj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzPSdpbWdCYXNrZXQnPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG4gICAgfVxyXG4gXHJcblxyXG4gICAgcmV0dXJuIG5hdkNvbnRhaW5lcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmF2YmFyO1xyXG4iLCJcclxuXHJcbmZ1bmN0aW9uIHJlbmRlciAoZGF0YSkge1xyXG4gICBjb25zdCBhcmNoaXZlZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcmNoaXZlZCcpO1xyXG5cclxuICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGRpdi5jbGFzc05hbWUgPSAnaXRlbSc7XHJcbiAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBpbWcuY2xhc3NOYW1lID0gaXRlbS5pbWc7XHJcbiAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHRpdGxlLmlubmVySFRNTCA9IGl0ZW0udGl0bGU7XHJcbiAgICAgIHRpdGxlLmNsYXNzTmFtZSA9ICdpdGVtVGl0bGUnO1xyXG4gICAgICBjb25zdCBjb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBjb3VudC5pbm5lckhUTUwgPSBpdGVtLmNvdW50O1xyXG4gICAgICBjb3VudC5jbGFzc05hbWUgPSAnaXRlbUNvdW50J1xyXG5cclxuICAgICAgZGl2LmFwcGVuZChpbWcpO1xyXG4gICAgICBkaXYuYXBwZW5kKHRpdGxlKTtcclxuICAgICAgZGl2LmFwcGVuZChjb3VudCk7XHJcbiAgICAgIGFyY2hpdmVkQ29udGFpbmVyLmFwcGVuZChkaXYpO1xyXG4gICB9KTtcclxuXHJcbiAgIHJldHVybiBhcmNoaXZlZENvbnRhaW5lcjtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlbmRlcjtcclxuIiwiXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVNsaWRlIChkYXRhLCBzY3JlZW4pIHtcclxuICAgIFxyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY29uZCcpO1xyXG4gICAgZGF0YS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGlmIChpbmRleCkge1xyXG4gICAgICAgICAgICBkaXYuY2xhc3NOYW1lID0gXCJzd2lwZXItc2xpZGUgcHJvZHVjdCBhZGp1c3RcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoc2NyZWVuPDcwMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ21qJylcclxuICAgICAgICAgICAgICAgIGRpdi5jbGFzc05hbWUgPSBcInN3aXBlci1zbGlkZSBwcm9kdWN0IGFkanVzdE1pbk1vYlwiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGl2LmNsYXNzTmFtZSA9IFwic3dpcGVyLXNsaWRlIHByb2R1Y3QgYWRqdXN0TWluXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGltZy5jbGFzc05hbWUgPSAnc2xpZGVJbWcnO1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RUaXRsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgcHJvZHVjdFRpdGxlLmNsYXNzTmFtZSA9ICdwcm9kdWN0VGl0bGUnO1xyXG4gICAgICAgIHByb2R1Y3RUaXRsZS5pbm5lckhUTUw9aXRlbS50aXRsZTtcclxuICAgICAgICBjb25zdCBwcm9kdWN0UHJpY2U9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHByb2R1Y3RQcmljZS5jbGFzc05hbWU9J3Byb2R1Y3RQcmljZSc7XHJcbiAgICAgICAgcHJvZHVjdFByaWNlLmlubmVySFRNTD1pdGVtLnByaWNlO1xyXG4gICAgICAgIGNvbnN0IHN0YXJzSW1nPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgc3RhcnNJbWcuY2xhc3NOYW1lPSdzdGFyc0ltZyc7XHJcblxyXG4gICAgICAgIGRpdi5hcHBlbmQoaW1nKTtcclxuICAgICAgICBkaXYuYXBwZW5kKHByb2R1Y3RUaXRsZSk7XHJcbiAgICAgICAgZGl2LmFwcGVuZChwcm9kdWN0UHJpY2UpO1xyXG4gICAgICAgIGRpdi5hcHBlbmQoc3RhcnNJbWcpO1xyXG5cclxuICAgICAgICBjb250YWluZXIuYXBwZW5kKGRpdik7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2xpZGU7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9ibGFja19hcnJvdy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvd2hpdGVfbWVudS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvYmx1ZV9tZW51LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9ibGFja19iYXNrZXQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2JsYWNrX3NlYXJjaC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvZW5nX2ZsYWcucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3doaXRlX2xvZ28ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2JsYWNrX2xvZ28ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzhfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2xvZ28ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzlfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2Fycm93LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvc2VhcmNoLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvYmFza2V0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMl9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvYmFja2dyb3VuZF8xLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xM19fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvYmFja2dyb3VuZF8yLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvbW9iaWxlX3Njcm9sbC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTVfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3Byb2R1Y3QucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE2X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9kcmFtLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xN19fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvc3RhcnMucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE4X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy93aG9XZUFyZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTlfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3ZhcGVzdGVyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvY2lnYXJldHRlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvZmxhdm9yLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMl9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvY29tYm8ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIzX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9mb290ZXJfbG9nby5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjRfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2JsdWVfYXJyb3cucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI1X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9mYWNlYm9vay5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjZfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3lvdV90dWJlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yN19fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvaW5zdGFncmFtLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yOF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvbWFzdGVyY2FyZC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjlfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3Zpc2EucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzMwX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9zY3JvbGwucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzlfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzExX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEyX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEzX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE0X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE1X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE2X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE3X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE4X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMThfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE5X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTlfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIxX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIyX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIzX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI0X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI1X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI2X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI3X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI4X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjhfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI5X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjlfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzMwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjowO1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ud2FybmluZyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDExOHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjM0UzRTNFO1xcclxcbiAgICBjb2xvcjogI0ZGRkZGRjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjFweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ud2FybmluZyBzcGFuIHtcXHJcXG4gICAgd2lkdGg6IDI4N3B4O1xcclxcbiAgICBoZWlnaHQ6IDYzcHg7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIge1xcclxcbiAgICB3aWR0aDogODQlO1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIG1hcmdpbjogMzBweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB6LWluZGV4OiA1MDAwMDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcbi5uYXZiYXJDb250ZW50IHtcXHJcXG4gICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICBtYXJnaW46IGF1dG87XFxyXFxuIH1cXHJcXG5cXHJcXG4gLm5hdmJhcldyYXBwZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiB9XFxyXFxuXFxyXFxuIC5uYXZiYXJDb250ZW50IGRpdiB7XFxyXFxuICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgIGNvbG9yOiAjMDAwMDAwO1xcclxcbiAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XFxyXFxuICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuIH1cXHJcXG5cXHJcXG4ubmF2YmFyQ29udGVudC5tZW51T3BlbiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMjBweDtcXHJcXG59XFxyXFxuLm5hdmJhci5tZW51T3BlbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgI0U1RTVFNTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgLyogcGFkZGluZzogMzBweDsgKi9cXHJcXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDFzIGxpbmVhcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaWNvbiB7XFxyXFxuICAgIHdpZHRoOiA0NHB4O1xcclxcbiAgICBoZWlnaHQ6IDQ0cHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyXFxyXFxufVxcclxcblxcclxcbi5tZW51LWljb24ubWVudU9wZW4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcclxcbiAgICBtYXJnaW46IDMwcHg7XFxyXFxufSBcXHJcXG5cXHJcXG4ubWVudS1pY29ucy1tb2JpbGUge1xcclxcbiAgZGlzcGxheTogbm9uZTsgIFxcclxcbiAgbWFyZ2luOiBhdXRvXFxyXFxufVxcclxcblxcclxcbi5tZW51LWljb25zLW1vYmlsZSAuaW1nQmFza2V0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaWNvbnMtbW9iaWxlIC5pbWdTZWFyY2gge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xcclxcbn1cXHJcXG4uaW1nTGFuZ01vYmlsZSB7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDM2cHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWljb25zLW1vYmlsZS5tZW51T3BlbiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtbG9nbyB7XFxyXFxuICAgIHdpZHRoOiAxNTRweDtcXHJcXG4gICAgaGVpZ2h0OiA2NHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1sb2dvLm1lbnVPcGVuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fXyArIFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ25pblRleHQubWVudU9wZW4ge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nb0ltZyB7XFxyXFxuICAgIHdpZHRoOiAyNjdweDtcXHJcXG4gICAgaGVpZ2h0OiAxMTFweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOF9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHdpZHRoOiA2MDBweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbnVsIGxpIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBCZWJhcyBOZXVlO1xcclxcbiAgY29sb3I6ICNGRkZGRkY7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxudWwgbGk6OmFmdGVyIHtcXHJcXG4gICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19fICsgXCIpO1xcclxcbiAgIHBhZGRpbmctbGVmdDogNXB4XFxyXFxufVxcclxcblxcclxcbi5zaWduaW5TZWFyY2hMYW5nV3JhcHBlciB7XFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmltZ0xhbmcge1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAzNnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDM2cHggMzZweCwgMTBweCA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAwJSwgMTAwJSA1MCU7XFxyXFxufVxcclxcblxcclxcbi5zaWduaW5UZXh0IHtcXHJcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxMXB4O1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ25pblRleHQ6OmFmdGVyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIGhlaWdodDogMXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE4NEU1O1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTcycHhcXHJcXG59XFxyXFxuXFxyXFxuLmltZ1NlYXJjaCB7XFxyXFxuICAgIHdpZHRoOiAyOXB4O1xcclxcbiAgICBoZWlnaHQ6IDI5cHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEwX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nQmFza2V0IHtcXHJcXG4gICAgd2lkdGg6IDI5cHg7XFxyXFxuICAgIGhlaWdodDogMjlweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTFfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi5zd2lwZXItY29udGFpbmVyLTEge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc3dpcGVyLXNsaWRlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBwYWRkaW5nOiA0MHB4IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhcmFsbGF4LWJnIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zd2lwZXItc2xpZGUgLnRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyNTZweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc3dpcGVyLXNsaWRlIC5zdWJ0aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTkzcHg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgbGluZS1oZWlnaHQ6IC01cHg7XFxyXFxufVxcclxcblxcclxcbi5zd2lwZXItc2xpZGUgLnRleHQge1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XFxyXFxufVxcclxcbi5zd2lwZXItcGFnaW5hdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcXHJcXG4gICAgICB3aWR0aDogMjNweDtcXHJcXG4gICAgICBoZWlnaHQ6IDIzcHg7XFxyXFxuICAgICAgYmFja2dyb3VuZDogIzNFM0UzRTtcXHJcXG4gICAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNGRkZGRkZcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xcclxcbiAgICAgIGJhY2tncm91bmQ6ICM1MTg0RTU7XFxyXFxuICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjNTE4NEU1O1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGUxIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMl9fXyArIFwiKTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDUlIDQwJSA7XFxyXFxuICB9XFxyXFxuLnNsaWRlMiB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEzX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1NSUgNDAlIDtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlMyB7XFxyXFxuICAgIGJhY2tncm91bmQ6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmRTbGlkZUNvbnRlbnQge1xcclxcbiAgICB3aWR0aDogMzMxcHg7XFxyXFxuICAgIG1hcmdpbjogMTg4cHggYXV0bztcXHJcXG59XFxyXFxuLnNlY29uZFNsaWRlQ29udGVudCBkaXY6bnRoLWNoaWxkKDEpIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmRTbGlkZUNvbnRlbnQgZGl2Om50aC1jaGlsZCgyKSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmRTbGlkZUNvbnRlbnQgZGl2Om50aC1jaGlsZCgzKSBidXR0b257XFxyXFxuICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgaGVpZ2h0OiA1NHB4O1xcclxcbiAgIGNvbG9yOiAjRkZGRkZGO1xcclxcbiAgIGJhY2tncm91bmQ6ICM1MTg0RTU7XFxyXFxuICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICBvdXRsaW5lOiBub25lO1xcclxcbiAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZFNsaWRlQ29udGVudCBkaXY6bnRoLWNoaWxkKDMpIGlucHV0e1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA1NHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNzc2ODY4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHhcXHJcXG4gfVxcclxcblxcclxcbiBpbnB1dDo6cGxhY2Vob2xkZXIge1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xcclxcbiAgICBjb2xvcjogI0MxQzFDMTtcXHJcXG4gICAgbWFyZ2luOiAzMHB4O1xcclxcbiB9XFxyXFxuIC5zY3JvbGwge1xcclxcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgd2lkdGg6IDE0cHg7XFxyXFxuICAgICBoZWlnaHQ6IDE1cHg7XFxyXFxuICAgICBtYXJnaW4tdG9wOiAtMTAwcHg7XFxyXFxuICAgICB6LWluZGV4OiAyMDAwMDA7XFxyXFxuICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNF9fXyArIFwiKTtcXHJcXG4gICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICBtYXJnaW4tbGVmdDogNTAlO1xcclxcbiAgICAgYW5pbWF0aW9uOiBzY3JvbGwgMS41cyBpbmZpbml0ZSBsaW5lYXI7XFxyXFxuIH1cXHJcXG5cXHJcXG4gQGtleWZyYW1lcyBzY3JvbGwge1xcclxcbiAgICAgZnJvbSB7XFxyXFxuICAgICAgICAgbWFyZ2luLXRvcDogLTEwMHB4O1xcclxcbiAgICAgfVxcclxcblxcclxcbiAgICAgdG8ge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogLTUwcHg7XFxyXFxuICAgICB9XFxyXFxuIH1cXHJcXG5cXHJcXG4gLnN3aXBlci1jb250YWluZXItMiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDU3MHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0IHtcXHJcXG4gICAgaGVpZ2h0OiA1MzBweDtcXHJcXG4gICAgbWluLXdpZHRoOiAxNDhweDtcXHJcXG4gICAgbWF4LXdpZHRoOiAxNDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkanVzdCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMjBweDtcXHJcXG59XFxyXFxuLmFkanVzdE1pbk1vYiB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRqdXN0TWluIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC02MHB4O1xcclxcbn1cXHJcXG4uc3dpcGVyLXdyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogODUlO1xcclxcbn1cXHJcXG5cXHJcXG4ub3VyLXByb2R1Y3RzIHtcXHJcXG4gICAgd2lkdGg6IDk1LjUlO1xcclxcbiAgICBoZWlnaHQ6IDY3M3B4O1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwMHB4XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0LXRpdGxlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdCZWJhcyBOZXVlJztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc3dpcGVyLWJ1dHRvbi1uZXh0LCAuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgY29sb3I6ICNCM0IzQjM7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZUltZyB7XFxyXFxuICAgIHdpZHRoOiAyNzNweDtcXHJcXG4gICAgaGVpZ2h0OiAzNTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTVfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZCB7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnByb2R1Y3RUaXRsZSB7XFxyXFxuICAgIGNvbG9yOiAjNEI0QjRCO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2R1Y3RQcmljZSB7XFxyXFxuICAgIGNvbG9yOiAjNEI0QjRCO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdFByaWNlOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNl9fXyArIFwiKTtcXHJcXG4gICAgd2lkdGg6IDEwcHg7XFxyXFxuICAgIGhlaWdodDogMTBweDtcXHJcXG4gICAgbWFyZ2luOiAwcHggNXB4IDBweCAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnNJbWcge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xN19fXyArIFwiKTtcXHJcXG4gICAgd2lkdGg6IDg4cHg7XFxyXFxuICAgIGhlaWdodDogMTZweDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5hYm91dCB7XFxyXFxuICB3aWR0aDogOTIlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXRJbWcge1xcclxcbiAgICB3aWR0aDogMzYxcHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDI0OHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOF9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIG1hcmdpbjogYXV0b1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXRUaXRsZSB7XFxyXFxuICAgY29sb3I6ICMwMDAwMDA7XFxyXFxuICAgZm9udC1mYW1pbHk6ICdCZWJhcyBOZXVlJztcXHJcXG4gICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuLmFib3V0V3JhcHBlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4uYWJvdXRDb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDg0JTtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBjb2xvcjogIzcyNzI3MjtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYXJjaGl2ZWQge1xcclxcbiAgICB3aWR0aDogODQuNiU7XFxyXFxuICAgIG1hcmdpbjogMjVweCBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IDM2MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uYXJjaGl2ZWQtdGl0bGUge1xcclxcbiAgICB3aWR0aDogODQuNiU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQmViYXMgTmV1ZSc7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogNDhweDtcXHJcXG4gICAgY29sb3I6ICMwMDAwMDA7XFxyXFxuICAgIG1hcmdpbjogMjVweCBhdXRvIDBweCBhdXRvO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pdGVtIHtcXHJcXG4gICAgd2lkdGg6IDQ0LjUlO1xcclxcbiAgICBoZWlnaHQ6IDE2OHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNCMkIyQjI7XFxyXFxufVxcclxcblxcclxcbi52YXBlc3RlciB7XFxyXFxuICAgIG1hcmdpbjogMjVweCBhdXRvIDIwcHggYXV0bztcXHJcXG4gICAgd2lkdGg6IDU4cHg7XFxyXFxuICAgIGhlaWdodDogNTNweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTlfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi5jaWdhcmV0dGUge1xcclxcbiAgICBtYXJnaW46IDI1cHggYXV0byAyMHB4IGF1dG87XFxyXFxuICAgIHdpZHRoOiA0NnB4O1xcclxcbiAgICBoZWlnaHQ6IDQ2cHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIwX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4uZmxhdm9yIHtcXHJcXG4gICAgbWFyZ2luOiAyNXB4IGF1dG8gMjBweCBhdXRvO1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMV9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbWJvIHtcXHJcXG4gICAgbWFyZ2luOiAyNXB4IGF1dG8gMjBweCBhdXRvO1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgaGVpZ2h0OiA0NnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMl9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogIzNFM0UzRTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1sb2dvIHtcXHJcXG4gICAgd2lkdGg6IDE3MXB4O1xcclxcbiAgICBoZWlnaHQ6IDcxcHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIzX19fICsgXCIpO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXJXcmFwcGVyIHtcXHJcXG4gICAgd2lkdGg6IDgzLjYlO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcbi5mb290ZXItaXRlbSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzlfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXJcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1pdGVtLmFjdGl2ZSB7XFxyXFxuICAgIGNvbG9yOiAjNTE4NEU1O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yNF9fXyArIFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8ge1xcclxcbiAgICBjb2xvcjogI0ZGRkZGRjtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG4uaW5mby5hY3RpdmUge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuLmluZm8gZGl2IHtcXHJcXG4gICAgcGFkZGluZzogNXB4XFxyXFxufVxcclxcbi5mb290ZXItYnV0dG9ucyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWJ1dHRvbnMgaW5wdXQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA1NHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNzc2ODY4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHhcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1idXR0b25zIGlucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XFxyXFxuICAgIGNvbG9yOiAjQzFDMUMxO1xcclxcbiAgICBtYXJnaW46IDMwcHg7XFxyXFxuIH1cXHJcXG5cXHJcXG4uZm9vdGVyLWJ1dHRvbnMgYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNTRweDtcXHJcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM1MTg0RTU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItaWNvbnMge1xcclxcbiAgICB3aWR0aDogMzI2cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG1hcmdpbjogODBweCBhdXRvO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwtaWNvbnMge1xcclxcbiAgICB3aWR0aDogNDQuNSU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaWNvbnMge1xcclxcbiAgICB3aWR0aDogMzIlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mYWNlYm9vayB7XFxyXFxuICAgIHdpZHRoOiAxNXB4O1xcclxcbiAgICBoZWlnaHQ6IDI4cHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI1X19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4ueW91LXR1YmUge1xcclxcbiAgICB3aWR0aDogMzlweDtcXHJcXG4gICAgaGVpZ2h0OiAyOHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yNl9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmluc3RhZ3JhbSB7XFxyXFxuICAgIHdpZHRoOiAzMnB4O1xcclxcbiAgICBoZWlnaHQ6IDMycHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI3X19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFzdGVyIHtcXHJcXG4gICAgd2lkdGg6IDQ1cHg7XFxyXFxuICAgIGhlaWdodDogMjhweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjhfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcbi52aXNhIHtcXHJcXG4gICAgd2lkdGg6IDUycHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjlfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvcHlyaWdodCB7XFxyXFxuICAgIHdpZHRoOiAzMjZweDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IC02MHB4OyBcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcXHJcXG4gICAgLmZvb3Rlci1jb250YWluZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDg2JTtcXHJcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgfVxcclxcbi8qIFxcclxcbiAgICAuZm9vdGVyIHtcXHJcXG4gICAgICAgIGhlaWdodDogNDAwcHhcXHJcXG4gICAgfSAqL1xcclxcblxcclxcbiAgICAuZm9vdGVyLWJ1dHRvbnMge1xcclxcbiAgICAgICAgd2lkdGg6IDY0M3B4XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZvb3Rlci1ib3R0b20tcGFydCB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDIyNHB4O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZm9vdGVyLWJvdHRvbS1wYXJ0IGRpdjpudGgtY2hpbGQoMSkge1xcclxcbiAgICAgICAgIHdpZHRoOiAxNDdweDtcXHJcXG4gICAgICAgICBoZWlnaHQ6IDIyNHB4O1xcclxcbiAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xcclxcbiAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXHJcXG4gICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgICAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgIC5mb290ZXItYm90dG9tLXBhcnQgZGl2Om50aC1jaGlsZCgyKSB7XFxyXFxuICAgICAgICB3aWR0aDogMjM2cHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDE5MXB4O1xcclxcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxyXFxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgIH1cXHJcXG5cXHJcXG4gICAuZm9vdGVyLWJvdHRvbS1wYXJ0IGRpdjpudGgtY2hpbGQoMSkge1xcclxcbiAgICB3aWR0aDogMTQ3cHg7XFxyXFxuICAgIGhlaWdodDogMjI0cHg7XFxyXFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWJvdHRvbS1wYXJ0IGRpdjpudGgtY2hpbGQoMykge1xcclxcbiAgIHdpZHRoOiAxNzFweDtcXHJcXG4gICBoZWlnaHQ6IDIyNHB4O1xcclxcbiAgIGNvbG9yOiAjRkZGRkZGO1xcclxcbiAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXHJcXG4gICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItY29weXJpZ2h0IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xcclxcbiAgICBjb2xvcjogI0ZGRkZGRjtcXHJcXG4gICAgb3BhY2l0eTogMC45O1xcclxcbiAgICBtYXJnaW46IDUwcHggMHB4IDBweCAwcHhcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1ib3R0b20tcGFydCBkaXY6bnRoLWNoaWxkKDQpIHtcXHJcXG4gICAgd2lkdGg6IDEyN3B4O1xcclxcbiAgICBoZWlnaHQ6IDE5MXB4O1xcclxcbiAgICBjb2xvcjogI0ZGRkZGRjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gfVxcclxcblxcclxcbiAgICAuZm9vdGVyLWJvdHRvbS1wYXJ0IGRpdjpudGgtY2hpbGQoMSkgcCxcXHJcXG4gICAgLmZvb3Rlci1ib3R0b20tcGFydCBkaXY6bnRoLWNoaWxkKDIpIHAsXFxyXFxuICAgIC5mb290ZXItYm90dG9tLXBhcnQgZGl2Om50aC1jaGlsZCgzKSBwLFxcclxcbiAgICAuZm9vdGVyLWJvdHRvbS1wYXJ0IGRpdjpudGgtY2hpbGQoNCkgcCB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICAubGluZSB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMS4zM3B4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXHJcXG4gICAgICAgIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwLjE7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZvb3Rlci1idXR0b25zIGlucHV0e1xcclxcbiAgICAgICB3aWR0aDogMzY2cHg7XFxyXFxuICAgICAgIGhlaWdodDogNTRweFxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5mb290ZXItYnV0dG9ucyBidXR0b257XFxyXFxuICAgICAgICB3aWR0aDogMjYwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiA1NHB4XFxyXFxuICAgICB9XFxyXFxuXFxyXFxuICAgICAuc29jaWFsLWljb25zIHtcXHJcXG4gICAgICAgICB3aWR0aDogMTc4LjYycHg7XFxyXFxuICAgICAgICAgaGVpZ2h0OiAyOS4zM3B4XFxyXFxuICAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIC5mb290ZXItdG9wLXBhcnQge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgaGVpZ2h0OiA3MnB4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZm9vdGVyLXRvcC1sb2dvIHtcXHJcXG4gICAgICAgd2lkdGg6IDE3MXB4O1xcclxcbiAgICAgICBoZWlnaHQ6IDcxcHg7XFxyXFxuICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIzX19fICsgXCIpO1xcclxcbiAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICB9XFxyXFxuICAgIC5wcm9kdWN0VGl0bGUsIC5wcm9kdWN0UHJpY2Uge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAuYWJvdXQge1xcclxcbiAgICAgICAgd2lkdGg6IDg0LjYlOyAgIFxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9kdWN0IHtcXHJcXG4gICAgICAgIGhlaWdodDogNTMwcHg7XFxyXFxuICAgICAgICBtaW4td2lkdGg6IHVuc2V0O1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiB1bnNldDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLmFkanVzdCB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5hZGp1c3RNaW5Nb2Ige1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLmFkanVzdE1pbiB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zbGlkZUltZyB7XFxyXFxuICAgICAgICB3aWR0aDogMjUwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnN3aXBlci1idXR0b24tbmV4dCwgLnN3aXBlci1idXR0b24tcHJldiB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYWJvdXRJbWcge1xcclxcbiAgICAgICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgICAgIGhlaWdodDogNDAwcHhcXHJcXG4gICAgfSBcXHJcXG4gICAgLmFib3V0Q29udGVudCB7XFxyXFxuICAgICAgICB3aWR0aDogNTAlO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgfVxcclxcbiAgICAuaXRlbSB7XFxyXFxuICAgICAgICB3aWR0aDogMjAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuYXJjaGl2ZWQge1xcclxcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB9XFxyXFxuICAgIC5hcmNoaXZlZC10aXRsZSB7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC52YXBlc3RlciwgLmNvbWJvLCAuZmxhdm9yLCAuY2lnYXJldHRlIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHhcXHJcXG4gICAgfVxcclxcbiAgICAuaXRlbUNvdW50IHtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHhcXHJcXG4gICAgfVxcclxcbiAgICAuc2Nyb2xsIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzMwX19fICsgXCIpO1xcclxcbiAgICAgICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICAgICAgaGVpZ2h0OiA1NXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIEBrZXlmcmFtZXMgc2Nyb2xsIHtcXHJcXG4gICAgICAgIGZyb20ge1xcclxcbiAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTUwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgIFxcclxcbiAgICAgICAgdG8ge1xcclxcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xMDBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLm5hdmJhciB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgICAgbWFyZ2luOiA0NXB4IDglO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMTFweDtcXHJcXG4gICAgfVxcclxcbiAgICAud2FybmluZyB7XFxyXFxuICAgICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2lnbmluU2VhcmNoTGFuZ1dyYXBwZXIge1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMTFweDtcXHJcXG4gICAgICAgIHdpZHRoOiAzMTBweFxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zaWduaW5UZXh0IHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC53YXJuaW5nIHNwYW4ge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDIwcHg7ICAgIFxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zd2lwZXItc2xpZGUgLnRpdGxlIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiA2MHZoO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0NXB4O1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAuc3dpcGVyLXNsaWRlIC5zdWJ0aXRsZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDUwcHg7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICAgICAgbWFyZ2luOiBhdXRvIDQ1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNlY29uZFNsaWRlQ29udGVudCB7XFxyXFxuICAgICAgICB3aWR0aDogNTU3cHg7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiA0MHZoO1xcclxcbiAgICAgICAgbWFyZ2luOiAyNTZweCA0NXB4O1xcclxcbiAgICAgICAgLyogcGFkZGluZy1sZWZ0OiA1MHB4OyAqL1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zZWNvbmRTbGlkZUNvbnRlbnQgZGl2Om50aC1jaGlsZCgxKSB7XFxyXFxuICAgICAgICB3aWR0aDogNDg1cHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBcXHJcXG4gICAgLnNlY29uZFNsaWRlQ29udGVudCBkaXY6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgICAgIHdpZHRoOiA4OSU7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogMjAwO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwLjk7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2Vjb25kU2xpZGVDb250ZW50IGRpdjpudGgtY2hpbGQoMykgYnV0dG9ue1xcclxcbiAgICAgICAgd2lkdGg6IDIwMnB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5zZWNvbmRTbGlkZUNvbnRlbnQgZGl2Om50aC1jaGlsZCgzKSBpbnB1dHtcXHJcXG4gICAgICAgIHdpZHRoOiAzMDRweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYWJvdXRXcmFwcGVyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxVQUFVO0lBQ1YsUUFBUTtJQUNSLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25C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LFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOjA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi53YXJuaW5nIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTE4cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMzRTNFM0U7XFxyXFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi53YXJuaW5nIHNwYW4ge1xcclxcbiAgICB3aWR0aDogMjg3cHg7XFxyXFxuICAgIGhlaWdodDogNjNweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICAgIHdpZHRoOiA4NCU7XFxyXFxuICAgIGhlaWdodDogNjBweDtcXHJcXG4gICAgbWFyZ2luOiAzMHB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IDUwMDAwMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLm5hdmJhckNvbnRlbnQge1xcclxcbiAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgIG1hcmdpbjogYXV0bztcXHJcXG4gfVxcclxcblxcclxcbiAubmF2YmFyV3JhcHBlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuIH1cXHJcXG5cXHJcXG4gLm5hdmJhckNvbnRlbnQgZGl2IHtcXHJcXG4gICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgY29sb3I6ICMwMDAwMDA7XFxyXFxuICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvYmxhY2tfYXJyb3cucG5nJyk7XFxyXFxuICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XFxyXFxuICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuIH1cXHJcXG5cXHJcXG4ubmF2YmFyQ29udGVudC5tZW51T3BlbiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMjBweDtcXHJcXG59XFxyXFxuLm5hdmJhci5tZW51T3BlbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgI0U1RTVFNTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgLyogcGFkZGluZzogMzBweDsgKi9cXHJcXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDFzIGxpbmVhcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaWNvbiB7XFxyXFxuICAgIHdpZHRoOiA0NHB4O1xcclxcbiAgICBoZWlnaHQ6IDQ0cHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL3doaXRlX21lbnUucG5nJyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyXFxyXFxufVxcclxcblxcclxcbi5tZW51LWljb24ubWVudU9wZW4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9ibHVlX21lbnUucG5nJyk7XFxyXFxuICAgIG1hcmdpbjogMzBweDtcXHJcXG59IFxcclxcblxcclxcbi5tZW51LWljb25zLW1vYmlsZSB7XFxyXFxuICBkaXNwbGF5OiBub25lOyAgXFxyXFxuICBtYXJnaW46IGF1dG9cXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaWNvbnMtbW9iaWxlIC5pbWdCYXNrZXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9ibGFja19iYXNrZXQucG5nJyk7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWljb25zLW1vYmlsZSAuaW1nU2VhcmNoIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvYmxhY2tfc2VhcmNoLnBuZycpO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xcclxcbn1cXHJcXG4uaW1nTGFuZ01vYmlsZSB7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDM2cHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2VuZ19mbGFnLnBuZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pY29ucy1tb2JpbGUubWVudU9wZW4ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWxvZ28ge1xcclxcbiAgICB3aWR0aDogMTU0cHg7XFxyXFxuICAgIGhlaWdodDogNjRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvd2hpdGVfbG9nby5wbmcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtbG9nby5tZW51T3BlbiB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2JsYWNrX2xvZ28ucG5nJyk7XFxyXFxufVxcclxcblxcclxcbi5zaWduaW5UZXh0Lm1lbnVPcGVuIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ29JbWcge1xcclxcbiAgICB3aWR0aDogMjY3cHg7XFxyXFxuICAgIGhlaWdodDogMTExcHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2xvZ28ucG5nJyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogNjAwcHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG51bCBsaSB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBmb250LWZhbWlseTogQmViYXMgTmV1ZTtcXHJcXG4gIGNvbG9yOiAjRkZGRkZGO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbnVsIGxpOjphZnRlciB7XFxyXFxuICAgY29udGVudDogdXJsKCcuLi9pbWFnZXMvYXJyb3cucG5nJyk7XFxyXFxuICAgcGFkZGluZy1sZWZ0OiA1cHhcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ25pblNlYXJjaExhbmdXcmFwcGVyIHtcXHJcXG4gICAgd2lkdGg6IDQwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nTGFuZyB7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDM2cHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2VuZ19mbGFnLnBuZycpLCB1cmwoJy4uL2ltYWdlcy9hcnJvdy5wbmcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiAzNnB4IDM2cHgsIDEwcHggNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMCUsIDEwMCUgNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbmluVGV4dCB7XFxyXFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTFweDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zaWduaW5UZXh0OjphZnRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgY29udGVudDogJyc7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUxODRFNTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC03MnB4XFxyXFxufVxcclxcblxcclxcbi5pbWdTZWFyY2gge1xcclxcbiAgICB3aWR0aDogMjlweDtcXHJcXG4gICAgaGVpZ2h0OiAyOXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9zZWFyY2gucG5nJyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbWdCYXNrZXQge1xcclxcbiAgICB3aWR0aDogMjlweDtcXHJcXG4gICAgaGVpZ2h0OiAyOXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9iYXNrZXQucG5nJyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi5zd2lwZXItY29udGFpbmVyLTEge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc3dpcGVyLXNsaWRlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBwYWRkaW5nOiA0MHB4IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhcmFsbGF4LWJnIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zd2lwZXItc2xpZGUgLnRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyNTZweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc3dpcGVyLXNsaWRlIC5zdWJ0aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTkzcHg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgbGluZS1oZWlnaHQ6IC01cHg7XFxyXFxufVxcclxcblxcclxcbi5zd2lwZXItc2xpZGUgLnRleHQge1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XFxyXFxufVxcclxcbi5zd2lwZXItcGFnaW5hdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcXHJcXG4gICAgICB3aWR0aDogMjNweDtcXHJcXG4gICAgICBoZWlnaHQ6IDIzcHg7XFxyXFxuICAgICAgYmFja2dyb3VuZDogIzNFM0UzRTtcXHJcXG4gICAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNGRkZGRkZcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xcclxcbiAgICAgIGJhY2tncm91bmQ6ICM1MTg0RTU7XFxyXFxuICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjNTE4NEU1O1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGUxIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9iYWNrZ3JvdW5kXzEucG5nJyk7XFxyXFxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQ1JSA0MCUgO1xcclxcbiAgfVxcclxcbi5zbGlkZTIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9iYWNrZ3JvdW5kXzIucG5nJyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDU1JSA0MCUgO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGUzIHtcXHJcXG4gICAgYmFja2dyb3VuZDogZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZFNsaWRlQ29udGVudCB7XFxyXFxuICAgIHdpZHRoOiAzMzFweDtcXHJcXG4gICAgbWFyZ2luOiAxODhweCBhdXRvO1xcclxcbn1cXHJcXG4uc2Vjb25kU2xpZGVDb250ZW50IGRpdjpudGgtY2hpbGQoMSkge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZFNsaWRlQ29udGVudCBkaXY6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZFNsaWRlQ29udGVudCBkaXY6bnRoLWNoaWxkKDMpIGJ1dHRvbntcXHJcXG4gICB3aWR0aDogMTAwJTtcXHJcXG4gICBoZWlnaHQ6IDU0cHg7XFxyXFxuICAgY29sb3I6ICNGRkZGRkY7XFxyXFxuICAgYmFja2dyb3VuZDogIzUxODRFNTtcXHJcXG4gICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgYm9yZGVyOiBub25lO1xcclxcbiAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kU2xpZGVDb250ZW50IGRpdjpudGgtY2hpbGQoMykgaW5wdXR7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDU0cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM3NzY4Njg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweFxcclxcbiB9XFxyXFxuXFxyXFxuIGlucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XFxyXFxuICAgIGNvbG9yOiAjQzFDMUMxO1xcclxcbiAgICBtYXJnaW46IDMwcHg7XFxyXFxuIH1cXHJcXG4gLnNjcm9sbCB7XFxyXFxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICB3aWR0aDogMTRweDtcXHJcXG4gICAgIGhlaWdodDogMTVweDtcXHJcXG4gICAgIG1hcmdpbi10b3A6IC0xMDBweDtcXHJcXG4gICAgIHotaW5kZXg6IDIwMDAwMDtcXHJcXG4gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL21vYmlsZV9zY3JvbGwucG5nJyk7XFxyXFxuICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgbWFyZ2luLWxlZnQ6IDUwJTtcXHJcXG4gICAgIGFuaW1hdGlvbjogc2Nyb2xsIDEuNXMgaW5maW5pdGUgbGluZWFyO1xcclxcbiB9XFxyXFxuXFxyXFxuIEBrZXlmcmFtZXMgc2Nyb2xsIHtcXHJcXG4gICAgIGZyb20ge1xcclxcbiAgICAgICAgIG1hcmdpbi10b3A6IC0xMDBweDtcXHJcXG4gICAgIH1cXHJcXG5cXHJcXG4gICAgIHRvIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xcclxcbiAgICAgfVxcclxcbiB9XFxyXFxuXFxyXFxuIC5zd2lwZXItY29udGFpbmVyLTIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA1NzBweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdCB7XFxyXFxuICAgIGhlaWdodDogNTMwcHg7XFxyXFxuICAgIG1pbi13aWR0aDogMTQ4cHg7XFxyXFxuICAgIG1heC13aWR0aDogMTQ4cHg7XFxyXFxufVxcclxcblxcclxcbi5hZGp1c3Qge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTIwcHg7XFxyXFxufVxcclxcbi5hZGp1c3RNaW5Nb2Ige1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkanVzdE1pbiB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtNjBweDtcXHJcXG59XFxyXFxuLnN3aXBlci13cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDg1JTtcXHJcXG59XFxyXFxuXFxyXFxuLm91ci1wcm9kdWN0cyB7XFxyXFxuICAgIHdpZHRoOiA5NS41JTtcXHJcXG4gICAgaGVpZ2h0OiA2NzNweDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMDBweFxcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdC10aXRsZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQmViYXMgTmV1ZSc7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogNDhweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXBlci1idXR0b24tbmV4dCwgLnN3aXBlci1idXR0b24tcHJldiB7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGNvbG9yOiAjQjNCM0IzO1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVJbWcge1xcclxcbiAgICB3aWR0aDogMjczcHg7XFxyXFxuICAgIGhlaWdodDogMzUwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWFnZXMvcHJvZHVjdC5wbmcpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmQge1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0VGl0bGUge1xcclxcbiAgICBjb2xvcjogIzRCNEI0QjtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMTBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0UHJpY2Uge1xcclxcbiAgICBjb2xvcjogIzRCNEI0QjtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2R1Y3RQcmljZTo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogdXJsKCcuLi9pbWFnZXMvZHJhbS5wbmcnKTtcXHJcXG4gICAgd2lkdGg6IDEwcHg7XFxyXFxuICAgIGhlaWdodDogMTBweDtcXHJcXG4gICAgbWFyZ2luOiAwcHggNXB4IDBweCAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnNJbWcge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1hZ2VzL3N0YXJzLnBuZyk7XFxyXFxuICAgIHdpZHRoOiA4OHB4O1xcclxcbiAgICBoZWlnaHQ6IDE2cHg7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQge1xcclxcbiAgd2lkdGg6IDkyJTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0SW1nIHtcXHJcXG4gICAgd2lkdGg6IDM2MXB4O1xcclxcbiAgICBtaW4taGVpZ2h0OiAyNDhweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltYWdlcy93aG9XZUFyZS5wbmcpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvXFxyXFxufVxcclxcblxcclxcbi5hYm91dFRpdGxlIHtcXHJcXG4gICBjb2xvcjogIzAwMDAwMDtcXHJcXG4gICBmb250LWZhbWlseTogJ0JlYmFzIE5ldWUnO1xcclxcbiAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG4uYWJvdXRXcmFwcGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi5hYm91dENvbnRlbnQge1xcclxcbiAgICB3aWR0aDogODQlO1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGNvbG9yOiAjNzI3MjcyO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5hcmNoaXZlZCB7XFxyXFxuICAgIHdpZHRoOiA4NC42JTtcXHJcXG4gICAgbWFyZ2luOiAyNXB4IGF1dG87XFxyXFxuICAgIGhlaWdodDogMzYwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbi5hcmNoaXZlZC10aXRsZSB7XFxyXFxuICAgIHdpZHRoOiA4NC42JTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdCZWJhcyBOZXVlJztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xcclxcbiAgICBjb2xvcjogIzAwMDAwMDtcXHJcXG4gICAgbWFyZ2luOiAyNXB4IGF1dG8gMHB4IGF1dG87XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0ge1xcclxcbiAgICB3aWR0aDogNDQuNSU7XFxyXFxuICAgIGhlaWdodDogMTY4cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0IyQjJCMjtcXHJcXG59XFxyXFxuXFxyXFxuLnZhcGVzdGVyIHtcXHJcXG4gICAgbWFyZ2luOiAyNXB4IGF1dG8gMjBweCBhdXRvO1xcclxcbiAgICB3aWR0aDogNThweDtcXHJcXG4gICAgaGVpZ2h0OiA1M3B4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy92YXBlc3Rlci5wbmcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuLmNpZ2FyZXR0ZSB7XFxyXFxuICAgIG1hcmdpbjogMjVweCBhdXRvIDIwcHggYXV0bztcXHJcXG4gICAgd2lkdGg6IDQ2cHg7XFxyXFxuICAgIGhlaWdodDogNDZweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvY2lnYXJldHRlLnBuZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4uZmxhdm9yIHtcXHJcXG4gICAgbWFyZ2luOiAyNXB4IGF1dG8gMjBweCBhdXRvO1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9mbGF2b3IucG5nJyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi5jb21ibyB7XFxyXFxuICAgIG1hcmdpbjogMjVweCBhdXRvIDIwcHggYXV0bztcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogNDZweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvY29tYm8ucG5nJyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMzRTNFM0U7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItbG9nbyB7XFxyXFxuICAgIHdpZHRoOiAxNzFweDtcXHJcXG4gICAgaGVpZ2h0OiA3MXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9mb290ZXJfbG9nby5wbmcnKTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyV3JhcHBlciB7XFxyXFxuICAgIHdpZHRoOiA4My42JTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG4uZm9vdGVyLWl0ZW0ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBjb2xvcjogI0ZGRkZGRjtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9hcnJvdy5wbmcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlclxcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWl0ZW0uYWN0aXZlIHtcXHJcXG4gICAgY29sb3I6ICM1MTg0RTU7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2JsdWVfYXJyb3cucG5nJyk7XFxyXFxufVxcclxcblxcclxcbi5pbmZvIHtcXHJcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLmluZm8uYWN0aXZlIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbi5pbmZvIGRpdiB7XFxyXFxuICAgIHBhZGRpbmc6IDVweFxcclxcbn1cXHJcXG4uZm9vdGVyLWJ1dHRvbnMge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1idXR0b25zIGlucHV0IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNTRweDtcXHJcXG4gICAgYmFja2dyb3VuZDogIzc3Njg2ODtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItYnV0dG9ucyBpbnB1dDo6cGxhY2Vob2xkZXIge1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xcclxcbiAgICBjb2xvcjogI0MxQzFDMTtcXHJcXG4gICAgbWFyZ2luOiAzMHB4O1xcclxcbiB9XFxyXFxuXFxyXFxuLmZvb3Rlci1idXR0b25zIGJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDU0cHg7XFxyXFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNTE4NEU1O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWljb25zIHtcXHJcXG4gICAgd2lkdGg6IDMyNnB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtYXJnaW46IDgwcHggYXV0bztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uc29jaWFsLWljb25zIHtcXHJcXG4gICAgd2lkdGg6IDQ0LjUlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWljb25zIHtcXHJcXG4gICAgd2lkdGg6IDMyJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZmFjZWJvb2sge1xcclxcbiAgICB3aWR0aDogMTVweDtcXHJcXG4gICAgaGVpZ2h0OiAyOHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9mYWNlYm9vay5wbmcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnlvdS10dWJlIHtcXHJcXG4gICAgd2lkdGg6IDM5cHg7XFxyXFxuICAgIGhlaWdodDogMjhweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMveW91X3R1YmUucG5nJyk7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi5pbnN0YWdyYW0ge1xcclxcbiAgICB3aWR0aDogMzJweDtcXHJcXG4gICAgaGVpZ2h0OiAzMnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9pbnN0YWdyYW0ucG5nJyk7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi5tYXN0ZXIge1xcclxcbiAgICB3aWR0aDogNDVweDtcXHJcXG4gICAgaGVpZ2h0OiAyOHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9tYXN0ZXJjYXJkLnBuZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG4udmlzYSB7XFxyXFxuICAgIHdpZHRoOiA1MnB4O1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL3Zpc2EucG5nJyk7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvcHlyaWdodCB7XFxyXFxuICAgIHdpZHRoOiAzMjZweDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IC02MHB4OyBcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcXHJcXG4gICAgLmZvb3Rlci1jb250YWluZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDg2JTtcXHJcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgfVxcclxcbi8qIFxcclxcbiAgICAuZm9vdGVyIHtcXHJcXG4gICAgICAgIGhlaWdodDogNDAwcHhcXHJcXG4gICAgfSAqL1xcclxcblxcclxcbiAgICAuZm9vdGVyLWJ1dHRvbnMge1xcclxcbiAgICAgICAgd2lkdGg6IDY0M3B4XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZvb3Rlci1ib3R0b20tcGFydCB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDIyNHB4O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZm9vdGVyLWJvdHRvbS1wYXJ0IGRpdjpudGgtY2hpbGQoMSkge1xcclxcbiAgICAgICAgIHdpZHRoOiAxNDdweDtcXHJcXG4gICAgICAgICBoZWlnaHQ6IDIyNHB4O1xcclxcbiAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xcclxcbiAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXHJcXG4gICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgICAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgIC5mb290ZXItYm90dG9tLXBhcnQgZGl2Om50aC1jaGlsZCgyKSB7XFxyXFxuICAgICAgICB3aWR0aDogMjM2cHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDE5MXB4O1xcclxcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxyXFxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgIH1cXHJcXG5cXHJcXG4gICAuZm9vdGVyLWJvdHRvbS1wYXJ0IGRpdjpudGgtY2hpbGQoMSkge1xcclxcbiAgICB3aWR0aDogMTQ3cHg7XFxyXFxuICAgIGhlaWdodDogMjI0cHg7XFxyXFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWJvdHRvbS1wYXJ0IGRpdjpudGgtY2hpbGQoMykge1xcclxcbiAgIHdpZHRoOiAxNzFweDtcXHJcXG4gICBoZWlnaHQ6IDIyNHB4O1xcclxcbiAgIGNvbG9yOiAjRkZGRkZGO1xcclxcbiAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXHJcXG4gICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItY29weXJpZ2h0IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xcclxcbiAgICBjb2xvcjogI0ZGRkZGRjtcXHJcXG4gICAgb3BhY2l0eTogMC45O1xcclxcbiAgICBtYXJnaW46IDUwcHggMHB4IDBweCAwcHhcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1ib3R0b20tcGFydCBkaXY6bnRoLWNoaWxkKDQpIHtcXHJcXG4gICAgd2lkdGg6IDEyN3B4O1xcclxcbiAgICBoZWlnaHQ6IDE5MXB4O1xcclxcbiAgICBjb2xvcjogI0ZGRkZGRjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gfVxcclxcblxcclxcbiAgICAuZm9vdGVyLWJvdHRvbS1wYXJ0IGRpdjpudGgtY2hpbGQoMSkgcCxcXHJcXG4gICAgLmZvb3Rlci1ib3R0b20tcGFydCBkaXY6bnRoLWNoaWxkKDIpIHAsXFxyXFxuICAgIC5mb290ZXItYm90dG9tLXBhcnQgZGl2Om50aC1jaGlsZCgzKSBwLFxcclxcbiAgICAuZm9vdGVyLWJvdHRvbS1wYXJ0IGRpdjpudGgtY2hpbGQoNCkgcCB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICAubGluZSB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMS4zM3B4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXHJcXG4gICAgICAgIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwLjE7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZvb3Rlci1idXR0b25zIGlucHV0e1xcclxcbiAgICAgICB3aWR0aDogMzY2cHg7XFxyXFxuICAgICAgIGhlaWdodDogNTRweFxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5mb290ZXItYnV0dG9ucyBidXR0b257XFxyXFxuICAgICAgICB3aWR0aDogMjYwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiA1NHB4XFxyXFxuICAgICB9XFxyXFxuXFxyXFxuICAgICAuc29jaWFsLWljb25zIHtcXHJcXG4gICAgICAgICB3aWR0aDogMTc4LjYycHg7XFxyXFxuICAgICAgICAgaGVpZ2h0OiAyOS4zM3B4XFxyXFxuICAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIC5mb290ZXItdG9wLXBhcnQge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgaGVpZ2h0OiA3MnB4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZm9vdGVyLXRvcC1sb2dvIHtcXHJcXG4gICAgICAgd2lkdGg6IDE3MXB4O1xcclxcbiAgICAgICBoZWlnaHQ6IDcxcHg7XFxyXFxuICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2Zvb3Rlcl9sb2dvLnBuZycpO1xcclxcbiAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICB9XFxyXFxuICAgIC5wcm9kdWN0VGl0bGUsIC5wcm9kdWN0UHJpY2Uge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAuYWJvdXQge1xcclxcbiAgICAgICAgd2lkdGg6IDg0LjYlOyAgIFxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9kdWN0IHtcXHJcXG4gICAgICAgIGhlaWdodDogNTMwcHg7XFxyXFxuICAgICAgICBtaW4td2lkdGg6IHVuc2V0O1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiB1bnNldDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLmFkanVzdCB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5hZGp1c3RNaW5Nb2Ige1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLmFkanVzdE1pbiB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zbGlkZUltZyB7XFxyXFxuICAgICAgICB3aWR0aDogMjUwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnN3aXBlci1idXR0b24tbmV4dCwgLnN3aXBlci1idXR0b24tcHJldiB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYWJvdXRJbWcge1xcclxcbiAgICAgICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgICAgIGhlaWdodDogNDAwcHhcXHJcXG4gICAgfSBcXHJcXG4gICAgLmFib3V0Q29udGVudCB7XFxyXFxuICAgICAgICB3aWR0aDogNTAlO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgfVxcclxcbiAgICAuaXRlbSB7XFxyXFxuICAgICAgICB3aWR0aDogMjAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuYXJjaGl2ZWQge1xcclxcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB9XFxyXFxuICAgIC5hcmNoaXZlZC10aXRsZSB7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC52YXBlc3RlciwgLmNvbWJvLCAuZmxhdm9yLCAuY2lnYXJldHRlIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHhcXHJcXG4gICAgfVxcclxcbiAgICAuaXRlbUNvdW50IHtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHhcXHJcXG4gICAgfVxcclxcbiAgICAuc2Nyb2xsIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL3Njcm9sbC5wbmcnKTtcXHJcXG4gICAgICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgICAgIGhlaWdodDogNTVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAa2V5ZnJhbWVzIHNjcm9sbCB7XFxyXFxuICAgICAgICBmcm9tIHtcXHJcXG4gICAgICAgICAgICAgbWFyZ2luLXRvcDogLTE1MHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICBcXHJcXG4gICAgICAgIHRvIHtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTAwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5uYXZiYXIge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICAgIG1hcmdpbjogNDVweCA4JTtcXHJcXG4gICAgICAgIGhlaWdodDogMTExcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLndhcm5pbmcge1xcclxcbiAgICAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNpZ25pblNlYXJjaExhbmdXcmFwcGVyIHtcXHJcXG4gICAgICAgIGhlaWdodDogMTExcHg7XFxyXFxuICAgICAgICB3aWR0aDogMzEwcHhcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2lnbmluVGV4dCB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gICAgfVxcclxcbiAgICAud2FybmluZyBzcGFuIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAyMHB4OyAgICBcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc3dpcGVyLXNsaWRlIC50aXRsZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogNjB2aDtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogNDVweDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLnN3aXBlci1zbGlkZSAuc3VidGl0bGUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgICAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgICAgIG1hcmdpbjogYXV0byA0NXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zZWNvbmRTbGlkZUNvbnRlbnQge1xcclxcbiAgICAgICAgd2lkdGg6IDU1N3B4O1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogNDB2aDtcXHJcXG4gICAgICAgIG1hcmdpbjogMjU2cHggNDVweDtcXHJcXG4gICAgICAgIC8qIHBhZGRpbmctbGVmdDogNTBweDsgKi9cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2Vjb25kU2xpZGVDb250ZW50IGRpdjpudGgtY2hpbGQoMSkge1xcclxcbiAgICAgICAgd2lkdGg6IDQ4NXB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgXFxyXFxuICAgIC5zZWNvbmRTbGlkZUNvbnRlbnQgZGl2Om50aC1jaGlsZCgyKSB7XFxyXFxuICAgICAgICB3aWR0aDogODklO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbiAgICAgICAgb3BhY2l0eTogMC45O1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNlY29uZFNsaWRlQ29udGVudCBkaXY6bnRoLWNoaWxkKDMpIGJ1dHRvbntcXHJcXG4gICAgICAgIHdpZHRoOiAyMDJweDtcXHJcXG4gICAgfVxcclxcbiAgICAuc2Vjb25kU2xpZGVDb250ZW50IGRpdjpudGgtY2hpbGQoMykgaW5wdXR7XFxyXFxuICAgICAgICB3aWR0aDogMzA0cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmFib3V0V3JhcHBlciB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuLi9jc3MvaW5kZXguY3NzJztcclxuaW1wb3J0IG5hdmJhciBmcm9tICcuL2NvbXBvbmVudHMvbmF2YmFyJztcclxuaW1wb3J0IGZvb3RlciBmcm9tICcuL2NvbXBvbmVudHMvZm9vdGVyJztcclxuaW1wb3J0IHtkYXRhfSBmcm9tICcuL2NvbXBvbmVudHMvYXNzZXRzL2NvbnN0YW50JztcclxuaW1wb3J0IGNyZWF0ZVNsaWRlIGZyb20gJy4vY29tcG9uZW50cy9zbGlkZXMnO1xyXG5pbXBvcnQgcmVuZGVySXRlbXMgZnJvbSAnLi9jb21wb25lbnRzL3JlbmRlckl0ZW1zJztcclxuXHJcbm5hdmJhcih3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbmZvb3Rlcih3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKT0+e1xyXG4gIG5hdmJhcih3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgZm9vdGVyKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuICAvLyBjcmVhdGVTbGlkZShkYXRhLnByb2R1Y3RzLCB3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbn0pO1xyXG5yZW5kZXJJdGVtcyhkYXRhLmFyY2hpdmVkKTtcclxuXHJcbnZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLnN3aXBlci1jb250YWluZXItMVwiLCB7XHJcbiAgICBzcGVlZDogNjAwLFxyXG4gICAgcGFyYWxsYXg6IHRydWUsXHJcbiAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgIGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvblwiLFxyXG4gICAgICBjbGlja2FibGU6IHRydWVcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgY3JlYXRlU2xpZGUoZGF0YS5wcm9kdWN0cywgd2luZG93LmlubmVyV2lkdGgpO1xyXG4gIHZhciBzd2lwZXIxID0gbmV3IFN3aXBlcihcIi5zd2lwZXItY29udGFpbmVyLTJcIiwge1xyXG4gICAgc2xpZGVzUGVyVmlldzogNSxcclxuICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICBzbGlkZXNQZXJHcm91cDogNSxcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICAvLyBtb3VzZXdoZWVsOiB0cnVlLFxyXG4gICAgbG9vcEZpbGxHcm91cFdpdGhCbGFuazogdHJ1ZSxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgbmV4dEVsOiBcIi5zd2lwZXItYnV0dG9uLW5leHRcIixcclxuICAgICAgcHJldkVsOiBcIi5zd2lwZXItYnV0dG9uLXByZXZcIixcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiZGF0YSIsInByb2R1Y3RzIiwiaW1nIiwidGl0bGUiLCJwcmljZSIsInN0YXJzIiwiYXJjaGl2ZWQiLCJjb3VudCIsImZvb3RlciIsInNjcmVlbiIsImZvb3RlckNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsImZvb3Rlckl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImluZm9BcnIiLCJmb3JFYWNoIiwiaXRlbSIsImluZGV4IiwiZm9vdGVyU2VjdGlvbnMiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiaW5mbyIsImNsYXNzTmFtZSIsInJlbW92ZSIsIm5hdmJhciIsIm5hdkNvbnRhaW5lciIsIm1lbnUiLCJuYXYiLCJsb2dvIiwidGV4dCIsIm5hdkNvbnRlbnQiLCJpY29ucyIsInJlbmRlciIsImFyY2hpdmVkQ29udGFpbmVyIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZCIsImNyZWF0ZVNsaWRlIiwiY29udGFpbmVyIiwiY29uc29sZSIsImxvZyIsInByb2R1Y3RUaXRsZSIsInByb2R1Y3RQcmljZSIsInN0YXJzSW1nIiwicmVuZGVySXRlbXMiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwic3dpcGVyIiwiU3dpcGVyIiwic3BlZWQiLCJwYXJhbGxheCIsInBhZ2luYXRpb24iLCJlbCIsImNsaWNrYWJsZSIsInN3aXBlcjEiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwic2xpZGVzUGVyR3JvdXAiLCJsb29wIiwibG9vcEZpbGxHcm91cFdpdGhCbGFuayIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiXSwic291cmNlUm9vdCI6IiJ9