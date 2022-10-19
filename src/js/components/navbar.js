
function navbar(screen, page) {
    const navContainer = document.querySelector('.navbar');
    if (page=='product' || page == 'brands') {
        navContainer.style.position = 'unset';
    }
    navContainer.innerHTML='';

    if (screen<1280) {

        navContainer.innerHTML = `
        <div class='navbarWrapper'>
            <div class='menu-icon'></div>
            <div class='menu-logo'></div>
            <div class='signinText'>SIGN IN</div>
        </div>
        <div class='navbarContent'>
            <div>HOME</div>
            <a href = './product.html'><div>OUR PRODUCTS</div></a>
            <a href = './brands.html'><div>BRANDS</div></a>
        </div>
        <div class='menu-icons-mobile'>
            <div class='imgBasket'></div>
            <div class='imgSearch'></div>
            <div class='imgLangMobile'></div>
        </div>
        `;
        
        if (page=='product' || page == 'brands') {
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
           <a  href = './index.html'><li>HOME</li></a>
           <a class='nav-product' href = './product.html'><li>OUR PRODUCTS</li></a>
           <a class='nav-brand' href = './brands.html'><li>BRANDS</li></a>
        </ul>
        <div class='signinSearchLangWrapper'>
           <div class='imgLang'></div>
           <div class='signinText'>SIGN IN</div>
           <div class='imgSearch'></div>
           <div class='imgBasket'></div>
        </div>
      `;
      
      if (page == 'product' || page=='brands') {
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
      const list = document.querySelectorAll('li');
      if (page == 'product') {
          list[1].style.color = '#5184E5';
      } 
  
      if (page == 'brands') {
          list[2].style.color = '#5184E5';
      } 
  
      if (page == 'Home') {
          list[0].style.color = '#5184E5';
      }
    }


    const text = document.querySelector('.signinText');
    const login = document.querySelector('.login');
    text.addEventListener('click', ()=>{
        login.classList.add('open');
    });

    const search = document.querySelector('.imgSearch');
    const searchContainer = document.querySelector('.searchContainer');
    search.addEventListener('click', ()=>{
        searchContainer.classList.add('open');
    })

    return navContainer;
}

export default navbar;
