/* ------ preloader menu ------ */
  $(window).load(function () {
    $('.preloader').fadeOut(1000);
  });
  
// hero slider script
$('.follow_slider').owlCarousel({
    loop:true,
    margin:30,
    dots:false,
    nav:true,
    autoplayTimeout:9000,
         autoplaySpeed: 1000,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

// testimonials slider script
$('.testimonials_slider').owlCarousel({
    loop:true,
    margin:30,
    dots:true,
    nav:true,
     slideBy:2,
     autoplayTimeout:9000,
         autoplaySpeed: 1000,
    autoplay:true,
    responsive:{
        0:{
            items:1,
             slideBy:1,
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})

// brand slider script
$('.brand_slider').owlCarousel({
    loop:true,
    margin:0,
    dots:false,
    nav:true,
    slideBy:6,
        autoplayTimeout:9000,
         autoplaySpeed: 1000,
    autoplay:true,
    responsive:{
        0:{
            items:2,
             slideBy:2,
        },
        600:{
            items:4,
             slideBy:4,
        },
        1000:{
            items:6
        }
    }
})

// brand slider script
$('.recent_slider').owlCarousel({
    loop:true,
    margin:35,
    dots:false,
    nav:false,
    autoplayTimeout:5000,
         autoplaySpeed: 1000,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

// window  scroll script
$(window).scroll(function () {
  if ( $(this).scrollTop() > 0 && !$('.main-header').hasClass('sticky') ) {
    $('.main-header').addClass('sticky');

   } else if ( $(this).scrollTop() <= 0 ) {
    $('.main-header').removeClass('sticky');

  }
});


// menu-toggle script
$( ".menu-toggle" ).click(function() {
   $("html").toggleClass( "show")
});

// menu-toggle script
$( ".filter-toggle" ).click(function() {
   $("html").toggleClass( "filter-show")
});

// menu-toggle script
$( ".select-color-box" ).click(function() {
     $(".select-color-box.active").removeClass( "active")
   $("this").addClass( "active")
});

// go to top script
            $(function(){
                // $(".gototop").gototop();
                $(".gototop").gototop({
                    position : 0,
                    duration : 1250,
                    visibleAt : 1000,
                    classname : "isvisible"
                });
            });
 
 // Responsive tab script           
$('.responsive_tab').skeletabs({
   history: false
});


$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical:true,
    arrows: false,
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true,
    verticalSwiping:true,
    responsive: [
    {
        breakpoint: 992,
        settings: {
          vertical: false,
          slidesToShow: 4,
        }
    },
    {
      breakpoint: 840,
      settings: {
        vertical: false,
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        vertical: true,
        slidesToShow: 5,
      }
    },
    {
      breakpoint: 580,
      settings: {
        vertical: false,
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 400,
      settings: {
        vertical: false,
        slidesToShow: 3,
      }
    }
    ]
});

