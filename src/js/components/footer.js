function footer(screen) {
    const footerContainer = document.querySelector('.footer');
    footerContainer.innerHTML='';

    if (screen<1280) {

        footerContainer.innerHTML = `
        <div class='footer-logo'></div>
        <div class='footerWrapper'>
          <div class='footer-buttons'>
             <input placeholder="    Enter Your Email"/>
             <button>Subscribe</button>
          </div>
           <div class='footer-item'>Info</div>
           <div class='info'>
              <div>Contuct us</div>
              <div>About us</div>
              <div>Reviews</div>
              <div>FAQ</div>
              <div>Affiliate Program</div>
           </div>
           <div class='footer-item'>Help</div>
           <div class='info'>
              <div>Shippment Zip Code Check</div>
              <div>Shipping and Handling </div>
              <div>Warranty and Returns</div>
              <div>Payment Options</div>
           </div>
           <div class='footer-item'>Policy</div>
           <div class='info'>
              <div>Privicy Policy</div>
              <div>Terms & Conditions</div>
              <div>Cookies</div>
              <div>Age Policy</div>
              <div>Health & Safety</div>
           </div>
           <div class='footer-item'>Vapor Blog</div>
            <div class='info'>
              <div>Title</div>
              <div>Title</div>
              <div>Title</div>
              <div>Title</div>
            </div>
        </div>
        <div class='footer-icons'>
            <div class='social-icons'>
               <div class='facebook'></div>
               <div class='you-tube'></div>
               <div class='instagram'></div>
            </div>
            <div class='card-icons'>
                <div class='master'></div>
                <div class='visa'></div>
            </div>
        </div>
        <div class='copyright'>
            2022&copy; Copyright 2019  Kaliony UK
        </div>
        `;

        const footerItems = document.querySelectorAll('.footer-item');
        const infoArr = document.querySelectorAll('.info');
        
        footerItems.forEach(function(item, index) {
          const footerSections = [0, 1, 2, 3];
          item.addEventListener('click', () => {
            item.classList.toggle('active');
            infoArr[index].classList.toggle('active');
             delete footerSections[index];
             footerSections.forEach((info) => {
                footerItems[info].className = 'footer-item';
                infoArr[info].classList.remove('active');
             }); 
          });
        });


    } else {
       footerContainer.innerHTML = `
       <div class='footer-container'>
            <div class='footer-top-part'>
               <div class='footer-top-logo'></div>
               <div class='footer-buttons'>
                  <input placeholder="    Enter Your Email"/>
                  <button>Subscribe</button>
               </div>
               <div class='social-icons'>
                  <div class='facebook'></div>
                  <div class='you-tube'></div>
                  <div class='instagram'></div>
            </div>
            </div>
            <hr class='line'/>
            <div class='footer-bottom-part'>
               <div>
                  <p style='margin-bottom: 50px; font-weight:700;font-size: 24px;'>Info</p>
                  <p>Contuct us</p>
                  <p>About us</p>
                  <p>Reviews</p>
                  <p>FAQ</p>
                  <p>Affiliate Program</p>
               </div>
               <div>
                  <p style='margin-bottom: 50px; font-weight:700;font-size: 24px;'>Help</p>
                  <p>Shippment Zip Code Check</p>
                  <p>Shipping and Handling </p>
                  <p>Warranty and Returns</p>
                  <p>Paymet Options</p>
               </div>
               <div>
                  <p style='margin-bottom: 50px; font-weight:700;font-size: 24px;'>Policy</p>
                  <p>Privicy Policy</p>
                  <p>Terms & Conditions</p>
                  <p>Cookies</p>
                  <p>Age Policy</p>
                  <p>Health & Safety</p>
               </div>
               <div>
                  <p style='margin-bottom: 50px; font-weight:700;font-size: 24px;'>Vapor Blog</p>
                  <p>Title</p>
                  <p>Title</p>
                  <p>Title</p>
                  <p>Title</p>
                  <p>Title</p>
               </div>
            </div>
            <div class='footer-copyright'>
               2022 Ⓒ Copyright 2019 Kaliony UK
            </div>
      </div>
       `
    }
 

    return footerContainer;
}

export default footer;
