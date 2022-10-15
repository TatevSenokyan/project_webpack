
function navbar(screen, page) {
    const navContainer = document.querySelector('.navbar');
    navContainer.innerHTML='';

    if (screen<1280) {

        navContainer.innerHTML = `
        <div class='navbarWrapper'>
            <div class='menu-icon'></div>
            <div class='menu-logo'></div>
            <div class='signinText'>SIGN IN</div>
        </div>
        <div class='navbarContent'>
            <div>NEW</div>
            <div>OUR PRODUCTS</div>
            <div>BRANDS</div>
        </div>
        <div class='menu-icons-mobile'>
            <div class='imgBasket'></div>
            <div class='imgSearch'></div>
            <div class='imgLangMobile'></div>
        </div>
        `;
        if (page=='product') {
            const menu = document.querySelector('.menu-icon');
            menu.className = 'menu-icon product-menu-icon';

            const logo = document.querySelector('.menu-logo');
            logo.className = 'menu-logo product-menu-logo';

            const text = document.querySelector('.signinText');
            text.className = 'signinText product-signinText';
        }
        const menu = document.querySelector('.menu-icon');
        const nav = document.querySelector('.navbar');
        const logo = document.querySelector('.menu-logo');
        const text = document.querySelector('.signinText');
        const navContent = document.querySelector('.navbarContent');
        const icons = document.querySelector('.menu-icons-mobile');

        menu.addEventListener('click', () => {
            menu.classList.toggle('menuOpen');
            nav.classList.toggle('menuOpen');
            logo.classList.toggle('menuOpen');
            text.classList.toggle('menuOpen');
            navContent.classList.toggle('menuOpen');
            icons.classList.toggle('menuOpen');
        });

    } else {
      navContainer.innerHTML = `
        <div class='logoImg'></div>
        <ul>
           <a><li>NEW</li></a>
           <a href = './product.html'><li>OUR PRODUCTS</li></a>
           <a><li>BRANDS</li></a>
        </ul>
        <div class='signinSearchLangWrapper'>
           <div class='imgLang'></div>
           <div class='signinText'>SIGN IN</div>
           <div class='imgSearch'></div>
           <div class='imgBasket'></div>
        </div>
      `;
      
      if (page == 'product') {
         const logo = document.querySelector('.logoImg');
         logo.className = 'logoImg blackLogoImg';
         const list = document.querySelector('ul');
         list.classList.toggle('black-list');
         const text = document.querySelector('.signinText');
         text.classList.toggle('black-text');
         const search = document.querySelector('.imgSearch');
         search.classList.toggle('black-search');
         const basket = document.querySelector('.imgBasket');
         basket.classList.toggle('black-basket');
         navContainer.className = 'navbar navbarShadow';
      }

    }
 

    return navContainer;
}

export default navbar;
