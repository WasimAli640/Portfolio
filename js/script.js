
// window.addEventListener("load", function() {
// // Menu Button
// let menuToggle = document.querySelector(".toggle");
// menuToggle.classList.add("collapsed");


// })

$(document).ready(function(){
// Owl Carousel
$('.feature-bride-carousel').owlCarousel({
  margin:50,
  loop:true,
  autoWidth:true,
  dots:false,
  items:4,
  responsive:{
      0:{
          items:1,
          nav:true,
          autoWidth:false,
      },
      576:{
          items:3,
          nav:false
      },
      1000:{
          items:5,
          loop:false
      }
  }
})
$('.feature-groom-carousel').owlCarousel({
  margin:50,
  loop:true,
  autoWidth:true,
  dots:false,
  items:4,
  rtl: true,
  responsive:{
      0:{
          items:1,
          nav:true,
          autoWidth:false,
          margin:20,
          rtl: false,
      },
      576:{
          items:3,
          nav:false
      },
      1000:{
          items:5,
          loop:false
      }
  }
})

});


var swiper = new Swiper(".navigation-slider", {
  direction: "vertical",
  speed: 600,
  loop: true,
  allowTouchMove: false,
  autoHeight: true,
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
    speed: 500,
    disableOnInteraction: true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true
  },
  mousewheel: true,
});