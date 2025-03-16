$( ".navbar-toggler" ).click(function() {
  $("body").toggleClass( "openmenu" );
});
/*----Header menu js animation----*/

$( document ).ready(function() {
const body = document.body;
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.remove(scrollUp);
    return;
  }

  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
  } else if (
    currentScroll < lastScroll &&
    body.classList.contains(scrollDown)
  ) {
    // up
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
  }
  lastScroll = currentScroll;
});


});


/*----teamslider js animation----*/

$(document).ready(function(){

  $("#teamslider").owlCarousel({
    loop:false,
    nav: true,
    dots:false,
    responsive:{
        0:{
            items:1.5,
        },
        600:{
            items:3,
        },
        1000:{
            items:4,
            nav:false,
            loop:false
        }
    }

});


});

/*----Footer parallax js animation----*/

$(document).ready(function(){
  // INITIATE THE FOOTER
  siteFooter();
  // COULD BE SIMPLIFIED FOR THIS PEN BUT I WANT TO MAKE IT AS EASY TO PUT INTO YOUR SITE AS POSSIBLE
  $(window).resize(function() {
    siteFooter();
  });
  
  // function siteFooter() {
  //   var siteContent = $('#site-content');
  //   var siteContentHeight = siteContent.height();
  //   var siteContentWidth = siteContent.width();

  //   var siteFooter = $('#site-footer');
  //   var siteFooterHeight = siteFooter.height();
  //   var siteFooterWidth = siteFooter.width();

  //   console.log('Content Height = ' + siteContentHeight + 'px');
  //   console.log('Content Width = ' + siteContentWidth + 'px');
  //   console.log('Footer Height = ' + siteFooterHeight + 'px');
  //   console.log('Footer Width = ' + siteFooterWidth + 'px');

  //   siteContent.css({
  //     "margin-bottom" : siteFooterHeight + 50
  //   });
  // };

});



/*----Image parallax js animation----*/


/*----Image parallax js animation----*/



      document.addEventListener("DOMContentLoaded", function () {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.4
  };

  // IMAGE ANIMATION

  let revealCallback = (entries) => {
    entries.forEach((entry) => {
      let container = entry.target;

      if (entry.isIntersecting) {
        console.log(container);
        container.classList.add("animating");
        return;
      }

      if (entry.boundingClientRect.top > 0) {
        container.classList.remove("animating");
      }
    });
  };

  let revealObserver = new IntersectionObserver(revealCallback, options);

  document.querySelectorAll(".reveal").forEach((reveal) => {
    revealObserver.observe(reveal);
  });

  // TEXT ANIMATION

  let fadeupCallback = (entries) => {
    entries.forEach((entry) => {
      let container = entry.target;
      container.classList.add("not-fading-up");

      if (entry.isIntersecting) {
        container.classList.add("fading-up");
        return;
      }

      if (entry.boundingClientRect.top > 0) {
        container.classList.remove("fading-up");
      }
    });
  };

  let fadeupObserver = new IntersectionObserver(fadeupCallback, options);

  document.querySelectorAll(".fadeup").forEach((fadeup) => {
    fadeupObserver.observe(fadeup);
  });
});


/*------------Parallax enllax js------------*/



$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if(scroll < 70) {
    $(".trigger-menu-wrapper").css("background", "transparent");
  } else {
    $(".trigger-menu-wrapper").css("background", "#fff");
  }
});

