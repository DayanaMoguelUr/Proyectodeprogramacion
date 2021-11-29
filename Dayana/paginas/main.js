const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible")
})

window.addEventListener('load', function(){
    new Glider(document.querySelector('.carrousel__lista'), {
        slidesToShow: 5,
        slidesToScroll: 5,
        dots: '.carrousel__indicadores',
        arrows: {
          prev: '.carrousel__anterior',
          next: '.carrousel__siguiente'
        },
        responsive: [
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 6,
              }
            },{
              breakpoint: 800,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 5,
              }
            }
          ]
    });
});