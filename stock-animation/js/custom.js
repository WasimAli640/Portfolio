
// Locomotive Smooth Scroll Init
var scroller = new LocomotiveScroll({
el: document.querySelector(".wrapper"),
smooth: true
});

gsap.registerPlugin(ScrollTrigger);

scroller.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".wrapper", {
  scrollTop(value) {
    return arguments.length
      ? scroller.scrollTo(value, 0, 0)
      : scroller.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
});

ScrollTrigger.addEventListener("refresh", () => scroller.update());

ScrollTrigger.refresh();

/* COLOR CHANGER */
window.addEventListener("load", function () {
  const scrollColorElems = document.querySelectorAll("[data-bgcolor]");
  scrollColorElems.forEach((colorSection, i) => {
    const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
    const prevText = i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;

    ScrollTrigger.create({
      trigger: colorSection,
      scroller: ".wrapper",
      start: "top 0%",
      onEnter: () =>
        gsap.to(".wrapper", {
          backgroundColor: colorSection.dataset.bgcolor,
          color: colorSection.dataset.textcolor,
          overwrite: "auto",
          duration: 2 
        }),
      onLeaveBack: () =>
        gsap.to(".wrapper", { 
          backgroundColor: prevBg,
          color: prevText,
          overwrite: "auto",
          duration: 2 
        }),
    });
  });
});


var header = document.querySelector(".header");


scroller.on('scroll', (position) => {
  if ((position.scroll.y) > 200) {
    header.classList.add('sticky');
    TweenMax.to(".right-logo", .2 , { opacity: 0, y:20, ease: Power1.easeOut});
    TweenMax.to(".left-logo", 1 , { opacity: 1, x:-50, ease: Power1.easeOut});
    TweenMax.to(".nav-button", 1 , { x:50, ease: Power1.easeOut});
    TweenMax.to( ".cus-nav-item", .5 , { opacity: 0, y:20, ease: Power1.easeOut, stagger: .02});
    

  } else {
    header.classList.remove('sticky');
    TweenMax.to(".right-logo", .5 , {opacity: 1, y:0, ease: Power1.easeOut});
    TweenMax.to(".left-logo", 1 , { opacity: 0, x:0, ease: Power1.easeOut});
    TweenMax.to(".nav-button", 1 , { x:0, ease: Power1.easeOut});
    TweenMax.to( ".cus-nav-item", .5 , { opacity: 1, y:0, ease: Power1.easeOut, stagger: .08});
  }
});


var cursor = document.getElementById("cursor");

document.addEventListener('mousemove', function(e){
  
  var x = e.clientX + 10;
  var y = e.clientY + 10;

  cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;

})


// Banner Mouse Event Animation
$(document).mousemove(function(event){

  
  $(".c-image").each(function(index, element){
    
    var xPos = (event.clientX/$(window).width()-.55),
       yPos = (event.clientY/$(window).height()-.602),
       box = element;
       var illus = $(".illus-circle");

  TweenMax.to(box, 1, {
      ease: Power1.easeOut,
      transformOrigin: 'center 50% 0px',
      willChange: 'transform',
      rotationX: 20 * yPos ,
      rotationY:  20 * xPos,
      x: xPos * 50,
      y: yPos * 50,
  },);
  TweenMax.to(illus, 1, {
      x: xPos * 100,
      ease: Power1.easeOut
    });
        
  })  
});

// Image Changing Animation in Banner
var lImg1 = $(".l-img-1");
var lImg2 = $(".l-img-2");
var rImg1 = $(".r-img-1");
var rImg2 = $(".r-img-2");


$(".right-empty").hover(function(){
    TweenMax.to('#wrapper', .5, { backgroundColor: '#6888b5', ease: Power1.easeOut });

    TweenMax.to(lImg1, 1, {willChange:'opacity', opacity:0, visibility: 'hidden', ease: Power1.easeOut });
    TweenMax.to(lImg2, 1, {willChange:'opacity', opacity:1, visibility: 'visible', ease: Power1.easeOut});

    TweenMax.to(rImg1, 1, {willChange:'opacity', opacity:0, visibility: 'hidden', ease: Power1.easeOut });
    TweenMax.to(rImg2, 1, {willChange:'opacity', opacity:1, visibility: 'visible', ease: Power1.easeOut });

})

$(".left-empty").hover(function(){
    TweenMax.to('#wrapper', .5, { backgroundColor: '#c7997e', ease: Power1.easeOut});

    TweenMax.to(lImg2, 1, {willChange:'opacity', opacity:0, visibility: 'hidden', ease: Power1.easeOut });
    TweenMax.to(lImg1, 1, {willChange:'opacity', opacity:1, visibility: 'visible', ease: Power1.easeOut });

    TweenMax.to(rImg2, 1, {willChange:'opacity', opacity:0, visibility: 'hidden', ease: Power1.easeOut });
    TweenMax.to(rImg1, 1, {willChange:'opacity', opacity:1, visibility: 'visible', ease: Power1.easeOut });
})
  


    var section1 = document.querySelector(".banner");
    var badge = document.querySelector(".badge");
    var lastScrollTop = 0;
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"


    // ------------------------------- 
    // ---- Scroll Direction JS ------ 

var scrollableElement = document.body; //document.getElementById('scrollableElement');

