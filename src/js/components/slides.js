



function createSlide (data) {
    const container = document.querySelector('.second');
    data.forEach(item => {
        const div = document.createElement('div');
        div.className = "swiper-slide product";
        const img = document.createElement('div');
        img.className = 'slideImg';
        const productTitle=document.createElement('p');
        productTitle.className = 'productTitle';
        productTitle.innerHTML=item.title;
        const productPrice=document.createElement('p');
        productPrice.className='productPrice';
        productPrice.innerHTML=item.price;
        const starsImg=document.createElement('div')
        starsImg.className='starsImg';

        div.append(img);
        div.append(productTitle);
        div.append(productPrice);
        div.append(starsImg);

        container.append(div);
    });

    return container;

}

export default createSlide;