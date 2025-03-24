

$(function(){

    // For Sticky Header

    var header = $(".header");

    $(window).scroll(function(){

        var scrollmin = $(this).scrollTop();

        if(scrollmin > 0) {
            header.addClass("sticky");
        } else {
            header.removeClass("sticky");
        }

    })

})


var tween = new TimelineMax({});
// init controller
var controller = new ScrollMagic.Controller({});

tween.to(".half-circle", 6,{ease: Elastic.easeOut, x: 0, rotation: 0, y:'50%'},1 , '<')
tween.to(".circle-yellow", 6,{ease: Elastic.easeOut, x: 0, rotation: 0, y:'40%'}, 1, '<')
tween.to(".orng-circle", 2,{ease: Bounce.easeOut, y :"40%",easeParams:[4]},1, '<')
tween.to(".qurtr-circle", 6,{ease: Elastic.easeOut, x: 0, rotation: 0, y:'19%'},1.2, '<')
tween.to(".face-block-img", 6,{ease: Back.easeOut, x: 0, rotation: 360, y:'19%'},1.1,'<' )

var tween2 = new TimelineMax({});

tween2.to(".half-circle", 6,{ease: Elastic.easeOut, x: window.innerWidth/2, rotation: 120, y:'50%'},'<')
tween2.to(".circle-yellow", 6,{ease: Elastic.easeOut, x: '-200%', rotation: 90, y:'0%'},'<')
tween2.to(".orng-circle", 6,{ease: Elastic.easeOut, x: 0, rotation: 90, y:'40%'},'<')
tween2.to(".qurtr-circle", 6,{ease: Elastic.easeOut, x: window.innerWidth, rotation: 90, y:'19%'},'<')
tween2.to(".face-block-img", 6,{ease: Elastic.easeOut, x: 0, rotation: 360, y:-window.innerHeight - 200},'<')


// create a scene
new ScrollMagic.Scene({
    triggerElement: ".banner",
    duration: 0, // the scene should last for a scroll distance of 100px
    triggerHook:.5,
    reverse: true
})
.setTween(tween) // pins the element for the the scene's duration
.addTo(controller);

// create a scene
new ScrollMagic.Scene({
    triggerElement: "#sec3",
    duration: 0, // the scene should last for a scroll distance of 100px
    offset: 100, // start this scene after scrolling for 50px
    triggerHook:.2,
    reverse: true
})
.setTween(tween2) // pins the element for the the scene's duration
.addTo(controller);


var timeline2 = new TimelineMax({});
// init controller
var controller = new ScrollMagic.Controller();


            // .add(TweenMax.to(".half-circle", 1, {rotation: 90, left: '80%'}),)
            // .add(TweenMax.to(".circle-yellow", 1, {rotation: 90, top: '-10%' , top: '0%', left: '-10%'}),)

timeline2
.from(".horn-line1",3,{ x: window.innerWidth/2, rotation: 120, y:'50%'},0.2)
.from(".horn-line2",3,{ x: 500, rotation: 90, y:'-50%'},0.2)
.from(".horn-line3",3,{ x: 500, rotation: 90, y:'-40%'},0.2)
.from(".horn-ylw-trng",3,{ x:-1000, rotation: 90, y:'-50%' },0.2)
.from(".horn-orng-cir",3,{ scale: 0, opacity:0},0.2)
.from(".horn-qurtr-cir",3,{ x: 500, rotation:90, y: 50},0.2)

timeline2
.to(".horn-line1",3,{ ease: Elastic.easeOut, x: 0, rotation: 0, y:0},0.2)
.to(".horn-line2",3,{ease: Elastic.easeOut, x: 0, rotation: 0, y:0},0.2)
.to(".horn-line3",3,{ease: Elastic.easeOut, x: 0, rotation: 0, y:0},0.2)
.to(".horn-ylw-trng", 3,{ease: Elastic.easeOut, x: 0, rotation: 0, y:0 },0.2)
.to(".horn-orng-cir",3,{ease: Elastic.easeOut, scale: 1, opacity:1},0.2)
.to(".horn-qurtr-cir",3,{ease: Elastic.easeOut, x: 0, rotation:0, y: 0},0.2)


// create a scene
new ScrollMagic.Scene({
    triggerElement: "#sec5",
    duration: 0, // the scene should last for a scroll distance of 100px
    offset: 100, // start this scene after scrolling for 50px
    triggerHook:.8,
})
.setTween(timeline2) // pins the element for the the scene's duration
.addTo(controller);

var content = $(".fade-in");

content.each(function(){

    var revealtween = TweenMax.from($(this), 1 , {autoAlpha:0, y: 200, ease: Power4.easeInOut})

    var scene = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook:.9,
    }).setTween(revealtween)
    .setPin($(this).parent("section"))
    .addTo(controller)
})


var rocket = new TimelineMax({ yoyoEase: true, yoyo: true});

rocket
.from(".rocket-traingle",3,{ x: -300, rotation: 60, y:-560},0)
.from(".rocket-orng-box",3,{ x: 500, rotation: 90, y:'-50%'},0)
.from(".rocket-circ-orng",3,{ x:-1000, rotation: 90, y:'-50%' },0)
.from(".rocket-traingle-sm",3,{ x:-1000},0)
.from(".rocket-traingle-sm-skew",3,{ x: 500, rotation:90, y: 50},0)
.from(".rocket-line3",3,{ x: 500, x: 500},0)
.from(".rocket-line1",3,{ x: 500, rotation:90, y: 50},0)
.from(".rocket-line2",3,{ x: 500, rotation: 90, y:'-40%'},0)

rocket
.to(".rocket-part",3,{ ease: Elastic.easeOut, x: 0, rotation: 0, y:0},.02)

// create a scene
new ScrollMagic.Scene({
    triggerElement: ".featured", // the scene should last for a scroll distance of 100px
    offset: 100, // start this scene after scrolling for 50px
    triggerHook:.2,
}).reverse(true)
.setTween(rocket) // pins the element for the the scene's duration
.addTo(controller);

// var byeImg = $(".bye-img")

// var textMove = TweenMax.fromTo(byeImg, 1 ,{xPercent:-234}, {xPercent:100});



new ScrollMagic.Scene({
    triggerElement: ".big",
    duration:2000,
    triggerHook:0,

}).setTween(textMove)
.setPin('.fixedlelement')
.addTo(controller)















