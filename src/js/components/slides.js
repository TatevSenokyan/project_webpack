



function createSlide (data, screen) {
    
    const container = document.querySelector('.second');
    data.forEach((item, index) => {
        const div = document.createElement('div');
        if (index) {
            div.className = "swiper-slide product adjust";
        } else {
            if (screen<700) {
                console.log('mj')
                div.className = "swiper-slide product adjustMinMob";
            } else {
                div.className = "swiper-slide product adjustMin";
            }
            
        }
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