let menu = document.querySelector('#menu-bars');
let navBar = document.querySelector('.menueItems');

menu.addEventListener('click' , () => {
    debugger
    menu.classList.toggle('fa-times');
    navBar.classList.toggle('active');
})

window.addEventListener('onscroll' , () => {
    debugger
    menu.classList.remove('fa-times');
    navBar.classList.remove('active');
})

document.querySelector('#search-icon').addEventListener('click', ()=> {
    document.querySelector('#search-form').classList.toggle('active');
})

document.querySelector('#close').addEventListener('click', ()=> {
    document.querySelector('#search-form').classList.remove('active');
})

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true
});

var swiper = new Swiper(".reviewSlider", {
    centeredSlides: false,
    spaceBetween: 0,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        0:{
            slidesPerView: 1
        },
        640:{
            slidesPerView: 2
        },
        768:{
            slidesPerView: 2
        },
        1024:{
            slidesPerView: 3
        }
    }
});

document.querySelector('#sidebarCollapse').addEventListener('click', ()=> {
    document.querySelector('#sidebar').classList.remove('deActivate');
    document.querySelector('#sidebar').classList.toggle('active');
})

document.getElementById("checkoutButton").onclick = function () {

    window.location.href = "checkoutform.html";

};