scrollableElement.addEventListener('wheel', checkScrollDirection);
TweenMax.to(badge, 7, { rotation: 360, ease: Linear.easeNone, repeat:-1},);
function checkScrollDirection(event) {
  if (checkScrollDirectionIsUp(event)) {
    TweenMax.to(badge, 7, { rotation: 360, ease: Linear.easeNone, repeat:-1},);
    console.log('UP');
  } else {
    TweenMax.to(badge, 7, { rotation: -359, ease:Linear.easeNone, repeat:-1},);
    console.log('Down');
  }
}

function checkScrollDirectionIsUp(event) {
    if (event.wheelDelta) {
      return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
  }
 


// ~~~~~~~~~        Full Menu     ~~~~~~~~~~

var timeout;
$('.full-menu').mousemove(function(e){
  if(timeout) clearTimeout(timeout);
  setTimeout(callParallax.bind(null, e), 200);
  
});

function callParallax(e){
  parallaxIt(e, '.fm-img', -30);
}

function parallaxIt(e, target, movement){
  var $this = $('.full-menu');
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;
  
  TweenMax.to(target, 1, {
    x: (relX - $this.width()) / $this.width() * movement,
    y: (relY - $this.height()) / $this.height() * movement,
    ease: Power2.easeOut
  })
}

$(".nav-button").click(function(){
  $(this).toggleClass("active");
  $(".full-menu").toggleClass("show");

  if($(this).hasClass("active") || $(".full-menu").hasClass("show")) {
    TweenMax.from(".full-menu", .8, { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", opacity: 1});
    TweenMax.to(".full-menu", .8 ,{ ease:Power1.easeIn, clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",  opacity: 1 });
    // For Bg Image of full screen menu
    TweenMax.fromTo(".fm-img", 3 ,{ scale: 1.5 }, { ease:Power4.easeOut, scale: 1 });

  var linkTween = new TimelineMax({delay:.8, stagger: .5});
   linkTween.staggerFrom(".full-list-item", .5,{ ease:Power1.easeOut, y:-200 , opacity: 0},.1, .05);
   linkTween.staggerTo(".full-list-item", .5, { ease:Power1.easeOut, y:0, opacity: 1}, .1, .05);

  } else {
    TweenMax.from(".full-menu", .8, { clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)", opacity: 1});
    TweenMax.to(".full-menu", .8 ,{ ease:Power1.easeIn, clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", opacity: 1 });
  }

})

// Hover On Text Show Image Section - Promotion Section

var $cursor = $(".img-cursor"),
$cursor2 = $(".s-img-cursor"),
$overlay = $(".p-item-overlay");
$fullHeight = $cursor.height()/4;
$fullWidth = $cursor.width() + $cursor.width()/2;


$(".pr-it-1").hover(function() {
  anim = true;
  TweenLite.set($cursor, {backgroundImage:'url("img/pr-l-img1.jpg")'});
  TweenLite.set($cursor2, {backgroundImage:'url("img/pr-s-img1.jpg")'});
});

$(".pr-it-2").hover(function() {
  anim = true;
  TweenLite.set($cursor, {backgroundImage:'url("img/pr-l-img2.jpg")'});
  TweenLite.set($cursor2, {backgroundImage:'url("img/pr-s-img2.jpg")'});
});

$(".pr-it-3").hover(function() {
  anim = true;
  TweenLite.set($cursor, {backgroundImage:'url("img/pr-l-img3.jpg")'});
  TweenLite.set($cursor2, {backgroundImage:'url("img/pr-s-img3.jpg")'});
});

$(".pr-it-4").hover(function() {
  anim = true;
  TweenLite.set($cursor, {backgroundImage:'url("img/pr-l-img4.jpg")'});
  TweenLite.set($cursor2, {backgroundImage:'url("img/pr-s-img4.jpg")'});
});
$(".pr-it-5").hover(function() {
  anim = true;
  TweenLite.set($cursor, {backgroundImage:'url("img/pr-l-img5.jpg")'});
  TweenLite.set($cursor2, {backgroundImage:'url("img/pr-s-img5.jpg")'});
});



$(".promotion-item").mousemove(function(e){
  var bg_color = $(this).attr("data-color");
  $(".promotion-item").removeClass("active");
  $(this).addClass("active");
  var hItl = new TimelineMax({ease: Power1.easeOut});
  hItl.to(".promotion-item", .5, {color : 'rgba(255, 255, 255, .2)'},0);
  hItl.to($(this), .5, {color : 'rgba(255, 255, 255, 1)'},0);
  hItl.to('.promotion', 1, {backgroundColor : bg_color},0);
  TweenLite.to('.bg-h-img', 0.3, {
      opacity: 1,
      autoAlpha: 1
  });
  TweenLite.to($cursor, 0.5, {
          x: e.pageX/10 ,
          y: e.pageY/2,
          xPercent: -45, 
          yPercent: -20,
  })
  TweenLite.to($cursor2, 0.5, {
          x: e.pageX/10 ,
          y: e.pageY/4,
          xPercent: 100, 
          yPercent: -20,
  })
});
$(".promotion-item").mouseout(function() {
  $(this).removeClass("active");   
  var hItl2 = new TimelineMax({ease: Power1.easeOut}); 
  hItl2.to(".promotion-item", 1,{color : 'rgba(0, 0, 0, .9)'},0);
  hItl2.to('.promotion', 1, {backgroundColor : '#fff'},0);
  TweenLite.to('.bg-h-img', 0.3, {
      opacity:0,
      autoAlpha: 0
  });
});



