gsap.registerPlugin(CSSPlugin, ScrollTrigger);
let container = document.getElementById("content");
var section = document.querySelectorAll(".section")

ScrollTrigger.matchMedia({
"(max-width: 992px)": function() {
scrollTween.kill();
cbrandsec.kill();


  },
      });

 var scrollTween = gsap.to(container, {
        x: () =>
          -(container.scrollWidth - document.documentElement.clientWidth) +
          "px",
        ease: "none",
        scrollTrigger: {
          trigger: container,
          invalidateOnRefresh: true,
          pin: true,
          scrub: 2,
          end: () => "+=" + container.offsetWidth,
        },
      });

var textTl = gsap.timeline({
  scrollTrigger: {
    containerAnimation: scrollTween,
    trigger: '.section3',
    toggleActions: "play pause none reset",
    // markers: true,
    start: "left 30%",
    end: "+=1900",
    scrub: 3, 
  }
})  


textTl.addLabel("Big Text Animation on Scroll")
.from(".ideatext .first", {ease: "power1.out", x:'+=200'},0)
.to(".ideatext .second img", {ease: "power1.out", x:"-=250"},0)
.to(".ideatext .third", {ease: "power1.out", x:"-=300"},0)

var bannerTl = gsap.timeline({
  scrollTrigger: {
    containerAnimation: scrollTween,
    trigger: '.section4',
    scrub:2,
    start:'50% right',
    end: "right left",
  }
})

bannerTl.fromTo('.image-carousel .banner', { x: 100 , ease:"none"}, {x: -100, ease:"none"})

gsap.from(".section-inner, .offtext, .offdetail, .offimg", {
  
  xPercent: 100,
  ease: "power1.out",
  stagger: 0.25,
  duration:1,

  scrollTrigger: {
    containerAnimation: scrollTween,
    trigger: ".about",
    toggleActions: "play pause none reverse",
    start: "left 70%",
    // markers:true
  }
});


gsap.from(".section-content, .peragraph-content", {
  yPercent: 150,
  autoAlpha:0,
  duration:2,
  ease: "power4.out",
  stagger: 1,
  scrollTrigger: {
    containerAnimation: scrollTween,
    trigger: ".up",
    toggleActions: "play pause none reset",
    start: "left right",
  }
});



gsap.to(".white-bg",{
  scaleX: 0,
  duration: 1,
  ease: "power1.in"
});
gsap.from(".first-img",{
  scale: 1.5,
  duration: 2,
  ease: "power1.out"
});

$('.image-carousel').slick({
  dots: true,
  infinite: true,
  speed: 200,
  fade: true,
  autoplay:true,
  arrows:false,
  cssEase: 'ease-in-out',
});



const items = document.querySelectorAll('.c-brand-list_item')
const image = document.querySelector('.c-brand-img')

items.forEach((el) => {
  el.addEventListener('mouseover', (e) => {
    imageData = e.target.getAttribute('data-image')
    console.log(imageData)
    e.target.style.zIndex = 99
    gsap.to(e.target, {color: 'white'},0)
    gsap.to(image, { backgroundImage: "url(" + imageData + ")", autoAlpha:1},0)
  })
  
  el.addEventListener('mouseleave', (e) => {
    e.target.style.zIndex = 1
    gsap.to(e.target, {color: 'black'},0)
    gsap.to(image, {autoAlpha:0},0)
  })
})

// Offer Button

linkObj = $(".big-button, .mustBtn");
var posx = linkObj.width()/2;
var posy = linkObj.height()/2;
var colObj = $(".hover-big-btn");
var btnContent = $(".btn-text")
linkObj.mousemove(function(e){
  var X = e.pageX - $(this).offset().left;
  var Y = e.pageY- $(this).offset().top;

  let btnTl = gsap.timeline({ duration: 1});

  btnTl.addLabel("start btn animation")
  .to(linkObj, { x: (X - posx)/2, y: (Y - posy)/2,scale: .9, duration: 1.5 },0)
  .from(colObj, {x: (X - posx)/2, y: (Y - posy)/2, duration: 1},0)
  .to(colObj, { scale:1.5 , x: 0, y: 0},0)
  .to(btnContent, {x: (-X + posx)/6, y: (-Y + posy)/6, color: '#000'},0)

  console.log(X, e.pageX, $(this).offset().left)
  console.log(Y, e.pageY- $(this).offset().top, $(this).offset().top)
});
linkObj.mouseout(function(e){
  var X = e.pageX - $(this).offset().left;
  var Y = e.pageY- $(this).offset().top;
  let btnTl = gsap.timeline({ duration: 1});

  btnTl.addLabel("stop btn animation")
  .to(linkObj, { x: 0, y: 0, color:'#fff', scale:1 , duration: 1.5},0)
  .to(colObj, { scale:0, x: (X - posx) * 1.15, y: (Y - posy) * 1.15 },0)
  .to(btnContent, {x:0, y: 0, color: '#fff'},0)
})

var cbrandsec = gsap.from('.c-brand-list_item',{
    xPercent: 50,
    autoAlpha:0,
    stagger: .2,
    duration:1, 
  scrollTrigger: {
    containerAnimation: scrollTween,
    trigger: '.section.imagechange',
    start: "left 90%",
    // end: "left 20%",
    toggleActions: "play pause none reverse",
    pinSpacing: false,
    // markers: true
  }
})

var textbrand = document.querySelector(".brand-name");

let tl2 = gsap.timeline();
tl2.to(".brand-name", {
  y:textbrand.offsetWidth,
  repeat:-1,
  duration:8,
  ease:'linear',
})

 // ------------------------------- 
    // ---- Scroll Direction JS ------ 

var scrollableElement = document.body; //document.getElementById('scrollableElement');
scrollableElement.addEventListener('wheel', checkScrollDirection);

function checkScrollDirection(event) {
  if (checkScrollDirectionIsUp(event)) {
    tl2.reverse()
    console.log('UP', textbrand.offsetWidth);
    // console.log(textbrand.width);
  } else {

    tl2.play()
    console.log('Down');
  }
}

function checkScrollDirectionIsUp(event) {
    if (event.wheelDelta) {
      return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
  }
 


gsap.from(".brand-bigimg, .brand-small",{
  scale: 1.2,
  duration: 1,
  ease: "power1.out",
  scrollTrigger:{
    trigger: ".branding-sec",
     containerAnimation: scrollTween,
  }
});


gsap.from(".location, .shopbtn, .detail-brand p" , {
  yPercent: 150,
  autoAlpha:0,
  duration:1.5,
  ease: "power4.out",
  stagger: 0.5,
  scrollTrigger: {
    containerAnimation: scrollTween,
    trigger: ".detail-brand ",
    toggleActions: "play pause none reset",
    start: "left right",
  }
});

