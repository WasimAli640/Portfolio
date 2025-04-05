gsap.registerPlugin(ScrollTrigger);

let locoScroll = new LocomotiveScroll({
  el:document.getElementById("smoothScrollContainer"),
  smooth:true,
});

// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);
// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#smoothScrollContainer", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
   // we don't have to define a scrollLeft because we're only scrolling vertically.
   getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#smoothScrollContainer").style.transform ? "transform" : "fixed"
  });

$(document).ready(function(){
  let sl =  gsap.timeline({});
sl.addLabel("load-animation")
.from('.f-xl .xl-inner span', {y:'100%', stagger:.15 , duration: 1.5, ease: 'back.out(1,0.5)'},0)
.to('.f-xl .xl-inner span', {y:0})
.from('.s-xl .xl-inner span', {y:'100%', stagger:.15 , duration: 1.5, ease: 'back.out(1,0.5)'},0)
.to('.s-xl .xl-inner span', {y:0})
.from('.left-b-block .line .word', {y:100, ease: 'back.out', stagger:.1, duration: 1.5},0)
.to('.left-b-block .line .word', {y:0})
.to('.big-button', {opacity: 1, duration: 1},0.5)
})



let tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: ".banner",
      scroller: "#smoothScrollContainer",
      pin: true,  // pin the trigger element while active
      start: "top top", // when the top of the trigger hits the top of the viewport
      end: "+=1200", // end after scrolling 500px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    },
  });

tl.addLabel("start")
.to('.f-xl', { x: '-85%' },0)
.to('.s-xl', { x: '80%'},0)
.to('.left-b-block .line', {y:'-=38'},0)
.from('.right-b-block', {opacity:1, autoAlpha:1},0)
.to('.right-b-block', {opacity:0, autoAlpha:0},0)
.to('.obj3d', {z:'+=1000', rotationY: 180, opacity:0, duration:1},0)

linkObj = $(".big-button");
var posx = linkObj.width()/2;
var posy = linkObj.height()/2;
var colObj = $(".hover-big-btn");
var btnContent = $(".btn-icon")
var btnIcon = $(".btn-icon svg path");
linkObj.mousemove(function(e){
  var X = e.pageX - $(this).offset().left;
  var Y = e.pageY- $(this).offset().top;

  let btnTl = gsap.timeline({ duration: 1});

  btnTl.addLabel("start btn animation")
  .to(linkObj, { x: (X - posx)/2, y: (Y - posy)/2, color:'#000', scale: .9, duration: 1 },0)
  .from(colObj, {x: (X - posx)/2, y: (Y - posy)/2, duration: 1},0)
  .to(colObj, { scale:2 , x: 0, y: 0},0)
  .to(btnContent, {x: (-X + posx)/6, y: (-Y + posy)/6},0)
  .to(btnIcon, { stroke: '#000'},0)

  console.log(X, e.pageX, $(this).offset().left)
  console.log(Y, e.pageY- $(this).offset().top, $(this).offset().top)
});


linkObj.mouseout(function(e){
  var X = e.pageX - $(this).offset().left;
  var Y = e.pageY- $(this).offset().top;
  let btnTl = gsap.timeline({ duration: 1});

  btnTl.addLabel("stop btn animation")
  .to(linkObj, { x: 0, y: 0, color:'#fff', scale:1 , duration: 1},0)
  .to(colObj, { scale:0, x: (X - posx) * 1.15, y: (Y - posy) * 1.15 },0)
  .to(btnContent, {x:0, y: 0},0)
  .to(btnIcon, { stroke: '#fff'},0)
})

$(window).mousemove(function(e){
  var obj3D = $(".obj3d");
  objWidth = obj3D.width();
  objHeight = obj3D.height();
  var xPos = (e.clientX/$(window).width()-.555);
  var yPos = (e.clientY/$(window).height()-.255);
  gsap.to(obj3D, { rotationX: yPos * 80, x: xPos,y: yPos, duration:1})
})


let sec2Tl = gsap.timeline({
  scrollTrigger: {
    trigger: '#sectionTwo',
    scroller: "#smoothScrollContainer",
    pin:true,
    // pinSpacing: true,
    scrub:1,
    start: 'top top',
    end: '+=5000',
  }
});

sec2Tl.addLabel("section two animation start")
.to(".gallery-box1 .project-img", { z: '+=1000', y: 200,x: '-320%', opacity: '+=2' , stagger: .3,ease: 'linear.none'   })
.to(".gallery-box2 .project-img", { z: '+=1000', y: 200,x: '320%', opacity: '+=2' , stagger: .3 ,ease: 'linear.none' },0.15)
.to(".b-project-gallery", { autoAlpha:1, opacity:1,duration: .05 },0)
.to(".b-project-gallery", { autoAlpha:0, opacity:0, duration: .04},1.7)
.to(".rmb-btn-archive .rmb-btn", { scale:1, autoAlpha:1, opacity:1, duration: .1 },1.75)

var rombusBtn = $(".rmb-btn");
var romColorObj = $(".hover-rom-btn-i span")
var rombtnInner = $(".rmb-btn-inner");
rombusBtn.mousemove(function(p){
  var Posx = rombusBtn.width()/2;
  var Posy = rombusBtn.height()/2;
  var X = p.pageX - $(this).offset().left;
  var Y = p.pageY - $(this).offset().top;
  let btnTl = gsap.timeline({duration:2});
  console.log(p.pageY ,$(this).offset().top ,Posy)

  btnTl.addLabel("start btn animation")
  .to(rombusBtn, { x: (X - Posx)/3, y: (Y - Posy)/3,color: '#000' },0)
  .to(rombtnInner, { x: (-X + Posx)/4, y: (-Y + Posy)/4},0)
  .from(romColorObj, { x: X - Posx , y: Y - Posy, duration:2},0)
  .to(romColorObj, { scale:2 , x: 0 , y: 0},0)
  .to(btnIcon, { stroke: '#000'},0)
});
rombusBtn.mouseout(function(p){
  var Posx = rombusBtn.width()/2;
  var Posy = rombusBtn.height()/2;
  var X = p.pageX - $(this).offset().left;
  var Y = p.pageY - $(this).offset().top;
  let btnTl = gsap.timeline({duration:2});
  console.log('mouseout' + p.pageY ,$(this).offset().top ,Posy)

  btnTl.addLabel("start btn animation")
  .to(rombusBtn, { x: 0, y: 0, color: '#fff' },0)
  .to(rombtnInner, { x: 0, y: 0},0)
  .to(romColorObj, {scale: 0, x: (X - Posx)*1.5, y: (Y - Posy)*1.5},0)
  .to(btnIcon, { stroke: '#fff'},0)
});

// var mm = gsap.matchMedia();

// mm.add("(max-width: 992px", () => {
//   sec2Tl.kill();
// })

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();