
function navbar() {
    const navContainer = document.querySelector('.navbar');
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

    return navContainer;
}

export default navbar;
