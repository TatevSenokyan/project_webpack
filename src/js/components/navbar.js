
function navbar(screen) {
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
         //create image part
    const imgDiv = document.createElement('div');
    imgDiv.className = 'logoImg';
    // create ul
    const list=['NEW','OUR PRODUCTS', 'BRANDS'];
    const ul = document.createElement('ul');
    for (let i=0; i<list.length; i++) {
        const a = document.createElement('a');
        a.setAttribute('href', './product.html');
        let li = document.createElement('li');
        li.innerHTML=list[i]
        a.append(li);
        ul.append(a)
    }

    //create search part
    const div = document.createElement('div');
    div.className='signinSearchLangWrapper';
    const imgLang = document.createElement('div');
    imgLang.className='imgLang';
    div.append(imgLang);

    const span = document.createElement('span');
    span.className='signinText'
    span.innerHTML='SIGN IN'
    div.append(span);

    const imgSearch = document.createElement('div');
    imgSearch.className='imgSearch';
    div.append(imgSearch);
    const imgBasket = document.createElement('div');
    imgBasket.className='imgBasket';
    div.append(imgBasket);


    navContainer.appendChild(imgDiv);
    navContainer.appendChild(ul);
    navContainer.appendChild(div);
    }
 

    return navContainer;
}

export default navbar;
